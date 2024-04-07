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
            this.#user = userAuth[0];
            return true;
       }
       else
       {
            this.erros.push('Usuário invalido. Tente novamente');
            return false;
       }

       
    }


    async updatePhoto(file)
    {   
        try
        {   
           let userUpdate = await users.findOneAndUpdate({_id: this.#user._id}, {$set: {photo: file.filename}}, {new : true});
           this.#user = userUpdate;
           return true;
        }
        catch(err)
        {   
          
            this.erros.push('Erro ao atualizar imagem');
            return false;
        }
    }

    get User()
    {
        return this.#user;
    }
}

module.exports = User;