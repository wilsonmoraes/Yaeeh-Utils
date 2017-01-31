/**
 * Created by wilsonMoraes on 29/01/2017.
 */
import {Component, NgModule, Input} from "@angular/core";
import {CommonModule} from "@angular/common";
import {YaeeValidationMessageModule} from "./validation/yaee-validation-message.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: '[y-ultima-inputContainer]',
  template: `
              <span class="md-inputfield">
                  <ng-content></ng-content>
                  <label *ngIf="label != undefined ">{{label}}</label>
                <y-validation-message *ngIf="validControl != undefined "
                  [control]="validControl"></y-validation-message>
              </span>
    `,
  host: {
    '[class]': 'rootClass()'
  }
})
export class YaeeUltimaInputContainerComponent {
  @Input('y-ultima-inputContainer') label: string;
  @Input() colspan: number = 12;
  @Input() validControl: FormControl;

  rootClass() {
    return `ui-g-12 ui-md-${this.colspan}`;
  }

  constructor() {
  }
}

@NgModule({
  imports: [CommonModule, YaeeValidationMessageModule],
  exports: [YaeeUltimaInputContainerComponent],
  declarations: [YaeeUltimaInputContainerComponent]
})
export class YaeeUltimaInputContainerModule {
}
