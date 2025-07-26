const ProductService = require('../service/productService')
const Apirespone = require('../utils/ApiResponse')

class ProductController {
async getAllProduct(req,res){
     try {
        const result = await ProductService.getAllProduct();
        return Apirespone.success(res, 'Get All Product Successful', result);
    } catch (error) {
        return Apirespone.error(res, error.message, 401);
    }
}

async getProductByID(req,res){
 try {
    const { id } = req.params;
    const result = await ProductService.getProductByID(id);
      return Apirespone.success(res, 'Get Product By ID Successful', result);
    } catch (error) {
      return Apirespone.error(res, error.message, 401);
    }

}

async createProduct(req,res){

    try {
      const { name, sku, description, price } = req.body;
      const result = await ProductService.createProduct(name, sku, description, price);
      return Apirespone.success(res, 'Create Product Successful', result);
    } catch (error) {
      return Apirespone.error(res, error.message, 401);
    }

}


async updateProduct(req,res){
  try {
        const { name, sku, description, price } = req.body;
        const{id} = req.params;
        const result = await ProductService.updateProduct(id,name,sku,description,price);
        return Apirespone.success(res, 'Update Product Successful', result);
      } catch (error) {
        return Apirespone.error(res, error.message, 401);
      }
}

async deleteProduct(req,res){
  try {
          const{id} = req.params;
          const result = await ProductService.deleteProduct(id);
          return Apirespone.success(res, 'Delete Product Successful',{});
      } catch (error) {
          return Apirespone.error(res, error.message, 401);
      }
}


}
module.exports = new ProductController();