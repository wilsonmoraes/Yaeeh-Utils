/**
 * Created by wilsonMoraes on 29/01/2017.
 */
import {Component, NgModule, Input} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'y-ultima-col',
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'rootClass()'
  }
})
export class YaeeUltimaColComponent {
  @Input() span: number = 12;

  rootClass() {
    return `ui-g-12 ui-md-${this.span}`;
  }


  constructor() {
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [YaeeUltimaColComponent],
  declarations: [YaeeUltimaColComponent]
})
export class YaeeUltimaColModule {
}
