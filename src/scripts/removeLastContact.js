import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Масив контактів порожній. Немає чого видаляти.');
      return;
    }

    contacts.pop();

    await writeContacts(contacts);

    console.log('Останній контакт успішно видалено.');
  } catch (error) {
    console.error('Помилка під час видалення останнього контакту:', error.message);
  }
};

removeLastContact();
