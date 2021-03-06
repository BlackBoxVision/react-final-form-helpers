# RFF Material UI

Material UI Wrapper for React Final Form

## Table of contents

- [Use Case](#use-case)
- [Compatibility](#compatibility)
- [Installation](#installation)
  - [NPM](#npm)
  - [YARN](#yarn)
- [Example Usage](#example-usages)
- [Storybook](#storybook)
- [Component APIs](#component-apis)
  - [TextInput](#textinput)
  - [Select](#select)
  - [Checkbox](#checkbox)
  - [RadioGroup](#radiogroup)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

## Use Case

You're working with `react-final-form` on `web` and you need bindings between `material-ui` and `react-final-form`.

## Compatibility

Since this package uses `hooks` under the hood, you need at least a minimum React version of **16.8.0**.

## Installation

### YARN

```javascript
yarn add @blackbox-vision/rff-material-ui
```

### NPM

```javascript
npm install --save @blackbox-vision/rff-material-ui
```

## Example Usage

After reading and performing the previous steps, you should be able to import the library and use it like in this example:

```javascript
import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextInput } from '@blackbox-vision/rff-material-ui';

const onSubmit = async (values: any) => alert(JSON.stringify(values, null, 2));

const MyForm = (props: any) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          {...args}
          name="email"
          variant="filled"
          component={TextInput}
          validate={value => (value ? undefined : 'Required')}
        />
        <button type="submit">Send</button>
      </form>
    )}
  />
);

MyForm.displayName = 'MyForm';

export default MyForm;
```

## Storybook

You can run a playground to test components locally. To do this, run the `npm run storybook` command. Once Storybook server is started, open a browser tab and go to **http://localhost:6006/** to start.

## Component APIs

### TextInput

The `TextInput` component has the following props:

| Properties | Types  | Default Value | Required | Description                                             |
| ---------- | ------ | ------------- | -------- | ------------------------------------------------------- |
| name       | string | -             | Yes      | Property that represents the name of input              |
| label      | string | -             | No       | Property that represents the label to show              |
| classes    | object | -             | No       | Override or extend the styles applied to the component. |
| variant    | string | "standard"    | No       | Property that represents the variant of text input      |

The `TextInput` also **inherits its own props** from [`material-ui`](https://material-ui.com/api/text-field/#props).

### Select

The `Select` component has the following props:

| Properties | Types  | Default Value | Required | Description                                        |
| ---------- | ------ | ------------- | -------- | -------------------------------------------------- |
| name       | string | -             | Yes      | Property that represents the name of input         |
| label      | string | -             | No       | Property that represents the label to show         |
| variant    | string | "standard"    | No       | Property that represents the variant of text input |
| options    | array  | -             | Yes      | Property that represents the options to choose     |

The `Select` also **inherits its own props** from [`material-ui`](https://material-ui.com/api/select/#props).

### Checkbox

The `Checkbox` component has the following props:

| Properties | Types  | Default Value | Required | Description                                             |
| ---------- | ------ | ------------- | -------- | ------------------------------------------------------- |
| name       | string | -             | Yes      | Property that represents the name of input              |
| label      | string | -             | No       | Property that represents the label to show              |
| classes    | object | -             | No       | Override or extend the styles applied to the component. |
| icon       | node   | "standard"    | No       | The icon to display when the component is unchecked.    |

The `Checkbox` also **inherits its own props** from [`material-ui`](https://material-ui.com/api/checkbox/#props).

### RadioGroup

The `RadioGroup` component has the following props:

| Properties | Types  | Default Value | Required | Description                                                 |
| ---------- | ------ | ------------- | -------- | ----------------------------------------------------------- |
| name       | string | -             | Yes      | Property that represents the name of input                  |
| label      | string | -             | No       | Property that represents the label to show                  |
| options    | array  | []            | No       | Property that represents the options of radio buttons group |

The `RadioGroup` also **inherits its own props** from [`material-ui`](https://material-ui.com/api/radio-group/#props).

### DatePicker

The `DatePicker` component has the following props:

| Properties | Types  | Default Value | Required | Description                                |
| ---------- | ------ | ------------- | -------- | ------------------------------------------ |
| name       | string | -             | Yes      | Property that represents the name of input |
| label      | string | -             | No       | Property that represents the label to show |

The `DatePicker` also **inherits its own props** from [`material-ui-pickers`](https://material-ui-pickers.dev/api/DatePicker).

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-final-form-helpers/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-final-form-helpers/blob/master/LICENSE) for more information.
