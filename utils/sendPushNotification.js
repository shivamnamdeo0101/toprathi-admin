const { default: axios } = require("axios")

const sendPushNotification = async () => {
    const FIREBASE_API_KEY = "AAAAYYjDA20:APA91bE3a67rglDk8tMgGGmc2ZV2B5YFBP20YuaTCqKBcp19lH8iili_JXWQxCy38euf_uAqPRTKSmOLWH5JyEOT08Fq3Sg0pAB7cKsZCf-yMosis6A8y6s4nS60mSS7qe0TWfDZhgD5"
    const message = {
      registration_ids: [
        "eyudluErTEeoPUiPoFGvhJ:APA91bFZgJdjKl30zUlAAcqx-jzOTE6ZldNJyDgkw1MuAcsj7P224APriPHfZS3Py3DwQMxY0cro0tTkyTIvWjDqKlrcUaRYdXoaaZB7c8f9p1t6MJpa3F4vGgKHyj3fcgi7y2WL0wa5",
      ],
      notification: {
        title: "Shivam",
        body: "Notify",
        vibrate: 1,
        sound: 1,
        show_in_foreground: true,
        priority: "high",
        content_available: true,
      },
      data: {
        title:"user_name",
        body: "act",
        timestamp:Date.now(),
        user_pic:"user_pic",
      },
    }
  
    let headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": "key=" + "AAAAYYjDA20:APA91bE3a67rglDk8tMgGGmc2ZV2B5YFBP20YuaTCqKBcp19lH8iili_JXWQxCy38euf_uAqPRTKSmOLWH5JyEOT08Fq3Sg0pAB7cKsZCf-yMosis6A8y6s4nS60mSS7qe0TWfDZhgD5",
    })
  
    let response = await axios.post("https://fcm.googleapis.com/fcm/send", {
      headers:headers,
      body: JSON.stringify(message),
    })
    response = await response.json()
    console.log(response)
  }

  module.exports.sendPushNotification = sendPushNotification;