const request = require('request')

exports.getStatus = function (id) {
  let returnPromise = new Promise((resolve, reject) => {
    request(`https://users.roblox.com/v1/users/${id}/status`, function (error, response, body) {
      if(error){
        reject("There was an error with the HTTP request.");
        return;
      }
      if(JSON.parse(body).errors){
        reject('The roblox user was not found or the user does not have a status')
      }else{
        resolve(JSON.parse(body).status);
      }
    });
  });
  return returnPromise;
}

exports.getUsername = function (id) {
  let returnPromise = new Promise((resolve, reject) => {
    request(`https://api.roblox.com/users/${id}`, function (error, response, body) {
      if(error){
        reject("There was an error with the HTTP request.");
        return;
      }
      if(JSON.parse(body).errors){
        reject('The roblox user was not found')
      }else{
        resolve(JSON.parse(body).Username);
      }
    });
  });
  return returnPromise;
}

exports.getID = function (username) {
  let returnPromise = new Promise((resolve, reject) => {
    request(`https://api.roblox.com/users/get-by-username?username=${username}`, function (error, response, body) {
      if(error){
        reject("There was an error with the HTTP request.");
        return;
      }
      if(JSON.parse(body).errors){
        reject('The roblox user was not found')
      }else{
        resolve(JSON.parse(body).Id);
      }
    });
  });
  return returnPromise;
}
