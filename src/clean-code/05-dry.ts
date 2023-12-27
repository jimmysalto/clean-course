type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductReady(): boolean {

        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) {
                        throw Error(`Property ${key} is empty`);
                    }
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) {
                        throw Error(`Property ${key} is zero`);
                    }
                    break;
                default:
                    throw Error(`Property ${key} is not supported`);
            }
        }

        return true;
    }

    toString() {
        this.isProductReady();
        return `Product: ${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product(
        'Blue Pants',
        10,
        'M',
    );
    console.log(bluePants.toString());
})();
