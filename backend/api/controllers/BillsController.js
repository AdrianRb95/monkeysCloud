/**
 * BillsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { JsonWebTokenError } = require("jsonwebtoken");

module.exports = {
  
    create: async function(req, res){
        if(req.body != null){
            const createdBill = await bills.create(req.body).fetch();
            return res.json(createdBill);
        }            
        else return res.send('null body');         
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readBill = await bills.findOne(req.params.id);
            return res.json(readBill);
        }
        else return res.send('invalid input');
    },
    update: async function(req, res){
        if(req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedBill = await bills.update(req.body.id).set(req.body).fetch();
            return res.json(updatedBill);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedBill = await bills.destroyOne(req.params.id).fetch();
            return res.json(deletedBill);
        }
        else return res.send('invalid input');
    }

};

