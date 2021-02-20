const axios = require('axios');

const syncUsers = (userRepository) => {
  return async (_req, res,  next) => {

  axios.get('https://api.github.com/search/users?q=payflow')
  .then(response => {
    if (response.statusText==='OK') {
      
      response.data.items.forEach((item) => {

        const user = userRepository.findByUserName(item.login);

        if(user){
          if(user.externalId !==  item.id.toString()){
            user.externalId = item.id.toString();
            userRepository.updateUser(user)
          }
        } else {
          userRepository.addUser({
            userName:  item.login,
            externalId:  item.id.toString(),
          });
        }
    });

    const users = userRepository.findAllUsers();
    users.forEach((u) => {
      const item =  response.data.items.filter(a => a.login === u.userName);
      if(!item){
        userRepository.deleteUserByUserName(u.userName)
      }
    });

    
    res.send('Sync OK');
    }
    res.send('Sync ERROR');
  })
  .catch(e => {
    console.log(e);
    next(e);
  });


  }
}

module.exports = syncUsers;