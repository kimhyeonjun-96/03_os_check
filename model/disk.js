class Disk{
    constructor(diskList){
        this.diskList = diskList;
        this.returnDiskList = [];
    }
    set diskList(value){
        this._diskList = value;
    }
    set returnDiskList(value){
        this._returnDiskList = value;
    }

    get diskList(){
        return this._diskList;
    }
    get returnDiskList(){
        return this.returnDiskList;
    }

    returnDisk(){
        for(let i=1; i<this.diskList[0].length-1; i++){
            this._returnDiskList.push(this._diskList[0][i]);
        }
    }
}

module.exports = Disk;