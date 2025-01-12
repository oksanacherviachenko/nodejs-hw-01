import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
     const contacts = await readContacts();

    return contacts.length;
  } catch (error) {
    console.error('Помилка під час підрахунку контактів:', error.message);
    throw new Error('Не вдалося підрахувати контакти');
  }
};

console.log(await countContacts());

