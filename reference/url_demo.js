const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// host (root domain)
console.log(myUrl.host);
// hostname (does not get port)
console.log(myUrl.hostname);
// path name
console.log(myUrl.pathname);
