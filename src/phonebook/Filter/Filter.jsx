import styles from './Filter.module.css';
import actions from '../../redux/phonebook/actions/actions';
import { CSSTransition } from 'react-transition-group';
import selectors from '../../redux/phonebook/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);
  const items = useSelector(selectors.getItems);
  const onfindContact = value =>
    dispatch(actions.actionFilter(value));

  return (
    <CSSTransition
      in={items.length > 0}
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <div className={styles.div}>
        <label htmlFor="input-search">Search Contact</label>
        <input
          id="input-search"
          name="filter"
          value={value}
          type="text"
          onChange={e => onfindContact(e.target.value)}
        />
      </div>
    </CSSTransition>
  );
}
