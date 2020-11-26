/**
 * RolController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body == null)
            return res.send('null body');
        else{
            const createdRol = await rol.create(req.body).fetch();
            return res.json(createdRol);
        }
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readRol = await rol.findOne(req.params.id);
            return res.json(readRol);
        }
        else
            return res.send('invalid input');
    },
    update: async function(req, res){
        if( req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedRol = await rol.update(req.body.id).set(req.body).fetch();
            return res.json(updatedRol);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedRol = await rol.destroyOne(req.params.id);
            return res.json(deletedRol);
        }
        else  
            return res.send('invalid input');
    }
};

