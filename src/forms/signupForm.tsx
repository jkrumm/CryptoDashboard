/* tslint:disable */
import React from 'react';
import MobxReactForm from 'mobx-react-form';
import { plugins } from './validator'
import { observer } from 'mobx-react';
import { FormGroup, ButtonGroup, Button, Divider } from '@blueprintjs/core';
import { auth } from "../index";

const fields = [{
  name: 'username',
  label: 'Username',
  placeholder: 'Insert Username',
  rules: 'required|string|between:3,25',
},{
  name: 'email',
  label: 'Email',
  placeholder: 'Insert Email',
  rules: 'required|email|string|between:5,25',
}, {
  name: 'password',
  label: 'Password',
  placeholder: 'Insert Password',
  rules: 'required|string|between:5,25',
}, {
  name: 'password-repeat',
  label: 'Repeat Password',
  placeholder: 'Insert Password',
  rules: 'required|string|between:5,25|same:password',
}];

const hooks = {
  onSubmit(form) {
    // auth.login()
  },
  onSuccess(form) {
    // alert('Form is valid! Send the request here.');
    // get field values
    console.log('Form Values!', form.values());
  },
  onError(form) {
    // alert('Form has errors!');
    // get all form errors
    console.log('All form errors', form.errors());
  }
}

const form = new MobxReactForm({ fields }, { plugins, hooks });

@observer
class SignUpForm extends React.Component {
  render() {
    return (
      <form>
        <FormGroup
          label={form.$('username').label}
          labelFor={form.$('username').id}
          helperText={form.$('username').error}
        >
          <input 
            className={form.$('username').error ? "bp3-input bp3-fill bp3-intent-danger" : "bp3-input bp3-fill"} 
            {...form.$('username').bind()}
          />
        </FormGroup>
        <FormGroup
          label={form.$('email').label}
          labelFor={form.$('email').id}
          helperText={form.$('email').error}
          style={{marginBottom: "25px",}}
        >
          <input 
            className={form.$('email').error ? "bp3-input bp3-fill bp3-intent-danger" : "bp3-input bp3-fill"} 
            {...form.$('email').bind()}
          />
        </FormGroup>
        <Divider/>
        <FormGroup
          label={form.$('password').label}
          labelFor={form.$('password').id}
          helperText={form.$('password').error}
          style={{marginTop: "20px",}}
        >
          <input
            className={form.$('password').error ? "bp3-input bp3-fill bp3-intent-danger" : "bp3-input bp3-fill"} 
            {...form.$('password').bind({ type: 'password' })}
          />
        </FormGroup>
        <FormGroup
          label={form.$('password-repeat').label}
          labelFor={form.$('password-repeat').id}
          helperText={form.$('password-repeat').error}
        >
          <input
            className={form.$('password-repeat').error ? "bp3-input bp3-fill bp3-intent-danger" : "bp3-input bp3-fill"} 
            {...form.$('password-repeat').bind({ type: 'password-repeat' })}
          />
        </FormGroup>

	      <ButtonGroup fill large>
          <Button
            onClick={form.onClear}
          >
            Clear
          </Button>
          <Button
            onClick={form.onSubmit}
            // intent={Intent.SUCCESS}
            // onClick={form.onSubmit}
          >
            SignUp
          </Button>
        </ButtonGroup>

        <p>{form.error}</p>
      </form>
    )
  }
};

export default SignUpForm;
