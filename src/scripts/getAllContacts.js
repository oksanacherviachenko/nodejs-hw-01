import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    return contacts;
  } catch (error) {
    console.error('Помилка під час отримання контактів:', error.message);
    throw new Error('Не вдалося отримати контакти');
  }
};

console.log(await getAllContacts());
