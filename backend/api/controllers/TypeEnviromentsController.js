/**
 * TypeEnviromentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body == null)
            return res.send('null body');
        else{
            const createdTypeEnviroment = await typeEnviroments.create(req.body).fetch();
            return res.json(createdTypeEnviroment);
        }
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readTypeEnviroment = await typeEnviroments.findOne(req.params.id);
            return res.json(readTypeEnviroment);
        }
        else
            return res.send('invalid input');
    },
    update: async function(req, res){
        if( req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedTypeEnviroment = await typeEnviroments.update(req.body.id).set(req.body).fetch();
            return res.json(updatedTypeEnviroment);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedTypeEnviroment = await typeEnviroments.destroyOne(req.params.id);
            return res.json(deletedTypeEnviroment);
        }
        else  
            return res.send('invalid input');
    }
};

