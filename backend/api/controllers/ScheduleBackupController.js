/**
 * ScheduleBackupController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body == null)
            return res.send('null body');
        else{
            const createdScheduleBackup = await scheduleBackup.create(req.body).fetch();
            return res.json(createdScheduleBackup);
        }
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readScheduleBackup = await scheduleBackup.findOne(req.params.id);
            return res.json(readScheduleBackup);
        }
        else
            return res.send('invalid input');
    },
    update: async function(req, res){
        if( req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedScheduleBackup = await scheduleBackup.update(req.body.id).set(req.body).fetch();
            return res.json(updatedScheduleBackup);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedScheduleBackup = await scheduleBackup.destroyOne(req.params.id);
            return res.json(deletedScheduleBackup);
        }
        else  
            return res.send('invalid input');
    }
};

