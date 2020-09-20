import React from 'react';
// Components
import { InputComponent as Input } from './input/input';
// Helpers
import { validateField, validateForm } from './helpers';
// Constants
import { FormFields } from './lecture2.enum';
// Styles
import {
  Lecture2Container,
  FormContainer,
  Form,
  FormName,
  FormButton,
  Link,
  Error
} from './lecture2.styled';

class Lecture2Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signin: true,
      [FormFields.Email]: '',
      [FormFields.FirstName]: '',
      [FormFields.Password]: '',
      [FormFields.ConfirmPassword]: '',
      errors: [],
    };
  }

  handleValidation = (name) => {
    return (event) => {
      const value = event.target.value;
      const error = validateField(name, value);
      const errorExist = !!this.state.errors.find(err => err === error);
      if (error) {
        this.setState({
          errors: !errorExist ? [...this.state.errors, error] : this.state.errors
        })
      }
      if (!error) {
        this.setState({
          errors: []
        })
      }
    }
  }

  handleChange = (name) => {
    return (event) => {
      this.setState({
        [name]: event.target.value
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { signin, email, firstName, password, confirmPassword } = this.state;
    const errors = validateForm(signin, email, firstName, password, confirmPassword);
    if (errors.length > 0) {
      this.setState({errors});
      return;
    };
    this.setState({
      email: '',
      firstName: '',
      password: null,
      confirmPassword: null,
      errors: [],
    });
    console.log('A form was submitted', this.state);
  }

  handleFormSwitch = () => {
    this.state.errors.length > 0 && this.setState({ errors: [] });
    this.state.signin ?
    this.setState({ signin: false }) :
    this.setState({ signin: true })
  }

  renderSigninInputs = () => {
    return (
      <Input
        labelName='Email'
        type='email'
        value={this.state[FormFields.Email]}
        changeFunc={this.handleChange(FormFields.Email)}
        blurFunc={this.handleValidation(FormFields.Email)}
      />
    )
  }

  renderSignupInputs = () => {
    return (
      <>
        <Input
          labelName='Your name'
          type='text'
          value={this.state[FormFields.FirstName]}
          changeFunc={this.handleChange(FormFields.FirstName)}
          blurFunc={this.handleValidation(FormFields.FirstName)}
        />
        <Input
          labelName='Email'
          type='email'
          value={this.state[FormFields.Email]}
          changeFunc={this.handleChange(FormFields.Email)}
          blurFunc={this.handleValidation(FormFields.Email)}
        />
        <Input
          labelName='Password'
          type='password'
          value={this.state[FormFields.Password]}
          changeFunc={this.handleChange(FormFields.Password)}
          blurFunc={this.handleValidation(FormFields.Password)}
        />
        <Input
          labelName='Re-enter Password'
          type='password'
          value={this.state[FormFields.ConfirmPassword]}
          changeFunc={this.handleChange(FormFields.ConfirmPassword)}
        />
      </>
    )
  }

  render () {
    const { signin, errors } = this.state;
    const ActionType = signin ? 'Sign In' : 'Create Account';
    return (
      <Lecture2Container>
        <FormContainer>
          <Form onSubmit={this.handleSubmit}>
            <FormName>{ActionType}</FormName>
            {
              errors.length > 0 ?
              errors.map(err => <Error key={err}>{err}</Error>) :
              null
            }
            {
              signin ?
              this.renderSigninInputs() :
              this.renderSignupInputs()
            }
            <FormButton type='submit'>{ActionType}</FormButton>
          </Form>
          {
            signin ?
            <Link onClick={this.handleFormSwitch}>Create account instead</Link> :
            <Link onClick={this.handleFormSwitch}>Already have an account? Sign in</Link>
          }
        </FormContainer>
      </Lecture2Container>
    );
  };
};

export default Lecture2Component;
