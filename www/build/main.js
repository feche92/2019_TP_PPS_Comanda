webpackJsonp([13],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_alta_cliente_alta_cliente__ = __webpack_require__(261);
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
        this.anonimo = false;
        this.botonUsuarios = "";
        this.agrandar = "";
        this.usuarios = new Array();
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
    HomePage.prototype.rellenar = function () {
        this.email = "samy32m@gmail.com";
        this.pass = "222222";
    };
    HomePage.prototype.entrarComoAnonimo = function () {
        if (this.nombre != undefined) {
            var usuario = {
                'nombre': this.nombre,
                'tipo': "cliente anonimo"
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
            //this.mostrarSpiner=true;
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
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */], { usuario: res });
                            }
                        }
                    }
                    if (!flag)
                        _this.serviceAlert.mostrarError("El usuario no existe");
                });
            }).catch(function (error) {
                //this.mostrarSpiner=false;
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\home\home.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Bienvenido</ion-title>\n\n      \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n  <div class="usuarios">\n\n\n\n    <button [class]="botonUsuarios" (click)="DesplegarUsuarios()">\n\n      <ion-icon name="person"></ion-icon>\n\n    </button>\n\n  \n\n    <div [class]="agrandar">\n\n        <ion-buttons end style="margin-right: 10px;">\n\n            <button ion-button icon-only (click)="NoDesplegarUsuarios()">\n\n              <ion-icon name="close"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n      <button (click)="SetearUsuario(\'pepe@gmail.com\', \'123456\')">Dueño</button>\n\n      <button (click)="SetearUsuario(\'samy32m@gmail.com\', \'222222\')">Supervisor</button>\n\n      <button (click)="SetearUsuario(\'federico@gmail.com\', \'123456\')">Mozo</button>\n\n      <button (click)="SetearUsuario(\'Seba@gmail.com\', \'123456\')">Cocinero</button>\n\n      <button (click)="SetearUsuario(\'bartender@gmail.com\', \'555555\')">Bartender</button>\n\n      <button (click)="SetearUsuario(\'metre@gmail.com\', \'666666\')">Metre</button>\n\n      <button (click)="SetearUsuario(\'repartidor@gmail.com\', \'777777\')">Repartidor</button>\n\n      <button (click)="SetearUsuario(\'paola@gmail.com\', \'123456\')">Cliente</button>\n\n    </div>\n\n  \n\n  </div>\n\n  <img class="icon" src="assets/Imagenes/icon.png">\n\n  <ion-row>\n\n    <ion-checkbox color="primary" [(ngModel)]="anonimo"></ion-checkbox> <h4 class="checkbox">Ingresar como anonimo </h4>\n\n  </ion-row>\n\n\n\n  <div *ngIf="!anonimo">\n\n    <ion-item>\n\n      <ion-label floating>Correo electrónico: </ion-label>\n\n      <ion-input type="email" required [(ngModel)]="email" name="em"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Contraseña: </ion-label>\n\n      <ion-input type="password" required [(ngModel)]="pass" name="pas"></ion-input>\n\n    </ion-item>\n\n  </div>\n\n  <div *ngIf="anonimo">\n\n    <ion-item>\n\n      <ion-label floating>Nombre: </ion-label>\n\n      <ion-input type="text" [(ngModel)]="nombre" name="nombre"></ion-input>\n\n    </ion-item>\n\n  </div>\n\n  <br>\n\n  <div *ngIf="!anonimo">\n\n    <button ion-button block color="primary" (click)="aceptar()">Iniciar Sesión</button>\n\n  </div>\n\n  <div *ngIf="anonimo">\n\n    <button ion-button block color="primary" (click)="entrarComoAnonimo()">Iniciar Sesión</button>\n\n  </div>\n\n  <button ion-button block color="secondary" (click)="register()" >Registrarse</button>\n\n  <button ion-button block color="secondary" (click)="rellenar()" >Rellenar Datos Supervisor</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrMesaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_cliente_home_cliente__ = __webpack_require__(264);
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
       por pedir, esperando pedido, preparando pedido, pedido terminado, comiento, por pagar
      estado mesa:
      libre, ocupada
     */
    function QrMesaComponent(auth, alert, navCtrl) {
        this.auth = auth;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.codigo = "123456"; //codigo qr de mesa
        this.title = "";
        this.mesas = [];
        this.estado = 0;
        this.ocupada = false;
        this.verificarCodigo();
    }
    //verifico si existe el codigo
    QrMesaComponent.prototype.verificarCodigo = function () {
        var _this = this;
        this.title = "Mesa Actual";
        this.auth.getMesas().subscribe(function (lista) {
            var flag = false;
            var _loop_1 = function (item) {
                if (item.codigo == _this.codigo) {
                    if (item.estado == 'libre') {
                        _this.mesas.push(item);
                        _this.estado = 1;
                        _this.ocupada = false;
                        flag = true;
                        return "break";
                    }
                    else {
                        var usuario_1 = JSON.parse(localStorage.getItem("usuario"));
                        //console.log(usuario);
                        _this.auth.getPedidos().subscribe(function (l) {
                            for (var _i = 0, l_1 = l; _i < l_1.length; _i++) {
                                var i = l_1[_i];
                                if (i.correo == usuario_1.correo && i.numero == item.numero && i.estado != 'por pagar') {
                                    //console.log(i);
                                    _this.pedidoActual = i;
                                    _this.estado = 2;
                                    _this.ocupada = false;
                                    break;
                                }
                            }
                        });
                    }
                }
            };
            for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
                var item = lista_1[_i];
                var state_1 = _loop_1(item);
                if (state_1 === "break")
                    break;
            }
            //console.log(this.mesas);
            if (!flag) {
                _this.texto = "La mesa esta ocupada";
                _this.ocupada = true;
            }
            /* GUARDAR LOS CAMBIOS EN GIT EN LA RAMA MORENO!!!!!!!!!! DDDDDD:
            */
        });
    };
    QrMesaComponent.prototype.tomarMesa = function (e) {
        //console.log(e);
        this.estado = 0;
        var data = {
            cantidadComensales: e.cantidadComensales,
            estado: 'ocupada',
            foto: e.foto,
            numero: e.numero,
            tipo: e.tipo,
            codigo: e.codigo,
            id: e.id
        };
        this.auth.updateMesa(data);
        var usuario = JSON.parse(localStorage.getItem("usuario"));
        var date = new Date();
        var fecha = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
        var dataPedido = {
            estado: 'por pedir',
            numero: e.numero,
            tipo: e.tipo,
            'nombreCliente': usuario.nombre,
            'apellidoCliente': usuario.apellido,
            'correo': usuario.correo,
            'fecha': fecha
        };
        this.auth.guardarPedido(dataPedido);
        this.alert.mostrarMensaje("Mesa asignada");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_cliente_home_cliente__["a" /* HomeClienteComponent */]);
    };
    QrMesaComponent.prototype.verEstadoPedido = function () {
        this.title = "Estado Actual del Pedido";
        this.estado = 2;
        this.auth.getMesas().subscribe(function (lista) {
            /*
            for(let item of lista){
              if(item.cliente == this.id_usuario){
                //id_pedido = item.id_pedido;
                break;
              }
            }
      
            this.auth.getPedidos().subscribe(data => {
              for(let item of data){
                if(item.id == id_pedido){
                  this.pedidoActual = item;
                  break;
                }
              }
            });
      
          */
        });
    };
    QrMesaComponent.prototype.mostrarEncuestaDeSatisfaccion = function () {
        this.title = "Encuesta de Satisfacción";
        this.estado = 3;
    };
    QrMesaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qr-mesa',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\qr-mesa\qr-mesa.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <div *ngIf="estado == 1">\n\n  	<div *ngFor="let mesa of mesas" class="card" style="width: 18rem;">\n\n	  <img class="card-img-top" src="{{mesa.foto}}" alt="foto mesa">\n\n	  <div class="card-body">\n\n	    <h5 class="card-title">Mesa Nº {{mesa.numero}}</h5>\n\n	    <p class="card-text">Cantidad maxima de comensales:{{mesa.cantidadComensales}}</p>\n\n	    <p class="card-text">Tipo: {{mesa.tipo}}</p>\n\n  		<button ion-button block color="primary" (click)="tomarMesa(mesa)">Tomar mesa</button>\n\n	  </div>\n\n	  </div>\n\n  </div>\n\n\n\n  <div *ngIf="ocupada" class="ocupada">\n\n    <h1 class="text-center">{{texto}}</h1>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="estado == 2">\n\n  	<ion-grid>\n\n  		<ion-row>\n\n  			<h2>Estado de Pedido:</h2><h4 class="estado">{{pedidoActual.estado}}</h4>\n\n  		</ion-row>\n\n  	</ion-grid>\n\n  </div>\n\n\n\n\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\qr-mesa\qr-mesa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]])
    ], QrMesaComponent);
    return QrMesaComponent;
}());

//# sourceMappingURL=qr-mesa.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var FcmProvider = /** @class */ (function () {
    function FcmProvider(firebaseNative, afs, platform) {
        this.firebaseNative = firebaseNative;
        this.afs = afs;
        this.platform = platform;
        console.log('Hello FcmProvider Provider');
    }
    FcmProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, this.saveTokenToFirestore(token)];
                }
            });
        });
    };
    // Save the token to firestore
    FcmProvider.prototype.saveTokenToFirestore = function (token) {
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        if (!token)
            return;
        var devicesRef = this.afs.collection('devices');
        var docData = {
            token: token,
            userId: 'testUser',
            //tipo: 'cliente'
            tipo: this.usuario.tipo,
            correo: this.usuario.correo
        };
        return devicesRef.doc(token).set(docData);
    };
    // Listen to incoming FCM messages
    FcmProvider.prototype.listenToNotifications = function () {
        return this.firebaseNative.onNotificationOpen();
    };
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(29);
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
    function AuthProvider(auth, db) {
        this.auth = auth;
        this.db = db;
    }
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
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaDeProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        //atributos
        this.tipo = "plato";
        this.foto = "../../assets/Imagenes/producto.png";
        this.estado = "Definir estado inicial";
        this.usuarios = new Array();
        this.auth.getLista("usuarios").subscribe(function (lista) {
            _this.usuarios = lista;
        });
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
            || !this.tipo || this.foto == "" || !this.precio || !this.lectorQR) {
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
        if (esValido) {
            var data = {
                "nombre": this.nombre,
                "descripcion": this.descripcion,
                "foto": this.foto,
                "tipo": this.tipo,
                "precio": this.precio,
                "lectorQR": this.lectorQR,
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
        this.tipo = "plato";
        this.foto = "../../assets/Imagenes/producto.png";
        this.precio = 0;
        this.lectorQR = "";
    };
    AltaDeProductoPage.prototype.SacarFoto = function () {
        var _this = this;
        console.log('AltaDeProductoPage - Sacar fotos');
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
    AltaDeProductoPage.prototype.InicializarLectorQR = function () {
        var _this = this;
        console.log('AltaDeProductoPage - Inicializo lector de QR');
        var options = { prompt: "Escanea la bebida o el plato", formats: "PDF_417" };
        this.barcodeScanner.scan(options).then(function (barcodeData) {
            var productoDatos = barcodeData;
            _this.tipo = productoDatos[1];
            _this.nombre = productoDatos[2];
            _this.descripcion = productoDatos[3];
            _this.tiempoPromedioElaboracion = productoDatos[4];
            _this.foto = productoDatos[5];
            ;
        }).catch(function (err) { });
    };
    AltaDeProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alta-de-producto',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\alta-de-producto\alta-de-producto.html"*/'<!--\n\n  Generated template for the AltaProductoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Alta de Producto</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-list inset>\n\n        <ion-item>\n\n          <ion-input type="text" class="tipoProducto" placeholder="Nombre" [(ngModel)]="nombre" ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text"  class="tipoProducto"  placeholder="Descripcion" [(ngModel)]="descripcion" ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" class="tipoProducto"   placeholder="Precio" [(ngModel)]="precio" ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text"  class="tipoProducto"  placeholder="lectorQR" [(ngModel)]="lectorQR"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text"  class="tipoProducto"  placeholder="Tiempo Promedio Elaboracion" [(ngModel)]="tiempoPromedioElaboracion" ></ion-input>\n\n        </ion-item>       \n\n        \n\n          <select [(ngModel)]="tipo" class="tipoProducto" style="margin: 0 30px 0 0;width: 70%;display: block;\n\n              margin: 0 auto;">\n\n            <option value="plato">Plato</option>\n\n            <option value="bebida">Bebida</option>                   \n\n          </select>\n\n        \n\n        <ion-item>\n\n          <img [src]="foto" alt="" height="125px" width="125px">\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button outline color="red" class="sacarFoto" (click)="SacarFoto()">Sacar foto</button>\n\n      <button ion-button color="red" class="sacarFoto" (click)="InicializarLectorQR()">Leer QR</button>\n\n      <button ion-button color="red" class="botonAlta" (click)="Alta()" >Guardar Producto</button>\n\n    </ion-col>\n\n  </ion-row> \n\n</ion-content>'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\alta-de-producto\alta-de-producto.html"*/,
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(50);
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaDeMesaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(50);
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
            _this.numeroMesa = dato[0];
            _this.cantidadComensales = dato[1];
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

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoSupervisorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__principal_principal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__encuesta_supervisor_encuesta_supervisor__ = __webpack_require__(173);
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaSupervisorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__estadisticas_supervisor_estadisticas_supervisor__ = __webpack_require__(174);
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticasSupervisorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EstadisticasSupervisorPage = /** @class */ (function () {
    function EstadisticasSupervisorPage(navCtrl, navParams, auth, error, spinner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.spinner = spinner;
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
            if (_this.usuario != 'cliente') {
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
    EstadisticasSupervisorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estadisticas-supervisor',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\estadisticas-supervisor\estadisticas-supervisor.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Estadisticas</ion-title>\n\n    <ion-buttons>\n\n      <button ion-button (click)="VolverAtras()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="encuesta">\n\n    <div id="divCanvas" class="canvas">\n\n      \n\n    </div>\n\n  </div>\n\n  <div class="encuesta">\n\n\n\n    <div id="divCanvas" class="canvas">\n\n  \n\n      \n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\estadisticas-supervisor\estadisticas-supervisor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__["a" /* SpinnerProvider */]])
    ], EstadisticasSupervisorPage);
    return EstadisticasSupervisorPage;
}());

//# sourceMappingURL=estadisticas-supervisor.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(42);
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(42);
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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirPlatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(42);
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
    function PedirPlatosPage(navCtrl, navParams, auth, error, spinner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.spinner = spinner;
        this.mensajePedido = "";
        this.montoActual = 0;
        this.puedePedir = true;
        this.monto = false;
        this.ocultarBebidas = false;
        this.ocultarPLatos = false;
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        this.productos = new Array();
        this.platos = new Array();
        this.bebidas = new Array();
        this.pedidoActual = new Array();
        var spiner = this.spinner.getAllPageSpinner();
        spiner.present();
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
            spiner.dismiss();
            console.log(_this.bebidas);
            console.log(_this.platos);
            _this.puedeHacerPedido();
        });
    }
    PedirPlatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedirPlatosPage');
    };
    PedirPlatosPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    PedirPlatosPage.prototype.puedeHacerPedido = function () {
        var _this = this;
        this.auth.getPedidos().subscribe(function (lista) {
            _this.pedidos = lista;
            var estaCorreo = false;
            for (var i = 0; i < _this.pedidos.length; i++) {
                if (_this.pedidos[i].correo == _this.usuario.correo /* YY pedidos.estado != ultimo estado del pedido que es por pagar creo  */) {
                    estaCorreo = true;
                    //this.pedidoPendiente=this.pedidos[i];
                    //this.puedePedir=true;
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
            else {
                _this.mensajePedido = "No puede hacer un pedido sin antes estar en una mesa";
            }
            console.log(_this.pedidos);
            console.log(_this.pedidoPendiente);
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
        else {
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
        console.log(this.pedidoActual);
        this.ocultarBebidas = false;
        this.ocultarPLatos = false;
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
    };
    PedirPlatosPage.prototype.PedirFinal = function () {
        var _this = this;
        if (this.pedidoActual.length > 0) {
            var spiner_1 = this.spinner.getAllPageSpinner();
            spiner_1.present();
            var momentoActual = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date());
            var data = {
                "correo": this.usuario.correo, "nombreCliente": this.usuario.nombre, "apellidoCliente": this.usuario.apellido, "estado": "esperando pedido",
                "productos": this.pedidoActual, "numero": this.pedidoPendiente.numero, "fecha": momentoActual.format("DD/MM/YYYY HH:mm"), "montoTotal": this.montoActual,
                "tipo": this.pedidoPendiente.tipo, "id": this.pedidoPendiente.id,
            };
            this.auth.actualizarPedido(data).then(function (res) {
                spiner_1.dismiss();
                _this.error.mostrarMensaje("Su pedido ha sido enviado en breve se lo llevaremos...");
                setTimeout(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
                }, 500);
            }).catch(function (error) {
                _this.error.mostrarErrorLiteral(error, "Hubo un error al enviar su pedido.");
                spiner_1.dismiss();
            });
        }
        else {
            this.error.mostrarErrorLiteral("Elija algun producto antes de aceptar un pedido");
        }
    };
    PedirPlatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedir-platos',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\pedir-platos\pedir-platos.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title></ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<div class="platos" *ngIf="ocultarPLatos==true">\n\n  <h1 class="tituloPlatos"  >{{titulo}}:</h1>\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let item of platos">\n\n      <ion-thumbnail item-start>\n\n        <img src={{item.foto}}>\n\n      </ion-thumbnail>\n\n\n\n      <h1>{{item.nombre}}</h1>\n\n      <p>Descripcion • {{item.descripcion}}</p>\n\n      <p>cantidad • {{item.cantidad}}</p>\n\n\n\n      <button ion-button clear item-end (click)="AumentarCantidad(item)">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n      <button ion-button clear item-end (click)="DisminuirCantidad(item)">\n\n        <ion-icon name="remove"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <button ion-button class="aceptarBtn" color="red" color="celeste" (click)="AceptarPedido(\'plato\')">Aceptar</button>\n\n  <button ion-button class="cancelarBtn" color="red" color="celeste" (click)="CancelarPedido()">Cancelar</button>\n\n</div>\n\n\n\n<div class="platos" *ngIf="ocultarBebidas==true">\n\n  <h1 class="tituloPlatos"  >{{titulo}}:</h1>\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let item of bebidas">\n\n      <ion-thumbnail item-start>\n\n        <img src={{item.foto}}>\n\n      </ion-thumbnail>\n\n\n\n      <h1>{{item.nombre}}</h1>\n\n      <p>Descripcion • {{item.descripcion}}</p>\n\n      <p>cantidad • {{item.cantidad}}</p>\n\n\n\n      <button ion-button clear item-end (click)="AumentarCantidad(item)">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n      <button ion-button clear item-end (click)="DisminuirCantidad(item)">\n\n        <ion-icon name="remove"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <button ion-button class="aceptarBtn" color="red" color="celeste" (click)="AceptarPedido(\'bebida\')">Aceptar</button>\n\n  <button ion-button class="cancelarBtn" color="red" color="celeste" (click)="CancelarPedido()">Cancelar</button>\n\n</div>\n\n\n\n<ion-content padding>\n\n  <div class="contenido">\n\n    <h1 class="tituloPag" >¡Haga su pedido!</h1>\n\n    <div *ngIf="monto">\n\n      <h1>Su pedido actual</h1>\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of pedidoActual">\n\n          <ion-label>{{item.nombre}}  -- precio: {{item.precio}} -- cantidad: {{item.cantidad}}</ion-label>\n\n        </ion-item>\n\n      </ion-list>\n\n      <h1>Monto actual: {{montoActual}}</h1>\n\n    </div>\n\n    <div class="botonespp">\n\n          <button class="btnPlatos" (click)="Platos()" ion-button color="primary"  ><img src="assets/Imagenes/comida.png"> Platos</button>\n\n          <button class="btnBebidas"  (click)="Bebidas()" ion-button color="primary" ><img src="assets/Imagenes/bebidas.png">Bebidas</button>\n\n    </div>\n\n    <!--input class="inpDireccion" type="text" placeholder="Su direcci&oacute;n"-->\n\n    <button class="btnPedir" (click)="PedirFinal()" ion-button color="primary" >¡Pedir!</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\pedir-platos\pedir-platos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */]])
    ], PedirPlatosPage);
    return PedirPlatosPage;
}());

//# sourceMappingURL=pedir-platos.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoMesasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(16);
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
    function ListadoMesasPage(navCtrl, navParams, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.auth.getMesas().subscribe(function (lista) {
            _this.mesas = lista;
        });
    }
    ListadoMesasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListadoMesasPage');
    };
    ListadoMesasPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    ListadoMesasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listado-mesas',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-mesas\listado-mesas.html"*/'<!--\n\n  Generated template for the ListadoMesasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Mesas</ion-title>\n\n    <ion-buttons end style="margin-right: 10px;">\n\n        <button ion-button icon-only (click)="back()">\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="flex-v first-item">\n\n    <ul class="flex-container wrap center-horizontal">\n\n      <li class="flex-item" *ngFor="let item of mesas" (click)="elejirMesa(item)">\n\n        <div class="category-image-container width-100" [style.background-image]="\'url(\'+ item.foto +\')\'">\n\n          <span>{{item.estado}}</span>\n\n        </div>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-mesas\listado-mesas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], ListadoMesasPage);
    return ListadoMesasPage;
}());

//# sourceMappingURL=listado-mesas.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            duration: 2000,
            cssClass: 'error-alert',
            message: message ? message + errorMessage : errorMessage,
        });
        alert.present();
    };
    AlertProvider.prototype.mostrarErrorLiteral = function (error, title) {
        var alert = this.alert.create({
            position: "topo",
            duration: 2000,
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
    var AlertProvider_1;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 211:
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
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alta-de-mesa/alta-de-mesa.module": [
		644,
		12
	],
	"../pages/alta-de-producto/alta-de-producto.module": [
		643,
		11
	],
	"../pages/altaempleado/altaempleado.module": [
		645,
		10
	],
	"../pages/encuesta-supervisor/encuesta-supervisor.module": [
		646,
		9
	],
	"../pages/estadisticas-supervisor/estadisticas-supervisor.module": [
		647,
		8
	],
	"../pages/listado-mesas/listado-mesas.module": [
		648,
		7
	],
	"../pages/listado-reserva/listado-reserva.module": [
		649,
		6
	],
	"../pages/listado-supervisor/listado-supervisor.module": [
		650,
		5
	],
	"../pages/pedir-platos/pedir-platos.module": [
		651,
		4
	],
	"../pages/principal/principal.module": [
		652,
		3
	],
	"../pages/register/register.module": [
		653,
		2
	],
	"../pages/reserva/reserva.module": [
		655,
		1
	],
	"../pages/spinner/spinner.module": [
		654,
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
webpackAsyncContext.id = 253;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(12);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
        this.foto = "prueba";
        this.perfil = "cliente registrado"; //cliente anonimo
        this.estado = "Pendiente de aprobación";
    }
    AltaClienteComponent.prototype.alta = function () {
        var _this = this;
        var data;
        if (this.nombre != undefined && this.foto != undefined && this.email != undefined
            && this.clave != undefined && this.apellido != undefined && this.dni != undefined
            && this.dni.toString().length == 8 && this.clave2 != undefined) {
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
                    //this.navCtrl.setRoot(HomePage);
                });
            }
            else {
                this.alert.mostrarError("Las contraseñas son distintas");
            }
        }
        else {
            if (this.nombre == undefined || this.email == undefined || this.clave == undefined
                || this.apellido == undefined || this.dni == undefined || this.clave2 == undefined) {
                this.alert.mostrarError("Hay campos sin rellenar");
            }
            if (this.foto == undefined) {
                this.alert.mostrarError("Falta cargar una foto");
            }
            if (this.dni.toString().length < 8 || this.dni.toString().length > 8)
                this.alert.mostrarError("El dni debe tener 8 caracteres");
        }
    };
    AltaClienteComponent.prototype.abrirCamara = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var imageName, options, result, image, pictures_1, error_1;
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
            //alert(barcodeData.text);
            _this.dni = +barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    AltaClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alta-cliente',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-cliente\alta-cliente.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Registro Cliente</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	\n\n  <ion-item>\n\n    <ion-label floating>Nombre </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="nombre" name="nombre"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="!anonimo">\n\n    <ion-label floating>Apellido </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="apellido" name="apellido"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="!anonimo">\n\n    <ion-label floating>DNI </ion-label>\n\n    <ion-input type="number" minlength="8" maxlength="8" required [(ngModel)]="dni" name="dni"></ion-input>\n\n    <button ion-button block color="primary">Escanear DNI</button>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Correo Electrónico </ion-label>\n\n    <ion-input type="email" required [(ngModel)]="email" name="email"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Clave </ion-label>\n\n    <ion-input type="password" minlength="6" required [(ngModel)]="clave" name="clave"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Repetir Clave </ion-label>\n\n    <ion-input type="password" minlength="6" required [(ngModel)]="clave2" name="clave2"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <button ion-button block color="primary" (click)="abrirCamara()">Sacar Foto</button>\n\n  <button *ngIf="!anonimo" ion-button block color="primary" (click)="escanear()">Escanear DNI</button>\n\n  <button ion-button block color="secondary" (click)="alta()">Registrar</button>\n\n  <button ion-button block color="danger">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-cliente\alta-cliente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavController */]])
    ], AltaClienteComponent);
    return AltaClienteComponent;
}());

//# sourceMappingURL=alta-cliente.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaSupervisorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(50);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
        this.foto = "prueba";
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
                        _this.alert.mostrarError(error, "Ocurrio un error al registrar el usuario");
                        console.log(error);
                    });
                });
            }
            else {
                if (this.dni.toString().length != 8) {
                    this.alert.mostrarError("El dni debe tener 8 números");
                }
                if (this.cuil.toString().length != 11) {
                    this.alert.mostrarError("El cuil debe tener 11 números");
                }
                if (this.clave.length < 6) {
                    this.alert.mostrarError("La clave debe tener por lo menos 6 caracteres");
                }
                if (this.clave != this.clave2) {
                    this.alert.mostrarError("Las claves deben ser iguales");
                }
            }
        }
        else {
            if (this.nombre == undefined || this.apellido == undefined || this.dni == undefined ||
                this.cuil == undefined || this.email == undefined || this.clave == undefined
                || this.clave2 == undefined) {
                this.alert.mostrarError("Hay campos sin rellenar");
            }
            if (this.foto == undefined) {
                this.alert.mostrarError("Se debe cargar una foto");
            }
        }
    };
    AltaSupervisorComponent.prototype.abrirCamara = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var imageName, options, result, image, pictures_1, error_1;
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
        this.scanner.scan(options).then(function (barcodeData) {
            //alert(barcodeData.text);
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

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qr_mesa_qr_mesa__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
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
    function HomeClienteComponent(scanner, navCtrl) {
        this.scanner = scanner;
        this.navCtrl = navCtrl;
    }
    HomeClienteComponent.prototype.escanear = function () {
        var _this = this;
        var options = { prompt: "Escaneá un código", formats: "PDF_417" };
        this.scanner.scan(options).then(function (barcodeData) {
            //alert(barcodeData.text);
            _this.codigo = barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    HomeClienteComponent.prototype.codigoMesa = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__qr_mesa_qr_mesa__["a" /* QrMesaComponent */]);
    };
    HomeClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-cliente',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\home-cliente\home-cliente.html"*/'	\n\n  <button ion-button block color="primary" (click)="escanear()">Escanear Código</button>\n\n  <button ion-button block color="primary" (click)="codigoMesa()">Código Mesa</button>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\home-cliente\home-cliente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]])
    ], HomeClienteComponent);
    return HomeClienteComponent;
}());

//# sourceMappingURL=home-cliente.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaEmpleadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(16);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
                this.alert.mostrarError("Hay campos sin rellenar");
            }
        }
        else {
            this.alert.mostrarError("Falta cargar una foto");
        }
    };
    EncuestaEmpleadoComponent.prototype.abrirCamara = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, fecha, imageName, options, result, image, pictures_1, error_1;
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
                        this.alert.mostrarError(error_1, "Ocurrio un error");
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

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaClienteEstadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_principal_principal__ = __webpack_require__(31);
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
    function ListaClienteEstadoComponent(auth, alert, navCtrl) {
        this.auth = auth;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.clientes = [];
        this.traerClientes();
    }
    ListaClienteEstadoComponent.prototype.traerClientes = function () {
        var _this = this;
        this.auth.getLista('usuarios').subscribe(function (lista) {
            for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
                var item = lista_1[_i];
                if (item.tipo == 'cliente') {
                    _this.clientes.push(item);
                }
            }
            //console.log(this.clientes);
        });
    };
    ListaClienteEstadoComponent.prototype.modificarRegistro = function (e) {
        var _this = this;
        console.log(e);
        if (e.estado == "Pendiente de aprobación") {
            e.estado = "Aprobado";
            this.auth.crearUsuario(e.correo, e.clave);
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
    ListaClienteEstadoComponent.prototype.cancelar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_principal_principal__["a" /* PrincipalPage */]);
    };
    ListaClienteEstadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lista-cliente-estado',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\lista-cliente-estado\lista-cliente-estado.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Registro de Clientes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n  <div *ngIf="clientes" class="pad">\n\n  	<div *ngFor="let item of clientes" class="card" style="width: 18rem;">\n\n	  <img class="card-img-top" src="{{item.foto}}" alt="foto cliente">\n\n	  <div class="card-body">\n\n	    <h5 class="card-title">{{item.nombre}} {{item.apellido}}</h5>\n\n	    <p class="card-text">Estado: {{item.estado}}</p>\n\n  		<button *ngIf="item.estado == \'Pendiente de aprobación\'" ion-button block color="primary" (click)="modificarRegistro(item)">Aprobar Registro</button>\n\n  		<button *ngIf="item.estado != \'Pendiente de aprobación\'" ion-button block color="primary" (click)="modificarRegistro(item)">Deshabilitar Registro</button>\n\n	  </div>\n\n	</div>\n\n  </div>\n\n</ion-item>\n\n  <button ion-button block color="primary" (click)="cancelar()">Cancelar</button>\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\lista-cliente-estado\lista-cliente-estado.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]])
    ], ListaClienteEstadoComponent);
    return ListaClienteEstadoComponent;
}());

//# sourceMappingURL=lista-cliente-estado.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__altaempleado_altaempleado__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alta_de_mesa_alta_de_mesa__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_alta_supervisor_alta_supervisor__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_qr_mesa_qr_mesa__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_encuesta_empleado_encuesta_empleado__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_lista_cliente_estado_lista_cliente_estado__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__listado_supervisor_listado_supervisor__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reserva_reserva__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_fcm_fcm__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_operators__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__listado_reserva_listado_reserva__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pedir_platos_pedir_platos__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__listado_mesas_listado_mesas__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__alta_de_producto_alta_de_producto__ = __webpack_require__(169);
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
 * Generated class for the PrincipalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, navParams, error, auth, fcm, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.error = error;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.acciones = [];
        fcm.getToken();
        // Listen to incoming messages
        fcm.listenToNotifications().pipe(Object(__WEBPACK_IMPORTED_MODULE_14_rxjs_operators__["tap"])(function (msg) {
            // show a toast
            var toast = toastCtrl.create({
                message: msg.body,
                duration: 4000,
                position: 'top',
                cssClass: 'nombreRaro'
            });
            toast.present();
        }))
            .subscribe();
        this.usuario = JSON.parse(localStorage.getItem("usuario"));
        console.log(this.usuario.tipo);
        switch (this.usuario.tipo) {
            case "jefe":
                this.acciones = [
                    //{ accion: "Agregar un dueño o supervisor", img: "nuevo-duenio-supervisor.jpg", ruta: AltaDuenioSupervisorPage },
                    { accion: "Agregar un empleado", img: "nuevo-empleado.jpg", ruta: __WEBPACK_IMPORTED_MODULE_3__altaempleado_altaempleado__["a" /* AltaempleadoPage */] },
                    { accion: "Nueva mesa", img: "ocupar-mesa.jpg", ruta: __WEBPACK_IMPORTED_MODULE_4__alta_de_mesa_alta_de_mesa__["a" /* AltaDeMesaPage */] }
                ];
                break;
            case "supervisor":
                this.acciones = [
                    { accion: "Agregar un empleado", img: "nuevo-empleado.jpg", ruta: __WEBPACK_IMPORTED_MODULE_3__altaempleado_altaempleado__["a" /* AltaempleadoPage */] },
                    { accion: "Nuevo Supervisor", img: "nuevo-empleado.jpg", ruta: __WEBPACK_IMPORTED_MODULE_7__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */] },
                    { accion: "Confeccionar y ver encuestas", img: "encuesta.jpg", ruta: __WEBPACK_IMPORTED_MODULE_11__listado_supervisor_listado_supervisor__["a" /* ListadoSupervisorPage */] },
                    { accion: "Nueva mesa", img: "ocupar-mesa.jpg", ruta: __WEBPACK_IMPORTED_MODULE_4__alta_de_mesa_alta_de_mesa__["a" /* AltaDeMesaPage */] },
                    { accion: "Ver Estado de Registro de Clientes", img: "nuevo-empleado.jpg", ruta: __WEBPACK_IMPORTED_MODULE_10__components_lista_cliente_estado_lista_cliente_estado__["a" /* ListaClienteEstadoComponent */] },
                    { accion: "Probar qr mesa", img: "nuevo-empleado.jpg", ruta: __WEBPACK_IMPORTED_MODULE_8__components_qr_mesa_qr_mesa__["a" /* QrMesaComponent */] },
                    { accion: "Encuesta empleado", img: "nuevo-empleado.jpg", ruta: __WEBPACK_IMPORTED_MODULE_9__components_encuesta_empleado_encuesta_empleado__["a" /* EncuestaEmpleadoComponent */] },
                    { accion: "Confirmar reservas", img: "reserva.jpg", ruta: __WEBPACK_IMPORTED_MODULE_15__listado_reserva_listado_reserva__["a" /* ListadoReservaPage */] },
                    { accion: "Nuevo producto", img: "producto.png", ruta: __WEBPACK_IMPORTED_MODULE_18__alta_de_producto_alta_de_producto__["a" /* AltaDeProductoPage */] },
                    { accion: "Nuevo Supervisor", img: "ocupar-mesa.jpg", ruta: __WEBPACK_IMPORTED_MODULE_7__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */] },
                ];
                break;
            case "cliente registrado":
            case "cliente anonimo":
                this.acciones = [];
                break;
            case "cliente":
                this.acciones = [
                    { accion: "Reservar", img: "reserva.jpg", ruta: __WEBPACK_IMPORTED_MODULE_12__reserva_reserva__["a" /* ReservaPage */] },
                    { accion: "Pedir platos y bebidas", img: "pedido.jpg", ruta: __WEBPACK_IMPORTED_MODULE_16__pedir_platos_pedir_platos__["a" /* PedirPlatosPage */] }
                ];
                break;
            case "mozo":
                this.acciones = [
                    { accion: "Tomar pedido", img: "pedido.jpg", ruta: __WEBPACK_IMPORTED_MODULE_17__listado_mesas_listado_mesas__["a" /* ListadoMesasPage */] }
                ];
                break;
        }
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalPage');
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
    PrincipalPage.prototype.openPage = function (ruta) {
        this.navCtrl.setRoot(ruta);
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\principal\principal.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of acciones" (click)="openPage(p.ruta)">\n\n        {{p.accion}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary" #content>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Principal</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logout()">\n\n        <ion-icon name="power"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page" padding>\n\n\n\n  <div *ngIf="usuario.tipo == \'cliente\'">\n\n    <home-cliente></home-cliente>\n\n  </div>\n\n  <button ion-button *ngFor="let item of acciones" (click)="openPage(item.ruta)">\n\n    <div class="sombreado"></div>\n\n    <img src="../../assets/Imagenes/{{item.img}}" />\n\n    <span>{{item.accion}}</span>\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            //content:"<page-spinner></page-spinner>",
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

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        console.log('ionViewDidLoad SpinnerPage');
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

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(561);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_spinner_spinner__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_altaempleado_altaempleado__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_alta_de_mesa_alta_de_mesa__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_listado_supervisor_listado_supervisor__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_encuesta_supervisor_encuesta_supervisor__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reserva_reserva__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_listado_reserva_listado_reserva__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_estadisticas_supervisor_estadisticas_supervisor__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pedir_platos_pedir_platos__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_listado_mesas_listado_mesas__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_alta_de_producto_alta_de_producto__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_fire__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_fire_firestore__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_fire_auth__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_firebase__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__globalConfig__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_spinner_spinner__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_json_json__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_alta_supervisor_alta_supervisor__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_splash_splash__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_alta_cliente_alta_cliente__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_qr_mesa_qr_mesa__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_common_http__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_http__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_encuesta_empleado_encuesta_empleado__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_lista_cliente_estado_lista_cliente_estado__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_home_cliente_home_cliente__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_fcm_fcm__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_alta_producto_alta_producto__ = __webpack_require__(642);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//Firebase












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
                __WEBPACK_IMPORTED_MODULE_12__pages_altaempleado_altaempleado__["a" /* AltaempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_alta_de_mesa_alta_de_mesa__["a" /* AltaDeMesaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_spinner_spinner__["a" /* SpinnerPage */],
                __WEBPACK_IMPORTED_MODULE_31__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_splash_splash__["a" /* SplashComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_qr_mesa_qr_mesa__["a" /* QrMesaComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_encuesta_empleado_encuesta_empleado__["a" /* EncuestaEmpleadoComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_lista_cliente_estado_lista_cliente_estado__["a" /* ListaClienteEstadoComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_home_cliente_home_cliente__["a" /* HomeClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listado_supervisor_listado_supervisor__["a" /* ListadoSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_33__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_encuesta_supervisor_encuesta_supervisor__["a" /* EncuestaSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reserva_reserva__["a" /* ReservaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_listado_reserva_listado_reserva__["a" /* ListadoReservaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_estadisticas_supervisor_estadisticas_supervisor__["a" /* EstadisticasSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pedir_platos_pedir_platos__["a" /* PedirPlatosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_listado_mesas_listado_mesas__["a" /* ListadoMesasPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_alta_de_producto_alta_de_producto__["a" /* AltaDeProductoPage */],
                __WEBPACK_IMPORTED_MODULE_31__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_splash_splash__["a" /* SplashComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_alta_producto_alta_producto__["a" /* AltaProductoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alta-de-producto/alta-de-producto.module#AltaDeProductoPageModule', name: 'AltaDeProductoPage', segment: 'alta-de-producto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alta-de-mesa/alta-de-mesa.module#AltaDeMesaPageModule', name: 'AltaDeMesaPage', segment: 'alta-de-mesa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/altaempleado/altaempleado.module#AltaempleadoPageModule', name: 'AltaempleadoPage', segment: 'altaempleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/encuesta-supervisor/encuesta-supervisor.module#EncuestaSupervisorPageModule', name: 'EncuestaSupervisorPage', segment: 'encuesta-supervisor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estadisticas-supervisor/estadisticas-supervisor.module#EstadisticasSupervisorPageModule', name: 'EstadisticasSupervisorPage', segment: 'estadisticas-supervisor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado-mesas/listado-mesas.module#ListadoMesasPageModule', name: 'ListadoMesasPage', segment: 'listado-mesas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado-reserva/listado-reserva.module#ListadoReservaPageModule', name: 'ListadoReservaPage', segment: 'listado-reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado-supervisor/listado-supervisor.module#ListadoSupervisorPageModule', name: 'ListadoSupervisorPage', segment: 'listado-supervisor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedir-platos/pedir-platos.module#PedirPlatosPageModule', name: 'PedirPlatosPage', segment: 'pedir-platos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/spinner/spinner.module#SpinnerPageModule', name: 'SpinnerPage', segment: 'spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva/reserva.module#ReservaPageModule', name: 'ReservaPage', segment: 'reserva', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_26__globalConfig__["a" /* configs */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_24__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_fire_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_36__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_altaempleado_altaempleado__["a" /* AltaempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_alta_de_mesa_alta_de_mesa__["a" /* AltaDeMesaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_spinner_spinner__["a" /* SpinnerPage */],
                __WEBPACK_IMPORTED_MODULE_31__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_qr_mesa_qr_mesa__["a" /* QrMesaComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_encuesta_empleado_encuesta_empleado__["a" /* EncuestaEmpleadoComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_lista_cliente_estado_lista_cliente_estado__["a" /* ListaClienteEstadoComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_home_cliente_home_cliente__["a" /* HomeClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listado_supervisor_listado_supervisor__["a" /* ListadoSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_31__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_encuesta_supervisor_encuesta_supervisor__["a" /* EncuestaSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reserva_reserva__["a" /* ReservaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_listado_reserva_listado_reserva__["a" /* ListadoReservaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_estadisticas_supervisor_estadisticas_supervisor__["a" /* EstadisticasSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pedir_platos_pedir_platos__["a" /* PedirPlatosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_listado_mesas_listado_mesas__["a" /* ListadoMesasPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_alta_de_producto_alta_de_producto__["a" /* AltaDeProductoPage */],
                __WEBPACK_IMPORTED_MODULE_41__components_alta_producto_alta_producto__["a" /* AltaProductoComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_23__angular_fire_firestore__["c" /* FirestoreSettingsToken */], useValue: {} },
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_27__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_json_json__["a" /* JsonProvider */],
                //QrProvider,
                __WEBPACK_IMPORTED_MODULE_40__providers_fcm_fcm__["a" /* FcmProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 267,
	"./af.js": 267,
	"./ar": 268,
	"./ar-dz": 269,
	"./ar-dz.js": 269,
	"./ar-kw": 270,
	"./ar-kw.js": 270,
	"./ar-ly": 271,
	"./ar-ly.js": 271,
	"./ar-ma": 272,
	"./ar-ma.js": 272,
	"./ar-sa": 273,
	"./ar-sa.js": 273,
	"./ar-tn": 274,
	"./ar-tn.js": 274,
	"./ar.js": 268,
	"./az": 275,
	"./az.js": 275,
	"./be": 276,
	"./be.js": 276,
	"./bg": 277,
	"./bg.js": 277,
	"./bm": 278,
	"./bm.js": 278,
	"./bn": 279,
	"./bn.js": 279,
	"./bo": 280,
	"./bo.js": 280,
	"./br": 281,
	"./br.js": 281,
	"./bs": 282,
	"./bs.js": 282,
	"./ca": 283,
	"./ca.js": 283,
	"./cs": 284,
	"./cs.js": 284,
	"./cv": 285,
	"./cv.js": 285,
	"./cy": 286,
	"./cy.js": 286,
	"./da": 287,
	"./da.js": 287,
	"./de": 288,
	"./de-at": 289,
	"./de-at.js": 289,
	"./de-ch": 290,
	"./de-ch.js": 290,
	"./de.js": 288,
	"./dv": 291,
	"./dv.js": 291,
	"./el": 292,
	"./el.js": 292,
	"./en-SG": 293,
	"./en-SG.js": 293,
	"./en-au": 294,
	"./en-au.js": 294,
	"./en-ca": 295,
	"./en-ca.js": 295,
	"./en-gb": 296,
	"./en-gb.js": 296,
	"./en-ie": 297,
	"./en-ie.js": 297,
	"./en-il": 298,
	"./en-il.js": 298,
	"./en-nz": 299,
	"./en-nz.js": 299,
	"./eo": 300,
	"./eo.js": 300,
	"./es": 301,
	"./es-do": 302,
	"./es-do.js": 302,
	"./es-us": 303,
	"./es-us.js": 303,
	"./es.js": 301,
	"./et": 304,
	"./et.js": 304,
	"./eu": 305,
	"./eu.js": 305,
	"./fa": 306,
	"./fa.js": 306,
	"./fi": 307,
	"./fi.js": 307,
	"./fo": 308,
	"./fo.js": 308,
	"./fr": 309,
	"./fr-ca": 310,
	"./fr-ca.js": 310,
	"./fr-ch": 311,
	"./fr-ch.js": 311,
	"./fr.js": 309,
	"./fy": 312,
	"./fy.js": 312,
	"./ga": 313,
	"./ga.js": 313,
	"./gd": 314,
	"./gd.js": 314,
	"./gl": 315,
	"./gl.js": 315,
	"./gom-latn": 316,
	"./gom-latn.js": 316,
	"./gu": 317,
	"./gu.js": 317,
	"./he": 318,
	"./he.js": 318,
	"./hi": 319,
	"./hi.js": 319,
	"./hr": 320,
	"./hr.js": 320,
	"./hu": 321,
	"./hu.js": 321,
	"./hy-am": 322,
	"./hy-am.js": 322,
	"./id": 323,
	"./id.js": 323,
	"./is": 324,
	"./is.js": 324,
	"./it": 325,
	"./it-ch": 326,
	"./it-ch.js": 326,
	"./it.js": 325,
	"./ja": 327,
	"./ja.js": 327,
	"./jv": 328,
	"./jv.js": 328,
	"./ka": 329,
	"./ka.js": 329,
	"./kk": 330,
	"./kk.js": 330,
	"./km": 331,
	"./km.js": 331,
	"./kn": 332,
	"./kn.js": 332,
	"./ko": 333,
	"./ko.js": 333,
	"./ku": 334,
	"./ku.js": 334,
	"./ky": 335,
	"./ky.js": 335,
	"./lb": 336,
	"./lb.js": 336,
	"./lo": 337,
	"./lo.js": 337,
	"./lt": 338,
	"./lt.js": 338,
	"./lv": 339,
	"./lv.js": 339,
	"./me": 340,
	"./me.js": 340,
	"./mi": 341,
	"./mi.js": 341,
	"./mk": 342,
	"./mk.js": 342,
	"./ml": 343,
	"./ml.js": 343,
	"./mn": 344,
	"./mn.js": 344,
	"./mr": 345,
	"./mr.js": 345,
	"./ms": 346,
	"./ms-my": 347,
	"./ms-my.js": 347,
	"./ms.js": 346,
	"./mt": 348,
	"./mt.js": 348,
	"./my": 349,
	"./my.js": 349,
	"./nb": 350,
	"./nb.js": 350,
	"./ne": 351,
	"./ne.js": 351,
	"./nl": 352,
	"./nl-be": 353,
	"./nl-be.js": 353,
	"./nl.js": 352,
	"./nn": 354,
	"./nn.js": 354,
	"./pa-in": 355,
	"./pa-in.js": 355,
	"./pl": 356,
	"./pl.js": 356,
	"./pt": 357,
	"./pt-br": 358,
	"./pt-br.js": 358,
	"./pt.js": 357,
	"./ro": 359,
	"./ro.js": 359,
	"./ru": 360,
	"./ru.js": 360,
	"./sd": 361,
	"./sd.js": 361,
	"./se": 362,
	"./se.js": 362,
	"./si": 363,
	"./si.js": 363,
	"./sk": 364,
	"./sk.js": 364,
	"./sl": 365,
	"./sl.js": 365,
	"./sq": 366,
	"./sq.js": 366,
	"./sr": 367,
	"./sr-cyrl": 368,
	"./sr-cyrl.js": 368,
	"./sr.js": 367,
	"./ss": 369,
	"./ss.js": 369,
	"./sv": 370,
	"./sv.js": 370,
	"./sw": 371,
	"./sw.js": 371,
	"./ta": 372,
	"./ta.js": 372,
	"./te": 373,
	"./te.js": 373,
	"./tet": 374,
	"./tet.js": 374,
	"./tg": 375,
	"./tg.js": 375,
	"./th": 376,
	"./th.js": 376,
	"./tl-ph": 377,
	"./tl-ph.js": 377,
	"./tlh": 378,
	"./tlh.js": 378,
	"./tr": 379,
	"./tr.js": 379,
	"./tzl": 380,
	"./tzl.js": 380,
	"./tzm": 381,
	"./tzm-latn": 382,
	"./tzm-latn.js": 382,
	"./tzm.js": 381,
	"./ug-cn": 383,
	"./ug-cn.js": 383,
	"./uk": 384,
	"./uk.js": 384,
	"./ur": 385,
	"./ur.js": 385,
	"./uz": 386,
	"./uz-latn": 387,
	"./uz-latn.js": 387,
	"./uz.js": 386,
	"./vi": 388,
	"./vi.js": 388,
	"./x-pseudo": 389,
	"./x-pseudo.js": 389,
	"./yo": 390,
	"./yo.js": 390,
	"./zh-cn": 391,
	"./zh-cn.js": 391,
	"./zh-hk": 392,
	"./zh-hk.js": 392,
	"./zh-tw": 393,
	"./zh-tw.js": 393
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
webpackContext.id = 611;

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fcm_fcm__ = __webpack_require__(147);
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




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, fcm, toastCtrl) {
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
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; }); // <-- hide animation after 2s
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n\n	<splash></splash>\n\n</div>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" ></ion-nav>'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 632:
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

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(436);
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

/***/ 640:
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
            selector: 'splash',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\splash\splash.html"*/'<div class="spinner">\n\n	<img src="../../assets/Imagenes/icon.png" alt="">\n\n</div>\n\n<div class="grid-container">\n\n	<div class="row">\n\n		<h2 text-center class="nom">Ivagaza Federico</h2><br>\n\n	</div>\n\n	<div class="row">\n\n		<h2 text-center class="nom">Moreno Samantha</h2><br>\n\n	</div>\n\n	<div class="row">\n\n		<h2 text-center class="nom">Torrealba Paola</h2><br>\n\n	</div>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\splash\splash.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SplashComponent);
    return SplashComponent;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaProductoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(50);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
    function AltaProductoComponent(camera, auth, alert, scanner) {
        this.camera = camera;
        this.auth = auth;
        this.alert = alert;
        this.scanner = scanner;
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
                this.alert.mostrarMensaje("Hay campos sin rellenar");
            }
            if (this.foto == undefined) {
                this.alert.mostrarMensaje("Falta cargar una foto");
            }
        }
    };
    AltaProductoComponent.prototype.abrirCamara = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var imageName, options, result, image, pictures_1, error_1;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AltaProductoComponent);
    return AltaProductoComponent;
}());

//# sourceMappingURL=alta-producto.js.map

/***/ })

},[439]);
//# sourceMappingURL=main.js.map