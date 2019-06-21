"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.hacerReserva = functions.database
    .ref('reservas/{reservasId}')
    .onCreate((snapshot, context) => __awaiter(this, void 0, void 0, function* () {
    // Notification content
    const payload = {
        notification: {
            title: 'Se hizo una reserva',
            body: `Un cliente hizo una reserva!!!`,
            icon: 'https://goo.gl/Fz9nrQ',
            sound: 'default',
            //body:"Asdasd",
            vibrate: "true",
        }
    };
    const db = admin.firestore();
    const devicesRef = db.collection('devices');
    const devices = yield devicesRef.get();
    const tokens = [];
    devices.forEach(result => {
        const token = result.data().token;
        if (result.data().tipo == "supervisor") {
            tokens.push(token);
        }
    });
    //const tokens = [];
    // tokens.push("eiEhMAhigdY:APA91bH4oVLkLh8fzOsjm1bVhlyTsh4v8tb3WZ7zNmiUQXkEMmPW6aHJ_Rv_Ylx5ZuaChX2zIHMPIjp7mACe6_fP6t-i8r4KhP4B97GxLQlxWB8LYGFRHOJYy4-l5u3Bi-7uy_jTe_zk");
    return admin.messaging().sendToDevice(tokens, payload);
}));
//# sourceMappingURL=index.js.map