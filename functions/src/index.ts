import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
const cors = require('cors')({origin: true});
admin.initializeApp();

exports.hacerReserva = functions.firestore
    .document('reservas/{reservasId}')
    .onCreate(async (snapshot,context) => {
      
        
    // Notification content
    const payload = {
      notification: {
          title: 'Se hizo una reserva',
          body: `Un cliente hizo una reserva!!!`,
      }
    }

 
    const db = admin.firestore()
  
    const devicesRef = db.collection('devices')


   
    const devices = await devicesRef.get();
   

    const tokens = new Array();

    
    devices.forEach(result => {
      const token = result.data().token;

      if(result.data().tipo=="supervisor")
      {
        tokens.push( token )
      }

   
    })

    return admin.messaging().sendToDevice(tokens, payload)

});

exports.pushListaEspera = functions.firestore
.document('listaEspera/{clienteId}')
.onCreate(async (snap, context) => {

      const payload = {
          notification: {
              title: 'Cliente en espera.',
           
              body: `Se agrego un nuevo cliente a la lista de espera.`
 
          }
        }

        const db = admin.firestore()
        const devicesRef = db.collection("devices")
    
        const devices = await devicesRef.get();
    
        const tokens = new Array();
  
        devices.forEach(result => {
          const token = result.data().token;
    
          if(result.data().tipo=="mozo")
          {
            tokens.push( token )
          }
    
       
        });
      
      return admin.messaging().sendToDevice(tokens, payload)
    
});

exports.estadoReserva = functions.firestore
    .document('reservas/{reservasId}')
    .onUpdate(async (change,context) => {
        
      const before = change.before.data();
      const after = change.after.data();

      let payload;
      if(after.estado == 'confirmada') {
        payload = {
          notification: {
              title: 'Reserva aceptada',
              body: `Tu reserva a sido confirmada`,
          }
        }
      }
      else if(after.estado == 'cancelado') {
        payload = {
          notification: {
              title: 'Reserva cancelada',
              body: `Tu reserva a sido cancelada`,
          }
        }
      }
      else {
        return null;
      }
    // Notification content
    

 
    const db = admin.firestore()
  
    const devicesRef = db.collection('devices')


   
    const devices = await devicesRef.get();
   

    const tokens = new Array();

    
    devices.forEach(result => {
      const token = result.data().token;

      if(result.data().tipo=="cliente" && result.data().correo == after.correo)
      {
        tokens.push( token )
      }

   
    })

    return admin.messaging().sendToDevice(tokens, payload)

});

exports.nuevoDelivery = functions.firestore
.document('pedidos/{pedidoId}')
.onCreate(async (snap, context) => { 
  let data = snap.data();
  if(data.delivery && data.estado == 'pedido por confirmar') {
    const payload = {
      notification: {
          title: 'Delivery.',
       
          body: `Hay un nuevo pedido por delivery.`

      }
    }

    const db = admin.firestore()
    const devicesRef = db.collection("devices")

    const devices = await devicesRef.get();

    const tokens = new Array();

    devices.forEach(result => {
      const token = result.data().token;

      if(result.data().tipo=="supervisor")
      {
        tokens.push( token )
      }

   
    });
  
  return admin.messaging().sendToDevice(tokens, payload)
  }
  else {
    return null;
  }
});

exports.estadoDelivery = functions.firestore
    .document('pedidos/{pedidosId}')
    .onUpdate(async (change,context) => {
      let data = change.after.data();
      let payload;
      if(data.delivery && data.estado == 'esperando pedido') {
        payload = {
          notification: {
              title: 'Delivery aceptado',
              body: `Tu pedido por delivery a sido aceptado`,
          }
        }
      }
      else if(data.delivery && data.estado == 'cancelado') {
        payload = {
          notification: {
              title: 'Delivery cancelado',
              body: `Tu pedido por delivery a sido cancelado`,
          }
        }
      }
      else {
        return null;
      }

      const db = admin.firestore()
  
    const devicesRef = db.collection('devices')


   
    const devices = await devicesRef.get();
   

    const tokens = new Array();

    
    devices.forEach(result => {
      const token = result.data().token;

      if(result.data().tipo=="cliente" && result.data().correo == data.correo)
      {
        tokens.push( token )
      }

   
    })

    return admin.messaging().sendToDevice(tokens, payload)
});

exports.nuevoPedido = functions.firestore
    .document('pedidos/{pedidosId}')
    .onUpdate(async (change,context) => {
      let data = change.after.data();
      let payload;
      if(data.delivery == false && data.estado == 'pedido por confirmar') {
        payload = {
          notification: {
              title: 'Nuevo Pedido',
              body: `Hay un nuevo pedido`,
          }
        } 
      }
      else {
        return null;
      }

      const db = admin.firestore()
  
    const devicesRef = db.collection('devices')


   
    const devices = await devicesRef.get();
   

    const tokens = new Array();

    
    devices.forEach(result => {
      const token = result.data().token;

      if(result.data().tipo=="mozo" || result.data().tipo=="cocinero" || result.data().tipo=="bartender")
      {
        tokens.push( token )
      }

   
    })

    return admin.messaging().sendToDevice(tokens, payload)
});

exports.estadoPedido = functions.firestore
    .document('pedidos/{pedidosId}')
    .onUpdate(async (change,context) => {
      let data = change.after.data();
      let payload;
      if(data.delivery == false && data.estado == 'esperando pedido') {
        payload = {
          notification: {
              title: 'Pedido aceptado',
              body: `Tu pedido a sido aceptado`,
          }
        } 
      }
      else {
        return null;
      }

      const db = admin.firestore()
  
    const devicesRef = db.collection('devices')


   
    const devices = await devicesRef.get();
   

    const tokens = new Array();

    
    devices.forEach(result => {
      const token = result.data().token;

      if(result.data().tipo=="cliente" && result.data().correo == data.correo)
      {
        tokens.push( token )
      }

   
    })

    return admin.messaging().sendToDevice(tokens, payload)
});


