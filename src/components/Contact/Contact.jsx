import styles from './Contact.module.css';
import {deleteContact} from "../../redux/contactsOps.js";
import {useDispatch} from "react-redux";

const Contact = ({contact}) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <li className={styles.contactItem}>
            <div className={styles.contactInfo}>
                <div>
                    <p><span className={styles.icon}>&#128100;</span>{contact.name}</p>
                    <p><span className={styles.icon}>&#128222;</span>{contact.number}</p>
                </div>
            </div>
            <button className={styles.deleteBtn} onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default Contact;

