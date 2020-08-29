# RFF Wizard [![npm version](https://badge.fury.io/js/%40blackbox-vision%2Frff-wizard.svg)](https://badge.fury.io/js/%40blackbox-vision%2Frff-wizard)

React Final Form Wizard Pattern

## Table of contents

- [Use Case](#use-case)
- [Compatibility](#compatibility)
- [Installation](#installation)
  - [NPM](#npm)
  - [YARN](#yarn)
- [Example Usages](#example-usages)
- [Component APIs](#component-apis)
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

```javascript
import React from 'react';
import { Form } from 'react-final-form';
import { FinalFormPersist } from '@blackbox-vision/rff-persistence';

const MyForm = props => {
  const initialValues = Storage.getItem('example', { isSessionStorage: false });

  return (
    <WizardForm
      initialStep={0}
      onSubmit={values => alert(values)}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>{/** your form code **/}</form>
          <FinalFormPersist
            isSessionStorage={false}
            formName="example"
            ttl={250000}
          />
        </>
      )}
    />
  );
};

MyForm.displayName = 'MyForm';

export default MyForm;
```

## Component APIs

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-final-form-helpers/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/LICENSE) for more information.
