import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
admin.initializeApp();

exports.hacerReserva = functions.database
    .ref('reservas/{reservasId}')
    .onCreate(async (snapshot,context) => {
        
    // Notification content
    const payload = {
      notification: {
          title: 'Se hizo una reserva',
          body: `Un cliente hizo una reserva!!!`,
          icon: 'https://goo.gl/Fz9nrQ',
          sound:'default',
          //body:"Asdasd",
          vibrate: "true",
      }
    }

 
    const db = admin.firestore()
  
    const devicesRef = db.collection('devices')


   
    const devices = await devicesRef.get();
   

    const tokens = [];

    
    devices.forEach(result => {
      const token = result.data().token;

      if(result.data().tipo=="supervisor")
      {
        tokens.push( token )
      }

   
    })

    //const tokens = [];
   // tokens.push("eiEhMAhigdY:APA91bH4oVLkLh8fzOsjm1bVhlyTsh4v8tb3WZ7zNmiUQXkEMmPW6aHJ_Rv_Ylx5ZuaChX2zIHMPIjp7mACe6_fP6t-i8r4KhP4B97GxLQlxWB8LYGFRHOJYy4-l5u3Bi-7uy_jTe_zk");

    return admin.messaging().sendToDevice(tokens, payload)

});
