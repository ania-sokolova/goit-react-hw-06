import { useSelector } from 'react-redux';
import Contact from './Contact';
import { selectFilteredContacts } from '../redux/contactsSlice';

export default function ContactList() {
  const filtered = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filtered.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
