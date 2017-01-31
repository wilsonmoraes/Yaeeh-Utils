/**
 * Created by wilsonMoraes on 29/01/2017.
 */
import {Component, NgModule, Input, forwardRef} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {YaeeUltimaInputContainerModule} from "./yaee-ultima-input-container.component";


export const INPUT_TEXT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => YaeeUltimaInputTextComponent),
  multi: true
};

@Component({
  selector: 'y-ultima-inputText',
  template: `
          <div y-ultima-inputContainer="{{label}}" 
          [colspan]="12" 
          [validControl]="childControl.validator? childControl:undefined">
              <input
                style="width:100%;"
                [attr.maxlength]="maxlength"
                type="text" pInputText
                [formControl]="childControl"
                [readonly]="readonly"
                [attr.placeholder]="placeholder||''">
          </div> `,
  providers: [INPUT_TEXT_VALUE_ACCESSOR],
  host: {
    '[class]': 'rootClass()'
  }
})
export class YaeeUltimaInputTextComponent implements ControlValueAccessor {

  @Input()
  childControl: FormControl;
  @Input() colspan: number = 12;
  @Input() maxlength: number = 2555;
  @Input() readonly: boolean;
  @Input() placeholder: string;
  @Input() label: string;


  rootClass() {
    return `ui-g-12 ui-md-${this.colspan}`;
  }

  constructor() {
  }

  writeValue(value: any): void {
    this.childControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.childControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(): void {
  }
}

@NgModule({
  imports: [CommonModule, YaeeUltimaInputContainerModule, ReactiveFormsModule, InputTextModule],
  exports: [YaeeUltimaInputTextComponent],
  declarations: [YaeeUltimaInputTextComponent]
})
export class YaeeUltimaInputTextModule {
}
