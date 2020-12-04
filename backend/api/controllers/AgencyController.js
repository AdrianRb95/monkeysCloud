/**
 * AgencyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const {OAuth2Client} = require("google-auth-library")
const client = new OAuth2Client(sails.config.globals.googleClient)

module.exports = {
  
    create: async function(req, res){
        if(req.body == null)
            return res.send('null body');
        else{
            const createdAgency = await agency.create(req.body).fetch();
            //const token = await sails.helpers.generateAuthToken(user.id);
            return res.json(createdAgency);
        }
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readAgency = await agency.findOne(req.params.id);
            return res.json(readAgency);
        }
        else
            return res.send('invalid input');
    },
    update: async function(req, res){
        if( req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedAgency = await agency.update(req.body.id).set(req.body).fetch();
            return res.json(updatedAgency);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedAgency = await agency.destroyOne(req.params.id);
            return res.json(deletedAgency);
        }
        else  
            return res.send('invalid input');
    }

};

