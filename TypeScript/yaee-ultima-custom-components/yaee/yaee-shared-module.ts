/**
 * Created by Wilson on 30/01/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {YaeeValidationMessageModule} from "./validation/yaee-validation-message.component";
import {YaeeUltimaColModule} from "./yaee-ultima-col.component";
import {YaeeUltimaInputTextModule} from "./yaee-ultima-input-text.component";
import {YaeeUltimaInputContainerModule} from "./yaee-ultima-input-container.component";
import {YaeeUltimaVsInputMaskModule} from "./yaee-ultima-vs-input-mask.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    YaeeValidationMessageModule,
    YaeeUltimaColModule,
    YaeeUltimaInputContainerModule,
    YaeeUltimaInputTextModule,
    YaeeUltimaVsInputMaskModule
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    YaeeValidationMessageModule,
    YaeeUltimaColModule,
    YaeeUltimaInputContainerModule,
    YaeeUltimaInputTextModule,
    YaeeUltimaVsInputMaskModule
  ]
})
export class YaeeSharedModule {
}
