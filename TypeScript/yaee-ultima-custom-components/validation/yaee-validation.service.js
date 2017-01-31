"use strict";
var YaeeValidationService = (function () {
    function YaeeValidationService() {
    }
    YaeeValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Campo obrigatório.',
            'emailInValido': 'E-mail informado não válido.',
            'invalidPassword': 'Senha inválida. A senha deve conter 6 caracteres e pelo menos um número.',
            'minlength': "Tamanho m\u00EDnimo " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    YaeeValidationService.emailInValido = function (control) {
        if (!control.value) {
            return null;
        }
        var EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        return EMAIL_REGEXP.test(control.value) ? null : { emailInValido: true };
    };
    YaeeValidationService.pojoInvalido = function (control) {
        if (control.value != null && !control.value.hasOwnProperty("id")) {
            return { pojoInvalido: true };
        }
        return null;
    };
    YaeeValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return YaeeValidationService;
}());
exports.YaeeValidationService = YaeeValidationService;
