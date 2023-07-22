import { useState } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm, Label, Btn, Input } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { showInfoMessage } from 'components/Notification';

const Form = () =>  {
  const [name, stateName] = useState('');
  const [number, stateNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsArr = Object.values(contacts);
  const contactId = nanoid();
  
  
  const handlAdd = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name': stateName(value); break;
      case 'number': stateNumber(value); break;
      default: throw new Error('Unknown state');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contactsArr.find(contact => contact.name.toLowerCase() === name.toLowerCase().trim())) {
            showInfoMessage(`The contact with name "${name}" is already in your phonebook`);
            reset();
            return;
        }
  
    dispatch(addContact(name, number));
    reset();
  };
  
 const reset = () => {
   stateName('');
   stateNumber('');
 
  };
    
      return (
        <AddContactForm onSubmit={handleSubmit}>
          <Label htmlFor={contactId}>
            Name <br />
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces"
              placeholder="enter contact's name"
              fullWidth
              aria-describedby="contact's name"
              required value={name} onChange={handlAdd} id={contactId}
            />
          </Label>
          <Label htmlFor="">
            Number <br />
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number can contain only numbers, spaces, dashes, parentheses and can start with +"
              placeholder="enter contact's phone number"
              fullWidth
              aria-describedby="phone number"
              required value={number} onChange={handlAdd}
            />
          </Label>
          <Btn type='submit'>Add contact</Btn>
        </AddContactForm>
      );
  };
 
export default Form;

