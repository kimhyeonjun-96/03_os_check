const comm = require('./shell');
const Mem = require('../model/mem');


/* mem */
let mem_total = comm.shell.exec(`free -m | awk '/^Mem/ {print $2}'`);
let mem_used = comm.shell.exec(`free -m | awk '/^Mem/ {print $3}'`)
let mem_available= comm.shell.exec(`free -m  | awk '/^Mem/ {print $7}'`);
let mem_usedPer = ((mem_total - mem_available) / mem_total) * 100;

/* swap */
let swap_total = comm.shell.exec(`free -m | awk '/^Swap/ {print $2}'`)
let swap_used = comm.shell.exec(`free -m | awk '/^Swap/ {print $3}'`)
let swap_usedPer = ((swap_total - swap_used)/ swap_total) * 100;

let mem = new Mem(mem_total, mem_used, mem_usedPer.toFixed(2), swap_total, swap_used, swap_usedPer.toFixed(2));
// mem.toString();

module.exports = mem;
/* 
1. top -n1 | grep Mem
    t-u-b/t*100
    65.89

2. free -m
    t-u-b/t*100
    51
    39.89

    t-a/t*100 (RHEL7,8)
    58.68

    swap 
    2047 M
    433 M
    t-u/t*100


3. sar -r 1
    87.01

4. cat /proc/meminfo | grep Mem
    t-a/t*100
    80.93
    46.37

*/