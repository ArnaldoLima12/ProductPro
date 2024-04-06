const {users} = require('../db/Schemas.js');

class User
{   

    #user;
    erros = [];

    constructor(userRequest)
    {   
        this.#user = userRequest;
    }

    async verifyUser()
    {   
       let userAuth = await users.find({email: this.#user.email, password: this.#user.password});
       

       if(userAuth.length > 0)
       {    
            this.#user = userAuth;
            return true;
       }
       else
       {
            this.erros.push('Usuário invalido. Tente novamente');
            return false;
       }

       
    }

    get User()
    {
        return this.#user;
    }
}

module.exports = User;