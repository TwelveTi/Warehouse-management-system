const db = require('../models');


class ProductService{

    async getAllProduct(){
        const product = await db.Product.findAll({
        attributes: ['name', 'sku', 'description', 'price']  // CHỈ lấy các field này
            });
        return product;
    }

    async getProductByID(id){
        const product= await db.Product.findOne({ where: { id: id } })
        if (!product) throw new Error('product does not exist');


        return product;
    }

    async createProduct(name, sku, description, price){
        const product = await db.Product.findOne({ where: { name } });
        if (product) throw new Error('product already exists');
        const newProduct = await db.Product.create({
            name,
            sku,
            description,
            price
        });

        const safeProduct ={
            name : newProduct.name,
            sku : newProduct.sku,
            description : newProduct.description,
            price: newProduct.price
        }
        return safeProduct;
    }

    async updateProduct(id,name,sku,description,price){
        const product = await this.getProductByID(id);
        if(name) product.name = name;
        if(sku) product.sku = sku;
        if(description) product.description = description;
        if(price) product.price = price;

        await product.save();

       const safeProduct = {
            name: product.name,
            sku: product.sku,
            description: product.description,
            price: product.price
        }
        return safeProduct;
    }

    async deleteProduct(id){
        const product = await this.getProductByID(id);
        await product.destroy();
    }
}
module.exports = new ProductService();