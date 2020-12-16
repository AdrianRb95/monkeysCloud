/**
 * ProjectsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {       
        try{
            const newProject = await projects.create(req.body).fetch();
            const token = await sails.helpers.generateAuthToken(newProject.id);
            return res.json({projects: newProject, token});
        }catch(error){
            res.serverError("Invalid Data");
            console.log(error);
        } 
    },    
    read: async function(req, res) {
        try{
            const allProjects = await projects.find();
            return res.json(allProjects);
        }catch(error){
            res.serverError(error);
            console.log(error);
        }        
    },    
    update: async function(req, res) {
        if (Object.keys(req.body) == 0 || req.body.id == undefined) {
            return res.send('invalid input');
        } else {
            const projectUpdated = await projects.update(req.body.id).set(req.body).fetch();
            return res.json(projectUpdated);
        }
    },
    delete: async function(req, res) {
        if (req.params.id != undefined) {
            const deletedProject = await projects.destroyOne(req.params.id);
            return res.json(deletedProject);
        } else {
            return res.send('invalid input');
        }
    }

};