# Custom components to use with the [Ultima template](http://www.primefaces.org/ultima-ng/#/)


## Obs

- __ReactiveFormsModule__: These components have not been tested with Template Driven Form.


## Require
- primeng: 2.0.0-rc-2
- ultima template
- angular 2

How use:

In your app module:

```js
@NgModule({
  imports: [
    YaeeSharedModule,
    ....
  ],
  declarations: [],
  providers: [],
  exports: [
    YaeeSharedModule,
    ....
  ]
})
export class AppModule {
}
```
Example with InputText:

before...
```html
<div class="ui-g-12 ui-md-8">
  <span class="md-inputfield">
      <input style="width:100%;"
             maxlength="100"
             type="text" pInputText
             formControlName="nome">
      <label>Nome</label>
    <div *ngIf="form.controls.nome.errors?.required && form.controls.nome.touched" 
          class="ui-message ui-messages-error ui-corner-all">
          Campo obrigatório
      </div>
  </span>
</div>
```
after:
```html
<y-ultima-inputText [label]="'Nome'" [childControl]="form.controls.nome" [colspan]="8"></y-ultima-inputText>
```
---

Example with InputMask:

before...
```html
<div class="ui-g-12 ui-md-3">
<span class="md-inputfield">
   <p-inputMask
     mask="99.999-999"
     [style]="{'width':'100%'}"
     type="text" pInputText
     formControlName="cep"></p-inputMask>
    <label>CEP</label>
    <div *ngIf="form.controls.cep.errors?.required && form.controls.cep.touched" 
          class="ui-message ui-messages-error ui-corner-all">
          CEP obrigatório
      </div>
</span>
</div>
```
after:
```html
<y-ultima-inputMask  mask="99.999-999"
                     [label]="'CEP'"
                     [colspan]="3"
                     [childControl]="convenioForm.controls.cep"></y-ultima-inputMask>
```
---

Example with Col:

before...
```html
<div class="ui-g-12 ui-md-3">
</div>
```
after:
```html
<y-ultima-col [span]="3">
</y-ultima-col>
```
---
