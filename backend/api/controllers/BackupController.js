/**
 * BackupController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body != null ){
            const createdBackup = await backup.create(req.body).fetch();
            return res.json(createdBackup);
        }
        else return res.send('null body');
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readBackup = await backup.readOne(req.params.id);
            return res.json(readBackup);
        }
        else return res.send('invalid input');
    },
    update: async function(req, res){
        if(req.body.id == undefined || Object.keys(req.body) == null)
            res.send('invalid input');
        else{
            const updatedBackup = await backup.update(req.body.id).set(req.body).fetch();
            return res.json(updatedBackup);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedBackup = await backup.destroyOne(req.params.id);
            return res.json(deletedBackup);
        }
        else return res.send('invalid input');
    }

};

