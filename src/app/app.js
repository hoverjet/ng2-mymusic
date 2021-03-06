"use strict";
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
 * Angular 2 decorators and services
 */
var core_1 = require('angular2/core');
//import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router'
var router_1 = require('angular2/router');
//import {pluralize} from '../../typings/browser/ambient/pluralize/pluralize'
var common_1 = require('angular2/common');
// import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
var router_active_1 = require('./directives/router-active');
var home_1 = require('./home/home');
var details_show_cmp_1 = require('./details/details_show.cmp');
var artist_form_cmp_1 = require('./artists/artist_form.cmp');
var list_cmp_1 = require('./artists/list.cmp');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(_router) {
        this._router = _router;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack';
        this.url = 'https://twitter.com/AngularClass';
        // let list_type = this._routeParams.get('type');
        // console.log('type', list_type)
    }
    App.prototype.ngOnInit = function () {
        //this._router.navigate(['/Home']);
        //this._router.navigate(['/About', ['Details']]);
        // this._router.parent.navigate(['/About']);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            providers: common_1.FORM_PROVIDERS.slice(),
            directives: [router_1.ROUTER_DIRECTIVES, router_active_1.RouterActive, details_show_cmp_1.DetailsShow, artist_form_cmp_1.ArtistForm, list_cmp_1.MMList],
            pipes: [],
            styles: [require('./app.scss')],
            template: require('!jade!./app.jade')()
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, name: 'Home' },
            { path: '/list', component: list_cmp_1.MMList, name: 'MMList' },
            // Async load a component using Webpack's require with es6-promise-loader
            { path: '/about', loader: function () { return require('./about/about')('About'); }, name: 'About' },
            { path: '/**', redirectTo: ['Home'] }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], App);
    return App;
}());
exports.App = App;
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
//# sourceMappingURL=app.js.map