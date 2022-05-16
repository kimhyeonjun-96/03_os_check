class Os{
    
    constructor(hostname, os, kernel, uptime){
        this.hostname = hostname;
        this.os = os;
        this.kernel = kernel;
        this.uptime = uptime;
    };
    
    get hostname(){
        return this._hostname;
    };
    get os(){
        return this._os;
    };
    get kernel(){
        return this._kernel;
    };
    get uptime(){
        return this._uptime;
    };

    set hostname(value){
        this._hostname = value;
    }
    set os(value){
        this._os = value;
    }
    set kernel(value){
        this._kernel = value;
    }
    set uptime(value){
        this._uptime = value;
    }
    toString(){
        console.log();
        console.log('[OS]');
        console.log('hostname : ' + this._hostname + 'os : ' + this._os + 'kernel : ' + this._kernel + 'uptime : ' + this._uptime);   
    };
}

module.exports = Os;