import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export const ContactList = ({ contacts }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <Contact name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
