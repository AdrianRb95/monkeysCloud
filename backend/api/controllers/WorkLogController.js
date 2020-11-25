/**
 * WorkLogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body == null)
            return res.send('null body');
        else{
            const createdWorkLog = await workLog.create(req.body).fetch();
            return res.json(createdWorkLog);
        }
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readWorkLog = await workLog.findOne(req.params.id);
            return res.json(readWorkLog);
        }
        else
            return res.send('invalid input');
    },
    update: async function(req, res){
        if( req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedWorkLog = await workLog.update(req.body.id).set(req.body).fetch();
            return res.json(updatedWorkLog);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedWorkLog = await workLog.destroyOne(req.params.id);
            return res.json(deletedWorkLog);
        }
        else  
            return res.send('invalid input');
    }
};

