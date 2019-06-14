"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp(functions.config().firebase);
const SENDGRID_API_KEY = functions.config().sengrid.key;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);
const user = {
    'email': 'samy32m@gmail.com',
    'nombre': 'Samantha'
};
//enviarCorreo(user){
const msg = {
    to: user.email,
    from: 'hello@angularfirebase.com',
    subject: 'Registro Confirmado',
    // text: `Hey ${toName}. You have a new follower!!! `,
    // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,
    // custom templates
    templateId: 'd-556007ad6f72458ab296356d865275c6',
    substitutionWrappers: ['{{', '}}'],
    substitutions: {
        name: user.nombre
        // and other custom properties here
    }
};
sgMail.send(msg);
//}
//# sourceMappingURL=index.js.map