const Excel = require('exceljs');

let os = require('./resource/os');
let cpu = require('./resource/cpu');
let mem =  require('./resource/mem');
let disk = require('./resource/disk');


// OS 
console.log('');
let hostname = os.hostname;
let version = os.os;
let kernel = os.kernel;
let uptime = os.uptime;
console.log('');

// CPU 
let model = cpu.model;
// let core = cpu.core;
let usage = cpu.usage;
console.log('');

// MEMORY
let total = mem.total;
let used = mem.used;
let usedPer = mem.usedPer;
let swapT = mem.swap_total;
let swapU = mem.swap_used;
let swapUP = mem.swap_usedPer;
console.log('');

let today = new Date();

/*  엑셀파일 생성 
    필요작업 : npm i exceljs
*/ 
const wb = new Excel.Workbook();

wb.creator = '김현준';
wb.lastModifiedBy = '김현준';
wb.created = new Date();
wb.modified = new Date();

const ws = wb.addWorksheet(`${hostname}_checkList`);
const data = [
    {headers: "hostname", value: [hostname], width: 50},
    {headers: "version", value: [version], width: 200},
    {headers: "kernel", value: [kernel], width: 200},
    {headers: "uptime", value: [uptime], width: 50},
    {headers: "cpu_model", value: [model], width: 200},
    // {headers: "cpu_core", value: [cpu._core]},
    {headers: "cpu_usage(%)", value: [usage], width: 50},
    {headers: "mem_total(MB)", value: [total], width: 50},
    {headers: "mem_used(MB)", value: [used], width: 50},
    {headers: "mem_used(%)", value: [usedPer], width: 50},
    {headers: "swap_total(MB)", value: [swapT], width: 50},
    {headers: "swap_used(MB)", value: [swapU], width: 50},
    {headers: "swap_used(%)", value: [swapUP], width: 50},
    {headers: "80 over disk", value: [disk], width: 400}
]

data.forEach((data, i) => {
    ws.getColumn(i + 1).values = [data.headers, data.value.toString()];
})

wb.xlsx.writeFile(`./check_${today.getFullYear()}_${today.getMonth()+1}_${today.getDate()}.xlsx`);