webpackJsonp([4],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(90);
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
        this.splash = true;
        this.usuarios = new Array();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get('fromApp')) {
            this.splash = false;
        }
        else {
            setTimeout(function () {
                _this.splash = false;
            }, 5000);
        }
    };
    HomePage.prototype.rellenar = function () {
        this.email = "samy32m@gmail.com";
        this.pass = "222222";
    };
    HomePage.prototype.aceptar = function () {
        var _this = this;
        if (this.validForm()) {
            var spiner_1 = this.spiner.getAllPageSpinner();
            spiner_1.present();
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
                            spiner_1.dismiss();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */], { usuario: res });
                        }
                    }
                });
            }).catch(function (error) {
                spiner_1.dismiss();
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
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/home/home.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top">\n    </div>\n    <img src="assets/Imagenes/icon.png">\n    <div class="Aligner-item Aligner-item--bottom">\n    </div>\n  </div>\n</div>\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>Bienvenido</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img class="icon" src="assets/Imagenes/icon.png">\n  <ion-item>\n    <ion-label floating>Correo electrónico: </ion-label>\n    <ion-input type="email" required [(ngModel)]="email" name="em"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Contraseña: </ion-label>\n    <ion-input type="password" required [(ngModel)]="pass" name="pas"></ion-input>\n  </ion-item>\n  <br>\n  <button ion-button block color="primary" (click)="aceptar()">Iniciar Sesión</button>\n  <button ion-button block color="secondary" (click)="register()" >Registrarse</button>\n  <button ion-button block color="secondary" (click)="rellenar()" >Rellenar Datos Supervisor</button>\n</ion-content>\n'/*ion-inline-end:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaDeMesaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(142);
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
    function AltaDeMesaPage(navCtrl, navParams, auth, error, spiner, camera, barcodeScanner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.spiner = spiner;
        this.camera = camera;
        this.barcodeScanner = barcodeScanner;
        this.tipo = "normal";
        this.foto = "../../assets/Imagenes/ocupar-mesa.jpg";
        this.mesas = new Array();
        this.auth.getMesas().subscribe(function (lista) {
            _this.mesas = lista;
        });
    }
    AltaDeMesaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AltaDeMesaPage');
    };
    AltaDeMesaPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    AltaDeMesaPage.prototype.Alta = function () {
        var _this = this;
        var spiner = this.spiner.getAllPageSpinner();
        spiner.present();
        if (!this.numeroMesa || !this.cantidadComensales || !this.tipo || this.foto == "") {
            this.error.mostrarErrorLiteral("Todos los campos deben ser completados.");
            spiner.dismiss();
            return;
        }
        if (this.cantidadComensales < 1 || this.cantidadComensales > 8) {
            this.error.mostrarErrorLiteral("Los comensales solo pueden ser de 1 a 8.");
            spiner.dismiss();
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
                "tipo": this.tipo, "estado": "libre"
            };
            this.auth.guardarMesa(data).then(function (res) {
                _this.error.mostrarMensaje("mesa registrada");
                _this.LimpiarCampos();
                spiner.dismiss();
            }).catch(function (error) {
                _this.error.mostrarError(error, "error al registrar la mesa");
                spiner.dismiss();
            });
        }
        else {
            spiner.dismiss();
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
            selector: 'page-alta-de-mesa',template:/*ion-inline-start:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/alta-de-mesa/alta-de-mesa.html"*/'<!--\n  Generated template for the AltaDeMesaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Registrar Mesa</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <ion-list inset>\n        <ion-item>\n          <ion-input type="text" class="numeroMesa" placeholder="Número de mesa" name="email" [(ngModel)]="numeroMesa" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" class="numeroMesa"  placeholder="Cantidad de comensales" name="password" [(ngModel)]="cantidadComensales"></ion-input>\n        </ion-item>\n        <select [(ngModel)]="tipo" class="numeroMesa" style="margin: 0 30px 0 0;width: 70%;display: block;\n        margin: 0 auto;">\n          <option value="normal">Tipo de mesa normal</option>\n          <option value="vip">Tipo de mesa VIP</option>\n          <option value="discapacitados">Tipo de mesa discapacitados</option>              \n        </select>\n        <ion-item>\n          <img [src]="foto" alt="" height="125px" width="125px">\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button ion-button outline color="red" class="sacarFoto" (click)="SacarFoto()">Sacar foto</button>\n      <button ion-button color="red" class="sacarFoto" (click)="InicializarLectorQR()">Leer QR</button>\n      <button ion-button color="red" class="botonAlta" (click)="Alta()" >Registrar mesa</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/alta-de-mesa/alta-de-mesa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AltaDeMesaPage);
    return AltaDeMesaPage;
}());

//# sourceMappingURL=alta-de-mesa.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(142);
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
    function AltaempleadoPage(navCtrl, navParams, auth, error, spiner, camera, barcodeScanner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.error = error;
        this.spiner = spiner;
        this.camera = camera;
        this.barcodeScanner = barcodeScanner;
        this.tipo = "mozo";
        this.foto = "../../assets/Imagenes/perfil.png";
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
        var spiner = this.spiner.getAllPageSpinner();
        spiner.present();
        if (!this.correo || !this.clave || !this.nombre || !this.apellido || !this.dni || !this.cuil) {
            this.error.mostrarErrorLiteral("Todos los campos deben ser completados.");
            spiner.dismiss();
            return;
        }
        if (!this.validarDNI(this.dni)) {
            this.error.mostrarErrorLiteral("El DNI ingresado no es válido.");
            spiner.dismiss();
            return;
        }
        if (!this.validarCuil(this.cuil)) {
            this.error.mostrarErrorLiteral("El CUIL ingresado no es válido.");
            spiner.dismiss();
            return;
        }
        var esValido = true;
        for (var i = 0; i < this.usuarios.length; i++) {
            if (parseInt(this.usuarios[i].DNI) == parseInt(this.dni)) {
                this.error.mostrarErrorLiteral("El DNI ingresado ya corresponde a otro usuario registrado.");
                esValido = false;
                break;
            }
        }
        if (esValido) {
            this.auth.crearUsuario(this.correo, this.clave).then(function (res) {
                var data = {
                    "correo": _this.correo, "CUIL": _this.cuil, "DNI": _this.dni, "nombre": _this.nombre, "apellido": _this.apellido,
                    "estado": "", "foto": _this.foto, "logueado": false, "tipo": _this.tipo
                };
                _this.auth.guardarUsuario(data).then(function (res) {
                    _this.error.mostrarMensaje("Empleado registrado");
                    _this.LimpiarCampos();
                    spiner.dismiss();
                });
            }).catch(function (error) {
                _this.error.mostrarError(error, "error al registrar el usuario");
                spiner.dismiss();
            });
        }
        else {
            spiner.dismiss();
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
            selector: 'page-altaempleado',template:/*ion-inline-start:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/altaempleado/altaempleado.html"*/'<!--\n  Generated template for the AltaempleadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Registro de empleado</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="vertical-container">\n    <h2>Agregar un empleado</h2>\n    <input type="text" placeholder="Correo electrónico" [(ngModel)]="correo" />\n    <input type="text" placeholder="Nombre" [(ngModel)]="nombre" />\n    <input type="text" placeholder="Apellido" [(ngModel)]="apellido" />\n    <div class="header" style="width: 75%;margin: 20px 0 20px 0;">\n      <input type="text" placeholder="DNI" style="margin: 0 15px 0 0; width: 50%" [(ngModel)]="dni" />\n      <input type="text" placeholder="CUIL" style="margin: 0;width: 50%" [(ngModel)]="cuil" />\n    </div>\n  \n    <input type="password" placeholder="Contraseña" [(ngModel)]="clave" />\n  \n    <select [(ngModel)]="tipo">\n      <option value="mozo">Mozo</option>\n      <option value="cocinero">Cocinero</option>\n      <option value="bartender">Bartender</option>\n      <option value="metre">Metre</option>\n      <option value="repartidor">Repartidor</option>\n    </select>\n  \n    <img [src]="foto" alt="" height="35px" width="35px">\n  \n    <div class="header" style="width: 75%;margin: 20px 0 20px 0;">\n      <button ion-button color="red" class="alta" style="margin: 0 30px 0 0;width: 50%" (click)="SacarFoto()">Sacar\n        foto</button>\n      <button ion-button color="red" class="alta" style="margin: 0;width: 50%" (click)="InicializarLectorQR()">QR</button>\n  \n    </div>\n  \n    <button ion-button color="red" [disabled]="estadoBoton" class="alta" (click)="Registrar()">Registrar</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/altaempleado/altaempleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AltaempleadoPage);
    return AltaempleadoPage;
}());

//# sourceMappingURL=altaempleado.js.map

/***/ }),

/***/ 198:
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
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alta-de-mesa/alta-de-mesa.module": [
		492,
		3
	],
	"../pages/altaempleado/altaempleado.module": [
		493,
		2
	],
	"../pages/principal/principal.module": [
		494,
		1
	],
	"../pages/register/register.module": [
		495,
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
webpackAsyncContext.id = 240;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaSupervisorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(142);
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
            alert(barcodeData);
            alert(barcodeData.text);
            _this.dni = barcodeData.text;
            /*let dniDatos = barcodeData.text.split("@");
            this.apellido = dniDatos[1];
            this.nombre = dniDatos[2];
            this.dni = dniDatos[4];
            this.cuil=dniDatos[8][0]+dniDatos[8][1]+this.dni+dniDatos[8][2];
            this.datos=dniDatos;*/
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    AltaSupervisorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alta-supervisor',template:/*ion-inline-start:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/components/alta-supervisor/alta-supervisor.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top">\n    </div>\n    <img src="assets/Imagenes/icon.png">\n    <div class="Aligner-item Aligner-item--bottom">\n    </div>\n  </div>\n</div>\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>Registrar Supervisor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--img class="icon" src="assets/Imagenes/icon.png"-->\n  <ion-item>\n    <ion-label floating>Nombre </ion-label>\n    <ion-input type="text" required [(ngModel)]="nombre" name="nombre"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Apellido </ion-label>\n    <ion-input type="text" required [(ngModel)]="apellido" name="apellido"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>DNI </ion-label>\n    <ion-input type="number" minlength="8" maxlength="8" required [(ngModel)]="dni" name="dni"></ion-input>\n    <button ion-button block color="primary">Escanear DNI</button>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>CUIL </ion-label>\n    <ion-input type="text" minlength="11" maxlength="11" required [(ngModel)]="cuil" name="cuil"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Perfil </ion-label>\n    <ion-input type="text" required [(ngModel)]="perfil" name="perfil" disabled></ion-input>\n  </ion-item>\n   <ion-item>\n    <ion-label floating>Correo Electrónico </ion-label>\n    <ion-input type="email" required [(ngModel)]="email" name="email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Clave </ion-label>\n    <ion-input type="password" minlength="6" required [(ngModel)]="clave" name="clave"></ion-input>\n  </ion-item>\n  <br>\n  <button ion-button block color="primary" (click)="abrirCamara()">Sacar Foto</button>\n  <button ion-button block color="primary" (click)="escanear()">Escanear DNI</button>\n  <button ion-button block color="secondary" (click)="alta()">Alta</button>\n  <button ion-button block color="danger">Cancelar</button>\n</ion-content>\n'/*ion-inline-end:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/components/alta-supervisor/alta-supervisor.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _d || Object])
    ], AltaSupervisorComponent);
    return AltaSupervisorComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=alta-supervisor.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
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
            selector: 'page-register',template:/*ion-inline-start:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(415);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_altaempleado_altaempleado__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_alta_de_mesa_alta_de_mesa__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_firestore__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__globalConfig__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_alert_alert__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_spinner_spinner__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_json_json__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_alta_supervisor_alta_supervisor__ = __webpack_require__(250);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_altaempleado_altaempleado__["a" /* AltaempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_alta_de_mesa_alta_de_mesa__["a" /* AltaDeMesaPage */],
                __WEBPACK_IMPORTED_MODULE_21__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alta-de-mesa/alta-de-mesa.module#AltaDeMesaPageModule', name: 'AltaDeMesaPage', segment: 'alta-de-mesa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/altaempleado/altaempleado.module#AltaempleadoPageModule', name: 'AltaempleadoPage', segment: 'altaempleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_16__globalConfig__["a" /* configs */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_firestore__["b" /* AngularFirestoreModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_altaempleado_altaempleado__["a" /* AltaempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_alta_de_mesa_alta_de_mesa__["a" /* AltaDeMesaPage */],
                __WEBPACK_IMPORTED_MODULE_21__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_14__angular_fire_firestore__["c" /* FirestoreSettingsToken */], useValue: {} },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_json_json__["a" /* JsonProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/app/app.html"*/'\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" ></ion-nav>'/*ion-inline-end:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 483:
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

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(485);
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AlertProvider);
    return AlertProvider;
    var AlertProvider_1;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(27);
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
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__altaempleado_altaempleado__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alta_de_mesa_alta_de_mesa__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_alta_supervisor_alta_supervisor__ = __webpack_require__(250);
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
    function PrincipalPage(navCtrl, navParams, error, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.error = error;
        this.auth = auth;
        this.acciones = [];
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
                    { accion: "Nueva mesa", img: "ocupar-mesa.jpg", ruta: __WEBPACK_IMPORTED_MODULE_4__alta_de_mesa_alta_de_mesa__["a" /* AltaDeMesaPage */] },
                    { accion: "Nuevo Supervisor", img: "ocupar-mesa.jpg", ruta: __WEBPACK_IMPORTED_MODULE_7__components_alta_supervisor_alta_supervisor__["a" /* AltaSupervisorComponent */] }
                ];
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
            selector: 'page-principal',template:/*ion-inline-start:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/principal/principal.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of acciones" (click)="openPage(p.ruta)">\n        {{p.accion}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-header>\n\n  <ion-navbar color="primary" #content>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Principal</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="power"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page" padding>\n  <button ion-button *ngFor="let item of acciones" (click)="openPage(item.ruta)">\n    <div class="sombreado"></div>\n    <img src="../../assets/Imagenes/{{item.img}}" />\n    <span>{{item.accion}}</span>\n  </button>\n</ion-content>\n'/*ion-inline-end:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/principal/principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
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

/***/ })

},[293]);
//# sourceMappingURL=main.js.map