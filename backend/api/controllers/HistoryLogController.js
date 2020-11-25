/**
 * HistoryLogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body == null)
            return res.send('null body');
        else{
            const createdHistoryLog = await historyLog.create(req.body).fetch();
            return res.json(createdHistoryLog);
        }
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readHistoryLog = await historyLog.findOne(req.params.id);
            return res.json(readHistoryLog);
        }
        else
            return res.send('invalid input');
    },
    update: async function(req, res){
        if( req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedHistoryLog = await historyLog.update(req.body.id).set(req.body).fetch();
            return res.json(updatedHistoryLog);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedHistoryLog = await historyLog.destroyOne(req.params.id);
            return res.json(deletedHistoryLog);
        }
        else  
            return res.send('invalid input');
    }
};

