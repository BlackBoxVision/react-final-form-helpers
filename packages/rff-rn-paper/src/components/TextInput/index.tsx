import React from 'react';
import { ViewProps } from 'react-native';
import {
  Text as PaperText,
  TextInput as PaperTextInput,
  HelperText as PaperHelperText,
} from 'react-native-paper';
import { FieldRenderProps } from 'react-final-form';

import { useHasError } from '../../hooks/useHasError';

import { Container } from '../Container';

export type BaseInputProps = FieldRenderProps<any> & {
  /**
   * Property that represents the values for the Label
   */
  LabelProps?: React.ComponentProps<typeof PaperText>;
  /**
   * Property that represents the values for the View container
   */
  ContainerProps?: ViewProps;
  /**
   * Property that represents the values for the Helper Text
   */
  HelperTextProps?: React.ComponentProps<typeof PaperHelperText>;
  /**
   * Property that represents the values for the Label
   */
  InnerLabelProps?: React.ComponentProps<typeof PaperText>;
  /**
   * Property that represents the values for the inside View container
   */
  InnerContainerProps?: ViewProps;
  /**
   * Property that represents a function to get a message to show in the HelperText
   */
  getHelperText?: (errorKeyOrText?: string) => string;
};

export type TextInputProps = BaseInputProps &
  React.ComponentProps<typeof PaperTextInput> & {
    /**
     * Property that represents the label to show
     */
    label?: string;
  };

export const TextInput: React.FC<TextInputProps> = ({
  input: { onChange, onFocus, onBlur, value, ...InputProps },
  meta,
  label,
  getHelperText,
  ContainerProps,
  HelperTextProps,
  ...TextInputProps
}) => {
  const error = useHasError(meta);
  const helperText = getHelperText(error && meta.error);

  return (
    <Container
      {...ContainerProps}
      HelperTextProps={{
        ...HelperTextProps,
        children: helperText,
        visible: !!helperText,
        type: error ? 'error' : 'info',
      }}
    >
      <PaperTextInput
        {...InputProps}
        {...TextInputProps}
        value={value}
        error={error}
        onChangeText={onChange}
        onBlur={(event: any) => onBlur(event)}
        onFocus={(event: any) => onFocus(event)}
      />
    </Container>
  );
};

TextInput.displayName = 'TextInput';
TextInput.defaultProps = {
  getHelperText: str => str,
  style: {},
  ContainerProps: {},
  HelperTextProps: {
    padding: 'normal',
  },
};
