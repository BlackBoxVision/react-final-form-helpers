# RFF Wizard [![npm version](https://badge.fury.io/js/%40blackbox-vision%2Frff-wizard.svg)](https://badge.fury.io/js/%40blackbox-vision%2Frff-wizard) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

React Final Form Wizard Pattern

## Table of contents

- [Use Case](#use-case)
- [Compatibility](#compatibility)
- [Installation](#installation)
  - [NPM](#npm)
  - [YARN](#yarn)
- [Example Usages](#example-usages)
- [Component APIs](#component-apis)
  - [WizardForm](#wizardform)
  - [WizardPage](#wizardpage)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

## Use Case

You're working with `react-final-form` and you need to implement a Wizard Form.

## Compatibility

Since this package uses `hooks` under the hood, you need at least a minimum React version of 16.8.0.

## Installation

### YARN

```javascript
yarn add @blackbox-vision/rff-wizard
```

### NPM

```javascript
npm install --save @blackbox-vision/rff-wizard
```

## Example Usages

After reading and performing the previous steps, you should be able to import the library and use it like in this example:

1. Create a `FormLayout` component:

```javascript
import React from 'react';

const MyFormLayout = ({
  handleSubmit,
  activeStep,
  isLastPage,
  submitting,
  children,
  onNext,
  onBack,
}) => (
  <form onSubmit={handleSubmit}>
    <h1>My Form</h1>
    {children}
    <div className="buttons">
      {activeStep > 0 && (
        <button type="button" onClick={onBack}>
          « Previous
        </button>
      )}
      {!isLastPage && <button onClick={onNext}>Next »</button>}
      {isLastPage && (
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      )}
    </div>
  </form>
);

MyFormLayout.displayName = 'MyFormLayout';

export default MyFormLayout;
```

2. Create a custom `Form`:

```javascript
import React from 'react';
import { Form, Field } from 'react-final-form';
import { WizardForm, WizardPage } from '@blackbox-vision/rff-wizard';

import MyFormLayout from './MyFormLayout';

const MyWizardForm = props => (
  <WizardForm layout={MyFormLayout} onSubmit={values => alert(values)}>
    <WizardPage>
      <Field
        type="text"
        name="firstname"
        component="input"
        placeholder="Firstname"
      />
      <Field
        type="text"
        name="lastname"
        component="input"
        placeholder="Lastname"
      />
    </WizardPage>
    <WizardPage
      validate={values => {
        const errors = {};

        if (!values.password) {
          errors.password = 'Password is required';
        }

        return errors;
      }}
    >
      <Field name="email" type="email" component="input" placeholder="Email" />
      <Field
        name="password"
        type="password"
        component="input"
        placeholder="Password"
      />
    </WizardPage>
  </WizardForm>
);

MyWizardForm.displayName = 'MyForm';

export default MyWizardForm;
```

## Component APIs

### WizardForm

The `WizardForm` component has the following props:

| Properties  | Types        | Default Value | Description                                 |
| ----------- | ------------ | ------------- | ------------------------------------------- |
| initialStep | number       | 0             | The initial step for the form               |
| layout      | ReactElement | -             | The Layout component to wrap the WizardForm |

Also, `WizardForm` inherits all `Form` props from `react-final-form`.

### WizardPage

The `WizardPage` component has the following props:

| Properties | Types    | Default Value | Description                                                               |
| ---------- | -------- | ------------- | ------------------------------------------------------------------------- |
| validate   | function | -             | A function that gives the form values and performs validation over fields |

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-final-form-helpers/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/LICENSE) for more information.
