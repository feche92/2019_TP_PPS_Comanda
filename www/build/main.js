webpackJsonp([12],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(168);
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
    function HomePage(navCtrl, navParams, data, serviceAlert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.serviceAlert = serviceAlert;
        this.mostrarSpiner = false;
        this.agrandar = "";
        this.botonUsuarios = "";
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
                    for (var i = 0; i < _this.usuarios.length; i++) {
                        if (_this.usuarios[i].correo == _this.email) {
                            /*let usuario=this.usuarios[i];
                            if(usuario.logueado) {
                              spiner.dismiss();
                              this.serviceAlert.mostrarErrorLiteral("Este usuario ya tiene una sesión activa actualmente.", "Error al registrarse");
                              break;
                            }
                            else {
                              usuario.logueado=true;
                              localStorage.setItem("usuario", JSON.stringify(usuario));
                              this.data.updateUsuario(usuario)
                              .then(response => {
                                spiner.dismiss();
                                this.navCtrl.setRoot(PrincipalPage, {usuario : res});
                              }, error => {
                                spiner.dismiss();
                                this.serviceAlert.mostrarError(error,"Error al iniciar sesión");
                              });
                            }
                            break;*/
                            var usuario = _this.usuarios[i];
                            localStorage.setItem("usuario", JSON.stringify(usuario));
                            _this.mostrarSpiner = false;
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */], { usuario: res });
                        }
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\home\home.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<!--div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n  <div class="flb">\n\n    <div class="Aligner-item Aligner-item--top">\n\n    </div>\n\n    <img src="assets/Imagenes/icon.png">\n\n    <div class="Aligner-item Aligner-item--bottom">\n\n    </div>\n\n  </div>\n\n</div-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Bienvenido</ion-title>\n\n      \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n\n  <div class="usuarios">\n\n\n\n    <button [class]="botonUsuarios" (click)="DesplegarUsuarios()">\n\n      <ion-icon name="person"></ion-icon>\n\n    </button>\n\n  \n\n    <div [class]="agrandar">\n\n        <ion-buttons end style="margin-right: 10px;">\n\n            <button ion-button icon-only (click)="NoDesplegarUsuarios()">\n\n              <ion-icon name="close"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n      <button (click)="SetearUsuario(\'pepe@gmail.com\', \'123456\')">Dueño</button>\n\n      <button (click)="SetearUsuario(\'samy32m@gmail.com\', \'222222\')">Supervisor</button>\n\n      <button (click)="SetearUsuario(\'federico@gmail.com\', \'123456\')">Mozo</button>\n\n      <button (click)="SetearUsuario(\'Seba@gmail.com\', \'123456\')">Cocinero</button>\n\n      <button (click)="SetearUsuario(\'bartender@gmail.com\', \'555555\')">Bartender</button>\n\n      <button (click)="SetearUsuario(\'metre@gmail.com\', \'666666\')">Metre</button>\n\n      <button (click)="SetearUsuario(\'repartidor@gmail.com\', \'777777\')">Repartidor</button>\n\n      <button (click)="SetearUsuario(\'paola@gmail.com\', \'123456\')">Cliente</button>\n\n    </div>\n\n  \n\n  </div>\n\n  <img class="icon" src="assets/Imagenes/icon.png">\n\n  <ion-item>\n\n    <ion-label floating>Correo electrónico: </ion-label>\n\n    <ion-input type="email" required [(ngModel)]="email" name="em"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Contraseña: </ion-label>\n\n    <ion-input type="password" required [(ngModel)]="pass" name="pas"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <button ion-button block color="primary" (click)="aceptar()">Iniciar Sesión</button>\n\n  <button ion-button block color="secondary" (click)="register()" >Registrarse</button>\n\n  <button ion-button block color="secondary" (click)="rellenar()" >Rellenar Datos Supervisor</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaDeMesaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(77);
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
            selector: 'page-alta-de-mesa',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\alta-de-mesa\alta-de-mesa.html"*/'<!--\n  Generated template for the AltaDeMesaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Registrar Mesa</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <ion-list inset>\n        <ion-item>\n          <ion-input type="text" class="numeroMesa" placeholder="Número de mesa" name="email" [(ngModel)]="numeroMesa" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" class="numeroMesa"  placeholder="Cantidad de comensales" name="password" [(ngModel)]="cantidadComensales"></ion-input>\n        </ion-item>\n        <select [(ngModel)]="tipo" class="numeroMesa" style="margin: 0 30px 0 0;width: 70%;display: block;\n        margin: 0 auto;">\n          <option value="normal">Tipo de mesa normal</option>\n          <option value="vip">Tipo de mesa VIP</option>\n          <option value="discapacitados">Tipo de mesa discapacitados</option>              \n        </select>\n        <ion-item>\n          <img [src]="foto" alt="" height="125px" width="125px">\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button ion-button outline color="red" class="sacarFoto" (click)="SacarFoto()">Sacar foto</button>\n      <button ion-button color="red" class="sacarFoto" (click)="InicializarLectorQR()">Leer QR</button>\n      <button ion-button color="red" class="botonAlta" (click)="Alta()" >Registrar mesa</button>\n    </ion-col>\n  </ion-row>\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\alta-de-mesa\alta-de-mesa.html"*/,
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(77);
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
            selector: 'page-altaempleado',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\altaempleado\altaempleado.html"*/'<!--\n  Generated template for the AltaempleadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Registro de empleado</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="vertical-container">\n      <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n    <h2>Agregar un empleado</h2>\n    <input type="text" placeholder="Correo electrónico" [(ngModel)]="correo" />\n    <input type="text" placeholder="Nombre" [(ngModel)]="nombre" />\n    <input type="text" placeholder="Apellido" [(ngModel)]="apellido" />\n    <div class="header" style="width: 75%;margin: 20px 0 20px 0;">\n      <input type="text" placeholder="DNI" style="margin: 0 15px 0 0; width: 50%" [(ngModel)]="dni" />\n      <input type="text" placeholder="CUIL" style="margin: 0;width: 50%" [(ngModel)]="cuil" />\n    </div>\n  \n    <input type="password" placeholder="Contraseña" [(ngModel)]="clave" />\n  \n    <select [(ngModel)]="tipo">\n      <option value="mozo">Mozo</option>\n      <option value="cocinero">Cocinero</option>\n      <option value="bartender">Bartender</option>\n      <option value="metre">Metre</option>\n      <option value="repartidor">Repartidor</option>\n    </select>\n  \n    <img [src]="foto" alt="" height="35px" width="35px">\n  \n    <div class="header" style="width: 75%;margin: 20px 0 20px 0;">\n      <button ion-button color="red" class="alta" style="margin: 0 30px 0 0;width: 50%" (click)="SacarFoto()">Sacar\n        foto</button>\n      <button ion-button color="red" class="alta" style="margin: 0;width: 50%" (click)="InicializarLectorQR()">QR</button>\n  \n    </div>\n  \n    <button ion-button color="red" [disabled]="estadoBoton" class="alta" (click)="Registrar()">Registrar</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\altaempleado\altaempleado.html"*/,
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoSupervisorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__principal_principal__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__encuesta_supervisor_encuesta_supervisor__ = __webpack_require__(171);
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
            selector: 'page-listado-supervisor',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-supervisor\listado-supervisor.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Listado de Usuarios</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<div class="imagen" *ngIf="ocultarImagen">\n\n  <ion-icon name="close" (click)="OcultarImagen()"></ion-icon>\n  <img [src]="image" alt="">\n\n</div>\n\n<ion-content padding>\n  <ng-container>\n    <h2 class="titulo"><u>Empleados</u></h2>\n  </ng-container>\n  <ion-list>\n\n    <ion-item *ngFor="let item of listaEmpleados">\n      <ion-thumbnail item-start (click)="MostrarImagen(item.foto)">\n        <img src={{item.foto}}>\n      </ion-thumbnail>\n\n      <h1>{{item.apellido}}, {{item.nombre}}</h1>\n      <p>Empleado • {{item.tipo}}</p>\n      <p>CUIL • {{item.cuil}}</p>\n\n      <button ion-button clear item-end (click)="MostrarEncuesta(item)">\n        <ion-icon name="clipboard"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n  <ng-container>\n    <h2 class="titulo"><u>Clientes</u></h2>\n  </ng-container>\n  <ion-list>\n\n    <ion-item *ngFor="let item of listaClientes">\n\n      <ion-thumbnail item-start (click)="MostrarImagen(item.foto)">\n        <img src={{item.foto}} />\n      </ion-thumbnail>\n\n      <h1>{{item.apellido}}, {{item.nombre}}</h1>\n      <p>{{item.tipo}}</p>\n      <p>DNI • {{item.dni}}</p>\n\n      <button ion-button clear item-end (click)="MostrarEncuesta(item)">\n        <ion-icon name="clipboard"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-supervisor\listado-supervisor.html"*/,
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaSupervisorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__estadisticas_supervisor_estadisticas_supervisor__ = __webpack_require__(172);
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
            selector: 'page-encuesta-supervisor',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\encuesta-supervisor\encuesta-supervisor.html"*/'<!--\n  Generated template for the EncuestaSupervisorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title></ion-title>\n    <ion-buttons>\n      <button ion-button (click)="VolverAtras()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Califique la conducta de {{usuario.apellido}}, {{usuario.nombre}}.</h1>\n  <div class="encuesta">\n    <div class="mi-range">\n\n      <ion-range [(ngModel)]="conducta" color="primary" pin="true" min="1" max="5" snaps="true" style="width: 100%;position: relative;"\n        (ngModelChange)="ModificarTextoRange()"></ion-range>\n      <span>{{textoRange}}</span>\n\n    </div>\n  </div>\n  <h1>¿Tuvo algún inconveniente con {{usuario.apellido}}, {{usuario.nombre}} en horas de servicio?</h1>\n  <div class="encuesta">\n    <ion-list radio-group [(ngModel)]="inconveniente">\n      <ion-item>\n        <ion-label>Sí</ion-label>\n        <ion-radio color="primary" value="1"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>No</ion-label>\n        <ion-radio color="primary" value="0"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf="inconveniente==\'1\'">\n  <h1>Escriba su comentario acerca de su incoveniente.</h1>\n\n  <div class="encuesta">\n\n    <textarea rows="4" cols="50" placeholder="Escribe tu comentario aquí..." [(ngModel)]="opinion"></textarea>\n\n  </div>\n  </div>\n  <div *ngIf="usuario.tipo!=\'cliente\'">\n  <h1>Seleccione el/los aspectos a tener en cuenta de {{usuario.apellido}}, {{usuario.nombre}}.</h1>\n  <div class="encuesta">\n    <ion-list style="left: -25px;">\n\n      <ion-item>\n        <ion-label>Mala conducta</ion-label>\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item1"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mala presentación</ion-label>\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item2"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Poca formalidad</ion-label>\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item3"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Buena conducta</ion-label>\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item4"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Buena presentacion</ion-label>\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item5"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Buena formalidad</ion-label>\n        <ion-checkbox color="primary" [(ngModel)]="aspectos.item6"></ion-checkbox>\n      </ion-item>\n\n    </ion-list>\n  </div>\n  </div>\n  <div *ngIf="usuario.tipo!=\'cliente\'">\n  <h1>¿Indique el nivel de compañerismo de {{usuario.apellido}}, {{usuario.nombre}} para los demas empleados?</h1>\n  <div class="encuesta">\n    <select [(ngModel)]="prescencia">\n      <option value="0">Muy bueno</option>\n      <option value="1">Bueno</option>\n      <option value="2">Normal</option>\n      <option value="3">Malo</option>\n    </select>\n  </div>\n  </div>\n  <div *ngIf="usuario.tipo==\'cliente\'">\n    <h1>¿Indique la propina que suele dejar {{usuario.apellido}}, {{usuario.nombre}}?</h1>\n    <div class="encuesta">\n      <select [(ngModel)]="propina">\n        <option value="0">Siempre deja propina</option>\n        <option value="1">Suele dejar buena propina</option>\n        <option value="2">Suele dejar poca propina</option>\n        <option value="3">Nunca deja propina</option>\n      </select>\n    </div>\n  </div>\n  <div *ngIf="usuario.tipo==\'cliente\'">\n    <h1>¿Indique la cantidad de veces que suele venir {{usuario.apellido}}, {{usuario.nombre}} al restaurante?</h1>\n    <div class="encuesta">\n      <ion-list radio-group [(ngModel)]="prescenciaCliente">\n        <ion-item>\n          <ion-label>Todos los dias</ion-label>\n          <ion-radio color="primary" value="0"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Bastante frecuente</ion-label>\n          <ion-radio color="primary" value="1"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Poco</ion-label>\n          <ion-radio color="primary" value="2"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Casi nunca</ion-label>\n          <ion-radio color="primary" value="3"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <button ion-button color="red" class="enviar" [disabled]="estadoBoton" (click)="HacerEncuesta()">Enviar encuesta</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\encuesta-supervisor\encuesta-supervisor.html"*/,
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

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticasSupervisorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(51);
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
            selector: 'page-estadisticas-supervisor',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\estadisticas-supervisor\estadisticas-supervisor.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Estadisticas</ion-title>\n    <ion-buttons>\n      <button ion-button (click)="VolverAtras()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="encuesta">\n    <div id="divCanvas" class="canvas">\n      \n    </div>\n  </div>\n  <div class="encuesta">\n\n    <div id="divCanvas" class="canvas">\n  \n      \n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\estadisticas-supervisor\estadisticas-supervisor.html"*/,
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(51);
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
            selector: 'page-reserva',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\reserva\reserva.html"*/'<!--\n  Generated template for the ReservaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title></ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <page-spinner *ngIf="mostrarSpiner"></page-spinner>\n  <div class="horizontal-container">\n    <div class="vertical-container">\n      <h1>Reservar</h1>\n      <ion-item>\n        <ion-label>Fecha</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" monthShortNames={{nombreDeLosMeses}} min={{minimo}} max={{maximo}}\n            cancelText="Cancelar" doneText="Aceptar" [(ngModel)]="fecha">\n        </ion-datetime>\n      </ion-item>\n  \n      <ion-item style="width: 50px;">\n        <ion-label>Hora</ion-label>\n        <ion-datetime displayFormat="HH:mm" cancelText="Cancelar" doneText="Aceptar" [(ngModel)]="hora"></ion-datetime>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Personas</ion-label>\n        <ion-datetime displayFormat="YY" min="2001" max="2008" cancelText="Cancelar" doneText="Aceptar" [(ngModel)]="cantidadPersonas">\n        </ion-datetime>\n      </ion-item>\n  \n      <button ion-button outline color="light" class="alta" [disabled]="estadoBoton" (click)="Reservar()">Reservar</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\reserva\reserva.html"*/,
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(51);
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
            selector: 'page-listado-reserva',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-reserva\listado-reserva.html"*/'<!--\n  Generated template for the ListadoReservaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Reservas</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="sin-elementos" *ngIf="ocultarSpinner  && reservasPendientes.length == 0 && reservasConfirmadas.length == 0">\n    <h1>No hay reservas disponibles.</h1>\n  </div>\n\n  <ng-container *ngIf="ocultarSpinner && reservasPendientes.length > 0">\n    <h2 class="titulo"><u>Reservas pendientes de confirmación</u></h2>\n  </ng-container>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of reservasPendientes">\n      <ion-thumbnail item-start (click)="MostrarImagen(item.foto)">\n        <img src={{item.foto}}>\n      </ion-thumbnail>\n\n      <h1>{{item.apellido}}, {{item.nombre}}</h1>\n      <p>Horario • {{item.horario}} Hs.</p>\n      <p>Cantidad de personas • {{item.cantPersonas}}</p>\n\n      <div item-end style="display: flex; align-items: center;align-content: center;flex-direction: column;">\n\n        <button ion-button clear (click)="DesplegarMesas(item)" style="margin-bottom: 20px;">\n          <ion-icon style="color: #CAFF4F;" name="checkmark-circle-outline"></ion-icon>\n        </button>\n\n        <button ion-button clear (click)="ConfirmarCancelarReserva(item)">\n          <ion-icon style="color: #FF0000;" name="close"></ion-icon>\n        </button>\n\n      </div>\n\n\n    </ion-item>\n\n  </ion-list>\n\n  <ng-container *ngIf="ocultarSpinner && reservasConfirmadas.length > 0">\n    <h2 class="titulo"><u>Reservas confirmadas</u></h2>\n  </ng-container>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of reservasConfirmadas">\n\n      <ion-thumbnail item-start (click)="MostrarImagen(item.foto)">\n        <img src={{item.foto}} />\n      </ion-thumbnail>\n\n      <h1>{{item.apellido}}, {{item.nombre}}</h1>\n      <p>Horario • {{item.horario}} Hs.</p>\n      <p>Cantidad de personas • {{item.cantPersonas}}</p>\n      <p>Mesa • {{item.mesa}}</p>\n\n      <button item-end ion-button clear (click)="ConfirmarCancelarReserva(item)">\n        <ion-icon style="color: #FF0000;" name="close"></ion-icon>\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div [ngClass]="{\'interfaz-mesas\':true,\'ocultar\':ocultarInterfazMesas}">\n\n    <h1>Selecciona una mesa para la reserva</h1>\n    <div class="mesas">\n      <button ion-button color="red" class="mesa {{item.seleccionado}}" (click)="Seleccionar(item.numero)" *ngFor="let item of mesas">{{item.numero}}</button>\n    </div>\n\n    <div class="botones-interfaz-mesa">\n      <button ion-button color="red" (click)="OcultarInterfaz()">Cancelar</button>\n      <button ion-button color="red" (click)="Confirmar()">Confirmar</button>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-reserva\listado-reserva.html"*/,
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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirPlatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(51);
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
                    _this.bebidas.push({ "nombre": _this.productos[i].nombre, "descripcion": _this.productos[i].descripcion, "foto": _this.productos[i].foto, "cantidad": 0, "tipo": "bebida", "tiempoPromedioElaboracion": _this.productos[i].tiempoPromedioElaboracion });
                }
                else {
                    _this.platos.push({ "nombre": _this.productos[i].nombre, "descripcion": _this.productos[i].descripcion, "foto": _this.productos[i].foto, "cantidad": 0, "tipo": "plato", "tiempoPromedioElaboracion": _this.productos[i].tiempoEstimadoElaboracion });
                }
            }
            spiner.dismiss();
            console.log(_this.bebidas);
            console.log(_this.platos);
        });
    }
    PedirPlatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedirPlatosPage');
    };
    PedirPlatosPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
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
            for (var i = 0; i < this.pedidoActual.length; i++) {
                if (this.pedidoActual[i].cantidad > 0) {
                    this.montoActual += this.pedidoActual[i].precio * this.pedidoActual[i].cantidad;
                }
            }
            this.monto = true;
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
        this.monto = true;
    };
    PedirPlatosPage.prototype.CancelarPedido = function () {
        this.ocultarBebidas = false;
        this.ocultarPLatos = false;
    };
    PedirPlatosPage.prototype.PedirFinal = function () {
        var _this = this;
        var spiner = this.spinner.getAllPageSpinner();
        spiner.present();
        var momentoActual = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date());
        var data = {
            "correo": this.usuario.correo, "nombre": this.usuario.nombre, "apellido": this.usuario.apellido, "estado": "pendiente",
            "productos": this.pedidoActual, "mesa": "", "horario": momentoActual.format("DD/MM/YYYY HH:mm"), "montoTotal": ""
        };
        this.auth.nuevoPedido(data).then(function (res) {
            spiner.dismiss();
            _this.error.mostrarMensaje("Su pedido ha sido enviado en breve se lo llevaremos...");
            setTimeout(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
            }, 1500);
        }).catch(function (error) {
            _this.error.mostrarErrorLiteral(error, "Hubo un error al enviar su pedido.");
            spiner.dismiss();
        });
    };
    PedirPlatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedir-platos',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\pedir-platos\pedir-platos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title></ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<div class="platos" *ngIf="ocultarPLatos==true">\n  <h1 class="tituloPlatos"  >{{titulo}}:</h1>\n  <ion-list>\n\n    <ion-item *ngFor="let item of platos">\n      <ion-thumbnail item-start>\n        <img src={{item.foto}}>\n      </ion-thumbnail>\n\n      <h1>{{item.nombre}}</h1>\n      <p>Descripcion • {{item.descripcion}}</p>\n      <p>cantidad • {{item.cantidad}}</p>\n\n      <button ion-button clear item-end (click)="AumentarCantidad(item)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <button ion-button clear item-end (click)="DisminuirCantidad(item)">\n        <ion-icon name="remove"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n  <button ion-button class="aceptarBtn" color="red" color="celeste" (click)="AceptarPedido(\'plato\')">Aceptar</button>\n  <button ion-button class="cancelarBtn" color="red" color="celeste" (click)="CancelarPedido()">Cancelar</button>\n</div>\n\n<div class="platos" *ngIf="ocultarBebidas==true">\n  <h1 class="tituloPlatos"  >{{titulo}}:</h1>\n  <ion-list>\n\n    <ion-item *ngFor="let item of bebidas">\n      <ion-thumbnail item-start>\n        <img src={{item.foto}}>\n      </ion-thumbnail>\n\n      <h1>{{item.nombre}}</h1>\n      <p>Descripcion • {{item.descripcion}}</p>\n      <p>cantidad • {{item.cantidad}}</p>\n\n      <button ion-button clear item-end (click)="AumentarCantidad(item)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <button ion-button clear item-end (click)="DisminuirCantidad(item)">\n        <ion-icon name="remove"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n  <button ion-button class="aceptarBtn" color="red" color="celeste" (click)="AceptarPedido(\'bebida\')">Aceptar</button>\n  <button ion-button class="cancelarBtn" color="red" color="celeste" (click)="CancelarPedido()">Cancelar</button>\n</div>\n\n<ion-content padding>\n  <div class="contenido">\n    <h1 class="tituloPag" >¡Haga su pedido!</h1>\n    <div *ngIf="monto">\n      <h1>Su pedido actual</h1>\n      <ion-list>\n        <ion-item *ngFor="let item of pedidoActual">\n          <ion-label>{{item.nombre}}  --  {{item.cantidad}}</ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class="botonespp">\n          <button class="btnPlatos" (click)="Platos()" ion-button color="primary"  ><img src="assets/Imagenes/comida.png"> Platos</button>\n          <button class="btnBebidas"  (click)="Bebidas()" ion-button color="primary" ><img src="assets/Imagenes/bebidas.png">Bebidas</button>\n    </div>\n    <!--input class="inpDireccion" type="text" placeholder="Su direcci&oacute;n"-->\n    <button class="btnPedir" (click)="PedirFinal()" ion-button color="primary" >¡Pedir!</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\pedir-platos\pedir-platos.html"*/,
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoMesasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(24);
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
            selector: 'page-listado-mesas',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-mesas\listado-mesas.html"*/'<!--\n  Generated template for the ListadoMesasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Mesas</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n        <button ion-button icon-only (click)="back()">\n          <ion-icon name="arrow-round-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="flex-v first-item">\n    <ul class="flex-container wrap center-horizontal">\n      <li class="flex-item" *ngFor="let item of mesas" (click)="elejirMesa(item)">\n        <div class="category-image-container width-100" [style.background-image]="\'url(\'+ item.foto +\')\'">\n          <span>{{item.estado}}</span>\n        </div>\n      </li>\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\listado-mesas\listado-mesas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], ListadoMesasPage);
    return ListadoMesasPage;
}());

//# sourceMappingURL=listado-mesas.js.map

/***/ }),

/***/ 209:
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
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(28);
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
    AuthProvider.prototype.updateUsuario = function (data) {
        return this.db.collection('usuarios').doc(data.id).update(data);
    };
    AuthProvider.prototype.guardarUsuario = function (data) {
        return this.db.collection('usuarios').add(data);
    };
    AuthProvider.prototype.guardarCliente = function (data) {
        return this.db.collection('clientes').add(data);
    };
    AuthProvider.prototype.crearUsuario = function (correo, pass) {
        return this.auth.auth.createUserWithEmailAndPassword(correo, pass);
    };
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
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alta-de-mesa/alta-de-mesa.module": [
		636,
		11
	],
	"../pages/altaempleado/altaempleado.module": [
		637,
		10
	],
	"../pages/encuesta-supervisor/encuesta-supervisor.module": [
		639,
		9
	],
	"../pages/estadisticas-supervisor/estadisticas-supervisor.module": [
		638,
		8
	],
	"../pages/listado-mesas/listado-mesas.module": [
		640,
		7
	],
	"../pages/listado-reserva/listado-reserva.module": [
		641,
		6
	],
	"../pages/listado-supervisor/listado-supervisor.module": [
		642,
		5
	],
	"../pages/pedir-platos/pedir-platos.module": [
		643,
		4
	],
	"../pages/principal/principal.module": [
		644,
		3
	],
	"../pages/register/register.module": [
		645,
		2
	],
	"../pages/reserva/reserva.module": [
		646,
		1
	],
	"../pages/spinner/spinner.module": [
		647,
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
webpackAsyncContext.id = 251;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaSupervisorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(77);
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
        this.perfil = "supervisor";
    }
    AltaSupervisorComponent.prototype.alta = function () {
        var _this = this;
        if (this.nombre != undefined && this.apellido != undefined && this.dni != undefined && this.cuil != undefined
            && this.foto != undefined) {
            if (this.dni.toString().length == 8 && this.cuil.toString().length == 11 && this.clave.length >= 6) {
                this.auth.crearUsuario(this.email, this.clave).then(function (res) {
                    var data = {
                        'nombre': _this.nombre,
                        'apellido': _this.apellido,
                        'dni': _this.dni,
                        'cuil': _this.cuil,
                        'foto': _this.foto,
                        'perfil': _this.perfil,
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
                    this.alert.mostrarMensaje("El dni debe tener 8 números");
                }
                if (this.cuil.toString().length != 11) {
                    this.alert.mostrarMensaje("El cuil debe tener 11 números");
                }
                if (this.clave.length < 6) {
                    this.alert.mostrarMensaje("La clave debe tener por lo menos 6 caracteres");
                }
                if (this.foto == undefined) {
                    this.alert.mostrarMensaje("Falta cargar una foto");
                }
            }
        }
        else {
            if (this.nombre == undefined || this.apellido == undefined || this.dni == undefined ||
                this.cuil == undefined || this.email == undefined) {
                this.alert.mostrarMensaje("Hay campos sin rellenar");
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
            selector: 'alta-supervisor',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-supervisor\alta-supervisor.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Registrar Supervisor</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!--img class="icon" src="assets/Imagenes/icon.png"-->\n\n  <ion-item>\n\n    <ion-label floating>Nombre </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="nombre" name="nombre"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Apellido </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="apellido" name="apellido"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>DNI </ion-label>\n\n    <ion-input type="number" minlength="8" maxlength="8" required [(ngModel)]="dni" name="dni"></ion-input>\n\n    <button ion-button block color="primary">Escanear DNI</button>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>CUIL </ion-label>\n\n    <ion-input type="text" minlength="11" maxlength="11" required [(ngModel)]="cuil" name="cuil"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Perfil </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="perfil" name="perfil" disabled></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n    <ion-label floating>Correo Electrónico </ion-label>\n\n    <ion-input type="email" required [(ngModel)]="email" name="email"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Clave </ion-label>\n\n    <ion-input type="password" minlength="6" required [(ngModel)]="clave" name="clave"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <button ion-button block color="primary" (click)="abrirCamara()">Sacar Foto</button>\n\n  <button ion-button block color="primary" (click)="escanear()">Escanear DNI</button>\n\n  <button ion-button block color="secondary" (click)="alta()">Alta</button>\n\n  <button ion-button block color="danger">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-supervisor\alta-supervisor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AltaSupervisorComponent);
    return AltaSupervisorComponent;
}());

//# sourceMappingURL=alta-supervisor.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(77);
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
    function AltaClienteComponent(camera, auth, alert, scanner) {
        this.camera = camera;
        this.auth = auth;
        this.alert = alert;
        this.scanner = scanner;
        this.firebase = __WEBPACK_IMPORTED_MODULE_2_firebase__;
        this.perfil = "cliente registrado"; //cliente anonimo
        this.anonimo = false;
        console.log('Hello AltaClienteComponent Component');
    }
    AltaClienteComponent.prototype.alta = function () {
        var _this = this;
        var data;
        if (this.nombre != undefined && this.foto != undefined) {
            if (this.anonimo) {
                this.perfil = "cliente anonimo";
                data = {
                    'nombre': this.nombre,
                    'foto': this.foto,
                    'perfil': this.perfil,
                    'estado': '',
                    'logueado': false
                };
            }
            else {
                if (this.apellido != undefined && this.dni != undefined) {
                    if (this.dni.toString().length == 8) {
                        this.perfil = "cliente registrado";
                        data = {
                            'nombre': this.nombre,
                            'apellido': this.apellido,
                            'dni': this.dni,
                            'foto': this.foto,
                            'perfil': this.perfil,
                            'estado': '',
                            'logueado': false
                        };
                    }
                    else {
                        this.alert.mostrarMensaje("El dni debe tener 8 números");
                    }
                }
                else {
                    this.alert.mostrarMensaje("Hay campos sin rellenar");
                }
            }
            this.auth.guardarCliente(data).then(function (response) {
                _this.alert.mostrarMensaje("Cliente registrado");
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
            selector: 'alta-cliente',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-cliente\alta-cliente.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>Registro Cliente</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-checkbox color="primary" [(ngModel)]="anonimo"></ion-checkbox> <h4 class="checkbox">Hacerse anonimo </h4>\n\n  <ion-item>\n\n    <ion-label floating>Nombre </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="nombre" name="nombre"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="!anonimo">\n\n    <ion-label floating>Apellido </ion-label>\n\n    <ion-input type="text" required [(ngModel)]="apellido" name="apellido"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="!anonimo">\n\n    <ion-label floating>DNI </ion-label>\n\n    <ion-input type="number" minlength="8" maxlength="8" required [(ngModel)]="dni" name="dni"></ion-input>\n\n    <button ion-button block color="primary">Escanear DNI</button>\n\n  </ion-item>\n\n  <br>\n\n  <button ion-button block color="primary" (click)="abrirCamara()">Sacar Foto</button>\n\n  <button *ngIf="!anonimo" ion-button block color="primary" (click)="escanear()">Escanear DNI</button>\n\n  <button ion-button block color="secondary" (click)="alta()">Registrar</button>\n\n  <button ion-button block color="danger">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\alta-cliente\alta-cliente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AltaClienteComponent);
    return AltaClienteComponent;
}());

//# sourceMappingURL=alta-cliente.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__altaempleado_altaempleado__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alta_de_mesa_alta_de_mesa__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_alta_supervisor_alta_supervisor__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__listado_supervisor_listado_supervisor__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_alta_cliente_alta_cliente__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reserva_reserva__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_fcm_fcm__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operators__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__listado_reserva_listado_reserva__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pedir_platos_pedir_platos__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__listado_mesas_listado_mesas__ = __webpack_require__(176);
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
        fcm.listenToNotifications().pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["tap"])(function (msg) {
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
                    { accion: "Confeccionar y ver encuestas", img: "encuesta.jpg", ruta: __WEBPACK_IMPORTED_MODULE_8__listado_supervisor_listado_supervisor__["a" /* ListadoSupervisorPage */] },
                    { accion: "Nueva mesa", img: "ocupar-mesa.jpg", ruta: __WEBPACK_IMPORTED_MODULE_4__alta_de_mesa_alta_de_mesa__["a" /* AltaDeMesaPage */] },
                    { accion: "Confirmar reservas", img: "reserva.jpg", ruta: __WEBPACK_IMPORTED_MODULE_13__listado_reserva_listado_reserva__["a" /* ListadoReservaPage */] },
                ];
                break;
            case "cliente registrado":
            case "cliente anonimo":
                this.acciones = [
                    { accion: "Registrarse", img: "nuevo-empleado.jpg", ruta: __WEBPACK_IMPORTED_MODULE_9__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */] }
                ];
                break;
            case "cliente":
                this.acciones = [
                    { accion: "Reservar", img: "reserva.jpg", ruta: __WEBPACK_IMPORTED_MODULE_10__reserva_reserva__["a" /* ReservaPage */] },
                    { accion: "Pedir platos y bebidas", img: "pedido.jpg", ruta: __WEBPACK_IMPORTED_MODULE_14__pedir_platos_pedir_platos__["a" /* PedirPlatosPage */] }
                ];
                break;
            case "mozo":
                this.acciones = [
                    { accion: "Tomar pedido", img: "pedido.jpg", ruta: __WEBPACK_IMPORTED_MODULE_15__listado_mesas_listado_mesas__["a" /* ListadoMesasPage */] }
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
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\principal\principal.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of acciones" (click)="openPage(p.ruta)">\n        {{p.accion}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-header>\n\n  <ion-navbar color="primary" #content>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Principal</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="power"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page" padding>\n  <button ion-button *ngFor="let item of acciones" (click)="openPage(item.ruta)">\n    <div class="sombreado"></div>\n    <img src="../../assets/Imagenes/{{item.img}}" />\n    <span>{{item.accion}}</span>\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-spinner',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\spinner\spinner.html"*/'\n<div class="spinner">\n  <img class="rotar" src="assets/Imagenes/logo.png">\n</div>'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\pages\spinner\spinner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SpinnerPage);
    return SpinnerPage;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(555);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_spinner_spinner__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_altaempleado_altaempleado__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_alta_de_mesa_alta_de_mesa__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_listado_supervisor_listado_supervisor__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_encuesta_supervisor_encuesta_supervisor__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reserva_reserva__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_listado_reserva_listado_reserva__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_estadisticas_supervisor_estadisticas_supervisor__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pedir_platos_pedir_platos__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_listado_mesas_listado_mesas__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_fire__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_fire_firestore__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_fire_auth__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_firebase__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__globalConfig__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_alert_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_spinner_spinner__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_json_json__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_alta_supervisor_alta_supervisor__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_splash_splash__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_alta_cliente_alta_cliente__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_fcm_fcm__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//Firebase













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
                __WEBPACK_IMPORTED_MODULE_30__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_splash_splash__["a" /* SplashComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listado_supervisor_listado_supervisor__["a" /* ListadoSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_32__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_encuesta_supervisor_encuesta_supervisor__["a" /* EncuestaSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reserva_reserva__["a" /* ReservaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_listado_reserva_listado_reserva__["a" /* ListadoReservaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_estadisticas_supervisor_estadisticas_supervisor__["a" /* EstadisticasSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pedir_platos_pedir_platos__["a" /* PedirPlatosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_listado_mesas_listado_mesas__["a" /* ListadoMesasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alta-de-mesa/alta-de-mesa.module#AltaDeMesaPageModule', name: 'AltaDeMesaPage', segment: 'alta-de-mesa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/altaempleado/altaempleado.module#AltaempleadoPageModule', name: 'AltaempleadoPage', segment: 'altaempleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estadisticas-supervisor/estadisticas-supervisor.module#EstadisticasSupervisorPageModule', name: 'EstadisticasSupervisorPage', segment: 'estadisticas-supervisor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/encuesta-supervisor/encuesta-supervisor.module#EncuestaSupervisorPageModule', name: 'EncuestaSupervisorPage', segment: 'encuesta-supervisor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado-mesas/listado-mesas.module#ListadoMesasPageModule', name: 'ListadoMesasPage', segment: 'listado-mesas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado-reserva/listado-reserva.module#ListadoReservaPageModule', name: 'ListadoReservaPage', segment: 'listado-reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado-supervisor/listado-supervisor.module#ListadoSupervisorPageModule', name: 'ListadoSupervisorPage', segment: 'listado-supervisor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedir-platos/pedir-platos.module#PedirPlatosPageModule', name: 'PedirPlatosPage', segment: 'pedir-platos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva/reserva.module#ReservaPageModule', name: 'ReservaPage', segment: 'reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/spinner/spinner.module#SpinnerPageModule', name: 'SpinnerPage', segment: 'spinner', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_25__globalConfig__["a" /* configs */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_23__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_fire_firestore__["b" /* AngularFirestoreModule */],
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
                __WEBPACK_IMPORTED_MODULE_30__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listado_supervisor_listado_supervisor__["a" /* ListadoSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_30__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_alta_cliente_alta_cliente__["a" /* AltaClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_encuesta_supervisor_encuesta_supervisor__["a" /* EncuestaSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reserva_reserva__["a" /* ReservaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_listado_reserva_listado_reserva__["a" /* ListadoReservaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_estadisticas_supervisor_estadisticas_supervisor__["a" /* EstadisticasSupervisorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pedir_platos_pedir_platos__["a" /* PedirPlatosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_listado_mesas_listado_mesas__["a" /* ListadoMesasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_22__angular_fire_firestore__["c" /* FirestoreSettingsToken */], useValue: {} },
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_26__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_json_json__["a" /* JsonProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_fcm_fcm__["a" /* FcmProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 263,
	"./af.js": 263,
	"./ar": 264,
	"./ar-dz": 265,
	"./ar-dz.js": 265,
	"./ar-kw": 266,
	"./ar-kw.js": 266,
	"./ar-ly": 267,
	"./ar-ly.js": 267,
	"./ar-ma": 268,
	"./ar-ma.js": 268,
	"./ar-sa": 269,
	"./ar-sa.js": 269,
	"./ar-tn": 270,
	"./ar-tn.js": 270,
	"./ar.js": 264,
	"./az": 271,
	"./az.js": 271,
	"./be": 272,
	"./be.js": 272,
	"./bg": 273,
	"./bg.js": 273,
	"./bm": 274,
	"./bm.js": 274,
	"./bn": 275,
	"./bn.js": 275,
	"./bo": 276,
	"./bo.js": 276,
	"./br": 277,
	"./br.js": 277,
	"./bs": 278,
	"./bs.js": 278,
	"./ca": 279,
	"./ca.js": 279,
	"./cs": 280,
	"./cs.js": 280,
	"./cv": 281,
	"./cv.js": 281,
	"./cy": 282,
	"./cy.js": 282,
	"./da": 283,
	"./da.js": 283,
	"./de": 284,
	"./de-at": 285,
	"./de-at.js": 285,
	"./de-ch": 286,
	"./de-ch.js": 286,
	"./de.js": 284,
	"./dv": 287,
	"./dv.js": 287,
	"./el": 288,
	"./el.js": 288,
	"./en-SG": 289,
	"./en-SG.js": 289,
	"./en-au": 290,
	"./en-au.js": 290,
	"./en-ca": 291,
	"./en-ca.js": 291,
	"./en-gb": 292,
	"./en-gb.js": 292,
	"./en-ie": 293,
	"./en-ie.js": 293,
	"./en-il": 294,
	"./en-il.js": 294,
	"./en-nz": 295,
	"./en-nz.js": 295,
	"./eo": 296,
	"./eo.js": 296,
	"./es": 297,
	"./es-do": 298,
	"./es-do.js": 298,
	"./es-us": 299,
	"./es-us.js": 299,
	"./es.js": 297,
	"./et": 300,
	"./et.js": 300,
	"./eu": 301,
	"./eu.js": 301,
	"./fa": 302,
	"./fa.js": 302,
	"./fi": 303,
	"./fi.js": 303,
	"./fo": 304,
	"./fo.js": 304,
	"./fr": 305,
	"./fr-ca": 306,
	"./fr-ca.js": 306,
	"./fr-ch": 307,
	"./fr-ch.js": 307,
	"./fr.js": 305,
	"./fy": 308,
	"./fy.js": 308,
	"./ga": 309,
	"./ga.js": 309,
	"./gd": 310,
	"./gd.js": 310,
	"./gl": 311,
	"./gl.js": 311,
	"./gom-latn": 312,
	"./gom-latn.js": 312,
	"./gu": 313,
	"./gu.js": 313,
	"./he": 314,
	"./he.js": 314,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 316,
	"./hr.js": 316,
	"./hu": 317,
	"./hu.js": 317,
	"./hy-am": 318,
	"./hy-am.js": 318,
	"./id": 319,
	"./id.js": 319,
	"./is": 320,
	"./is.js": 320,
	"./it": 321,
	"./it-ch": 322,
	"./it-ch.js": 322,
	"./it.js": 321,
	"./ja": 323,
	"./ja.js": 323,
	"./jv": 324,
	"./jv.js": 324,
	"./ka": 325,
	"./ka.js": 325,
	"./kk": 326,
	"./kk.js": 326,
	"./km": 327,
	"./km.js": 327,
	"./kn": 328,
	"./kn.js": 328,
	"./ko": 329,
	"./ko.js": 329,
	"./ku": 330,
	"./ku.js": 330,
	"./ky": 331,
	"./ky.js": 331,
	"./lb": 332,
	"./lb.js": 332,
	"./lo": 333,
	"./lo.js": 333,
	"./lt": 334,
	"./lt.js": 334,
	"./lv": 335,
	"./lv.js": 335,
	"./me": 336,
	"./me.js": 336,
	"./mi": 337,
	"./mi.js": 337,
	"./mk": 338,
	"./mk.js": 338,
	"./ml": 339,
	"./ml.js": 339,
	"./mn": 340,
	"./mn.js": 340,
	"./mr": 341,
	"./mr.js": 341,
	"./ms": 342,
	"./ms-my": 343,
	"./ms-my.js": 343,
	"./ms.js": 342,
	"./mt": 344,
	"./mt.js": 344,
	"./my": 345,
	"./my.js": 345,
	"./nb": 346,
	"./nb.js": 346,
	"./ne": 347,
	"./ne.js": 347,
	"./nl": 348,
	"./nl-be": 349,
	"./nl-be.js": 349,
	"./nl.js": 348,
	"./nn": 350,
	"./nn.js": 350,
	"./pa-in": 351,
	"./pa-in.js": 351,
	"./pl": 352,
	"./pl.js": 352,
	"./pt": 353,
	"./pt-br": 354,
	"./pt-br.js": 354,
	"./pt.js": 353,
	"./ro": 355,
	"./ro.js": 355,
	"./ru": 356,
	"./ru.js": 356,
	"./sd": 357,
	"./sd.js": 357,
	"./se": 358,
	"./se.js": 358,
	"./si": 359,
	"./si.js": 359,
	"./sk": 360,
	"./sk.js": 360,
	"./sl": 361,
	"./sl.js": 361,
	"./sq": 362,
	"./sq.js": 362,
	"./sr": 363,
	"./sr-cyrl": 364,
	"./sr-cyrl.js": 364,
	"./sr.js": 363,
	"./ss": 365,
	"./ss.js": 365,
	"./sv": 366,
	"./sv.js": 366,
	"./sw": 367,
	"./sw.js": 367,
	"./ta": 368,
	"./ta.js": 368,
	"./te": 369,
	"./te.js": 369,
	"./tet": 370,
	"./tet.js": 370,
	"./tg": 371,
	"./tg.js": 371,
	"./th": 372,
	"./th.js": 372,
	"./tl-ph": 373,
	"./tl-ph.js": 373,
	"./tlh": 374,
	"./tlh.js": 374,
	"./tr": 375,
	"./tr.js": 375,
	"./tzl": 376,
	"./tzl.js": 376,
	"./tzm": 377,
	"./tzm-latn": 378,
	"./tzm-latn.js": 378,
	"./tzm.js": 377,
	"./ug-cn": 379,
	"./ug-cn.js": 379,
	"./uk": 380,
	"./uk.js": 380,
	"./ur": 381,
	"./ur.js": 381,
	"./uz": 382,
	"./uz-latn": 383,
	"./uz-latn.js": 383,
	"./uz.js": 382,
	"./vi": 384,
	"./vi.js": 384,
	"./x-pseudo": 385,
	"./x-pseudo.js": 385,
	"./yo": 386,
	"./yo.js": 386,
	"./zh-cn": 387,
	"./zh-cn.js": 387,
	"./zh-hk": 388,
	"./zh-hk.js": 388,
	"./zh-tw": 389,
	"./zh-tw.js": 389
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
webpackContext.id = 605;

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fcm_fcm__ = __webpack_require__(145);
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
            console.log("splash");
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

/***/ 626:
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

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(628);
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

/***/ 635:
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
        console.log('Hello SplashComponent Component');
        this.reproducir('servicio-inicio');
    }
    SplashComponent.prototype.reproducir = function (nom_audio) {
        var audio = new Audio('../../assets/sounds/' + nom_audio + '.mp3');
        audio.play();
    };
    SplashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'splash',template:/*ion-inline-start:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\splash\splash.html"*/'<div class="spinner">\n\n	<img src="../../assets/Imagenes/icon.png" alt="">\n\n</div>\n\n<div class="grid-container">\n\n	<div class="row">\n\n		<h2 class="nom">Ivagaza Federico</h2><br>\n\n	</div>\n\n	<div class="row">\n\n		<h2 class="nom">Moreno Samantha</h2><br>\n\n	</div>\n\n	<div class="row">\n\n		<h2 class="nom">Torrealba Paola</h2><br>\n\n	</div>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\bocasosmivida\Documents\FEDERICO\projectos\comanda\src\components\splash\splash.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SplashComponent);
    return SplashComponent;
}());

//# sourceMappingURL=splash.js.map

/***/ })

},[433]);
//# sourceMappingURL=main.js.map