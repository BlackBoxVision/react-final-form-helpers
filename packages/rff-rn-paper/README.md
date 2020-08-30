# RFF React Native Paper UI [![npm version](https://badge.fury.io/js/%40blackbox-vision%2Frff-rn-paper.svg)](https://badge.fury.io/js/%40blackbox-vision%2Frff-rn-paper) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

React Native Paper UI Wrapper for React Final Form

## Table of contents

- [Use Case](#use-case)
- [Compatibility](#compatibility)
- [Installation](#installation)
  - [NPM](#npm)
  - [YARN](#yarn)
- [Example Usage](#example-usages)
- [Component APIs](#component-apis)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

## Use Case

You're working with `react-final-form` on `react-native` and you need bindings between `react-native-paper` and `react-final-form`.

## Compatibility

Since this package uses `hooks` under the hood, you need at least a minimum React version of 16.8.0.

## Installation

### YARN

```javascript
yarn add @blackbox-vision/rff-rn-paper
```

### NPM

```javascript
npm install --save @blackbox-vision/rff-rn-paper
```

## Example Usage

After reading and performing the previous steps, you should be able to import the library and use it like in this example:

```javascript
import React from 'react';
import { View } from 'react-native';
import { Form, Field } from 'react-final-form';
import {
  Select,
  Switch,
  Checkbox,
  TextInput,
  RadioButtonGroup,
} from '@blackbox-vision/rff-rn-paper';

const MyForm = props => (
  <Form
    onSubmit={values => alert(values)}
    render={({ handleSubmit }) => (
      <View>
        <Field
          component={TextInput}
          name="firstname"
          label="Firstname"
          placeholder="Enter firstname"
        />
        <Field
          component={TextInput}
          name="lastname"
          label="Lastname"
          placeholder="Enter lastname"
        />
        <Field
          component={Switch}
          name="likeFootball"
          labelPosition="right"
          label="Do you like Football?"
        />
        <Field
          component={Checkbox}
          name="color"
          labelPosition="right"
          label="Do you like red?"
        />
        <Field
          component={Select}
          name="favoriteMeal"
          label="Which is your favourite meal"
          options={[
            { label: 'pizza', value: 0 },
            { label: 'spaghetti', value: 1 },
          ]}
        />
        <Field
          component={RadioButtonGroup}
          name="favoriteDay"
          label="Which is your favourite day?"
          options={[
            { label: 'monday', value: 0 },
            { label: 'thursday', value: 1 },
          ]}
        />
      </View>
    )}
  />
);

MyForm.displayName = 'MyForm';

export default MyForm;
```

## Component APIs

### RadioButtonGroup

The `RadioButtonGroup` component has the following props:

| Properties | Types | Default Value | Description |
| ---------- | ----- | ------------- | ----------- |


### RadioButton

The `RadioButton` component has the following props:

| Properties | Types | Default Value | Description |
| ---------- | ----- | ------------- | ----------- |


### TextInput

The `TextInput` component has the following props:

| Properties | Types | Default Value | Description |
| ---------- | ----- | ------------- | ----------- |


### Checkbox

The `Checkbox` component has the following props:

| Properties | Types | Default Value | Description |
| ---------- | ----- | ------------- | ----------- |


### Select

The `Select` component has the following props:

| Properties | Types | Default Value | Description |
| ---------- | ----- | ------------- | ----------- |


### Switch

The `Switch` component has the following props:

| Properties | Types | Default Value | Description |
| ---------- | ----- | ------------- | ----------- |


## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-final-form-helpers/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/LICENSE) for more information.
