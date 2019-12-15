var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8000/', 'dir': '_m0/0', 'linked': 2, 'len': 1331 },
    { 'url': 'http://localhost:8000/accounts/login/', 'dir': '_m0/1', 'linked': 5, 'len': 1442 },
    { 'url': 'http://localhost:8000/accounts/login/', 'dir': '_m0/2', 'linked': 5, 'len': 1592 },
    { 'url': 'http://localhost:8000/admin/login/', 'dir': '_m0/3', 'linked': 5, 'len': 1806 },
    { 'url': 'http://localhost:8000/admin/login/', 'dir': '_m0/4', 'linked': 5, 'len': 1939 },
    { 'url': 'http://localhost:8000/register', 'dir': '_m0/5', 'linked': 5, 'len': 2580 },
    { 'url': 'http://localhost:8000/register', 'dir': '_m0/6', 'linked': 5, 'len': 2857 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://localhost:8000/sfi9876', 'dir': '_m1/0', 'linked': 2, 'len': 77 },
    { 'url': 'http://localhost:8000/accounts/login/', 'dir': '_m1/1', 'linked': 5, 'len': 26 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8000/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40501, 'samples': [
    { 'url': 'http://localhost:8000/register', 'extra': 'responses for ./val and .../val look different', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://localhost:8000/register', 'extra': 'responses for .\x5cval and ...\x5cval look different', 'sid': '0', 'dir': '_i1/1' } ]
  },
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://localhost:8000/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://localhost:8000/accounts/password_reset/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://localhost:8000/register', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://localhost:8000/register', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/7' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8000/accounts/password_reset/', 'extra': '', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': 'during try list fetches', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://localhost:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8000/accounts/', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://localhost:8000/accounts/login/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i5/3' },
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i5/4' },
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i5/5' },
    { 'url': 'http://localhost:8000/accounts/password_reset/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/6' },
    { 'url': 'http://localhost:8000/accounts/password_reset/', 'extra': '', 'sid': '0', 'dir': '_i5/7' },
    { 'url': 'http://localhost:8000/accounts/password_reset/', 'extra': '', 'sid': '0', 'dir': '_i5/8' },
    { 'url': 'http://localhost:8000/admin/./', 'extra': '', 'sid': '0', 'dir': '_i5/9' },
    { 'url': 'http://localhost:8000/admin/auth/./', 'extra': '', 'sid': '0', 'dir': '_i5/10' },
    { 'url': 'http://localhost:8000/admin/auth/group/', 'extra': '', 'sid': '0', 'dir': '_i5/11' },
    { 'url': 'http://localhost:8000/admin/login/./', 'extra': '', 'sid': '0', 'dir': '_i5/12' },
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i5/13' },
    { 'url': 'http://localhost:8000/admin/login/?next=/admin/', 'extra': '', 'sid': '0', 'dir': '_i5/14' },
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i5/15' },
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i5/16' },
    { 'url': 'http://localhost:8000/admin/logout/./', 'extra': '', 'sid': '0', 'dir': '_i5/17' },
    { 'url': 'http://localhost:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i5/18' },
    { 'url': 'http://localhost:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i5/19' },
    { 'url': 'http://localhost:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i5/20' },
    { 'url': 'http://localhost:8000/register', 'extra': '', 'sid': '0', 'dir': '_i5/21' },
    { 'url': 'http://localhost:8000/register', 'extra': '', 'sid': '0', 'dir': '_i5/22' },
    { 'url': 'http://localhost:8000/register', 'extra': '', 'sid': '0', 'dir': '_i5/23' },
    { 'url': 'http://localhost:8000/register', 'extra': '', 'sid': '0', 'dir': '_i5/24' },
    { 'url': 'http://localhost:8000/register', 'extra': '', 'sid': '0', 'dir': '_i5/25' },
    { 'url': 'http://localhost:8000/register', 'extra': '', 'sid': '0', 'dir': '_i5/26' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://localhost:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i6/4' },
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i6/5' },
    { 'url': 'http://localhost:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i6/6' },
    { 'url': 'http://localhost:8000/register', 'extra': '', 'sid': '0', 'dir': '_i6/7' },
    { 'url': 'http://localhost:8000/register', 'extra': '', 'sid': '0', 'dir': '_i6/8' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8000/admin/auth/', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:8000/admin/auth/group/', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://localhost:8000/admin/logout/', 'extra': '', 'sid': '0', 'dir': '_i7/2' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:8000/accounts/login/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://localhost:8000/accounts/password_reset/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'http://localhost:8000/admin/auth/group/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/3' },
    { 'url': 'http://localhost:8000/admin/auth/group/sfi9876/', 'extra': '', 'sid': '0', 'dir': '_i8/4' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://localhost:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8000/', 'extra': 'gunicorn/20.0.4', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8000/', 'extra': 'csrftoken', 'sid': '0', 'dir': '_i11/0' } ]
  }
];

