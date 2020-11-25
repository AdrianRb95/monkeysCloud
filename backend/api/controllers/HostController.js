/**
 * HostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body == null)
            return res.send('null body');
        else{
            const createdHost = await host.create(req.body).fetch();
            return res.json(createdHost);
        }
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readHost = await host.findOne(req.params.id);
            return res.json(readHost);
        }
        else
            return res.send('invalid input');
    },
    update: async function(req, res){
        if( req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedHost = await host.update(req.body.id).set(req.body).fetch();
            return res.json(updatedHost);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedHost = await host.destroyOne(req.params.id);
            return res.json(deletedHost);
        }
        else  
            return res.send('invalid input');
    }

};

