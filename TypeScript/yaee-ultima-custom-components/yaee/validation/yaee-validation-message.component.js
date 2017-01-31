"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Wilson on 05/01/2017.
 */
var core_1 = require("@angular/core");
var yaee_validation_service_1 = require("./yaee-validation.service.ts");
var common_1 = require("@angular/common");
var YaeeValidationMessageComponent = (function () {
    function YaeeValidationMessageComponent() {
        this.styleClass = 'ui-message ui-messages-error ui-corner-all';
    }
    Object.defineProperty(YaeeValidationMessageComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return yaee_validation_service_1.YaeeValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], YaeeValidationMessageComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input()
    ], YaeeValidationMessageComponent.prototype, "styleClass", void 0);
    YaeeValidationMessageComponent = __decorate([
        core_1.Component({
            selector: 'yaee-validation-message',
            template: "<div *ngIf=\"errorMessage !== null\" [class]=\"styleClass\">\n                {{errorMessage}}\n              </div>"
        })
    ], YaeeValidationMessageComponent);
    return YaeeValidationMessageComponent;
}());
exports.YaeeValidationMessageComponent = YaeeValidationMessageComponent;
var YaeeValidationMessageModule = (function () {
    function YaeeValidationMessageModule() {
    }
    YaeeValidationMessageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [YaeeValidationMessageComponent],
            declarations: [YaeeValidationMessageComponent]
        })
    ], YaeeValidationMessageModule);
    return YaeeValidationMessageModule;
}());
exports.YaeeValidationMessageModule = YaeeValidationMessageModule;
