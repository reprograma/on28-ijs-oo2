class Person{
    name;
    #cpf;
    
    static clients = [];

    constructor(name, cpf){
        this.name = name;
        this.#cpf = cpf;
    }

    get cpf(){
        return this.#cpf;
    }

}

module.exports = { Person }