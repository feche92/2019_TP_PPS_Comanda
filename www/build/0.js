webpackJsonp([0],{

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoEncuestasPageModule", function() { return ListadoEncuestasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listado_encuestas__ = __webpack_require__(673);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListadoEncuestasPageModule = /** @class */ (function () {
    function ListadoEncuestasPageModule() {
    }
    ListadoEncuestasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listado_encuestas__["a" /* ListadoEncuestasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listado_encuestas__["a" /* ListadoEncuestasPage */]),
            ],
        })
    ], ListadoEncuestasPageModule);
    return ListadoEncuestasPageModule;
}());

//# sourceMappingURL=listado-encuestas.module.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoEncuestasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function ListadoEncuestasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListadoEncuestasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListadoEncuestasPage');
    };
    ListadoEncuestasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listado-encuestas',template:/*ion-inline-start:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/listado-encuestas/listado-encuestas.html"*/'<!--\n  Generated template for the ListadoEncuestasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>listado-encuestas</ion-title>\n    <ion-buttons end style="margin-right: 10px;">\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ng-container>\n    <h2 class="titulo"><u>Encuestas</u></h2>\n  </ng-container>\n  <ion-list>\n\n    <ion-item *ngFor="let item of listaEncuestas">\n      <h1>{{item.nombre}}</h1>\n      <h1>{{item.correo}}</h1>\n      <button ion-button clear item-end (click)="MostrarEncuesta(item)">\n        <ion-icon name="clipboard"></ion-icon>\n      </button>\n    </ion-item>\n   </ion-list>\n</ion-content>'/*ion-inline-end:"/mnt/Datos/UTN/Practica Profesional/comanda/2019_TP_PPS_Comanda/src/pages/listado-encuestas/listado-encuestas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListadoEncuestasPage);
    return ListadoEncuestasPage;
}());

//# sourceMappingURL=listado-encuestas.js.map

/***/ })

});
//# sourceMappingURL=0.js.map