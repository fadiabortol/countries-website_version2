"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CountriesComponent = void 0;
var core_1 = require("@angular/core");
var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(apiCaller) {
        this.apiCaller = apiCaller;
        this.MyCountries = [];
        //alert('Constructor')
    }
    CountriesComponent.prototype.ngOnInit = function () {
        // alert('Initi')
        // fetch('https://restcountries.com/v3.1/all')
        //   .then((response) => response.json())
        //   .then((json) => {
        //     for (let i = 0; i < json.length; i++) {
        //       let c = new CountryInfo ();
        //       //console.log(json[i]);
        //       c.name = json[i].name.common;
        //       c.flag = json[i].flags.png;
        //       c.population = json[i].population;
        //       this.MyCountries.push(c);
        //     }
        //     //alert(this.MyCountries.length);
        //   });
        //this.getData();
        this.getDataV2();
    };
    CountriesComponent.prototype.getDataV2 = function () {
        var _this = this;
        this.apiCaller
            .get('https://restcountries.com/v3.1/all')
            .subscribe(function (json) {
            for (var i = 0; i < json.length; i++) {
                var c = new CountryInfo();
                //console.log(json[i]);
                c.name = json[i].name.common + 'x';
                c.flag = json[i].flags.png;
                c.population = json[i].population;
                _this.MyCountries.push(c);
            }
        });
    };
    CountriesComponent.prototype.getData = function () {
        var _this = this;
        //alert('Initi')
        fetch('https://restcountries.com/v3.1/all')
            .then(function (response) { return response.json(); })
            .then(function (json) {
            for (var i = 0; i < json.length; i++) {
                var c = new CountryInfo();
                //console.log(json[i]);
                c.name = json[i].name.common;
                c.flag = json[i].flags.png;
                c.population = json[i].population;
                _this.MyCountries.push(c);
            }
            //alert(this.MyCountries.length);
        });
    };
    CountriesComponent = __decorate([
        core_1.Component({
            selector: 'countries',
            templateUrl: './countries.component.html',
            styleUrls: ['./countries.component.css']
        })
    ], CountriesComponent);
    return CountriesComponent;
}());
exports.CountriesComponent = CountriesComponent;
var CountryInfo = /** @class */ (function () {
    function CountryInfo() {
        this.flag = '';
        this.name = '';
        this.population = 0;
    }
    return CountryInfo;
}());
