const comm = require('./shell');
const Server = require('../model/os');

let hostname = comm.shell.exec('hostname');
let os = comm.shell.exec('cat /etc/redhat-release');
let kernel = comm.shell.exec('uname -r');
let uptimeInfo = comm.shell.exec('uptime');
let uptime = uptimeInfo.substr(12, 5);

let server = new Server(hostname, os, kernel, uptime);
module.exports = server;