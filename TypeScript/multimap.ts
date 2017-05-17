export class Multimap<K extends string, V extends [any]> {

  private _map: Map<K, V> = new Map<K, V>();


  get map(): Map<K, V> {
    return this._map;
  }

  public clear(): void {
    this._map = new Map<K, V>();
  }

  public containsKey(key: K): boolean {
    return this._map.has(key);
  }

  public delete(key: K): boolean {
    return this._map.delete(key);
  }

  public get(key: K): V {
    return this._map.get(key);
  }

  public keys(): K[] {
    return Array.from(this._map.keys());
  }

  public get values(): V[] {
    return Array.from(this._map.values());
  }

  public  putOne(key: K, value: V): Map<K, V> {
    if (this.containsKey(key)) {
      this.get(key).push(value);
    } else {
      this._map.set(key, <V>[value]);
    }
    return this._map;
  }

}
