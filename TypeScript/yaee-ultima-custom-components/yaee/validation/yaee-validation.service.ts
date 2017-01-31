import {AbstractControl} from "@angular/forms";
export class YaeeValidationService {

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'Campo obrigatório.',
      'emailInValido': 'E-mail informado não válido.',
      'invalidPassword': 'Senha inválida. A senha deve conter 6 caracteres e pelo menos um número.',
      'minlength': `Tamanho mínimo ${validatorValue.requiredLength}`
    };
    return config[validatorName];
  }


  static emailInValido(control: AbstractControl): {[key: string]: boolean} {
    if (!control.value) {
      return null;
    }
    let EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return EMAIL_REGEXP.test(control.value) ? null : {emailInValido: true};
  }

  static pojoInvalido(control: AbstractControl): {[key: string]: boolean} {
    if (control.value != null && !control.value.hasOwnProperty("id")) {
      return {pojoInvalido: true};
    }
    return null;
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return {'invalidPassword': true};
    }
  }

}
