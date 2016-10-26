---
title: auto-complete-ionic2
---

# simples yaee-auto-complete for ionic2 RC


## Events

- __onSelect__: Callback to invoke when a suggestion is selected.

- __onUnselect__: Callback to invoke when a selected value is removed.


## Package only for reference
- @angular/common: 2.1.1
- @angular/compiler: 2.1.1
- @angular/compiler-cli: 0.6.2
- @angular/core: 2.1.1
- @angular/forms: 2.1.1
- @angular/http: 2.1.1
- @angular/platform-browser: 2.1.1
- @angular/platform-browser-dynamic: 2.1.1
- @angular/platform-server: 2.1.1
- @ionic/storage: 1.1.6
- ionic-angular: 2.0.0-rc.1
- ionic-native: 2.2.4
- ionicons: 3.0.0
- rxjs: 5.0.0-beta.12
- zone.js: 0.6.26
- moment: 2.15.1
- reflect-metadata: 0.1.8

How use:

In your app module:

```js
@NgModule({
  declarations: [
    MyApp,
    YAEE_AUTOCOMPLETE_DIRECTIVES,
    ....
  ],
  bootstrap: [IonicApp],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  entryComponents: [
    MyApp,
    ....
  ],
  providers: [VendedorService]

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
