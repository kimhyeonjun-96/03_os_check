class Cpu{
    constructor(model, core, usage){
        this.model = model;
        this.core = core;
        this.usage = usage;
    }

    set model(value){
        this._model = value;
    }
    set core(value){
        this._core = value;
    }
    set usage(value){
        this._usage = value;
    }

    get model(){
        return this._model;
    }
    get core(){
        return this._core;
    }
    get usage(){
        return this._usage;
    }

    toString(){
        console.log('');
        console.log('[CPU]');
        console.log("cpu_model : " + this._model + "cpu_core : " + this._core + "cpu_usage : " + + this._usage);
    }
}

module.exports = Cpu;