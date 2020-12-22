/**
 * StateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        try{
            const newState = await state.create(req.body).fetch();
            const token = await sails.helpers.generateAuthToken(newState.id);
            return res.json({state: newState, token})
        }
        catch(error){
            res.serverError("Invalid Data");
            console.log(error);
        }        
    },
    read: async function(req, res){
        if(req.params.id != undefined){
            const readState = await state.findOne(req.params.id);
            return res.json(readState);
        }
        else
            return res.send('invalid input');
    },
    update: async function(req, res){
        if( req.body.id == undefined || Object.keys(req.body) == null)
            return res.send('invalid input');
        else{
            const updatedState = await state.update(req.body.id).set(req.body).fetch();
            return res.json(updatedState);
        }
    },
    delete: async function(req, res){
        if(req.params.id != undefined){
            const deletedState = await state.destroyOne(req.params.id);
            return res.json(deletedState);
        }
        else  
            return res.send('invalid input');
    }
};

