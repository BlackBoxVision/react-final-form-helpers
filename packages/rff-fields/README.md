# RFF Fields [![npm version](https://badge.fury.io/js/%40blackbox-vision%2Frff-fields.svg)](https://badge.fury.io/js/%40blackbox-vision%2Frff-fields) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

React Final Form Custom Fieds

## Table of contents

- [Use Case](#use-case)
- [Compatibility](#compatibility)
- [Installation](#installation)
  - [NPM](#npm)
  - [YARN](#yarn)
- [Example Usages](#example-usages)
- [Component APIs](#component-apis)
  - [ConditionalField](#conditionalfield)
  - [DependentField](#dependentfield)
  - [WhenFieldChanges](#whenfieldchanges)
  - [PrefixedField](#prefix)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

## Use Case

You're working with `react-final-form` and you need common use cases like dependent fields, watch a field for changes, use prefix on fields.

## Compatibility

Since this package uses `hooks` under the hood, you need at least a minimum React version of 16.8.0.

## Installation

### YARN

```javascript
yarn add @blackbox-vision/rff-fields
```

### NPM

```javascript
npm install --save @blackbox-vision/rff-fields
```

## Example Usages

### ConditionalField

Use `ConditionalField` when you want to render fields given a condition:

```javascript
import React from 'react';
import { Form, Field } from 'react-final-form';
import { ConditionalField } from '@blackbox-vision/rff-fields';

const MyForm = () => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Transport</label>
          <div>
            <label>
              <Field
                name="reception"
                component="input"
                type="radio"
                value="delivery"
              />{' '}
              Delivery
            </label>
            <label>
              <Field
                name="reception"
                component="input"
                type="radio"
                value="pickup"
              />{' '}
              Pickup
            </label>
          </div>
        </div>
        <Condition when="reception" is="delivery">
          <div>
            <label>Street</label>
            <Field
              name="street"
              component="input"
              type="text"
              placeholder="Street Address"
            />
          </div>
        </Condition>
        <Condition when="reception" is="pickup">
          <div>
            <label>Pickup Time</label>
            <Field name="pickupTime" component="select">
              <option />$
              {pickupTimes.map(time => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Field>
          </div>
        </Condition>
        <div>
          <label>Is it a gift?</label>
          <Field name="gift" component="input" type="checkbox" />
        </div>
        <Condition when="gift" is={true}>
          <div>
            <label>Gift Message</label>
            <Field
              name="message"
              component="textarea"
              placeholder="Gift Message"
            />
          </div>
        </Condition>
        <div className="buttons">
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
      </form>
    )}
  </Form>
);

export default MyForm;
```

### DependentField

Use `DependentField` when you want to render fields that need to be render after getting its data requirements from another values:

```javascript
import React from 'react';
import { Form, Field } from 'react-final-form';
import { DependentField } from '@blackbox-vision/rff-fields';

const getStatesForCountry = country => {...}
const countries = [...];

const MyForm = () => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <Field name="country" component="select">
          {countries.map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Field>
        <DependentField
          onChange={async ({ country }) => await getStatesForCountry(country)}
        >
          {states => (
            <Field name="state" component="select">
              {states.map(state => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Field>
          )}
        </DependentField>
        <div className="buttons">
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
      </form>
    )}
  </Form>
);

export default MyForm;
```

### WhenFieldChanges

Use `WhenFieldChanges` to watch a specific field value and change other field value:

```javascript
import React from 'react';
import { Form, Field } from 'react-final-form';
import { WhenFieldChanges } from '@blackbox-vision/rff-fields';

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values, errors }) => {
      return (
        <form onSubmit={handleSubmit}>
          <WhenFieldChanges
            field="gift"
            becomes={false}
            set="giftWrap"
            to={false}
          />
          <WhenFieldChanges
            field="gift"
            becomes={false}
            set="giftCardMessage"
            to={undefined}
          />
          <div>
            <label>Is this a gift?</label>
            <Field name="gift" component="input" type="checkbox" />
          </div>
          <div>
            <label>Gift wrap?</label>
            <Field
              name="giftWrap"
              component="input"
              type="checkbox"
              disabled={!values.gift}
            />
          </div>
          <div>
            <label>Message</label>
            <Field
              name="giftCardMessage"
              component="textarea"
              disabled={!values.gift}
              placeholder="What do you want the card to say?"
            />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </div>
        </form>
      );
    }}
  />
);

export default MyForm;
```

### PrefixedField

Use `PrefixedField` when you want to render fields with a prefix:

```javascript
import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  PrefixedField,
  PrefixedFieldProvider,
} from '@blackbox-vision/rff-fields';

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <h3>Shipping</h3>
        <PrefixedFieldProvider prefix="shipping">
          <div>
            <label>Street</label>
            <PrefixedField
              name="street"
              component="input"
              type="text"
              placeholder="Street"
            />
          </div>
          <div>
            <label>City</label>
            <PrefixedField
              name="city"
              component="input"
              type="text"
              placeholder="City"
            />
          </div>
        </PrefixedFieldProvider>
        <h3>Billing</h3>
        <PrefixedFieldProvider prefix="billing">
          <div>
            <label>Street</label>
            <PrefixedField
              name="street"
              component="input"
              type="text"
              placeholder="Street"
            />
          </div>
          <div>
            <label>City</label>
            <PrefixedField
              name="city"
              component="input"
              type="text"
              placeholder="City"
            />
          </div>
        </PrefixedFieldProvider>
        <div className="buttons">
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
        </div>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    )}
  />
);

export default MyForm;
```

## Component APIs

### ConditionalField

The `ConditionalField` component has the following props:

| Properties | Types  | Default Value | Description                                                      |
| ---------- | ------ | ------------- | ---------------------------------------------------------------- |
| when       | string | -             | Property that represents the name of the field to watch          |
| is         | any    | -             | Property that represents the value needed to reach the condition |

### DependentField

The `DependentField` component has the following props:

| Properties | Types    | Default Value | Description                                                                   |
| ---------- | -------- | ------------- | ----------------------------------------------------------------------------- |
| onChange   | Function | -             | Property that represents a function that let you track all form values change |
| children   | Function | -             | Property that represents a children as a function that takes all form values  |

### WhenFieldChanges

The `WhenFieldChanges` component has the following props:

| Properties | Types  | Default Value | Description                                                               |
| ---------- | ------ | ------------- | ------------------------------------------------------------------------- |
| field      | string | -             | Property that represents the name of the field to watch                   |
| becomes    | any    | -             | Property that represents the required value for the field we are watching |
| set        | string | -             | Property that represents the name of the field to change its value        |
| to         | any    | -             | Property that represents the value to set for the field                   |

### Prefix

The `Prefix Field API` is composed by 2 components `PrefixedFieldProvider` and `PrefixedField`:

#### PrefixedFieldProvider

The `PrefixedFieldProvider` component has the following props:

| Properties | Types  | Default Value | Description                                               |
| ---------- | ------ | ------------- | --------------------------------------------------------- |
| prefix     | string | -             | Property that represents the prefix to use for the fields |

#### PrefixedField

The `PrefixedField` component has all the supported props from `final-form` `Field` component API.

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-final-form-helpers/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/LICENSE) for more information.
