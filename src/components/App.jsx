import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import SearchBox   from './SearchBox';
import ContactList from './ContactList';
import { fetchContacts }          from '../redux/contactsOps';
import { selectLoading, selectError } from '../redux/contactsSlice';
import styles from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const loading  = useSelector(selectLoading);
  const error    = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error   && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
}
