import lscache from 'lscache';
import sscache from 'session-storage-cache';

export interface StorageConfig {
  /** Flag to determine if use session-storage as persistence layer */
  isSessionStorage?: boolean;
  /** Flag to set cache duration */
  ttl: number;
}

export const Storage = {
  setItem: (
    key: string,
    values: Object,
    { isSessionStorage, ttl }: StorageConfig,
  ): void =>
    isSessionStorage
      ? sscache.set(key, values, ttl)
      : lscache.set(key, values, ttl),
  getItem: (key: string, { isSessionStorage }: StorageConfig): Object =>
    isSessionStorage ? sscache.get(key) : lscache.get(key),
};
