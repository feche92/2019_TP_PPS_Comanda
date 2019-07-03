webpackJsonp([23],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthProvider = /** @class */ (function () {
    function AuthProvider(auth, db, http) {
        this.auth = auth;
        this.db = db;
        this.http = http;
    }
    AuthProvider.prototype.getAnimales = function () {
        return this.http.get('https://lab4ivagaza.000webhostapp.com/apiJuegos/animales/');
    };
    AuthProvider.prototype.login = function (email, pass) {
        return this.auth.auth.signInWithEmailAndPassword(email, pass);
    };
    AuthProvider.prototype.logOut = function () {
        this.auth.auth.signOut();
    };
    AuthProvider.prototype.getLista = function (tipo) {
        return this.db.collection(tipo).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    //-----USUARIOS-----
    AuthProvider.prototype.getUsuarios = function () {
        return this.db.collection('usuarios').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    AuthProvider.prototype.updateUsuario = function (data) {
        return this.db.collection('usuarios').doc(data.id).update(data);
    };
    AuthProvider.prototype.guardarUsuario = function (data) {
        return this.db.collection('usuarios').add(data);
    };
    AuthProvider.prototype.guardarPedido = function (data) {
        return this.db.collection('pedidos').add(data);
    };
    AuthProvider.prototype.guardarEncuestaEmpleado = function (data) {
        return this.db.collection('encuestaEmpleado').add(data);
    };
    AuthProvider.prototype.crearUsuario = function (correo, pass) {
        return this.auth.auth.createUserWithEmailAndPassword(correo, pass);
    };
    //-----CLIENTES-----
    AuthProvider.prototype.guardarCliente = function (data) {
        return this.db.collection('clientes').add(data);
    };
    //-----MESA-----
    AuthProvider.prototype.guardarMesa = function (data) {
        return this.db.collection('mesas').add(data);
    };
    AuthProvider.prototype.getMesas = function () {
        return this.db.collection('mesas').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    //---Lista Espera ---//
    AuthProvider.prototype.guardarListaEspera = function (data) {
        return this.db.collection('listaEspera').add(data);
    };
    AuthProvider.prototype.getListaEspera = function () {
        return this.db.collection('listaEspera').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    AuthProvider.prototype.updateListaEspera = function (data) {
        return this.db.collection('listaEspera').doc(data.id).update(data);
    };
    //--FIN ---Lista Espera ---//
    //-----PRODUCTOS------
    AuthProvider.prototype.getListaProdcutos = function (tipo) {
        return this.db.collection(tipo).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        }));
    };
    AuthProvider.prototype.guardarProducto = function (data) {
        return this.db.collection('productos').add(data);
    };
    AuthProvider.prototype.updateMesa = function (data) {
        return this.db.collection('mesas').doc(data.id).update(data);
    };
    AuthProvider.prototype.getQr = function () {
        return this.db.collection('qr').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    AuthProvider.prototype.nuevaEncuesta = function (data) {
        return this.db.collection('encuestasUsuarios').add(data);
    };
    AuthProvider.prototype.modificarEncuesta = function (data) {
        return this.db.collection('encuestasUsuarios').doc(data.id).update(data);
    };
    AuthProvider.prototype.getEncUsuarios = function () {
        return this.db.collection('encuestasUsuarios').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    //---- Encuesta cliente -----//
    AuthProvider.prototype.nuevaEncuestaCliente = function (data) {
        return this.db.collection('encuestaCliente').add(data);
    };
    AuthProvider.prototype.getEncuestasClientes = function () {
        return this.db.collection('encuestaCliente').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    AuthProvider.prototype.modificarEncuestaCliente = function (data) {
        return this.db.collection('encuestaCliente').doc(data.id).update(data);
    };
    //---FIN --Encuesta cliente -----//
    AuthProvider.prototype.nuevaReserva = function (data) {
        return this.db.collection('reservas').add(data);
    };
    AuthProvider.prototype.confirmarReserva = function (data) {
        return this.db.collection('reservas').doc(data.id).update(data);
    };
    AuthProvider.prototype.getReservas = function () {
        return this.db.collection('reservas').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    AuthProvider.prototype.getProductos = function () {
        return this.db.collection('productos').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    AuthProvider.prototype.nuevoPedido = function (data) {
        return this.db.collection('pedidos').add(data);
    };
    AuthProvider.prototype.getPedidos = function () {
        return this.db.collection('pedidos').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    AuthProvider.prototype.actualizarPedido = function (data) {
        return this.db.collection('pedidos').doc(data.id).update(data);
    };
    AuthProvider.prototype.getChat = function () {
        return this.db.collection('mensajes').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (rooms) {
            return rooms.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    AuthProvider.prototype.nuevoChat = function (data) {
        return this.db.collection('mensajes').add(data);
    };
    var _a, _b, _c;
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" ? _c : Object])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__principal_principal__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PagarPage = /** @class */ (function () {
    function PagarPage(navCtrl, navParams, auth, error, barcodeScanner, spinner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.barcodeScanner = barcodeScanner;
        this.spinner = spinner;
        this.mostrarSpiner = true;
        this.total = 0;
        this.propina = "sin propina";
        this.descuentoJuego = false;
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        this.auth.getPedidos().subscribe(function (lista) {
            for (var i = 0; i < lista.length; i++) {
                if (localStorage.getItem("delivery") == 'true') {
                    if (lista[i].correo == _this.usuario.correo && lista[i].estado == 'por pagar' && lista[i].delivery) {
                        _this.pedido = lista[i];
                        break;
                    }
                }
                else {
                    if (lista[i].correo == _this.usuario.correo && lista[i].estado == 'por pagar' && !lista[i].delivery) {
                        _this.pedido = lista[i];
                        break;
                    }
                }
            }
            _this.monto = _this.pedido.montoTotal;
            _this.total = _this.monto;
            if (localStorage.getItem("juegoDescuento") == 'true') {
                _this.descuento = _this.monto * 0.1;
                _this.descuentoJuego = true;
                _this.total -= _this.descuento;
            }
            _this.mostrarSpiner = false;
            _this.mostrar = true;
            console.log(_this.pedido);
            if (localStorage.getItem("delivery") == 'false') {
                _this.auth.getMesas().subscribe(function (lista) {
                    for (var i = 0; i < lista.length; i++) {
                        if (lista[i].numero == _this.pedido.numero) {
                            _this.mesa = lista[i];
                            break;
                        }
                    }
                });
            }
            console.log(_this.mesa);
        });
    }
    PagarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagarPage');
        this.mostrar = false;
        this.mostrarSpiner = false;
    };
    PagarPage.prototype.qr = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.codigo = barcodeData.text;
            var dato = _this.codigo.split(",");
            if (dato[0] == 'propina') {
                switch (dato[1]) {
                    case 'excelente':
                        _this.propina = _this.monto * 0.2;
                        _this.porcentaje = '20%';
                        break;
                    case 'Muy bien':
                        _this.propina = _this.monto * 0.15;
                        _this.porcentaje = '15%';
                        break;
                    case 'Bien':
                        _this.propina = _this.monto * 0.1;
                        _this.porcentaje = '10%';
                        break;
                    case 'Regular':
                        _this.propina = _this.monto * 0.05;
                        _this.porcentaje = '5%';
                        break;
                    case 'malo':
                        _this.propina = 0;
                        _this.porcentaje = '0%';
                        break;
                    default:
                        _this.propina = 0;
                        break;
                }
                _this.total = _this.monto;
                _this.total += _this.propina;
                if (_this.descuentoJuego) {
                    _this.total -= _this.descuento;
                }
                _this.total = parseFloat(_this.total).toFixed(2);
                _this.error.mostrarMensaje("Gracias!! Has incluido al pedido " + _this.porcentaje + " de propina");
            }
            else {
                _this.error.mostrarErrorLiteral('QR incorrecto');
            }
        }, function (error) {
            _this.error.mostrarErrorLiteral(error);
        });
    };
    PagarPage.prototype.pagar = function () {
        var _this = this;
        var spiner = this.spinner.getAllPageSpinner();
        spiner.present();
        this.pedido.estado = "pagado";
        this.auth.actualizarPedido(this.pedido).then(function (res) {
            if (localStorage.getItem("delivery") == 'false') {
                _this.mesa.estado = "libre";
                _this.auth.updateMesa(_this.mesa).then(function (res) {
                    spiner.dismiss();
                    _this.error.mostrarMensaje("Pedido pagado. Gracias por comer en nuestro restaurante");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__principal_principal__["a" /* PrincipalPage */]);
                });
            }
            else {
                spiner.dismiss();
                _this.error.mostrarMensaje("Pedido pagado. Gracias por comer de nuestro restaurante");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__principal_principal__["a" /* PrincipalPage */]);
            }
        });
    };
    PagarPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__principal_principal__["a" /* PrincipalPage */]);
    };
    var _a, _b, _c, _d, _e, _f;
    PagarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagar',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\pagar\pagar.html"*/'<!--\n\n  Generated template for the PagarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Cuenta</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n  <div *ngIf="mostrar">\n\n  <div style="width: 100%;text-align: center;margin: 0;position: relative;">\n\n    <h1>Cuenta</h1>\n\n  </div>\n\n  <ng-container *ngFor="let item of pedido.productos">\n\n\n\n      <div>\n\n        <span>{{item.nombre}}  *  {{item.cantidad}}</span><span style="float: right;">${{item.cantidad * item.precio}}</span>\n\n      </div>\n\n      <div class="puntos"></div>\n\n      \n\n  </ng-container>\n\n\n\n  <div >\n\n      <span class="total">Monto</span><span style="float: right;">${{monto}}</span>\n\n  </div>\n\n  <div class="puntos"></div>\n\n\n\n  <ng-container *ngIf="descuentoJuego">\n\n      <div>\n\n        <span>Descuento del 10% por jugar</span><span style="float: right;">(${{descuento}})</span>\n\n      </div>\n\n      <div class="puntos"></div>\n\n  </ng-container>\n\n\n\n  <div *ngIf="propina!=\'sin propina\'">\n\n      <span>Propina de {{porcentaje}}</span><span style="float: right;">${{propina}}</span>\n\n  </div>\n\n  <div class="puntos"></div>\n\n\n\n  <div >\n\n      <span class="total">Monto Total</span><span style="float: right;">${{total}}</span>\n\n  </div>\n\n  <div class="puntos"></div>\n\n\n\n  <span class="rating">¡Calificá nuestro servicio y dejá tu propina!</span>\n\n  <button ion-button block color="primary"  (click)="qr()">Leer QR de propina</button>\n\n  <button ion-button block color="primary"  (click)="pagar()">Pagar!</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\pagar\pagar.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__["a" /* SpinnerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__["a" /* SpinnerProvider */]) === "function" ? _f : Object])
    ], PagarPage);
    return PagarPage;
}());

//# sourceMappingURL=pagar.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaRutaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__juegos_juegos__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagar_pagar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MapaRutaPage = /** @class */ (function () {
    function MapaRutaPage(navCtrl, navParams, auth, error, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.modalCtrl = modalCtrl;
        this.mostrarSpiner = true;
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        if (this.usuario.tipo == 'cliente') {
            this.cliente = true;
            this.repartidor = false;
            this.auth.getPedidos().subscribe(function (lista) {
                var tienePedido = false;
                for (var i = 0; i < lista.length; i++) {
                    if (lista[i].correo == _this.usuario.correo && lista[i].estado != 'pagado' && lista[i].estado != 'cancelado' && lista[i].delivery) {
                        tienePedido = true;
                        _this.pedidoActual = lista[i];
                        console.log(_this.pedidoActual);
                        switch (_this.pedidoActual.estado) {
                            case 'esperando pedido':
                            case 'preparando pedido':
                            case 'parcialmente terminado':
                            case 'pedido terminado':
                                _this.estadosCliente = 2;
                                break;
                            case 'en camino':
                                _this.estadosCliente = 3;
                                break;
                            case 'por entregar':
                                _this.estadosCliente = 4;
                                break;
                            case 'por pagar':
                                _this.estadosCliente = 5;
                                break;
                        }
                    }
                }
                if (!tienePedido) {
                    _this.error.mostrarErrorLiteral('No tiene ningun pedido hecho por delivery');
                }
            });
        }
        else {
            this.cliente = false;
            this.repartidor = true;
            this.pedidosDelivery = new Array();
            this.auth.getPedidos().subscribe(function (lista) {
                _this.pedidosDelivery = [];
                for (var i = 0; i < lista.length; i++) {
                    if ((lista[i].estado == 'pedido terminado' || lista[i].estado == 'en camino') && lista[i].delivery) {
                        _this.pedidosDelivery.push(lista[i]);
                    }
                }
            });
        }
        this.mostrarSpiner = false;
    }
    MapaRutaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapaRutaPage');
        this.myColor = 'primary';
        this.otroColor = 'red';
    };
    MapaRutaPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    MapaRutaPage.prototype.mostrarJuegos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__juegos_juegos__["a" /* JuegosPage */]);
    };
    MapaRutaPage.prototype.hablar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__chat_chat__["a" /* ChatPage */]);
    };
    MapaRutaPage.prototype.aceptarPedido = function () {
        var _this = this;
        this.pedidoActual.estado = 'por pagar';
        this.auth.actualizarPedido(this.pedidoActual).then(function (res) {
            _this.error.mostrarMensaje('pedido aceptado');
        });
    };
    MapaRutaPage.prototype.cancelarPedido = function () {
        var _this = this;
        this.pedidoActual.estado = 'en camino';
        this.auth.actualizarPedido(this.pedidoActual).then(function (res) {
            _this.error.mostrarMensaje('Lo siento..Se le volverá a entregar cuando llegue el repartidor');
        });
    };
    MapaRutaPage.prototype.pagar = function () {
        localStorage.setItem('delivery', 'true');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pagar_pagar__["a" /* PagarPage */]);
    };
    MapaRutaPage.prototype.entregar = function (pedido) {
        var _this = this;
        if (pedido.estado == 'pedido terminado') {
            var yaEncamino = false;
            for (var i = 0; i < this.pedidosDelivery.length; i++) {
                if (this.pedidosDelivery[i].estado == 'en camino') {
                    yaEncamino = true;
                    break;
                }
            }
            if (yaEncamino) {
                this.error.mostrarErrorLiteral('Ya estas entregando un pedido. Hasta que no lo entregues no podes aceptar otro');
                return;
            }
            pedido.estado = 'en camino';
            this.auth.actualizarPedido(pedido).then(function (res) {
                _this.error.mostrarMensaje('Entregando pedido...');
            });
        }
        else {
            pedido.estado = 'por entregar';
            this.auth.actualizarPedido(pedido).then(function (res) {
                _this.error.mostrarMensaje('por entregar...');
            });
        }
    };
    MapaRutaPage.prototype.hablarCliente = function (pedido) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__chat_chat__["a" /* ChatPage */], { pedido: pedido }).present();
    };
    var _a, _b, _c, _d, _e;
    MapaRutaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa-ruta',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\mapa-ruta\mapa-ruta.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>mapaRuta</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n  <div *ngIf=\'repartidor\'>\n  <div class="mapouter">\n    <div class="gmap_canvas">\n      <iframe width="600" height="500" id="gmap_canvas" \n        src="https://maps.google.com/maps?q=mitre%20750&t=&z=19&ie=UTF8&iwloc=&output=embed" \n        frameborder="0" scrolling="no" marginheight="0" marginwidth="0">\n      </iframe>Google Maps by ASGARDIANOS</div>\n      <style>\n        .mapouter{\n          position:relative;\n          text-align:right;\n          height:400px;\n          width:600px;\n          }\n        .gmap_canvas {\n          overflow:hidden;\n          background:none!important;\n          height:400px;\n          width:600px;\n        }\n      </style>\n  </div>\n  <div class="sin-elementos" *ngIf="pedidosDelivery.length == 0">\n    <h1>No hay pedidos disponibles.</h1>\n  </div>\n  <ng-container *ngIf="pedidosDelivery.length > 0">\n    <h2 class="titulo"><u>Pedidos pendientes de entrega</u></h2>\n  </ng-container>\n  <ion-list>\n    <ion-item *ngFor="let pedido of pedidosDelivery">\n      <ion-thumbnail item-start >\n        <img src={{pedido.foto}}>\n      </ion-thumbnail>\n      <h1>{{pedido.direccion}}</h1>\n      <p>Correo • {{pedido.correo}}</p>\n      <p>Nombre • {{pedido.nombreCliente}}</p>\n      <p>Fecha • {{pedido.fecha}}</p>\n      <h2>{{pedido.estado}}</h2>\n      <div item-end style="display: flex; align-items: center;align-content: center;flex-direction: column;">\n\n          <button ion-button clear (click)="entregar(pedido)" style="margin-bottom: 20px; ">\n            <ion-icon style="color: rgb(14, 17, 212);" name="checkmark-circle"></ion-icon>\n          </button>\n  \n          <button ion-button clear (click)="hablarCliente(pedido)">\n            <ion-icon style="color: #FF0000;" name="chatboxes"></ion-icon>\n          </button>\n  \n      </div>\n    </ion-item>\n  </ion-list>\n  </div>\n  <div *ngIf=\'cliente\'>\n    <div *ngIf="estadosCliente == 2">\n      <ion-grid>\n        <ion-row>\n          <h4 class="estado">Estado: {{pedidoActual.estado}}</h4>\n        </ion-row>\n        <ion-row>\n          <ul *ngFor="let item of pedidoActual.productos">\n            <li>{{item.nombre}} -- {{item.estado}}</li>\n          </ul>\n        </ion-row>\n        <ion-row>\n          <h2>Monto Total: </h2><h4 class="estado">${{pedidoActual.montoTotal}}</h4>\n        </ion-row>\n        <img class="img-mozo" src="../../assets/Imagenes/mozo.png" alt="mozo">\n        <button ion-button block color="primary" (click)="mostrarJuegos()">Juegos por Descuentos</button>\n      </ion-grid>\n    </div>\n    <div *ngIf="estadosCliente == 3">\n      <ion-grid>\n        <ion-row>\n          <h4 class="estado">Estado: {{pedidoActual.estado}}</h4>\n        </ion-row>\n        <ion-row>\n          <h2>Monto Total: </h2><h4 class="estado">${{pedidoActual.montoTotal}}</h4>\n        </ion-row>\n        <img class="img-reserva" src="../../assets/Imagenes/repartidor.png" alt="mesa-reservada">\n        <button ion-button block color="primary" (click)="hablar()">Hablar con el repartidor</button>\n        <button ion-button block color="primary" (click)="mostrarJuegos()">Juegos por Descuentos</button>\n      </ion-grid>\n    </div>\n    <div class="flex-v buttons-container" *ngIf="estadosCliente == 4">\n      <ion-grid>\n        <ion-row>\n          <h4 class="estado">Estado: {{pedidoActual.estado}}</h4> \n          <h4 class="pregunta-title">¿Desea aceptar el pedido?</h4>\n        </ion-row>\n        <img class="img-mozo" src="../../assets/Imagenes/repartidor.png" alt="mozo">\n        <ion-card class="height-30 big-button-container" [color]="myColor">\n          <div class="flex-v center-horizontal center-vertical height-100" (click)="aceptarPedido()">\n            <div class="text-title">Aceptar</div>\n          </div>\n        </ion-card>\n        <ion-card class="height-30 big-button-container" [color]="otroColor">\n          <div class="flex-v center-horizontal center-vertical height-100" (click)="cancelarPedido()">\n            <div class="text-title">Cancelar</div>\n          </div>\n        </ion-card> \n      </ion-grid>\n    </div>\n    <div class="flex-v buttons-container" *ngIf="estadosCliente == 5">\n      <ion-grid>\n        <ion-row>\n          <h4 class="estado">Estado: {{pedidoActual.estado}}</h4>\n        </ion-row>\n        <ion-row>\n          <h2>Monto Total: </h2><h4 class="estado">${{pedidoActual.montoTotal}}</h4>\n        </ion-row>\n        <img class="img-reserva" src="../../assets/Imagenes/repartidor.png" alt="mesa-reservada">\n        <ion-card class="height-50 big-button-container" [color]="myColor">\n          <div class="flex-v center-horizontal center-vertical height-100" (click)="pagar()">\n            <div class="text-title">Pagar!</div>\n          </div>\n        </ion-card>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\mapa-ruta\mapa-ruta.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" ? _e : Object])
    ], MapaRutaPage);
    return MapaRutaPage;
}());

//# sourceMappingURL=mapa-ruta.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl, alert) {
        this.alertCtrl = alertCtrl;
        this.alert = alert;
    }
    AlertProvider_1 = AlertProvider;
    AlertProvider.prototype.mostrarError = function (error, title, message) {
        console.log("ocurrio un error", error);
        var errorMessage = this.getErrorMessage(error);
        var alert = this.alert.create({
            position: "middle",
            duration: 3000,
            cssClass: 'error-alert',
            message: message ? message + errorMessage : errorMessage,
        });
        alert.present();
    };
    AlertProvider.prototype.mostrarErrorLiteral = function (error, title) {
        var alert = this.alert.create({
            position: "topo",
            duration: 3000,
            message: error,
            cssClass: 'error-alert'
        });
        alert.present();
    };
    AlertProvider.prototype.getErrorMessage = function (error) {
        var mensaje = "Error desconocido";
        for (var i = 0; i < AlertProvider_1.knownErrors.length; i++) {
            if (error.code == AlertProvider_1.knownErrors[i].code) {
                mensaje = AlertProvider_1.knownErrors[i].message;
                break;
            }
        }
        return mensaje;
    };
    AlertProvider.prototype.mostrarMensajeConfimación = function (mensaje, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: mensaje,
            cssClass: 'confirm-alert',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss(false);
                        return false;
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        alert.dismiss(true);
                        return false;
                    }
                }
            ]
        });
        return alert;
    };
    AlertProvider.prototype.mostrarMensaje = function (mesagge) {
        var alert = this.alert.create({
            message: mesagge,
            duration: 2500,
            position: "topo",
            cssClass: 'success-alert',
        });
        alert.present();
    };
    var AlertProvider_1;
    AlertProvider.knownErrors = [
        {
            code: 'auth/email-already-in-use',
            message: "El correo ya existe"
        },
        {
            code: 'auth/user-not-found',
            message: "El correo no se encuentra registrado"
        },
        {
            code: 'auth/wrong-password',
            message: "Contraseña Incorrecta"
        },
        {
            code: "auth/network-request-failed",
            message: "No hay conexión a internet"
        },
        {
            code: "auth/invalid-email",
            message: "Correo inválido"
        },
        {
            code: "auth/weak-password",
            message: "La contraseña debe tener mínimo 6 caracteres"
        }
    ];
    AlertProvider = AlertProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__altaempleado_altaempleado__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alta_de_mesa_alta_de_mesa__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_alta_supervisor_alta_supervisor__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_encuesta_empleado_encuesta_empleado__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_lista_cliente_estado_lista_cliente_estado__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pedidos_pendientes_pedidos_pendientes__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__listado_supervisor_listado_supervisor__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reserva_reserva__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__listado_reserva_listado_reserva__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pedir_platos_pedir_platos__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__listado_mesas_listado_mesas__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__alta_de_producto_alta_de_producto__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__confirmar_pedido_confirmar_pedido__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_cliente_home_cliente__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_listado_clientes_listado_clientes__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__mapa_ruta_mapa_ruta__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__confirmar_delivery_confirmar_delivery__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












//import { AltaClienteComponent } from '../../components/alta-cliente/alta-cliente';

//import { FcmProvider } from '../../providers/fcm/fcm';
//import { ToastController } from 'ionic-angular';
//import { tap } from 'rxjs/operators';




//import { EstadisticasSupervisorPage } from '../estadisticas-supervisor/estadisticas-supervisor';
//import { JuegosPage } from '../juegos/juegos';

//import { PagarPage } from '../pagar/pagar';




/**
 * Generated class for the PrincipalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, navParams, error, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.error = error;
        this.auth = auth;
        this.acciones = [];
        //private fcm: FcmProvider, 
        //private toastCtrl: ToastController) {
        /*this.fcm.getToken()
  
      // Listen to incoming messages
      this.fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          const toast = this.toastCtrl.create({
            message: msg.body,
            duration: 3000,
            position: 'top',
            cssClass: 'nombreRaro'
  
          });
  
          toast.present();
        })
      )
        .subscribe()*/
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        console.log(this.usuario.tipo);
        switch (this.usuario.tipo) {
            case "cocinero":
            case "bartender":
                this.acciones = [
                    { accion: "Pedidos Pendientes", img: "bandeja.png", ruta: __WEBPACK_IMPORTED_MODULE_10__components_pedidos_pendientes_pedidos_pendientes__["a" /* PedidosPendientesComponent */] },
                    { accion: "Nuevo producto", img: "producto.png", ruta: __WEBPACK_IMPORTED_MODULE_16__alta_de_producto_alta_de_producto__["a" /* AltaDeProductoPage */] },
                    { accion: "Encuesta empleado", img: "encuesta.jpg", ruta: __WEBPACK_IMPORTED_MODULE_8__components_encuesta_empleado_encuesta_empleado__["a" /* EncuestaEmpleadoComponent */] },
                ];
                break;
            case "supervisor":
                this.acciones = [
                    { accion: "Agregar un empleado", img: "nuevo-empleado.jpg", ruta: __WEBPACK_IMPORTED_MODULE_3__altaempleado_altaempleado__["a" /* AltaempleadoPage */] },
                    { accion: "Nuevo Supervisor", img: "nuevo-empleado.jpg", ruta: __WEBPACK_IMPORTED_MODULE_7__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */] },
                    { accion: "Confeccionar y ver encuestas", img: "encuesta.jpg", ruta: __WEBPACK_IMPORTED_MODULE_11__listado_supervisor_listado_supervisor__["a" /* ListadoSupervisorPage */] },
                    { accion: "Nueva mesa", img: "ocupar-mesa.jpg", ruta: __WEBPACK_IMPORTED_MODULE_4__alta_de_mesa_alta_de_mesa__["a" /* AltaDeMesaPage */] },
                    { accion: "Ver Estado de Registro de Clientes", img: "nuevo-empleado.jpg", ruta: __WEBPACK_IMPORTED_MODULE_9__components_lista_cliente_estado_lista_cliente_estado__["a" /* ListaClienteEstadoComponent */] },
                    { accion: "Confirmar reservas", img: "reserva.jpg", ruta: __WEBPACK_IMPORTED_MODULE_13__listado_reserva_listado_reserva__["a" /* ListadoReservaPage */] },
                    { accion: "Confirmar pedido por delivery", img: "reserva.jpg", ruta: __WEBPACK_IMPORTED_MODULE_21__confirmar_delivery_confirmar_delivery__["a" /* ConfirmarDeliveryPage */] },
                ];
                break;
            case "cliente anonimo":
                this.acciones = [
                    { accion: "Leer código QR", img: "qr.jpg", ruta: __WEBPACK_IMPORTED_MODULE_18__components_home_cliente_home_cliente__["a" /* HomeClienteComponent */] },
                ];
                break;
            case "cliente":
                this.acciones = [
                    { accion: "Reservar", img: "reserva.jpg", ruta: __WEBPACK_IMPORTED_MODULE_12__reserva_reserva__["a" /* ReservaPage */] },
                    { accion: "Leer código QR", img: "qr.jpg", ruta: __WEBPACK_IMPORTED_MODULE_18__components_home_cliente_home_cliente__["a" /* HomeClienteComponent */] },
                    { accion: "Pedir platos y bebidas", img: "pedido.jpg", ruta: __WEBPACK_IMPORTED_MODULE_14__pedir_platos_pedir_platos__["a" /* PedirPlatosPage */] },
                    { accion: "Pedir por delivery", img: "pedido.jpg", ruta: __WEBPACK_IMPORTED_MODULE_14__pedir_platos_pedir_platos__["a" /* PedirPlatosPage */] },
                    { accion: "Estado pedido delivery y chat con el repartidor", img: "chat.png", ruta: __WEBPACK_IMPORTED_MODULE_20__mapa_ruta_mapa_ruta__["a" /* MapaRutaPage */] },
                ];
                break;
            case "mozo":
                this.acciones = [
                    { accion: "Tomar pedido", img: "pedido.jpg", ruta: __WEBPACK_IMPORTED_MODULE_15__listado_mesas_listado_mesas__["a" /* ListadoMesasPage */] },
                    { accion: "Aceptar/Entregar pedido", img: "pedido.jpg", ruta: __WEBPACK_IMPORTED_MODULE_17__confirmar_pedido_confirmar_pedido__["a" /* ConfirmarPedidoPage */] },
                    { accion: "Aceptar clientes en lista de espera", img: "qr.jpg", ruta: __WEBPACK_IMPORTED_MODULE_19__components_listado_clientes_listado_clientes__["a" /* ListadoClientesComponent */] },
                    { accion: "Encuesta empleado", img: "encuesta.jpg", ruta: __WEBPACK_IMPORTED_MODULE_8__components_encuesta_empleado_encuesta_empleado__["a" /* EncuestaEmpleadoComponent */] },
                ];
                break;
            case 'repartidor':
                this.acciones = [
                    { accion: "Mapa ruta", img: "mapa.jpg", ruta: __WEBPACK_IMPORTED_MODULE_20__mapa_ruta_mapa_ruta__["a" /* MapaRutaPage */] },
                ];
        }
        /*
                if(this.usuario.tipo == 'cliente')
                {
                  this.auth.getPedidos().subscribe(lista => {
                    for(let i=0;i<lista.length;i++)
                    {
                      if(lista[i].correo == this.usuario.correo && lista[i].estado == 'camino a entrega') {
                        let alertConfirm = this.error.mostrarMensajeConfimación("¿Quieres aceptar el pedido?", "Pedido por entregar");
                        alertConfirm.present();
                        alertConfirm.onDidDismiss((confirm) => {
                        if (confirm) {
                          lista[i].estado = 'comiendo';
                          this.auth.actualizarPedido(lista[i]).then(res => {
                            this.error.mostrarMensaje("pedido entregado. Disfrutelo");
                          });
                        }
                        else {
                          lista[i].estado = 'pedido terminado';
                          this.auth.actualizarPedido(lista[i]).then(res => {
                            this.error.mostrarMensaje("Perdon, se le volverà a entregar el pedido si todavia no esta listo");
                          });
                        }
                        });
                        break;
                      }
                    }
                  })
                }
                */
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
    };
    PrincipalPage.prototype.logout = function () {
        var _this = this;
        var alertConfirm = this.error.mostrarMensajeConfimación("¿Quieres cerrar sesión?", "Cerrar sesión");
        alertConfirm.present();
        alertConfirm.onDidDismiss(function (confirm) {
            if (confirm) {
                _this.cerrarSersion();
            }
        });
    };
    PrincipalPage.prototype.cerrarSersion = function () {
        this.auth.logOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { 'fromApp': true });
    };
    PrincipalPage.prototype.openPage = function (item) {
        if (item.accion == 'Pedir por delivery') {
            localStorage.setItem('delivery', 'true');
        }
        else {
            localStorage.setItem('delivery', 'false');
        }
        this.navCtrl.setRoot(item.ruta);
    };
    var _a, _b, _c, _d;
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\principal\principal.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of acciones" (click)="openPage(p.ruta)">\n\n        {{p.accion}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary" #content>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Principal</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logout()">\n\n        <ion-icon name="power"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page" padding>\n\n\n\n  <button ion-button *ngFor="let item of acciones" (click)="openPage(item)">\n\n    <div class="sombreado"></div>\n\n    <img src="../../assets/Imagenes/{{item.img}}" />\n\n    <span>{{item.accion}}</span>\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]) === "function" ? _d : Object])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qr_mesa_qr_mesa__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qr_entrada_qr_entrada__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_listado_encuestas_listado_encuestas__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the HomeClienteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HomeClienteComponent = /** @class */ (function () {
    function HomeClienteComponent(scanner, navCtrl, modalCtrl, error) {
        this.scanner = scanner;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.error = error;
        this.codigo = "";
        this.escanear();
    }
    HomeClienteComponent.prototype.escanear = function () {
        var _this = this;
        this.codigo = '';
        this.scanner.scan().then(function (barcodeData) {
            //alert(barcodeData.text);
            _this.codigo = barcodeData.text;
            localStorage.setItem("codigo", _this.codigo);
            var dato = _this.codigo.split(',');
            switch (dato[0]) {
                case 'mesa':
                    _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__qr_mesa_qr_mesa__["a" /* QrMesaComponent */], { codigo: dato }).present();
                    break;
                case 'producto':
                    _this.error.mostrarErrorLiteral("Codigo no valido");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
                    break;
                case 'encuesta':
                    _this.error.mostrarErrorLiteral("Codigo no valido");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
                    break;
                case 'verEncuestasOtrosClientes':
                    _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_listado_encuestas_listado_encuestas__["a" /* ListadoEncuestasPage */]).present();
                    break;
                case 'propina':
                    _this.error.mostrarErrorLiteral("Codigo no valido");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
                    break;
                case 'entrada':
                    _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__qr_entrada_qr_entrada__["a" /* QrEntradaComponent */]).present();
                    break;
                default:
                    _this.error.mostrarErrorLiteral("Codigo no valido");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
                    break;
            }
        }).catch(function (err) {
            console.log('Error', err);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
        });
        if (this.codigo == '') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
        }
    };
    HomeClienteComponent.prototype.codigoMesa = function () {
        //this.navCtrl.setRoot(QrMesaComponent);
        //this.codigo[0] = 1;
        //this.modalCtrl.create(QrMesaComponent, { codigo: this.codigo }).present();
    };
    HomeClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-cliente',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\home-cliente\home-cliente.html"*/'	\n\n  <button ion-button block color="primary" (click)="escanear()">Escanear Código</button>\n\n  <button ion-button block color="primary" (click)="codigoMesa()">Código Mesa</button>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\home-cliente\home-cliente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]])
    ], HomeClienteComponent);
    return HomeClienteComponent;
}());

//# sourceMappingURL=home-cliente.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaDeMesaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AltaDeMesaPage = /** @class */ (function () {
    function AltaDeMesaPage(navCtrl, navParams, auth, error, camera, barcodeScanner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.camera = camera;
        this.barcodeScanner = barcodeScanner;
        this.tipo = "normal";
        this.foto = "../../assets/Imagenes/ocupar-mesa.jpg";
        this.mostrarSpiner = false;
        this.mesas = new Array();
        this.auth.getMesas().subscribe(function (lista) {
            _this.mesas = lista;
        });
        console.log(this.mesas);
    }
    AltaDeMesaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AltaDeMesaPage');
    };
    AltaDeMesaPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    AltaDeMesaPage.prototype.Alta = function () {
        var _this = this;
        //let spiner=this.spiner.getAllPageSpinner();
        //spiner.present();
        console.log(this.mesas);
        this.mostrarSpiner = true;
        if (!this.numeroMesa || !this.cantidadComensales || !this.tipo || this.foto == "") {
            this.error.mostrarErrorLiteral("Todos los campos deben ser completados.");
            this.mostrarSpiner = false;
            return;
        }
        if (this.cantidadComensales < 1 || this.cantidadComensales > 8) {
            this.error.mostrarErrorLiteral("Los comensales solo pueden ser de 1 a 8.");
            this.mostrarSpiner = false;
            return;
        }
        var esValido = true;
        for (var i = 0; i < this.mesas.length; i++) {
            if (this.mesas[i].numero == this.numeroMesa) {
                this.error.mostrarErrorLiteral("El numero ingresado ya corresponde a otra mesa registrada.");
                esValido = false;
                break;
            }
        }
        if (esValido) {
            var data = {
                "numero": this.numeroMesa, "cantidadComensales": this.cantidadComensales, "foto": this.foto,
                "tipo": this.tipo, "estado": "libre", "cliente": ""
            };
            this.auth.guardarMesa(data).then(function (res) {
                _this.error.mostrarMensaje("mesa registrada");
                _this.LimpiarCampos();
                _this.mostrarSpiner = false;
            }).catch(function (error) {
                _this.error.mostrarError(error, "error al registrar la mesa");
                _this.mostrarSpiner = false;
            });
        }
        else {
            this.mostrarSpiner = false;
        }
    };
    AltaDeMesaPage.prototype.LimpiarCampos = function () {
        this.numeroMesa = "";
        this.cantidadComensales = "";
        this.tipo = "normal";
        this.foto = "../../assets/Imagenes/ocupar-mesa.jpg";
    };
    AltaDeMesaPage.prototype.SacarFoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.foto = "data:image/jpeg;base64," + imageData;
        });
    };
    AltaDeMesaPage.prototype.InicializarLectorQR = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.codigo = barcodeData.text;
            var dato = _this.codigo.split(",");
            _this.numeroMesa = dato[1];
            _this.cantidadComensales = dato[3];
            _this.tipo = dato[2];
        }, function (error) {
            _this.error.mostrarErrorLiteral(error);
        });
    };
    AltaDeMesaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alta-de-mesa',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\alta-de-mesa\alta-de-mesa.html"*/'<!--\n\n  Generated template for the AltaDeMesaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Registrar Mesa</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-list inset>\n\n        <ion-item>\n\n          <ion-input type="text" class="numeroMesa" placeholder="Número de mesa" name="email" [(ngModel)]="numeroMesa" ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" class="numeroMesa"  placeholder="Cantidad de comensales" name="password" [(ngModel)]="cantidadComensales"></ion-input>\n\n        </ion-item>\n\n        <select [(ngModel)]="tipo" class="numeroMesa" style="margin: 0 30px 0 0;width: 70%;display: block; margin: 0 auto;">\n\n          <option value="normal">Tipo de mesa normal</option>\n\n          <option value="vip">Tipo de mesa VIP</option>\n\n          <option value="discapacitados">Tipo de mesa discapacitados</option>              \n\n        </select>\n\n        <ion-item>\n\n          <img [src]="foto" alt="" height="125px" width="125px">\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button outline color="red" class="sacarFoto" (click)="SacarFoto()">Sacar foto</button>\n\n      <button ion-button color="red" class="sacarFoto" (click)="InicializarLectorQR()">Leer QR</button>\n\n      <button ion-button color="red" class="botonAlta" (click)="Alta()" >Registrar mesa</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\alta-de-mesa\alta-de-mesa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AltaDeMesaPage);
    return AltaDeMesaPage;
}());

//# sourceMappingURL=alta-de-mesa.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AltaempleadoPage = /** @class */ (function () {
    function AltaempleadoPage(navCtrl, navParams, auth, error, camera, barcodeScanner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.camera = camera;
        this.barcodeScanner = barcodeScanner;
        this.tipo = "mozo";
        this.foto = "../../assets/Imagenes/perfil.png";
        this.mostrarSpiner = false;
        this.usuarios = new Array();
        this.auth.getLista("usuarios").subscribe(function (lista) {
            _this.usuarios = lista;
        });
    }
    AltaempleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AltaempleadoPage');
    };
    AltaempleadoPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    AltaempleadoPage.prototype.ValidarNumero = function (numero) {
        var arrayNumero = numero.split("");
        for (var _i = 0, arrayNumero_1 = arrayNumero; _i < arrayNumero_1.length; _i++) {
            var caracter = arrayNumero_1[_i];
            if (isNaN(parseInt(caracter))) {
                return false;
            }
        }
        return true;
    };
    AltaempleadoPage.prototype.validarDNI = function (numero) {
        if (numero.length == 8) {
            return this.ValidarNumero(numero);
        }
        else {
            return false;
        }
    };
    AltaempleadoPage.prototype.validarCuil = function (numero) {
        if (numero.length == 11 && this.ValidarNumero(numero)) {
            var dni = numero.substring(2, 10);
            console.log(dni);
            if (dni == this.dni) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    AltaempleadoPage.prototype.Registrar = function () {
        var _this = this;
        this.mostrarSpiner = true;
        if (!this.correo || !this.clave || !this.nombre || !this.apellido || !this.dni || !this.cuil) {
            this.error.mostrarErrorLiteral("Todos los campos deben ser completados.");
            this.mostrarSpiner = false;
            return;
        }
        if (!this.validarDNI(this.dni)) {
            this.error.mostrarErrorLiteral("El DNI ingresado no es válido.");
            this.mostrarSpiner = false;
            return;
        }
        if (!this.validarCuil(this.cuil)) {
            this.error.mostrarErrorLiteral("El CUIL ingresado no es válido.");
            this.mostrarSpiner = false;
            return;
        }
        var esValido = true;
        for (var i = 0; i < this.usuarios.length; i++) {
            if (parseInt(this.usuarios[i].dni) == parseInt(this.dni)) {
                this.error.mostrarErrorLiteral("El DNI ingresado ya corresponde a otro usuario registrado.");
                esValido = false;
                break;
            }
        }
        if (esValido) {
            this.auth.crearUsuario(this.correo, this.clave).then(function (res) {
                var data = {
                    "correo": _this.correo, "cuil": _this.cuil, "dni": _this.dni, "nombre": _this.nombre, "apellido": _this.apellido,
                    "estado": "", "foto": _this.foto, "logueado": false, "tipo": _this.tipo
                };
                _this.auth.guardarUsuario(data).then(function (res) {
                    _this.error.mostrarMensaje("Empleado registrado");
                    _this.LimpiarCampos();
                    _this.mostrarSpiner = false;
                });
            }).catch(function (error) {
                _this.error.mostrarError(error, "error al registrar el usuario");
                _this.mostrarSpiner = false;
            });
        }
        else {
            this.mostrarSpiner = false;
        }
    };
    AltaempleadoPage.prototype.SacarFoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.foto = "data:image/jpeg;base64," + imageData;
        });
    };
    AltaempleadoPage.prototype.InicializarLectorQR = function () {
        var _this = this;
        var options = { prompt: "Escaneá el DNI", formats: "PDF_417" };
        this.barcodeScanner.scan(options).then(function (barcodeData) {
            var dniDatos = barcodeData.text.split("@");
            _this.apellido = dniDatos[1];
            _this.nombre = dniDatos[2];
            _this.dni = dniDatos[4];
            _this.cuil = dniDatos[8][0] + dniDatos[8][1] + _this.dni + dniDatos[8][2];
            _this.datos = dniDatos;
        }).catch(function (err) { });
    };
    AltaempleadoPage.prototype.LimpiarCampos = function () {
        this.correo = undefined;
        this.clave = undefined;
        this.nombre = undefined;
        this.apellido = undefined;
        this.dni = undefined;
        this.cuil = undefined;
        this.tipo = "mozo";
        this.foto = "../../assets/Imagenes/perfil.png";
    };
    AltaempleadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-altaempleado',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\altaempleado\altaempleado.html"*/'<!--\n\n  Generated template for the AltaempleadoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Registro de empleado</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="vertical-container">\n\n      <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n    <h2>Agregar un empleado</h2>\n\n    <input type="text" placeholder="Correo electrónico" [(ngModel)]="correo" />\n\n    <input type="text" placeholder="Nombre" [(ngModel)]="nombre" />\n\n    <input type="text" placeholder="Apellido" [(ngModel)]="apellido" />\n\n    <div class="header" style="width: 75%;margin: 20px 0 20px 0;">\n\n      <input type="text" placeholder="DNI" style="margin: 0 15px 0 0; width: 50%" [(ngModel)]="dni" />\n\n      <input type="text" placeholder="CUIL" style="margin: 0;width: 50%" [(ngModel)]="cuil" />\n\n    </div>\n\n  \n\n    <input type="password" placeholder="Contraseña" [(ngModel)]="clave" />\n\n  \n\n    <select [(ngModel)]="tipo">\n\n      <option value="mozo">Mozo</option>\n\n      <option value="cocinero">Cocinero</option>\n\n      <option value="bartender">Bartender</option>\n\n      <option value="metre">Metre</option>\n\n      <option value="repartidor">Repartidor</option>\n\n    </select>\n\n  \n\n    <img [src]="foto" alt="" height="35px" width="35px">\n\n  \n\n    <div class="header" style="width: 75%;margin: 20px 0 20px 0;">\n\n      <button ion-button color="red" class="alta" style="margin: 0 30px 0 0;width: 50%" (click)="SacarFoto()">Sacar\n\n        foto</button>\n\n      <button ion-button color="red" class="alta" style="margin: 0;width: 50%" (click)="InicializarLectorQR()">QR</button>\n\n  \n\n    </div>\n\n  \n\n    <button ion-button color="red" [disabled]="estadoBoton" class="alta" (click)="Registrar()">Registrar</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\altaempleado\altaempleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AltaempleadoPage);
    return AltaempleadoPage;
}());

//# sourceMappingURL=altaempleado.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoSupervisorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__encuesta_supervisor_encuesta_supervisor__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListadoSupervisorPage = /** @class */ (function () {
    function ListadoSupervisorPage(navCtrl, navParams, modalCtrl, auth, spinner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.spinner = spinner;
        this.image = "";
        this.ocultarImagen = false;
        this.listaClientes = new Array();
        this.listaEmpleados = new Array();
        this.listaUsuarios = new Array();
        var spiner = this.spinner.getAllPageSpinner();
        spiner.present();
        this.auth.getLista('usuarios').subscribe(function (lista) {
            _this.listaUsuarios = lista;
            for (var i = 0; i < _this.listaUsuarios.length; i++) {
                if (_this.listaUsuarios[i].tipo == 'cliente') {
                    _this.listaClientes.push(_this.listaUsuarios[i]);
                }
                else if (_this.listaUsuarios[i].tipo == 'mozo' || _this.listaUsuarios[i].tipo == 'cocinero' || _this.listaUsuarios[i].tipo == 'bartender' || _this.listaUsuarios[i].tipo == 'metre' || _this.listaUsuarios[i].tipo == 'repartidor') {
                    _this.listaEmpleados.push(_this.listaUsuarios[i]);
                }
            }
            console.log(_this.listaClientes);
            console.log(_this.listaEmpleados);
            spiner.dismiss();
        });
    }
    ListadoSupervisorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListadoSupervisorPage');
    };
    ListadoSupervisorPage.prototype.MostrarEncuesta = function (usuario) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__encuesta_supervisor_encuesta_supervisor__["a" /* EncuestaSupervisorPage */], { usuario: usuario }).present();
    };
    ListadoSupervisorPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__principal_principal__["a" /* PrincipalPage */]);
    };
    ListadoSupervisorPage.prototype.MostrarImagen = function (imagen) {
        this.image = imagen;
        this.ocultarImagen = true;
    };
    ListadoSupervisorPage.prototype.OcultarImagen = function () {
        this.ocultarImagen = false;
    };
    ListadoSupervisorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listado-supervisor',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-supervisor\listado-supervisor.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Listado de Usuarios</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<div class="imagen" *ngIf="ocultarImagen">\n\n\n\n  <ion-icon name="close" (click)="OcultarImagen()"></ion-icon>\n\n  <img [src]="image" alt="">\n\n\n\n</div>\n\n\n\n<ion-content padding>\n\n  <ng-container>\n\n    <h2 class="titulo"><u>Empleados</u></h2>\n\n  </ng-container>\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let item of listaEmpleados">\n\n      <ion-thumbnail item-start (click)="MostrarImagen(item.foto)">\n\n        <img src={{item.foto}}>\n\n      </ion-thumbnail>\n\n\n\n      <h1>{{item.apellido}}, {{item.nombre}}</h1>\n\n      <p>Empleado • {{item.tipo}}</p>\n\n      <p>CUIL • {{item.cuil}}</p>\n\n\n\n      <button ion-button clear item-end (click)="MostrarEncuesta(item)">\n\n        <ion-icon name="clipboard"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <ng-container>\n\n    <h2 class="titulo"><u>Clientes</u></h2>\n\n  </ng-container>\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let item of listaClientes">\n\n\n\n      <ion-thumbnail item-start (click)="MostrarImagen(item.foto)">\n\n        <img src={{item.foto}} />\n\n      </ion-thumbnail>\n\n\n\n      <h1>{{item.apellido}}, {{item.nombre}}</h1>\n\n      <p>{{item.tipo}}</p>\n\n      <p>DNI • {{item.dni}}</p>\n\n\n\n      <button ion-button clear item-end (click)="MostrarEncuesta(item)">\n\n        <ion-icon name="clipboard"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-supervisor\listado-supervisor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__["a" /* SpinnerProvider */]])
    ], ListadoSupervisorPage);
    return ListadoSupervisorPage;
}());

//# sourceMappingURL=listado-supervisor.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaSupervisorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__estadisticas_supervisor_estadisticas_supervisor__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EncuestaSupervisorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EncuestaSupervisorPage = /** @class */ (function () {
    function EncuestaSupervisorPage(navCtrl, navParams, auth, error, spiner, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.spiner = spiner;
        this.modalCtrl = modalCtrl;
        this.pregunta1Labels = ['Pésimo', 'Malo', 'Mediocre', 'Bueno', 'Excelente'];
        this.pregunta1Data = [0, 0, 0, 0, 0];
        this.pregunta2Labels = ['Sí', 'No'];
        this.pregunta2Data = [0, 0];
        this.pregunta3Labels = ['Mala conducta', 'Mala presentación', 'Poca formalidad', 'Buena conducta', 'Buena presentacion', 'Buena formalidad'];
        this.pregunta3Data = [0, 0, 0, 0, 0, 0];
        this.pregunta4Labels = ['Muy bueno', 'Bueno', 'Normal', 'Malo'];
        this.pregunta4Data = [0, 0, 0, 0];
        this.pregunta5Labels = ['Siempre deja propina', 'Suele dejar buena propina', 'Suele dejar poca propina', 'Nunca deja propina'];
        this.pregunta5Data = [0, 0, 0, 0];
        this.pregunta6Labels = ['Todos los dias', 'Bastante frecuente', 'Poco', 'Casi nunca'];
        this.pregunta6Data = [0, 0, 0, 0];
        this.comentarios = [];
        this.conducta = 3;
        this.textoRange = "Mediocre";
        this.inconveniente = "0";
        this.aspectos = { item1: false, item2: false, item3: false, item4: false, item5: false, item6: false };
        this.prescencia = "1";
        this.propina = "2";
        this.opinion = "";
        this.prescenciaCliente = "1";
        var spinner = this.spiner.getAllPageSpinner();
        spinner.present();
        this.usuario = navParams.get("usuario");
        console.log(this.usuario);
        this.encUsuarios = new Array();
        this.auth.getEncUsuarios().subscribe(function (lista) {
            _this.encUsuarios = lista;
            var bandera = true;
            for (var i = 0; i < _this.encUsuarios.length; i++) {
                if (_this.encUsuarios[i].correo == _this.usuario.correo) {
                    bandera = false;
                    _this.encUsuarioActual = _this.encUsuarios[i];
                    break;
                }
            }
            if (bandera) {
                var data = {
                    "correo": _this.usuario.correo,
                    "pregunta1": {
                        "pesimo": 0,
                        "malo": 0,
                        "mediocre": 0,
                        "bueno": 0,
                        "excelente": 0
                    },
                    "pregunta2": {
                        "si": 0,
                        "no": 0
                    },
                    "pregunta3": {
                        "item1": 0,
                        "item2": 0,
                        "item3": 0,
                        "item4": 0,
                        "item5": 0,
                        "item6": 0
                    },
                    "pregunta4": {
                        "MuyBueno": 0,
                        "Bueno": 0,
                        "Normal": 0,
                        "Malo": 0
                    },
                    "comentarios": [""],
                    "pregunta5": {
                        "item1": 0,
                        "item2": 0,
                        "item3": 0,
                        "item4": 0
                    },
                    "pregunta6": {
                        "item1": 0,
                        "item2": 0,
                        "item3": 0,
                        "item4": 0
                    }
                };
                _this.auth.nuevaEncuesta(data).then(function (res) {
                    spinner.dismiss();
                }).catch(function (error) {
                    _this.error.mostrarError(error, "error al mostrar la encuesta");
                    _this.navCtrl.pop();
                });
            }
            else {
                spinner.dismiss();
            }
        });
    }
    EncuestaSupervisorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EncuestaSupervisorPage');
    };
    EncuestaSupervisorPage.prototype.VolverAtras = function () {
        this.navCtrl.pop();
    };
    EncuestaSupervisorPage.prototype.ModificarTextoRange = function () {
        var arrayAux = ['Pésimo', 'Malo', 'Mediocre', 'Bueno', 'Excelente'];
        this.textoRange = arrayAux[this.conducta - 1];
    };
    EncuestaSupervisorPage.prototype.HacerEncuesta = function () {
        var _this = this;
        var spiner = this.spiner.getAllPageSpinner();
        spiner.present();
        var pregunta1 = [this.encUsuarioActual.pregunta1.pesimo, this.encUsuarioActual.pregunta1.malo, this.encUsuarioActual.pregunta1.mediocre, this.encUsuarioActual.pregunta1.bueno, this.encUsuarioActual.pregunta1.excelente];
        pregunta1[this.conducta - 1]++;
        var pregunta2 = [this.encUsuarioActual.pregunta2.no, this.encUsuarioActual.pregunta2.si];
        pregunta2[this.inconveniente]++;
        this.encUsuarioActual.pregunta1.pesimo = pregunta1[0];
        this.encUsuarioActual.pregunta1.malo = pregunta1[1];
        this.encUsuarioActual.pregunta1.mediocre = pregunta1[2];
        this.encUsuarioActual.pregunta1.bueno = pregunta1[3];
        this.encUsuarioActual.pregunta1.excelente = pregunta1[4];
        this.encUsuarioActual.pregunta2.no = pregunta2[0];
        this.encUsuarioActual.pregunta2.si = pregunta2[1];
        if (this.usuario.tipo != 'cliente') {
            var pregunta3 = [];
            pregunta3[0] = (this.aspectos.item1) ? this.encUsuarioActual.pregunta3.item1 + 1 : this.encUsuarioActual.pregunta3.item1;
            pregunta3[1] = (this.aspectos.item2) ? this.encUsuarioActual.pregunta3.item2 + 1 : this.encUsuarioActual.pregunta3.item2;
            pregunta3[2] = (this.aspectos.item3) ? this.encUsuarioActual.pregunta3.item3 + 1 : this.encUsuarioActual.pregunta3.item3;
            pregunta3[3] = (this.aspectos.item4) ? this.encUsuarioActual.pregunta3.item4 + 1 : this.encUsuarioActual.pregunta3.item4;
            pregunta3[4] = (this.aspectos.item5) ? this.encUsuarioActual.pregunta3.item5 + 1 : this.encUsuarioActual.pregunta3.item5;
            pregunta3[5] = (this.aspectos.item6) ? this.encUsuarioActual.pregunta3.item6 + 1 : this.encUsuarioActual.pregunta3.item6;
            var pregunta4 = [this.encUsuarioActual.pregunta4.MuyBueno, this.encUsuarioActual.pregunta4.Bueno, this.encUsuarioActual.pregunta4.Normal, this.encUsuarioActual.pregunta4.Malo];
            pregunta4[this.prescencia]++;
            this.encUsuarioActual.pregunta3.item1 = pregunta3[0];
            this.encUsuarioActual.pregunta3.item2 = pregunta3[1];
            this.encUsuarioActual.pregunta3.item3 = pregunta3[2];
            this.encUsuarioActual.pregunta3.item4 = pregunta3[3];
            this.encUsuarioActual.pregunta3.item5 = pregunta3[4];
            this.encUsuarioActual.pregunta3.item6 = pregunta3[5];
            this.encUsuarioActual.pregunta4.MuyBueno = pregunta4[0];
            this.encUsuarioActual.pregunta4.Bueno = pregunta4[1];
            this.encUsuarioActual.pregunta4.Normal = pregunta4[2];
            this.encUsuarioActual.pregunta4.Malo = pregunta4[3];
        }
        else {
            var pregunta5 = [this.encUsuarioActual.pregunta5.item1, this.encUsuarioActual.pregunta5.item2, this.encUsuarioActual.pregunta5.item3, this.encUsuarioActual.pregunta5.item4];
            pregunta5[this.propina]++;
            var pregunta6 = [this.encUsuarioActual.pregunta6.item1, this.encUsuarioActual.pregunta6.item2, this.encUsuarioActual.pregunta6.item3, this.encUsuarioActual.pregunta6.item4];
            pregunta6[this.prescenciaCliente]++;
            this.encUsuarioActual.pregunta5.item1 = pregunta5[0];
            this.encUsuarioActual.pregunta5.item2 = pregunta5[1];
            this.encUsuarioActual.pregunta5.item3 = pregunta5[2];
            this.encUsuarioActual.pregunta5.item4 = pregunta5[3];
            this.encUsuarioActual.pregunta6.item1 = pregunta6[0];
            this.encUsuarioActual.pregunta6.item2 = pregunta6[1];
            this.encUsuarioActual.pregunta6.item3 = pregunta6[2];
            this.encUsuarioActual.pregunta6.item4 = pregunta6[3];
        }
        if (this.opinion != "") {
            this.encUsuarioActual.comentarios.push(this.opinion);
        }
        console.log(this.encUsuarioActual);
        this.auth.modificarEncuesta(this.encUsuarioActual).then(function (res) {
            _this.error.mostrarMensaje("Se ha cargado correctamente la encuesta.");
            spiner.dismiss();
            _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__estadisticas_supervisor_estadisticas_supervisor__["a" /* EstadisticasSupervisorPage */], { usuario: _this.usuario }).present();
        }).catch(function (error) {
            _this.error.mostrarError(error, "arror al guardar la encuesta");
            spiner.dismiss();
        });
    };
    EncuestaSupervisorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-encuesta-supervisor',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\encuesta-supervisor\encuesta-supervisor.html"*/'<!--\n\n  Generated template for the EncuestaSupervisorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title></ion-title>\n\n    <ion-buttons>\n\n      <button ion-button (click)="VolverAtras()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h1>Califique la conducta de {{usuario.apellido}}, {{usuario.nombre}}.</h1>\n\n  <div class="encuesta">\n\n    <div class="mi-range">\n\n\n\n      <ion-range [(ngModel)]="conducta" color="primary" pin="true" min="1" max="5" snaps="true" style="width: 100%;position: relative;"\n\n        (ngModelChange)="ModificarTextoRange()"></ion-range>\n\n      <span>{{textoRange}}</span>\n\n\n\n    </div>\n\n  </div>\n\n  <h1>¿Tuvo algún inconveniente con {{usuario.apellido}}, {{usuario.nombre}} en horas de servicio?</h1>\n\n  <div class="encuesta">\n\n    <ion-list radio-group [(ngModel)]="inconveniente">\n\n      <ion-item>\n\n        <ion-label>Sí</ion-label>\n\n        <ion-radio color="primary" value="1"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>No</ion-label>\n\n        <ion-radio color="primary" value="0"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div *ngIf="inconveniente==\'1\'">\n\n  <h1>Escriba su comentario acerca de su incoveniente.</h1>\n\n\n\n  <div class="encuesta">\n\n\n\n    <textarea rows="4" cols="50" placeholder="Escribe tu comentario aquí..." [(ngModel)]="opinion"></textarea>\n\n\n\n  </div>\n\n  </div>\n\n  <div *ngIf="usuario.tipo!=\'cliente\'">\n\n  <h1>Seleccione el/los aspectos a tener en cuenta de {{usuario.apellido}}, {{usuario.nombre}}.</h1>\n\n  <div class="encuesta">\n\n    <ion-list style="left: -25px;">\n\n\n\n      <ion-item>\n\n        <ion-label>Mala conducta</ion-label>\n\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item1"></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Mala presentación</ion-label>\n\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item2"></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Poca formalidad</ion-label>\n\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item3"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Buena conducta</ion-label>\n\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item4"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Buena presentacion</ion-label>\n\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item5"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Buena formalidad</ion-label>\n\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item6"></ion-checkbox>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n  </div>\n\n  <div *ngIf="usuario.tipo!=\'cliente\'">\n\n  <h1>¿Indique el nivel de compañerismo de {{usuario.apellido}}, {{usuario.nombre}} para los demas empleados?</h1>\n\n  <div class="encuesta">\n\n    <select [(ngModel)]="prescencia">\n\n      <option value="0">Muy bueno</option>\n\n      <option value="1">Bueno</option>\n\n      <option value="2">Normal</option>\n\n      <option value="3">Malo</option>\n\n    </select>\n\n  </div>\n\n  </div>\n\n  <div *ngIf="usuario.tipo==\'cliente\'">\n\n    <h1>¿Indique la propina que suele dejar {{usuario.apellido}}, {{usuario.nombre}}?</h1>\n\n    <div class="encuesta">\n\n      <select [(ngModel)]="propina">\n\n        <option value="0">Siempre deja propina</option>\n\n        <option value="1">Suele dejar buena propina</option>\n\n        <option value="2">Suele dejar poca propina</option>\n\n        <option value="3">Nunca deja propina</option>\n\n      </select>\n\n    </div>\n\n  </div>\n\n  <div *ngIf="usuario.tipo==\'cliente\'">\n\n    <h1>¿Indique la cantidad de veces que suele venir {{usuario.apellido}}, {{usuario.nombre}} al restaurante?</h1>\n\n    <div class="encuesta">\n\n      <ion-list radio-group [(ngModel)]="prescenciaCliente">\n\n        <ion-item>\n\n          <ion-label>Todos los dias</ion-label>\n\n          <ion-radio color="primary" value="0"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Bastante frecuente</ion-label>\n\n          <ion-radio color="primary" value="1"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Poco</ion-label>\n\n          <ion-radio color="primary" value="2"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Casi nunca</ion-label>\n\n          <ion-radio color="primary" value="3"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n  <button ion-button color="red" class="enviar" [disabled]="estadoBoton" (click)="HacerEncuesta()">Enviar encuesta</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\encuesta-supervisor\encuesta-supervisor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], EncuestaSupervisorPage);
    return EncuestaSupervisorPage;
}());

//# sourceMappingURL=encuesta-supervisor.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticasSupervisorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AlertProvider } from "../../providers/alert/alert";


var EstadisticasSupervisorPage = /** @class */ (function () {
    function EstadisticasSupervisorPage(navCtrl, navParams, auth, 
    //private error: AlertProvider,
    spinner, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.spinner = spinner;
        this.alertCtrl = alertCtrl;
        this.pregunta1Labels = ['Pésimo', 'Malo', 'Mediocre', 'Bueno', 'Excelente'];
        this.pregunta1Data = [0, 0, 0, 0, 0];
        this.pregunta2Labels = ['Sí', 'No'];
        this.pregunta2Data = [0, 0];
        this.pregunta3Labels = ['Mala conducta', 'Mala presentación', 'Poca formalidad', 'Buena conducta', 'Buena presentacion', 'Buena formalidad'];
        this.pregunta3Data = [0, 0, 0, 0, 0, 0];
        this.pregunta4Labels = ['Muy bueno', 'Bueno', 'Normal', 'Malo'];
        this.pregunta4Data = [0, 0, 0, 0];
        this.pregunta5Labels = ['Siempre deja propina', 'Suele dejar buena propina', 'Suele dejar poca propina', 'Nunca deja propina'];
        this.pregunta5Data = [0, 0, 0, 0];
        this.pregunta6Labels = ['Todos los dias', 'Bastante frecuente', 'Poco', 'Casi nunca'];
        this.pregunta6Data = [0, 0, 0, 0];
        this.comentarios = [];
        this.doughnutChartType = 'doughnut';
        var spiner = this.spinner.getAllPageSpinner();
        spiner.present();
        this.usuario = navParams.get("usuario");
        this.encUsuarios = new Array();
        this.auth.getEncUsuarios().subscribe(function (lista) {
            _this.encUsuarios = lista;
            for (var i = 0; i < _this.encUsuarios.length; i++) {
                if (_this.encUsuarios[i].correo == _this.usuario.correo) {
                    _this.encUsuarioActual = _this.encUsuarios[i];
                    break;
                }
            }
            _this.pregunta1Data = [
                _this.encUsuarioActual.pregunta1.pesimo,
                _this.encUsuarioActual.pregunta1.malo,
                _this.encUsuarioActual.pregunta1.mediocre,
                _this.encUsuarioActual.pregunta1.bueno,
                _this.encUsuarioActual.pregunta1.excelente,
            ];
            _this.pregunta2Data = [
                _this.encUsuarioActual.pregunta2.si,
                _this.encUsuarioActual.pregunta2.no
            ];
            _this.comentarios = _this.encUsuarioActual.comentarios;
            if (_this.usuario.tipo != 'cliente') {
                _this.pregunta3Data = [
                    _this.encUsuarioActual.pregunta3.item1,
                    _this.encUsuarioActual.pregunta3.item2,
                    _this.encUsuarioActual.pregunta3.item3,
                    _this.encUsuarioActual.pregunta3.item4,
                    _this.encUsuarioActual.pregunta3.item5,
                    _this.encUsuarioActual.pregunta3.item6
                ];
                _this.pregunta4Data = [
                    _this.encUsuarioActual.pregunta4.MuyBueno,
                    _this.encUsuarioActual.pregunta4.Bueno,
                    _this.encUsuarioActual.pregunta4.Normal,
                    _this.encUsuarioActual.pregunta4.Malo
                ];
            }
            else {
                _this.pregunta5Data = [
                    _this.encUsuarioActual.pregunta5.item1,
                    _this.encUsuarioActual.pregunta5.item2,
                    _this.encUsuarioActual.pregunta5.item3,
                    _this.encUsuarioActual.pregunta5.item4
                ];
                _this.pregunta6Data = [
                    _this.encUsuarioActual.pregunta6.item1,
                    _this.encUsuarioActual.pregunta6.item2,
                    _this.encUsuarioActual.pregunta6.item3,
                    _this.encUsuarioActual.pregunta6.item4
                ];
            }
            spiner.dismiss();
            _this.GenerarCharts();
        });
    }
    EstadisticasSupervisorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstadisticasSupervisorPage');
    };
    EstadisticasSupervisorPage.prototype.VolverAtras = function () {
        this.navCtrl.pop();
    };
    EstadisticasSupervisorPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    EstadisticasSupervisorPage.prototype.GenerarCharts = function () {
        var ctx1 = document.getElementById('canvas-chart1').getContext('2d');
        this.myChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](ctx1, {
            // The type of chart we want to create
            type: 'bar',
            // The data for our dataset
            data: {
                labels: this.pregunta1Labels,
                datasets: [{
                        label: '',
                        data: this.pregunta1Data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false
                },
                elements: {
                    rectangle: {
                        borderSkipped: 'left',
                    }
                },
            }
        });
        var ctx2 = document.getElementById('canvas-chart2').getContext('2d');
        var newLegendClickHandler = function (e, legendItem) {
            console.log(legendItem[0]._options.backgroundColor);
            if (legendItem[0]._options.backgroundColor == 'rgba(255, 159, 64, 0.2)') {
                var message = "<ul>";
                for (var i = 0; i < this.comentarios.length; i++) {
                    message += ("<li>" + this.comentarios[i] + "</li>");
                }
                message += "</ul>";
                var alert_1 = this.alertCtrl.create({
                    title: 'Inconvenientes que tuvo Ivagaza Federico',
                    buttons: ['Cerrar'],
                    message: message,
                    cssClass: "foto-alert"
                });
                alert_1.present();
            }
        }.bind(this);
        this.myChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](ctx2, {
            type: 'pie',
            data: {
                labels: this.pregunta2Labels,
                datasets: [{
                        label: '',
                        data: this.pregunta2Data,
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        hoverBackgroundColor: [
                            '#FFCE56',
                            '#FF6384',
                        ]
                    }]
            },
            options: {
                onClick: newLegendClickHandler
            }
        });
        if (this.usuario.tipo != 'cliente') {
            var ctx3 = document.getElementById('canvas-chart3').getContext('2d');
            this.myChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](ctx3, {
                // The type of chart we want to create
                type: 'bar',
                // The data for our dataset
                data: {
                    labels: this.pregunta3Labels,
                    datasets: [{
                            label: '',
                            data: this.pregunta3Data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderWidth: 1
                        }]
                },
                options: {
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                    },
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        enabled: false
                    },
                    elements: {
                        rectangle: {
                            borderSkipped: 'left',
                        }
                    },
                }
            });
            var ctx4 = document.getElementById('canvas-chart4').getContext('2d');
            this.myChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](ctx4, {
                type: 'doughnut',
                data: {
                    labels: this.pregunta4Labels,
                    datasets: [{
                            label: '',
                            data: this.pregunta4Data,
                            backgroundColor: [
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                            ],
                            hoverBackgroundColor: [
                                '#FFCE56',
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                            ]
                        }]
                }
            });
        }
        else {
            var ctx5 = document.getElementById('canvas-chart5').getContext('2d');
            this.myChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](ctx5, {
                // The type of chart we want to create
                type: 'bar',
                // The data for our dataset
                data: {
                    labels: this.pregunta5Labels,
                    datasets: [{
                            label: '',
                            data: this.pregunta5Data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                            ],
                            borderWidth: 1
                        }]
                },
                options: {
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                    },
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        enabled: false
                    },
                    elements: {
                        rectangle: {
                            borderSkipped: 'left',
                        }
                    },
                }
            });
            var ctx6 = document.getElementById('canvas-chart6').getContext('2d');
            this.myChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](ctx6, {
                type: 'doughnut',
                data: {
                    labels: this.pregunta6Labels,
                    datasets: [{
                            label: '',
                            data: this.pregunta6Data,
                            backgroundColor: [
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                            ],
                            hoverBackgroundColor: [
                                '#FFCE56',
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                            ]
                        }]
                }
            });
        }
    };
    EstadisticasSupervisorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estadisticas-supervisor',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\estadisticas-supervisor\estadisticas-supervisor.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Estadisticas</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button (click)="VolverAtras()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h1>Conducta de {{usuario.apellido}}, {{usuario.nombre}}.</h1>\n\n  <div class="encuesta">\n\n      <canvas id="canvas-chart1"></canvas>\n\n  </div>\n\n  <h1>Cantidad de inconvenientes de {{usuario.apellido}}, {{usuario.nombre}}.</h1>\n\n  <div class="encuesta">\n\n      <canvas id="canvas-chart2"></canvas>\n\n  </div>\n\n  <div *ngIf="usuario.tipo!=\'cliente\'">\n\n    <h1>Aspectos a tener en cuenta de {{usuario.apellido}}, {{usuario.nombre}}.</h1>\n\n    <div class="encuesta">\n\n        <canvas id="canvas-chart3"></canvas>\n\n    </div>\n\n  </div>\n\n  <div *ngIf="usuario.tipo!=\'cliente\'">\n\n    <h1>Nivel de compañerismo de {{usuario.apellido}}, {{usuario.nombre}}.</h1>\n\n    <div class="encuesta">\n\n        <canvas id="canvas-chart4"></canvas>\n\n    </div>\n\n  </div>\n\n  <div *ngIf="usuario.tipo==\'cliente\'">\n\n    <h1>La propina que deja {{usuario.apellido}}, {{usuario.nombre}}.</h1>\n\n    <div class="encuesta">\n\n        <canvas id="canvas-chart5"></canvas>\n\n    </div>\n\n  </div>\n\n  <div *ngIf="usuario.tipo==\'cliente\'">\n\n    <h1>Cantidad de veces que suele venir {{usuario.apellido}}, {{usuario.nombre}}.</h1>\n\n    <div class="encuesta">\n\n        <canvas id="canvas-chart6"></canvas>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\estadisticas-supervisor\estadisticas-supervisor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EstadisticasSupervisorPage);
    return EstadisticasSupervisorPage;
}());

//# sourceMappingURL=estadisticas-supervisor.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReservaPage = /** @class */ (function () {
    function ReservaPage(navCtrl, navParams, auth, error, spiner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.spiner = spiner;
        this.mostrarSpiner = false;
        this.reservas = new Array();
        this.reservasConfirmadas = new Array();
        this.mesas = new Array();
        this.auth.getReservas().subscribe(function (lista) {
            _this.reservas = lista;
            for (var i = 0; i < _this.reservas.length; i++) {
                if (_this.reservas[i].estado == "confirmado") {
                    _this.reservasConfirmadas.push(_this.reservas[i]);
                }
            }
            console.log(_this.reservasConfirmadas);
            _this.auth.getMesas().subscribe(function (mesas) {
                _this.mesas = mesas;
                console.log(_this.mesas);
            });
        });
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        this.nombreDeLosMeses = "Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic";
        var date = new Date();
        var mes = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
        var dia = (date.getDate() < 10 ? '0' : '') + date.getDate();
        this.minimo = date.getFullYear() + "-" + mes + "-" + dia;
        this.maximo = "" + (date.getFullYear() + 1);
    }
    ReservaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservaPage');
    };
    ReservaPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    ReservaPage.prototype.Reservar = function () {
        var _this = this;
        this.mostrarSpiner = true;
        if (!this.fecha || !this.hora || !this.cantidadPersonas) {
            this.error.mostrarErrorLiteral("Todos los campos deben ser completados.");
            this.mostrarSpiner = false;
            return;
        }
        var fechaAux = this.fecha.split("-");
        var horaAux = this.hora.split(":");
        var momentoReserva = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date(fechaAux[0], fechaAux[1] - 1, fechaAux[2], horaAux[0], horaAux[1]));
        var momentoActual = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date());
        if (momentoReserva.diff(momentoActual, "m") < 15 && momentoReserva.diff(momentoActual, "m") >= 0) {
            this.error.mostrarErrorLiteral("No se puede realizar una reserva con menos de 15 minutos de adelanto.");
            this.mostrarSpiner = false;
            return;
        }
        if (momentoReserva.diff(momentoActual, "m") < 0) {
            this.error.mostrarErrorLiteral("No se puede realizar una reserva con menos tiempo al actual.");
            this.mostrarSpiner = false;
            return;
        }
        var valido = true;
        for (var i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i].correo == this.usuario.correo) {
                var diferencia = Math.abs(momentoReserva.diff(__WEBPACK_IMPORTED_MODULE_6_moment__(this.reservas[i].horario, "DD/MM/YYYY HH:mm"), "m"));
                if (diferencia < 60) {
                    this.error.mostrarErrorLiteral("No puede haber un lapso menor a una hora entre alguna de tus reservas.");
                    valido = false;
                    this.mostrarSpiner = false;
                    break;
                }
            }
        }
        if (valido) {
            var personasQueVan = parseInt(this.cantidadPersonas.charAt(3));
            var puedeReservar = false;
            var estaDesocupada = void 0;
            for (var i = 0; i < this.mesas.length; i++) {
                estaDesocupada = true;
                for (var j = 0; j < this.reservasConfirmadas.length; j++) {
                    if (this.mesas[i].numero == this.reservasConfirmadas[j].mesa) {
                        var momentoReservaMesa = __WEBPACK_IMPORTED_MODULE_6_moment__(this.reservasConfirmadas[j].horario, "DD/MM/YYYY HH:mm");
                        if (Math.abs(momentoReserva.diff(momentoReservaMesa, "m")) < 40) {
                            estaDesocupada = false;
                            break;
                        }
                    }
                }
                if (parseInt(this.mesas[i].cantidadComensales) >= personasQueVan && estaDesocupada) {
                    puedeReservar = true;
                    break;
                }
            }
            if (puedeReservar) {
                var data = {
                    "correo": this.usuario.correo, "nombre": this.usuario.nombre, "apellido": this.usuario.apellido, "foto": this.usuario.foto,
                    "cantPersonas": personasQueVan, "estado": "pendiente", "horario": momentoReserva.format("DD/MM/YYYY HH:mm"), "mesa": ""
                };
                this.auth.nuevaReserva(data).then(function (res) {
                    _this.error.mostrarMensaje("Se registró tu reserva y te notificaremos cuando el encargado la confirme.");
                    _this.mostrarSpiner = false;
                    _this.back();
                }).catch(function (error) {
                    _this.error.mostrarError(error, "hubo error al registrar la reserva.Intentelo mas tarde");
                    _this.mostrarSpiner = false;
                });
            }
            else {
                this.error.mostrarErrorLiteral("No hay mesas disponibles para esa fecha y horario.");
                this.mostrarSpiner = false;
            }
        }
    };
    ReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reserva',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\reserva\reserva.html"*/'<!--\n\n  Generated template for the ReservaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title></ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n  <div class="horizontal-container">\n\n    <div class="vertical-container">\n\n      <h1>Reservar</h1>\n\n      <ion-item>\n\n        <ion-label>Fecha</ion-label>\n\n        <ion-datetime displayFormat="DD/MMM/YYYY" monthShortNames={{nombreDeLosMeses}} min={{minimo}} max={{maximo}}\n\n            cancelText="Cancelar" doneText="Aceptar" [(ngModel)]="fecha">\n\n        </ion-datetime>\n\n      </ion-item>\n\n  \n\n      <ion-item style="width: 50px;">\n\n        <ion-label>Hora</ion-label>\n\n        <ion-datetime displayFormat="HH:mm" cancelText="Cancelar" doneText="Aceptar" [(ngModel)]="hora"></ion-datetime>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label>Personas</ion-label>\n\n        <ion-datetime displayFormat="YY" min="2001" max="2008" cancelText="Cancelar" doneText="Aceptar" [(ngModel)]="cantidadPersonas">\n\n        </ion-datetime>\n\n      </ion-item>\n\n  \n\n      <button ion-button outline color="light" class="alta" [disabled]="estadoBoton" (click)="Reservar()">Reservar</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\reserva\reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */]])
    ], ReservaPage);
    return ReservaPage;
}());

//# sourceMappingURL=reserva.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListadoReservaPage = /** @class */ (function () {
    function ListadoReservaPage(navCtrl, navParams, spinner, auth, error) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spinner = spinner;
        this.auth = auth;
        this.error = error;
        this.image = "";
        this.ocultarImagen = true;
        this.ocultarSpinner = false;
        this.reservas = new Array();
        this.reservas = [];
        this.reservasConfirmadas = new Array();
        this.reservasConfirmadas = [];
        this.reservasPendientes = new Array();
        this.reservasPendientes = [];
        this.mesas = new Array();
        var spiner = this.spinner.getAllPageSpinner();
        spiner.present();
        this.auth.getReservas().subscribe(function (lista) {
            _this.reservas = lista;
            _this.reservasPendientes = [];
            _this.reservasConfirmadas = [];
            for (var i = 0; i < _this.reservas.length; i++) {
                if (_this.reservas[i].estado == 'pendiente') {
                    _this.reservasPendientes.push(_this.reservas[i]);
                }
                if (_this.reservas[i].estado == 'confirmada') {
                    _this.reservasConfirmadas.push(_this.reservas[i]);
                }
            }
            console.log(_this.reservasConfirmadas);
            console.log(_this.reservasPendientes);
            _this.ocultarSpinner = true;
            _this.ocultarInterfazMesas = true;
            spiner.dismiss();
        });
    }
    ListadoReservaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListadoReservaPage');
    };
    ListadoReservaPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    ListadoReservaPage.prototype.DesplegarMesas = function (reservaSeleccionada) {
        var _this = this;
        this.mesas = [];
        this.reservaSeleccionada = reservaSeleccionada;
        var mesast = new Array();
        this.auth.getMesas().subscribe(function (lista) {
            mesast = lista;
            var estaDesocupada;
            var momentoReservaSeleccionada = __WEBPACK_IMPORTED_MODULE_6_moment__(reservaSeleccionada.horario, "DD/MM/YYYY HH:mm");
            for (var i = 0; i < mesast.length; i++) {
                estaDesocupada = true;
                for (var j = 0; j < _this.reservasConfirmadas.length; j++) {
                    if (mesast[i].numero == _this.reservasConfirmadas[j].mesa) {
                        var momentoReservaMesa = __WEBPACK_IMPORTED_MODULE_6_moment__(_this.reservasConfirmadas[j].horario, "DD/MM/YYYY HH:mm");
                        if (Math.abs(momentoReservaSeleccionada.diff(momentoReservaMesa, "m")) < 40) {
                            estaDesocupada = false;
                            break;
                        }
                    }
                }
                if (mesast[i].cantidadComensales >= reservaSeleccionada.cantPersonas && estaDesocupada) {
                    _this.mesas.push({ numero: mesast[i].numero, seleccionado: "" });
                }
            }
            _this.mesas = _this.mesas.sort(function (a, b) {
                return a.numero - b.numero;
            });
            _this.ocultarInterfazMesas = false;
        });
    };
    ListadoReservaPage.prototype.Seleccionar = function (numero) {
        for (var _i = 0, _a = this.mesas; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.numero == numero)
                item.seleccionado = "selected";
            else
                item.seleccionado = "";
        }
    };
    ListadoReservaPage.prototype.OcultarInterfaz = function () {
        this.ocultarInterfazMesas = true;
    };
    ListadoReservaPage.prototype.Confirmar = function () {
        var _this = this;
        var numeroDeMesa;
        var seleccionoMesa = false;
        for (var _i = 0, _a = this.mesas; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.seleccionado == "selected") {
                numeroDeMesa = item.numero;
                seleccionoMesa = true;
                break;
            }
        }
        if (seleccionoMesa) {
            this.reservaSeleccionada.estado = "confirmada";
            this.reservaSeleccionada.mesa = numeroDeMesa;
            this.auth.confirmarReserva(this.reservaSeleccionada).then(function (res) {
                _this.OcultarInterfaz();
                _this.error.mostrarMensaje("Se ha confirmado la reserva.");
            }).catch(function (error) {
                _this.OcultarInterfaz();
                _this.error.mostrarError(error, "Hubo un error al confirmar la mesa.");
            });
        }
        else {
            this.error.mostrarErrorLiteral("Selecciona una mesa antes de continuar.");
        }
    };
    ListadoReservaPage.prototype.ConfirmarCancelarReserva = function (reserva) {
        var _this = this;
        this.reservaSeleccionadaParaCancelar = reserva;
        var alertConfirm = this.error.mostrarMensajeConfimación("¿Seguro que desea cancelar esta reserva?", "Cancelar reserva");
        alertConfirm.present();
        alertConfirm.onDidDismiss(function (confirm) {
            if (confirm) {
                _this.CancelarRerserva();
            }
        });
    };
    ListadoReservaPage.prototype.CancelarRerserva = function () {
        var _this = this;
        this.reservaSeleccionadaParaCancelar.estado = "cancelado";
        this.auth.confirmarReserva(this.reservaSeleccionadaParaCancelar).then(function (res) {
            _this.OcultarInterfaz();
            _this.error.mostrarMensaje("Se ha cancelado la reserva.");
        }).catch(function (error) {
            _this.OcultarInterfaz();
            _this.error.mostrarError(error, "Hubo un error al cancelar la mesa.");
        });
    };
    ListadoReservaPage.prototype.MostrarImagen = function (imagen) {
        this.image = imagen;
        this.ocultarImagen = false;
    };
    ListadoReservaPage.prototype.OcultarImagen = function () {
        this.ocultarImagen = true;
    };
    ListadoReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listado-reserva',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-reserva\listado-reserva.html"*/'<!--\n\n  Generated template for the ListadoReservaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Reservas</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="sin-elementos" *ngIf="ocultarSpinner  && reservasPendientes.length == 0 && reservasConfirmadas.length == 0">\n\n    <h1>No hay reservas disponibles.</h1>\n\n  </div>\n\n\n\n  <ng-container *ngIf="ocultarSpinner && reservasPendientes.length > 0">\n\n    <h2 class="titulo"><u>Reservas pendientes de confirmación</u></h2>\n\n  </ng-container>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let item of reservasPendientes">\n\n      <ion-thumbnail item-start (click)="MostrarImagen(item.foto)">\n\n        <img src={{item.foto}}>\n\n      </ion-thumbnail>\n\n\n\n      <h1>{{item.apellido}}, {{item.nombre}}</h1>\n\n      <p>Horario • {{item.horario}} Hs.</p>\n\n      <p>Cantidad de personas • {{item.cantPersonas}}</p>\n\n\n\n      <div item-end style="display: flex; align-items: center;align-content: center;flex-direction: column;">\n\n\n\n        <button ion-button clear (click)="DesplegarMesas(item)" style="margin-bottom: 20px;">\n\n          <ion-icon style="color: #CAFF4F;" name="checkmark-circle-outline"></ion-icon>\n\n        </button>\n\n\n\n        <button ion-button clear (click)="ConfirmarCancelarReserva(item)">\n\n          <ion-icon style="color: #FF0000;" name="close"></ion-icon>\n\n        </button>\n\n\n\n      </div>\n\n\n\n\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ng-container *ngIf="ocultarSpinner && reservasConfirmadas.length > 0">\n\n    <h2 class="titulo"><u>Reservas confirmadas</u></h2>\n\n  </ng-container>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let item of reservasConfirmadas">\n\n\n\n      <ion-thumbnail item-start (click)="MostrarImagen(item.foto)">\n\n        <img src={{item.foto}} />\n\n      </ion-thumbnail>\n\n\n\n      <h1>{{item.apellido}}, {{item.nombre}}</h1>\n\n      <p>Horario • {{item.horario}} Hs.</p>\n\n      <p>Cantidad de personas • {{item.cantPersonas}}</p>\n\n      <p>Mesa • {{item.mesa}}</p>\n\n\n\n      <button item-end ion-button clear (click)="ConfirmarCancelarReserva(item)">\n\n        <ion-icon style="color: #FF0000;" name="close"></ion-icon>\n\n      </button>\n\n\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <div [ngClass]="{\'interfaz-mesas\':true,\'ocultar\':ocultarInterfazMesas}">\n\n\n\n    <h1>Selecciona una mesa para la reserva</h1>\n\n    <div class="mesas">\n\n      <button ion-button color="red" class="mesa {{item.seleccionado}}" (click)="Seleccionar(item.numero)" *ngFor="let item of mesas">{{item.numero}}</button>\n\n    </div>\n\n\n\n    <div class="botones-interfaz-mesa">\n\n      <button ion-button color="red" (click)="OcultarInterfaz()">Cancelar</button>\n\n      <button ion-button color="red" (click)="Confirmar()">Confirmar</button>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-reserva\listado-reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]])
    ], ListadoReservaPage);
    return ListadoReservaPage;
}());

//# sourceMappingURL=listado-reserva.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoMesasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedir_platos_pedir_platos__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListadoMesasPage = /** @class */ (function () {
    function ListadoMesasPage(navCtrl, navParams, auth, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.mostrarSpiner = false;
        this.listaPorPedir = new Array();
        this.mesas = new Array();
        this.pedidos = new Array();
        this.mostrarSpiner = true;
        this.auth.getMesas().subscribe(function (lista) {
            _this.mesas = lista;
            _this.auth.getPedidos().subscribe(function (lista) {
                _this.pedidos = lista;
                for (var i = 0; i < _this.pedidos.length; i++) {
                    if (_this.pedidos[i].estado == 'por pedir') {
                        for (var j = 0; j < _this.mesas.length; j++) {
                            if (_this.mesas[j].numero == _this.pedidos[i].numero) {
                                _this.listaPorPedir.push({ "numeroMesa": _this.mesas[j].numero, "fotoMesa": _this.mesas[j].foto, "correoCliente": _this.pedidos[i].correo, "idPedido": _this.pedidos[i].id });
                            }
                        }
                    }
                }
                console.log(_this.listaPorPedir);
                if (_this.listaPorPedir.length > 0) {
                    _this.hayPedidos = true;
                    _this.mostrarSpiner = false;
                }
                else {
                    _this.hayPedidos = false;
                    _this.mostrarSpiner = false;
                }
            });
        });
    }
    ListadoMesasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListadoMesasPage');
    };
    ListadoMesasPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    ListadoMesasPage.prototype.elegirMesa = function (item) {
        console.log(item);
        localStorage.setItem("pedido", JSON.stringify(item));
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pedir_platos_pedir_platos__["a" /* PedirPlatosPage */], { pedido: item });
    };
    ListadoMesasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listado-mesas',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-mesas\listado-mesas.html"*/'<!--\n\n  Generated template for the ListadoMesasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Mesas por pedir</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n        <button ion-button icon-only (click)="back()">\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n  <div *ngIf="hayPedidos==false">\n\n    No hay ningun pedido para atender\n\n  </div>\n\n    <button ion-button *ngFor="let item of listaPorPedir" (click)="elegirMesa(item)">\n\n      <div class="sombreado"></div>\n\n      <img src="{{item.fotoMesa}}" />\n\n      <span>{{item.numeroMesa}}</span>\n\n    </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-mesas\listado-mesas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ListadoMesasPage);
    return ListadoMesasPage;
}());

//# sourceMappingURL=listado-mesas.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaDeProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var AltaDeProductoPage = /** @class */ (function () {
    function AltaDeProductoPage(navCtrl, navParams, auth, error, spiner, camera, barcodeScanner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.spiner = spiner;
        this.camera = camera;
        this.barcodeScanner = barcodeScanner;
        this.firebase = __WEBPACK_IMPORTED_MODULE_8_firebase__;
        this.foto = "../../assets/Imagenes/producto.png";
        this.estado = "Definir estado inicial";
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        if (this.usuario.tipo == 'cocinero') {
            this.tipo = 'plato';
        }
        else if (this.usuario.tipo == 'bartender') {
            this.tipo = 'bebida';
        }
        this.productos = new Array();
        this.auth.getListaProdcutos("productos").subscribe(function (lista) {
            _this.productos = lista;
        });
    }
    AltaDeProductoPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    AltaDeProductoPage.prototype.Alta = function () {
        var _this = this;
        console.log('AltaDeProductoPage - Inicio alta de producto');
        var spiner = this.spiner.getAllPageSpinner();
        spiner.present();
        console.log(this);
        if (!this.nombre || !this.tiempoPromedioElaboracion || !this.descripcion
            || !this.tipo || this.foto == "" || !this.precio) {
            this.error.mostrarErrorLiteral("Todos los campos deben ser completados.");
            spiner.dismiss();
            return;
        }
        if (this.tiempoPromedioElaboracion < 1) {
            this.error.mostrarErrorLiteral("El tiempo promedio de elaboracion debe ser mayor a 1");
            spiner.dismiss();
            return;
        }
        if (this.precio < 0) {
            this.error.mostrarErrorLiteral("El precio no puede ser negativo");
            spiner.dismiss();
            return;
        }
        var esValido = true;
        for (var i = 0; i < this.productos.length; i++) {
            if (this.productos[i].nombre == this.nombre) {
                esValido = false;
                break;
            }
        }
        if (!esValido) {
            this.error.mostrarErrorLiteral("Ya existe ese producto en el sistema");
            spiner.dismiss();
            return;
        }
        if (esValido) {
            var data = {
                "nombre": this.nombre,
                "descripcion": this.descripcion,
                "foto": this.foto,
                "tipo": this.tipo,
                "precio": this.precio,
                "tiempoPromedioElaboracion": this.tiempoPromedioElaboracion,
                "estado": this.estado,
                "numeroProducto": this.productos.length + 1
            };
            this.auth.guardarProducto(data).then(function (res) {
                _this.error.mostrarMensaje("producto guardado");
                _this.LimpiarCampos();
                spiner.dismiss();
            }).catch(function (error) {
                _this.error.mostrarError(error, "error al guardar el producto");
                spiner.dismiss();
            });
        }
        else {
            spiner.dismiss();
        }
    };
    AltaDeProductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AltaDeProductoPage');
    };
    AltaDeProductoPage.prototype.LimpiarCampos = function () {
        this.nombre = "";
        this.tiempoPromedioElaboracion = 0;
        this.descripcion = "";
        if (this.usuario.tipo == 'cocinero') {
            this.tipo = 'plato';
        }
        else if (this.usuario.tipo == 'bartender') {
            this.tipo = 'bebida';
        }
        this.foto = "../../assets/Imagenes/producto.png";
        this.precio = 0;
    };
    AltaDeProductoPage.prototype.SacarFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var imageName, options, result, image, pictures_1, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imageName = this.numeroProducto + this.nombre;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 50,
                            sourceType: this.camera.PictureSourceType.CAMERA,
                            correctOrientation: true,
                            targetHeight: 600,
                            targetWidth: 600,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        pictures_1 = this.firebase.storage().ref("productos/" + imageName);
                        //tomo url de foto en Firebase Storage
                        pictures_1.putString(image, "data_url").then(function () {
                            pictures_1.getDownloadURL().then(function (url) {
                                _this.foto = url;
                            });
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        alert(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AltaDeProductoPage.prototype.InicializarLectorQR = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.codigo = barcodeData.text;
            var dato = _this.codigo.split(",");
            _this.nombre = dato[0];
            _this.descripcion = dato[1];
            _this.precio = +dato[2];
            _this.tiempoPromedioElaboracion = +dato[3];
            _this.tipo = dato[4];
        }, function (error) {
            _this.error.mostrarErrorLiteral(error);
        });
    };
    AltaDeProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alta-de-producto',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\alta-de-producto\alta-de-producto.html"*/'<!--\n\n  Generated template for the AltaProductoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Alta de Producto</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-list inset>\n\n        <ion-item>\n\n          <ion-input type="text" class="tipoProducto" placeholder="Nombre" [(ngModel)]="nombre" ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text"  class="tipoProducto"  placeholder="Descripcion" [(ngModel)]="descripcion" ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" class="tipoProducto"   placeholder="Precio" [(ngModel)]="precio" ></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n          <ion-input type="text"  class="tipoProducto"  placeholder="Tiempo Promedio Elaboracion" [(ngModel)]="tiempoPromedioElaboracion" ></ion-input>\n\n        </ion-item>       \n\n        \n\n          <select [(ngModel)]="tipo" class="tipoProducto" style="margin: 0 30px 0 0;width: 70%;display: block;\n\n              margin: 0 auto;">\n\n            <option value="plato">Plato</option>\n\n            <option value="bebida">Bebida</option>                   \n\n          </select>\n\n        \n\n        <ion-item>\n\n          <img [src]="foto" alt="" height="125px" width="125px">\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button outline color="red" class="sacarFoto" (click)="SacarFoto()">Sacar foto</button>\n\n      <button ion-button color="red" class="sacarFoto" (click)="InicializarLectorQR()">Leer QR</button>\n\n      <button ion-button color="red" class="botonAlta" (click)="Alta()" >Guardar Producto</button>\n\n    </ion-col>\n\n  </ion-row> \n\n</ion-content>'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\alta-de-producto\alta-de-producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AltaDeProductoPage);
    return AltaDeProductoPage;
}());

//# sourceMappingURL=alta-de-producto.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__principal_principal__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfirmarPedidoPage = /** @class */ (function () {
    function ConfirmarPedidoPage(navCtrl, navParams, auth, error, spinner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.spinner = spinner;
        this.pedidos = new Array();
        this.pedidosParaEntregar = new Array();
        this.pedidosPorConfirmar = new Array();
        this.mostrarSpiner = true;
        this.auth.getPedidos().subscribe(function (lista) {
            _this.pedidos = lista;
            _this.pedidosParaEntregar = [];
            _this.pedidosPorConfirmar = [];
            for (var i = 0; i < _this.pedidos.length; i++) {
                if (_this.pedidos[i].estado == 'pedido por confirmar' && _this.pedidos[i].delivery == false) {
                    _this.pedidosPorConfirmar.push(_this.pedidos[i]);
                }
                if (_this.pedidos[i].estado == 'pedido terminado' && _this.pedidos[i].delivery == false) {
                    _this.pedidosParaEntregar.push(_this.pedidos[i]);
                }
            }
            _this.mostrarSpiner = false;
        });
    }
    ConfirmarPedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmarPedidoPage');
    };
    ConfirmarPedidoPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__principal_principal__["a" /* PrincipalPage */]);
    };
    ConfirmarPedidoPage.prototype.aceptarPedido = function (pedido) {
        var _this = this;
        console.log(pedido);
        var spiner = this.spinner.getAllPageSpinner();
        spiner.present();
        pedido.estado = "esperando pedido";
        this.auth.actualizarPedido(pedido).then(function (res) {
            spiner.dismiss();
            _this.error.mostrarMensaje("Pedido confirmado");
        });
    };
    ConfirmarPedidoPage.prototype.cancelarPedido = function (pedido) {
        var _this = this;
        var alertConfirm = this.error.mostrarMensajeConfimación("¿Seguro que quiere cancelar este pedido?", "Cancelar pedido");
        alertConfirm.present();
        alertConfirm.onDidDismiss(function (confirm) {
            if (confirm) {
                console.log(pedido);
                var spiner_1 = _this.spinner.getAllPageSpinner();
                spiner_1.present();
                pedido.estado = "por pedir";
                pedido.productos = [];
                _this.auth.actualizarPedido(pedido).then(function (res) {
                    spiner_1.dismiss();
                    _this.error.mostrarMensaje("Pedido cancelado");
                });
            }
        });
    };
    ConfirmarPedidoPage.prototype.entregarPedido = function (pedido) {
        var _this = this;
        var spiner = this.spinner.getAllPageSpinner();
        spiner.present();
        pedido.estado = "camino a entrega";
        this.auth.actualizarPedido(pedido).then(function (res) {
            spiner.dismiss();
            _this.error.mostrarMensaje("Entregando pedido..Esperando confirmacion del cliente");
        });
        /*let pdidos=new Array();
        this.auth.getPedidos().subscribe(lista => {
          pdidos=lista;
          for(let i=0;i<pdidos.length;i++)
          {
            if(pdidos[i].id == pedido.id && pdidos[i].estado == 'comiendo') {
              this.error.mostrarMensaje("Pedido entregado");
              break;
            }
          }
        });*/
    };
    ConfirmarPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmar-pedido',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\confirmar-pedido\confirmar-pedido.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title></ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n  <ng-container *ngIf="!mostrarSpiner && pedidosPorConfirmar.length > 0">\n\n    <h2 class="titulo"><u>Pedidos pendientes de confirmación</u></h2>\n\n  </ng-container>\n\n  <div *ngFor="let pedido of pedidosPorConfirmar" class="card">\n\n    <div class="card-body">\n\n        <h4 class="card-title text-center">Mesa Nº {{pedido.numero}}</h4>\n\n        <div *ngFor="let item of pedido.productos" class="">\n\n          <div class="item-producto grid-container">\n\n            <div class="Contenido">\n\n              <p class="card-text item-nombre">{{item.nombre}}</p>\n\n              <p class="card-text item-descripcion">{{item.descripcion}}</p>\n\n            </div>\n\n            <div>\n\n              <h3 class="item-cantidad">{{item.cantidad}}</h3><p class="card-text item-porcion">Porciones</p>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <button ion-button block color="primary" (click)="aceptarPedido(pedido)">Aceptar</button>\n\n        <button ion-button block color="red" (click)="cancelarPedido(pedido)">Cancelar</button>\n\n    </div>\n\n  </div>\n\n  <ng-container *ngIf="!mostrarSpiner && pedidosParaEntregar.length > 0">\n\n    <h2 class="titulo"><u>Pedidos pendientes por entregar</u></h2>\n\n  </ng-container>\n\n  <div *ngFor="let pedido of pedidosParaEntregar" class="card">\n\n    <div class="card-body">\n\n      <h4 class="card-title text-center">Mesa Nº {{pedido.numero}}</h4>\n\n      <div *ngFor="let item of pedido.productos" class="">\n\n        <div class="item-producto grid-container">\n\n          <div class="Contenido">\n\n            <p class="card-text item-nombre">{{item.nombre}}</p>\n\n            <p class="card-text item-descripcion">{{item.descripcion}}</p>\n\n          </div>\n\n          <div>\n\n            <h3 class="item-cantidad">{{item.cantidad}}</h3><p class="card-text item-porcion">Porciones</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <button ion-button block color="primary" (click)="entregarPedido(pedido)">Entregar</button>\n\n    </div>\n\n  </div>\n\n  <ng-container *ngIf="!mostrarSpiner && pedidosParaEntregar.length==0 && pedidosPorConfirmar.length==0">\n\n    <h2 class="titulo"><u>No hay pedidos por confirmar o entregar</u></h2>\n\n  </ng-container>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\confirmar-pedido\confirmar-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__["a" /* SpinnerProvider */]])
    ], ConfirmarPedidoPage);
    return ConfirmarPedidoPage;
}());

//# sourceMappingURL=confirmar-pedido.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__principal_principal__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the EncuestaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EncuestaClientePage = /** @class */ (function () {
    function EncuestaClientePage(alert, camera, navCtrl, navParams, auth, error, spiner, modalCtrl) {
        this.alert = alert;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.spiner = spiner;
        this.modalCtrl = modalCtrl;
        this.firebase = __WEBPACK_IMPORTED_MODULE_5_firebase__;
        this.yaExiste = false;
        this.opinion = 3;
        this.pregunta1 = "Sexo";
        this.pregunta2 = "¿Como conocio nuestro restaurant?";
        this.pregunta3 = "¿Cómo calificaría la cortesía y trato de los empleados de “Grill”?";
        this.pregunta4 = "¿Recomendaria nuestro restaurant “Grill”?";
        this.pregunta5 = "Cuál es la razón por la que nos elije?";
        this.pregunta6 = "Calidad de la comida";
        this.respuesta1 = "mujer";
        this.respuesta2 = "Internet";
        this.respuesta3 = "Muy Buena";
        this.respuesta5 = "Calidad";
        this.respuesta6 = "buena";
        this.correo = "";
        this.comentario = "";
        this.nombre = "";
        var spinner = this.spiner.getAllPageSpinner();
        //this.usuario = navParams.get("usuario");
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        console.log(this.usuario);
        this.encuestaExiste();
    }
    EncuestaClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EncuestaClientePage');
    };
    EncuestaClientePage.prototype.VolverAtras = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__principal_principal__["a" /* PrincipalPage */]);
    };
    EncuestaClientePage.prototype.EnviarEncuesta = function () {
        var _this = this;
        console.log("enviar encuesta");
        var spiner = this.spiner.getAllPageSpinner();
        spiner.present();
        if (this.usuario.tipo == "cliente anonimo") {
            this.encuestaCliente = {
                "nombre": this.usuario.nombre,
                "pregunta1": this.pregunta1,
                "respuesta1": this.respuesta1,
                "pregunta2": this.pregunta2,
                "respuesta2": this.respuesta2,
                "pregunta3": this.pregunta3,
                "respuesta3": this.respuesta3,
                "pregunta4": this.pregunta4,
                "respuesta4": this.respuesta4,
                "pregunta5": this.pregunta5,
                "respuesta5": this.respuesta5,
                "pregunta6": this.pregunta6,
                "respuesta6": this.respuesta6,
                "comentario": this.comentario
            };
        }
        else {
            this.encuestaCliente = {
                "nombre": this.usuario.nombre,
                "correo": this.usuario.correo,
                "pregunta1": this.pregunta1,
                "respuesta1": this.respuesta1,
                "pregunta2": this.pregunta2,
                "respuesta2": this.respuesta2,
                "pregunta3": this.pregunta3,
                "respuesta3": this.respuesta3,
                "pregunta4": this.pregunta4,
                "respuesta4": this.respuesta4,
                "pregunta5": this.pregunta5,
                "respuesta5": this.respuesta5,
                "pregunta6": this.pregunta6,
                "respuesta6": this.respuesta6,
                "comentario": this.comentario
            };
        }
        console.log(this.encuestaCliente);
        localStorage.setItem('encuesta', 'true');
        if (this.yaExiste) {
            this.encuestaCliente.id = this.encuestaClienteActual.id;
            this.auth.modificarEncuestaCliente(this.encuestaCliente).then(function (res) {
                _this.error.mostrarMensaje("Se ha actualizado correctamente la encuesta.");
                spiner.dismiss();
                _this.VolverAtras();
                // this.modalCtrl.create(EstadisticasClientePage, { usuario: this.usuario }).present();
            }).catch(function (error) {
                _this.error.mostrarError(error, "error al guardar la encuesta");
                spiner.dismiss();
            });
        }
        else {
            this.auth.nuevaEncuestaCliente(this.encuestaCliente).then(function (res) {
                _this.error.mostrarMensaje("Se ha cargado correctamente la encuesta.");
                spiner.dismiss();
                _this.VolverAtras();
                // this.modalCtrl.create(EstadisticasClientePage, { usuario: this.usuario }).present();
            }).catch(function (error) {
                _this.error.mostrarError(error, "error al guardar la encuesta");
                spiner.dismiss();
            });
        }
    };
    EncuestaClientePage.prototype.abrirCamara = function () {
        return __awaiter(this, void 0, void 0, function () {
            var date, fecha, imageName, options, result, image, pictures_1, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        fecha = this.fecha + (date.getHours() + ":" + date.getMinutes());
                        imageName = fecha;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 50,
                            targetHeight: 600,
                            targetWidth: 600,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        pictures_1 = this.firebase.storage().ref("encuestaCliente/" + imageName);
                        //tomo url de foto en Firebase Storage
                        pictures_1.putString(image, "data_url").then(function () {
                            pictures_1.getDownloadURL().then(function (url) {
                                _this.foto = url;
                            });
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.alert.mostrarError(error_1, "Ocurrio un error");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EncuestaClientePage.prototype.ModificarTextoRange = function () {
        var arrayAux = ['muy mala', 'mala', 'buena', 'muy buena', 'excelente'];
        this.respuesta6 = arrayAux[this.opinion - 1];
    };
    EncuestaClientePage.prototype.encuestaExiste = function () {
        var _this = this;
        //traigo todas las encuestas   
        this.auth.getEncuestasClientes().subscribe(function (lista) {
            _this.encuestasClientes = lista;
            console.log(_this.encuestasClientes);
            for (var i = 0; i < _this.encuestasClientes.length; i++) {
                if (_this.encuestasClientes[i].correo == _this.usuario.correo) {
                    //verifico si el cliente ya tiene creada una encuesta y la modifico
                    _this.yaExiste = true;
                    console.log("la encuesta ya existe");
                    console.log(_this.encuestasClientes[i]);
                    _this.encuestaClienteActual = _this.encuestasClientes[i];
                    console.log("encuesta cliente actual");
                    console.log(_this.encuestaClienteActual);
                    break;
                }
            }
        });
    };
    EncuestaClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-encuesta-cliente',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\encuesta-cliente\encuesta-cliente.html"*/'<!--\n\n  Generated template for the EncuestaClientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title><h2>Satisfacción del Cliente</h2></ion-title>\n\n    <ion-buttons>\n\n      <button ion-button (click)="VolverAtras()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1>{{pregunta1}}</h1>\n\n    <div class="encuesta">\n\n        <ion-list radio-group [(ngModel)]="respuesta1">\n\n            <ion-item>\n\n                <ion-label>Mujer</ion-label>\n\n                <ion-radio slot="start" value="mujer" checked></ion-radio>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label>Hombre</ion-label>\n\n                <ion-radio slot="start" value="hombre" checked></ion-radio>\n\n              </ion-item>\n\n        </ion-list>\n\n      </div>\n\n\n\n\n\n      <h1>{{pregunta6}}</h1>\n\n      <div class="encuesta">\n\n          <div class="miRango">    \n\n              <ion-range [(ngModel)]="opinion" color="primary" pin="true" min="1" max="5" snaps="true" style="width: 100%;position: relative;"\n\n                (ngModelChange)="ModificarTextoRange()"></ion-range>\n\n              <span>{{respuesta6}}</span>\n\n        \n\n            </div>\n\n        </div>\n\n  \n\n  <h1>{{pregunta5}}</h1>\n\n  <div class="encuesta">\n\n    <select [(ngModel)]="respuesta5">\n\n      <option value="Calidad">Calidad</option>\n\n      <option value="Precio">Precio</option>\n\n      <option value="Publicidad">Publicidad</option>\n\n      <option value="Recomendacion">Recomendacion</option>\n\n      <option value="Servicio">Servicio</option>\n\n    </select>\n\n  </div>\n\n\n\n  <h1>{{pregunta2}}</h1>\n\n  <div class="encuesta">\n\n    <select [(ngModel)]="respuesta2">\n\n      <option value="Internet">Internet</option>\n\n      <option value="Amigos">Amigos</option>\n\n      <option value="Facebook">Facebook</option>\n\n      <option value="Recomendacion">Recomendacion</option>     \n\n    </select>\n\n  </div>\n\n\n\n\n\n  <h1>{{pregunta3}}</h1>\n\n  <div class="encuesta">\n\n        <ion-list radio-group [(ngModel)]="respuesta3">\n\n            <ion-item>\n\n              <ion-label>Muy Buena</ion-label>\n\n              <ion-radio color="primary" value="Muy Buena"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Buena</ion-label>\n\n              <ion-radio color="primary" value="Buena"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Regular</ion-label>\n\n              <ion-radio color="primary" value="Regular"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Mala</ion-label>\n\n              <ion-radio color="primary" value="Mala"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Muy Mala</ion-label>\n\n                <ion-radio color="primary" value="Muy Mala"></ion-radio>\n\n              </ion-item>\n\n          </ion-list>        \n\n  </div>\n\n\n\n  <h1>{{pregunta4}}</h1>\n\n  <div class="encuesta">\n\n    <ion-list radio-group [(ngModel)]="respuesta4">\n\n        <ion-item>\n\n            <ion-label>Sí</ion-label>\n\n            <ion-radio slot="start" value="si" checked></ion-radio>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>No</ion-label>\n\n            <ion-radio slot="start" value="no" checked></ion-radio>\n\n          </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n  <h1>Comentarios</h1>\n\n  <div class="encuesta">\n\n    <textarea rows="4" cols="50" placeholder="Escribe tu comentario aquí..." [(ngModel)]="comentario"></textarea>\n\n  </div>\n\n \n\n  <br>\n\n  <button ion-button block color="primary" (click)="abrirCamara()">Sacar Foto</button>\n\n  <button ion-button block color="secondary" [disabled]="estadoBoton" (click)="EnviarEncuesta()">Enviar encuesta</button>\n\n  <button ion-button block color="danger" (click)="VolverAtras()">Cancelar</button>\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\encuesta-cliente\encuesta-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], EncuestaClientePage);
    return EncuestaClientePage;
}());

//# sourceMappingURL=encuesta-cliente.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoDescuentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__juegos_juegos__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JuegoDescuentoPage = /** @class */ (function () {
    function JuegoDescuentoPage(navCtrl, navParams, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.myColor = '';
        this.mostrarSpiner = true;
        this.animales = new Array();
        this.animalesRandom = new Array();
        this.auth.getAnimales().subscribe(function (lista) {
            _this.animales = lista;
            console.log(_this.animales);
            //this.obtenerAnimalesRandom();
            _this.mostrarSpiner = false;
            _this.ocultar = true;
        });
    }
    JuegoDescuentoPage.prototype.obtenerAnimalesRandom = function () {
        this.animalesRandom = [];
        var num = 0;
        while (num < 8) {
            var numRandom = Math.floor((Math.random() * 50));
            if (this.PerteneceAnimal(this.animales[numRandom].nombreAnimal)) {
                this.animalesRandom.push(this.animales[numRandom]);
                num++;
            }
        }
        console.log(this.animalesRandom);
    };
    JuegoDescuentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JuegoDescuentoPage');
        this.mostrarFotos = false;
        this.juegoEmpezado = false;
        this.myColor = "primary";
        this.color = "red";
        this.tiempo = 8;
        this.mensaje = '';
    };
    JuegoDescuentoPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__juegos_juegos__["a" /* JuegosPage */]);
    };
    JuegoDescuentoPage.prototype.PerteneceAnimal = function (nombre) {
        for (var i = 0; i < this.animalesRandom.length; i++) {
            if (this.animalesRandom[i].nombreAnimal == nombre) {
                return false;
            }
        }
        return true;
    };
    JuegoDescuentoPage.prototype.jugar = function () {
        var _this = this;
        this.obtenerAnimalesRandom();
        this.mostrarFotos = true;
        this.juegoEmpezado = true;
        this.ocultar = true;
        var numRandom = Math.floor((Math.random() * 8)) + 1;
        this.tiempo = 8;
        this.mensaje = '';
        this.respuesta = '';
        this.repetidor = setInterval(function () {
            _this.tiempo--;
            if (_this.tiempo == 0) {
                //this.GuardarJugada()
                clearInterval(_this.repetidor);
                _this.tiempo = 8;
                _this.mensaje = "Cual es el nombre del animal de la foto " + numRandom + "?";
                _this.nombreAnimal = _this.animalesRandom[numRandom - 1].nombreAnimal;
                _this.mostrarFotos = false;
            }
        }, 900);
    };
    JuegoDescuentoPage.prototype.verificar = function () {
        this.respuesta = this.respuesta.toLowerCase();
        if (this.respuesta == this.nombreAnimal) {
            if (localStorage.getItem("juegoDescuento") == 'true' || localStorage.getItem("juegoDescuento") == 'false') {
                this.mensaje = "Felicidades!! Ganaste";
            }
            else {
                this.mensaje = "Felicidades!! Ganaste 10% de descuento para tu pedido";
                localStorage.setItem("juegoDescuento", 'true');
            }
        }
        else {
            this.mensaje = "Lo siento, perdiste. El animal era " + this.nombreAnimal;
            localStorage.setItem("juegoDescuento", 'false');
        }
        this.ocultar = false;
    };
    JuegoDescuentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-juego-descuento',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\juego-descuento\juego-descuento.html"*/'<!--\n\n  Generated template for the JuegoDescuentoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Juego de memoria</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n  <div class="flex-v buttons-container" *ngIf="ocultar">\n\n  <div *ngIf="!juegoEmpezado">\n\n    <h1>Se le mostraran 8 imagenes de animales al azar y tendrá que memorizarlas en 8 segundos.\n\n      Al acabar el tiempo se le preguntará por un animal, \n\n      si responde correctamente ganará un 10% de descuento en su pedido</h1>\n\n      <ion-card class="height-40 big-button-container" [color]="myColor">\n\n        <div class="flex-v center-horizontal center-vertical height-100" (click)="jugar()">\n\n          <div class="text-title">Jugar!</div>\n\n        </div>\n\n      </ion-card>\n\n  </div>\n\n  <div *ngIf="mostrarFotos && juegoEmpezado">\n\n    <div class="row"><h2 style="text-align: center;">tiempo: {{tiempo}}</h2></div>\n\n    <div class="row">\n\n      <h2>1</h2><a href="#"><div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src=\n\n      "{{animalesRandom[0][\'path\']}}" width="150px" height="100px" /></div></a>\n\n      <h2>2</h2><a href="#"><div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src=\n\n      "{{animalesRandom[1][\'path\']}}" width="150px" height="100px" /></div></a>\n\n    </div>\n\n    <div class="row">\n\n      <h2>3</h2><a href="#"><div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src=\n\n      "{{animalesRandom[2][\'path\']}}" width="140px" height="100px" /></div></a>\n\n      <h2>4</h2><a href="#"><div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src=\n\n      "{{animalesRandom[3][\'path\']}}" width="140px" height="100px" /></div></a>\n\n    </div>\n\n    <div class="row">\n\n      <h2>5</h2><a href="#"><div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src=\n\n      "{{animalesRandom[4][\'path\']}}" width="140px" height="100px" /></div></a>\n\n      <h2>6</h2><a href="#"><div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src=\n\n      "{{animalesRandom[5][\'path\']}}" width="140px" height="100px" /></div></a>\n\n    </div>\n\n    <div class="row">\n\n      <h2>7</h2><a href="#"><div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src=\n\n      "{{animalesRandom[6][\'path\']}}" width="140px" height="100px" /></div></a>\n\n      <h2>8</h2><a href="#"><div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src=\n\n      "{{animalesRandom[7][\'path\']}}" width="140px" height="100px" /></div></a>\n\n    </div>\n\n  </div>\n\n  <div *ngIf="!mostrarFotos && juegoEmpezado" class="flex-v buttons-container">\n\n    <h1>{{mensaje}}</h1>\n\n    <ion-item>\n\n      <ion-label floating>Respuesta: </ion-label>\n\n      <ion-input type="text" required [(ngModel)]="respuesta" ></ion-input>\n\n    </ion-item>\n\n    <ion-card class="height-40 big-button-container" [color]="myColor">\n\n      <div class="flex-v center-horizontal center-vertical height-100" (click)="verificar()">\n\n        <div class="text-title">Verificar</div>\n\n      </div>\n\n    </ion-card>\n\n  </div>\n\n  </div>\n\n  <div *ngIf="!ocultar && !mostrarSpiner" class="flex-v buttons-container">\n\n    <h1>{{mensaje}}</h1>\n\n    <ion-card class="height-20 big-button-container" [color]="myColor">\n\n      <div class="flex-v center-horizontal center-vertical height-100" (click)="jugar()">\n\n        <div class="text-title">Jugar otra partida!</div>\n\n      </div>\n\n    </ion-card>\n\n    <ion-card class="height-20 big-button-container" [color]="color">\n\n      <div class="flex-v center-horizontal center-vertical height-100" (click)="back()">\n\n        <div class="text-title">Salir!</div>\n\n      </div>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\juego-descuento\juego-descuento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], JuegoDescuentoPage);
    return JuegoDescuentoPage;
}());

//# sourceMappingURL=juego-descuento.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoEncuestasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ver_encuesta_cliente_ver_encuesta_cliente__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ListadoEncuestasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListadoEncuestasPage = /** @class */ (function () {
    function ListadoEncuestasPage(navCtrl, alert, modalCtrl, navParams, auth, spinner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.spinner = spinner;
        this.verEncuestas = false;
        this.usuarioActual = JSON.parse(localStorage.getItem("usuario"));
        if (this.usuarioActual.tipo == 'cliente' || this.usuarioActual.tipo == 'cliente anonimo') {
            this.verificarEstado();
        }
        if (this.verEncuestas) {
            this.listaEncuestasClientes = new Array();
            var spiner = this.spinner.getAllPageSpinner();
            spiner.present();
            //traigo los usuario para ver cuales son clientes
            this.auth.getEncuestasClientes().subscribe(function (lista) {
                _this.listaEncuestasClientes = lista;
                console.log(_this.listaEncuestasClientes);
            });
            console.log("ver lista de encuestas");
            console.log(this.listaEncuestasClientes);
            spiner.dismiss();
        }
    }
    //---------FIN CONSTRUCTOR-----------------------
    //--------------------------------
    ListadoEncuestasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListadoEncuestasPage');
    };
    //--------------------------------
    ListadoEncuestasPage.prototype.MostrarEncuesta = function (encuesta) {
        console.log("Mostrar Encuesta de:" + encuesta.nombre);
        localStorage.setItem("nombre", encuesta.nombre);
        localStorage.setItem("correo", encuesta.correo);
        console.log(encuesta);
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__ver_encuesta_cliente_ver_encuesta_cliente__["a" /* VerEncuestaClientePage */], {}).present();
    };
    //--------------------------------
    ListadoEncuestasPage.prototype.verificarEstado = function () {
        var _this = this;
        this.verEncuestas = false;
        console.log(this.usuarioActual);
        this.listaEspera = new Array();
        this.auth.getListaEspera().subscribe(function (lista) {
            console.log(_this.listaEspera);
            for (var i = 0; i < _this.listaEspera.length; i++) {
                if (_this.listaEspera[i].correo == _this.usuarioActual.correo) {
                    if (_this.listaEspera[i].estado == "en espera")
                        _this.verEncuestas = true;
                }
            }
            if (!_this.verEncuestas) {
                _this.alert.mostrarErrorLiteral("Solo puede ver las encuestas si esta en Espera");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_principal_principal__["a" /* PrincipalPage */]);
            }
        });
    };
    ListadoEncuestasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listado-encuestas',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-encuestas\listado-encuestas.html"*/'<!--\n\n  Generated template for the ListadoEncuestasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>listado-encuestas</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ng-container>\n\n    <h2 class="titulo"><u>Encuestas</u></h2>\n\n  </ng-container>\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let item of listaEncuestasClientes">\n\n      <h1>{{item.nombre}}</h1>\n\n     <!-- <h1>{{item.correo}}</h1> -->\n\n      <button ion-button clear item-end (click)="MostrarEncuesta(item)">\n\n        <ion-icon name="clipboard"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n   </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-encuestas\listado-encuestas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__["a" /* SpinnerProvider */]])
    ], ListadoEncuestasPage);
    return ListadoEncuestasPage;
}());

//# sourceMappingURL=listado-encuestas.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerEncuestaClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the VerEncuestaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerEncuestaClientePage = /** @class */ (function () {
    function VerEncuestaClientePage(alert, navCtrl, spinner, auth) {
        var _this = this;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.spinner = spinner;
        this.auth = auth;
        this.firebase = __WEBPACK_IMPORTED_MODULE_3_firebase__;
        this.encuestasClientes = new Array();
        this.nombre = localStorage.getItem("nombre");
        this.correo = localStorage.getItem("correo");
        console.log(this.nombre);
        console.log(this.correo);
        var spiner = this.spinner.getAllPageSpinner();
        spiner.present();
        //traigo los usuario para ver cuales son clientes
        this.auth.getEncuestasClientes().subscribe(function (lista) {
            _this.encuestasClientes = lista;
            console.log(_this.encuestasClientes);
            for (var i = 0; i < _this.encuestasClientes.length; i++) {
                if (_this.encuestasClientes[i].nombre == _this.nombre) {
                    if (_this.encuestasClientes[i].correo == _this.correo) {
                        console.log(_this.encuestasClientes[i]);
                        _this.pregunta1 = _this.encuestasClientes[i].pregunta1;
                        _this.respuesta1 = _this.encuestasClientes[i].respuesta1;
                        _this.pregunta2 = _this.encuestasClientes[i].pregunta2;
                        _this.respuesta2 = _this.encuestasClientes[i].respuesta2;
                        _this.pregunta3 = _this.encuestasClientes[i].pregunta3;
                        _this.respuesta3 = _this.encuestasClientes[i].respuesta3;
                        _this.pregunta4 = _this.encuestasClientes[i].pregunta4;
                        _this.respuesta4 = _this.encuestasClientes[i].respuesta4;
                        _this.pregunta5 = _this.encuestasClientes[i].pregunta5;
                        _this.respuesta5 = _this.encuestasClientes[i].respuesta5;
                        _this.pregunta6 = _this.encuestasClientes[i].pregunta6;
                        _this.respuesta6 = _this.encuestasClientes[i].respuesta6;
                        _this.comentario = _this.encuestasClientes[i].comentario;
                        break;
                    }
                }
            }
            console.log("la encuesta");
            console.log(_this.encuesta);
            console.log("this.pregunta1");
            console.log(_this.pregunta1);
        });
        spiner.dismiss();
    }
    VerEncuestaClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerEncuestaClientePage');
    };
    VerEncuestaClientePage.prototype.VolverAtras = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__principal_principal__["a" /* PrincipalPage */]);
    };
    VerEncuestaClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-encuesta-cliente',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\ver-encuesta-cliente\ver-encuesta-cliente.html"*/'<!--\n\n  Generated template for the VerEncuestaClientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title><h2>Encuesta Cliente</h2></ion-title>\n\n    <ion-buttons>\n\n      <button ion-button (click)="VolverAtras()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1 class="titulo">Nombre: {{nombre}}</h1>\n\n    <h1 class="pregunta">1){{pregunta1}}:</h1>\n\n    <h1 class="respuesta">{{respuesta1}}</h1>  \n\n    <h1 class="pregunta">2){{pregunta2}}:</h1>\n\n    <h1 class="respuesta">{{respuesta2}}</h1>\n\n    <h1 class="pregunta">3){{pregunta3}}</h1>\n\n    <h1 class="respuesta">{{respuesta3}}</h1>\n\n    <h1 class="pregunta">4){{pregunta4}}:</h1>\n\n    <h1 class="respuesta">{{respuesta4}}</h1>\n\n    <h1 class="pregunta">5){{pregunta5}}</h1>\n\n    <h1 class="respuesta">{{respuesta5}}</h1>\n\n    <h1 class="pregunta">6){{pregunta6}}</h1>\n\n    <h1 class="respuesta">{{respuesta6}}</h1> \n\n    <h1 class="pregunta">Comentarios:</h1>\n\n    <h1 class="respuesta">{{comentario}}</h1> \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\ver-encuesta-cliente\ver-encuesta-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__["a" /* SpinnerProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], VerEncuestaClientePage);
    return VerEncuestaClientePage;
}());

//# sourceMappingURL=ver-encuesta-cliente.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_ruta_mapa_ruta__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, auth, error) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        this.mostrarSpiner = true;
        this.mensajes = new Array();
        if (this.usuario.tipo == 'cliente') {
            this.cliente = true;
            this.repartidor = false;
            this.auth.getChat().subscribe(function (lista) {
                _this.mensajes = [];
                for (var i = 0; i < lista.length; i++) {
                    if (lista[i].correo == _this.usuario.correo || (lista[i].tipo == 'repartidor' && lista[i].para == _this.usuario.correo)) {
                        _this.mensajes.push(lista[i]);
                    }
                }
                _this.mensajes.sort(function (a, b) {
                    if (a.fecha > b.fecha) {
                        return 1;
                    }
                    if (a.fecha < b.fecha) {
                        return -1;
                    }
                    return 0;
                });
                _this.mostrarSpiner = false;
            });
        }
        else {
            this.cliente = false;
            this.repartidor = true;
            this.pedido = navParams.get("pedido");
            this.auth.getChat().subscribe(function (lista) {
                _this.mensajes = [];
                for (var i = 0; i < lista.length; i++) {
                    if (lista[i].correo == _this.pedido.correo || (lista[i].tipo == 'repartidor' && lista[i].para == _this.pedido.correo)) {
                        _this.mensajes.push(lista[i]);
                    }
                }
                _this.mensajes.sort(function (a, b) {
                    if (a.fecha > b.fecha) {
                        return 1;
                    }
                    if (a.fecha < b.fecha) {
                        return -1;
                    }
                    return 0;
                });
                _this.mostrarSpiner = false;
            });
        }
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__mapa_ruta_mapa_ruta__["a" /* MapaRutaPage */]);
    };
    ChatPage.prototype.onChange = function (event) {
        /*if(this.mensaje.length > 21){
            var text = this.mensaje.slice(0, 21);
            this.mensaje = text;
        }*/
    };
    ChatPage.prototype.enviarMensaje = function () {
        var _this = this;
        this.mostrarSpiner = true;
        var momentoActual = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date());
        var data;
        if (this.usuario.tipo == 'cliente') {
            data = {
                "nombre": this.usuario.nombre,
                'correo': this.usuario.correo,
                "fecha": momentoActual.format("DD/MM/YYYY HH:mm:ss"),
                "mensaje": this.mensaje,
                "tipo": this.usuario.tipo,
                "para": 'repartidor',
            };
        }
        else {
            data = {
                "nombre": this.usuario.nombre,
                'correo': this.usuario.correo,
                "fecha": momentoActual.format("DD/MM/YYYY HH:mm:ss"),
                "mensaje": this.mensaje,
                "tipo": this.usuario.tipo,
                "para": this.pedido.correo,
            };
        }
        this.auth.nuevoChat(data).then(function (res) {
            _this.mostrarSpiner = false;
        }).catch(function (error) {
            _this.mostrarSpiner = false;
            _this.error.mostrarErrorLiteral("Hubo un error al enviar el mensaje");
        });
    };
    var _a, _b, _c, _d;
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\chat\chat.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Chat</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n  <div>\n      <div *ngFor="let chat of mensajes; let i=index" class="chat-container">\n          <div class="flex-v" [ngClass]="{\'end-chat\': chat.usuario == usuario}">\n              <div  class="user-name">\n                  <div *ngIf="chat.correo!=usuario.correo"> {{chat.nombre}}: </div>\n              </div>\n              <div class="width-100">\n                  <div class="mensaje" [ngClass]="{\'end-chat\': chat.correo == usuario.correo}">{{chat.mensaje}}</div>\n              </div>\n              <div class="fecha" [ngClass]="{\'end-chat\': chat.correo == usuario.correo}">\n                  {{chat.fecha}}\n              </div>\n          </div>\n      </div>\n  </div>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <div class="flex-h">\n            <div class="width-70">\n                <textarea id="mensaje" class="mensaje-container" (keypress)="onChange($event)" (keyup)="onChange($event)" [(ngModel)]="mensaje" rows=1  placeholder="Escribir mensaje"></textarea>\n            </div>\n            <div class="width-30 center-horizontal center-vertical" style="margin: 0 10px;">\n                <button ion-button block color="primary" (click)="enviarMensaje()">Enviar</button>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]) === "function" ? _d : Object])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarDeliveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__principal_principal__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmarDeliveryPage = /** @class */ (function () {
    function ConfirmarDeliveryPage(navCtrl, navParams, auth, error) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.pedidosDelivery = new Array();
        this.mostrarSpiner = true;
        this.auth.getPedidos().subscribe(function (lista) {
            _this.pedidosDelivery = [];
            for (var i = 0; i < lista.length; i++) {
                if (lista[i].estado == 'pedido por confirmar' && lista[i].delivery) {
                    _this.pedidosDelivery.push(lista[i]);
                }
            }
            _this.mostrarSpiner = false;
        });
    }
    ConfirmarDeliveryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmarDeliveryPage');
    };
    ConfirmarDeliveryPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__principal_principal__["a" /* PrincipalPage */]);
    };
    ConfirmarDeliveryPage.prototype.aceptarPedido = function (pedido) {
        var _this = this;
        this.mostrarSpiner = true;
        pedido.estado = "esperando pedido";
        this.auth.actualizarPedido(pedido).then(function (res) {
            _this.mostrarSpiner = false;
            _this.error.mostrarMensaje("Pedido confirmado");
        });
    };
    ConfirmarDeliveryPage.prototype.cancelarPedido = function (pedido) {
        var _this = this;
        var alertConfirm = this.error.mostrarMensajeConfimación("¿Seguro que quiere cancelar este pedido?", "Cancelar pedido");
        alertConfirm.present();
        alertConfirm.onDidDismiss(function (confirm) {
            if (confirm) {
                console.log(pedido);
                _this.mostrarSpiner = true;
                pedido.estado = "cancelado";
                _this.auth.actualizarPedido(pedido).then(function (res) {
                    _this.mostrarSpiner = false;
                    _this.error.mostrarMensaje("Pedido cancelado");
                });
            }
        });
    };
    ConfirmarDeliveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmar-delivery',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\confirmar-delivery\confirmar-delivery.html"*/'<ion-header>\n  <ion-navbar color=\'primary\'>\n    <ion-title>Delivery</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n  <ng-container *ngIf="!mostrarSpiner && pedidosDelivery.length > 0">\n    <h2 class="titulo"><u>Pedidos pendientes de confirmación</u></h2>\n  </ng-container>\n  <div *ngFor="let pedido of pedidosDelivery" class="card">\n    <div class="card-body">\n        <h4 class="card-title text-center">Direccion: {{pedido.direccion}}</h4>\n        <div *ngFor="let item of pedido.productos" class="">\n          <div class="item-producto grid-container">\n            <div class="Contenido">\n              <p class="card-text item-nombre">{{item.nombre}}</p>\n              <p class="card-text item-descripcion">{{item.descripcion}}</p>\n            </div>\n            <div>\n              <h3 class="item-cantidad">{{item.cantidad}}</h3><p class="card-text item-porcion">Porciones</p>\n            </div>\n          </div>\n        </div>\n        <button ion-button block color="primary" (click)="aceptarPedido(pedido)">Aceptar</button>\n        <button ion-button block color="red" (click)="cancelarPedido(pedido)">Cancelar</button>\n    </div>\n  </div>\n  <ng-container *ngIf="!mostrarSpiner && pedidosDelivery.length==0">\n    <h2 class="titulo"><u>No hay pedidos por confirmar</u></h2>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\confirmar-delivery\confirmar-delivery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */]])
    ], ConfirmarDeliveryPage);
    return ConfirmarDeliveryPage;
}());

//# sourceMappingURL=confirmar-delivery.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alta-de-mesa/alta-de-mesa.module": [
		659,
		22
	],
	"../pages/alta-de-producto/alta-de-producto.module": [
		660,
		21
	],
	"../pages/altaempleado/altaempleado.module": [
		661,
		20
	],
	"../pages/chat/chat.module": [
		662,
		19
	],
	"../pages/confirmar-delivery/confirmar-delivery.module": [
		663,
		18
	],
	"../pages/confirmar-pedido/confirmar-pedido.module": [
		664,
		17
	],
	"../pages/encuesta-cliente/encuesta-cliente.module": [
		665,
		16
	],
	"../pages/encuesta-supervisor/encuesta-supervisor.module": [
		666,
		15
	],
	"../pages/estadisticas-supervisor/estadisticas-supervisor.module": [
		667,
		14
	],
	"../pages/juego-descuento/juego-descuento.module": [
		669,
		13
	],
	"../pages/juegos/juegos.module": [
		668,
		12
	],
	"../pages/listado-encuestas/listado-encuestas.module": [
		670,
		11
	],
	"../pages/listado-mesas/listado-mesas.module": [
		671,
		10
	],
	"../pages/listado-reserva/listado-reserva.module": [
		672,
		9
	],
	"../pages/listado-supervisor/listado-supervisor.module": [
		673,
		8
	],
	"../pages/mapa-ruta/mapa-ruta.module": [
		674,
		7
	],
	"../pages/pagar/pagar.module": [
		675,
		6
	],
	"../pages/pedir-platos/pedir-platos.module": [
		676,
		5
	],
	"../pages/principal/principal.module": [
		677,
		4
	],
	"../pages/register/register.module": [
		678,
		3
	],
	"../pages/reserva/reserva.module": [
		679,
		2
	],
	"../pages/spinner/spinner.module": [
		680,
		1
	],
	"../pages/ver-encuesta-cliente/ver-encuesta-cliente.module": [
		681,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 263;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerProvider = /** @class */ (function () {
    function SpinnerProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    SpinnerProvider.prototype.getAllPageSpinner = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'circles',
            showBackdrop: false,
            cssClass: 'small-spinner'
        });
        return loader;
    };
    SpinnerProvider.prototype.getBigSpinner = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'circles',
            showBackdrop: false,
            cssClass: 'big-spinner'
        });
        return loader;
    };
    SpinnerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SpinnerProvider);
    return SpinnerProvider;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the AltaClienteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AltaClienteComponent = /** @class */ (function () {
    function AltaClienteComponent(camera, auth, alert, scanner, navCtrl) {
        this.camera = camera;
        this.auth = auth;
        this.alert = alert;
        this.scanner = scanner;
        this.navCtrl = navCtrl;
        this.firebase = __WEBPACK_IMPORTED_MODULE_2_firebase__;
        this.perfil = "cliente registrado"; //cliente anonimo
        this.estado = "Pendiente de aprobación";
    }
    AltaClienteComponent.prototype.alta = function () {
        var _this = this;
        var data;
        if (this.nombre != undefined && this.foto != undefined && this.email != undefined
            && this.clave != undefined && this.apellido != undefined && this.dni != undefined
            && this.dni.toString().length == 8 && this.clave2 != undefined && this.clave.length >= 6) {
            if (this.clave == this.clave2) {
                this.perfil = "cliente registrado";
                data = {
                    'nombre': this.nombre,
                    'apellido': this.apellido,
                    'dni': this.dni,
                    'foto': this.foto,
                    'perfil': this.perfil,
                    'tipo': 'cliente',
                    'estado': this.estado,
                    'logueado': false,
                    'correo': this.email,
                    'clave': this.clave
                };
                this.auth.guardarUsuario(data).then(function (response) {
                    _this.alert.mostrarMensaje("Cliente registrado");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                });
            }
            else {
                this.alert.mostrarErrorLiteral("Las contraseñas son distintas");
            }
        }
        else {
            if (this.nombre == undefined || this.email == undefined || this.clave == undefined
                || this.apellido == undefined || this.dni == undefined || this.clave2 == undefined) {
                this.alert.mostrarErrorLiteral("Hay campos sin rellenar");
            }
            else {
                if (this.dni.toString().length < 8 || this.dni.toString().length > 8)
                    this.alert.mostrarErrorLiteral("El dni debe tener 8 caracteres");
                if (this.clave.length < 6)
                    this.alert.mostrarErrorLiteral("La clave debe tener por lo menos 6 caracteres");
            }
            if (this.foto == undefined) {
                this.alert.mostrarErrorLiteral("Falta cargar una foto");
            }
        }
    };
    AltaClienteComponent.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
    };
    AltaClienteComponent.prototype.abrirCamara = function () {
        return __awaiter(this, void 0, void 0, function () {
            var imageName, options, result, image, pictures_1, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imageName = this.dni + this.apellido;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 50,
                            targetHeight: 600,
                            targetWidth: 600,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        pictures_1 = this.firebase.storage().ref("clientes/" + imageName);
                        //tomo url de foto en Firebase Storage
                        pictures_1.putString(image, "data_url").then(function () {
                            pictures_1.getDownloadURL().then(function (url) {
                                _this.foto = url;
                                _this.alert.mostrarMensaje("Foto guardada con éxito");
                            });
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        alert(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AltaClienteComponent.prototype.escanear = function () {
        var _this = this;
        var options = { prompt: "Escaneá el DNI", formats: "PDF_417" };
        this.scanner.scan(options).then(function (barcodeData) {
            alert(barcodeData.text);
            var contenido = barcodeData.text;
            var array = contenido.split('@');
            _this.dni = +array[4];
            if (_this.nombre == "" || _this.nombre == undefined)
                _this.nombre = array[2];
            if (_this.apellido == "" || _this.apellido == undefined)
                _this.apellido = array[1];
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    AltaClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alta-cliente',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-cliente\alta-cliente.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Registro Cliente</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	\n\n  <ion-item>\n\n    <ion-label floating>Nombre </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="nombre" name="nombre"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="!anonimo">\n\n    <ion-label floating>Apellido </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="apellido" name="apellido"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="!anonimo">\n\n    <ion-label floating>DNI </ion-label>\n\n    <ion-input type="number" minlength="8" maxlength="8" required [(ngModel)]="dni" name="dni"></ion-input>\n\n    <button ion-button block color="primary">Escanear DNI</button>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Correo Electrónico </ion-label>\n\n    <ion-input type="email" required [(ngModel)]="email" name="email"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Clave </ion-label>\n\n    <ion-input type="password" minlength="6" required [(ngModel)]="clave" name="clave"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Repetir Clave </ion-label>\n\n    <ion-input type="password" minlength="6" required [(ngModel)]="clave2" name="clave2"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <button ion-button block color="primary" (click)="abrirCamara()">Sacar Foto</button>\n\n  <button *ngIf="!anonimo" ion-button block color="primary" (click)="escanear()">Escanear DNI</button>\n\n  <button ion-button block color="secondary" (click)="alta()">Registrar</button>\n\n  <button ion-button block color="danger" (click)="volver()">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-cliente\alta-cliente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavController */]])
    ], AltaClienteComponent);
    return AltaClienteComponent;
}());

//# sourceMappingURL=alta-cliente.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaSupervisorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the AltaSupervisorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AltaSupervisorComponent = /** @class */ (function () {
    function AltaSupervisorComponent(camera, auth, alert, scanner) {
        this.camera = camera;
        this.auth = auth;
        this.alert = alert;
        this.scanner = scanner;
        this.firebase = __WEBPACK_IMPORTED_MODULE_2_firebase__;
        this.perfil = "supervisor";
    }
    AltaSupervisorComponent.prototype.alta = function () {
        var _this = this;
        if (this.nombre != undefined && this.apellido != undefined && this.dni != undefined
            && this.cuil != undefined && this.foto != undefined && this.email != undefined
            && this.clave != undefined && this.clave2 != undefined) {
            if (this.dni.toString().length == 8 && this.cuil.toString().length == 11
                && this.clave.length >= 6 && this.clave == this.clave2) {
                this.auth.crearUsuario(this.email, this.clave).then(function (res) {
                    var data = {
                        'nombre': _this.nombre,
                        'apellido': _this.apellido,
                        'dni': _this.dni,
                        'cuil': _this.cuil,
                        'foto': _this.foto,
                        'tipo': _this.perfil,
                        'correo': _this.email,
                        'estado': '',
                        'logueado': false
                    };
                    _this.auth.guardarUsuario(data).then(function (response) {
                        _this.alert.mostrarMensaje("Supervisor creado");
                    })
                        .catch(function (error) {
                        _this.alert.mostrarErrorLiteral(error, "Ocurrio un error al registrar el usuario");
                        console.log(error);
                    });
                });
            }
            else {
                if (this.dni.toString().length != 8) {
                    this.alert.mostrarErrorLiteral("El dni debe tener 8 números");
                }
                if (this.cuil.toString().length != 11) {
                    this.alert.mostrarErrorLiteral("El cuil debe tener 11 números");
                }
                if (this.clave.length < 6) {
                    this.alert.mostrarErrorLiteral("La clave debe tener por lo menos 6 caracteres");
                }
                if (this.clave != this.clave2) {
                    this.alert.mostrarErrorLiteral("Las claves deben ser iguales");
                }
            }
        }
        else {
            if (this.nombre == undefined || this.apellido == undefined || this.dni == undefined ||
                this.cuil == undefined || this.email == undefined || this.clave == undefined
                || this.clave2 == undefined) {
                this.alert.mostrarErrorLiteral("Hay campos sin rellenar");
            }
            if (this.foto == undefined) {
                this.alert.mostrarErrorLiteral("Se debe cargar una foto");
            }
        }
    };
    AltaSupervisorComponent.prototype.abrirCamara = function () {
        return __awaiter(this, void 0, void 0, function () {
            var imageName, options, result, image, pictures_1, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imageName = this.dni + this.apellido;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 50,
                            targetHeight: 600,
                            targetWidth: 600,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        pictures_1 = this.firebase.storage().ref("supervisores/" + imageName);
                        //tomo url de foto en Firebase Storage
                        pictures_1.putString(image, "data_url").then(function () {
                            pictures_1.getDownloadURL().then(function (url) {
                                _this.foto = url;
                                /*
                                let baseRef = this.firebase.database().ref(this.sala);
                                baseRef.push({ "usuario": this.usuario.correo, "url": url, "votos": 0, "fecha":  fecha});
                                */
                            });
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        alert(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AltaSupervisorComponent.prototype.escanear = function () {
        var _this = this;
        var options = { prompt: "Escaneá el DNI", formats: "PDF_417" };
        this.scanner.scan().then(function (barcodeData) {
            alert(barcodeData.text);
            _this.dni = +barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    AltaSupervisorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alta-supervisor',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-supervisor\alta-supervisor.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Registrar Supervisor</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!--img class="icon" src="assets/Imagenes/icon.png"-->\n\n  <ion-item>\n\n    <ion-label floating>Nombre </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="nombre" name="nombre"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Apellido </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="apellido" name="apellido"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>DNI </ion-label>\n\n    <ion-input type="number" minlength="8" maxlength="8" required [(ngModel)]="dni" name="dni"></ion-input>\n\n    <button ion-button block color="primary">Escanear DNI</button>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>CUIL </ion-label>\n\n    <ion-input type="text" minlength="11" maxlength="11" required [(ngModel)]="cuil" name="cuil"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Perfil </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="perfil" name="perfil" disabled></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n    <ion-label floating>Correo Electrónico </ion-label>\n\n    <ion-input type="email" required [(ngModel)]="email" name="email"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Clave </ion-label>\n\n    <ion-input type="password" minlength="6" required [(ngModel)]="clave" name="clave"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Repetir Clave </ion-label>\n\n    <ion-input type="password" minlength="6" required [(ngModel)]="clave2" name="clave2"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <button ion-button block color="primary" (click)="abrirCamara()">Sacar Foto</button>\n\n  <button ion-button block color="primary" (click)="escanear()">Escanear DNI</button>\n\n  <button ion-button block color="secondary" (click)="alta()">Alta</button>\n\n  <button ion-button block color="danger">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-supervisor\alta-supervisor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AltaSupervisorComponent);
    return AltaSupervisorComponent;
}());

//# sourceMappingURL=alta-supervisor.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaEmpleadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the EncuestaEmpleadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EncuestaEmpleadoComponent = /** @class */ (function () {
    function EncuestaEmpleadoComponent(camera, alert, auth) {
        this.camera = camera;
        this.alert = alert;
        this.auth = auth;
        this.firebase = __WEBPACK_IMPORTED_MODULE_3_firebase__;
        this.foto = "prueba";
        this.comentario = "";
        this.rol_mozo = [
            { val: 'Mesas', isChecked: false },
            { val: 'Entrada', isChecked: false },
            { val: 'Pisos', isChecked: false },
            { val: 'Baños', isChecked: false }
        ];
        this.rol_cocinero = [
            { val: 'Congelador', isChecked: false },
            { val: 'Platos', isChecked: false },
            { val: 'Utensilios', isChecked: false },
            { val: 'Asador/Cocina', isChecked: false }
        ];
        this.rol_bartender = [
            { val: 'Lavaplatos', isChecked: false },
            { val: 'Barra', isChecked: false },
            { val: 'Deposito de Bebidas', isChecked: false }
        ];
        var date = new Date();
        this.fecha = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
        var usuario = JSON.parse(localStorage.getItem("usuario"));
        //this.rol = usuario.tipo;
        this.rol = 'mozo';
        console.log(this.rol);
    }
    EncuestaEmpleadoComponent.prototype.guardar = function () {
        if (this.foto != undefined) {
            if (this.turno != undefined && this.rol != undefined) {
                var check = void 0;
                switch (this.rol) {
                    case 'mozo':
                        check = this.rol_mozo;
                        break;
                    case 'bartender':
                        check = this.rol_bartender;
                        break;
                    case 'cocinero':
                        check = this.rol_cocinero;
                        break;
                }
                var data = {
                    'foto': this.foto,
                    'turno': this.turno,
                    'rol': this.rol,
                    'comentario': this.comentario,
                    'fecha': this.fecha,
                    'nivelLimpieza': this.limpieza,
                    'dia': this.dia
                };
                //console.log(data);
                for (var _i = 0, check_1 = check; _i < check_1.length; _i++) {
                    var item = check_1[_i];
                    data[item.val] = item.isChecked;
                }
                console.log(data);
                this.auth.guardarEncuestaEmpleado(data);
                this.alert.mostrarMensaje("Listo!");
            }
            else {
                this.alert.mostrarErrorLiteral("Hay campos sin rellenar");
            }
        }
        else {
            this.alert.mostrarErrorLiteral("Falta cargar una foto");
        }
    };
    EncuestaEmpleadoComponent.prototype.abrirCamara = function () {
        return __awaiter(this, void 0, void 0, function () {
            var date, fecha, imageName, options, result, image, pictures_1, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        fecha = this.fecha + (date.getHours() + ":" + date.getMinutes());
                        imageName = fecha;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 50,
                            targetHeight: 600,
                            targetWidth: 600,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        pictures_1 = this.firebase.storage().ref("encuesta_empleado/" + imageName);
                        //tomo url de foto en Firebase Storage
                        pictures_1.putString(image, "data_url").then(function () {
                            pictures_1.getDownloadURL().then(function (url) {
                                _this.foto = url;
                            });
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.alert.mostrarErrorLiteral(error_1, "Ocurrio un error");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EncuestaEmpleadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'encuesta-empleado',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\encuesta-empleado\encuesta-empleado.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Empleado | Encuesta</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Fecha </ion-label>\n\n    <ion-input type="string" required [(ngModel)]="fecha" disabled name="fecha"></ion-input>\n\n  </ion-item>  \n\n    \n\n    <!--ion-label floating>Turno </ion-label-->\n\n\n\n    <ion-list radio-group [(ngModel)]="turno">\n\n    <ion-list-header>\n\n      <ion-label>Turno</ion-label>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>Mañana</ion-label>\n\n      <ion-radio slot="start" value="mañana" checked></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Tarde</ion-label>\n\n      <ion-radio slot="start" value="tarde" checked></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Noche</ion-label>\n\n      <ion-radio slot="start" value="noche" checked></ion-radio>\n\n    </ion-item>\n\n    </ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label>Día</ion-label>\n\n    <ion-select [(ngModel)]="dia" placeholder="Seleccione uno">\n\n      <ion-option value="lunes">Lunes</ion-option>\n\n      <ion-option value="martes">Martes</ion-option>\n\n	    <ion-option value="miercoles">Miercoles</ion-option>\n\n      <ion-option value="jueves">Jueves</ion-option>\n\n      <ion-option value="viernes">Viernes</ion-option>\n\n      <ion-option value="sabado">Sábado</ion-option>\n\n    </ion-select>\n\n    \n\n  </ion-item>\n\n  \n\n  <ion-list *ngIf="(rol == \'mozo\')">\n\n  <ion-label>Seleccione espacio de trabajo en malas condiciones de higiene:</ion-label>\n\n	  <ion-item *ngFor="let item of rol_mozo">\n\n	  	<ion-checkbox [(ngModel)]="item.isChecked"></ion-checkbox>\n\n	  	<ion-label>{{item.val}}</ion-label>\n\n	  </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf="(rol == \'bartender\')">\n\n  	<ion-label>Seleccione espacio de trabajo en malas condiciones de higiene:</ion-label>\n\n	  <ion-item *ngFor="let item of rol_bartender">\n\n	  	<ion-checkbox [(ngModel)]="item.isChecked"></ion-checkbox>\n\n	  	<ion-label>{{item.val}}</ion-label>\n\n	  </ion-item>\n\n  </ion-list>\n\n  \n\n  <ion-list *ngIf="(rol == \'cocinero\')">\n\n  	<ion-label>Seleccione espacio de trabajo en malas condiciones de higiene:</ion-label>\n\n	  <ion-item *ngFor="let item of rol_cocinero">\n\n	  	<ion-checkbox [(ngModel)]="item.isChecked"></ion-checkbox>\n\n	  	<ion-label>{{item.val}}</ion-label>\n\n	  </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-item>\n\n  	<ion-label>Nivel de limpieza general encontrado:</ion-label>\n\n    <ion-range min="0" max="100" color="primary" name="limpieza" [(ngModel)]="limpieza">\n\n      <ion-label slot="start">0</ion-label>\n\n      <ion-label slot="end">100</ion-label>\n\n    </ion-range>\n\n  </ion-item>\n\n\n\n\n\n\n\n  <ion-item>\n\n    <ion-label position="floating">Comentarios</ion-label>\n\n    <ion-textarea [(ngModel)]="comentario" placeholder="Agregue un comentario..."></ion-textarea>\n\n  </ion-item>\n\n\n\n  <br>\n\n  <button ion-button block color="primary" (click)="abrirCamara()">Sacar Foto</button>\n\n  <button ion-button block color="secondary" (click)="guardar()">Guardar</button>\n\n  <button ion-button block color="danger">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\encuesta-empleado\encuesta-empleado.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], EncuestaEmpleadoComponent);
    return EncuestaEmpleadoComponent;
}());

//# sourceMappingURL=encuesta-empleado.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaClienteEstadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Componente que muestra un listado de clientes con sus estados respectivos
 * usuario registrado/ pendiente de aprobacion
 * y da la posibilidad de cambiar a uno u otro estado
 * SOLO SUPERVISOR
 */
var ListaClienteEstadoComponent = /** @class */ (function () {
    function ListaClienteEstadoComponent(auth, alert, navCtrl, email) {
        this.auth = auth;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.email = email;
        this.clientes = [];
        this.traerClientes();
    }
    ListaClienteEstadoComponent.prototype.traerClientes = function () {
        var _this = this;
        this.auth.getUsuarios().subscribe(function (lista) {
            for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
                var item = lista_1[_i];
                if (item.tipo == 'cliente') {
                    _this.clientes.push(item);
                }
            }
        });
    };
    ListaClienteEstadoComponent.prototype.modificarRegistro = function (e) {
        var _this = this;
        console.log(e);
        if (e.estado == "Pendiente de aprobación") {
            e.estado = "Aprobado";
            this.auth.crearUsuario(e.correo, e.clave).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/email-already-in-use') {
                    console.log(errorMessage);
                }
            });
            this.sendMail(e);
        }
        else {
            e.estado = "Pendiente de aprobación";
        }
        this.auth.updateUsuario(e)
            .then(function (response) {
            //console.log(response);
            _this.alert.mostrarMensaje("Estado de cliente modificado correctamente!");
        });
    };
    ListaClienteEstadoComponent.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_principal_principal__["a" /* PrincipalPage */]);
    };
    ListaClienteEstadoComponent.prototype.sendMail = function (e) {
        var image = "../../assets/Imagenes/icon.png";
        var email = {
            to: e.email,
            //to: 'samy32m@gmail.com',
            //cc: 'samy32m@gmail.com',
            attachments: [
                image
            ],
            subject: 'Registro Aprobado',
            body: 'Hola ' + e.nombre + ', tu registro en Grills fue aprobado exitosamente. Saludos!',
            isHtml: true,
            app: "Gmail"
        };
        this.email.open(email);
        console.log("envio realizado!");
    };
    ListaClienteEstadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lista-cliente-estado',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\lista-cliente-estado\lista-cliente-estado.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Registro de Clientes</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n  <div *ngIf="clientes" class="pad">\n\n  	<div *ngFor="let item of clientes" class="card" style="width: 18rem;">\n\n	  <img class="card-img-top" src="{{item.foto}}" alt="foto cliente">\n\n	  <div class="card-body">\n\n	    <h5 class="card-title">{{item.nombre}} {{item.apellido}}</h5>\n\n	    <p class="card-text">Estado: {{item.estado}}</p>\n\n  		<button *ngIf="item.estado == \'Pendiente de aprobación\'" ion-button block color="primary" (click)="modificarRegistro(item)">Aprobar Registro</button>\n\n  		<button *ngIf="item.estado != \'Pendiente de aprobación\'" ion-button block color="primary" (click)="modificarRegistro(item)">Deshabilitar Registro</button>\n\n	  </div>\n\n	</div>\n\n  </div>\n\n</ion-item>\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\lista-cliente-estado\lista-cliente-estado.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], ListaClienteEstadoComponent);
    return ListaClienteEstadoComponent;
}());

//# sourceMappingURL=lista-cliente-estado.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPendientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PedidosPendientesComponent = /** @class */ (function () {
    function PedidosPendientesComponent(auth, alert, navCtrl) {
        this.auth = auth;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.pedidos = [];
        this.hayProducto = false;
        this.listaPedidosOriginal = [];
        this.traerPedidos();
    }
    PedidosPendientesComponent.prototype.traerPedidos = function () {
        var _this = this;
        this.pedidos = [];
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        this.auth.getPedidos().subscribe(function (lista) {
            _this.pedidos = [];
            _this.listaPedidosOriginal = lista;
            console.log(lista);
            switch (_this.usuario.tipo) {
                case 'cocinero':
                    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
                        var item = lista_1[_i];
                        /*					//console.log(item);
                                            if(item.productos != undefined){
                                                for(let i = 0; i < item.productos.length; i++){
                                                    if(item.productos[i].tipo != 'plato'){
                                                        item.productos.splice(i, 1);
                                                    }
                                                }
                                                if(item.estado == 'esperando pedido'){
                                                    let i = 0;
                                                    let flag = false;
                                                    while(!flag){
                                                        if(item.productos[i].estado == 'pendiente' && item.productos[i].tipo == 'plato'){
                                                            this.pedidos.push(item);
                                                            this.hayProducto = true;
                                                            flag = true;
                                                        }
                                                        if(item.productos.length == i++)
                                                            flag = true;
                                                    }
                                                }
                                                else if(item.estado == 'preparando pedido'){
                                                    let id = JSON.parse(localStorage.getItem('pedidosTomados'));
                                                    if(id.toString() == item.id.toString()){
                        */
                        /*for(let i = 0; i < item.productos.length; i++){
                            if(item.productos[i].tipo != 'plato'){
                                item.productos.splice(i, 1);
                            }
                        }*/
                        if (item.estado == 'esperando pedido' || item.estado == 'preparando pedido' || item.estado == 'parcialmente terminado') {
                            for (var i = 0; i < item.productos.length; i++) {
                                if (item.productos[i].tipo == 'plato' && item.productos[i].estado == 'pendiente') {
                                    _this.pedidos.push(item);
                                    _this.hayProducto = true;
                                    _this.preparandoPedido = false;
                                    break;
                                }
                                if (item.productos[i].tipo == 'plato' && item.productos[i].estado == 'en preparacion') {
                                    _this.pedidos.push(item);
                                    _this.hayProducto = true;
                                    _this.preparandoPedido = true;
                                    break;
                                }
                            }
                            /*let i = 0;
                            let flag = false;
                            while(!flag){
                                if(item.productos[i].estado == 'pendiente' && item.productos[i].tipo == 'plato'){
                                    this.pedidos.push(item);
                                    this.hayProducto = true;
                                }
                                if(item.productos.length == i++)
                                    flag = true;
                            }*/
                        }
                        /*else if(item.estado == 'preparando pedido'){
                            let id = JSON.parse(localStorage.getItem('pedidosTomados'));
                            if(id.toString() == item.id.toString()){
                                this.pedidos.push(item);
                                this.hayProducto = true;
                            }
                        }*/
                    }
                    break;
                case 'bartender':
                    for (var _a = 0, lista_2 = lista; _a < lista_2.length; _a++) {
                        var item = lista_2[_a];
                        /*
                                            if(item.productos != undefined){
                                                for(let i = 0; i < item.productos.length; i++){
                                                    if(item.productos[i].tipo != 'bebida'){
                                                        item.productos.splice(i, 1);
                                                    }
                                                }
                                                if(item.estado == 'esperando pedido'){
                                                    let i = 0;
                                                    let flag = false;
                                                    while(!flag){
                                                        if(item.productos[i].estado == 'pendiente' && item.productos[i].tipo == 'bebida'){
                                                            this.pedidos.push(item);
                                                            this.hayProducto = true;
                                                            flag = true;
                                                        }
                                                        if(item.productos.length == i++)
                                                            flag = true;
                                                    }
                                                }
                                                else if(item.estado == 'preparando pedido'){
                                                    let id = localStorage.getItem('pedidosTomados');
                                                    if(id != undefined && id == item.id){
                                                        this.pedidos.push(item);
                                                        this.hayProducto = true;
                        */
                        /*for(let i = 0; i < item.productos.length; i++){
                            if(item.productos[i].tipo != 'bebida'){
                                item.productos.splice(i, 1);
                            }
                        }*/
                        if (item.estado == 'esperando pedido' || item.estado == 'preparando pedido' || item.estado == 'parcialmente terminado') {
                            for (var i = 0; i < item.productos.length; i++) {
                                if (item.productos[i].tipo == 'bebida' && item.productos[i].estado == 'pendiente') {
                                    _this.pedidos.push(item);
                                    _this.hayProducto = true;
                                    _this.preparandoPedido = false;
                                    break;
                                }
                                if (item.productos[i].tipo == 'bebida' && item.productos[i].estado == 'en preparacion') {
                                    _this.pedidos.push(item);
                                    _this.hayProducto = true;
                                    _this.preparandoPedido = true;
                                    break;
                                }
                            }
                        }
                    }
                    break;
            }
            console.log(_this.pedidos);
        });
    };
    PedidosPendientesComponent.prototype.pedirPreparar = function (pedido) {
        var _this = this;
        var alertConfirm = this.alert.mostrarMensajeConfimación("¿Estas seguro de tomar el pedido?", "Tomar Pedido");
        alertConfirm.present();
        alertConfirm.onDidDismiss(function (confirm) {
            if (confirm) {
                _this.prepararPlato(pedido);
            }
        });
    };
    PedidosPendientesComponent.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_principal_principal__["a" /* PrincipalPage */]);
    };
    PedidosPendientesComponent.prototype.prepararPlato = function (pedido) {
        var _this = this;
        //console.log(pedido);
        if (pedido.estado == 'esperando pedido') {
            pedido.estado = "preparando pedido";
        }
        var tipoProducto = "";
        if (this.usuario.tipo == 'cocinero')
            tipoProducto = 'plato';
        else
            tipoProducto = 'bebida';
        var tiempo = 0;
        for (var _i = 0, _a = pedido.productos; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.tiempoPromedioElaboracion > tiempo) {
                tiempo = item.tiempoPromedioElaboracion;
            }
        }
        for (var i = 0; i < this.listaPedidosOriginal.length; i++) {
            if (this.listaPedidosOriginal[i].id == pedido.id) {
                this.listaPedidosOriginal[i].estado = "preparando pedido";
                this.listaPedidosOriginal[i].tiempoElaboracion = tiempo;
                for (var _b = 0, _c = this.listaPedidosOriginal[i].productos; _b < _c.length; _b++) {
                    var producto = _c[_b];
                    if (producto.tipo == tipoProducto) {
                        producto.estado = "en preparacion";
                    }
                }
                //localStorage.setItem("pedidosTomados", JSON.stringify(pedido.id));
                this.auth.actualizarPedido(this.listaPedidosOriginal[i]).then(function (res) {
                    _this.alert.mostrarMensaje("Pedido Tomado");
                });
                break;
            }
        }
    };
    PedidosPendientesComponent.prototype.terminar = function (pedido) {
        var tipoProducto = "";
        if (this.usuario.tipo == 'cocinero')
            tipoProducto = 'plato';
        else
            tipoProducto = 'bebida';
        var momentoActual = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date());
        var hora = momentoActual.format("DD/MM/YYYY HH:mm");
        console.log("termino pedido!");
        for (var i = 0; i < this.listaPedidosOriginal.length; i++) {
            if (this.listaPedidosOriginal[i].id == pedido.id) {
                this.listaPedidosOriginal[i].estado = "parcialmente terminado";
                for (var _i = 0, _a = this.listaPedidosOriginal[i].productos; _i < _a.length; _i++) {
                    var producto = _a[_i];
                    if (producto.tipo == tipoProducto) {
                        producto.estado = "terminado";
                    }
                }
                var flag = false;
                for (var _b = 0, _c = this.listaPedidosOriginal[i].productos; _b < _c.length; _b++) {
                    var producto = _c[_b];
                    if (producto.estado != 'terminado') {
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    this.listaPedidosOriginal[i].estado = "pedido terminado";
                    this.listaPedidosOriginal[i].horaFinalizacion = hora;
                }
                this.auth.actualizarPedido(this.listaPedidosOriginal[i]);
                this.alert.mostrarMensaje("Pedido Terminado");
                this.back();
                break;
            }
        }
    };
    PedidosPendientesComponent.prototype.renovarpedidos = function () {
        for (var _i = 0, _a = this.listaPedidosOriginal; _i < _a.length; _i++) {
            var pedido = _a[_i];
            pedido.estado = "esperando pedido";
            for (var _b = 0, _c = pedido.productos; _b < _c.length; _b++) {
                var item = _c[_b];
                item.estado = "pendiente";
            }
            this.auth.actualizarPedido(pedido);
        }
    };
    PedidosPendientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pedidos-pendientes',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\pedidos-pendientes\pedidos-pendientes.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Pedidos Pendientes</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <div *ngIf="usuario.tipo==\'cocinero\'">\n\n  	<div *ngFor="let pedido of pedidos" class="card">\n\n	  <div class="card-body">\n\n	  	<h4 class="card-title text-center">Mesa Nº {{pedido.numero}}</h4>\n\n	  	<div *ngFor="let item of pedido.productos" class="">\n\n		    <div *ngIf="item.tipo==\'plato\'" class="item-producto grid-container">\n\n		    	<div class="Contenido">\n\n			    	<p class="card-text item-nombre">{{item.nombre}}</p>\n\n				    <p class="card-text item-descripcion">{{item.descripcion}}</p>\n\n		    	</div>\n\n		    	<div>\n\n		    		<h3 class="item-cantidad">{{item.cantidad}}</h3><p class="card-text item-porcion">Porciones</p>\n\n		    	</div>\n\n		    </div>\n\n	  	</div>\n\n  		<button *ngIf="(pedido.estado == \'esperando pedido\')" ion-button block color="primary" (click)="pedirPreparar(pedido)">Preparar</button>\n\n  		<button *ngIf="!(pedido.estado == \'esperando pedido\')" ion-button block color="primary" (click)="terminar(pedido)">Terminar pedido</button>\n\n	  </div>\n\n	  </div>\n\n  </div>\n\n  <div *ngIf="usuario.tipo==\'bartender\'">\n\n	<div *ngFor="let pedido of pedidos" class="card">\n\n	<div class="card-body">\n\n		<h4 class="card-title text-center">Mesa Nº {{pedido.numero}}</h4>\n\n		<div *ngFor="let item of pedido.productos" class="">\n\n		  <div *ngIf="item.tipo==\'bebida\'" class="item-producto grid-container">\n\n			  <div class="Contenido">\n\n				  <p class="card-text item-nombre">{{item.nombre}}</p>\n\n				  <p class="card-text item-descripcion">{{item.descripcion}}</p>\n\n			  </div>\n\n			  <div>\n\n				  <h3 class="item-cantidad">{{item.cantidad}}</h3><p class="card-text item-porcion">Porciones</p>\n\n			  </div>\n\n		  </div>\n\n		</div>\n\n		<button *ngIf="(pedido.estado == \'esperando pedido\')" ion-button block color="primary" (click)="pedirPreparar(pedido)">Preparar</button>\n\n		<button *ngIf="!(pedido.estado == \'esperando pedido\')" ion-button block color="primary" (click)="terminar(pedido)">Terminar pedido</button>\n\n	</div>\n\n	</div>\n\n</div>\n\n\n\n  <div *ngIf="!hayProducto">\n\n  	<h2 class="text-center">No hay pedidos pendientes</h2>\n\n  </div>\n\n\n\n  <button ion-button block color="primary" (click)="renovarpedidos()">Renovar Pedidos</button>\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\pedidos-pendientes\pedidos-pendientes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]])
    ], PedidosPendientesComponent);
    return PedidosPendientesComponent;
}());

//# sourceMappingURL=pedidos-pendientes.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrMesaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_cliente_home_cliente__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pedir_platos_pedir_platos__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_encuesta_cliente_encuesta_cliente__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_juegos_juegos__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pagar_pagar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var QrMesaComponent = /** @class */ (function () {
    /*estado pedido:
       por pedir, esperando pedido, preparando pedido, pedido terminado, comiendo, por pagar
      
      estado mesa:
      libre, ocupada
     */
    function QrMesaComponent(auth, alert, navCtrl, navParams) {
        this.auth = auth;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = "";
        this.mesas = [];
        this.estado = 0;
        this.ocupada = false;
        this.mostrarSpiner = false;
        this.myColor = 'primary';
        this.otroColor = 'red';
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        //this.codigo = navParams.get("codigo");
        this.codigo = localStorage.getItem("codigo");
        this.codigo = this.codigo.split(',');
        this.puedeSentar = false;
        if (this.usuario.tipo == 'cliente' || this.usuario.tipo == 'cliente anonimo') {
            this.puedeSentarse();
        }
    }
    QrMesaComponent.prototype.puedeSentarse = function () {
        var _this = this;
        this.auth.getListaEspera().subscribe(function (lista) {
            for (var i = 0; i < lista.length; i++) {
                if (_this.usuario.tipo == 'cliente') {
                    if (lista[i].correo == _this.usuario.correo && lista[i].estado == 'aceptado') {
                        _this.cliente = lista[i];
                        _this.puedeSentar = true;
                        break;
                    }
                }
                else if (_this.usuario.tipo == 'cliente anonimo') {
                    if (lista[i].nombre == _this.usuario.nombre && lista[i].estado == 'aceptado') {
                        _this.cliente = lista[i];
                        _this.puedeSentar = true;
                        break;
                    }
                }
            }
            _this.verificarCodigo();
        });
    };
    QrMesaComponent.prototype.escanear = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_cliente_home_cliente__["a" /* HomeClienteComponent */]);
    };
    //verifico si existe el codigo
    /*
    *   VERIFICO EXISTENCIA DE RESERVA
    *   VERIFICO QUE EL CLIENTE ESTE EN LA LISTA DE ESPERA Y ESTE ACEPTADO
    */
    QrMesaComponent.prototype.verificarCodigo = function () {
        var _this = this;
        this.mostrarSpiner = true;
        this.title = "Mesa Actual";
        if (!this.puedeSentar) {
            this.alert.mostrarErrorLiteral("No ha sido confirmado por el mozo para ocupar una mesa. Lea el QR de entrada y espera la confirmacion del mozo");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
            return;
        }
        if (this.cliente.mesa != this.codigo[1]) {
            this.alert.mostrarErrorLiteral("No fue asignado a esta mesa..por favor, escanee la mesa la cual fue asignado/a");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
            return;
        }
        this.auth.getMesas().subscribe(function (lista) {
            console.log(_this.codigo);
            console.table(lista);
            var flag = false;
            var estaMesa = false;
            var _loop_1 = function (item) {
                if (item.numero == _this.codigo[1]) {
                    estaMesa = true;
                    if (item.estado == 'libre') {
                        /*
                        * mostrar ventana de mesa libre y boton tomar mesa
                        */
                        _this.mesas.push(item);
                        _this.estado = 1;
                        _this.ocupada = false;
                        flag = true;
                        _this.mostrarSpiner = false;
                        return "break";
                    }
                    else {
                        /*
                        * si es el usuario que tomo la mesa, muestro su estado, monto total si ya hizo el
                        * pedido, y los respectivos botones
                        * si no es el usuario que tomo la mesa muestro muestro "mesa ocupada" -> flag = false
                        */
                        _this.auth.getPedidos().subscribe(function (l) {
                            for (var _i = 0, l_1 = l; _i < l_1.length; _i++) {
                                var i = l_1[_i];
                                if (_this.usuario.tipo == "cliente") {
                                    if (i.correo == _this.usuario.correo && i.numero == item.numero && i.estado != 'pagado') {
                                        //console.log(i);
                                        _this.pedidoActual = i;
                                        _this.ocupada = false;
                                        _this.estadoPedido();
                                        break;
                                    }
                                }
                                else {
                                    if (i.nombreCliente == _this.usuario.nombre && i.numero == item.numero && i.estado != 'pagado') {
                                        _this.pedidoActual = i;
                                        _this.ocupada = false;
                                        _this.estadoPedido();
                                        break;
                                    }
                                }
                            }
                        });
                        return "break";
                    }
                }
            };
            for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
                var item = lista_1[_i];
                var state_1 = _loop_1(item);
                if (state_1 === "break")
                    break;
            }
            if (!estaMesa) {
                _this.alert.mostrarErrorLiteral("Error.No existe la mesa escaneada");
                _this.back();
            }
            //console.log(this.mesas);
            if (!flag) {
                _this.texto = "La mesa esta ocupada";
                _this.ocupada = true;
                _this.mostrarSpiner = false;
            }
        });
    };
    QrMesaComponent.prototype.estadoPedido = function () {
        switch (this.pedidoActual.estado) {
            case 'por pedir':
                //mostrar boton hacer pedido
                this.estado = 2;
                break;
            case 'pedido por confirmar':
                //Mostrar algun mensaje que el pedido todavia no se ha confirmado
                this.estado = 3;
                break;
            case 'esperando pedido':
            case 'preparando pedido':
            case 'parcialmente terminado':
            case 'pedido terminado':
                /*mostrar estado del pedido y monto total, ademas de boton
                * encuesta, juegos
                */
                this.estado = 4;
                break;
            case 'camino a entrega':
                this.estado = 6;
                break;
            case 'comiendo':
                //mostrar monto total, encuesta, juegos, boton pagar
                this.estado = 5;
                break;
            case 'por pagar':
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_pagar_pagar__["a" /* PagarPage */]);
                //liberar mesa
                //item.estado = "libre";
                //this.auth.updateMesa(item);
                break;
        }
        this.mostrarSpiner = false;
    };
    QrMesaComponent.prototype.verificarReserva = function () {
        var _this = this;
        this.auth.getReservas().subscribe(function (lista) {
            var momentoActual = __WEBPACK_IMPORTED_MODULE_10_moment__(new Date());
            for (var _i = 0, lista_2 = lista; _i < lista_2.length; _i++) {
                var reserva = lista_2[_i];
                if (reserva.estado == "confirmada" && reserva.correo == _this.usuario.correo) {
                    var momentoReservaMesa = __WEBPACK_IMPORTED_MODULE_10_moment__(reserva.horario, "DD/MM/YYYY HH:mm");
                    if (Math.abs(momentoActual.diff(momentoReservaMesa, "m")) < 40) {
                        //guardar mesa y asignarla
                    }
                }
            }
        });
    };
    QrMesaComponent.prototype.tomarMesa = function (e) {
        var _this = this;
        //console.log(e);
        this.mostrarSpiner = true;
        this.estado = 0;
        e.estado = 'ocupada';
        this.auth.updateMesa(e).then(function (res) {
            var date = new Date();
            var fecha = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
            console.log(_this.usuario);
            var dataPedido;
            if (_this.usuario.tipo == "cliente anonimo") {
                dataPedido = {
                    'estado': 'por pedir',
                    'numero': e.numero,
                    'tipo': e.tipo,
                    'nombreCliente': _this.usuario.nombre,
                    'fecha': fecha
                };
            }
            else {
                dataPedido = {
                    'estado': 'por pedir',
                    'numero': e.numero,
                    'tipo': e.tipo,
                    'nombreCliente': _this.usuario.nombre,
                    'apellidoCliente': _this.usuario.apellido,
                    'correo': _this.usuario.correo,
                    'fecha': fecha
                };
            }
            _this.auth.guardarPedido(dataPedido).then(function (res) {
                _this.alert.mostrarMensaje("Mesa asignada");
                _this.mostrarSpiner = false;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
            }).catch(function (error) {
                _this.alert.mostrarError(error, "Lo siento, hubo un error al asignar la mesa");
                _this.mostrarSpiner = false;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
            });
        }).catch(function (error) {
            _this.alert.mostrarError(error, "Lo siento, hubo un error al asignar la mesa");
            _this.mostrarSpiner = false;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
        });
    };
    QrMesaComponent.prototype.verEstadoPedido = function () {
        var _this = this;
        this.title = "Estado Actual del Pedido";
        this.auth.getPedidos().subscribe(function (lista) {
            for (var _i = 0, lista_3 = lista; _i < lista_3.length; _i++) {
                var item = lista_3[_i];
                if (_this.pedidoActual.id == item.id) {
                    _this.pedidoActual = item;
                    break;
                }
            }
        });
    };
    QrMesaComponent.prototype.aceptarPedido = function () {
        var _this = this;
        this.pedidoActual.estado = 'comiendo';
        this.auth.actualizarPedido(this.pedidoActual).then(function (res) {
            _this.alert.mostrarMensaje("pedido entregado. Disfrutelo");
        });
    };
    QrMesaComponent.prototype.cancelarPedido = function () {
        var _this = this;
        this.pedidoActual.estado = 'pedido terminado';
        this.auth.actualizarPedido(this.pedidoActual).then(function (res) {
            _this.alert.mostrarMensaje("Perdon, se le volverà a entregar el pedido si todavia no esta listo");
        });
    };
    QrMesaComponent.prototype.mostrarEncuesta = function () {
        console.log("mostrar encuesta");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_encuesta_cliente_encuesta_cliente__["a" /* EncuestaClientePage */]);
    };
    QrMesaComponent.prototype.hacerPedido = function () {
        console.log("En Hacer Pedido");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_pedir_platos_pedir_platos__["a" /* PedirPlatosPage */]);
    };
    QrMesaComponent.prototype.mostrarJuegos = function () {
        console.log("mostrar juegos");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_juegos_juegos__["a" /* JuegosPage */]);
    };
    QrMesaComponent.prototype.pedidoRecibido = function () {
        console.log("pedido recibido");
        console.log(this.pedidoActual);
        this.pedidoActual.estado = "comiendo";
        this.auth.actualizarPedido(this.pedidoActual);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_cliente_home_cliente__["a" /* HomeClienteComponent */]);
    };
    QrMesaComponent.prototype.pagar = function () {
        var _this = this;
        this.pedidoActual.estado = 'por pagar';
        this.auth.actualizarPedido(this.pedidoActual).then(function (res) {
            _this.cliente.estado = 'terminado';
            _this.auth.updateListaEspera(_this.cliente).then(function (res) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_pagar_pagar__["a" /* PagarPage */]);
            });
        });
        console.log("pagando");
    };
    QrMesaComponent.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */]);
    };
    QrMesaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qr-mesa',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\qr-mesa\qr-mesa.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>{{title}}</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n  <div *ngIf="estado == 1" class="flex-v buttons-container">\n\n  	<div *ngFor="let mesa of mesas" class="card" style="width: 30rem;">\n\n	  <img class="card-img-top" src="{{mesa.foto}}" alt="foto mesa">\n\n	  <div class="card-body cb">\n\n	    <h5 class="card-title text-center">Mesa Nº {{mesa.numero}}</h5>\n\n	    <p class="card-text">Cantidad de Comensales: {{mesa.cantidadComensales}}</p>\n\n      <p class="card-text">Tipo: {{mesa.tipo}}</p>\n\n      <ion-card class="height-20 big-button-container" [color]="myColor">\n\n        <div class="flex-v center-horizontal center-vertical height-100" (click)="tomarMesa(mesa)">\n\n          <div class="text-title">Tomar mesa</div>\n\n        </div>\n\n      </ion-card>\n\n  		<button ion-button block color="primary" (click)="escanear()">Escanear otra mesa</button>\n\n	  </div>\n\n	  </div>\n\n  </div>\n\n\n\n  <div *ngIf="ocupada" class="ocupada">\n\n    <h1 class="text-center">{{texto}}</h1>\n\n    <img class="img-reserva" src="../../assets/Imagenes/mesa-reservada.jpg" alt="mesa-reservada">\n\n    <button ion-button block color="primary" (click)="back()">Volver</button>\n\n  </div>\n\n\n\n\n\n  <div class="flex-v buttons-container" *ngIf="estado == 2">\n\n  	<ion-grid>\n\n  		<ion-row>\n\n  			<!--h2>Estado de Pedido:</h2><h4 class="estado">{{pedidoActual.estado}}</h4-->\n\n          <h4 class="pregunta-title">¿Desea realizar un pedido?</h4>\n\n  		</ion-row>\n\n      <img class="img-mozo" src="../../assets/Imagenes/mozo.png" alt="mozo">\n\n      <ion-card class="height-20 big-button-container" [color]="myColor">\n\n        <div class="flex-v center-horizontal center-vertical height-100" (click)="hacerPedido()">\n\n          <div class="text-title">Realizar pedido</div>\n\n        </div>\n\n      </ion-card>\n\n      <ion-card class="height-20 big-button-container" [color]="myColor">\n\n        <div class="flex-v center-horizontal center-vertical height-100" (click)="mostrarJuegos()">\n\n          <div class="text-title">Juegos por Descuentos</div>\n\n        </div>\n\n      </ion-card>\n\n      <!--<button ion-button block color="primary" (click)="mostrarJuegos()">Juegos por Descuentos</button>\n\n      <button ion-button block color="primary" (click)="hacerPedido()">Realizar Pedido</button>-->\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div *ngIf="estado == 3">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <h4 class="estado">Estado: {{pedidoActual.estado}}</h4>\n\n        <h6>Su pedido no esta confirmado todavia. Aguarde un momento...</h6>\n\n      </ion-row>\n\n      <ion-row>\n\n        <h2>Monto Total: </h2><h4 class="estado">${{pedidoActual.montoTotal}}</h4>\n\n      </ion-row>\n\n      <img class="img-reserva" src="../../assets/Imagenes/reloj.png" alt="reloj">\n\n      <!--ul *ngFor="let item of pedidoActual.productos">\n\n        <li>{{item.nombre}} : {{item.estado}}</li>\n\n      </ul-->\n\n      <button ion-button block color="primary" (click)="mostrarEncuesta()">Encuesta de Satisfaccion</button>\n\n      <button ion-button block color="primary" (click)="mostrarJuegos()">Juegos por Descuentos</button>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div *ngIf="estado == 4">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <h4 class="estado">Estado: {{pedidoActual.estado}}</h4>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ul *ngFor="let item of pedidoActual.productos">\n\n          <li>{{item.nombre}} -- {{item.estado}}</li>\n\n        </ul>\n\n      </ion-row>\n\n      <ion-row>\n\n        <h2>Monto Total: </h2><h4 class="estado">${{pedidoActual.montoTotal}}</h4>\n\n      </ion-row>\n\n      <img class="img-mozo" src="../../assets/Imagenes/mozo.png" alt="mozo">\n\n      <button ion-button block color="primary" (click)="mostrarEncuesta()">Encuesta de Satisfaccion</button>\n\n      <button ion-button block color="primary" (click)="mostrarJuegos()">Juegos por Descuentos</button>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div *ngIf="estado == 5">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <h4 class="estado">Estado: {{pedidoActual.estado}}</h4>\n\n      </ion-row>\n\n      <ion-row>\n\n        <h2>Monto Total: </h2><h4 class="estado">${{pedidoActual.montoTotal}}</h4>\n\n      </ion-row>\n\n      <img class="img-reserva" src="../../assets/Imagenes/plato.png" alt="mesa-reservada">\n\n      <button ion-button block color="primary" (click)="mostrarEncuesta()">Encuesta de Satisfaccion</button>\n\n      <button ion-button block color="primary" (click)="mostrarJuegos()">Juegos por Descuentos</button>\n\n      <button ion-button block color="primary" (click)="pagar()">Pagar</button>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div class="flex-v buttons-container" *ngIf="estado == 6">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <!--h2>Estado de Pedido:</h2><h4 class="estado">{{pedidoActual.estado}}</h4-->\n\n            <h4 class="estado">Estado: {{pedidoActual.estado}}</h4> \n\n            <h4 class="pregunta-title">¿Desea aceptar el pedido?</h4>\n\n        </ion-row>\n\n        <img class="img-mozo" src="../../assets/Imagenes/mozo.png" alt="mozo">\n\n        <ion-card class="height-20 big-button-container" [color]="myColor">\n\n          <div class="flex-v center-horizontal center-vertical height-100" (click)="aceptarPedido()">\n\n            <div class="text-title">Aceptar</div>\n\n          </div>\n\n        </ion-card>\n\n        <ion-card class="height-20 big-button-container" [color]="otroColor">\n\n          <div class="flex-v center-horizontal center-vertical height-100" (click)="cancelarPedido()">\n\n            <div class="text-title">Cancelar</div>\n\n          </div>\n\n        </ion-card>\n\n        <!--<button ion-button block color="primary" (click)="mostrarJuegos()">Juegos por Descuentos</button>\n\n        <button ion-button block color="primary" (click)="hacerPedido()">Realizar Pedido</button>-->\n\n      </ion-grid>\n\n    </div>\n\n\n\n\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\qr-mesa\qr-mesa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */]])
    ], QrMesaComponent);
    return QrMesaComponent;
}());

//# sourceMappingURL=qr-mesa.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoPostreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_juego_ahorcado_juego_ahorcado__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JuegoPostreComponent = /** @class */ (function () {
    function JuegoPostreComponent(nuevoJuego, navCtrl, alert) {
        this.nuevoJuego = nuevoJuego;
        this.navCtrl = navCtrl;
        this.alert = alert;
        //nuevoJuego: JuegoAhorcado;
        this.gano = false;
        this.perdio = false;
        this.letras = [];
        this.palabra_incompleta = "";
        this.contadorTurnos = 0;
        this.contadorFallos = 0;
        this.puntaje = 0;
        this.primeraVez = false;
        //this.nuevoJuego = new JuegoAhorcado();
        this.primeraVez = false;
        this.generaABC();
        this.iniciar();
        //console.log(this.palabra_incompleta);
        //let user = JSON.parse(localStorage.getItem('usuarioActual'));
    }
    JuegoPostreComponent.prototype.ngOnInit = function () {
    };
    JuegoPostreComponent.prototype.generaABC = function () {
        var a = "a";
        var z = "z";
        var i = a.charCodeAt(0), j = z.charCodeAt(0);
        var letra = "";
        var n = 0;
        for (; i <= j; i++) {
            letra = String.fromCharCode(i).toUpperCase();
            this.letras[n] = letra;
            if (i == 110) {
                n++;
                this.letras[n] = "Ñ";
            }
            n++;
        }
        //console.log(this.letras);
    };
    JuegoPostreComponent.prototype.iniciar = function () {
        this.nuevoJuego.iniciarJuego();
        this.palabra_incompleta = this.nuevoJuego.palabra_incompleta;
        this.gano = false;
        this.perdio = false;
        this.letras = [];
        this.contadorTurnos = this.nuevoJuego.contador;
        this.contadorFallos = 0;
        this.generaABC();
        this.quitarClases();
    };
    JuegoPostreComponent.prototype.verificar = function (letra, event) {
        //aplico clase 
        //event.target.classList.add("marcado")
        if (this.gano != true && this.perdio != true && !event.target.classList.contains("marcado") && !event.target.classList.contains("marcado-bien")) {
            var retorno = this.nuevoJuego.comprobarLetra(letra);
            this.palabra_incompleta = this.nuevoJuego.palabra_incompleta;
            if (retorno == 0) {
                this.perdio = true;
                this.setPuntos();
                this.marcarCasilla(event);
                this.contadorTurnos = this.nuevoJuego.contador;
                this.contadorFallos = this.nuevoJuego.fallos;
            }
            else {
                this.marcarCasilla(event);
                this.contadorTurnos = this.nuevoJuego.contador;
                this.contadorFallos = this.nuevoJuego.fallos;
                if (this.nuevoJuego.gano) {
                    this.gano = true;
                    this.setPuntos();
                }
            }
        }
    };
    JuegoPostreComponent.prototype.marcarCasilla = function (event) {
        if (this.contadorFallos < this.nuevoJuego.fallos)
            event.target.classList.add("marcado");
        else
            event.target.classList.add("marcado-bien");
    };
    JuegoPostreComponent.prototype.quitarClases = function () {
        var botones = document.getElementsByClassName("marcado");
        //console.log(botones);
        for (var i = botones.length - 1; i >= 0; i--) {
            botones[i].classList.remove("marcado");
        }
        botones = document.getElementsByClassName("marcado-bien");
        for (var i = botones.length - 1; i >= 0; i--) {
            botones[i].classList.remove("marcado-bien");
        }
    };
    //si comprobarLetra es false = mostrar mensaje {imagen si es posible}
    JuegoPostreComponent.prototype.setPuntos = function () {
        //let user = JSON.parse(localStorage.getItem('usuario'));
        //console.log(user);
        if (!this.primeraVez) {
            if (localStorage.getItem('descuento-postre') == undefined) {
                if (this.puntaje == 0)
                    localStorage.setItem('descuento-postre', 'false');
                else
                    localStorage.setItem('descuento-postre', 'true');
            }
            this.primeraVez = true;
            this.alert.mostrarMensaje("Ganaste una bebida gratis!!!");
        }
        else {
            if (this.puntaje > 0) {
                if (this.gano) {
                    this.puntaje++;
                    this.alert.mostrarMensaje("Ganaste!!!");
                }
                else if (this.perdio) {
                    this.puntaje--;
                    this.alert.mostrarMensaje("Perdiste...");
                }
            }
            else {
                if (this.gano) {
                    this.puntaje = 1;
                    this.alert.mostrarMensaje("Ganaste!!!");
                }
                else if (this.perdio) {
                    this.puntaje = 0;
                    this.alert.mostrarMensaje("Perdiste...");
                }
            }
        }
        //this.puntaje = user.ahorcado;
        //console.log(localStorage.getItem('usuarioActual'));
        /*let resultados = [];
        resultados =  JSON.parse(localStorage.getItem('resultados'));
        //console.log(resultados);
        //let resultados = JSON.parse(localStorage.getItem('resultados'));
        if(resultados){
          let existe = false;
          for(var i = 0; i<resultados.length; i++){
            if(resultados[i].nombre == user.nombre)
            {
              resultados[i].ahorcado = user.ahorcado;
              existe = true;
              break;
            }
          }
    
          if(!existe){
            resultados.push(user);
          }
        }
        else{
          resultados = [];
          resultados.push(user);
        }
        localStorage.setItem('resultados', JSON.stringify(resultados));
        //console.log(JSON.parse(localStorage.getItem('resultados')));
        */
    };
    JuegoPostreComponent.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_principal_principal__["a" /* PrincipalPage */]);
    };
    JuegoPostreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'juego-postre',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\juego-postre\juego-postre.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>El Ahorcado</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<div class="container">\n\n	<!--h1 class="text-center title">El Ahorcado</h1-->\n\n	<div class="row row-tablero">\n\n		\n\n	<div class="row palabra justify-content-center">\n\n		<div class="col"></div>\n\n		<div class="col">\n\n			<h2 class="text-center palabra-incompleta">{{palabra_incompleta}}</h2>\n\n		</div>\n\n		<div class="col"></div>\n\n	</div>\n\n	<div id="botones" class="row botones justify-content-center">\n\n		<div class="align-self-center tablero">\n\n			<button (click)="verificar(letra, $event)" *ngFor="let letra of letras" class="btn-info font-size">{{letra}}</button>\n\n		</div>\n\n	</div>\n\n\n\n	<div class="row ancho">\n\n		<div class="col-lg-4 col-md-4 col-4 mg">\n\n			<div class="turno">\n\n				<span class="numero">\n\n					{{contadorTurnos}}\n\n				</span>\n\n				<span class="letra">\n\n					Turnos\n\n				</span>\n\n			</div>\n\n		</div>\n\n		<div class="col-lg-4 col-md-4 col-4 mg">\n\n			<button class="btn-nuevo" (click)="iniciar()">\n\n				<img src="../../assets/Imagenes/refresh2.png" alt="nuevo-juego">\n\n			</button>\n\n		</div>\n\n		<div class="col-lg-4 col-md-4 col-4	mg">\n\n			<div class="turno">\n\n				<span class="numero">\n\n					{{contadorFallos}}\n\n				</span>\n\n				<span class="letra">\n\n					Fallas\n\n				</span>\n\n			</div>\n\n		</div>\n\n	</div>\n\n\n\n\n\n	</div>\n\n	<div class="row">\n\n		<div class="puntaje">\n\n			<div class="puntuacion">\n\n				<span class="numero">\n\n					{{puntaje}}\n\n				</span>\n\n				<span class="letra">\n\n					Puntos Actuales\n\n				</span>\n\n			</div>\n\n		</div>\n\n	</div>\n\n	<div class="row">\n\n		<h3 class="ganar text-center" [hidden]="!gano">GANASTE!</h3>\n\n	    <h3 class="text-center" [hidden]="gano || perdio">Todavia no ganaste</h3>\n\n	    <h3 class="text-center" [hidden]="!perdio">PERDISTE!</h3>\n\n	</div>\n\n</div>'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\juego-postre\juego-postre.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_juego_ahorcado_juego_ahorcado__["a" /* JuegoAhorcadoProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]])
    ], JuegoPostreComponent);
    return JuegoPostreComponent;
}());

//# sourceMappingURL=juego-postre.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAhorcadoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JuegoAhorcadoProvider = /** @class */ (function () {
    function JuegoAhorcadoProvider(http) {
        this.http = http;
        this.array_palabras = [
            { "palabra": "animal" },
            { "palabra": "miniatura" },
            { "palabra": "arbol" },
            { "palabra": "residuo" },
            { "palabra": "especialidad" },
            { "palabra": "plato" },
            { "palabra": "fuerza" },
            { "palabra": "lapiz" },
            { "palabra": "botella" },
            { "palabra": "lampara" }
        ];
        this.palabra = "";
        this.contador = 0; //numero de intentos que quedan
        this.fallos = 0;
    }
    JuegoAhorcadoProvider.prototype.seleccionarPalabra = function () {
        var cantidad = this.array_palabras.length - 1;
        var indice = Math.floor((Math.random() * this.array_palabras.length));
        this.palabra = this.array_palabras[indice].palabra.toUpperCase();
        this.contador = 6;
        this.generarGuiones();
        //console.log(this.palabra);
    };
    JuegoAhorcadoProvider.prototype.generarGuiones = function () {
        var num = this.palabra.length;
        this.palabra_incompleta = "";
        for (var i = 0; i < num; i++) {
            this.palabra_incompleta += "_";
        }
        //console.log(this.palabra_incompleta);
    };
    JuegoAhorcadoProvider.prototype.comprobarLetra = function (letter) {
        if (this.palabra.indexOf(letter) != -1) {
            for (var i = 0; i < this.palabra.length; i++) {
                if (this.palabra[i] == letter)
                    //this.palabra_incompleta[i] = letter;
                    this.palabra_incompleta = this.replaceAt(this.palabra_incompleta, i, letter);
                //retorno = true;
            }
        }
        else {
            this.contador--;
            this.fallos++;
            //retorno = false;
        }
        this.checkWord();
        return this.contador;
    };
    JuegoAhorcadoProvider.prototype.replaceAt = function (string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + 1);
    };
    JuegoAhorcadoProvider.prototype.checkWord = function () {
        if (this.contador == 0) {
            //perdiste
            this.gano = false;
        }
        else if (this.palabra_incompleta.indexOf("_") == -1) {
            //ganaste
            this.gano = true;
        }
    };
    JuegoAhorcadoProvider.prototype.iniciarJuego = function () {
        this.seleccionarPalabra();
        //this.generarGuiones();
        this.gano = false;
        this.fallos = 0;
        this.contador = 6;
    };
    JuegoAhorcadoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], JuegoAhorcadoProvider);
    return JuegoAhorcadoProvider;
}());

//# sourceMappingURL=juego-ahorcado.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrEntradaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_principal_principal__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QrEntradaComponent = /** @class */ (function () {
    function QrEntradaComponent(modalCtrl, spinner, alert, navCtrl, navParams, auth) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.spinner = spinner;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.codigo = ['idCliente', 'turno']; //codigo qr de entradaLocal
        this.yaIngreso = false;
        //Leo los datos del usuario logueado
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        console.log(this.usuario);
        this.myColor = "primary";
        //Traigo la lista de espera desde la base
        this.listaEspera = new Array();
        this.mostrarSpiner = true;
        this.auth.getListaProdcutos("listaEspera").subscribe(function (lista) {
            _this.listaEspera = lista;
            var flag = false;
            _this.yaIngreso = false;
            for (var i = 0; i < _this.listaEspera.length; i++) {
                if (_this.usuario.tipo == 'cliente') {
                    if (_this.usuario.correo == _this.listaEspera[i].correo && _this.listaEspera[i].estado == 'en espera') {
                        _this.enListaDeEspera = true;
                        flag = true;
                        break;
                    }
                    if (_this.usuario.correo == _this.listaEspera[i].correo && _this.listaEspera[i].estado == 'aceptado') {
                        _this.yaIngreso = true;
                        flag = true;
                        break;
                    }
                }
                else if (_this.usuario.tipo == 'cliente anonimo') {
                    if (_this.usuario.nombre == _this.listaEspera[i].nombre && _this.listaEspera[i].estado == 'en espera') {
                        _this.enListaDeEspera = true;
                        flag = true;
                        break;
                    }
                    if (_this.usuario.nombre == _this.listaEspera[i].nombre && _this.listaEspera[i].estado == 'aceptado') {
                        _this.yaIngreso = true;
                        flag = true;
                        break;
                    }
                }
            }
            if (!flag) {
                _this.enListaDeEspera = false;
            }
            if (_this.yaIngreso) {
                _this.alert.mostrarErrorLiteral("Ya ingreso..Por favor, escanee la mesa a la cual le fue asignada");
                _this.mostrarSpiner = false;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_principal_principal__["a" /* PrincipalPage */]);
            }
            _this.listaClientes = new Array();
            for (var i = 0; i < _this.listaEspera.length; i++) {
                if (_this.listaEspera[i].estado == 'en espera') {
                    _this.listaClientes.push(_this.listaEspera[i]);
                }
            }
            _this.listaClientes.sort(function (a, b) {
                if (a.turno > b.turno) {
                    return 1;
                }
                if (a.turno < b.turno) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            _this.mostrarSpiner = false;
            console.log(_this.listaClientes);
        });
    }
    QrEntradaComponent.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_principal_principal__["a" /* PrincipalPage */]);
    };
    QrEntradaComponent.prototype.ingresar = function () {
        var _this = this;
        if (this.comensales == '') {
            this.alert.mostrarErrorLiteral("Ingrese la cantidad de comensales antes de continuar");
            return;
        }
        if (this.comensales < 1 || this.comensales > 8) {
            this.alert.mostrarErrorLiteral("La cantidad de comensales tiene que ser entre 1 y 8");
            return;
        }
        if (this.usuario.tipo == 'cliente') {
            var data = {
                'nombre': this.usuario.nombre, 'correo': this.usuario.correo, 'apellido': this.usuario.correo,
                'foto': this.usuario.foto, 'tipo': this.usuario.tipo, 'estado': 'en espera', 'turno': this.listaEspera.length, 'comensales': this.comensales
            };
            this.auth.guardarListaEspera(data).then(function (res) {
                _this.alert.mostrarMensaje("Gracias por ingresar..En breve lo atenderá un mozo, y le dara una mesa.");
            });
        }
        else {
            var data = {
                'nombre': this.usuario.nombre, 'foto': '../../assets/Imagenes/perfil.png',
                'tipo': this.usuario.tipo, 'estado': 'en espera', 'turno': this.listaEspera.length, 'comensales': this.comensales
            };
            this.auth.guardarListaEspera(data).then(function (res) {
                _this.alert.mostrarMensaje("Gracias por ingresar..En breve lo atenderá un mozo, y le dara una mesa.");
            });
        }
    };
    QrEntradaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qr-entrada',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\qr-entrada\qr-entrada.html"*/'<!-- Generated template for the QrEntradaComponent component -->\n\n<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Lista de Espera</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n  <div *ngIf="!mostrarSpiner && !enListaDeEspera" class="contenido">\n\n    <h1 class="tituloPag">¡Bienvenido!</h1>\n\n    <p class="info">Ingrese por favor la cantidad de comensales.</p>\n\n    <ion-item>\n\n      <ion-label floating>Comensales: </ion-label>\n\n      <ion-input type="number" required [(ngModel)]="comensales" name="em"></ion-input>\n\n    </ion-item>\n\n    <ion-card class="height-20 big-button-container" [color]="myColor">\n\n      <div class="flex-v center-horizontal center-vertical height-100" (click)="ingresar()">\n\n        <div class="text-title">Ingresar</div>\n\n      </div>\n\n    </ion-card>\n\n  </div>\n\n  <div *ngIf="!mostrarSpiner && enListaDeEspera" class="contenido">\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of listaClientes">\n\n        <ion-thumbnail item-start >\n\n          <img src={{item.foto}} />\n\n        </ion-thumbnail>\n\n        <h1 style="color:black;">{{item.nombre}}</h1>\n\n        <p style="color:black;">Tipo: • {{item.tipo}}</p>\n\n        <p style="color:black;">Cantidad de personas: • {{item.comensales}} </p>\n\n        <p style="color:black;">Turno: • {{item.turno}} </p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\qr-entrada\qr-entrada.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__["a" /* SpinnerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */]])
    ], QrEntradaComponent);
    return QrEntradaComponent;
}());

//# sourceMappingURL=qr-entrada.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoClientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ListadoClientesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ListadoClientesComponent = /** @class */ (function () {
    function ListadoClientesComponent(navCtrl, navParams, auth, error) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.listaClientes = new Array();
        this.reservasConfirmadas = new Array();
        this.mesas = new Array();
        this.mostrarSpiner = true;
        this.auth.getListaEspera().subscribe(function (lista) {
            _this.listaClientes = [];
            for (var i = 0; i < lista.length; i++) {
                if (lista[i].estado == 'en espera') {
                    _this.listaClientes.push(lista[i]);
                }
            }
            _this.listaClientes.sort(function (a, b) {
                if (a.turno > b.turno) {
                    return 1;
                }
                if (a.turno < b.turno) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            console.log(_this.listaClientes);
            _this.auth.getReservas().subscribe(function (lista) {
                for (var j = 0; j < lista.length; j++) {
                    if (lista[j].estado == 'confirmada') {
                        _this.reservasConfirmadas.push(lista[j]);
                    }
                }
            });
            _this.ocultarInterfazMesas = true;
            _this.mostrarSpiner = false;
        });
    }
    ListadoClientesComponent.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_principal_principal__["a" /* PrincipalPage */]);
    };
    ListadoClientesComponent.prototype.Cancelar = function (item) {
        var _this = this;
        console.log(item);
        var alertConfirm = this.error.mostrarMensajeConfimación("¿Estas seguro que no le quiere permitir acceso a " + item.nombre + "?", "Cancelar cliente");
        alertConfirm.present();
        alertConfirm.onDidDismiss(function (confirm) {
            if (confirm) {
                item.estado = 'cancelado';
                _this.auth.updateListaEspera(item).then(function (res) {
                    _this.error.mostrarMensaje("cliente cancelado");
                });
            }
        });
    };
    ListadoClientesComponent.prototype.DesplegarMesas = function (item) {
        var _this = this;
        console.log(item);
        this.mesas = [];
        this.clienteSeleccionado = item;
        var tieneReserva = false;
        var momentoActual = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date());
        this.auth.getMesas().subscribe(function (lista) {
            lista;
            var estaDesocupada;
            //let momentoReservaSeleccionada = moment(reservaSeleccionada.horario, "DD/MM/YYYY HH:mm");
            for (var i = 0; i < lista.length; i++) {
                estaDesocupada = true;
                for (var j = 0; j < _this.reservasConfirmadas.length; j++) {
                    if (lista[i].numero == _this.reservasConfirmadas[j].mesa) {
                        var momentoReservaMesa = __WEBPACK_IMPORTED_MODULE_5_moment__(_this.reservasConfirmadas[j].horario, "DD/MM/YYYY HH:mm");
                        console.log(Math.abs(momentoReservaMesa.diff(momentoActual, "m")));
                        if (Math.abs(momentoReservaMesa.diff(momentoActual, "m")) < 40 && Math.abs(momentoReservaMesa.diff(momentoActual, "m")) > 0) {
                            if (_this.clienteSeleccionado.tipo == 'cliente' && _this.clienteSeleccionado.correo == _this.reservasConfirmadas[j].correo) {
                                tieneReserva = true;
                                break;
                            }
                            estaDesocupada = false;
                            break;
                        }
                    }
                }
                if (tieneReserva) {
                    _this.mesas = [];
                    _this.mesas.push({ numero: lista[i].numero, seleccionado: "" });
                    break;
                }
                if (lista[i].cantidadComensales >= item.comensales && estaDesocupada && lista[i].estado == 'libre') {
                    _this.mesas.push({ numero: lista[i].numero, seleccionado: "" });
                }
            }
            if (_this.mesas.length == 0) {
                _this.error.mostrarErrorLiteral("No hay mesas disponibles");
            }
            _this.mesas = _this.mesas.sort(function (a, b) {
                return a.numero - b.numero;
            });
            _this.ocultarInterfazMesas = false;
        });
    };
    ListadoClientesComponent.prototype.Seleccionar = function (numero) {
        for (var _i = 0, _a = this.mesas; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.numero == numero)
                item.seleccionado = "selected";
            else
                item.seleccionado = "";
        }
    };
    ListadoClientesComponent.prototype.OcultarInterfaz = function () {
        this.ocultarInterfazMesas = true;
    };
    ListadoClientesComponent.prototype.Confirmar = function () {
        var _this = this;
        var numeroDeMesa;
        var seleccionoMesa = false;
        for (var _i = 0, _a = this.mesas; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.seleccionado == "selected") {
                numeroDeMesa = item.numero;
                seleccionoMesa = true;
                break;
            }
        }
        if (seleccionoMesa) {
            this.clienteSeleccionado.estado = 'aceptado';
            this.clienteSeleccionado.mesa = numeroDeMesa;
            this.auth.updateListaEspera(this.clienteSeleccionado).then(function (res) {
                _this.OcultarInterfaz();
                _this.error.mostrarMensaje("Cliente aceptado");
            }).catch(function (error) {
                _this.OcultarInterfaz();
                _this.error.mostrarError(error, "Hubo un error al aceptar el cliente");
            });
        }
    };
    ListadoClientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'listado-clientes',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\listado-clientes\listado-clientes.html"*/'<!-- Generated template for the ListadoClientesComponent component -->\n<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>Lista de Espera</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n  <div *ngIf="!mostrarSpiner && listaClientes.length > 0" >\n    <ion-list>\n      <ion-item *ngFor="let item of listaClientes">\n        <ion-thumbnail item-start >\n          <img src={{item.foto}} />\n        </ion-thumbnail>\n        <h1 style="color:black;">{{item.nombre}}</h1>\n        <p style="color:black;">Tipo: • {{item.tipo}}</p>\n        <p style="color:black;">Cantidad de personas: • {{item.comensales}} </p>\n        <p style="color:black;">Turno: • {{item.turno}} </p>\n        <div item-end style="display: flex; align-items: center;align-content: center;flex-direction: column;">\n\n          <button ion-button clear (click)="DesplegarMesas(item)" style="margin-bottom: 20px;">\n            <ion-icon style="color: blue;" name="checkmark-circle-outline"></ion-icon>\n          </button>\n      \n          <button ion-button clear (click)="Cancelar(item)">\n            <ion-icon style="color: #FF0000;" name="close"></ion-icon>\n          </button>\n      \n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf="!mostrarSpiner && listaClientes.length==0">\n    <h2>No hay clientes en espera</h2>\n  </div>\n  <div [ngClass]="{\'interfaz-mesas\':true,\'ocultar\':ocultarInterfazMesas}">\n\n      <h1>Selecciona una mesa para que lo ocupe</h1>\n      <div class="mesas">\n        <button ion-button color="red" class="mesa {{item.seleccionado}}" (click)="Seleccionar(item.numero)" *ngFor="let item of mesas">{{item.numero}}</button>\n      </div>\n  \n      <div class="botones-interfaz-mesa">\n        <button ion-button color="red" (click)="OcultarInterfaz()">Cancelar</button>\n        <button ion-button color="red" (click)="Confirmar()">Confirmar</button>\n      </div>\n  \n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\listado-clientes\listado-clientes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]])
    ], ListadoClientesComponent);
    return ListadoClientesComponent;
}());

//# sourceMappingURL=listado-clientes.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SpinnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpinnerPage = /** @class */ (function () {
    function SpinnerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpinnerPage.prototype.ionViewDidLoad = function () {
    };
    SpinnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-spinner',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\spinner\spinner.html"*/'\n\n<div class="spinner">\n\n  <img class="rotar" src="assets/Imagenes/logo.png">\n\n</div>'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\spinner\spinner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SpinnerPage);
    return SpinnerPage;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(575);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_spinner_spinner__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_listado_encuestas_listado_encuestas__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_altaempleado_altaempleado__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_alta_de_mesa_alta_de_mesa__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_listado_supervisor_listado_supervisor__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_encuesta_supervisor_encuesta_supervisor__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_encuesta_cliente_encuesta_cliente__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ver_encuesta_cliente_ver_encuesta_cliente__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reserva_reserva__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_listado_reserva_listado_reserva__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_estadisticas_supervisor_estadisticas_supervisor__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pedir_platos_pedir_platos__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_listado_mesas_listado_mesas__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_alta_de_producto_alta_de_producto__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_juegos_juegos__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_juego_descuento_juego_descuento__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_confirmar_pedido_confirmar_pedido__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_pagar_pagar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_mapa_ruta_mapa_ruta__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_confirmar_delivery_confirmar_delivery__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_chat_chat__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_fire__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_fire_firestore__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_fire_auth__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__globalConfig__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_json_json__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_alta_supervisor_alta_supervisor__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_splash_splash__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_alta_cliente_alta_cliente__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_qr_mesa_qr_mesa__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_http__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_encuesta_empleado_encuesta_empleado__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_lista_cliente_estado_lista_cliente_estado__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_home_cliente_home_cliente__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_fcm_fcm__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_alta_producto_alta_producto__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_pedidos_pendientes_pedidos_pendientes__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_qr_entrada_qr_entrada__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_listado_clientes_listado_clientes__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_email_composer__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_juego_ahorcado_juego_ahorcado__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_juego_postre_juego_postre__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































//Firebase



//import { Firebase } from '@ionic-native/firebase';








//import { QrProvider } from '../providers/qr/qr';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_altaempleado_altaempleado__["a" /* AltaempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alta_de_mesa_alta_de_mesa__["a" /* AltaDeMesaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_spinner_spinner__["a" /* SpinnerPage */],
                __WEBPACK_IMPORTED_MODULE_40__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_splash_splash__["a" /* SplashComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_qr_mesa_qr_mesa__["a" /* QrMesaComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_encuesta_empleado_encuesta_empleado__["a" /* EncuestaEmpleadoComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_lista_cliente_estado_lista_cliente_estado__["a" /* ListaClienteEstadoComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_home_cliente_home_cliente__["a" /* HomeClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listado_supervisor_listado_supervisor__["a" /* ListadoSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_42__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_encuesta_supervisor_encuesta_supervisor__["a" /* EncuestaSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_encuesta_cliente_encuesta_cliente__["a" /* EncuestaClientePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reserva_reserva__["a" /* ReservaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_listado_reserva_listado_reserva__["a" /* ListadoReservaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_listado_encuestas_listado_encuestas__["a" /* ListadoEncuestasPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_estadisticas_supervisor_estadisticas_supervisor__["a" /* EstadisticasSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pedir_platos_pedir_platos__["a" /* PedirPlatosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_listado_mesas_listado_mesas__["a" /* ListadoMesasPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_alta_de_producto_alta_de_producto__["a" /* AltaDeProductoPage */],
                __WEBPACK_IMPORTED_MODULE_40__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_splash_splash__["a" /* SplashComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_50__components_alta_producto_alta_producto__["a" /* AltaProductoComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_pedidos_pendientes_pedidos_pendientes__["a" /* PedidosPendientesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_juegos_juegos__["a" /* JuegosPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_juego_descuento_juego_descuento__["a" /* JuegoDescuentoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_confirmar_pedido_confirmar_pedido__["a" /* ConfirmarPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_pagar_pagar__["a" /* PagarPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ver_encuesta_cliente_ver_encuesta_cliente__["a" /* VerEncuestaClientePage */],
                __WEBPACK_IMPORTED_MODULE_52__components_qr_entrada_qr_entrada__["a" /* QrEntradaComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_listado_clientes_listado_clientes__["a" /* ListadoClientesComponent */],
                __WEBPACK_IMPORTED_MODULE_56__components_juego_postre_juego_postre__["a" /* JuegoPostreComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_mapa_ruta_mapa_ruta__["a" /* MapaRutaPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_confirmar_delivery_confirmar_delivery__["a" /* ConfirmarDeliveryPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_chat_chat__["a" /* ChatPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alta-de-mesa/alta-de-mesa.module#AltaDeMesaPageModule', name: 'AltaDeMesaPage', segment: 'alta-de-mesa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alta-de-producto/alta-de-producto.module#AltaDeProductoPageModule', name: 'AltaDeProductoPage', segment: 'alta-de-producto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/altaempleado/altaempleado.module#AltaempleadoPageModule', name: 'AltaempleadoPage', segment: 'altaempleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmar-delivery/confirmar-delivery.module#ConfirmarDeliveryPageModule', name: 'ConfirmarDeliveryPage', segment: 'confirmar-delivery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmar-pedido/confirmar-pedido.module#ConfirmarPedidoPageModule', name: 'ConfirmarPedidoPage', segment: 'confirmar-pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/encuesta-cliente/encuesta-cliente.module#EncuestaClientePageModule', name: 'EncuestaClientePage', segment: 'encuesta-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/encuesta-supervisor/encuesta-supervisor.module#EncuestaSupervisorPageModule', name: 'EncuestaSupervisorPage', segment: 'encuesta-supervisor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estadisticas-supervisor/estadisticas-supervisor.module#EstadisticasSupervisorPageModule', name: 'EstadisticasSupervisorPage', segment: 'estadisticas-supervisor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/juegos/juegos.module#JuegosPageModule', name: 'JuegosPage', segment: 'juegos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/juego-descuento/juego-descuento.module#JuegoDescuentoPageModule', name: 'JuegoDescuentoPage', segment: 'juego-descuento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado-encuestas/listado-encuestas.module#ListadoEncuestasPageModule', name: 'ListadoEncuestasPage', segment: 'listado-encuestas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado-mesas/listado-mesas.module#ListadoMesasPageModule', name: 'ListadoMesasPage', segment: 'listado-mesas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado-reserva/listado-reserva.module#ListadoReservaPageModule', name: 'ListadoReservaPage', segment: 'listado-reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado-supervisor/listado-supervisor.module#ListadoSupervisorPageModule', name: 'ListadoSupervisorPage', segment: 'listado-supervisor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa-ruta/mapa-ruta.module#MapaRutaPageModule', name: 'MapaRutaPage', segment: 'mapa-ruta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagar/pagar.module#PagarPageModule', name: 'PagarPage', segment: 'pagar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedir-platos/pedir-platos.module#PedirPlatosPageModule', name: 'PedirPlatosPage', segment: 'pedir-platos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva/reserva.module#ReservaPageModule', name: 'ReservaPage', segment: 'reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/spinner/spinner.module#SpinnerPageModule', name: 'SpinnerPage', segment: 'spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-encuesta-cliente/ver-encuesta-cliente.module#VerEncuestaClientePageModule', name: 'VerEncuestaClientePage', segment: 'ver-encuesta-cliente', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_32__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_35__globalConfig__["a" /* configs */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_34__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_fire_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_45__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_44__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_listado_encuestas_listado_encuestas__["a" /* ListadoEncuestasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_altaempleado_altaempleado__["a" /* AltaempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ver_encuesta_cliente_ver_encuesta_cliente__["a" /* VerEncuestaClientePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alta_de_mesa_alta_de_mesa__["a" /* AltaDeMesaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_spinner_spinner__["a" /* SpinnerPage */],
                __WEBPACK_IMPORTED_MODULE_40__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_qr_mesa_qr_mesa__["a" /* QrMesaComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_encuesta_empleado_encuesta_empleado__["a" /* EncuestaEmpleadoComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_lista_cliente_estado_lista_cliente_estado__["a" /* ListaClienteEstadoComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_home_cliente_home_cliente__["a" /* HomeClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listado_supervisor_listado_supervisor__["a" /* ListadoSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_40__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_encuesta_supervisor_encuesta_supervisor__["a" /* EncuestaSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_encuesta_cliente_encuesta_cliente__["a" /* EncuestaClientePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reserva_reserva__["a" /* ReservaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_listado_reserva_listado_reserva__["a" /* ListadoReservaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_estadisticas_supervisor_estadisticas_supervisor__["a" /* EstadisticasSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pedir_platos_pedir_platos__["a" /* PedirPlatosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_listado_mesas_listado_mesas__["a" /* ListadoMesasPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_alta_de_producto_alta_de_producto__["a" /* AltaDeProductoPage */],
                __WEBPACK_IMPORTED_MODULE_50__components_alta_producto_alta_producto__["a" /* AltaProductoComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_pedidos_pendientes_pedidos_pendientes__["a" /* PedidosPendientesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_juegos_juegos__["a" /* JuegosPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_juego_descuento_juego_descuento__["a" /* JuegoDescuentoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_confirmar_pedido_confirmar_pedido__["a" /* ConfirmarPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_pagar_pagar__["a" /* PagarPage */],
                __WEBPACK_IMPORTED_MODULE_52__components_qr_entrada_qr_entrada__["a" /* QrEntradaComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_listado_clientes_listado_clientes__["a" /* ListadoClientesComponent */],
                __WEBPACK_IMPORTED_MODULE_56__components_juego_postre_juego_postre__["a" /* JuegoPostreComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_mapa_ruta_mapa_ruta__["a" /* MapaRutaPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_confirmar_delivery_confirmar_delivery__["a" /* ConfirmarDeliveryPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_chat_chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_33__angular_fire_firestore__["c" /* FirestoreSettingsToken */], useValue: {} },
                //Firebase,
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_36__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_json_json__["a" /* JsonProvider */],
                //QrProvider,
                __WEBPACK_IMPORTED_MODULE_49__providers_fcm_fcm__["a" /* FcmProvider */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_55__providers_juego_ahorcado_juego_ahorcado__["a" /* JuegoAhorcadoProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 278,
	"./af.js": 278,
	"./ar": 279,
	"./ar-dz": 280,
	"./ar-dz.js": 280,
	"./ar-kw": 281,
	"./ar-kw.js": 281,
	"./ar-ly": 282,
	"./ar-ly.js": 282,
	"./ar-ma": 283,
	"./ar-ma.js": 283,
	"./ar-sa": 284,
	"./ar-sa.js": 284,
	"./ar-tn": 285,
	"./ar-tn.js": 285,
	"./ar.js": 279,
	"./az": 286,
	"./az.js": 286,
	"./be": 287,
	"./be.js": 287,
	"./bg": 288,
	"./bg.js": 288,
	"./bm": 289,
	"./bm.js": 289,
	"./bn": 290,
	"./bn.js": 290,
	"./bo": 291,
	"./bo.js": 291,
	"./br": 292,
	"./br.js": 292,
	"./bs": 293,
	"./bs.js": 293,
	"./ca": 294,
	"./ca.js": 294,
	"./cs": 295,
	"./cs.js": 295,
	"./cv": 296,
	"./cv.js": 296,
	"./cy": 297,
	"./cy.js": 297,
	"./da": 298,
	"./da.js": 298,
	"./de": 299,
	"./de-at": 300,
	"./de-at.js": 300,
	"./de-ch": 301,
	"./de-ch.js": 301,
	"./de.js": 299,
	"./dv": 302,
	"./dv.js": 302,
	"./el": 303,
	"./el.js": 303,
	"./en-SG": 304,
	"./en-SG.js": 304,
	"./en-au": 305,
	"./en-au.js": 305,
	"./en-ca": 306,
	"./en-ca.js": 306,
	"./en-gb": 307,
	"./en-gb.js": 307,
	"./en-ie": 308,
	"./en-ie.js": 308,
	"./en-il": 309,
	"./en-il.js": 309,
	"./en-nz": 310,
	"./en-nz.js": 310,
	"./eo": 311,
	"./eo.js": 311,
	"./es": 312,
	"./es-do": 313,
	"./es-do.js": 313,
	"./es-us": 314,
	"./es-us.js": 314,
	"./es.js": 312,
	"./et": 315,
	"./et.js": 315,
	"./eu": 316,
	"./eu.js": 316,
	"./fa": 317,
	"./fa.js": 317,
	"./fi": 318,
	"./fi.js": 318,
	"./fo": 319,
	"./fo.js": 319,
	"./fr": 320,
	"./fr-ca": 321,
	"./fr-ca.js": 321,
	"./fr-ch": 322,
	"./fr-ch.js": 322,
	"./fr.js": 320,
	"./fy": 323,
	"./fy.js": 323,
	"./ga": 324,
	"./ga.js": 324,
	"./gd": 325,
	"./gd.js": 325,
	"./gl": 326,
	"./gl.js": 326,
	"./gom-latn": 327,
	"./gom-latn.js": 327,
	"./gu": 328,
	"./gu.js": 328,
	"./he": 329,
	"./he.js": 329,
	"./hi": 330,
	"./hi.js": 330,
	"./hr": 331,
	"./hr.js": 331,
	"./hu": 332,
	"./hu.js": 332,
	"./hy-am": 333,
	"./hy-am.js": 333,
	"./id": 334,
	"./id.js": 334,
	"./is": 335,
	"./is.js": 335,
	"./it": 336,
	"./it-ch": 337,
	"./it-ch.js": 337,
	"./it.js": 336,
	"./ja": 338,
	"./ja.js": 338,
	"./jv": 339,
	"./jv.js": 339,
	"./ka": 340,
	"./ka.js": 340,
	"./kk": 341,
	"./kk.js": 341,
	"./km": 342,
	"./km.js": 342,
	"./kn": 343,
	"./kn.js": 343,
	"./ko": 344,
	"./ko.js": 344,
	"./ku": 345,
	"./ku.js": 345,
	"./ky": 346,
	"./ky.js": 346,
	"./lb": 347,
	"./lb.js": 347,
	"./lo": 348,
	"./lo.js": 348,
	"./lt": 349,
	"./lt.js": 349,
	"./lv": 350,
	"./lv.js": 350,
	"./me": 351,
	"./me.js": 351,
	"./mi": 352,
	"./mi.js": 352,
	"./mk": 353,
	"./mk.js": 353,
	"./ml": 354,
	"./ml.js": 354,
	"./mn": 355,
	"./mn.js": 355,
	"./mr": 356,
	"./mr.js": 356,
	"./ms": 357,
	"./ms-my": 358,
	"./ms-my.js": 358,
	"./ms.js": 357,
	"./mt": 359,
	"./mt.js": 359,
	"./my": 360,
	"./my.js": 360,
	"./nb": 361,
	"./nb.js": 361,
	"./ne": 362,
	"./ne.js": 362,
	"./nl": 363,
	"./nl-be": 364,
	"./nl-be.js": 364,
	"./nl.js": 363,
	"./nn": 365,
	"./nn.js": 365,
	"./pa-in": 366,
	"./pa-in.js": 366,
	"./pl": 367,
	"./pl.js": 367,
	"./pt": 368,
	"./pt-br": 369,
	"./pt-br.js": 369,
	"./pt.js": 368,
	"./ro": 370,
	"./ro.js": 370,
	"./ru": 371,
	"./ru.js": 371,
	"./sd": 372,
	"./sd.js": 372,
	"./se": 373,
	"./se.js": 373,
	"./si": 374,
	"./si.js": 374,
	"./sk": 375,
	"./sk.js": 375,
	"./sl": 376,
	"./sl.js": 376,
	"./sq": 377,
	"./sq.js": 377,
	"./sr": 378,
	"./sr-cyrl": 379,
	"./sr-cyrl.js": 379,
	"./sr.js": 378,
	"./ss": 380,
	"./ss.js": 380,
	"./sv": 381,
	"./sv.js": 381,
	"./sw": 382,
	"./sw.js": 382,
	"./ta": 383,
	"./ta.js": 383,
	"./te": 384,
	"./te.js": 384,
	"./tet": 385,
	"./tet.js": 385,
	"./tg": 386,
	"./tg.js": 386,
	"./th": 387,
	"./th.js": 387,
	"./tl-ph": 388,
	"./tl-ph.js": 388,
	"./tlh": 389,
	"./tlh.js": 389,
	"./tr": 390,
	"./tr.js": 390,
	"./tzl": 391,
	"./tzl.js": 391,
	"./tzm": 392,
	"./tzm-latn": 393,
	"./tzm-latn.js": 393,
	"./tzm.js": 392,
	"./ug-cn": 394,
	"./ug-cn.js": 394,
	"./uk": 395,
	"./uk.js": 395,
	"./ur": 396,
	"./ur.js": 396,
	"./uz": 397,
	"./uz-latn": 398,
	"./uz-latn.js": 398,
	"./uz.js": 397,
	"./vi": 399,
	"./vi.js": 399,
	"./x-pseudo": 400,
	"./x-pseudo.js": 400,
	"./yo": 401,
	"./yo.js": 401,
	"./zh-cn": 402,
	"./zh-cn.js": 402,
	"./zh-hk": 403,
	"./zh-hk.js": 403,
	"./zh-tw": 404,
	"./zh-tw.js": 404
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 631;

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { SplashComponent } from '../components/splash/splash';


//import { FcmProvider } from '../providers/fcm/fcm';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, toastCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.showSplash = true;
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        /*this.platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          this.statusBar.styleDefault();
          this.splashScreen.hide();
        });
        */
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; }); // <-- hide animation after 3s
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n\n	<splash></splash>\n\n</div>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" ></ion-nav>'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configs; });
var configs = {
    firebaseConfig: {
        apiKey: "AIzaSyAnwcA8xz5hqiXHVc61lE2uLOhbI6wYaqU",
        authDomain: "la-comanda.firebaseapp.com",
        databaseURL: "https://la-comanda.firebaseio.com",
        projectId: "la-comanda",
        storageBucket: "la-comanda.appspot.com",
        messagingSenderId: "7185849995",
        appId: "1:7185849995:web:7b19a8bbfd93ca4a"
    }
};
//# sourceMappingURL=globalConfig.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the JsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JsonProvider = /** @class */ (function () {
    function JsonProvider(http) {
        this.http = http;
        console.log('Hello JsonProvider Provider');
    }
    JsonProvider.prototype.toJson = function (obj) {
        if (obj != null) {
            var json = JSON.parse(obj);
        }
        return json;
    };
    /*
    file: ruta de archivo
    */
    JsonProvider.prototype.fromJson = function (file) {
        var respuesta;
        this.loadJSON(file, function (response) {
            //let actual_JSON = JSON.parse(response);
            respuesta = response;
        });
        return respuesta;
    };
    JsonProvider.prototype.loadJSON = function (file, callback) {
        var obj = new XMLHttpRequest();
        obj.overrideMimeType("application/json");
        obj.open('GET', file, true);
        obj.onreadystatechange = function () {
            if (obj.readyState == 4 && obj.status == 200) {
                callback(obj.responseText);
            }
        };
        obj.send(null);
    };
    JsonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], JsonProvider);
    return JsonProvider;
}());

//# sourceMappingURL=json.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SplashComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SplashComponent = /** @class */ (function () {
    function SplashComponent() {
        this.reproducir('servicio-inicio');
    }
    SplashComponent.prototype.reproducir = function (nom_audio) {
        var audio = new Audio('../../assets/sounds/' + nom_audio + '.mp3');
        audio.play();
    };
    SplashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'splash',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\splash\splash.html"*/'<div class="grid-container">\n\n	<div class="spinner">\n\n		<img src="../../assets/Imagenes/icon.png" alt="">\n\n	</div>\n\n	<div></div>\n\n	<div class="">\n\n		<div class="row mt">\n\n			<h2 text-center class="nom">Ivagaza Federico</h2><br>\n\n		</div>\n\n		<div class="row">\n\n			<h2 text-center class="nom">Moreno Samantha</h2><br>\n\n		</div>\n\n		<div class="row">\n\n			<h2 text-center class="nom">Torrealba Paola</h2><br>\n\n		</div>\n\n	</div>\n\n</div>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\splash\splash.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SplashComponent);
    return SplashComponent;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Firebase } from '@ionic-native/firebase';

var FcmProvider = /** @class */ (function () {
    function FcmProvider(//public firebaseNative: Firebase,
    afs, platform) {
        this.afs = afs;
        this.platform = platform;
        console.log('Hello FcmProvider Provider');
    }
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaProductoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AltaProductoComponent = /** @class */ (function () {
    function AltaProductoComponent(camera, auth, alert) {
        this.camera = camera;
        this.auth = auth;
        this.alert = alert;
        this.firebase = __WEBPACK_IMPORTED_MODULE_2_firebase__;
        console.log('Hello AltaProductoComponent Component');
    }
    AltaProductoComponent.prototype.alta = function () {
        var _this = this;
        var data;
        if (this.nombre != undefined && this.foto != undefined) {
            data = {
                'nombre': this.nombre,
                'tipo': this.tipo,
                'descripcion': this.descripcion,
                'foto': this.foto,
                'precio': this.precio,
                'lectorQR': this.lectorQR,
                'tiempoPromedioElaboracion': this.tiempoPromedioElaboracion,
            };
            this.auth.guardarProducto(data).then(function (response) {
                _this.alert.mostrarMensaje("Producto Guardado");
            });
        }
        else {
            if (this.nombre == undefined) {
                this.alert.mostrarErrorLiteral("Hay campos sin rellenar");
            }
            if (this.foto == undefined) {
                this.alert.mostrarErrorLiteral("Falta cargar una foto");
            }
        }
    };
    AltaProductoComponent.prototype.abrirCamara = function () {
        return __awaiter(this, void 0, void 0, function () {
            var imageName, options, result, image, pictures_1, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imageName = this.nombre;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 50,
                            targetHeight: 600,
                            targetWidth: 600,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        pictures_1 = this.firebase.storage().ref("productos/" + imageName);
                        pictures_1.putString(image, "data_url").then(function () {
                            pictures_1.getDownloadURL().then(function (url) {
                                _this.foto = url;
                            });
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        alert(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alta-producto',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-producto\alta-producto.html"*/'<!-- Generated template for the AltaProductoComponent component -->\n\n<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Registro Producto</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>	\n\n  <ion-item>\n\n    <ion-label floating>Nombre </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="nombre" name="nombre"></ion-input>\n\n  </ion-item>\n\n  <ion-item >\n\n    <ion-label floating>Descripcion </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="descripcion" name="descripcion"></ion-input>\n\n  </ion-item>\n\n  <ion-item >\n\n    <ion-label floating>Tipo </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="tipo" name="tipo"></ion-input>\n\n  </ion-item>\n\n  <ion-item >\n\n    <ion-label floating>Precio </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="precio" name="precio"></ion-input>\n\n  </ion-item>\n\n  <ion-item >\n\n    <ion-label floating>Tiempo Promedio Elaboracion </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="tiempoPromedioelaboracion" name="tiempoPromedioelaboracion"></ion-input>\n\n  </ion-item>\n\n  <ion-item >\n\n    <ion-label floating>Lector QR</ion-label>\n\n    <ion-input type="text" required [(ngModel)]="lectorQR" name="lectocQR"></ion-input>\n\n  </ion-item>\n\n\n\n  <br>\n\n  <button ion-button block color="primary" (click)="abrirCamara()">Sacar Foto</button>  \n\n  <button ion-button block color="secondary" (click)="alta()">Guardar Producto</button>\n\n  <button ion-button block color="danger">Cancelar</button>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-producto\alta-producto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]])
    ], AltaProductoComponent);
    return AltaProductoComponent;
}());

//# sourceMappingURL=alta-producto.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirPlatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PedirPlatosPage = /** @class */ (function () {
    function PedirPlatosPage(navCtrl, navParams, auth, error, barcodeScanner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.barcodeScanner = barcodeScanner;
        this.mensajePedido = "";
        this.montoActual = 0;
        this.mostrarDireccion = false;
        this.puedePedir = false;
        this.monto = false;
        this.ocultarBebidas = false;
        this.ocultarPLatos = false;
        this.mostrarProductoQR = false;
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        this.productos = new Array();
        this.platos = new Array();
        this.bebidas = new Array();
        this.pedidoActual = new Array();
        this.mostrarSpiner = true;
        this.auth.getProductos().subscribe(function (lista) {
            _this.productos = lista;
            for (var i = 0; i < _this.productos.length; i++) {
                if (_this.productos[i].tipo == 'bebida') {
                    _this.bebidas.push({ "nombre": _this.productos[i].nombre, "descripcion": _this.productos[i].descripcion, "foto": _this.productos[i].foto, "cantidad": 0, "tipo": "bebida", "tiempoPromedioElaboracion": _this.productos[i].tiempoPromedioElaboracion, "estado": "pendiente", "precio": _this.productos[i].precio });
                }
                else {
                    _this.platos.push({ "nombre": _this.productos[i].nombre, "descripcion": _this.productos[i].descripcion, "foto": _this.productos[i].foto, "cantidad": 0, "tipo": "plato", "tiempoPromedioElaboracion": _this.productos[i].tiempoPromedioElaboracion, "estado": "pendiente", "precio": _this.productos[i].precio });
                }
            }
            _this.mostrarSpiner = false;
            console.log(_this.bebidas);
            console.log(_this.platos);
            _this.puedeHacerPedido();
        });
    }
    PedirPlatosPage.prototype.ionViewDidLoad = function () {
    };
    PedirPlatosPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    PedirPlatosPage.prototype.puedeHacerPedido = function () {
        var _this = this;
        this.auth.getPedidos().subscribe(function (lista) {
            _this.pedidos = lista;
            if (_this.usuario.tipo == 'mozo') {
                var pedido = _this.navParams.get("pedido");
                for (var i = 0; i < _this.pedidos.length; i++) {
                    if (_this.pedidos[i].id == pedido.idPedido) {
                        _this.pedidoPendiente = _this.pedidos[i];
                        _this.puedePedir = true;
                        break;
                    }
                }
                console.log(_this.pedidoPendiente);
            }
            else if (_this.usuario.tipo == 'cliente') {
                var estaCorreo = false;
                var delivery = false;
                for (var i = 0; i < _this.pedidos.length; i++) {
                    if (_this.pedidos[i].correo == _this.usuario.correo && _this.pedidos[i].estado != 'pagado' && _this.pedidos[i].delivery == false) /* YY pedidos.estado != ultimo estado del pedido que es por pagar creo  */ {
                        estaCorreo = true;
                        //this.pedidoPendiente=this.pedidos[i];
                        //this.puedePedir=true;
                        break;
                    }
                    if (_this.pedidos[i].correo == _this.usuario.correo && _this.pedidos[i].estado != 'pagado' && _this.pedidos[i].delivery == true && _this.pedidos[i].estado != 'cancelado') {
                        delivery = true;
                        break;
                    }
                }
                if (estaCorreo) {
                    _this.mensajePedido = "Ya hizo un pedido.No puede pedir otro";
                    for (var i = 0; i < _this.pedidos.length; i++) {
                        if (_this.pedidos[i].estado == 'por pedir' && _this.pedidos[i].correo == _this.usuario.correo) {
                            _this.pedidoPendiente = _this.pedidos[i];
                            _this.puedePedir = true;
                            break;
                        }
                    }
                }
                else if (delivery) {
                    _this.mensajePedido = "Ya hizo un pedido.No puede pedir otro";
                }
                else if (!delivery) {
                    _this.puedePedir = true;
                }
                else {
                    _this.mensajePedido = "No puede hacer un pedido sin antes estar en una mesa";
                }
                console.log(_this.pedidos);
                console.log(_this.pedidoPendiente);
            }
            else {
                var estaCorreo = false;
                for (var i = 0; i < _this.pedidos.length; i++) {
                    if (_this.pedidos[i].nombreCliente == _this.usuario.nombre && _this.pedidos[i].estado != 'pagado') /* YY pedidos.estado != ultimo estado del pedido que es por pagar creo  */ {
                        estaCorreo = true;
                        //this.pedidoPendiente=this.pedidos[i];
                        //this.puedePedir=true;
                        break;
                    }
                }
                if (estaCorreo) {
                    _this.mensajePedido = "Ya hizo un pedido.No puede pedir otro";
                    for (var i = 0; i < _this.pedidos.length; i++) {
                        if (_this.pedidos[i].estado == 'por pedir' && _this.pedidos[i].nombreCliente == _this.usuario.nombre) {
                            _this.pedidoPendiente = _this.pedidos[i];
                            _this.puedePedir = true;
                            break;
                        }
                    }
                }
                else {
                    _this.mensajePedido = "No puede hacer un pedido sin antes estar en una mesa";
                }
                console.log(_this.pedidos);
                console.log(_this.pedidoPendiente);
            }
        });
    };
    PedirPlatosPage.prototype.Platos = function () {
        this.ocultarPLatos = true;
        this.titulo = "Nuestros platos";
    };
    PedirPlatosPage.prototype.Bebidas = function () {
        this.ocultarBebidas = true;
        this.titulo = "Nuestras bebidas";
    };
    PedirPlatosPage.prototype.AumentarCantidad = function (item) {
        if (item.cantidad < 20) {
            item.cantidad++;
        }
        console.log(item);
    };
    PedirPlatosPage.prototype.DisminuirCantidad = function (item) {
        if (item.cantidad > 0) {
            item.cantidad--;
        }
        console.log(item);
    };
    PedirPlatosPage.prototype.AceptarPedido = function (texto) {
        if (texto == 'plato') {
            for (var i = 0; i < this.platos.length; i++) {
                var pidioPlato = true;
                for (var j = 0; j < this.pedidoActual.length; j++) {
                    if (this.platos[i].nombre == this.pedidoActual[j].nombre) {
                        this.pedidoActual[j] = this.platos[i];
                        pidioPlato = false;
                        break;
                    }
                }
                if (this.platos[i].cantidad > 0 && pidioPlato) {
                    this.pedidoActual.push(this.platos[i]);
                }
            }
        }
        else if (texto == 'bebida') {
            for (var i = 0; i < this.bebidas.length; i++) {
                var pidio = true;
                for (var j = 0; j < this.pedidoActual.length; j++) {
                    if (this.bebidas[i].nombre == this.pedidoActual[j].nombre) {
                        this.pedidoActual[j] = this.bebidas[i];
                        pidio = false;
                        break;
                    }
                }
                if (this.bebidas[i].cantidad > 0 && pidio) {
                    this.pedidoActual.push(this.bebidas[i]);
                }
            }
        }
        else {
            var pidio = true;
            for (var i = 0; i < this.pedidoActual.length; i++) {
                if (this.productoQR.nombre == this.pedidoActual[i].nombre) {
                    this.pedidoActual[i] = this.productoQR;
                    pidio = false;
                    break;
                }
            }
            if (this.productoQR.cantidad > 0 && pidio) {
                this.pedidoActual.push(this.productoQR);
            }
        }
        console.log(this.pedidoActual);
        this.ocultarBebidas = false;
        this.ocultarPLatos = false;
        this.mostrarProductoQR = false;
        this.limpiarPedido();
    };
    PedirPlatosPage.prototype.calcularMonto = function () {
        var tieneProductos = false;
        for (var i = 0; i < this.pedidoActual.length; i++) {
            if (this.pedidoActual[i].cantidad > 0) {
                tieneProductos = true;
                break;
            }
        }
        if (tieneProductos) {
            this.montoActual = 0;
            for (var i = 0; i < this.pedidoActual.length; i++) {
                if (this.pedidoActual[i].cantidad > 0) {
                    this.montoActual += this.pedidoActual[i].precio * this.pedidoActual[i].cantidad;
                }
            }
            this.monto = true;
            console.log(this.montoActual);
        }
    };
    PedirPlatosPage.prototype.limpiarPedido = function () {
        for (var i = 0; i < this.pedidoActual.length; i++) {
            if (this.pedidoActual[i].cantidad == 0) {
                this.pedidoActual.splice(i, 1);
                this.limpiarPedido();
            }
        }
        console.log(this.pedidoActual);
        this.calcularMonto();
    };
    PedirPlatosPage.prototype.CancelarPedido = function () {
        this.ocultarBebidas = false;
        this.ocultarPLatos = false;
        this.mostrarProductoQR = false;
    };
    PedirPlatosPage.prototype.leerQR = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            var producto = barcodeData.text;
            var dato = producto.split(",");
            if (dato[4] == 'plato') {
                var flag = false;
                for (var i = 0; i < _this.platos.length; i++) {
                    if (_this.platos[i].nombre == dato[0]) {
                        _this.productoQR = _this.platos[i];
                        _this.mostrarProductoQR = true;
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    _this.error.mostrarErrorLiteral("El producto escaneado no existe en el sistema");
                    return;
                }
            }
            else if (dato[4] == 'bebida') {
                var flag = false;
                for (var i = 0; i < _this.bebidas.length; i++) {
                    if (_this.bebidas[i].nombre == dato[0]) {
                        _this.productoQR = _this.bebidas[i];
                        _this.mostrarProductoQR = true;
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    _this.error.mostrarErrorLiteral("El producto escaneado no existe en el sistema");
                    return;
                }
            }
            else {
                _this.error.mostrarErrorLiteral("Escanee un producto valido..");
                return;
            }
        });
    };
    PedirPlatosPage.prototype.PedirFinal = function () {
        var _this = this;
        if (this.pedidoActual.length > 0) {
            if (localStorage.getItem('delivery') == 'true' && this.usuario.tipo == "cliente") {
                this.mostrarDireccion = true;
            }
            else {
                this.mostrarSpiner = true;
                var momentoActual = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date());
                var data = void 0;
                if (this.usuario.tipo == "cliente anonimo") {
                    data = {
                        "nombreCliente": this.usuario.nombre,
                        "estado": "pedido por confirmar",
                        "productos": this.pedidoActual,
                        "numero": this.pedidoPendiente.numero,
                        "fecha": momentoActual.format("DD/MM/YYYY HH:mm"),
                        "montoTotal": this.montoActual,
                        "tipo": this.pedidoPendiente.tipo,
                        "id": this.pedidoPendiente.id,
                        'delivery': false
                    };
                }
                else {
                    data = {
                        "correo": this.pedidoPendiente.correo, "nombreCliente": this.pedidoPendiente.nombreCliente, "apellidoCliente": this.pedidoPendiente.apellidoCliente, "estado": "pedido por confirmar",
                        "productos": this.pedidoActual, "numero": this.pedidoPendiente.numero, "fecha": momentoActual.format("DD/MM/YYYY HH:mm"), "montoTotal": this.montoActual,
                        "tipo": this.pedidoPendiente.tipo, "id": this.pedidoPendiente.id, 'delivery': false
                    };
                }
                this.auth.actualizarPedido(data).then(function (res) {
                    _this.mostrarSpiner = false;
                    _this.error.mostrarMensaje("Su pedido ha sido enviado en breve se lo llevaremos...");
                    setTimeout(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
                    }, 500);
                }).catch(function (error) {
                    _this.error.mostrarErrorLiteral(error, "Hubo un error al enviar su pedido.");
                    _this.mostrarSpiner = false;
                });
            }
        }
        else {
            this.error.mostrarErrorLiteral("Elija algun producto antes de aceptar un pedido");
        }
    };
    PedirPlatosPage.prototype.AceptarDelivery = function () {
        var _this = this;
        if (this.direccion == '') {
            this.error.mostrarErrorLiteral('ingrese una direccion antes de continuar');
            return;
        }
        this.mostrarSpiner = true;
        var momentoActual = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date());
        var data = {
            "nombreCliente": this.usuario.nombre,
            'apellidoCliente': this.usuario.apellido,
            'correo': this.usuario.correo,
            "estado": "pedido por confirmar",
            "productos": this.pedidoActual,
            "fecha": momentoActual.format("DD/MM/YYYY HH:mm"),
            "montoTotal": this.montoActual,
            'delivery': true,
            'direccion': this.direccion,
            "foto": this.usuario.foto,
        };
        this.auth.nuevoPedido(data).then(function (res) {
            _this.mostrarSpiner = false;
            _this.error.mostrarMensaje("Pedido aceptado. Le notificaremos cuando lo acepte nuestro supervisor");
            _this.back();
        }).catch(function (error) {
            _this.mostrarSpiner = false;
            _this.error.mostrarError(error, 'hubo un error. Intentelo mas tarde');
        });
    };
    PedirPlatosPage.prototype.CancelarDelivery = function () {
        this.mostrarDireccion = false;
    };
    PedirPlatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedir-platos',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\pedir-platos\pedir-platos.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title></ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<div class="platos" *ngIf="mostrarDireccion">\n\n  <h1 class="tituloPlatos"  >Ingrese su dirección</h1>\n\n  <ion-item>\n\n    <ion-label>Dirección</ion-label>\n\n    <ion-input type=\'text\' required [(ngModel)]="direccion"></ion-input>\n\n  </ion-item>\n\n  <button ion-button class="aceptarBtn" color="red" color="celeste" (click)="AceptarDelivery()">Aceptar</button>\n\n  <button ion-button class="cancelarBtn" color="red" color="celeste" (click)="CancelarDelivery()">Cancelar</button>\n\n</div>\n\n\n\n<div class="platos" *ngIf="mostrarProductoQR">\n\n  <h1 class="tituloPlatos"  >Seleccione cantidad</h1>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src={{productoQR.foto}}>\n\n      </ion-thumbnail>\n\n\n\n      <h1>{{productoQR.nombre}}</h1>\n\n      <p>Descripcion • {{productoQR.descripcion}}</p>\n\n      <p>cantidad • {{productoQR.cantidad}}</p>\n\n\n\n      <button ion-button clear item-end (click)="AumentarCantidad(productoQR)">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n      <button ion-button clear item-end (click)="DisminuirCantidad(productoQR)">\n\n        <ion-icon name="remove"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <button ion-button class="aceptarBtn" color="red" color="celeste" (click)="AceptarPedido(\'producto\')">Aceptar</button>\n\n  <button ion-button class="cancelarBtn" color="red" color="celeste" (click)="CancelarPedido()">Cancelar</button>\n\n</div>\n\n\n\n<div class="platos" *ngIf="ocultarPLatos==true">\n\n  <h1 class="tituloPlatos"  >{{titulo}}:</h1>\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let item of platos">\n\n      <ion-thumbnail item-start>\n\n        <img src={{item.foto}}>\n\n      </ion-thumbnail>\n\n\n\n      <h1>{{item.nombre}}</h1>\n\n      <p>Descripcion • {{item.descripcion}}</p>\n\n      <p>cantidad • {{item.cantidad}}</p>\n\n\n\n      <button ion-button clear item-end (click)="AumentarCantidad(item)">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n      <button ion-button clear item-end (click)="DisminuirCantidad(item)">\n\n        <ion-icon name="remove"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <button ion-button class="aceptarBtn" color="red" color="celeste" (click)="AceptarPedido(\'plato\')">Aceptar</button>\n\n  <button ion-button class="cancelarBtn" color="red" color="celeste" (click)="CancelarPedido()">Cancelar</button>\n\n</div>\n\n\n\n<div class="platos" *ngIf="ocultarBebidas==true">\n\n  <h1 class="tituloPlatos"  >{{titulo}}:</h1>\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let item of bebidas">\n\n      <ion-thumbnail item-start>\n\n        <img src={{item.foto}}>\n\n      </ion-thumbnail>\n\n\n\n      <h1>{{item.nombre}}</h1>\n\n      <p>Descripcion • {{item.descripcion}}</p>\n\n      <p>cantidad • {{item.cantidad}}</p>\n\n\n\n      <button ion-button clear item-end (click)="AumentarCantidad(item)">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n      <button ion-button clear item-end (click)="DisminuirCantidad(item)">\n\n        <ion-icon name="remove"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <button ion-button class="aceptarBtn" color="red" color="celeste" (click)="AceptarPedido(\'bebida\')">Aceptar</button>\n\n  <button ion-button class="cancelarBtn" color="red" color="celeste" (click)="CancelarPedido()">Cancelar</button>\n\n</div>\n\n\n\n<ion-content padding>\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n  <div *ngIf="!puedePedir">\n\n    <h1 class="tituloPag" >{{mensajePedido}}</h1>\n\n  </div>\n\n  <div class="contenido" *ngIf="puedePedir">\n\n    <h1 class="tituloPag" >¡Haga su pedido!</h1>\n\n    <div *ngIf="monto">\n\n      <h1>Su pedido actual</h1>\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of pedidoActual">\n\n          <ion-label>{{item.nombre}}  -- precio: {{item.precio}} -- cantidad: {{item.cantidad}}</ion-label>\n\n        </ion-item>\n\n      </ion-list>\n\n      <h1>Monto actual: {{montoActual}}</h1>\n\n    </div>\n\n    \n\n    <div class="botonespp">\n\n          <button class="btnPlatos" (click)="Platos()" ion-button color="primary"  ><img src="assets/Imagenes/comida.png"> Platos</button>\n\n          <button class="btnBebidas"  (click)="Bebidas()" ion-button color="primary" ><img src="assets/Imagenes/bebidas.png">Bebidas</button>\n\n    </div>\n\n    <!--input class="inpDireccion" type="text" placeholder="Su direcci&oacute;n"-->\n\n    <button class="btnQR" (click)="leerQR()" ion-button color="primary" >Leer QR de producto</button>\n\n    <button class="btnPedir" (click)="PedirFinal()" ion-button color="primary" >¡Pedir!</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\pedir-platos\pedir-platos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], PedirPlatosPage);
    return PedirPlatosPage;
}());

//# sourceMappingURL=pedir-platos.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__juego_descuento_juego_descuento__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_juego_postre_juego_postre__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JuegosPage = /** @class */ (function () {
    function JuegosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        this.juegos = [
            { accion: "Juego de memoria", img: "memoria.jpg", ruta: __WEBPACK_IMPORTED_MODULE_2__juego_descuento_juego_descuento__["a" /* JuegoDescuentoPage */] },
            { accion: "Juego del ahorcado", img: "memoria.jpg", ruta: __WEBPACK_IMPORTED_MODULE_4__components_juego_postre_juego_postre__["a" /* JuegoPostreComponent */] },
        ];
    }
    JuegosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JuegosPage');
    };
    JuegosPage.prototype.Redireccionar = function (ruta) {
        this.navCtrl.setRoot(ruta);
    };
    JuegosPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */]);
    };
    JuegosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-juegos',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\juegos\juegos.html"*/'<!--\n\n  Generated template for the JuegosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Juegos</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page" padding>\n\n  <button ion-button *ngFor="let item of juegos" (click)="Redireccionar(item.ruta)">\n\n      <div class="sombreado"></div>\n\n      <img src="../../assets/Imagenes/{{item.img}}" />\n\n      <span>{{item.accion}}</span>\n\n    </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\juegos\juegos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], JuegosPage);
    return JuegosPage;
}());

//# sourceMappingURL=juegos.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_alta_cliente_alta_cliente__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, data, serviceAlert, spiner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.serviceAlert = serviceAlert;
        this.spiner = spiner;
        this.mostrarSpiner = false;
        this.anonimo = false;
        this.botonUsuarios = "";
        this.agrandar = "";
        this.usuarios = new Array();
        localStorage.clear();
    }
    /*ionViewDidLoad() {
      if(this.navParams.get('fromApp')){
        this.splash = false;
      }else{
        setTimeout(() => {
          this.splash = false;
        }, 5000);
      }
    }*/
    HomePage.prototype.entrarComoAnonimo = function () {
        if (this.nombre != undefined) {
            var usuario = {
                'nombre': this.nombre,
                'tipo': "cliente anonimo",
                'perfil': "cliente anonimo",
                'estado': "Aprobado",
            };
            localStorage.setItem("usuario", JSON.stringify(usuario));
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */], { usuario: usuario });
        }
        else {
            this.serviceAlert.mostrarError("Debe ingresar un nombre de usuario");
        }
    };
    HomePage.prototype.DesplegarUsuarios = function () {
        this.botonUsuarios = "ocultar";
        this.agrandar = "agrandar";
    };
    HomePage.prototype.SetearUsuario = function (email, password) {
        this.email = email;
        this.pass = password;
        this.NoDesplegarUsuarios();
    };
    HomePage.prototype.NoDesplegarUsuarios = function () {
        var _this = this;
        setTimeout(function () {
            _this.botonUsuarios = "";
        }, 500);
        this.agrandar = "";
    };
    HomePage.prototype.aceptar = function () {
        var _this = this;
        if (this.validForm()) {
            this.mostrarSpiner = true;
            this.data.login(this.email, this.pass).then(function (res) {
                _this.data.getLista('usuarios').subscribe(function (lista) {
                    _this.usuarios = lista;
                    console.log(_this.usuarios);
                    var flag = false;
                    for (var i = 0; i < _this.usuarios.length; i++) {
                        if (_this.usuarios[i].correo == _this.email) {
                            if (_this.usuarios[i].tipo != 'cliente' || (_this.usuarios[i].tipo == 'cliente' && _this.usuarios[i].estado == "Aprobado")) {
                                flag = true;
                                var usuario = _this.usuarios[i];
                                localStorage.setItem("usuario", JSON.stringify(usuario));
                                _this.mostrarSpiner = false;
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */], { usuario: res });
                            }
                        }
                    }
                    if (!flag) {
                        _this.serviceAlert.mostrarError("El usuario no existe");
                        _this.mostrarSpiner = false;
                    }
                });
            }).catch(function (error) {
                _this.mostrarSpiner = false;
                _this.serviceAlert.mostrarError(error, "Error al iniciar sesión");
            });
        }
    };
    HomePage.prototype.validForm = function () {
        if (this.pass && this.email) {
            return true;
        }
        this.serviceAlert.mostrarErrorLiteral("Todos los campos son obligatorios", "Error al registrarse");
        return false;
    };
    HomePage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\home\home.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Bienvenido</ion-title>\n\n      \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n  <div class="usuarios">\n\n\n\n    <button [class]="botonUsuarios" (click)="DesplegarUsuarios()">\n\n      <ion-icon name="person"></ion-icon>\n\n    </button>\n\n  \n\n    <div [class]="agrandar">\n\n        <ion-buttons end style="margin-right: 10px;">\n\n            <button ion-button icon-only (click)="NoDesplegarUsuarios()">\n\n              <ion-icon name="close"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n      <button (click)="SetearUsuario(\'pepe@gmail.com\', \'123456\')">Dueño</button>\n\n      <button (click)="SetearUsuario(\'samy32m@gmail.com\', \'222222\')">Supervisor</button>\n\n      <button (click)="SetearUsuario(\'federico@gmail.com\', \'123456\')">Mozo</button>\n\n      <button (click)="SetearUsuario(\'Seba@gmail.com\', \'123456\')">Cocinero</button>\n\n      <button (click)="SetearUsuario(\'coqui@gmail.com\', \'123456\')">Bartender</button>\n\n      <button (click)="SetearUsuario(\'metre@gmail.com\', \'666666\')">Metre</button>\n\n      <button (click)="SetearUsuario(\'repartidor@gmail.com\', \'123456\')">Repartidor</button>\n\n      <button (click)="SetearUsuario(\'paola@gmail.com\', \'123456\')">Cliente</button>\n\n      <button (click)="SetearUsuario(\'prueba2@gmail.com\', \'333333\')">Cliente2</button>\n\n    </div>\n\n  \n\n  </div>\n\n  <img class="icon" src="assets/Imagenes/icon.png">\n\n  <ion-row class="ml">\n\n    <ion-checkbox color="primary" [(ngModel)]="anonimo"></ion-checkbox> <h6 class="checkbox">Ingresar como anonimo </h6>\n\n  </ion-row>\n\n\n\n  <div *ngIf="!anonimo">\n\n    <ion-item>\n\n      <ion-label floating>Correo electrónico: </ion-label>\n\n      <ion-input type="email" required [(ngModel)]="email" name="em"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Contraseña: </ion-label>\n\n      <ion-input type="password" required [(ngModel)]="pass" name="pas"></ion-input>\n\n    </ion-item>\n\n  </div>\n\n  <div *ngIf="anonimo">\n\n    <ion-item>\n\n      <ion-label floating>Nombre: </ion-label>\n\n      <ion-input type="text" [(ngModel)]="nombre" name="nombre"></ion-input>\n\n    </ion-item>\n\n  </div>\n\n  <br>\n\n  <div *ngIf="!anonimo">\n\n    <button ion-button block color="primary" (click)="aceptar()">Iniciar Sesión</button>\n\n  </div>\n\n  <div *ngIf="anonimo">\n\n    <button ion-button block color="primary" (click)="entrarComoAnonimo()">Iniciar Sesión</button>\n\n  </div>\n\n  <button ion-button block color="secondary" (click)="register()" >Registrarse</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[453]);
//# sourceMappingURL=main.js.map