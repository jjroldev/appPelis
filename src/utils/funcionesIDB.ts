// import { openDB } from 'idb';

// const DATABASE_NAME = 'moviesDB';
// const STORE_NAME = 'moviesStore';

// export const getDB = async () => {
//   return openDB(DATABASE_NAME, 1, {
//     upgrade(db) {
//       if (!db.objectStoreNames.contains(STORE_NAME)) {
//         db.createObjectStore(STORE_NAME, { keyPath: 'key' });
//       }
//     },
//   });
// };

// export const setItem = async (key: string, value: any) => {
//   const db = await getDB();
//   return db.put(STORE_NAME, { key, value });
// };

// export const getItem = async (key: string) => {
//   const db = await getDB();
//   const item = await db.get(STORE_NAME, key);
//   return item?.value || null;
// };

// export const deleteItem = async (key: string) => {
//   const db = await getDB();
//   return db.delete(STORE_NAME, key);
// };
