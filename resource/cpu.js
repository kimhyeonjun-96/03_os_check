const comm = require('./shell');
const Cpu = require('../model/cpu');

let cpu_model = comm.shell.exec(`echo $(lscpu | awk 'BEGIN { IGNORECASE = 1 } /^model name/ { for(i=3; i<=NF; i++) printf $i " " }') `);
let cpu_core = comm.shell.exec(`echo $(lscpu | awk 'BEGIN { IGNORECASE = 1 } /^cpu\(s\)/ { print $2 }') `);
comm.shell.exec(`echo test`);
let cpu_usage = comm.shell.exec(`echo $(top -b -n 1 | head -n 3 | grep -iE 'Cpu' | awk -F',' '{ i = $4 ; split(i,a," ") ; print 100 - a[1] }') `);

let cpuInfo = new Cpu(cpu_model, cpu_core, cpu_usage);

// cpuInfo.toString();

module.exports = cpuInfo;