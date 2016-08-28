import {Storage, SqlStorage} from "ionic-angular";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class CustomDBService {

    private _storage: Storage;
    private dbName: string = "art-rastreamento";
    private scriptCreates: string[] = [
        `CREATE TABLE IF NOT EXISTS jwt_token_info 
  ( 
     id            INTEGER PRIMARY KEY, 
     token         TEXT, 
     loggedrouters TEXT, 
     expires       NUMBER, 
     manter_logado NUMBER 
  ) `,
        `CREATE TABLE IF NOT EXISTS supervisor 
  ( 
     id            INTEGER PRIMARY KEY, 
     version       TEXT, 
     nome          TEXT
  )`];

    constructor() {
        this.initTables();
    }

    private initTables() {
        this._storage = new Storage(SqlStorage, {name: this.dbName});
        this.scriptCreates.forEach((script) => {
            this._storage.query(script);
        });

    }

    private get storage(): Storage {
        return this._storage;
    }

    public queryUnic(sql: string, params?: {}): Observable<any> {
        return Observable.create(observer => {
            this.storage.query(sql, params).then((data) => {
                if (data.res.rows.length > 0) {
                    observer.next(data.res.rows.item(0));
                } else {
                    observer.next(undefined);
                }
            }, (error) => {
                observer.error(error);
            });
        });
    }

    public queryAll(sql: string, params?: {}): Observable<any[]> {
        return Observable.create(observer => {
            this.storage.query(sql, params).then((data) => {
                if (data.res.rows.length > 0) {
                    observer.next(Array.from(data.res.rows));
                } else {
                    observer.next([]);
                }
            }, (error) => {
                observer.error(error);
            });
        });
    }


    public insert(sql: string, params?: {}, fromSync?: boolean) {
        return this.executeSql(sql, params);
    }


    public update(sql: string, params?: {}) {
        return this.executeSql(sql, params);
    }

    public delete(sql: string, params?: {}) {
        return this.executeSql(sql, params);
    }

    private executeSql(sql: string, params?: {}): Observable<any> {
        return Observable.create(observer => {
            this.storage.query(sql, params).then((data) => {
                observer.next({});
            }, (error) => {
                observer.error(error);
            });
        });
    }

    public removeAllItens(tableName: string): Observable<any> {
        return this.delete(`delete from ${tableName}`);
    }

}