// import ContactItem from 'components/ContactItem/ContactItem';
import { showErrorMessage } from 'components/Notification';
import { List, DeleteBtn, ListItem } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
    return contacts?.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
};

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    // console.log(contacts);
    const filter = useSelector(getFilter);
  
 
    const visibleContacts = getVisibleContacts(contacts, filter);

    const onDeleteContact = (id, name) => {
        dispatch(deleteContact(id));
        showErrorMessage(`You have deleted a contact "${name}"`);
    };

    return (
    <List>
            {visibleContacts?.map(contact =>
            (
                <li key={contact.id}>
                    <ListItem>
                        <p>{contact.name}: {contact.number}</p>
                        <DeleteBtn type="button" onClick={() => onDeleteContact(contact.id)}>Delete</DeleteBtn>
                    </ListItem>
                </li>
            )
            )}
    </List>
)}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func,
}
export default ContactList;