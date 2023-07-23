import { useState } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm, Label, Btn, Input } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { showErrorMessage, showSuccessMessage } from 'components/Notification';
import { addContact } from 'redux/operations';

const Form = () =>  {
  const [name, stateName] = useState('');
  const [phone, statePhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactId = nanoid();
  
  const handlAdd = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name': stateName(value); break;
      case 'phone': statePhone(value); break;
      default: throw new Error('Unknown state');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase().trim())) {
            showErrorMessage(`The contact with name "${name}" is already in your phonebook`);
            reset();
            return;
    };
  
    dispatch(addContact({name, phone}));
    showSuccessMessage(`The contact "${name}" is added to your phonebook`);
    reset();
  };
  
 const reset = () => {
   stateName('');
   statePhone('');
 
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
            Phone <br />
            <Input
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone phone can contain only phones, spaces, dashes, parentheses and can start with +"
              placeholder="enter contact's phone phone"
              fullWidth
              aria-describedby="phone phone"
              required value={phone} onChange={handlAdd}
            />
          </Label>
          <Btn type='submit'>Add contact</Btn>
        </AddContactForm>
      );
  };
 
export default Form;

