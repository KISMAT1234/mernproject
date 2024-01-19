import User from '../models/User.js';

export default class UserSeeder {
    static async run() {
        const users = 
            {
                name: 'admin',
                email: "admin@gmail.com",
                password: "admin002",
                gender:"male",
                role:"admin",
                image:""
            }
        const userExists = await User.findOne({ email: users.email });
        if(!userExists) {
            await User.create(users);
            console.log('User created successfully');
        }
    }
}