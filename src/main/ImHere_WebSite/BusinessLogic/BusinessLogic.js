class BusinessLogic {


    constructor() {

    }

    addPokimon()
    {
        this.#pokimon++;
    }

    getPokimon()
    {
        return this.#pokimon;
    }

    #pokimon =0;
}

export default BusinessLogic;