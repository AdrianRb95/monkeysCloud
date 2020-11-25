/**
 * ComponentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body != nu(ll){
            const createdComponent = await component.create(req.body).fetch();
            return res.json(createdComponent);
        }
        else return res.send('null body');
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readComponent = await component.findOne(req.params.id);
            return res.json(readComponent);
        }
        else return res.send('invalid input');
    },
    update: async function(req, res){
        if(req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedComponent = await component.update(req.body.id).set(req.body).fetch();
            return res.json(updatedComponent);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedComponent = await component.destroyOne(req.params.id);
            return res.json(deletedComponent);
        }
        else return res.send('invalid input');
    }   

};

