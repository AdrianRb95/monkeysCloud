/**
 * EnviromentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body != null){
            const createdEnviroment = await enviroments.creat(req.body).fetch();
            return res.json(createdEnviroment);
        }
        else return res.send('null body');
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readEnviroment = await enviroments.readOne(req.params.id);
            return res.json(readEnviroment);
        }
        else return res.send('invalid input');
    },
    update: async function(req, res){
        if(req.body.id != undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedEnviroment = await enviroments.update(req.body.id).set(req.body).fetch();
            return res.json(updatedEnviroment);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedEnviroment = await enviroments.destroyOne(req.params.id);
            return res.json(deletedEnviroment);
        }
        else return res.send('invalid input');
    }
};

