import { FaPhone } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import s from "./Contact.module.css";
export const Contact = ({ id, name, number, onChangeContact }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.contactInfo}>
        <div className={s.contactData}>
          <BsPeopleFill />
          <p>{name}</p>
        </div>
        <div className={s.contactData}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <button className={s.buttonDelete} onClick={() => onChangeContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
