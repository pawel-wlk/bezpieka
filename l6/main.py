from decryptor import Decryptor


def main():
    with open('data.txt', 'r') as file:
        dec = Decryptor(file.read())

    print(dec.decrypt())


if __name__ == '__main__':
    main()