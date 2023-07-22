import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { ToastContainer } from 'react-toastify';

const App = () => {
    
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <ToastContainer />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <div>
      </div>
    </div>
  );
};
   
export default App;

