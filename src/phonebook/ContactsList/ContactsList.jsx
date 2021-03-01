import { v4 as uuidv4 } from 'uuid';
import styles from './ContactList.module.css';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import actions from '../../redux/phonebook/actions/operations';
import selectors from '../../redux/phonebook/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getVisibleContacts);
  const onContactDelete = id => dispatch(actions.actionDelete(id));

  return (
    <>
      <TransitionGroup component="ul" className={styles.list}>
        {contacts.length === 0 ? (
          <CSSTransition
            in={contacts.length === 0}
            timeout={250}
            classNames={styles}
            unmountOnExit
          >
            <li className={styles.addContact}>Add contacts please</li>
          </CSSTransition>
        ) : (
          contacts.map(contact => {
            const { id, name, number } = contact;
            return (
              <CSSTransition
                key={id}
                in={true}
                appear={true}
                timeout={250}
                classNames={styles}
                unmountOnExit
              >
                <li className={styles.item} key={uuidv4()}>
                  <p>Name: {name}</p>
                  <p>Number: {number}</p>
                  <button
                    className={styles.deleteButton}
                    type="button"
                    onClick={() => onContactDelete(id)}
                  >
                    Delete
                  </button>
                </li>
              </CSSTransition>
            );
          })
        )}
      </TransitionGroup>
    </>
  );
}
