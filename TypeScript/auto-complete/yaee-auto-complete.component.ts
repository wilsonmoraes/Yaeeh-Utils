import {Component, Input, Output, EventEmitter, PipeTransform, Pipe} from "@angular/core";
import {AutoCompleteItemComponent} from "./auto-complete-item.component";
import {Observable} from "rxjs";
import {YaeeAutoCompleteService} from "./yaee-auto-complete.service";


@Component({
  template: `<ion-list no-lines>
  <ion-item>
    <ion-label >{{queryDescription}}</ion-label>
    <ion-input (keyup)="getItems($event)" [(ngModel)]="keyword" type="text"></ion-input>
    <ion-icon *ngIf="keyword && keyword.length > 0" name="close" (click)="clearValue($event)" item-right></ion-icon>
  </ion-item>
</ion-list>
<ion-list *ngIf="suggestions.length > 0 && showList" no-lines>
  <ion-item *ngFor="let suggestion of suggestions" (click)="select(suggestion)">
    <span [innerHTML]='suggestion[dataProvider.labelAttribute]|boldprefix:keyword'></span>
  </ion-item>
</ion-list>`,
  selector: 'yaee-auto-complete'
})
export class YaeeAutoCompleteComponent {
  @Input()
  public dataProvider: YaeeAutoCompleteService;
  @Output()
  public onSelect: EventEmitter<any> = new EventEmitter();
  @Output()
  public onUnselect: EventEmitter<any> = new EventEmitter();
  @Input()
  public queryDescription: any;
  @Input()
  public delay: number = 300;
  @Input()
  public minLength: number = 2;

  private timeout: any;

  private keyword: string;

  public suggestions: any[];

  private showList: boolean;

  /**
   * create a new instace
   */
  public constructor() {
    this.keyword = null;
    this.suggestions = [];
    this.showList = false;
    this.onSelect = new EventEmitter<any>();
  }

  /**
   * get items for auto-complete
   */
  public getItems() {
    if (this.keyword.trim() === '') {
      this.suggestions = [];
      return;
    }
    if (this.keyword.length >= this.minLength) {
      //Cancel the search request if user types within the timeout
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {

        let result = this.dataProvider.getResults(this.keyword);

        // if query is async
        if (result instanceof Observable) {
          result
            .subscribe(
              (results: any) => {
                this.suggestions = results;
                this.showItemList();
              },
              (error: any) => console.error(error)
            )
          ;
        } else {
          this.suggestions = result;
          this.showItemList();
        }
      }, this.delay);
    }
  }


  /**
   * show item list
   */
  private showItemList(): void {
    this.showList = true;
  }

  /**
   * hide item list
   */
  private hideItemList(): void {
    this.showList = false;
  }

  /**
   * select item from list
   * @param selection
   */
  public select(selection: any): void {
    this.keyword = selection[this.dataProvider.labelAttribute];
    this.hideItemList();

    // emit selection event
    this.onSelect.emit(selection);
  }

  /**
   * get current input value
   * @returns {string}
   */
  public getValue() {
    return this.keyword;
  }

  /**
   * clear current input value
   */
  public clearValue() {
    this.keyword = null;
    this.onUnselect.emit({});
    return;
  }
}

/**
 * bolds the beggining of the matching string in the item
 */
@Pipe({
  name: 'boldprefix'
})
export class BoldPrefix implements PipeTransform {
  transform(value: string, keyword: string): any {
    return value.replace(new RegExp(keyword, 'gi'), function (str) {
      return str.bold();
    });
  }
}

// Export convenience property
export const YAEE_AUTOCOMPLETE_DIRECTIVES: any[] = [
  YaeeAutoCompleteComponent,
  BoldPrefix
];
