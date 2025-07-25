const UserService = require('../service/userService')
const Apirespone = require('../utils/ApiResponse')

class AuthController {
async getAllUser(req,res){
     try {
        const result = await UserService.getAllUser();
        return Apirespone.success(res, 'Get All User Successful', result);
    } catch (error) {
        return Apirespone.error(res, error.message, 401);
    }
}

async getUserByID(req,res){
 try {
    const { id } = req.params;
    const result = await UserService.getUserByID(id);
      return Apirespone.success(res, 'Get User By ID Successful', result);
    } catch (error) {
      return Apirespone.error(res, error.message, 401);
    }

}

async createUser(req,res){

    try {
      const { username, password, role } = req.body;
      const result = await UserService.createUser(username,password,role);
      return Apirespone.success(res, 'Create User Successful', result);
    } catch (error) {
      return Apirespone.error(res, error.message, 401);
    }

}


async updateUSer(req,res){
  try {
        const { username, password, role } = req.body;
        const{id} = req.params;
        const result = await UserService.updateUser(id,username,password,role);
        return Apirespone.success(res, 'Update User Successful', result);
      } catch (error) {
        return Apirespone.error(res, error.message, 401);
      }
}

async deleteUser(req,res){
  try {
          const{id} = req.params;
          const result = await UserService.deleteUser(id);
          return Apirespone.success(res, 'Delete User Successful',{});
      } catch (error) {
          return Apirespone.error(res, error.message, 401);
      }
}


}
module.exports = new AuthController();