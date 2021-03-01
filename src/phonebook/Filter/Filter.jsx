import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Filter.module.css'
import actions from '../../redux/phonebook/actions/actions';
import { CSSTransition } from 'react-transition-group';
import selectors from '../../redux/phonebook/selectors/selectors';

function Filter({value, onfindContact, items}) {
  return (
      <CSSTransition in={items.length > 0} timeout={250} classNames={styles} unmountOnExit>
        <div className={styles.div}>             
            <label htmlFor="input-search">Search Contact</label>            
            <input id="input-search" name='filter' value={value} type="text" onChange={e => onfindContact(e.target.value)}/>
      </div>
      </CSSTransition>
    )
} 
    

Filter.propTypes = {
  value: PropTypes.string,
  onfindContact: PropTypes.func,
};

const mapStateToProps = state => ({
  value: selectors.getFilter(state),
  items: selectors.getItems(state),
});
const mapDispatchToProps = dispatch => ({
  onfindContact: (value) => dispatch(actions.actionFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);