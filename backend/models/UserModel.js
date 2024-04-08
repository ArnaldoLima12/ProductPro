const {users} = require('../db/Schemas.js');
const bcrypt = require('bcrypt');

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
       
       let userAuth = await users.findOne({email: this.#user.email});
      
       if(userAuth &&  await bcrypt.compare(this.#user.password, userAuth.password))
       {    
            this.#user = userAuth;
            return true;
       }
       else
       {    
            this.erros.push('Usuário ou senha invalidos. Tente novamente!');
            return false;
       }
    }

    async updatePassword(newPassword)
    {   
        try
        {   
            const hashPassword = await bcrypt.hash(newPassword, 10);

            let userUpdate = await users.findOneAndUpdate(
                {_id: this.#user._id}, 
                    {$set: {password: hashPassword}}, 
                        {new: true});
            this.#user = userUpdate;
            return true;
        }
        catch(err)
        {
            this.erros.pop();
            this.erros.push('Falha ao alterar senha');
            return false;
        }
    }

    async updatePhoto(buffer, type)
    {   
        try
        {   
           let userUpdate = await users.findOneAndUpdate({_id: this.#user._id}, {$set: {photo: {data: buffer, contentType: type}}}, {new : true});
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