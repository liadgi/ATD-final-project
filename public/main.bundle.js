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

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_autosize__ = __webpack_require__("../../../../angular2-autosize/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_useful_swiper__ = __webpack_require__("../../../../angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_createrecipe_createrecipe_component__ = __webpack_require__("../../../../../src/app/components/createrecipe/createrecipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_textandimage_textandimage_component__ = __webpack_require__("../../../../../src/app/components/textandimage/textandimage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_comment_comment_component__ = __webpack_require__("../../../../../src/app/components/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_result_user_result_component__ = __webpack_require__("../../../../../src/app/components/user-result/user-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_top_recipes_top_recipes_component__ = __webpack_require__("../../../../../src/app/components/top-recipes/top-recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_top_users_top_users_component__ = __webpack_require__("../../../../../src/app/components/top-users/top-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_posts_posts_component__ = __webpack_require__("../../../../../src/app/components/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_dashboard_search_dashboard_search_component__ = __webpack_require__("../../../../../src/app/components/dashboard-search/dashboard-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_editrecipe_editrecipe_component__ = __webpack_require__("../../../../../src/app/components/editrecipe/editrecipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_recipe_recipe_component__ = __webpack_require__("../../../../../src/app/components/recipe/recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/components/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_upload_file_upload_file_component__ = __webpack_require__("../../../../../src/app/components/upload-file/upload-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_user_posts_user_posts_component__ = __webpack_require__("../../../../../src/app/components/user-posts/user-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_users_search_users_search_component__ = __webpack_require__("../../../../../src/app/components/users-search/users-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_user_info_user_info_component__ = __webpack_require__("../../../../../src/app/components/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_socketio_service__ = __webpack_require__("../../../../../src/app/services/socketio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_editpost_service__ = __webpack_require__("../../../../../src/app/services/editpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules





 // NOTE : flash messages to show near the submit button


// Components


























// Services







var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'home/search/:query', component: __WEBPACK_IMPORTED_MODULE_25__components_dashboard_search_dashboard_search_component__["a" /* DashboardSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'top-recipes', component: __WEBPACK_IMPORTED_MODULE_22__components_top_recipes_top_recipes_component__["a" /* TopRecipesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'top-users', component: __WEBPACK_IMPORTED_MODULE_23__components_top_users_top_users_component__["a" /* TopUsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/search/:query', component: __WEBPACK_IMPORTED_MODULE_20__components_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/profile/:query', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/search/:query', component: __WEBPACK_IMPORTED_MODULE_32__components_users_search_users_search_component__["a" /* UsersSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-user', component: __WEBPACK_IMPORTED_MODULE_28__components_edit_user_edit_user_component__["a" /* EditUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'createrecipe', component: __WEBPACK_IMPORTED_MODULE_15__components_createrecipe_createrecipe_component__["a" /* CreaterecipeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'editRecipe', component: __WEBPACK_IMPORTED_MODULE_26__components_editrecipe_editrecipe_component__["a" /* EditrecipeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_16__components_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_textandimage_textandimage_component__["a" /* TextandimageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_createrecipe_createrecipe_component__["a" /* CreaterecipeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_comment_comment_component__["a" /* CommentComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_top_recipes_top_recipes_component__["a" /* TopRecipesComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_top_users_top_users_component__["a" /* TopUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_dashboard_search_dashboard_search_component__["a" /* DashboardSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_editrecipe_editrecipe_component__["a" /* EditrecipeComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_recipe_recipe_component__["a" /* RecipeComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_edit_user_edit_user_component__["a" /* EditUserComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_upload_file_upload_file_component__["a" /* UploadFileComponent */],
            __WEBPACK_IMPORTED_MODULE_30_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_20__components_users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_user_result_user_result_component__["a" /* UserResultComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_user_posts_user_posts_component__["a" /* UserPostsComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_users_search_users_search_component__["a" /* UsersSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_user_info_user_info_component__["a" /* UserInfoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_autosize__["a" /* AutosizeModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_useful_swiper__["SwiperModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_34__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_35__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_37__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_38__services_posts_service__["a" /* PostsService */],
            __WEBPACK_IMPORTED_MODULE_39__services_editpost_service__["a" /* EditpostService */],
            __WEBPACK_IMPORTED_MODULE_40__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_36__services_socketio_service__["a" /* SocketioService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"well well-sm\">\n          {{comment.user}}: {{comment.text}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentComponent = (function () {
    function CommentComponent() {
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    return CommentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects__["d" /* Comment */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__objects__["d" /* Comment */]) === "function" && _a || Object)
], CommentComponent.prototype, "comment", void 0);
CommentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comment',
        template: __webpack_require__("../../../../../src/app/components/comment/comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comment/comment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CommentComponent);

var _a;
//# sourceMappingURL=comment.component.js.map

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

module.exports = "<h2 class=\"page-header\">Create Recipe</h2>\n<app-recipe></app-recipe>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/createrecipe/createrecipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_editpost_service__ = __webpack_require__("../../../../../src/app/services/editpost.service.ts");
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
    //post: Post;
    // newIngredient: string;
    // newInstruction: Instruction;
    function CreaterecipeComponent(editpostService) {
        this.editpostService = editpostService;
    }
    CreaterecipeComponent.prototype.ngOnInit = function () {
        this.editpostService.resetPost();
    };
    return CreaterecipeComponent;
}());
CreaterecipeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-createrecipe',
        template: __webpack_require__("../../../../../src/app/components/createrecipe/createrecipe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/createrecipe/createrecipe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_editpost_service__["a" /* EditpostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_editpost_service__["a" /* EditpostService */]) === "function" && _a || Object])
], CreaterecipeComponent);

var _a;
//# sourceMappingURL=createrecipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard-search/dashboard-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard-search/dashboard-search.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Recipes results</h2>\n<app-posts (notifyPageChanged)=\"pageChanged($event)\"></app-posts>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard-search/dashboard-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardSearchComponent = (function () {
    function DashboardSearchComponent(postsService, route) {
        this.postsService = postsService;
        this.route = route;
    }
    DashboardSearchComponent.prototype.ngOnInit = function () {
        this.query = this.route.snapshot.params['query'];
        this.postsService.loadPosts('search', 1, this.query);
    };
    DashboardSearchComponent.prototype.pageChanged = function (page) {
        this.postsService.loadPosts('search', page, this.query);
    };
    return DashboardSearchComponent;
}());
DashboardSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-search',
        template: __webpack_require__("../../../../../src/app/components/dashboard-search/dashboard-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard-search/dashboard-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], DashboardSearchComponent);

var _a, _b;
//# sourceMappingURL=dashboard-search.component.js.map

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

module.exports = "<h2 class=\"page-header\">Feed</h2>\n<app-posts (notifyPageChanged)=\"pageChanged($event)\"></app-posts>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
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
    //username: String;
    function DashboardComponent(postsService) {
        this.postsService = postsService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.postsService.loadPosts('all');
    };
    DashboardComponent.prototype.pageChanged = function (page) {
        this.postsService.loadPosts('all', page);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-user/edit-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"container-fluid\">\n  <div class=\"row content\">\n    <div class=\"col-md-5 clearfix\">\n      <div class=\"container-fuild\">\n        <img class=\"img-responsive img-rounded img-fluid btn-block\" src=\"{{user.profile_pic || 'http://localhost:8080/defult_profile_pic.jpg' }}\" alt=\"Image Here\"><br>\n        <app-upload-file [url]=\"'http://localhost:8080/upload/profile-pic'\" (notifyImageAdded)=\"onNotifyImageAdded($event)\"></app-upload-file> \n      </div>\n    </div>\n\n    <div class=\"col-md-7 clearfix \">\n      <label for=\"username\">Username</label>\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"username\">          \n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-info\" type=\"button\" (click)=\"updateUsername()\">Update</button>\n        </span>\n      </div>\n      <br>\n      <label for=\"password\">Password</label>\n      <div class=\"input-group\">\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"password\">          \n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-info\" type=\"button\" (click)=\"updatePassword()\">Update</button>\n        </span>\n      </div>\n      <br>\n      <label for=\"fname\">First Name</label>\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.fname\" name=\"fname\" placeholder=\"first name\">          \n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-info\" type=\"button\" (click)=\"updateFirstName()\">Update</button>\n        </span>\n      </div>\n      <br>\n      <label for=\"lname\">Last Name</label>\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lname\" name=\"lname\" placeholder=\"last name\">          \n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-info\" type=\"button\" (click)=\"updateLastName()\">Update</button>\n        </span>\n      </div>\n      <br>\n      <label for=\"email\">Email</label>\n      <div class=\"input-group\">\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"email\">          \n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-info\" type=\"button\" (click)=\"updateEmail()\">Update</button>\n        </span>\n      </div>\n      <br>\n      <label for=\"birthday\">Birthday</label>\n      <div class=\"input-group\">\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"user.birthday\" name=\"birthday\" placeholder=\"birthday\">          \n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-info\" type=\"button\" (click)=\"updateBirthday()\">Update</button>\n        </span>\n      </div>\n\n      \n      <!-- <form (submit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label>Username</label>            \n          <textarea autosize type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"username\"></textarea>                      \n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>            \n          <textarea autosize type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"password\"></textarea>                      \n        </div>\n        <div class=\"form-group\">\n          <label>First Name</label>            \n          <textarea autosize type=\"text\" class=\"form-control\" [(ngModel)]=\"user.fname\" name=\"fname\" placeholder=\"first name\"></textarea>                      \n        </div>\n        <div class=\"form-group\">\n          <label>Last Name</label>            \n          <textarea autosize type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lname\" name=\"lname\" placeholder=\"last name\"></textarea>                      \n        </div>\n        <div class=\"form-group\">\n          <label>Email</label>            \n          <textarea autosize type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"email\"></textarea>                      \n        </div>\n        <div class=\"form-group\">\n          <label>Email</label>            \n          <textarea autosize type=\"date\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"email\"></textarea>                      \n        </div>\n      \n        <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n      </form> -->\n    </div>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditUserComponent = (function () {
    function EditUserComponent(router, authService, validateService, route, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.validateService = validateService;
        this.route = route;
        this.flashMessage = flashMessage;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.get('users/profile/' + this.authService.getUsername()).subscribe(function (data) {
            if (data.success)
                _this.user = data.user;
            else
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        }, function (err) { throw err; });
    };
    EditUserComponent.prototype.createCallback = function () {
        var _this = this;
        return function (data) {
            if (data.success)
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            else
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        };
    };
    // Upadte Username
    EditUserComponent.prototype.updateUsername = function () {
        var _this = this;
        if (!this.validateService.validateUsername(this.user.username))
            this.flashMessage.show('Please enter a valid first name.', { cssClass: 'alert-danger', timeout: 5000 });
        else
            this.authService.post('users/update/username', { 'newUsername': this.user.username }).subscribe(function (data) {
                if (data.success) {
                    _this.authService.setUsername(_this.user.username);
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                }
                else
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            });
    };
    EditUserComponent.prototype.updatePassword = function () {
        var _this = this;
        if (!this.validateService.validatePassword(this.user.password))
            this.flashMessage.show('Please enter a valid password.', { cssClass: 'alert-danger', timeout: 5000 });
        else
            this.authService.post('users/update/password', { 'newPassword': this.user.password }).subscribe(function (data) {
                if (data.success) {
                    _this.authService.authenticateUser({ 'username': _this.user.username, 'password': _this.user.password })
                        .subscribe(function (data) {
                        if (data.success)
                            _this.authService.storeUserData(data.token, data.credentials);
                        else
                            _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                    });
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                }
                else
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            });
    };
    EditUserComponent.prototype.updateFirstName = function () {
        this.user.fname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__objects__["e" /* formatName */])(this.user.fname);
        if (!this.validateService.validateName(this.user.fname))
            this.flashMessage.show('Please enter a valid first name.', { cssClass: 'alert-danger', timeout: 5000 });
        else
            this.authService.post('users/update/fname', { 'newFname': this.user.fname }).subscribe(this.createCallback());
    };
    EditUserComponent.prototype.updateLastName = function () {
        this.user.lname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__objects__["e" /* formatName */])(this.user.lname);
        if (!this.validateService.validateName(this.user.lname))
            this.flashMessage.show('Please enter a valid last name.', { cssClass: 'alert-danger', timeout: 5000 });
        else
            this.authService.post('users/update/lname', { 'newLname': this.user.lname }).subscribe(this.createCallback());
    };
    EditUserComponent.prototype.updateEmail = function () {
        if (!this.validateService.validateEmail(this.user.email))
            this.flashMessage.show('Please enter a valid email.', { cssClass: 'alert-danger', timeout: 5000 });
        else
            this.authService.post('users/update/emai', { 'newEmail': this.user.email }).subscribe(this.createCallback());
    };
    EditUserComponent.prototype.updateBirthday = function () {
        this.authService.post('users/update/birthday', { 'newBirthday': this.user.birthday }).subscribe(this.createCallback());
    };
    EditUserComponent.prototype.onNotifyImageAdded = function (image) {
        this.user.profile_pic = image;
    };
    return EditUserComponent;
}());
EditUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-user',
        template: __webpack_require__("../../../../../src/app/components/edit-user/edit-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-user/edit-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], EditUserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editrecipe/editrecipe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editrecipe/editrecipe.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Edit Recipe</h2>\n<app-recipe></app-recipe>"

/***/ }),

/***/ "../../../../../src/app/components/editrecipe/editrecipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditrecipeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditrecipeComponent = (function () {
    function EditrecipeComponent() {
    }
    EditrecipeComponent.prototype.ngOnInit = function () {
    };
    return EditrecipeComponent;
}());
EditrecipeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editrecipe',
        template: __webpack_require__("../../../../../src/app/components/editrecipe/editrecipe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editrecipe/editrecipe.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EditrecipeComponent);

//# sourceMappingURL=editrecipe.component.js.map

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

module.exports = "<div class=\"jumbotron text-center\">\n  <h1> Welcome to <b>foody</b></h1>\n  <p class=\"lead\">The best palce to share your tasty food.</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a> \n    <a class=\"btn btn-info\" [routerLink]=\"['/register']\">Register</a> \n  </div>\n</div>\n\n<div class=\"row\">\n   <div class=\"col-md-4\">\n    <h3>Find</h3>\n    <p>Crave a nice meal? Here you can find the prefect recipes for the prefect meal, with a step by step guide on how to make it.</p>\n  </div>\n   <div class=\"col-md-4\">\n    <h3>Follow</h3>\n    <p>Find a recipe you like? Here you can Follow you favorit cooks to get updated on more of their tasty recipes.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Share</h3>\n    <p>Want the world to konw all about your food? Here you can share all your recipes with the world, so that they to can enjoy your tasty food.</p>\n  </div>\n</div>\n"

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

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"credentials.username\" name=\"username\" placeholder=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"credentials.password\" name=\"password\" placeholder=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>"

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
        this.credentials = new __WEBPACK_IMPORTED_MODULE_5__objects__["g" /* Credentials */]('', '');
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // Validate Fields
        var valid = this.validateService.validateLogin(this.credentials);
        if (!valid.success) {
            this.flashMessage.show(valid.msg, { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        this.authService.authenticateUser(this.credentials)
            .subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.credentials);
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['home']);
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

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#nav-bar-content\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\"><b>foody</b></a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"nav-bar-content\">\n      <div *ngIf=\"authService.loggedIn(); else LoggedOut\">\n        <ul class=\"nav navbar-nav\">\n          <li [ngClass]=\"dropdownClass\">\n            <!-- <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">Dropdown <span class=\"caret\"></span></a> -->\n            <a (click)=toggleDropdown() class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">Search {{searchFor}} <span class=\"caret\"></span></a>            \n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a (click)=\"searchFor = 'Recipes'; toggleDropdown()\">Recipes</a></li>\n              <li><a (click)=\"searchFor = 'Users'; toggleDropdown()\">Users</a></li>\n            </ul>\n          </li>\n        </ul>\n\n        <form class=\"navbar-form navbar-left\" role=\"search\" (submit)=\"onSearchSubmit()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"query\" name=\"query\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></button>\n        </form>\n\n        <ul class=\"nav navbar-nav\">\n          <li [ngClass]=\"topmostDropdownClass\">\n            <a (click)=toggleTopmostDropdown() class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">Top {{topRes}} <span class=\"caret\"></span></a>            \n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a (click)=\"topRes = 'Recipes'; toggleTopmostDropdown()\" [routerLink]=\"['/top-recipes']\">Top Recipes</a></li>\n              <li><a (click)=\"topRes = 'Users'; toggleTopmostDropdown()\" [routerLink]=\"['/top-users']\">Top Users</a></li>\n            </ul>\n          </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/createrecipe']\" href=\"#\">Create Recipe</a></li>\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/home']\">Home</a></li>\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/users/profile/', authService.getUsername()]\">My Profile</a></li>     \n          <!-- other options are kept for now just in case -->\n          <!-- <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">My Profile</a></li>    -->\n          <!-- <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"onProfileClick(authService.getUsername())\" >My Profile</a></li>   -->\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n        </ul>\n      </div>\n\n\n      <ng-template #LoggedOut>\n        <ul class=\"nav navbar-nav\">\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        </ul>\n      </ng-template>\n\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
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
    function NavbarComponent(router, flashMessage, authService, postsService, usersService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.postsService = postsService;
        this.usersService = usersService;
        this.dropdownClass = { 'dropdown': true, 'open': false };
        this.topmostDropdownClass = { 'dropdown': true, 'open': false };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.query = '';
        this.searchFor = 'Recipes';
        this.topRes = '';
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent.prototype.onSearchSubmit = function () {
        // NOTE : prettify that
        if (this.query !== '') {
            if (this.searchFor === "Users") {
                this.usersService.loadUsers('search', 1, this.query);
                this.router.navigate(['users/search', this.query]);
            }
            else if (this.searchFor === "Recipes") {
                this.postsService.loadPosts('search', 1, this.query);
                this.router.navigate(['home/search', this.query]);
            }
            this.query = '';
        }
    };
    NavbarComponent.prototype.toggleDropdown = function () {
        this.dropdownClass.open = !this.dropdownClass.open;
    };
    NavbarComponent.prototype.toggleTopmostDropdown = function () {
        this.topmostDropdownClass.open = !this.topmostDropdownClass.open;
        this.topRes = '';
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */]) === "function" && _e || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>404 PAGE NOT FOUND!</h1>\n  <p class=\"lead\">The URL you requested dose not exist in this server.</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/']\">Go back to the home page</a> \n  </div>\n</div>"

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

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css\">\n<div class=\"jumbotron clearfix\">\n  <div class=\"container-fluid\">\n    <div *ngIf=\"post.images.length > 0; else noImg\">\n      <div class=\"row content\">\n        <div class=\"col-md-5 clearfix\">\n          <!-- <img class=\"img-responsive img-rounded img-fluid\" src=\"{{post.images[post.images.length-1]}}\" alt=\"Image Here\"> -->\n\n          <swiper [config]=\"config\">\n            <div class=\"swiper-wrapper\">\n              <img class=\"swiper-slide\" *ngFor=\"let image of post.images\" [src]=\"image\">\n            </div>\n            <div class=\"swiper-pagination\"></div>\n            <div class=\"swiper-button-next\"></div>\n            <div class=\"swiper-button-prev\"></div>\n          </swiper>\n\n        </div>\n\n        <div class=\"col-md-7\">\n          <h2>{{post.title}}</h2>\n          <p>{{post.description}}</p>\n\n          <h3>\n            <ul *ngIf=\"author\" class=\"nav nav-pills\">\n              <li><a class=\"text-success\">By {{author.username}}</a></li>\n              <li><a class=\"text-success\"><span class=\"badge \">{{post.likes.length}}</span>   Likes</a></li>\n              <li *ngIf=\"!isLiked\"><a class=\"text-success\" (click)=\"onLike()\"><span class=\"text-primary glyphicon glyphicon-thumbs-up\"></span>    Like</a></li>\n              <li *ngIf=\"isLiked\"><a class=\"text-success\" (click)=\"onDislike()\"><span class=\"text-primary glyphicon glyphicon-thumbs-down\"></span>    Dislike</a></li>\n            </ul>\n          </h3>\n          <a *ngIf=coauthors.length>Coauthors:\n          <ul *ngFor=\"let coauthor of coauthors\" class=\"nav nav-pills\">\n            <li><a class=\"text-info\"> {{post.coauthors}}</a></li>\n          </ul>\n          </a>\n          <h5 *ngIf=\"post.creationTime != null\"><span class=\"text-info\">Created at: {{post.creationTime | date: 'yMMMdjms'}}</span></h5>\n          <h5 *ngIf=\"post.updateTime != null\"><span class=\"text-info\">Updated at: {{post.updateTime | date: 'yMMMdjms'}}</span></h5>\n        </div>\n      </div>\n    </div>\n\n    <ng-template #noImg>\n      <div class=\"row content clearfix container-fluid\">\n        <h2>{{post.title}}</h2>\n        <p>{{post.description}}</p>\n\n        <h3>\n          <ul *ngIf=\"author\" class=\"nav nav-pills\">\n            <li><a class=\"text-success\">By {{author.username}}</a></li>\n            <li><a class=\"text-success\"><span class=\"badge \">{{post.likes.length}}</span>   Likes</a></li>\n            <li *ngIf=\"!isLiked\"><a class=\"text-success\" (click)=\"onLike()\"><span class=\"text-primary glyphicon glyphicon-thumbs-up\"></span>    Like</a></li>\n            <li *ngIf=\"isLiked\"><a class=\"text-success\" (click)=\"onDislike()\"><span class=\"text-primary glyphicon glyphicon-thumbs-down\"></span>    Dislike</a></li>\n          </ul>\n        </h3>\n        <a *ngIf=coauthors.length>Coauthors:\n          <ul *ngFor=\"let coauthor of coauthors\" class=\"nav nav-pills\">\n            <li><a class=\"text-info\"> {{post.coauthors}}</a></li>\n        </ul>\n        </a>\n        <h5 *ngIf=\"post.creationTime != null\"><span class=\"text-info\">Created at: {{post.creationTime | date: 'yMMMdjms'}}</span></h5>\n        <h5 *ngIf=\"post.updateTime != null\"><span class=\"text-info\">Updated at: {{post.updateTime | date: 'yMMMdjms'}}</span></h5>\n      </div>\n    </ng-template>\n  </div>\n\n\n\n\n\n  <div id=\"post{{post._id}}\" class=\"collapse\">\n    <br>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Ingredients</li>\n      <li *ngFor=\"let ingredient of post.ingredients\" class=\"list-group-item\">{{ingredient}}</li>\n    </ul>\n    <br>\n\n    <div *ngFor=\"let instruction of post.instructions, let i = index\">\n      <!-- <app-textandimage [text]=\"i+1 +'. '+ instruction.text\" [images]=\"instruction.images\" [relation]=\"7\"> -->\n      <app-textandimage [text]=\"instruction.text\" [images]=\"instruction.images\" [relation]=\"7\">\n      </app-textandimage>\n      <br>\n    </div>\n    <br>\n\n\n\n\n\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Comments</li>\n      <li *ngFor=\"let comment of post.comments\" class=\"list-group-item\">\n        {{comment.user}}: {{comment.text}}\n      </li>\n\n      <br>\n\n      <form (submit)=\"onCommentSubmit()\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"tempComment.text\" name=\"text\" placeholder=\"add your comment...\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n      </form><br>\n      \n    </ul>\n    <!-- <div class=\"form-group\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Comments</li>\n       \n      <li *ngFor=\"let comment of post.comments, let i = index\" class=\"list-group-item\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" value=\"{{comment.user}}; {{comment.user}}\" placeholder=\"some comment\">          \n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteComment($event, i)\">x</button>\n          </span>\n        </div>\n      </li> -->\n\n  </div>\n\n\n\n  <!-- <div class=\"row content container-fluid\">\n    <div *ngIf=\"ofUser\" class=\"btn-toolbar\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"onModifyPost()\">Modify</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeletePost()\">Delete</button>\n    </div>\n    <a data-toggle=\"collapse\" href=\"#post{{post._id}}\">\n        <h3 class=\"text-primary text-center\">\n          <span class=\"glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span>\n        </h3>\n    </a>\n  </div> -->\n\n  <!-- <ul class=\"nav nav-pills\">  \n    <li><a *ngIf=\"ofUser\" (click)=\"onModifyPost()\">Modify</a></li>\n    <li><a *ngIf=\"ofUser\" (click)=\"onModifyPost()\">Delete</a></li>\n    <li>\n      <a data-toggle=\"collapse\" href=\"#post{{post._id}}\">\n         <h3 class=\"text-primary text-center\"> \n          <span class=\"glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span>\n         </h3> \n      </a>\n    </li>\n  </ul> -->\n  <h4>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a *ngIf=\"ofUser\" class=\"text-info\" (click)=\"onModifyPost()\">Modify</a></li>\n      <li><a *ngIf=\"ofUser\" class=\"text-danger\" (click)=\"onDeletePost()\">Delete</a></li>\n      <li>\n        <a data-toggle=\"collapse\" href=\"#post{{post._id}}\">\n          <!-- <h3 class=\"text-primary text-center\"> -->\n          <span class=\"text-primary glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span>\n          <!-- </h3> -->\n        </a>\n    </ul>\n  </h4>\n\n</div>\n<br>"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_editpost_service__ = __webpack_require__("../../../../../src/app/services/editpost.service.ts");
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
    function PostComponent(authService, router, flashMessage, editPostService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.editPostService = editPostService;
        this.postDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };
        this.coauthors = [];
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tempComment = new __WEBPACK_IMPORTED_MODULE_1__objects__["d" /* Comment */](this.post._id, this.authService.getUsername(), '');
        this.isLiked = this.post.likes.includes(this.authService.getUsername());
        this.ofUser = this.post.author === this.authService.getUsername();
        this.authService.get('users/profile/' + this.post.author).subscribe(function (data) {
            if (data.success)
                _this.author = data.user;
            else
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        }, function (err) { throw err; });
    };
    PostComponent.prototype.onCommentSubmit = function () {
        var _this = this;
        console.log(this.tempComment);
        this.authService.post('posts/addComment', { 'comment': this.tempComment, 'postId': this.post._id }).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.post.comments.push(data.comment);
                _this.tempComment = new __WEBPACK_IMPORTED_MODULE_1__objects__["d" /* Comment */](_this.post._id, _this.authService.getUsername(), '');
            }
            else
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    PostComponent.prototype.onLike = function () {
        var _this = this;
        console.log('onLike', { 'postId': this.post._id });
        this.authService.post('posts/like', { 'postId': this.post._id }).subscribe(function (data) {
            if (data.success) {
                _this.isLiked = true;
                _this.post.likes.push(data.likedUser);
            }
            else
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    PostComponent.prototype.onDislike = function () {
        var _this = this;
        this.authService.post('posts/dislike', { 'postId': this.post._id }).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.isLiked = false;
                var index = _this.post.likes.indexOf(data.likedUser);
                if (index != -1)
                    _this.post.likes.splice(index, 1);
            }
            else
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    PostComponent.prototype.onDeletePost = function () {
        var _this = this;
        this.authService.post('posts/deletePost', { 'postId': this.post._id }).subscribe(function (data) {
            if (data.success) {
                _this.postDeleted.emit();
                _this.router.navigate(['/home']);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    PostComponent.prototype.onModifyPost = function () {
        this.editPostService.setPost(this.post);
        this.router.navigate(['/editRecipe']);
    };
    return PostComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__objects__["a" /* Post */]) === "function" && _a || Object)
], PostComponent.prototype, "post", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], PostComponent.prototype, "postDeleted", void 0);
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_editpost_service__["a" /* EditpostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_editpost_service__["a" /* EditpostService */]) === "function" && _f || Object])
], PostComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"postsService.posts && postsService.posts.length != 0; else NoRecipes\">\n    <div *ngFor=\"let post of postsService.posts\">\n        <app-post [post]=\"post\" (postDeleted)=\"onPostDeleted(post)\"></app-post>\n    </div>\n\n    <footer class=\"container-fluid\">\n        <ul class=\"pager\">\n            <li [ngClass]=\"{ 'previous': true, 'disabled': !hasPreviousPage }\"><a (click)=\"onPreviousPage()\">&larr; Older</a></li>\n            <li [ngClass]=\"{ 'next': true, 'disabled': !hasNextPage }\" ><a (click)=\"onNextPage()\">Newer &rarr;</a></li>\n        </ul>\n    </footer>\n</div>\n<ng-template #NoRecipes>\n    <div>\n        <!-- TODO: fill in a loader icon -->\n    </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostsComponent = (function () {
    function PostsComponent(router, authService, flashMessage, route, postsService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.postsService = postsService;
        this.notifyPageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 1;
        this.hasPreviousPage = false;
        this.hasNextPage = false;
        this.subscriptionUrlChange = this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
                _this.page = 1;
            }
        });
        this.subscription = this.postsService.getPostsObservable().subscribe(function (posts) {
            if (_this.page == 1)
                _this.hasPreviousPage = false; // disable previous
            else
                _this.hasPreviousPage = true;
            if (!_this.postsService.posts || _this.postsService.posts.length < 10)
                _this.hasNextPage = false; // disable next
            else
                _this.hasNextPage = true;
        });
    };
    PostsComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
        this.subscriptionUrlChange.unsubscribe();
    };
    // NOTE : add modal and green alert
    PostsComponent.prototype.onPostDeleted = function (post) {
        var index = this.postsService.posts.findIndex(function (pst) { return (pst === post); });
        if (index != -1) {
            this.postsService.posts.splice(index, 1);
        }
    };
    PostsComponent.prototype.onPreviousPage = function () {
        if (this.hasPreviousPage) {
            this.page--;
            this.notifyPageChanged.emit(this.page);
        }
    };
    PostsComponent.prototype.onNextPage = function () {
        if (this.hasNextPage) {
            this.page++;
            this.notifyPageChanged.emit(this.page);
        }
    };
    return PostsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PostsComponent.prototype, "notifyPageChanged", void 0);
PostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__("../../../../../src/app/components/posts/posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/posts/posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */]) === "function" && _f || Object])
], PostsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=posts.component.js.map

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

module.exports = "<app-user-info *ngIf=\"user\" [user]=\"user\"></app-user-info> \n<hr>\n<app-user-posts *ngIf=\"user\" [username]=\"user.username\"></app-user-posts> \n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function ProfileComponent(router, authService, route, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.get('users/profile/' + this.route.snapshot.params.query).subscribe(function (data) {
            if (data.success)
                _this.user = data.user;
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/']);
            }
        }, function (err) { throw err; });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/recipe/recipe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/recipe/recipe.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\" class=\"jumbotron\">\n  <div class=\"row content\">          \n    <div class=\"col-md-5 clearfix\">\n      <div class=\"container-fuild\">\n        <img class=\"img-responsive img-rounded img-fluid btn-block\" src=\"{{post.images[post.images.length-1] || 'http://localhost:8080/placeholder.JPG' }}\" alt=\"Image Here\"><br>\n        <app-upload-file [url]=\"'http://localhost:8080/upload/post-pic'\" (notifyImageAdded)=\"onNotifyImageAdded($event,post.images)\"></app-upload-file> \n      </div>\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"form-group\">\n        <label>Title</label>            \n        <textarea autosize type=\"text\" class=\"form-control input-lg\" [(ngModel)]=\"post.title\" name=\"title\" placeholder=\"add title here\"></textarea>                      \n      </div>    \n      <div class=\"form-group\">\n        <label>Description</label>\n        <textarea autosize type=\"text\" class=\"form-control\" [(ngModel)]=\"post.description\" name=\"description\" placeholder=\"add description here\"></textarea>            \n      </div>\n    </div>\n  </div><br><br>\n\n  <div class=\"form-group\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Ingredients</li>\n       \n      <li *ngFor=\"let ingredient of post.ingredients, let i = index; trackBy:customTrackBy\" class=\"list-group-item\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.ingredients[i]\" name=\"ingredient_{{i}}\" value=\"{{ingredient}}\" placeholder=\"some Ingredient\">          \n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"removeIngredient(i)\">x</button>\n          </span>\n        </div>\n      </li>\n\n      <li class=\"list-group-item\">\n        <form (submit)=\"addIngredient()\"> \n          <label>Add Ingredient</label>          \n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newIngredient\" name=\"newIngredient\" placeholder=\"add Ingredient\">\n            <span class=\"input-group-btn\">\n              <button class=\"btn btn-info\" type=\"button\" (click)=\"addIngredient()\">+</button>\n            </span>\n          </div>\n        </form>\n      </li>\n    </ul>    \n  </div><br>\n\n  <div *ngFor=\"let instruction of post.instructions, let i = index\">\n    <!-- <div class=\"panel panel-default\"> -->\n      <!-- <div class=\"panel-body\"> -->\n        <div class=\"row content\">\n          <div class=\"col-md-5 clearfix\">\n            <div class=\"container-fuild\">\n              <img class=\"img-responsive img-rounded img-fluid btn-block\" src=\"{{instruction.images[instruction.images.length-1] || 'http://localhost:8080/placeholder.JPG' }}\" alt=\"Image Here\"><br>\n              <app-upload-file [url]=\"'http://localhost:8080/upload/post-pic'\" (notifyImageAdded)=\"onNotifyImageAdded($event,instruction.images)\"></app-upload-file> \n            </div>          \n          </div>\n          <br>\n          <div class=\"col-md-6 form-group\">\n            <textarea autosize type=\"text\" class=\"form-control\" [(ngModel)]=\"instruction.text\" name=\"instruction i\" placeholder=\"add instruction\"></textarea>\n          </div>        \n          <div class=\"col-md-1 form-group\">          \n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"removeInstruction(i)\">x</button>          \n          </div>\n        </div>\n      <!-- </div> -->\n    <!-- </div> -->\n    <br>\n  </div>\n\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading container-fluid\">\n      <div class=\"row content\">\n        <div class=\"col-md-11 clearfix\">\n          <h3 class=\"panel-title\">Add Instruction</h3>\n        </div>\n        <div class=\"col-md-1 clearfix\">        \n          <button class=\"btn btn-info\" type=\"button\" (click)=\"addInstruction()\">+</button>          \n        </div>\n      </div>      \n    </div>\n    <div class=\"panel-body container-fluid\">\n      <div class=\"row content\">\n        <div class=\"col-md-5 clearfix\">\n          <div class=\"container-fuild\">\n            <img class=\"img-responsive img-rounded img-fluid btn-block\" src=\"{{newInstruction.images[newInstruction.images.length-1] || 'http://localhost:8080/placeholder.JPG' }}\" alt=\"Image Here\"><br>\n            <app-upload-file [url]=\"'http://localhost:8080/upload/post-pic'\" (notifyImageAdded)=\"onNotifyImageAdded($event,newInstruction.images)\"></app-upload-file> \n          </div>  \n        </div>\n        <br>\n        <div class=\"col-md-7 form-group\">\n          <textarea autosize type=\"text\" class=\"form-control\" [(ngModel)]=\"newInstruction.text\" name=\"newInstructionText\" placeholder=\"add instruction\"></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n\n\n    <div class=\"form-group\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Co Authors</li>\n       \n      <li *ngFor=\"let coauthor of post.coauthors, let i = index\" class=\"list-group-item\">\n        <div class=\"input-group\">\n          {{coauthor}}          \n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"removeCoauthor(i)\">x</button>\n          </span>\n        </div>\n      </li>\n\n      <li class=\"list-group-item\">\n        <form (submit)=\"addCoauthor()\"> \n          <label>Add Co-Author</label>          \n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newCoauthor\" name=\"newIngredient\" placeholder=\"add Co-Author\">\n            <span class=\"input-group-btn\">\n              <button class=\"btn btn-info\" type=\"button\" (click)=\"addCoauthor()\">+</button>\n            </span>\n          </div>\n        </form>\n      </li>\n    </ul>    \n  </div><br>\n\n\n  <button class=\"btn btn-primary\" type=\"button\" (click)=\"onPostSubmit()\">Submit</button>\n  <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">   -->\n</div><br><br>"

/***/ }),

/***/ "../../../../../src/app/components/recipe/recipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_editpost_service__ = __webpack_require__("../../../../../src/app/services/editpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipeComponent = (function () {
    function RecipeComponent(editpostService, flashMessage, validateService, authService, router) {
        this.editpostService = editpostService;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RecipeComponent.prototype.ngOnInit = function () {
        this.post = this.editpostService.post;
        this.newCoauthor = '';
        this.newIngredient = '';
        this.newInstruction = new __WEBPACK_IMPORTED_MODULE_2__objects__["c" /* Instruction */]([], '');
    };
    RecipeComponent.prototype.onPostSubmit = function () {
        var _this = this;
        // TODO : Validate Fields
        var valid = this.validateService.validatePost(this.post);
        if (!valid.success) {
            this.flashMessage.show(valid.msg, { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        var callback = function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/home']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                // TODO : what about this
                //this.router.navigate(['/createrecipe']);
            }
        };
        if (this.router.url === '/createrecipe') {
            this.authService.post('posts/createpost', { 'post': this.post }).subscribe(callback);
        }
        else if (this.router.url === '/editRecipe') {
            this.authService.post('posts/editPost', { 'post': this.post }).subscribe(callback);
        }
    };
    RecipeComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    RecipeComponent.prototype.addIngredient = function () {
        if (this.newIngredient === '')
            this.flashMessage.show('Please enter valid ingredient', { cssClass: 'alert-danger', timeout: 5000 });
        else {
            this.post.ingredients.push(this.newIngredient);
            this.newIngredient = '';
        }
    };
    RecipeComponent.prototype.removeIngredient = function (i) {
        this.post.ingredients.splice(i, 1);
    };
    RecipeComponent.prototype.addInstruction = function (i) {
        this.post.instructions.push(this.newInstruction);
        this.newInstruction = new __WEBPACK_IMPORTED_MODULE_2__objects__["c" /* Instruction */]([], '');
    };
    RecipeComponent.prototype.removeInstruction = function (i) {
        this.post.instructions.splice(i, 1);
    };
    RecipeComponent.prototype.onNotifyImageAdded = function (image, images) {
        images.push(image);
    };
    RecipeComponent.prototype.addCoauthor = function () {
        var _this = this;
        if (this.newCoauthor === '')
            this.flashMessage.show('Please enter valid coauthor', { cssClass: 'alert-danger', timeout: 5000 });
        else {
            this.getUser(this.newCoauthor, function (user) {
                if (user && user.username && !_this.post.coauthors.includes(user.username))
                    _this.post.coauthors.push(user.username);
                else
                    _this.flashMessage.show('Please enter valid coauthor', { cssClass: 'alert-danger', timeout: 5000 });
                _this.newCoauthor = '';
            });
        }
    };
    RecipeComponent.prototype.removeCoauthor = function (i) {
        this.post.coauthors.splice(i, 1);
    };
    RecipeComponent.prototype.getUser = function (username, callback) {
        this.authService.get('users/profile/' + username).subscribe(function (data) {
            if (data.success)
                callback(data.user);
            else
                callback(null);
        }, function (err) { throw err; });
    };
    return RecipeComponent;
}());
RecipeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-recipe',
        template: __webpack_require__("../../../../../src/app/components/recipe/recipe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/recipe/recipe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_editpost_service__["a" /* EditpostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_editpost_service__["a" /* EditpostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _e || Object])
], RecipeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=recipe.component.js.map

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

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"fname\">First name</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.fname\" name=\"fname\" placeholder=\"first name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"lname\">Last name</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lname\" name=\"lname\" placeholder=\"last name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"birthday\">Birthday</label>\n    <input type=\"date\" class=\"form-control\" [(ngModel)]=\"user.birthday\" name=\"birthday\" placeholder=\"birthday\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n</form>\n \n"

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
        this.user = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__objects__["f" /* newUser */])();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.user.fname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__objects__["e" /* formatName */])(this.user.fname);
        this.user.lname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__objects__["e" /* formatName */])(this.user.lname);
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

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"this.images.length > 0 && this.relation > 1 && this.relation < 11; else noImg\">\n    <div class=\"row content\">\n      <div class=\"col-md-{{12 - relation}} container-fluid clearfix\">\n        <img class=\"img-responsive img-roundedimg-fluid\" src=\"{{images[images.length-1]}}\" alt=\"Image Here\">      \n      </div>\n      <div class=\"col-md-{{relation}} container-fluid clearfix\">\n        <p> {{text}}</p>\n      </div>\n    </div>\n  </div>\n    \n  <ng-template #noImg>\n    <div class=\"row content\">\n      <p>{{text}}</p>\n    </div>\n  </ng-template>\n</div>"

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

/***/ "../../../../../src/app/components/top-recipes/top-recipes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/top-recipes/top-recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-posts (notifyPageChanged)=\"pageChanged($event)\"></app-posts>"

/***/ }),

/***/ "../../../../../src/app/components/top-recipes/top-recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socketio_service__ = __webpack_require__("../../../../../src/app/services/socketio.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopRecipesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopRecipesComponent = (function () {
    function TopRecipesComponent(postsService, socketioService) {
        this.postsService = postsService;
        this.socketioService = socketioService;
        this.messages = [];
    }
    TopRecipesComponent.prototype.ngOnInit = function () {
        this.postsService.loadPosts('top');
    };
    TopRecipesComponent.prototype.pageChanged = function (page) {
        this.postsService.loadPosts('top', page);
    };
    return TopRecipesComponent;
}());
TopRecipesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-top-recipes',
        template: __webpack_require__("../../../../../src/app/components/top-recipes/top-recipes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/top-recipes/top-recipes.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_socketio_service__["a" /* SocketioService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_socketio_service__["a" /* SocketioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_socketio_service__["a" /* SocketioService */]) === "function" && _b || Object])
], TopRecipesComponent);

var _a, _b;
//# sourceMappingURL=top-recipes.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/top-users/top-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/top-users/top-users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-users (notifyPageChanged)=\"pageChanged($event)\"></app-users>\n"

/***/ }),

/***/ "../../../../../src/app/components/top-users/top-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopUsersComponent = (function () {
    function TopUsersComponent(usersService) {
        this.usersService = usersService;
    }
    TopUsersComponent.prototype.ngOnInit = function () {
        this.usersService.loadUsers('top');
    };
    TopUsersComponent.prototype.pageChanged = function (page) {
        this.usersService.loadUsers('top', page);
    };
    return TopUsersComponent;
}());
TopUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-top-users',
        template: __webpack_require__("../../../../../src/app/components/top-users/top-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/top-users/top-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], TopUsersComponent);

var _a;
//# sourceMappingURL=top-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/upload-file/upload-file.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/upload-file/upload-file.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"file\"  class=\"btn btn-primary btn-block\" name=\"image\" ng2FileSelect [uploader]=\"uploader\" />\n<button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload</button>"

/***/ }),

/***/ "../../../../../src/app/components/upload-file/upload-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadFileComponent = (function () {
    function UploadFileComponent(flashMessage) {
        this.flashMessage = flashMessage;
        this.notifyImageAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UploadFileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this.url, itemAlias: 'image', authToken: localStorage.getItem('authToken') });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, res, status, headers) {
            if (res.success == 'false')
                _this.flashMessage.show('Error uploading image', { cssClass: 'alert-success', timeout: 5000 });
            else {
                var image = JSON.parse(res).path;
                _this.flashMessage.show('Image Uploaded!', { cssClass: 'alert-success', timeout: 5000 });
                // console.log("ImageUpload:uploaded:", item, status, res);
                _this.notifyImageAdded.emit(image);
            }
        };
    };
    return UploadFileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], UploadFileComponent.prototype, "url", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], UploadFileComponent.prototype, "notifyImageAdded", void 0);
UploadFileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload-file',
        template: __webpack_require__("../../../../../src/app/components/upload-file/upload-file.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/upload-file/upload-file.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], UploadFileComponent);

var _a, _b;
//# sourceMappingURL=upload-file.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-info/user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div *ngIf=\"user\" class=\"jumbotron clearfix container-fluid clearfix\">\n  <div class=\"row content\">\n    <div class=\"col-md-4 clearfix\">\n      <img class=\"img-responsive img-rounded btn-block\" src=\"{{this.user.profile_pic}}\" alt=\"Image Here\">\n    </div>\n\n    <div class=\"col-md-8\">\n      <h2>{{user.fname}} {{user.lname}}</h2>\n\n      <ul class=\"nav nav-pills\">\n        <li>\n          <a class=\"lead text-success\" (click)=\"onShowFollowers()\">\n            <span class=\"badge\">{{user.followers.length}}</span>      Followers\n          </a>\n        </li>\n        <!-- NOTE: show followers list on click-->\n        <li>\n          <a class=\"lead text-success\" (click)=\"onShowFollowing()\">\n            <span class=\"badge\">{{user.following.length}}</span>      Following\n          </a>\n        </li>  \n        <li *ngIf=\"user._id !== this.authService.getId() && !this.isFollowing\">\n          <a class=\"lead text-info\" (click)=\"onFollow()\">\n            <span class=\"glyphicon glyphicon-plus-sign\"></span>      Follow \n          </a>  \n        </li>\n        <li *ngIf=\"user._id !== this.authService.getId() && this.isFollowing\">\n          <a class=\"lead text-danger\" (click)=\"onUnfollow()\">\n            <span class=\"glyphicon glyphicon-minus-sign\"></span>      Unfollow \n          </a>  \n        </li>\n      </ul>\n      \n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Username: {{user.username}}</li>\n        <li class=\"list-group-item\">Email: {{user.email}}</li>\n        <li class=\"list-group-item\">Birthday: {{user.birthday | date: 'yMMMd'}}</li>\n      </ul>\n      <div *ngIf=\"authService.getId() === user._id\">\n        <a class=\"btn btn-primary btn-block\" [routerLink]=\"['/edit-user']\">Edit Profile</a>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n\n<div class=\"modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"open\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Modal title</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body…</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserInfoComponent = (function () {
    function UserInfoComponent(router, authService, route, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.flashMessage = flashMessage;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        if (!this.user) {
            this.flashMessage.show('Invalid User', { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/']);
        }
        else
            this.isFollowing = this.user.followers.includes(this.authService.getUsername());
    };
    UserInfoComponent.prototype.onFollow = function () {
        var _this = this;
        this.authService.post('users/follow', { username: this.user.username }).subscribe(function (data) {
            if (data.success) {
                _this.isFollowing = true;
                _this.user.followers.push(_this.authService.getUsername());
            }
            else
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    UserInfoComponent.prototype.onUnfollow = function () {
        var _this = this;
        this.authService.post('users/unfollow', { username: this.user.username }).subscribe(function (data) {
            if (data.success) {
                _this.isFollowing = false;
                var index = _this.user.followers.indexOf(_this.authService.getUsername());
                if (index != -1) {
                    _this.user.followers.splice(index, 1);
                }
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    UserInfoComponent.prototype.onShowFollowing = function () {
        console.log('!Show following: implement this');
    };
    UserInfoComponent.prototype.onShowFollowers = function () {
        console.log('!Show followers: implement this');
    };
    return UserInfoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__objects__["b" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__objects__["b" /* User */]) === "function" && _a || Object)
], UserInfoComponent.prototype, "user", void 0);
UserInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-info',
        template: __webpack_require__("../../../../../src/app/components/user-info/user-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-info/user-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], UserInfoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-posts/user-posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-posts/user-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Users posts</h2>\n<app-posts (notifyPageChanged)=\"pageChanged($event)\"></app-posts>"

/***/ }),

/***/ "../../../../../src/app/components/user-posts/user-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserPostsComponent = (function () {
    function UserPostsComponent(postsService) {
        this.postsService = postsService;
    }
    UserPostsComponent.prototype.ngOnInit = function () {
        this.postsService.loadPosts("user", 1, this.username);
    };
    UserPostsComponent.prototype.pageChanged = function (page) {
        this.postsService.loadPosts("user", page, this.username);
    };
    return UserPostsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserPostsComponent.prototype, "username", void 0);
UserPostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-posts',
        template: __webpack_require__("../../../../../src/app/components/user-posts/user-posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-posts/user-posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object])
], UserPostsComponent);

var _a;
//# sourceMappingURL=user-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-result/user-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-result/user-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\n  <div class=\"container-fluid\">\n\n\n        <h1><a [routerLink]=\"['/users/profile', userResult._id]\">{{userResult.username}}</a></h1>\n        <h2>Followers: {{userResult.followers_count}}</h2>\n        <h2>Following: {{userResult.following_count}}</h2>\n    \n        <div *ngIf=\"userResult._id !== this.authService.getId()\">\n          <button class=\"btn btn-info pull-right\" *ngIf=\"!this.isFollowing\" (click)=\"onFollow()\">Follow</button>\n          <button class=\"btn btn-info pull-right\" *ngIf=\"isFollowing\" (click)=\"onUnfollow()\">Unfollow</button>\n        </div>\n\n  </div>\n\n\n</div>\n<br>"

/***/ }),

/***/ "../../../../../src/app/components/user-result/user-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserResultComponent = (function () {
    function UserResultComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    UserResultComponent.prototype.ngOnInit = function () {
        this.isFollowing = this.userResult.followers.includes(this.authService.getUsername());
    };
    UserResultComponent.prototype.onFollow = function () {
        var _this = this;
        this.authService.post('users/follow', { username: this.userResult.username }).subscribe(function (data) {
            if (data.success) {
                _this.isFollowing = true;
                //TODO: make shit change
            }
            else
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    UserResultComponent.prototype.onUnfollow = function () {
        var _this = this;
        this.authService.post('users/unfollow', { username: this.userResult.username }).subscribe(function (data) {
            if (data.success) {
                _this.isFollowing = false;
                //TODO: make shit change
            }
            else
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    return UserResultComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects__["b" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__objects__["b" /* User */]) === "function" && _a || Object)
], UserResultComponent.prototype, "userResult", void 0);
UserResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-result',
        template: __webpack_require__("../../../../../src/app/components/user-result/user-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-result/user-result.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], UserResultComponent);

var _a, _b, _c;
//# sourceMappingURL=user-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users-search/users-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users-search/users-search.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Users results</h2>\n<app-users (notifyPageChanged)=\"pageChanged($event)\"></app-users>"

/***/ }),

/***/ "../../../../../src/app/components/users-search/users-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersSearchComponent = (function () {
    function UsersSearchComponent(usersService, route) {
        this.usersService = usersService;
        this.route = route;
    }
    UsersSearchComponent.prototype.ngOnInit = function () {
        this.query = this.route.snapshot.params['query'];
        this.usersService.loadUsers('search', 1, this.query);
    };
    UsersSearchComponent.prototype.pageChanged = function (page) {
        this.usersService.loadUsers('search', page, this.query);
    };
    return UsersSearchComponent;
}());
UsersSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users-search',
        template: __webpack_require__("../../../../../src/app/components/users-search/users-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users-search/users-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], UsersSearchComponent);

var _a, _b;
//# sourceMappingURL=users-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Users</h2>\n<div *ngFor=\"let user of usersService.users\">\n  <app-user-info [user]=\"user\"></app-user-info>\n</div>\n<footer class=\"container-fluid\">\n  <ul class=\"pager\">\n    <li [ngClass]=\"{ 'previous': true, 'disabled': !hasPreviousPage }\"><a (click)=\"onPreviousPage()\">&larr; Older</a></li>\n    <li [ngClass]=\"{ 'next': true, 'disabled': !hasNextPage }\"><a (click)=\"onNextPage()\">Newer &rarr;</a></li>\n  </ul>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// NOTE : fix the code duplication.
var UsersComponent = (function () {
    function UsersComponent(usersService, router, route, authService) {
        this.usersService = usersService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.notifyPageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 1;
        this.hasPreviousPage = false;
        this.hasNextPage = false;
        this.subscriptionUrlChange = this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationStart */]) {
                _this.page = 1;
            }
        });
        this.subscription = this.usersService.getUsersObservable().subscribe(function (posts) {
            if (_this.page == 1)
                _this.hasPreviousPage = false; // disable previous
            else
                _this.hasPreviousPage = true;
            if (_this.usersService.users || _this.usersService.users.length < 10)
                _this.hasNextPage = false; // disable next
            else
                _this.hasNextPage = true;
        });
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
        this.subscriptionUrlChange.unsubscribe();
    };
    UsersComponent.prototype.onPreviousPage = function () {
        if (this.hasPreviousPage) {
            this.page--;
            this.notifyPageChanged.emit(this.page);
        }
    };
    UsersComponent.prototype.onNextPage = function () {
        if (this.hasNextPage) {
            this.page++;
            this.notifyPageChanged.emit(this.page);
        }
    };
    return UsersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], UsersComponent.prototype, "notifyPageChanged", void 0);
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/components/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], UsersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=users.component.js.map

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
/* harmony export (immutable) */ __webpack_exports__["e"] = formatName;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Credentials; });
/* harmony export (immutable) */ __webpack_exports__["f"] = newUser;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* unused harmony export newComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Comment; });
/* unused harmony export newInstruction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Instruction; });
/* unused harmony export newPost */
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

function newUser() {
    return new User('', '', '', '', '', new Date);
}
var User = (function () {
    function User(username, password, fname, lname, email, birthday) {
        this.username = username;
        this.password = password;
        this.fname = formatName(fname);
        this.lname = formatName(lname);
        this.email = email;
        this.birthday = birthday;
        this.profile_pic = '';
        this.followers = [];
        this.followers_count = 0;
        this.following = [];
        this.following_count = 0;
    }
    return User;
}());

function newComment() {
    return new Comment('', '', '');
}
var Comment = (function () {
    function Comment(postId, user, text) {
        this.postId = postId;
        this.user = user;
        this.text = text;
    }
    return Comment;
}());

function newInstruction() {
    return new Instruction([], '');
}
var Instruction = (function () {
    function Instruction(images, text) {
        this.images = images;
        this.text = text;
    }
    return Instruction;
}());

function newPost() {
    return new Post('', '', '', [], [], [], []);
}
var Post = (function () {
    function Post(author, title, description, ingredients, images, instructions, coauthors) {
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
        this.coauthors = coauthors;
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
    AuthService.prototype.get = function (url, page) {
        if (page === void 0) { page = 1; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.getToken());
        headers.append('Content-type', 'application/json');
        var params = { page: page };
        var options = { headers: headers, params: params };
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    AuthService.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.getToken());
        headers.append('Content-type', 'application/json');
        return this.http.post(url, data, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        return this.post('users/register', user);
    };
    AuthService.prototype.authenticateUser = function (credentials) {
        return this.post('users/authenticate', credentials);
    };
    AuthService.prototype.getUsername = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.setUsername = function (username) {
        localStorage.setItem('username', username);
    };
    AuthService.prototype.getId = function () {
        return localStorage.getItem('user_id');
    };
    AuthService.prototype.setId = function (id) {
        localStorage.setItem('user_id', id);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('authToken');
    };
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem('authToken', token);
    };
    AuthService.prototype.storeUserData = function (token, credentials) {
        this.setToken(token);
        this.setId(credentials._id);
        this.setUsername(credentials.username);
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('authToken');
    };
    AuthService.prototype.logout = function () {
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

/***/ "../../../../../src/app/services/editpost.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditpostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditpostService = (function () {
    function EditpostService(authService) {
        this.authService = authService;
    }
    EditpostService.prototype.setPost = function (post) {
        this.post = post;
    };
    EditpostService.prototype.resetPost = function () {
        this.post = new __WEBPACK_IMPORTED_MODULE_1__objects__["a" /* Post */](this.authService.getUsername(), '', '', [], [], [], []);
        // this.post = new Post(
        //     this.authService.getUsername(),
        //     'Oven Roasted Black Pepper Chicken',
        //     'These juicy and peppery chicken thighs are ideal for your weeknight dinner rotation!',
        //     [
        //       '6 Chicken thighs (bone-in)',
        //       '1 tbsp Ginger-Garlic Paste (or 1/2 tbsp grated garlic + 1/2 tbsp grated fresh ginger)',
        //       '3 tbsp Worcestershire Sauce',
        //       '1 tsp Salt (or according to taste)',
        //       '1 tbsp fresh ground pepper (I like it a little coarsely ground)',
        //       'Juice of 1/2 lime',
        //       '1 tbsp freshly chopped cilantro, for garnish'],
        //     [  
        //       'http://picturetherecipe.com/wp-content/uploads/2015/01/Roasted-Black-Pepper-Chicken-by-PictureTheRecipe-com.jpg',             
        //       'http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg',
        //     ],
        //     [
        //       new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Rinse and trim any excess fat off your chicken thighs, then make three slits in the meat to the bone. (This helps the marinade flavor just the skin of the chicken but the inner meat too)'),
        //       new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Mix together the garlic- ginger paste , Worcestershire sauce, salt, freshly ground black pepper and squeeze in the juice of half a lime.'),
        //       new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg','http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Spoon over the mixed marinade over the chicken thighs (you can do it in a zip lock bag if touching chicken makes you squeamish) and massage it into the chicken to coat both sides well. Cover and let the chicken marinade in the fridge for anywhere from 30 minutes to overnight.'),
        //       new Instruction([],"Pre-heat your oven to 400F and arrange your chicken in an oven proof skillet or casserole dish and roast the chicken for 40 minutes (or more depending on the size of your chicken...but keep in mind the slits will help cook the chicken faster than if you didn't score them) until the skin turns a lovely golden and the juices run clear when you poke it with a knife."),
        //       new Instruction([],'Garnish with some freshly chopped cilantro (parsley works too) and serve hot with fresh veggies, rice or mashed potatoes.')
        //     ]
        //   );
    };
    return EditpostService;
}());
EditpostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], EditpostService);

var _a;
//# sourceMappingURL=editpost.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(authService) {
        this.authService = authService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    PostsService.prototype.loadPosts = function (type, page, query) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (query === void 0) { query = null; }
        this.posts = [];
        var callback = function (data) {
            // console.log('GOT DATA: ',data);
            _this.posts = data.posts;
            _this.subject.next(_this.posts);
        };
        var error = function (err) { console.log(err); return false; };
        if (type === 'all') {
            this.authService.get('posts', page).subscribe(callback, error);
        }
        else if (type === 'top') {
            this.authService.get('posts/top', page).subscribe(callback, error);
        }
        else if (type === 'user') {
            this.authService.get('posts/user/' + query, page).subscribe(callback, error);
        }
        else if (type === 'search') {
            this.authService.get('posts/search/' + query, page).subscribe(callback, error);
        }
    };
    PostsService.prototype.getPostsObservable = function () {
        return this.subject.asObservable();
    };
    return PostsService;
}());
PostsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], PostsService);

var _a;
//# sourceMappingURL=posts.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/socketio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketioService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketioService = (function () {
    function SocketioService() {
        this.url = 'http://localhost:8080';
        //this.socket = io(this.url);
    }
    SocketioService.prototype.sendMessage = function (event, message) {
        this.socket.emit(event, message);
    };
    SocketioService.prototype.getMessages = function (event) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url);
            _this.socket.on(event, function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return SocketioService;
}());
SocketioService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SocketioService);

//# sourceMappingURL=socketio.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = (function () {
    function UsersService(authService) {
        this.authService = authService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    UsersService.prototype.loadUsers = function (type, page, query) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (query === void 0) { query = null; }
        this.users = [];
        if (type === 'top') {
            this.authService.get('users/top', page).subscribe(function (data) {
                _this.users = data.users;
                _this.subject.next(_this.users);
            }, function (err) { console.log(err); return false; });
        }
        else if (type === 'search') {
            this.authService.get('users/search/' + query, page).subscribe(function (data) {
                _this.users = data.users;
            }, function (err) { console.log(err); return false; });
        }
    };
    UsersService.prototype.getUsersObservable = function () {
        return this.subject.asObservable();
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

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
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map