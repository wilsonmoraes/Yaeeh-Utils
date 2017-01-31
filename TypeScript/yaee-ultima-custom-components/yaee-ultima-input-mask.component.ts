/**
 * Created by wilsonMoraes on 29/01/2017.
 */
import {Component, NgModule, Input, forwardRef} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from "@angular/forms";
import {YaeeSharedModule} from "./yaee-shared-module";
import {CommonModule} from "@angular/common";


export const INPUT_TEXT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => YaeeUltimaInputMaskComponent),
  multi: true
};

@Component({
  selector: 'y-ultima-inputMask',
  template: `
          <div y-ultima-inputContainer="{{label}}"
          [colspan]="12" 
          [validControl]="childControl.validator? childControl:undefined">
          
          <p-inputMask
                      [mask]="mask" 
                      [style]="{'width':'100%'}"
                      pInputText
                      [readonly]="readonly"
                      [placeholder]="placeholder||''"
                      [formControl]="childControl"></p-inputMask>
          
          </div> `,
  providers: [INPUT_TEXT_VALUE_ACCESSOR],
  host: {
    '[class]': 'rootClass()'
  }
})
export class YaeeUltimaInputMaskComponent implements ControlValueAccessor {


  @Input()
  childControl: FormControl;
  @Input() colspan: number = 12;

  @Input() readonly: boolean;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() mask: any;

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
  imports: [CommonModule, YaeeSharedModule],
  exports: [YaeeUltimaInputMaskComponent],
  declarations: [YaeeUltimaInputMaskComponent]
})
export class YaeeUltimaInputMaskModule {
}
