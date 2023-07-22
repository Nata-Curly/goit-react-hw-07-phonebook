// import { useDispatch } from "react-redux";
// import { DeleteBtn, ListItem } from "./ContactItem.styled";
// import PropTypes from 'prop-types';
// // import { getContacts } from "redux/selectors";
// import { deleteContact } from "redux/contactsSlice";
// import { showErrorMessage } from "components/Notification";

// const ContactItem = ({name, number, id}) => {
//     const dispatch = useDispatch();
//     // const contacts = useSelector(getContacts);
 
//     const onDeleteContact = (id, name) => {
//         dispatch(deleteContact(id));
//         showErrorMessage(`You have deleted a contact "${name}"`);
//     }
//     // const onDeleteContact = () => dispatch(deleteContact(contact.id));
    
// //   const deleteContact = (contactId, name) => {
// //     setContacts(prevContact => {
// //      return prevContact.filter(contact => contact.id !== contactId)
// //     });
// //     showErrorMessage(`You have deleted a contact "${name}"`);
// //     };
    

// return (<ListItem>
// <p>{name}: {number}</p>
// <DeleteBtn type="button" onClick={()=>onDeleteContact(id, name)}>Delete</DeleteBtn>
// </ListItem>);
// }

// ContactItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     // onDeleteContact: PropTypes.func.isRequired
// }

// export default ContactItem;