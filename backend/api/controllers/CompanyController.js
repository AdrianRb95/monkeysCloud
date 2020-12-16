/**
 * CompanyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function(req, res) {
        try{
            const newCompany = await company.create(req.body).fetch();
            const token = await sails.helpers.generateAuthToken(newCompany.id);
            return res.json({company: newCompany, token});
        }catch(error){
            res.serverError(error);
            console.log(error);
        }        
    },
    read: async function(req, res) {
        if (req.params.id != undefined) {
            const readCompany = await company.findOne(req.params.id);
            return res.json(readCompany);
        } else {
            return res.send('invalid input');
        }
    },
    update: async function(req, res) {
        if (req.body.id == undefined || Object.keys(req.body) == null) {
            return res.send('invalid input');
        } else {
            const companyUpdated = await company.update(req.body.id).set(req.body).fetch();
            return res.json(companyUpdated);
        }
    },
    delete: async function(req, res) {
        if (req.params.id != undefined) {
            const deletedCompany = await company.destroyOne(req.params.id);
            return res.json(deletedCompany);
        } else {
            return res.send('invalid input');
        }
    }


};