import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'reduxe/selectors';

import { ContactList } from './ListContacts.styled';
import Contact from 'components/Contact/Contact';
// import EditContact from 'components/EditContact/EditContact';

const ListContacts = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactList>
      {visibleContacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ContactList>
  );
};

export default ListContacts;
