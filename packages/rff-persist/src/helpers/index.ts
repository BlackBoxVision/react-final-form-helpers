import localForage from 'localforage';
import sessionStorageWrapper from 'localforage-sessionstoragewrapper';

export interface StorageConfig {
  isSessionStorage?: boolean;
}

export const Storage = {
  setItem: async (
    key: string,
    values: Object,
    { isSessionStorage }: StorageConfig,
  ): Promise<void> => {
    if (isSessionStorage) {
      localForage
        .defineDriver(sessionStorageWrapper)
        .then(() => localForage.setDriver(sessionStorageWrapper._driver));
    }

    await localForage.setItem(key, values);
  },
  getItem: async (key: string): Promise<Object> => {
    return await localForage.getItem(key);
  },
};
