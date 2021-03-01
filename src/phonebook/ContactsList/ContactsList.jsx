import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactList.module.css';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/actions/operations';
import selectors from '../../redux/phonebook/selectors/selectors';
function ContactsList({ contacts, onContactDelete }) {
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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    contacts: selectors.getVisibleContacts(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onContactDelete: id => dispatch(actions.actionDelete(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsList);
