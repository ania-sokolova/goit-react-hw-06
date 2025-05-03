import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsOps';
import styles from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <span>{name}</span><span>{number}</span>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}
