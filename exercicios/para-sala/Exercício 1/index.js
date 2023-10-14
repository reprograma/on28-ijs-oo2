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

    set quantity(newQuantity) {
        this.#quantity = newQuantity
    }

    get unitPrice() {
        return this.#unitPrice;
    }

    set unitPrice(newUnitPrice) {
        this.#unitPrice = newUnitPrice
    }

    get total() {
        return this.unitPrice * this.#quantity;
    }

    toString() {
        console.log(`id: ${this.#id}, descrição: ${this.description}, quantidade: ${this.#quantity}, valor unitário: $${this.#unitPrice}, valor total: $${this.total.toFixed(2)}`);
    } 
}     


const carrinho1 = new InvoiceItem ("12458", "computador", 10, 2545.99)
console.log(carrinho1.id);
console.log(carrinho1.description);
console.log(carrinho1.total);
carrinho1.toString()
