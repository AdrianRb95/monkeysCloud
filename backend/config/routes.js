/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  //CompanyController Routes
  'POST /Company/Create': {controller: "Company", action: "create"},
  'GET /Company/Read': {controller: "Company", action: "read"},
  'POST /Company/Update': {controller: "Company", action: "update"},
  'GET /Company/Delete': {controller: "Company", action: "delete"},
  
  //LanguagesController Routes
  'POST /Language/Create': {controller: "Languages", action: "create"},
  'GET /Language/Read': {controller: "Languages", action: "read"},
  'POST /Language/Update': {controller: "Languages", action: "update"},
  'GET /Language/Delete': {controller: "Languages", action: "delete"},

  //ProjectsController Routes
  'POST /Project/Create': {controller: "Projects", action: "create"},
  'GET /Project/Read': {controller: "Projects", action: "read"},
  'POST /Project/Update': {controller: "Projects", action: "update"},
  'GET /Project/Delete': {controller: "Projects", action: "delete"},

  //RecoveryCodeController Routes
  'POST /Project/Create': {controller: "RecoveryCode", action: "create"},
  'GET /Project/Read': {controller: "RecoveryCode", action: "read"},
  'POST /Project/Update': {controller: "RecoveryCode", action: "update"},
  'GET /Project/Delete': {controller: "RecoveryCode", action: "delete"}, 
  'GET /Project/VerifyCode': {controller: "RecoveryCode", action: "verifyCode"},
  'GET /Project/SendCode': {controller: "RecoveryCode", action: "sendCode"},

  //SprintsController Routes 
  'POST /Sprint/Create': {controller: "Sprints", action: "create"},
  'GET /Sprint/Read': {controller: "Sprints", action: "read"},
  'POST /Sprint/Update': {controller: "Sprints", action: "update"},
  'GET /Sprint/Delete': {controller: "Sprints", action: "delete"},

  //TasksController Routes
  'POST /Task/Create': {controller: "Tasks", action: "create"},
  'GET /Task/Read': {controller: "Tasks", action: "read"},
  'POST /Task/Update': {controller: "Tasks", action: "update"},
  'GET /Task/Delete': {controller: "Tasks", action: "delete"},

  //UserController Routes
  'POST /User/Create': {controller: "User", action: "create"},
  'GET /User/Read': {controller: "User", action: "read"},
  'POST /User/Update': {controller: "User", action: "update"},
  'GET /User/Delete': {controller: "User", action: "delete"},
  'GET /User/LogIn': {controller: "User", action: "login"},
  'GET /User/GoogleLogIn': {controller: "User", action: "googleLogin"},

  //WorkinfoController Routes
  'POST /Workinformation/Create': {controller: "Workinfo", action: "create"},
  'GET /Workinformation/Read': {controller: "Workinfo", action: "read"},
  'POST /Workinformation/Update': {controller: "Workinfo", action: "update"},
  'GET /Workinformation/Delete': {controller: "Workinfo", action: "delete"},

  //Agency Routes
  'POST /Agency/Create': {controller: "Agency", action: "create"},
  'GET /Agency/Read': {controller: "Agency", action: "read"},
  'POST /Agency/Update': {controller: "Agency", action: "update"},
  'GET /Agency/Delete': {controller: "Agency", action: "delete"},

  //Backup Routes
  'POST /Backup/Create': {controller: "Backup", action: "create"},
  'GET /Backup/Read': {controller: "Backup", action: "read"},
  'POST /Backup/Update': {controller: "Backup", action: "update"},
  'GET /Backup/Delete': {controller: "Backup", action: "delete"},

  //Bills Routes
  'POST /Bill/Create': {controller: "Bills", action: "create"},
  'GET /Bill/Read': {controller: "Bills", action: "read"},
  'POST /Bill/Update': {controller: "Bills", action: "update"},
  'GET /Bill/Delete': {controller: "Bills", action: "delete"},

  //Component Routes
  'POST /Component/Create': {controller: "Component", action: "create"},
  'GET /Component/Read': {controller: "Component", action: "read"},
  'POST /Component/Update': {controller: "Component", action: "update"},
  'GET /Component/Delete': {controller: "Component", action: "delete"},

  //ConnectionType Routes
  'POST /ConnectionType/Create': {controller: "ConnectionType", action: "create"},
  'GET /ConnectionType/Read': {controller: "ConnectionType", action: "read"},
  'POST /ConnectionType/Update': {controller: "ConnectionType", action: "update"},
  'GET /ConnectionType/Delete': {controller: "ConnectionType", action: "delete"},

  //Enviroments Routes
  'POST /Enviroment/Create': {controller: "Enviroments", action: "create"},
  'GET /Enviroment/Read': {controller: "Enviroments", action: "read"},
  'POST /Enviroment/Update': {controller: "Enviroments", action: "update"},
  'GET /Enviroment/Delete': {controller: "Enviroments", action: "delete"},

  //Frequency Routes
  'POST /Frequency/Create': {controller: "Frequency", action: "create"},
  'GET /Frequency/Read': {controller: "Frequency", action: "read"},
  'POST /Frequency/Update': {controller: "Frequency", action: "update"},
  'GET /Frequency/Delete': {controller: "Frequency", action: "delete"},

  //HistoryLog Routes
  'POST /HistoryLog/Create': {controller: "HistoryLog", action: "create"},
  'GET /HistoryLog/Read': {controller: "HistoryLog", action: "read"},
  'POST /HistoryLog/Update': {controller: "HistoryLog", action: "update"},
  'GET /HistoryLog/Delete': {controller: "HistoryLog", action: "delete"},

  //Host Routes
  'POST /Host/Create': {controller: "Host", action: "create"},
  'GET /Host/Read': {controller: "Host", action: "read"},
  'POST /Host/Update': {controller: "Host", action: "update"},
  'GET /Host/Delete': {controller: "Host", action: "delete"},

  //Labels Routes
  'POST /Label/Create': {controller: "Labels", action: "create"},
  'GET /Label/Read': {controller: "Labels", action: "read"},
  'POST /Label/Update': {controller: "Labels", action: "update"},
  'GET /Label/Delete': {controller: "Labels", action: "delete"},

  //Notifications Routes
  'POST /Notification/Create': {controller: "Notifications", action: "create"},
  'GET /Notification/Read': {controller: "Notifications", action: "read"},
  'POST /Notification/Update': {controller: "Notifications", action: "update"},
  'GET /Notification/Delete': {controller: "Notifications", action: "delete"},

  //PermissionEnviroment Routes
  'POST /PermissionEnviroment/Create': {controller: "PermissionEnviroment", action: "create"},
  'GET /PermissionEnviroment/Read': {controller: "PermissionEnviroment", action: "read"},
  'POST /PermissionEnviroment/Update': {controller: "PermissionEnviroment", action: "update"},
  'GET /PermissionEnviroment/Delete': {controller: "PermissionEnviroment", action: "delete"},

  //Rol Routes
  'POST /Rol/Create': {controller: "Rol", action: "create"},
  'GET /Rol/Read': {controller: "Rol", action: "read"},
  'POST /Rol/Update': {controller: "Rol", action: "update"},
  'GET /Rol/Delete': {controller: "Rol", action: "delete"},

  //ScheduleBackup Routes
  'POST /ScheduleBackup/Create': {controller: "ScheduleBackup", action: "create"},
  'GET /ScheduleBackup/Read': {controller: "ScheduleBackup", action: "read"},
  'POST /ScheduleBackup/Update': {controller: "ScheduleBackup", action: "update"},
  'GET /ScheduleBackup/Delete': {controller: "ScheduleBackup", action: "delete"},  

  //State Routes
  'POST /State/Create': {controller: "State", action: "create"},
  'GET /State/Read': {controller: "State", action: "read"},
  'POST /State/Update': {controller: "State", action: "update"},
  'GET /State/Delete': {controller: "State", action: "delete"},

  //TypeEnviroments Routes
  'POST /TypeEnviroment/Create': {controller: "TypeEnviroments", action: "create"},
  'GET /TypeEnviroment/Read': {controller: "TypeEnviroments", action: "read"},
  'POST /TypeEnviroment/Update': {controller: "TypeEnviroments", action: "update"},
  'GET /TypeEnviroment/Delete': {controller: "TypeEnviroments", action: "delete"},

  //WorkLog Routes
  'POST /WorkLog/Create': {controller: "WorkLog", action: "create"},
  'GET /WorkLog/Read': {controller: "WorkLog", action: "read"},
  'POST /WorkLog/Update': {controller: "WorkLog", action: "update"},
  'GET /WorkLog/Delete': {controller: "WorkLog", action: "delete"},

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
