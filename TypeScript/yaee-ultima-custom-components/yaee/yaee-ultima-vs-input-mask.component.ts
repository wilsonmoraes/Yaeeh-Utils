/**
 * Created by wilsonMoraes on 29/01/2017.
 */
import {Component, NgModule, Input, forwardRef, AfterViewInit, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {YaeeUltimaInputContainerModule} from "./yaee-ultima-input-container.component";
import {VsInputMaskModule} from "../../inputmask/inputmask";


export const INPUT_TEXT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => YaeeUltimaVsInputMaskComponent),
  multi: true
};

@Component({
  selector: 'y-ultima-vs-inputMask',
  template: `
          <div y-ultima-inputContainer="{{label}}"
          [colspan]="12" 
          [validControl]="childControl.validator? childControl:undefined">
          
          <vs-inputMask 
                        [unmask]="unmask"
                        [alias]="alias"
                        [slotChar]="slotChar"
                        [mask]="mask" 
                        [options]="options"
                        [placeholder]="placeholder||''"
                        [formControl]="childControl" 
                        [style]="{'width':'100%'}"
                        [readonly]="readonly"
                        [maxlength]="maxlength">                        
        </vs-inputMask>
          </div> `,
  providers: [INPUT_TEXT_VALUE_ACCESSOR],
  host: {
    '[class]': 'rootClass()'
  }
})
export class YaeeUltimaVsInputMaskComponent implements ControlValueAccessor, OnInit {


  @Input()
  childControl: FormControl;
  @Input() colspan: number = 12;
  @Input() maxlength: number = 2555;
  @Input() readonly: boolean;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() mask: any;
  @Input() options: any;
  @Input() unmask: boolean;
  @Input() slotChar: string;
  @Input() alias: string;
  @Input() customMask: string;

  rootClass() {
    return `ui-g-12 ui-md-${this.colspan}`;
  }

  constructor() {
  }

  ngOnInit(): void {
    if (this.customMask) {
      switch (this.customMask) {
        case 'real':
          this.options = {groupSeparator: '', digits: 2, prefix: 'R$ ', digitsOptional: false, autoGroup: true};
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
  imports: [CommonModule, YaeeUltimaInputContainerModule, ReactiveFormsModule, VsInputMaskModule],
  exports: [YaeeUltimaVsInputMaskComponent],
  declarations: [YaeeUltimaVsInputMaskComponent]
})
export class YaeeUltimaVsInputMaskModule {
}
