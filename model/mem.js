class Mem{
    constructor(total, used, uesdPer, swap_total, swap_used, swap_usedPer){
        this.total = total;
        this.used = used;
        this.uesdPer = uesdPer;
        this.swap_total = swap_total;
        this.swap_used = swap_used;
        this.swap_usedPer = swap_usedPer;
    }

    set total(value){
        this._total = value;
    }
    set used(value){
        this._used = value;
    }
    set uesdPer(value){
        this._uesdPer = value;
    }
    set swap_total(value){
        this._swap_total = value;
    }
    set swap_used(value){
        this._swap_used = value;
    }
    set swap_usedPer(value){
        this._swap_usedPer = value;
    }

    get total(){
        return this._total;
    }
    get used(){
        return this._used;
    }
    get usedPer(){
        return this._uesdPer;
    } 
    get swap_total(){
        return this._swap_total;
    } 
    get swap_used(){
        return this._swap_used;
    } 
    get swap_usedPer(){
        return this._swap_usedPer;
    }     

    toString(){
        console.log('');
        console.log('[MEM]');
        console.log('total(MB) : ' + this._total 
        + 'used(MB) : ' + this._used 
        + 'used% : ' + this.uesdPer + "\n"
        + 'swap total (MB) : ' + this._swap_total
        + 'swap used (MB) : ' + this._swap_used
        + 'swal used% : ' + this._swap_usedPer
        );
    }

}

module.exports = Mem;