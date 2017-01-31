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
Example of implementsYaeeAutoCompleteService:

```js
@Injectable()
export class SalesmanService implements YaeeAutoCompleteService {
  labelAttribute: string = 'salesmanName';

  getResults(term: any): any {
    return this.customDB.queryAll('SELECT * FROM salesman WHERE salesmanName LIKE ?  ORDER BY salesmanName limit 20', ["%" + term + "%"]);
    }    
 }
```
Based on: https://github.com/kadoshms/ionic2-autocomplete
