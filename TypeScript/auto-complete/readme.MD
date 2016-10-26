---
title: auto-complete-ionic2
---

# yaee-auto-complete for ionic2

## Package

- Amazon Fire OS
- Android
- BlackBerry 10
- Browser
- Firefox OS**
- iOS
- Windows Phone 7 and 8*
- Windows


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

