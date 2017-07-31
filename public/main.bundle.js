webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_createrecipe_createrecipe_component__ = __webpack_require__("../../../../../src/app/components/createrecipe/createrecipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_textandimage_textandimage_component__ = __webpack_require__("../../../../../src/app/components/textandimage/textandimage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules






// Components











// Services



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'createrecipe', component: __WEBPACK_IMPORTED_MODULE_13__components_createrecipe_createrecipe_component__["a" /* CreaterecipeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_14__components_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_textandimage_textandimage_component__["a" /* TextandimageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_createrecipe_createrecipe_component__["a" /* CreaterecipeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/createrecipe/createrecipe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/createrecipe/createrecipe.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Create Recipe</h2>\n\n<form (submit)=\"onPostSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.title\" name=\"title\" placeholder=\"add title\">\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.description\" name=\"description\" placeholder=\"add description\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form><br><br>\n\n\n<div class=\"jumbotron\">\n  <div class=\"container-fluid\">\n    <div *ngIf=\"post.images.length > 0; else noImg\">\n      <div class=\"row content\">  \n        \n        <div class=\"col-sm-5 clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"{{post.images[0]}}\" alt=\"Image Here\">\n        </div>\n        \n        <div class=\"col-sm-7\">\n          <h2>{{post.title}}</h2>\n          <p>{{post.description}}</p>\n        </div> \n     \n      </div>\n    </div>\n    \n    <ng-template #noImg>\n      <div class=\"row content\">\n        <div class=\"col-sm-12\">\n        <h2>{{post.title}}</h2>\n        <p>{{post.description}}</p>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n  \n  <div>\n    <br>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Ingredients</li>\n      <li *ngFor=\"let ingredient of post.ingredients\" class=\"list-group-item\">{{ingredient}}</li>\n    </ul>\n    <br>\n\n    <div *ngFor=\"let instruction of post.instructions, let i = index\">\n      <app-textandimage \n        [text]=\"i+1 +'. '+ instruction.text\" \n        [images]=\"instruction.images\" \n        [relation]=\"7\">\n      </app-textandimage>\n      <br>\n    </div>\n\n    <ul>\n      <li *ngFor=\"let comment of post.comments\">{{comment}}</li>\n    </ul>\n  </div>\n</div><br><br>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/createrecipe/createrecipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreaterecipeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreaterecipeComponent = (function () {
    function CreaterecipeComponent(router, flashMessage, validateService, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
    }
    CreaterecipeComponent.prototype.ngOnInit = function () {
        // change this to: this.post = new Post('','','',[],[],[]);
        this.post = new __WEBPACK_IMPORTED_MODULE_5__objects__["a" /* Post */]('Noreen', 'Oven Roasted Black Pepper Chicken', 'These juicy and peppery chicken thighs are ideal for your weeknight dinner rotation!', [
            '6 Chicken thighs (bone-in)',
            '1 tbsp Ginger-Garlic Paste (or 1/2 tbsp grated garlic + 1/2 tbsp grated fresh ginger)',
            '3 tbsp Worcestershire Sauce',
            '1 tsp Salt (or according to taste)',
            '1 tbsp fresh ground pepper (I like it a little coarsely ground)',
            'Juice of 1/2 lime',
            '1 tbsp freshly chopped cilantro, for garnish'
        ], [
            'http://picturetherecipe.com/wp-content/uploads/2015/01/Roasted-Black-Pepper-Chicken-by-PictureTheRecipe-com.jpg',
            'http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg',
        ], [
            new __WEBPACK_IMPORTED_MODULE_5__objects__["b" /* Instruction */](['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'], 'Rinse and trim any excess fat off your chicken thighs, then make three slits in the meat to the bone. (This helps the marinade flavor just the skin of the chicken but the inner meat too)'),
            new __WEBPACK_IMPORTED_MODULE_5__objects__["b" /* Instruction */](['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'], 'Mix together the garlic- ginger paste , Worcestershire sauce, salt, freshly ground black pepper and squeeze in the juice of half a lime.'),
            new __WEBPACK_IMPORTED_MODULE_5__objects__["b" /* Instruction */](['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg', 'http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'], 'Spoon over the mixed marinade over the chicken thighs (you can do it in a zip lock bag if touching chicken makes you squeamish) and massage it into the chicken to coat both sides well. Cover and let the chicken marinade in the fridge for anywhere from 30 minutes to overnight.'),
            new __WEBPACK_IMPORTED_MODULE_5__objects__["b" /* Instruction */]([], "Pre-heat your oven to 400F and arrange your chicken in an oven proof skillet or casserole dish and roast the chicken for 40 minutes (or more depending on the size of your chicken...but keep in mind the slits will help cook the chicken faster than if you didn't score them) until the skin turns a lovely golden and the juices run clear when you poke it with a knife."),
            new __WEBPACK_IMPORTED_MODULE_5__objects__["b" /* Instruction */]([], 'Garnish with some freshly chopped cilantro (parsley works too) and serve hot with fresh veggies, rice or mashed potatoes.')
        ]);
    };
    CreaterecipeComponent.prototype.onPostSubmit = function () {
        var _this = this;
        // Validate Fields
        var valid = this.validateService.validatePost(this.post);
        if (!valid.success) {
            this.flashMessage.show(valid.msg, { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        // uploade post to server
        this.authService.createPost(this.post).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                //this.router.navigate(['/createrecipe']);
            }
        });
    };
    return CreaterecipeComponent;
}());
CreaterecipeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-createrecipe',
        template: __webpack_require__("../../../../../src/app/components/createrecipe/createrecipe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/createrecipe/createrecipe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], CreaterecipeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=createrecipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\r\n<div *ngFor=\"let post of posts\">\r\n    <app-post [post]=\"post\"></app-post>\r\n</div>\r\n<footer class=\"container-fluid\">\r\n    <ul class=\"pager\">\r\n        <li class=\"previous disabled\"><a href=\"#\">&larr; Older</a></li>\r\n        <li class=\"next\"><a href=\"#\">Newer &rarr;</a></li>\r\n    </ul>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getDashboard().subscribe(function (dashboard) {
            _this.posts = dashboard.posts;
        }, function (err) { console.log(err); return false; });
        /*
        this.posts = [
          new Post(
            'Noreen',
            'Oven Roasted Black Pepper Chicken',
            'These juicy and peppery chicken thighs are ideal for your weeknight dinner rotation!',
            [
              '6 Chicken thighs (bone-in)',
              '1 tbsp Ginger-Garlic Paste (or 1/2 tbsp grated garlic + 1/2 tbsp grated fresh ginger)',
              '3 tbsp Worcestershire Sauce',
              '1 tsp Salt (or according to taste)',
              '1 tbsp fresh ground pepper (I like it a little coarsely ground)',
              'Juice of 1/2 lime',
              '1 tbsp freshly chopped cilantro, for garnish'],
            [
              'http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg',
              'http://picturetherecipe.com/wp-content/uploads/2015/01/Roasted-Black-Pepper-Chicken-by-PictureTheRecipe-com.jpg'
            ],
            [
              new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Rinse and trim any excess fat off your chicken thighs, then make three slits in the meat to the bone. (This helps the marinade flavor just the skin of the chicken but the inner meat too)'),
              new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Mix together the garlic- ginger paste , Worcestershire sauce, salt, freshly ground black pepper and squeeze in the juice of half a lime.'),
              new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg','http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Spoon over the mixed marinade over the chicken thighs (you can do it in a zip lock bag if touching chicken makes you squeamish) and massage it into the chicken to coat both sides well. Cover and let the chicken marinade in the fridge for anywhere from 30 minutes to overnight.'),
              new Instruction([],"Pre-heat your oven to 400F and arrange your chicken in an oven proof skillet or casserole dish and roast the chicken for 40 minutes (or more depending on the size of your chicken...but keep in mind the slits will help cook the chicken faster than if you didn't score them) until the skin turns a lovely golden and the juices run clear when you poke it with a knife."),
              new Instruction([],'Garnish with some freshly chopped cilantro (parsley works too) and serve hot with fresh veggies, rice or mashed potatoes.')
            ]
          ),
           new Post(
            'Loern',
            'Oven Roasted Black Pepper Chicken',
            'These juicy and peppery chicken thighs are ideal for your weeknight dinner rotation!',
            [
              '6 Chicken thighs (bone-in)',
              '1 tbsp Ginger-Garlic Paste (or 1/2 tbsp grated garlic + 1/2 tbsp grated fresh ginger)',
              '3 tbsp Worcestershire Sauce',
              '1 tsp Salt (or according to taste)',
              '1 tbsp fresh ground pepper (I like it a little coarsely ground)',
              'Juice of 1/2 lime',
              '1 tbsp freshly chopped cilantro, for garnish'],
            [],
            [
              new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Rinse and trim any excess fat off your chicken thighs, then make three slits in the meat to the bone. (This helps the marinade flavor just the skin of the chicken but the inner meat too)'),
              new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Mix together the garlic- ginger paste , Worcestershire sauce, salt, freshly ground black pepper and squeeze in the juice of half a lime.'),
              new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg','http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Spoon over the mixed marinade over the chicken thighs (you can do it in a zip lock bag if touching chicken makes you squeamish) and massage it into the chicken to coat both sides well. Cover and let the chicken marinade in the fridge for anywhere from 30 minutes to overnight.'),
              new Instruction([],"Pre-heat your oven to 400F and arrange your chicken in an oven proof skillet or casserole dish and roast the chicken for 40 minutes (or more depending on the size of your chicken...but keep in mind the slits will help cook the chicken faster than if you didn't score them) until the skin turns a lovely golden and the juices run clear when you poke it with a knife."),
              new Instruction([],'Garnish with some freshly chopped cilantro (parsley works too) and serve hot with fresh veggies, rice or mashed potatoes.')
            ]
          ),
           new Post(
            'Idanm',
            'Oven Roasted Black Pepper Chicken',
            'These juicy and peppery chicken thighs are ideal for your weeknight dinner rotation!',
            [
              '6 Chicken thighs (bone-in)',
              '1 tbsp Ginger-Garlic Paste (or 1/2 tbsp grated garlic + 1/2 tbsp grated fresh ginger)',
              '3 tbsp Worcestershire Sauce',
              '1 tsp Salt (or according to taste)',
              '1 tbsp fresh ground pepper (I like it a little coarsely ground)',
              'Juice of 1/2 lime',
              '1 tbsp freshly chopped cilantro, for garnish'],
            [
              'http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg',
              'http://picturetherecipe.com/wp-content/uploads/2015/01/Roasted-Black-Pepper-Chicken-by-PictureTheRecipe-com.jpg'
            ],
            [
              new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Rinse and trim any excess fat off your chicken thighs, then make three slits in the meat to the bone. (This helps the marinade flavor just the skin of the chicken but the inner meat too)'),
              new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Mix together the garlic- ginger paste , Worcestershire sauce, salt, freshly ground black pepper and squeeze in the juice of half a lime.'),
              new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg','http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Spoon over the mixed marinade over the chicken thighs (you can do it in a zip lock bag if touching chicken makes you squeamish) and massage it into the chicken to coat both sides well. Cover and let the chicken marinade in the fridge for anywhere from 30 minutes to overnight.'),
              new Instruction([],"Pre-heat your oven to 400F and arrange your chicken in an oven proof skillet or casserole dish and roast the chicken for 40 minutes (or more depending on the size of your chicken...but keep in mind the slits will help cook the chicken faster than if you didn't score them) until the skin turns a lovely golden and the juices run clear when you poke it with a knife."),
              new Instruction([],'Garnish with some freshly chopped cilantro (parsley works too) and serve hot with fresh veggies, rice or mashed potatoes.')
            ]
          ),
      ];
        */
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1> Welcome to <b>foody</b></h1>\r\n  <p class=\"lead\">The best palce to share your tasty food.</p>\r\n  <div>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a> \r\n    <a class=\"btn btn-info\" [routerLink]=\"['/register']\">Register</a> \r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n   <div class=\"col-md-4\">\r\n    <h3>Find</h3>\r\n    <p>Crave a nice meal? Here you can find the prefect recipes for the prefect meal, with a step by step guide on how to make it.</p>\r\n  </div>\r\n   <div class=\"col-md-4\">\r\n    <h3>Follow</h3>\r\n    <p>Find a recipe you like? Here you can Follow you favorit cooks to get updated on more of their tasty recipes.</p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>Share</h3>\r\n    <p>Want the world to konw all about your food? Here you can share all your recipes with the world, so that they to can enjoy your tasty food.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"credentials.username\" name=\"username\" placeholder=\"username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"credentials.password\" name=\"password\" placeholder=\"password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, flashMessage, validateService, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.credentials = new __WEBPACK_IMPORTED_MODULE_5__objects__["d" /* Credentials */]('', '');
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // Validate Fields
        var valid = this.validateService.validateLogin(this.credentials);
        if (!valid.success) {
            this.flashMessage.show(valid.msg, { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        this.authService.authenticateUser(this.credentials).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#nav-bar-content\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\"><b>foody</b></a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"nav-bar-content\">\r\n      <div *ngIf=\"authService.loggedIn(); else LoggedOut\">\r\n        <form class=\"navbar-form navbar-nav\" role=\"search\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n        </form>\r\n\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/createrecipe']\" href=\"#\">Create Recipe</a></li>                    \r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n\r\n      <ng-template #LoggedOut>\r\n        <ul class=\"nav navbar-nav\">\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\r\n        </ul>\r\n\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\r\n        </ul>\r\n      </ng-template>\r\n      \r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(router, flashMessage, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>404 PAGE NOT FOUND!</h1>\r\n  <p class=\"lead\">The URL you requested dose not exist in this server.</p>\r\n  <div>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/']\">Go back to the home page</a> \r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    return PagenotfoundComponent;
}());
PagenotfoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagenotfound',
        template: __webpack_require__("../../../../../src/app/components/pagenotfound/pagenotfound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pagenotfound/pagenotfound.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PagenotfoundComponent);

//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"text-primary\" data-toggle=\"collapse\" href=\"#post{{post._id}}\">\n<div class=\"jumbotron\">\n  <div class=\"container-fluid\">\n    <div *ngIf=\"post.images.length > 0; else noImg\">\n      <div class=\"row content\">  \n        \n        <div class=\"col-sm-5 clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"{{post.images[0]}}\" alt=\"Image Here\">\n        </div>\n        \n        <div class=\"col-sm-7\">\n          <h2>{{post.title}}</h2>\n          <p>{{post.description}}</p>\n          <!-- change post.author in herf/id to a real id value -->    \n          <ul class=\"nav nav-pills\">\n            <li><a class=\"text-info\" href=\"#\">By {{post.author}}</a></li>\n            <li><a class=\"text-info\" href=\"#\"><span class=\"badge \">{{post.likes.length}}</span>   Likes</a></li>\n          </ul>\n        </div> \n     \n      </div>\n    </div>\n    \n    <ng-template #noImg>\n      <div class=\"row content\">\n        <div class=\"col-sm-12\">\n        <h2>{{post.title}}</h2>\n        <p>{{post.description}}</p>\n        <!-- change post.author in herf/id to a real id value -->    \n        <ul class=\"nav nav-pills\">\n          <li><a class=\"text-info\" href=\"#\">By {{post.author}}</a></li>\n          <li><a class=\"text-info\" href=\"#\"><span class=\"badge \">3</span>   Likes</a></li>\n        </ul>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n  \n  <div id=\"post{{post._id}}\" class=\"collapse\">\n    <br>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Ingredients</li>\n      <li *ngFor=\"let ingredient of post.ingredients\" class=\"list-group-item\">{{ingredient}}</li>\n    </ul>\n    <br>\n\n    <div *ngFor=\"let instruction of post.instructions, let i = index\">\n      <app-textandimage \n        [text]=\"i+1 +'. '+ instruction.text\" \n        [images]=\"instruction.images\" \n        [relation]=\"7\">\n      </app-textandimage>\n      <br>\n    </div>\n\n    <ul>\n      <li *ngFor=\"let comment of post.comments\">{{comment}}</li>\n    </ul>\n  </div>\n</div>\n</a>\n<br>"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.setAuthor = function (author) {
        this.post.author = author;
    };
    PostComponent.prototype.setTitle = function (title) {
        this.post.title = title;
    };
    PostComponent.prototype.setDescription = function (description) {
        this.post.description = description;
    };
    PostComponent.prototype.addIngredient = function (ingredient) {
        this.post.ingredients.push(ingredient);
    };
    PostComponent.prototype.setIngredients = function (ingredients) {
        this.post.ingredients = ingredients;
    };
    PostComponent.prototype.addInstruction = function (instruction) {
        this.post.instructions.push(instruction);
    };
    PostComponent.prototype.setInstructions = function (instructions) {
        this.post.instructions = instructions;
    };
    PostComponent.prototype.addLike = function (like) {
        this.post.likes.push(like);
    };
    PostComponent.prototype.addComment = function (comment) {
        this.post.comments.push(comment);
    };
    return PostComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__objects__["a" /* Post */]) === "function" && _a || Object)
], PostComponent.prototype, "post", void 0);
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PostComponent);

var _a;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">{{user.fname}} {{user.lname}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class= \"list-group-item\">Username: {{user.username}}</li>\r\n    <li class= \"list-group-item\">Email: {{user.email}}</li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) { _this.user = profile.user; }, function (err) { console.log(err); return false; });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>First name</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.fname\" name=\"fname\" placeholder=\"first name\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Last name</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lname\" name=\"lname\" placeholder=\"last name\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n \r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(router, flashMessage, validateService, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_5__objects__["c" /* User */]('', '', '', '', '');
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        // Validate Fields
        var valid = this.validateService.validateRegister(this.user);
        if (!valid.success) {
            this.flashMessage.show(valid.msg, { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        // Register User
        this.authService.registerUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/textandimage/textandimage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/textandimage/textandimage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"this.images.length > 0 && this.relation > 1 && this.relation < 11; else noImg\">\n    <div class=\"row content\">\n      <div class=\"col-sm-{{relation}}\">\n        <p>{{text}}</p>\n      </div>\n      <div class=\"col-sm-{{12 - relation}} clearfix\">\n        <img class=\"img-responsive img-rounded\" src=\"{{images[0]}}\" alt=\"Image Here\">      \n      </div>\n    </div>\n  </div>\n    \n  <ng-template #noImg>\n    <div class=\"row content\">\n      <p>{{text}}</p>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/textandimage/textandimage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextandimageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextandimageComponent = (function () {
    function TextandimageComponent() {
    }
    TextandimageComponent.prototype.ngOnInit = function () {
        if (this.images.length == 0 || this.relation < 1 || this.relation > 11)
            this.relation = 0;
    };
    return TextandimageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TextandimageComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TextandimageComponent.prototype, "images", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TextandimageComponent.prototype, "relation", void 0);
TextandimageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-textandimage',
        template: __webpack_require__("../../../../../src/app/components/textandimage/textandimage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/textandimage/textandimage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TextandimageComponent);

//# sourceMappingURL=textandimage.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn())
            return true;
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/objects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Credentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return User; });
/* unused harmony export Comment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Instruction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
function formatName(name) {
    return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
}
var Credentials = (function () {
    function Credentials(username, password) {
        this.username = username;
        this.password = password;
    }
    return Credentials;
}());

var User = (function () {
    function User(fname, lname, email, username, password) {
        this.fname = formatName(fname);
        this.lname = formatName(lname);
        this.email = email;
        this.username = username;
        this.password = password;
    }
    return User;
}());

var Comment = (function () {
    function Comment(user, text) {
        this.user = user;
        this.text = text;
    }
    return Comment;
}());

var Instruction = (function () {
    function Instruction(images, text) {
        this.images = images;
        this.text = text;
    }
    return Instruction;
}());

var Post = (function () {
    function Post(author, title, description, ingredients, images, instructions) {
        this.author = author;
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.images = images;
        this.instructions = instructions;
        this.likes = [];
        this.comments = [];
        this.creationTime = new Date();
        this.updateTime = null;
    }
    return Post;
}());

//# sourceMappingURL=objects.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:8080/users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (credentials) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:8080/users/authenticate', credentials, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:8080/users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getDashboard = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:8080/dashboard', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.createPost = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:8080/dashboard/createpost', post, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, credentials) {
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(credentials));
        this.authToken = token;
        this.credentials = credentials;
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('authToken');
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('authToken');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.credentials = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateName = function (name) {
        var nameRegExp = /^[A-Za-z]+$/;
        return nameRegExp.test(name);
    };
    ValidateService.prototype.validateEmail = function (email) {
        var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegExp.test(email);
    };
    ValidateService.prototype.validateUsername = function (username) {
        var usernameRegExp = /^[\w]+$/;
        return usernameRegExp.test(username);
    };
    ValidateService.prototype.validatePassword = function (password) {
        var passRegExp = /^[\S]+$/;
        return passRegExp.test(password);
    };
    ValidateService.prototype.validateRegister = function (user) {
        if (!this.validateName(user.fname))
            return { success: false, msg: 'Please enter a valid first name.' };
        if (!this.validateName(user.lname))
            return { success: false, msg: 'Please enter a valid last name.' };
        if (!this.validateEmail(user.email))
            return { success: false, msg: 'Please enter a valid email.' };
        if (!this.validateUsername(user.username))
            return { success: false, msg: 'Please enter a valid username.' };
        if (!this.validatePassword(user.password))
            return { success: false, msg: 'Please enter a valid password.' };
        return { success: true, msg: 'All good.' };
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (!this.validateUsername(user.username))
            return { success: false, msg: 'Please enter a valid username.' };
        if (!this.validatePassword(user.password))
            return { success: false, msg: 'Please enter a valid password.' };
        return { success: true, msg: 'All good.' };
    };
    ValidateService.prototype.validatePost = function (user) {
        return { success: true, msg: 'All good.' };
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map