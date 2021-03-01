import Section from '../phonebook/Section/Section'
import Input from './Input/Input'
import ContactsList from './ContactsList/ContactsList'
import Filter from './Filter/Filter'
import styles from './phonebook.module.css';
import { CSSTransition } from 'react-transition-group';
import ErrorMessage from './messages/errorMessage';
import SucessMessage from './messages/sucessMessage'
import actions from '../redux/phonebook/actions/operations';
import selectors from '../redux/phonebook/selectors/selectors';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Phonebook() {
  
  const [name, setName] = useState('');
  const onNameChange = evt => {    
    setName(evt.target.value);
    };   
  const [number, setNumber] = useState('');
  const onNumberChange = evt => {    
    setNumber(evt.target.value);
    };
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);

  const dispatch = useDispatch();  
  const contacts = useSelector(selectors.getItems);
  const loading = useSelector(selectors.getLoading);

  
  
  const onAddContact = useCallback(() => dispatch(actions.actionAdd(name, number)), [name, number, dispatch]);
  

  useEffect(() => {
    const showItems = () => dispatch(actions.fetchContacts());
    showItems();
  }, [dispatch]);

  const submitForm = evt => {
    evt.preventDefault();  
    setName('');
    setNumber('');     
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {      
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000)
      return;
    } else {
      setSucess(true);
      setTimeout(() => {
        setSucess(false);
      }, 2000)
    }   
    onAddContact(name, number);
  };  
    
    
    return (<>
      {loading && <div className={styles.skChase}>
        <div className={styles.skChaseDot}></div>
  <div className={styles.skChaseDot}></div>
  <div className={styles.skChaseDot}></div>
  <div className={styles.skChaseDot}></div>
  <div className={styles.skChaseDot}></div>
  <div className={styles.skChaseDot}></div>
</div>}
        <Section title='Phonebook'>
            <Input name={name}
          number={number}          
          onNameChange={onNameChange}
          onNumberChange={onNumberChange}
          onSubmitForm={submitForm}/>    
      </Section>      
      <Section title='Contacts'>         
          <Filter />               
          <ContactsList/>               
        <CSSTransition in={error === true} timeout={250} classNames={styles} unmountOnExit>
          <ErrorMessage/>
        </CSSTransition>
        <CSSTransition in={sucess === true} timeout={250} classNames={styles} unmountOnExit>
          <SucessMessage/>
        </CSSTransition> 
        </Section>        
      </>
    )    
  
}

