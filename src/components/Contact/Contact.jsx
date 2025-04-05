import { FaPhone } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import s from "./Contact.module.css";
export const Contact = ({ name, number }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.contactInfo}>
        <div className={s.contactData}>
          <IoMdContact />
          <p>{name}</p>
        </div>
        <div className={s.contactData}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <button className={s.buttonDelete}>Delete</button>
    </div>
  );
};

export default Contact;
