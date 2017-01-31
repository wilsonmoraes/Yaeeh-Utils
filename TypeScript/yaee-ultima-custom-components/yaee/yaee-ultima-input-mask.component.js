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
var forms_1 = require("@angular/forms");
var yaee_ultima_input_container_component_1 = require("./yaee-ultima-input-container.component");
var inputmask_1 = require("primeng/components/inputmask/inputmask");
exports.INPUT_TEXT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return YaeeUltimaInputMaskComponent; }),
    multi: true
};
var YaeeUltimaInputMaskComponent = (function () {
    function YaeeUltimaInputMaskComponent() {
        this.colspan = 12;
        this.maxlength = 2555;
    }
    YaeeUltimaInputMaskComponent.prototype.rootClass = function () {
        return "ui-g-12 ui-md-" + this.colspan;
    };
    YaeeUltimaInputMaskComponent.prototype.ngOnInit = function () {
        if (this.customMask) {
            switch (this.customMask) {
                case 'real':
                    this.options = { groupSeparator: '', digits: 2, prefix: 'R$ ', digitsOptional: false, autoGroup: true };
                    this.unmask = true;
                    this.slotChar = "0";
                    this.colspan = 4;
                    this.alias = "numeric";
                    break;
                case 'cpfCnpj':
                    this.mask = ['999.999.999-99', '99.999.999/9999-99'];
                    break;
            }
        }
    };
    YaeeUltimaInputMaskComponent.prototype.writeValue = function (value) {
        this.childControl.setValue(value);
    };
    YaeeUltimaInputMaskComponent.prototype.registerOnChange = function (fn) {
        this.childControl.valueChanges.subscribe(fn);
    };
    YaeeUltimaInputMaskComponent.prototype.registerOnTouched = function () {
    };
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "childControl", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "colspan", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "maxlength", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "mask", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "unmask", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "slotChar", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "alias", void 0);
    __decorate([
        core_1.Input()
    ], YaeeUltimaInputMaskComponent.prototype, "customMask", void 0);
    YaeeUltimaInputMaskComponent = __decorate([
        core_1.Component({
            selector: 'y-ultima-inputMask',
            template: "\n          <div y-ultima-inputContainer=\"{{label}}\"\n          [colspan]=\"12\" \n          [validControl]=\"childControl.validator? childControl:undefined\">\n          \n          <p-inputMask\n                      mask=\"99.999-999\"\n                      [style]=\"{'width':'100%'}\"\n                      type=\"text\" pInputText\n                      formControlName=\"cep\"></p-inputMask>\n          \n          <vs-inputMask \n                        [unmask]=\"unmask\"\n                        [alias]=\"alias\"\n                        [slotChar]=\"slotChar\"\n                        [mask]=\"mask\" \n                        [options]=\"options\"\n                        [placeholder]=\"placeholder||''\"\n                        [formControl]=\"childControl\" \n                        [style]=\"{'width':'100%'}\"\n                        [readonly]=\"readonly\"\n                        [maxlength]=\"maxlength\">                        \n        </vs-inputMask>\n          </div> ",
            providers: [exports.INPUT_TEXT_VALUE_ACCESSOR],
            host: {
                '[class]': 'rootClass()'
            }
        })
    ], YaeeUltimaInputMaskComponent);
    return YaeeUltimaInputMaskComponent;
}());
exports.YaeeUltimaInputMaskComponent = YaeeUltimaInputMaskComponent;
var YaeeUltimaInputMaskModule = (function () {
    function YaeeUltimaInputMaskModule() {
    }
    YaeeUltimaInputMaskModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, yaee_ultima_input_container_component_1.YaeeUltimaInputContainerModule, forms_1.ReactiveFormsModule, inputmask_1.InputMaskModule],
            exports: [YaeeUltimaInputMaskComponent],
            declarations: [YaeeUltimaInputMaskComponent]
        })
    ], YaeeUltimaInputMaskModule);
    return YaeeUltimaInputMaskModule;
}());
exports.YaeeUltimaInputMaskModule = YaeeUltimaInputMaskModule;
