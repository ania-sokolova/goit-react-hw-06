import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import styles from './Contact.module.css';

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <span>{name}</span>
        <span>{number}</span>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;