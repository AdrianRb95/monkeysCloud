/**
 * ConnectionTypeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body != null){
            const createdConnectionType = await connectionType.create(req.body).fetch();
            return res.json(createdConnectionType);
        }
        else return res.json('null body');
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readConnectionType = await connectionType.findOne(req.params.id);
            return res.json(readConnectionType);
        }
        else return res.send('invalid input');
    },
    update: async function(req, res){
        if(req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedConnetionType = await connectionType.update(req.body.id).set(req.body).fetch();
            return res.json(updatedConnetionType);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedConnectionType = await connectionType.destroyOne(req.params.id);
            return res.json(deletedConnectionType);
        }
        else return res.send('invalid input');
    }
};

