import { showErrorMessage } from 'components/Notification';
import { List, DeleteBtn, ListItem } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { DeleteContact } from 'redux/operations';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);

    const onDeleteContact = (id) => {
        console.log(id);
        dispatch(DeleteContact(id));
        showErrorMessage(`You have deleted a contact`);
    };
    
    return (
    <List>
            {contacts?.map(contact =>
            (
                <li key={contact.id}>
                    <ListItem>
                        <p>{contact.name}: {contact.phone}</p>
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
        phone: PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func,
}
export default ContactList;