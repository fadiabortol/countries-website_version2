"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CountryComponent = void 0;
var core_1 = require("@angular/core");
var CountryComponent = /** @class */ (function () {
    function CountryComponent(svc) {
        this.svc = svc;
        this.flag = './assets/lebanon.png';
        this.name = 'Lebanon';
        this.population = 0;
        //alert("A")
        // setInterval(()=>{
        //   this.flag = './assets/Jordan.png'
        // },2000) 
    }
    CountryComponent.prototype.ngOnInit = function () { };
    CountryComponent.prototype.ShowPopulation = function () {
        //alert(this.population)
        this.svc.increment();
    };
    __decorate([
        core_1.Input()
    ], CountryComponent.prototype, "flag");
    __decorate([
        core_1.Input()
    ], CountryComponent.prototype, "name");
    __decorate([
        core_1.Input()
    ], CountryComponent.prototype, "population");
    CountryComponent = __decorate([
        core_1.Component({
            selector: 'country',
            templateUrl: './country.component.html',
            styleUrls: ['./country.component.css']
        })
    ], CountryComponent);
    return CountryComponent;
}());
exports.CountryComponent = CountryComponent;
// class Person implements ITalk{
//   name: string = '';
//   xyz(){
//     console.log(this.name)
//   }
//   test(){
//     console.log('zouzou')
//   }
// }
// class Teacher implements ITalk {
//   test(){
//     console.log('boubou')
//   }
// }
// class Student extends Person {}
// // an Interface is verrrry special class, where you JUST define methods but you don't inplement them
// // But inplement , we mean defining what a certain method does
// interface ITalk {
//   test() : any;
// }
