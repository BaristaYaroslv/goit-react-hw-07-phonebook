import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { WrapContact ,EditButton ,DeleteButton } from './Contact.styled';
import { deleteContacts } from 'reduxe/operation';
import EditContact from 'components/EditContact/EditContact';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const dispatcher = useDispatch();
  const [editContact, setEditContact] = useState(false);

  const handlerDelete = () => dispatcher(deleteContacts(contact.id));

  const handlerEdit = () => setEditContact(prevState => !prevState);

  return (
    <WrapContact>
      {contact.name}: {contact.phone}
      <DeleteButton type="button" onClick={handlerDelete}>
        Delete
      </DeleteButton>
       {editContact && (
        <EditContact key={contact.id} contact={contact} handlerEdit={handlerEdit} />)}
      <EditButton type="button" onClick={handlerEdit}>
        Edit
      </EditButton>
    </WrapContact>
  );
};

Contact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
};

export default Contact;
