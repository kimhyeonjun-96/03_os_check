const comm = require('./shell');
const Disk = require('../model/disk')


let diskInfo = [comm.shell.exec(`df -Th | awk '$2 !~ /.*tmpfs.*/ { split($6,arr,"%") ; if ( arr[1] >= 10 ) print $0 }'`).split('\n')];
let disk = new Disk(diskInfo);
disk.returnDisk();

diskList = disk._returnDiskList;

module.exports = diskList;