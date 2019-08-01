/* tslint:disable */
import React from 'react';
import MobxReactForm from 'mobx-react-form';
import { plugins } from './validator'
import { observer } from 'mobx-react';
import { FormGroup, ButtonGroup, Button } from '@blueprintjs/core';
import { auth } from "../index";

const fields = [{
  name: 'title',
  label: 'Title',
  placeholder: 'Insert Title',
  rules: 'required|string|between:1,50',
}, {
  name: 'desc',
  label: 'Description',
  placeholder: 'Insert Description',
  rules: 'string',
}, {
  name: 'group',
  // type: 'radio',
  label: 'Test',
  rules: 'required',
  default: 'none'
}, {
  name: 'date',
  // type: 'radio',
  label: 'Date',
}];

// , {
//   value: true,
//   type: 'checkbox',
//   label: 'Accept Terms',
//   rules: 'boolean|accepted',
//   options: {
//     validateOnChange: true,
//   },

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

@observer
class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <FormGroup
          label={form.$('title').label}
          labelFor={form.$('title').id}
          helperText={form.$('title').error}
        >
          <input 
            className={form.$('title').error ? "bp3-input bp3-fill bp3-intent-danger" : "bp3-input bp3-fill"} 
            {...form.$('title').bind()}
          />
        </FormGroup>
        <FormGroup
          label={form.$('desc').label}
          labelFor={form.$('desc').id}
          helperText={form.$('desc').error}
        >
          <input
            className={form.$('desc').error ? "bp3-input bp3-fill bp3-intent-danger" : "bp3-input bp3-fill"} 
            {...form.$('desc').bind({ type: 'desc' })}
          />
        </FormGroup>
        <ButtonGroup fill>
          <Button
            onClick={form.onClear}
          >
            Buy
          </Button>
          <Button
            onClick={form.onSubmit}
            // intent={Intent.SUCCESS}
            // onClick={form.onSubmit}
          >
            Sell
          </Button>
          <Button
            onClick={form.onClear}
          >
            X
          </Button>
          <Button
            onClick={form.onSubmit}
            // intent={Intent.SUCCESS}
            // onClick={form.onSubmit}
          >
            J
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
