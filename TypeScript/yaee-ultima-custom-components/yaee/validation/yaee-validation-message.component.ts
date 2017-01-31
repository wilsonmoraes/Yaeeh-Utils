/**
 * Created by Wilson on 05/01/2017.
 */
import {Component, Input, NgModule} from "@angular/core";
import {FormControl} from "@angular/forms";
import {YaeeValidationService} from "./yaee-validation.service";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'y-validation-message',
  template: `<div *ngIf="errorMessage !== null" [class]="styleClass">
                {{errorMessage}}
              </div>`
})
export class YaeeValidationMessageComponent {

  @Input() control: FormControl;
  @Input() styleClass: string = 'ui-message ui-messages-error ui-corner-all';

  constructor() {
  }

  get errorMessage(): string {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return YaeeValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [YaeeValidationMessageComponent],
  declarations: [YaeeValidationMessageComponent]
})
export class YaeeValidationMessageModule {
}
