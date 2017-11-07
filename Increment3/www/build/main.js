webpackJsonp([6],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the RestaurantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestaurantProvider = (function () {
    function RestaurantProvider(http) {
        this.http = http;
        this.restaurants = null;
        this.apiURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=856&entity_type=city&lat=39.04&lon=-94.59&radius=5000&count=10';
    }
    RestaurantProvider.prototype.loadRestaurantsNearLocation = function () {
        var _this = this;
        console.log("API URL : " + this.apiURL);
        if (this.restaurants) {
            return Promise.resolve(this.restaurants);
        }
        var opt;
        var myheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.key = '16a979934d2da2dbd8dd6cc21483e354';
        myheaders.append('Accept', 'application/json');
        myheaders.append('user-key', this.key);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: myheaders
        });
        return new Promise(function (resolve) {
            _this.http.get(_this.apiURL, opt)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                console.log("SERVICE RESPONSE :" + JSON.stringify(data));
                _this.restaurants = data.restaurants;
                resolve(_this.restaurants);
            });
        });
    };
    RestaurantProvider.prototype.loadRestaurantDetails = function (restoId) {
        var _this = this;
        this.apiRestoInfoURL = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + restoId;
        var opt;
        var myheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.key = '16a979934d2da2dbd8dd6cc21483e354';
        this.infoKey = restoId;
        myheaders.append('Accept', 'application/json');
        myheaders.append('user-key', this.key);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: myheaders
        });
        console.log("API URL2 : " + this.apiRestoInfoURL);
        return new Promise(function (resolve) {
            console.log("API URL3 : " + _this.apiRestoInfoURL);
            _this.http.get(_this.apiRestoInfoURL, opt)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                console.log("SERVICE RESPONSE :" + JSON.stringify(data));
                _this.restaurants = data;
                resolve(_this.restaurants);
            });
        });
    };
    return RestaurantProvider;
}());
RestaurantProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RestaurantProvider);

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieDataProvider = (function () {
    function MovieDataProvider(http) {
        this.http = http;
        console.log('Hello MovieDataProvider Provider');
    }
    MovieDataProvider.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=1dd53393337c4051b0c109c18e659e56&primary_release_date.gte=2017-09-30')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data.results;
                resolve(_this.data);
            });
        });
    };
    return MovieDataProvider;
}());
MovieDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MovieDataProvider);

//# sourceMappingURL=movie-data.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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





var AboutPage = (function () {
    function AboutPage(afAuth, navCtrl, navParams, googleplus, toast) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleplus = googleplus;
        this.toast = toast;
        this.user = {};
    }
    AboutPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(function (suc) {
                    _this.navCtrl.setRoot('TabsPage');
                    alert("login successful");
                }).catch(function (ns) {
                    alert("Please enter correct email and password");
                });
                return [2 /*return*/];
            });
        });
    };
    AboutPage.prototype.register = function () {
        this.navCtrl.push('RegisterPage');
    };
    AboutPage.prototype.goologin = function () {
        var _this = this;
        this.googleplus.login({
            'webClientId': '572221592836-dm6i8m9oegh30r84uej3d6dff6oi2g0n.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithCredential(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken)).then(function (suc) {
                alert("login successful");
                _this.navCtrl.setRoot('TabsPage');
            }).catch(function (ns) {
                alert("Unsuccesful");
            });
        });
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\about\about.html"*/'\n<ion-content class="background">\n  <ion-card>\n    <ion-card-header>\n\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list no-line>\n        <ion-item>\n          <ion-input type="text" placeholder="Username" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" min="8"[(ngModel)]="user.password"></ion-input>\n        </ion-item>\n        <button ion-button block outline color="light" (click)="login(user)">Log in</button>\n      </ion-list>\n\n    </ion-card-content>\n    <button ion-button block color="danger" (click)="goologin()" *ngIf="!userProfile">\n      <ion-icon name="logo-googleplus"></ion-icon>\n      Login with Google\n    </button>\n  </ion-card>\n  <button  ion-item (click)="register()">Don\'t have an account? Sign up</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_restaurant__ = __webpack_require__(131);
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
 * Generated class for the RestaurantInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantInfoPage = (function () {
    function RestaurantInfoPage(navCtrl, navParams, restoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restoService = restoService;
        this.navParams.get('details');
        this.details = navParams.get('details');
        console.log('Id: ' + JSON.stringify(this.details));
        this.restaurantInfo = {
            location: {},
            user_rating: {}
        };
    }
    RestaurantInfoPage.prototype.loadRestoInfo = function () {
        var _this = this;
        this.restoService.loadRestaurantDetails(this.details)
            .then(function (data) {
            console.log("GOT DATA: " + JSON.stringify(data));
            _this.restaurantInfo = data;
        });
    };
    RestaurantInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantInfoPage');
        this.loadRestoInfo();
    };
    return RestaurantInfoPage;
}());
RestaurantInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restaurant-info',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\restaurant-info\restaurant-info.html"*/'<!--\n\n  Generated template for the RestaurantInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-title>Restaurant Info</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding >\n\n    <ion-card>\n\n      <ion-card-header id="card-header" text-wrap >{{restaurantInfo.name}}</ion-card-header>\n\n      <ion-card-content>\n\n        <div>\n\n            <div><b>Cusine: </b>{{restaurantInfo.cuisines}}</div>\n\n            <div><b>Address: </b>{{restaurantInfo.location.address}}</div>\n\n            <div><b>Avg Cost: </b>{{restaurantInfo.average_cost_for_two}} {{restaurantInfo.currency}}</div>      \n\n            <div><b>User Rating: </b>{{restaurantInfo.user_rating.aggregate_rating}} {{restaurantInfo.user_rating.rating_text}}</div>\n\n            <div><b>Online Delivery: </b>{{restaurantInfo.has_online_delivery}}</div>    \n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <div>Maps are coming soon...</div>\n\n    </ion-card>\n\n    <ion-card>\n\n        <div>User reviews coming soon...</div>\n\n    </ion-card>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\restaurant-info\restaurant-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_restaurant__["a" /* RestaurantProvider */]])
], RestaurantInfoPage);

//# sourceMappingURL=restaurant-info.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		456,
		5
	],
	"../pages/register/register.module": [
		457,
		1
	],
	"../pages/restaurant-info/restaurant-info.module": [
		458,
		4
	],
	"../pages/restaurants/restaurants.module": [
		459,
		3
	],
	"../pages/tabs/tabs.module": [
		460,
		0
	],
	"../pages/weather/weather.module": [
		461,
		2
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
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_weather_weather__ = __webpack_require__(85);
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
 * Generated class for the ForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForecastPage = (function () {
    function ForecastPage(navCtrl, navParams, wea) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wea = wea;
        this.foreData = {};
        this.forecast = {};
        this.txt_forecast = {};
        this.forecastday1 = {};
        this.forecastday2 = {};
        this.lat = navParams.get('lat');
        this.lon = navParams.get('lon');
        this.wea.weatherForecast(this.lat, this.lon)
            .then(function (data) {
            _this.foreData = data;
            /* this.forecast = this.foreData.forecast;
             this.txt_forecast = this.forecast.txt_forecast;
             this.forecastday = this.txt_forecast.forecastday;
             this.forecastday1=this.forecastday[0];
             this.forecastday2=this.forecastday[1];*/
            _this.hourly = _this.foreData.hourly_forecast;
            _this.timely = _this.hourly;
            console.log(_this.timely);
        });
    }
    ForecastPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForecastPage');
    };
    return ForecastPage;
}());
ForecastPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forecast',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\forecast\forecast.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Forecast</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <!-- <ion-grid>\n    <ion-row>\n      <ion-col col-8>\n        <h3>{{forecastday1.title}}</h3></ion-col>\n      <ion-col>\n        <img src="{{forecastday1.icon_url}}" alt=""></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>{{forecastday1.fcttext}}</ion-col>\n\n\n    </ion-row><br><br>\n    <ion-row>\n      <ion-col col-8>\n        <h3>{{forecastday2.title}}</h3></ion-col>\n      <ion-col>\n        <img src="{{forecastday2.icon_url}}" alt=""></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>{{forecastday2.fcttext}}</ion-col>\n\n\n    </ion-row>\n    </ion-grid>-->\n  <ion-grid>\n    <ion-item>\n    <ion-row>\n      <ion-col><b>Time</b></ion-col>\n\n      <ion-col><b>Condition</b></ion-col>\n    </ion-row>\n    </ion-item>\n\n  <ion-item *ngFor="let time of timely">\n  <ion-row>\n    <ion-col >{{this.time.FCTTIME.civil}}</ion-col>\n  <ion-col col-2><img src="{{this.time.icon_url}}" alt=""> </ion-col>\n    <ion-col>{{this.time.condition}}</ion-col>\n  </ion-row>\n  </ion-item>\n\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\forecast\forecast.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_weather_weather__["a" /* WeatherProvider */]])
], ForecastPage);

//# sourceMappingURL=forecast.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_movie_data_movie_data__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, movieservice, navParams) {
        this.navCtrl = navCtrl;
        this.movieservice = movieservice;
        this.navParams = navParams;
        this.loadpeople();
    }
    HomePage.prototype.loadpeople = function () {
        var _this = this;
        this.movieservice.load().
            then(function (data) {
            _this.traill = data;
        });
    };
    HomePage.prototype.viewItem = function (details) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], {
            details: details
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title align="center">GetOnWheels</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n<h3 align="center">Movies Playing Around</h3>\n    <ion-list>\n    <ion-item *ngFor="let details of traill">\n\n      <ion-card>\n        <img src="http://image.tmdb.org/t/p/w300/{{details.backdrop_path}}">\n        <div class="card-title">{{details.title}}</div>\n\n        <div class="card-subtitle"><ion-icon name="md-heart" class="ion-md-heart" item-left=""></ion-icon>{{details.popularity}}</div>\n        <button ion-button clear item-right (click)="viewItem(details)">View</button>\n      </ion-card>\n\n     </ion-item>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__providers_movie_data_movie_data__["a" /* MovieDataProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_movie_data_movie_data__["a" /* MovieDataProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsPage = (function () {
    function DetailsPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.details = params.get('details');
    }
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-details',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\details\details.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title align="center">GetOnWheels</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <h3 align="center">{{details.title}}</h3>\n  <ion-card>\n    <ion-card-header><img src="http://image.tmdb.org/t/p/w300/{{details.backdrop_path}}"></ion-card-header>\n    <ion-card-content>\n      <ion-card-title><b>Popularity: </b></ion-card-title>{{details.popularity}}\n      <ion-card-title><b>Release Date: </b></ion-card-title>{{details.release_date}}\n      <ion-card-title><b>Overview: </b></ion-card-title>{{details.overview}}\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\details\details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheatresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TheatresPage = (function () {
    function TheatresPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    TheatresPage.prototype.getUserPosition = function () {
        var _this = this;
        this.options = {
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(this.options).then(function (pos) {
            _this.currentPos = pos;
            console.log(pos);
            _this.addMap(pos.coords.latitude, pos.coords.longitude);
        }, function (err) {
            console.log("error : " + err.message);
        });
    };
    TheatresPage.prototype.ionViewDidEnter = function () {
        this.getUserPosition();
    };
    TheatresPage.prototype.addMap = function (lat, long) {
        var _this = this;
        var latLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: latLng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.getShopping(latLng).then(function (results) {
            console.log(_this.places = results);
            for (var i = 0; i < results.length; i++) {
                _this.createMarker(results[i]);
            }
        }, function (status) { return console.log(status); });
        this.addMarker();
    };
    TheatresPage.prototype.addMarker = function () {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<p>This is your current position !</p>";
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    TheatresPage.prototype.getShopping = function (latLng) {
        var service = new google.maps.places.PlacesService(this.map);
        var request = {
            location: latLng,
            radius: 10047,
            types: ["movie_theater"]
        };
        return new Promise(function (resolve, reject) {
            service.nearbySearch(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    resolve(results);
                }
                else {
                    reject(status);
                }
            });
        });
    };
    TheatresPage.prototype.createMarker = function (place) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: place.geometry.location
        });
    };
    return TheatresPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], TheatresPage.prototype, "mapElement", void 0);
TheatresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-theatres',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\theatres\theatres.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>GetOnWheels</ion-title>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h3 align="center">Movie Theatres Around</h3>\n\n  <div #map id="map" ></div>\n  <div style="width : 100% ;height: 60%">\n        <ion-list>\n      <ion-item *ngFor="let place of places">\n        <h4>{{place.name}}</h4>\n        </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\theatres\theatres.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], TheatresPage);

//# sourceMappingURL=theatres.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MallsinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mallsdetails_mallsdetails__ = __webpack_require__(256);
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
 * Generated class for the MallsinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MallsinfoPage = (function () {
    function MallsinfoPage(navCtrl, navParams, malls) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.malls = malls;
        this.mallsData = {};
        this.pic = {};
        this.mallsinfo = navParams.get('mallsinfo');
        this.malls.detailedMalls(this.mallsinfo)
            .then(function (data) {
            _this.mallsData = data;
            _this.pic = _this.mallsData.photos[0];
            _this.rev = _this.mallsData.reviews;
            console.log(_this.mallsData.rating);
        });
    }
    MallsinfoPage.prototype.getArray = function (size) {
        return new Array(size);
    };
    return MallsinfoPage;
}());
MallsinfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mallsinfo',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\mallsinfo\mallsinfo.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>mallsinfo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-item >\n    <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=350&photoreference={{pic.photo_reference}}&sensor=false&key=AIzaSyCXpd1MNs44B5NJ5xs2PsTDeGFjlXC8ORw">\n  </ion-item>\n\n  <ion-item text-wrap>Address: {{mallsData.formatted_address}}</ion-item>\n  <ion-item text-wrap>Mobile No: {{mallsData.formatted_phone_number}}</ion-item>\n\n\n<ion-item>Reviews</ion-item>\n\n  <ion-item text-wrap *ngFor="let hel of rev">\n    <p> <p>\n    <img [src]="hel.profile_photo_url" width="30px" height="30px" border-radius="50%" object-fit="cover">\n     {{hel.author_name}}\n    <p><ion-icon name="star" *ngFor="let star of getArray(hel.rating)"></ion-icon></p>\n   <p> {{hel.text}}</p></ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\mallsinfo\mallsinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mallsdetails_mallsdetails__["a" /* MallsdetailsProvider */]])
], MallsinfoPage);

//# sourceMappingURL=mallsinfo.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MallsdetailsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the MallsdetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MallsdetailsProvider = (function () {
    function MallsdetailsProvider(http) {
        this.http = http;
        console.log('Hello MallsdetailsProvider Provider');
    }
    MallsdetailsProvider.prototype.detailedMalls = function (mallsinfo) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + mallsinfo + "&key=AIzaSyCXpd1MNs44B5NJ5xs2PsTDeGFjlXC8ORw&callback=initmap")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data.result);
            });
        });
    };
    MallsdetailsProvider.prototype.getArray = function (size) {
        return new Array(size);
    };
    return MallsdetailsProvider;
}());
MallsdetailsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MallsdetailsProvider);

//# sourceMappingURL=mallsdetails.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_restaurant__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurant_info_restaurant_info__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(63);
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
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantsPage = (function () {
    function RestaurantsPage(platform, navCtrl, navParams, geolocation, restoService) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.restoService = restoService;
        this.lat = null;
        this.lng = null;
        this.previousId = -1;
    }
    RestaurantsPage.prototype.getRandomInt = function () {
        if (this.previousId < 12) {
            this.previousId++;
            return this.previousId;
        }
        else if (this.previousId == 12) {
            this.previousId = -1;
            return 12;
        }
        return this.previousId;
    };
    RestaurantsPage.prototype.loadRestaurants = function () {
        var _this = this;
        this.restoService.loadRestaurantsNearLocation()
            .then(function (data) {
            _this.restaurantInfo = data;
            if (Array.isArray(_this.restaurantInfo)) {
                _this.restaurantInfo.forEach(function (resto) {
                    resto['imageURL'] = 'assets/restaurantImages/img' + this.getRandomInt() + '.jpeg';
                }, _this);
            }
        });
    };
    RestaurantsPage.prototype.getUserLocation = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.geolocation.getCurrentPosition().then(function (pos) {
                _this.lat = pos.coords.latitude;
                _this.lng = pos.coords.longitude;
            });
        });
    };
    RestaurantsPage.prototype.ionViewDidLoad = function () {
        this.getUserLocation();
        this.loadRestaurants();
    };
    RestaurantsPage.prototype.viewRestaurantInfo = function (restaurantid) {
        console.log(restaurantid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__restaurant_info_restaurant_info__["a" /* RestaurantInfoPage */], {
            details: restaurantid,
        });
    };
    return RestaurantsPage;
}());
RestaurantsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restaurants',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\restaurants\restaurants.html"*/'<!--\n  Generated template for the RestaurantsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Restaurants Near Me</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content padding class="card-background">\n    <ion-list>\n      <button ion-item *ngFor="let resto of restaurantInfo" (click)="viewRestaurantInfo(resto.restaurant.id)" >\n          <ion-thumbnail item-start>\n              <img src={{resto.imageURL}} height="40" width="40">\n          </ion-thumbnail>\n        <img src="{{resto.restaurant.url}}">\n          <h2>{{resto.restaurant.name}}</h2>\n          <p> Cuisines :{{resto.restaurant.cuisines}}</p>\n          <p>Avg Cost :{{resto.restaurant.currency}}</p>\n\n      </button>\n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\restaurants\restaurants.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_restaurant__["a" /* RestaurantProvider */]])
], RestaurantsPage);

//# sourceMappingURL=restaurants.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weather_weather__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forecast_forecast__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeatherPage = (function () {
    function WeatherPage(afAuth, toast, navCtrl, geolocation, weather, navParams) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.weather = weather;
        this.navParams = navParams;
        this.weatherData = {};
        this.trail = {};
        this.full_address = {};
    }
    WeatherPage.prototype.getUserPosition = function () {
        var _this = this;
        this.options = {
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(this.options).then(function (pos) {
            _this.currentPos = pos;
            console.log(pos);
            _this.getWeather(pos.coords.latitude, pos.coords.longitude);
        }, function (err) {
            console.log("error : " + err.message);
        });
    };
    WeatherPage.prototype.ionViewDidEnter = function () {
        this.getUserPosition();
    };
    WeatherPage.prototype.getWeather = function (latitude, longitude) {
        var _this = this;
        this.weather.weatherForLocation(latitude, longitude)
            .then(function (data) {
            _this.weatherData = data;
            _this.trail = _this.weatherData.display_location;
            _this.full_address = _this.weatherData.observation_location;
        });
    };
    WeatherPage.prototype.getForecast = function (latitude, longitude) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__forecast_forecast__["a" /* ForecastPage */], {
            lat: latitude,
            lon: longitude
        });
    };
    return WeatherPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], WeatherPage.prototype, "mapElement", void 0);
WeatherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-weather',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\weather\weather.html"*/'<ion-header>\n  <ion-navbar align="center" color="dark">\n    <ion-title>GetOnWheels</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="background">\n\n  <div style="width : 100% ;height: 100%">\n    <ion-grid *ngIf="weather">\n      <ion-row>\n        <ion-col align="center">\n          <h3 class="location">{{trail.full}}</h3>\n          <div class="icon"><img src="{{weatherData.icon_url}}" alt=""></div>\n          <h3 class="desc">{{weatherData.weather}}</h3>\n          <h1 class="temp">{{weatherData.temp_f}}&deg;</h1>\n        </ion-col>\n      </ion-row>\n\n\n\n      <ion-card>\n        <ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <strong>Location:</strong> {{full_address.full}}\n          </ion-item>\n          <ion-item>\n            <strong>Temp: </strong> {{weatherData.temperature_string}}\n          </ion-item>\n          <ion-item>\n            <strong>Relative Humidity: </strong> {{weatherData.relative_humidity}}\n          </ion-item>\n          <ion-item>\n            <strong>Dewpoint: </strong> {{weatherData.dewpoint_string}}\n          </ion-item>\n          <ion-item>\n            <strong>Visibility: </strong> {{weatherData.visibility_mi}}\n          </ion-item>\n          <ion-item>\n            <strong>Ultra Violet: </strong> {{weatherData.UV}}\n          </ion-item>\n          <button ion-button block outline color="light" (click)="getForecast(trail.latitude,trail.longitude)">How is today?</button>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-grid>\n\n\n       <!--<ion-row>\n         <ion-col>\n\n          <p>{{weatherData.UV}}</p>\n           <p>{{trail.full}}</p>\n         </ion-col>\n       </ion-row>-->\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\weather\weather.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__providers_weather_weather__["a" /* WeatherProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], WeatherPage);

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theatres_theatres__ = __webpack_require__(254);
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
 * Created by rajin on 10/9/2017.
 */




var MoviesPage = (function () {
    function MoviesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.theatresPage = __WEBPACK_IMPORTED_MODULE_3__theatres_theatres__["a" /* TheatresPage */];
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
    }
    return MoviesPage;
}());
MoviesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-movies',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\movies\movies.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title align="center">GetOnWheels</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n\n<h3 align="center"> Movies & Movie Theatres</h3>\n  <img src="assets/s3.jpg" height="300" width="360">\n  <div><button ion-button block color="dark" [navPush]="theatresPage" outline>Movie Theatres Around</button></div>\n      <button ion-button block color="dark" [navPush]="homePage" outline>Movies Playing Around</button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\movies\movies.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], MoviesPage);

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(64);
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
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = (function () {
    function SigninPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\signin\signin.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title align="center">GetOnWheels</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n\n  <ion-card>\n    <ion-card-header>\n      Want to login as New User:\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list no-line>\n\n\n        <button ion-button block outline color="light"><a href="http://localhost:8100/">New User</a></button>\n\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\signin\signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mallsinfo_mallsinfo__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingPage = (function () {
    function ShoppingPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    ShoppingPage.prototype.getUserPosition = function () {
        var _this = this;
        this.options = {
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(this.options).then(function (pos) {
            _this.currentPos = pos;
            console.log(pos);
            _this.addMap(pos.coords.latitude, pos.coords.longitude);
        }, function (err) {
            console.log("error : " + err.message);
        });
    };
    ShoppingPage.prototype.ionViewDidEnter = function () {
        this.getUserPosition();
    };
    ShoppingPage.prototype.addMap = function (lat, long) {
        var _this = this;
        var latLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.getShopping(latLng).then(function (results) {
            _this.places = results;
            for (var i = 0; i < results.length; i++) {
                _this.createMarker(results[i]);
            }
        }, function (status) { return console.log(status); });
        this.addMarker();
    };
    ShoppingPage.prototype.addMarker = function () {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<p>This is your current position !</p>";
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    ShoppingPage.prototype.getShopping = function (latLng) {
        var service = new google.maps.places.PlacesService(this.map);
        var request = {
            location: latLng,
            radius: 8047,
            types: ["shopping_mall"]
        };
        return new Promise(function (resolve, reject) {
            service.nearbySearch(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    resolve(results);
                    console.log(results);
                }
                else {
                    reject(status);
                }
            });
        });
    };
    ShoppingPage.prototype.createMarker = function (place) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: place.geometry.location,
        });
    };
    ShoppingPage.prototype.viewItem = function (placeid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mallsinfo_mallsinfo__["a" /* MallsinfoPage */], {
            mallsinfo: placeid
        });
    };
    return ShoppingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ShoppingPage.prototype, "mapElement", void 0);
ShoppingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shopping',template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\shopping\shopping.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Shopping</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content >\n\n  <div #map id="map"></div>\n  <div style="width : 100% ;height: 60%">\n\n    <ion-list>\n      <ion-item *ngFor="let place of places">\n\n        <br>\n        <h3><b>{{place.name}}</b></h3>\n          <p> {{place.types}}</p>\n\n\n        <button ion-button clear item-end (click)="viewItem(place.place_id)"><ion-icon name="star"></ion-icon>View</button>\n\n\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\pages\shopping\shopping.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], ShoppingPage);

//# sourceMappingURL=shopping.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(321);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_details_details__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_weather_weather__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_theatres_theatres__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_movie_data_movie_data__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_weather_weather__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_movies_movies__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mallsinfo_mallsinfo__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_mallsdetails_mallsdetails__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_firebase_config__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_forecast_forecast__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_signin_signin__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_shopping_shopping__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_plus__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_restaurants_restaurants__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_restaurant_info_restaurant_info__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_restaurant_restaurant__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_theatres_theatres__["a" /* TheatresPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_movies_movies__["a" /* MoviesPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_weather_weather__["a" /* WeatherPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_shopping_shopping__["a" /* ShoppingPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_restaurants_restaurants__["a" /* RestaurantsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_restaurant_info_restaurant_info__["a" /* RestaurantInfoPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_forecast_forecast__["a" /* ForecastPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_mallsinfo_mallsinfo__["a" /* MallsinfoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#LoginPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/restaurant-info/restaurant-info.module#RestaurantInfoPageModule', name: 'RestaurantInfoPage', segment: 'restaurant-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/restaurants/restaurants.module#RestaurantsPageModule', name: 'RestaurantsPage', segment: 'restaurants', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/weather/weather.module#WeatherPageModule', name: 'WeatherPage', segment: 'weather', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_19__app_firebase_config__["a" /* config */]),
            __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_weather_weather__["a" /* WeatherPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_theatres_theatres__["a" /* TheatresPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_movies_movies__["a" /* MoviesPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_shopping_shopping__["a" /* ShoppingPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_restaurants_restaurants__["a" /* RestaurantsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_restaurant_info_restaurant_info__["a" /* RestaurantInfoPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_forecast_forecast__["a" /* ForecastPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_mallsinfo_mallsinfo__["a" /* MallsinfoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_movie_data_movie_data__["a" /* MovieDataProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_14__providers_weather_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_17__providers_mallsdetails_mallsdetails__["a" /* MallsdetailsProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_restaurant_restaurant__["a" /* RestaurantProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_movie_data_movie_data__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_weather_weather__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Bhargavii\Desktop\ASE Final Project\GetOnWheels\src\app\app.html"*/,
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__providers_movie_data_movie_data__["a" /* MovieDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_weather_weather__["a" /* WeatherProvider */]
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    apiKey: "AIzaSyDHrzV60kYnNRYYqatwHVPR57Qh9foIUgY",
    authDomain: "getonwheels-1a7f2.firebaseapp.com",
    databaseURL: "https://getonwheels-1a7f2.firebaseio.com",
    projectId: "getonwheels-1a7f2",
    storageBucket: "getonwheels-1a7f2.appspot.com",
    messagingSenderId: "572221592836"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.data = {};
        console.log('Hello WeatherProvider Provider');
    }
    WeatherProvider.prototype.weatherForLocation = function (latitude, longitude) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://api.wunderground.com/api/9eff93bd00e32bc4/conditions/q/" + latitude + "," + longitude + ".json")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data.current_observation);
                console.log(_this.data.current_observation.display_location.full);
                console.log(_this.data.current_observation.UV);
            });
        });
    };
    WeatherProvider.prototype.weatherForecast = function (latitude, longitude) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://api.wunderground.com/api/9eff93bd00e32bc4/hourly/q/" + latitude + "," + longitude + ".json")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
                //console.log(data);
            });
        });
    };
    return WeatherProvider;
}());
WeatherProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], WeatherProvider);

//# sourceMappingURL=weather.js.map

/***/ })

},[303]);
//# sourceMappingURL=main.js.map