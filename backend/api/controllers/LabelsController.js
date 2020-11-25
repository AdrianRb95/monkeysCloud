/**
 * LabelsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body == null)
            return res.send('null body');
        else{
            const createdLabel = await labels.create(req.body).fetch();
            return res.json(createdLabel);
        }
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readLabel = await labels.findOne(req.params.id);
            return res.json(readLabel);
        }
        else
            return res.send('invalid input');
    },
    update: async function(req, res){
        if( req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedLabel = await labels.update(req.body.id).set(req.body).fetch();
            return res.json(updatedLabel);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedLabel = await labels.destroyOne(req.params.id);
            return res.json(deletedLabel);
        }
        else  
            return res.send('invalid input');
    }

};

