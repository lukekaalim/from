// @flow strict

declare class Object {
  static entries<K, V>({ [key: K]: V }): Array<[K, V]>; 
  static keys<K, V>({ [key: K]: V }): Array<K>;
}