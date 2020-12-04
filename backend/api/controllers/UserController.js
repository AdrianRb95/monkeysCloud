/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const {OAuth2Client} = require("google-auth-library")
const client = new OAuth2Client(sails.config.globals.googleClient)


module.exports = {
  create: async function (req, res) {
    try {
      console.log(req.body);
      const userCreated = await user.create(req.body).fetch();
      const token = await sails.helpers.generateAuthToken(userCreated.id);
      res.send({ userCreated, token });
    } catch (error) {
      res.badRequest();
      console.log(error);
    }
  },

  login: async function (req, res) {
    try {
      const user = await User.findOne({ email: req.body.email }).decrypt();
      if (!user) return res.notFound();
      if (user.password !== req.body.password) return res.notFound();
      const token = await sails.helpers.generateAuthToken(user.id);
      res.send({ user, token });
    } catch (error) {
      res.badRequest();
    }
  },

  read: async function (req, res) {    
      if (req.params.id) {
        const data = await user.findOne(req.params.id);        
        res.json({user: data});

      } else {
        res.notFound();
      }    
  },

  update: async function (req, res) {
    try {
      const userUpdate = await user.update(req.user).set(req.body).fetch();
      res.send({ userUpdate });
    } catch (error) {
      res.badRequest();
    }
  },

  delete: async function (req, res) {
    try {
      await user.destroyOne(req.user);
      res.send();
    } catch (error) {
      res.badRequest();
    }
  },

  googleLogin: async function(req,res) {
    try {
      const {payload:{email,name}} = await client.verifyIdToken({idToken:req.body.tokenId,audience:sails.config.globals.googleClient})
      var user = await User.findOne({email})
      if(!user) {
        user = await User.create({email,fullname:name}).fetch();
      }
      const token = await sails.helpers.generateAuthToken(user.id);
      res.send({user,token})
    } catch (error) {
      res.badRequest()
    }
  },

};
