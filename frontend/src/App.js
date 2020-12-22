import axios from './api/axios';
import React, { useEffect } from 'react';
import Router from './containers/router';

function App() {
  /*   
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'http://localhost:1337/User/Read',
    headers: {
      Cookie:
        'sails.sid=s%3AwcCdJfU1-ajehetKxXh_YCAvnTVq-R7t.0zXjXyaMzSoDDIDeQe9s7ZWjzml0kB7SXQsFnXo%2BO0s',
    },
  };
  
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    }); 
  */

  return <Router />;
}
export default App;
