import { openDB } from 'idb';


export const getDB = async (DATABASE_NAME:string,STORE_NAME:string) => {
  return openDB(DATABASE_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' });
      }
    },
  });
};
