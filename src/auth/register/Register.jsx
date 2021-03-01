import { Component } from 'react';
import styles from './Register.module.css';
import authOperations from '../../redux/auth/authActions/authOperations';
import { connect } from 'react-redux';
class Register extends Component {
  state = {
    name: '',
    mail: '',
    password: '',
  };
  formSubmit = evt => {
    evt.preventDefault();
    const { name, mail, password } = this.state;
    this.props.onRegister(name, mail, password);
  };
  onChangeInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    return (
      <div className={styles.container}>
        <h2>Registration</h2>
        <form className={styles.form} onSubmit={this.formSubmit}>
          <label>
            <span>Your name</span>
            <input
              type="text"
              name="name"
              onChange={this.onChangeInput}
              required
            />
          </label>
          <label>
            <span>Your e-mail</span>
            <input
              type="text"
              name="mail"
              onChange={this.onChangeInput}
              required
            />
          </label>
          <label>
            <span>Your password</span>
            <input
              type="text"
              name="password"
              onChange={this.onChangeInput}
              required
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: (name, mail, password) =>
    dispatch(authOperations.actionRegister(name, mail, password)),
});

export default connect(null, mapDispatchToProps)(Register);
