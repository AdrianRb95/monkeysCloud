/**
 * FrequencyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res){
        if(req.body != null){
            const createdFrequency = await frequency.create(req.body).fetch();
            return res.json(createdFrequency);
        }
        else return res.send('null body');
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readFrequency = await frequency.findOne(req.params.id);
            return res.json(readFrequency);
        }
        else return res.send('invalid input');
    },
    update: async function(req, res){
        if(req.body.id == undefined || Object.keys(req.body) == null)
            res.send('invalid input');
        else{
            const updatedFrequency = await frequency.update(req.body.id).set(req.body).fetch();
            return res.json(updatedFrequency);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedFrequency = await frequency.destroyOne(req.params.id);
            return res.json(deletedFrequency);
        }else return res.send('invalid input');
    }

};

