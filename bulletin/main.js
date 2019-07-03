(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bulletin';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_bulletin1_bulletin1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/bulletin1/bulletin1.component */ "./src/app/pages/bulletin1/bulletin1.component.ts");
/* harmony import */ var _components_bulletin_text_bulletin_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bulletin.text/bulletin.text.component */ "./src/app/components/bulletin.text/bulletin.text.component.ts");
/* harmony import */ var _pages_bulletin2_bulletin2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/bulletin2/bulletin2.component */ "./src/app/pages/bulletin2/bulletin2.component.ts");
/* harmony import */ var _pages_end_screen_end_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/end.screen/end.screen.component */ "./src/app/pages/end.screen/end.screen.component.ts");









var routesApp = [
    { path: '', redirectTo: 'bul1', pathMatch: 'full' },
    { path: 'bul1', component: _pages_bulletin1_bulletin1_component__WEBPACK_IMPORTED_MODULE_5__["Bulletin1Component"] },
    { path: 'bul2', component: _pages_bulletin2_bulletin2_component__WEBPACK_IMPORTED_MODULE_7__["Bulletin2Component"] },
    { path: 'end', component: _pages_end_screen_end_screen_component__WEBPACK_IMPORTED_MODULE_8__["EndScreenComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_bulletin1_bulletin1_component__WEBPACK_IMPORTED_MODULE_5__["Bulletin1Component"],
                _components_bulletin_text_bulletin_text_component__WEBPACK_IMPORTED_MODULE_6__["BulletinTextComponent"],
                _pages_bulletin2_bulletin2_component__WEBPACK_IMPORTED_MODULE_7__["Bulletin2Component"],
                _pages_end_screen_end_screen_component__WEBPACK_IMPORTED_MODULE_8__["EndScreenComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routesApp, { enableTracing: false, initialNavigation: 'enabled' }) // <-- debugging purposes only
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/bulletin.text/bulletin.text.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/bulletin.text/bulletin.text.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-main{\n  padding: 0.3em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWxsZXRpbi50ZXh0L2J1bGxldGluLnRleHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1bGxldGluLnRleHQvYnVsbGV0aW4udGV4dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1tYWlue1xuICBwYWRkaW5nOiAwLjNlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/bulletin.text/bulletin.text.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/bulletin.text/bulletin.text.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-main\">\n  <div><b>{{name}}</b></div>\n  <div>{{description}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/bulletin.text/bulletin.text.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/bulletin.text/bulletin.text.component.ts ***!
  \*********************************************************************/
/*! exports provided: BulletinTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletinTextComponent", function() { return BulletinTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BulletinTextComponent = /** @class */ (function () {
    function BulletinTextComponent() {
    }
    BulletinTextComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BulletinTextComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BulletinTextComponent.prototype, "description", void 0);
    BulletinTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulletin-text',
            template: __webpack_require__(/*! ./bulletin.text.component.html */ "./src/app/components/bulletin.text/bulletin.text.component.html"),
            styles: [__webpack_require__(/*! ./bulletin.text.component.css */ "./src/app/components/bulletin.text/bulletin.text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BulletinTextComponent);
    return BulletinTextComponent;
}());



/***/ }),

/***/ "./src/app/pages/bulletin1/bulletin1.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/bulletin1/bulletin1.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-main{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: darkgrey;\n}\n\n.container-bulletin{\n  width: 1024px;\n  height: 1280px;\n  background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnVsbGV0aW4xL2J1bGxldGluMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWM7RUFBZCxjQUFjO0VBQ2QseUJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QiwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHdCQUF3QjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1bGxldGluMS9idWxsZXRpbjEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbWFpbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xufVxuXG4uY29udGFpbmVyLWJ1bGxldGlue1xuICB3aWR0aDogMTAyNHB4O1xuICBoZWlnaHQ6IDEyODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/bulletin1/bulletin1.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/bulletin1/bulletin1.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-main\">\n  <div class=\"container-bulletin\">\n    <div class=\"container-header\">\n      <p>ПОЗАЧЕРГОВІ ВИБОРИ НАРОДНИХ ДЕПУТАТІВ УКРАЇНИ<br>\n        21 липня 2019 року<br>\n\n        ОДНОМАНДАТНИЙ ВИБОРЧИЙ ОКРУГ №94</p>\n    </div>\n    <div class=\"container-table\">\n      <table class=\"table-help\">\n        <tbody>\n        <tr>\n          <td class=\"col-num\"><b>!</b></td>\n          <td class=\"col-check\"></td>\n          <td><span class=\"text-row0\"><b>У СПИСКУ ВИБЕРІТЬ КАНДИДАТА ВІД ПАРТІЇ «СЛУГА НАРОДУ»</b></span></td>\n        </tr>\n        </tbody>\n      </table>\n      <table class=\"table-names\">\n        <tbody>\n          <tr *ngFor=\"let row of data\" >\n            <td class=\"col-num\"><b>{{row.num}}</b></td>\n            <td class=\"col-check\">\n              <input type=\"checkbox\" [value]=\"row.num\" (change)=\"setAnswer(row.num)\">\n            </td>\n            <td><app-bulletin-text [name]=\"row.name\" [description]=\"row.description\" ></app-bulletin-text></td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"container-button\">\n      <button (click)=\"gotoNext()\">Cледующий бюллетень</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/bulletin1/bulletin1.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/bulletin1/bulletin1.component.ts ***!
  \********************************************************/
/*! exports provided: Bulletin1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bulletin1Component", function() { return Bulletin1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var data = [
    { num: 1, name: 'БУГАКОВ ЯРОСЛАВ СЕРГІЙОВИЧ', description: 'народився 26 квiтня 1989 року в місті Дебальцеве Донецької області, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, тимчасово не працює, безпартійний, проживає в місті Дебальцеве Донецької області, судимість' },
    { num: 2, name: 'ГОЛОБОРОДЬКО ПАВЛО ВІТАЛІЙОВИЧ', description: 'народився 11 липня 1990 року в місті Васильків Київської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, начальник відділу фінансового аналізу та аудиту, ПрАТ "СК "ЮНІВЕС", безпартійний, проживає в місті Васильків Київської області, судимість відсутня, самовисування.' },
    { num: 3, name: 'ДУБИНСЬКИЙ ВАДИМ ВОЛОДИМИРОВИЧ', description: 'народився 12 грудня 1971 року в місті Сміла Черкаської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, керівник підрозділу, "ПП "Слуга народу", безпартійний, проживає в місті Сміла Черкаської області, судимість відсутня, самовисування.' },
    { num: 4, name: 'ДУБИНСЬКИЙ МАКСИМ МИКОЛАЙОВИЧ', description: 'народився 28 квiтня 1998 року в місті Умань Черкаської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта загальна середня, керівник проекту, "ПП "Слуга народу", безпартійний, проживає в місті Сміла Черкаської області, судимість відсутня, самовисування.' },
    { num: 5, name: 'ДУБІНСЬКИЙ ОЛЕКСАНДР АНАТОЛІЙОВИЧ', description: 'народився 18 квiтня 1981 року в місті Києві, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, телеведучий, ІП "1+1 Продакшн", безпартійний, проживає в місті Києві, судимість відсутня, суб’єкт висування – ПОЛІТИЧНА ПАРТІЯ "СЛУГА НАРОДУ". ' },
    { num: 6, name: 'КОНОНЕНКО ІГОР ВІТАЛІЙОВИЧ', description: 'народився 21 серпня 1965 року в місті Києві, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, народний депутат України, безпартійний, проживає в місті Києві, судимість відсутня, самовисування.' },
    { num: 7, name: 'КОНОНЕНКО ОЛЕКСІЙ ФЕДОРОВИЧ', description: 'народився 1 травня 1983 року в місті Києві, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, керівник інформаційно-технічного відділу, ТОВ "Солідарність плюс", безпартійний, проживає в місті Києві, судимість відсутня, самовисування.' },
    { num: 8, name: 'ПІДГУРСЬКИЙ МИКОЛА МИКОЛАЙОВИЧ', description: 'народився 27 червня 1982 року в місті Васильків Київської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта професійно-технічна, тимчасово не працює, член ПОЛІТИЧНОЇ ПАРТІЇ "СЛУГА НАРОДУ", проживає в селі Ольшаниця Рокитнянського району Київської області, судимість відсутня, самовисування.' },
    { num: 9, name: 'КУКСІН ЄВГЕНІЙ ВІКТОРОВИЧ', description: 'народився 29 липня 1994 року в місті Вишневе Києво-Святошинського району Київської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта загальна середня, кореспондент управління журналістських проектів, Департамент журналістських проектів ІП "1+1 Продакшн", безпартійний, проживає в місті Вишневе Києво-Святошинського району Київської області, судимість відсутня, самовисування.' },
    { num: 10, name: 'НОВОСЕЛЬЦЕВ ЖАН ВАДИМОВИЧ', description: 'народився 17 червня 1980 року в місті Харкові, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, комунікаційний директор, громадська організація "СЛУГА НАРОДУ", безпартійний, проживає в місті Харкові, судимість відсутня, самовисування.' },
    { num: 11, name: 'САБАЩУК ЮРІЙ МИКОЛАЙОВИЧ', description: 'народився 7 травня 1975 року в місті Києві, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, менеджер, громадська організація "ПП "СЛУГА НАРОДУ", безпартійний, проживає в місті Києві, судимість відсутня, самовисування.' }
];
var Bulletin1Component = /** @class */ (function () {
    function Bulletin1Component(router, route) {
        this.router = router;
        this.route = route;
        this.answerReady = false;
        this.data = data.slice();
    }
    Bulletin1Component.prototype.ngOnInit = function () {
        var _this = this;
        this._queryParams$ = this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return params['id']; })).subscribe(function (id) { return _this.id = id; });
    };
    Bulletin1Component.prototype.ngOnDestroy = function () {
        this._queryParams$.unsubscribe();
    };
    Bulletin1Component.prototype.setAnswer = function (e) {
        this.answerReady = false;
        localStorage.setItem(this.id + "_answer1", e);
    };
    Bulletin1Component.prototype.gotoNext = function () {
        this.router.navigate(['bul2'], { queryParams: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.route.snapshot.queryParams) });
        window.scroll(0, 0);
    };
    Bulletin1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulletin1',
            template: __webpack_require__(/*! ./bulletin1.component.html */ "./src/app/pages/bulletin1/bulletin1.component.html"),
            styles: [__webpack_require__(/*! ./bulletin1.component.css */ "./src/app/pages/bulletin1/bulletin1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], Bulletin1Component);
    return Bulletin1Component;
}());



/***/ }),

/***/ "./src/app/pages/bulletin2/bulletin2.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/bulletin2/bulletin2.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-main{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: darkgrey;\n}\n\n.container-bulletin{\n  width: 1024px;\n  height: 1280px;\n  background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnVsbGV0aW4yL2J1bGxldGluMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWM7RUFBZCxjQUFjO0VBQ2QseUJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QiwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHdCQUF3QjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1bGxldGluMi9idWxsZXRpbjIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbWFpbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xufVxuXG4uY29udGFpbmVyLWJ1bGxldGlue1xuICB3aWR0aDogMTAyNHB4O1xuICBoZWlnaHQ6IDEyODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/bulletin2/bulletin2.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/bulletin2/bulletin2.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-main\">\n  <div class=\"container-bulletin\">\n    <div class=\"container-header\">\n      <p>ПОЗАЧЕРГОВІ ВИБОРИ НАРОДНИХ ДЕПУТАТІВ УКРАЇНИ<br>\n        21 липня 2019 року<br>\n\n        ОДНОМАНДАТНИЙ ВИБОРЧИЙ ОКРУГ №146</p>\n    </div>\n    <div class=\"container-table\">\n      <table class=\"table-help\">\n        <tbody>\n        <tr>\n          <td class=\"col-num\"><b>!</b></td>\n          <td class=\"col-check\"></td>\n          <td><span class=\"text-row0\"><b>У СПИСКУ ВИБЕРІТЬ КАНДИДАТА ВІД ПАРТІЇ «СЛУГА НАРОДУ»</b></span></td>\n        </tr>\n        </tbody>\n      </table>\n      <table class=\"table-names\">\n        <tbody>\n        <tr *ngFor=\"let row of data\" >\n          <td class=\"col-num\"><b>{{row.num}}</b></td>\n          <td class=\"col-check\">\n            <input type=\"checkbox\" [value]=\"row.num\" (change)=\"setAnswer(row.num)\">\n          </td>\n          <td><app-bulletin-text [name]=\"row.name\" [description]=\"row.description\" ></app-bulletin-text></td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"container-button\">\n      <button (click)=\"gotoNext()\">Далее</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/bulletin2/bulletin2.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/bulletin2/bulletin2.component.ts ***!
  \********************************************************/
/*! exports provided: Bulletin2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bulletin2Component", function() { return Bulletin2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var data = [
    { num: 1, name: 'АЛЕКСІЄНКО ТЕТЯНА ВАЛЕНТИНІВНА', description: 'народилася 20 липня 1998 року в місті Кременчук Полтавської області, громадянка України, протягом останніх п’яти років проживає на території України, освіта загальна середня, директор, приватне підприємство "СЛУГА-НАРОДА", безпартійнa, проживає в селі Кривуші Кременчуцького району Полтавської області, судимість відсутня, самовисування.' },
    { num: 2, name: 'ГАМЗА СЕРГІЙ ІВАНОВИЧ', description: 'народився 31 сiчня 1954 року в місті Хабаровськ, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, директор, приватне підприємство "ОПОЗИЦІЙНИЙ БЛОК!", член ПОЛІТИЧНОЇ ПАРТІЇ "ОПОЗИЦІЙНА ПЛАТФОРМА – ЗА ЖИТТЯ", проживає в місті Кременчук, судимість відсутня, самовисування.' },
    { num: 3, name: 'ДЕДЮРІН ВІТАЛІЙ МИКОЛАЙОВИЧ', description: 'народився 20 жовтня 1968 року в місті Кременчук Полтавської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, директор, приватне підприємство "СЛУГА НАРОДА", безпартійний, проживає в місті Кременчук Полтавської області, судимість відсутня, самовисування.' },
    { num: 4, name: 'ДРОЗДОВА ІРИНА ВІКТОРІВНА', description: 'народилася 31 жовтня 1960 року в місті Кременчук Полтавської області, громадянка України, протягом останніх п’яти років проживає на території України, освіта професійно-технічна, директор, приватне підприємство "ЗЕ! СЛУГА НАРОДУ!", безпартійнa, проживає в місті Кременчук Полтавської області, судимість відсутня, самовисування.' },
    { num: 5, name: 'КУЗЬМІН КИРИЛО ВОЛОДИМИРОВИЧ', description: 'народився 24 травня 1992 року в місті Кременчук Полтавської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта загальна середня, директор, приватне підприємство "СЛУГА НАРОДА!", безпартійний, проживає в місті Полтаві, судимість відсутня, самовисування.' },
    { num: 6, name: 'МЕДВЕДЕНКО ОЛЕГ ВОЛОДИМИРОВИЧ', description: 'народився 17 вересня 1983 року в місті Кременчук Полтавської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, директор, КЗ фізичної культури і спорту "Кременчуцький міський центр фізичного здоров’я населення "Спорт для всіх", безпартійний, проживає в селі Садки Кременчуцького району Полтавської області, судимість відсутня, суб’єкт висування – партія "ОПОЗИЦІЙНИЙ БЛОК".' },
    { num: 7, name: 'ПЕРЕПЕЛЯТНИК СЕРГІЙ ЛЕОНІДОВИЧ', description: 'народився 1 жовтня 1973 року в місті Кременчук Полтавської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, директор, КП "Кременчуцька міська телерадіокомпанія", член ПОЛІТИЧНОЇ ПАРТІЇ "СИЛА І ЧЕСТЬ", проживає в місті Кременчук Полтавської області, судимість відсутня, суб’єкт висування – ПОЛІТИЧНА ПАРТІЯ "СИЛА І ЧЕСТЬ".\n' },
    { num: 8, name: 'САВЧЕНКО ОЛЕГ ВІТАЛІЙОВИЧ', description: 'народився 16 квiтня 1971 року в селі Луценки Лохвицького району Полтавської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, директор, приватне підприємство "ГОЛОС!", безпартійний, проживає в місті Кременчук Полтавської області, судимість відсутня, самовисування.' },
    { num: 9, name: 'СІДЕРКА ТЕТЯНА АНАТОЛІЇВНА', description: 'народилася 8 вересня 1971 року в місті Кременчук Полтавської області, громадянка України, протягом останніх п’яти років проживає на території України, освіта середня спеціальна, директор, ПП "Самталі", безпартійнa, проживає в місті Кременчук Полтавської області, судимість відсутня, самовисування.' },
    { num: 10, name: 'УРІН ФЕЛІКС ОЛЕКСАНДРОВИЧ', description: 'народився 7 квiтня 1984 року в місті Кременчук Полтавської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, адвокат, член ПОЛІТИЧНОЇ ПАРТІЇ "СЛУГА НАРОДУ", проживає в місті Кременчук Полтавської області, судимість відсутня, суб’єкт висування – ПОЛІТИЧНА ПАРТІЯ "СЛУГА НАРОДУ".' },
    { num: 11, name: 'ШАПОВАЛОВ ЮРІЙ АНАТОЛІЙОВИЧ', description: 'народився 14 березня 1972 року в місті Кременчук Полтавської області, громадянин України, протягом останніх п’яти років проживає на території України, освіта вища, народний депутат України, безпартійний, проживає в місті Кременчук Полтавської області, судимість відсутня, самовисування.' },
];
var Bulletin2Component = /** @class */ (function () {
    function Bulletin2Component(router) {
        this.router = router;
        this.answerReady = false;
        this.data = data.slice();
    }
    Bulletin2Component.prototype.ngOnInit = function () {
    };
    Bulletin2Component.prototype.setAnswer = function (e) {
        this.answerReady = false;
    };
    Bulletin2Component.prototype.gotoNext = function () {
        this.router.navigate(['end']);
        window.scroll(0, 0);
    };
    Bulletin2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulletin2',
            template: __webpack_require__(/*! ./bulletin2.component.html */ "./src/app/pages/bulletin2/bulletin2.component.html"),
            styles: [__webpack_require__(/*! ./bulletin2.component.css */ "./src/app/pages/bulletin2/bulletin2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Bulletin2Component);
    return Bulletin2Component;
}());



/***/ }),

/***/ "./src/app/pages/end.screen/end.screen.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/end.screen/end.screen.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  width: 100%;\n  text-align: center;\n  font-size: 4em;\n  color: #969696;\n  margin-top: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW5kLnNjcmVlbi9lbmQuc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZW5kLnNjcmVlbi9lbmQuc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDRlbTtcbiAgY29sb3I6ICM5Njk2OTY7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/end.screen/end.screen.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/end.screen/end.screen.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>\n    Спасибо за ответы\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/end.screen/end.screen.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/end.screen/end.screen.component.ts ***!
  \**********************************************************/
/*! exports provided: EndScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndScreenComponent", function() { return EndScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndScreenComponent = /** @class */ (function () {
    function EndScreenComponent() {
    }
    EndScreenComponent.prototype.ngOnInit = function () {
    };
    EndScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-end-screen',
            template: __webpack_require__(/*! ./end.screen.component.html */ "./src/app/pages/end.screen/end.screen.component.html"),
            styles: [__webpack_require__(/*! ./end.screen.component.css */ "./src/app/pages/end.screen/end.screen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EndScreenComponent);
    return EndScreenComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gleb/work/tp/bulletin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map