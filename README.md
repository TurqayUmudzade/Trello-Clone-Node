# TODO

openssl req -nodes -new -x509 -keyout server.key -out server.cert
Generating a RSA private key

const https = require('https');
const fs = require('fs');
var key = fs.readFileSync(__dirname + '/certs/server.key');
var cert = fs.readFileSync(__dirname + '/certs/server.cert');
var options = {
    key: key,
    cert: cert
};
var server = https.createServer(options, app);

add this to make it https