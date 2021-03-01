import { Component } from 'react';
import styles from './Login.module.css';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authActions/authOperations';
class Login extends Component {
  state = {
    mail: '',
    password: '',
  };
  formSubmit = evt => {
    evt.preventDefault();
    const { mail, password } = this.state;
    this.props.onLogin(mail, password);
  };
  onChangeInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    return (
      <>
        <div className={styles.container}>
          <h2>Login</h2>
          <form className={styles.form} onSubmit={this.formSubmit}>
            <label>
              <span>Your e-mail</span>
              <input
                type="text"
                name="mail"
                value={this.state.mail}
                onChange={this.onChangeInput}
                required
              />
            </label>
            <label>
              <span>Your password</span>
              <input
                type="text"
                name="password"
                value={this.state.password}
                onChange={this.onChangeInput}
                required
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (mail, password) =>
    dispatch(authOperations.actionLogin(mail, password)),
});

export default connect(null, mapDispatchToProps)(Login);
