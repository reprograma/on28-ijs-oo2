class InvoiceItem {
    #id;
    #description;
    #quantity;
    #unitPrice;

    constructor(id, description, quantity, unitPrice) {
        this.#id = id;
        this.#description = description;
        this.#quantity = quantity;
        this.#unitPrice = unitPrice;
    }

    get id() {
        return this.#id;
    }

    get description() {
        return this.#description;
    }


    get quantity() {
        return this.#quantity;
    }


    //método void não retorna nada
    set quantity(newQuantity) {
      this.#quantity = newQuantity;
    }


    get unitPrice() {
        return this.#unitPrice;
    }

    set unitPrice(newUnitPrice) {
        this.unitPrice = newUnitPrice;
    }

    get total(){
      return  this.#unitPrice * this.#quantity
    }

   
    //método toString() significa que
     //retorne no console

     toString(){
        console.log(`id: ${this.#id}, descrição: ${this.#description}, quantidade: ${this.#quantity}
        valor unitário: ${this.#unitPrice}, valor total: ${this.total}
        
        
        `)
   
    }

}

const carrinho =  new InvoiceItem("12345", 'computador', 10, 1999.99)
console.log(carrinho) //InvoiceItem {}
console.log(carrinho.id) //12345
console.log(carrinho.description) //computador
console.log(carrinho.total) //19999.9
carrinho.toString() /* 
id: 12345, descrição: computador, quantidade: 10
valor unitário: 1999.99, valor total: 19999.9
*/

