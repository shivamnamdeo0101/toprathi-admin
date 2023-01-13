const { default: axios } = require("axios")

const sendPushNotification = async (payload) => {
  var data = JSON.stringify({
    "to": "/topics/science",
    "notification": {
      "title": payload.title,
      "body": payload.content,
      "mutable_content": true,
      "sound": "Tri-tone"
    },
    "data": {
      "url": "https://www.01net.com/app/uploads/2020/12/MEA-Photos-App-windows-10-1.jpg",
      "dl": "<deeplink action on tap of notification>"
    }
  });
  
  var config = {
    method: 'post',
    url: 'https://fcm.googleapis.com/fcm/send',
    headers: { 
      'Authorization': 'key=AAAAYYjDA20:APA91bE3a67rglDk8tMgGGmc2ZV2B5YFBP20YuaTCqKBcp19lH8iili_JXWQxCy38euf_uAqPRTKSmOLWH5JyEOT08Fq3Sg0pAB7cKsZCf-yMosis6A8y6s4nS60mSS7qe0TWfDZhgD5', 
      'Content-Type': 'application/json', 
      'project_id': '418906309485'
    },
    data : data
  };
  
  await axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  module.exports.sendPushNotification = sendPushNotification;