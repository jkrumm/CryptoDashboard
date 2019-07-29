/* tslint:disable */
import React from 'react';
import MobxReactForm from 'mobx-react-form';
import { plugins } from './validator'
import { observer } from 'mobx-react';
import { FormGroup, ButtonGroup, Button } from '@blueprintjs/core';
import { auth } from "../index";

const fields = [{
  name: 'email',
  label: 'Email',
  placeholder: 'Insert Email',
  rules: 'required|email|string|between:5,25',
}, {
  name: 'password',
  label: 'Password',
  placeholder: 'Insert Password',
  rules: 'required|string|between:5,25',
}];

const hooks = {
  onSubmit(form) {
    auth.login()
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

interface ILoginFormProps {
  closeOverlay: any;
}

@observer
class LoginForm extends React.Component<ILoginFormProps> {
  render() {
    return (
      <form>
        <FormGroup
          label={form.$('email').label}
          labelFor={form.$('email').id}
          helperText={form.$('email').error}
        >
          <input 
            className={form.$('email').error ? "bp3-input bp3-fill bp3-intent-danger" : "bp3-input bp3-fill"} 
            {...form.$('email').bind()}
          />
        </FormGroup>
        <FormGroup
          label={form.$('password').label}
          labelFor={form.$('password').id}
          helperText={form.$('password').error}
        >
          <input
            className={form.$('password').error ? "bp3-input bp3-fill bp3-intent-danger" : "bp3-input bp3-fill"} 
            {...form.$('password').bind({ type: 'password' })}
          />
        </FormGroup>
        {/* <label htmlFor={form.$('email').id}>
          {form.$('email').label}
        </label>
        <input {...form.$('email').bind()} />
        <p>{form.$('email').error}</p> */}

        {/* <label htmlFor={form.$('password').id}>
          {form.$('password').label}
        </label> */}
        
        {/* <p>{form.$('password').error}</p> */}

	      <ButtonGroup fill large>
          <Button
            onClick={form.onClear}
          >
            Clear
          </Button>
          <Button
            onClick={form.onSubmit}
            // onClick={form.onSubmit}
          >
            Submit
          </Button>
        </ButtonGroup>

        {/* <button type="submit" onClick={form.onSubmit}>Submit</button>
        <button type="button" onClick={form.onReset}>Reset</button>
        <button type="button" onClick={form.onClear}>Clear</button> */}

        <p>{form.error}</p>
      </form>
    )
  }
};

export default LoginForm;
