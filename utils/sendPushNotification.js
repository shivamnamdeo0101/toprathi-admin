const { default: axios } = require("axios")

const sendPushNotification = async (payload,tag) => {
  var data = JSON.stringify({
    "to": "/topics/"+tag,
    "notification": {
      "title": payload.title,
      "body": payload.content,
      "mutable_content": true,
      "sound": "Tri-tone"
    },
    "data": {
      "url": payload.image,
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