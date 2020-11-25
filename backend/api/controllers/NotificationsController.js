/**
 * NotificationsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body == null)
            return res.send('null body');
        else{
            const createdNotification = await notifications.create(req.body).fetch();
            return res.json(createdNotification);
        }
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readNotification = await notifications.findOne(req.params.id);
            return res.json(readNotification);
        }
        else
            return res.send('invalid input');
    },
    update: async function(req, res){
        if( req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedNotification = await notifications.update(req.body.id).set(req.body).fetch();
            return res.json(updatedNotification);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedNotification = await notifications.destroyOne(req.params.id);
            return res.json(deletedNotification);
        }
        else  
            return res.send('invalid input');
    }
};

