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
const cors = require('cors')({ origin: true });
admin.initializeApp();
exports.hacerReserva = functions.firestore
    .document('reservas/{reservasId}')
    .onCreate((snapshot, context) => __awaiter(this, void 0, void 0, function* () {
    // Notification content
    const payload = {
        notification: {
            title: 'Se hizo una reserva',
            body: `Un cliente hizo una reserva!!!`,
        }
    };
    const db = admin.firestore();
    const devicesRef = db.collection('devices');
    const devices = yield devicesRef.get();
    const tokens = new Array();
    devices.forEach(result => {
        const token = result.data().token;
        if (result.data().tipo == "supervisor") {
            tokens.push(token);
        }
    });
    return admin.messaging().sendToDevice(tokens, payload);
}));
exports.pushListaEspera = functions.firestore
    .document('listaEspera/{clienteId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () {
    const payload = {
        notification: {
            title: 'Cliente en espera.',
            body: `Se agrego un nuevo cliente a la lista de espera.`
        }
    };
    const db = admin.firestore();
    const devicesRef = db.collection("devices");
    const devices = yield devicesRef.get();
    const tokens = new Array();
    devices.forEach(result => {
        const token = result.data().token;
        if (result.data().tipo == "mozo") {
            tokens.push(token);
        }
    });
    return admin.messaging().sendToDevice(tokens, payload);
}));
exports.estadoReserva = functions.firestore
    .document('reservas/{reservasId}')
    .onUpdate((change, context) => __awaiter(this, void 0, void 0, function* () {
    const before = change.before.data();
    const after = change.after.data();
    let payload;
    if (after.estado == 'confirmada') {
        payload = {
            notification: {
                title: 'Reserva aceptada',
                body: `Tu reserva a sido confirmada`,
            }
        };
    }
    else if (after.estado == 'cancelado') {
        payload = {
            notification: {
                title: 'Reserva cancelada',
                body: `Tu reserva a sido cancelada`,
            }
        };
    }
    else {
        return null;
    }
    // Notification content
    const db = admin.firestore();
    const devicesRef = db.collection('devices');
    const devices = yield devicesRef.get();
    const tokens = new Array();
    devices.forEach(result => {
        const token = result.data().token;
        if (result.data().tipo == "cliente" && result.data().correo == after.correo) {
            tokens.push(token);
        }
    });
    return admin.messaging().sendToDevice(tokens, payload);
}));
exports.nuevoDelivery = functions.firestore
    .document('pedidos/{pedidoId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () {
    let data = snap.data();
    if (data.delivery && data.estado == 'pedido por confirmar') {
        const payload = {
            notification: {
                title: 'Delivery.',
                body: `Hay un nuevo pedido por delivery.`
            }
        };
        const db = admin.firestore();
        const devicesRef = db.collection("devices");
        const devices = yield devicesRef.get();
        const tokens = new Array();
        devices.forEach(result => {
            const token = result.data().token;
            if (result.data().tipo == "supervisor") {
                tokens.push(token);
            }
        });
        return admin.messaging().sendToDevice(tokens, payload);
    }
    else {
        return null;
    }
}));
exports.estadoDelivery = functions.firestore
    .document('pedidos/{pedidosId}')
    .onUpdate((change, context) => __awaiter(this, void 0, void 0, function* () {
    let data = change.after.data();
    let payload;
    if (data.delivery && data.estado == 'esperando pedido') {
        payload = {
            notification: {
                title: 'Delivery aceptado',
                body: `Tu pedido por delivery a sido aceptado`,
            }
        };
    }
    else if (data.delivery && data.estado == 'cancelado') {
        payload = {
            notification: {
                title: 'Delivery cancelado',
                body: `Tu pedido por delivery a sido cancelado`,
            }
        };
    }
    else {
        return null;
    }
    const db = admin.firestore();
    const devicesRef = db.collection('devices');
    const devices = yield devicesRef.get();
    const tokens = new Array();
    devices.forEach(result => {
        const token = result.data().token;
        if (result.data().tipo == "cliente" && result.data().correo == data.correo) {
            tokens.push(token);
        }
    });
    return admin.messaging().sendToDevice(tokens, payload);
}));
exports.nuevoPedido = functions.firestore
    .document('pedidos/{pedidosId}')
    .onUpdate((change, context) => __awaiter(this, void 0, void 0, function* () {
    let data = change.after.data();
    let payload;
    if (data.delivery == false && data.estado == 'pedido por confirmar') {
        payload = {
            notification: {
                title: 'Nuevo Pedido',
                body: `Hay un nuevo pedido`,
            }
        };
    }
    else {
        return null;
    }
    const db = admin.firestore();
    const devicesRef = db.collection('devices');
    const devices = yield devicesRef.get();
    const tokens = new Array();
    devices.forEach(result => {
        const token = result.data().token;
        if (result.data().tipo == "mozo" || result.data().tipo == "cocinero" || result.data().tipo == "bartender") {
            tokens.push(token);
        }
    });
    return admin.messaging().sendToDevice(tokens, payload);
}));
exports.estadoPedido = functions.firestore
    .document('pedidos/{pedidosId}')
    .onUpdate((change, context) => __awaiter(this, void 0, void 0, function* () {
    let data = change.after.data();
    let payload;
    if (data.delivery == false && data.estado == 'esperando pedido') {
        payload = {
            notification: {
                title: 'Pedido aceptado',
                body: `Tu pedido a sido aceptado`,
            }
        };
    }
    else {
        return null;
    }
    const db = admin.firestore();
    const devicesRef = db.collection('devices');
    const devices = yield devicesRef.get();
    const tokens = new Array();
    devices.forEach(result => {
        const token = result.data().token;
        if (result.data().tipo == "cliente" && result.data().correo == data.correo) {
            tokens.push(token);
        }
    });
    return admin.messaging().sendToDevice(tokens, payload);
}));
//# sourceMappingURL=index.js.map