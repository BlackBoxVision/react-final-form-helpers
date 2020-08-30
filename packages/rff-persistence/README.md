# RFF Persistence [![npm version](https://badge.fury.io/js/%40blackbox-vision%2Frff-persistence.svg)](https://badge.fury.io/js/%40blackbox-vision%2Frff-persistence) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

React Final Form persistence layer with LocalForage

## Table of contents

- [Use Case](#use-case)
- [Compatibility](#compatibility)
- [Installation](#installation)
  - [NPM](#npm)
  - [YARN](#yarn)
- [Example Usages](#example-usages)
- [Component APIs](#component-apis)
  - [FinalFormPersist](#finalformpersist)
  - [Storage](#storage)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

## Use Case

You're working with `react-final-form` and you need a persistence layer for your forms values.

## Compatibility

Since this package uses `hooks` under the hood, you need at least a minimum React version of 16.8.0.

## Installation

### YARN

```javascript
yarn add @blackbox-vision/rff-persistence
```

### NPM

```javascript
npm install --save @blackbox-vision/rff-persistence
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
    <Form
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

### FinalFormPersist

The `FinalFormPersist` component has the following props:

| Properties       | Types   | Default Value | Description                                                   |
| ---------------- | ------- | ------------- | ------------------------------------------------------------- |
| isSessionStorage | boolean | false         | Flag to determine if use session-storage as persistence layer |
| formName         | string  | -             | Name of the form to save to the storage                       |
| ttl              | number  | -             | Flag to set cache duration                                    |

### Storage

The `Storage` class has the following methods:

#### setItem

A function that takes some parameters and persist values in `session` or `local` storage.

##### Parameters

- `key`: **string** - the key associated to the value to persist
- `values`: **object** - the values to persist
- `options`: **StorageConfig**
  - `isSessionStorage`: **boolean** - flag that enables persistence in `session` storage
  - `ttl`: **number** - number that determines the time to persist the values in cache

#### getItem

A function that takes some parameters and retrieves values from `session` or `local` storage.

##### Parameters

- `key`: **string** - the key associated to the persisted value
- `options`: **StorageConfig**
  - `isSessionStorage`: **boolean** - flag that retrieves the values from `session` storage

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-final-form-helpers/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/LICENSE) for more information.
