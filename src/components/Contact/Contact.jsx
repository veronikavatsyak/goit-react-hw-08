import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <div className={s.container}>
        <div className={s.nameWrapper}>
          <IconContext.Provider value={{ color: "green", size: 20 }}>
            <IoMdContact />
          </IconContext.Provider>
          <p className={s.text}>{contact.name}</p>
        </div>
        <div className={s.phoneWrapper}>
          <IconContext.Provider value={{ color: "green", size: 20 }}>
            <FaPhoneAlt />
          </IconContext.Provider>
          <p className={s.text}>{contact.number}</p>
        </div>
      </div>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={s.btn}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
