var res = {'data':'HTTP/1.1 200 OK\x0aServer: gunicorn/20.0.4\x0aDate: Sat, 14 Dec 2019 15:10:12 GMT\x0aConnection: close\x0aContent-Type: text/html; charset=utf-8\x0aX-Frame-Options: SAMEORIGIN\x0aVary: Cookie\x0aContent-Length: 2718\x0aSet-Cookie: csrftoken=Pj84sPbRWnIIGFgoLlygjuBMxS3v3772OjbOl999odLXfpJugsT5jZqrBVXvypCL; expires=Sat, 12 Dec 2020 15:10:12 GMT; Max-Age=31449600; Path=/; SameSite=Lax\x0a\x0a\x3c!DOCTYPE html\x3e\x0a\x3chtml lang=\x22en\x22\x3e\x0a\x3chead\x3e\x0a  \x3cmeta charset=\x22UTF-8\x22\x3e\x0a  \x3cmeta name=\x22viewport\x22 content=\x22width=device-width, initial-scale=1.0\x22\x3e\x0a  \x3cmeta http-equiv=\x22X-UA-Compatible\x22 content=\x22ie=edge\x22\x3e\x0a  \x3ctitle\x3eBank\x3c/title\x3e\x0a  \x3clink rel=\x22stylesheet\x22 href=\x22https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\x22 integrity=\x22sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\x22 crossorigin=\x22anonymous\x22\x3e\x0a\x0a  \x3cstyle\x3e\x0a    .main-header {\x0a      display: flex;\x0a      flex-direction: row;\x0a      align-items: flex-end;\x0a    }\x0a\x0a    .main-header a {\x0a      text-decoration: none;\x0a      color: #fab;\x0a      font-size: 50px;\x0a      margin-right: 20px;\x0a    }\x0a  \x3c/style\x3e\x0a\x0a\x3c/head\x3e\x0a\x3cbody\x3e\x0a\x0a  \x3cdiv class=\x22container\x22\x3e\x0a    \x3cheader class=\x22main-header\x22\x3e\x0a      \x3ca href=\x22/\x22\x3e\x0a        \x3cspan class=\x22glyphicon glyphicon-piggy-bank\x22 aria-hidden=\x22true\x22\x3e\x3c/span\x3e\x0a      \x3c/a\x3e\x0a      \x3ch1\x3e\x0a        Super secure banking app!!!!!!\x0a      \x3c/h1\x3e\x0a    \x3c/header\x3e\x0a    \x0a\x3cform method=\x22post\x22\x3e\x0a    \x3cinput type=\x22hidden\x22 name=\x22csrfmiddlewaretoken\x22 value=\x229Wua700ZD6Y8TakAjto3CgYTMnnrJ6pJ8WxU0kYh5W1nsUNGOAJSCLNyQqhreoUs\x22\x3e\x0a    \x0a      \x3cp\x3e\x0a        \x3clabel for=\x22id_username\x22\x3eUsername:\x3c/label\x3e\x3cbr\x3e\x0a        \x3cinput type=\x22text\x22 name=\x22username\x22 value=\x22Smith\x22 maxlength=\x22150\x22 autofocus required id=\x22id_username\x22\x3e\x0a        \x0a          \x3csmall style=\x22color: grey\x22\x3eRequired. 150 characters or fewer. Letters, digits and @/./+/-/_ only.\x3c/small\x3e\x0a        \x0a        \x0a      \x3c/p\x3e\x0a    \x0a      \x3cp\x3e\x0a        \x3clabel for=\x22id_email\x22\x3eEmail:\x3c/label\x3e\x3cbr\x3e\x0a        \x3cinput type=\x22email\x22 name=\x22email\x22 value=\x22skipfish@example.com\x22 maxlength=\x22254\x22 required id=\x22id_email\x22\x3e\x0a        \x0a          \x3csmall style=\x22color: grey\x22\x3eRequired. Inform a valid email address.\x3c/small\x3e\x0a        \x0a        \x0a      \x3c/p\x3e\x0a    \x0a      \x3cp\x3e\x0a        \x3clabel for=\x22id_password1\x22\x3ePassword:\x3c/label\x3e\x3cbr\x3e\x0a        \x3cinput type=\x22password\x22 name=\x22password1\x22 required id=\x22id_password1\x22\x3e\x0a        \x0a          \x3csmall style=\x22color: grey\x22\x3e\x3cul\x3e\x3cli\x3eYour password can&#39;t be too similar to your other personal information.\x3c/li\x3e\x3cli\x3eYour password must contain at least 8 characters.\x3c/li\x3e\x3cli\x3eYour password can&#39;t be a commonly used password.\x3c/li\x3e\x3cli\x3eYour password can&#39;t be entirely numeric.\x3c/li\x3e\x3c/ul\x3e\x3c/small\x3e\x0a        \x0a        \x0a      \x3c/p\x3e\x0a    \x0a      \x3cp\x3e\x0a        \x3clabel for=\x22id_password2\x22\x3ePassword confirmation:\x3c/label\x3e\x3cbr\x3e\x0a        \x3cinput type=\x22password\x22 name=\x22password2\x22 required id=\x22id_password2\x22\x3e\x0a        \x0a          \x3csmall style=\x22color: grey\x22\x3eEnter the same password as before, for verification.\x3c/small\x3e\x0a        \x0a        \x0a          \x3cp style=\x22color: red\x22\x3eThe password is too similar to the email address.\x3c/p\x3e\x0a        \x0a      \x3c/p\x3e\x0a    \x0a    \x3cbutton type=\x22submit\x22 class=\x22btn btn-primary\x22\x3eRegister\x3c/button\x3e\x0a  \x3c/form\x3e\x0a\x0a  \x3c/div\x3e\x0a  \x0a\x3c/body\x3e\x0a\x3c/html\x3e'}