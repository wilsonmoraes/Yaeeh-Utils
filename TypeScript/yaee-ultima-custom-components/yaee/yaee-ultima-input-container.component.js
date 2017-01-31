"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by wilsonMoraes on 29/01/2017.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var yaee_validation_message_component_1 = require("./validation/yaee-validation-message.component");
var YaeeUltimaInputContainerComponent = (function () {
    function YaeeUltimaInputContainerComponent() {
        this.colspan = 12;
    }
    YaeeUltimaInputContainerComponent.prototype.rootClass = function () {
        return "ui-g-12 ui-md-" + this.colspan;
    };
    __decorate([
        core_1.Input('y-ultima-inputContainer')
    ], YaeeUltimaInputContainerComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputContainerComponent.prototype, "colspan", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputContainerComponent.prototype, "validControl", void 0);
    YaeeUltimaInputContainerComponent = __decorate([
        core_1.Component({
            selector: '[y-ultima-inputContainer]',
            template: "\n              <span class=\"md-inputfield\">\n                  <ng-content></ng-content>\n                  <label *ngIf=\"label != undefined \">{{label}}</label>\n                <yaee-validation-message *ngIf=\"validControl != undefined \"\n                  [control]=\"validControl\"></yaee-validation-message>\n              </span>\n    ",
            host: {
                '[class]': 'rootClass()'
            }
        })
    ], YaeeUltimaInputContainerComponent);
    return YaeeUltimaInputContainerComponent;
}());
exports.YaeeUltimaInputContainerComponent = YaeeUltimaInputContainerComponent;
var YaeeUltimaInputContainerModule = (function () {
    function YaeeUltimaInputContainerModule() {
    }
    YaeeUltimaInputContainerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, yaee_validation_message_component_1.YaeeValidationMessageModule],
            exports: [YaeeUltimaInputContainerComponent],
            declarations: [YaeeUltimaInputContainerComponent]
        })
    ], YaeeUltimaInputContainerModule);
    return YaeeUltimaInputContainerModule;
}());
exports.YaeeUltimaInputContainerModule = YaeeUltimaInputContainerModule;
