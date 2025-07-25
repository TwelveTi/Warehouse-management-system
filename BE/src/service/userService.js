const db = require('../models');
const bcrypt = require('bcryptjs');
const JwtUtils = require('../utils/jwt');

class UserService{
    async createUser(username, password,role){
        const user = await db.User.findOne({ where: { username } });
        if (user) throw new Error('Người dùng tồn tại');

        const passwordHashed = await this.hashPassword(password);

        const newUser = await db.User.create({
            username,
            password: passwordHashed,
            role,
        });

            const safeUser = {
                id: newUser.id,
                username: newUser.username,
                role: newUser.role,
                };
        
        return safeUser;
    }

    async hashPassword(plainPassword) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        return hashedPassword;
    }

    async getAllUser(){
        const users = await db.User.findAll(
            {
        attributes: ['id', 'username', 'role']  // CHỈ lấy các field này
            }
        );
        return users;
    }

    async getUserByID(id){
        const user = await db.User.findOne({ where: { id: id }, attributes: ['id', 'username', 'role'] })
        if (!user) throw new Error('Người dùng không tồn tại');
        return user;
    }

    async updateUser(id,username,password,role){
        const user = await this.getUserByID(id);
        if (username) user.username = username;

        if (password) {
            const passwordHashed = await this.hashPassword(password);
            user.password = passwordHashed;
        }

        if (role) user.role = role;

        await user.save();
        return user;
    }
    async deleteUser(id){
        const user = await this.getUserByID(id);
        await user.destroy();
        
    }
}
module.exports = new UserService();