/**
 * PermissionEnviromentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body == null)
            return res.send('null body');
        else{
            const createdPermission = await permissionEnviroment.create(req.body).fetch();
            return res.json(createdPermission);
        }
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readPermission = await permissionEnviroment.findOne(req.params.id);
            return res.json(readPermission);
        }
        else
            return res.send('invalid input');
    },
    update: async function(req, res){
        if( req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedPermission = await permissionEnviroment.update(req.body.id).set(req.body).fetch();
            return res.json(updatedPermission);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedPermission = await permissionEnviroment.destroyOne(req.params.id);
            return res.json(deletedPermission);
        }
        else  
            return res.send('invalid input');
    }
};

