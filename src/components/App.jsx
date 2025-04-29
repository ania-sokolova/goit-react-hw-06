import ContactForm from './ContactForm';
import ContactList from './ContactList';
import SearchBox from './SearchBox';
import styles from "./App.module.css";


function App() {
  return (
    <div className={styles.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;