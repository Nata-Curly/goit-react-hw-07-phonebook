import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { showInfoMessage } from './Notification';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <ToastContainer />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && showInfoMessage(`Your request is in progress...`)}
      <ContactList />
      <div>
      </div>
    </div>
  );
};
   
export default App;
