# Custom components to use with the [Ultima template](http://www.primefaces.org/ultima-ng/#/)


## Obs

- __ReactiveFormsModule__: These components have not been tested with Template Driven Form.


## this require
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
In your component declare:

```html
<yaee-auto-complete
    [queryDescription]="'Customized description:'"
    [dataProvider]="yourServiceProvider">
  </yaee-auto-complete>
```
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
