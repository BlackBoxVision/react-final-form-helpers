import React from 'react';
import { View, ViewProps } from 'react-native';
import {
  Text as PaperText,
  TextInput as PaperTextInput,
  HelperText as PaperHelperText,
} from 'react-native-paper';
import { FieldRenderProps } from 'react-final-form';

import { useHasError } from '../../hooks/useHasError';

type PaperTextProps = React.ComponentProps<typeof PaperText>;
type PaperTextInputProps = React.ComponentProps<typeof PaperTextInput>;
type PaperHelperTextProps = React.ComponentProps<typeof PaperHelperText>;

export type BaseInputProps = FieldRenderProps<any> & {
  /**
   * Property that represents the values for the Label
   */
  LabelProps?: PaperTextProps;
  /**
   * Property that represents the values for the View container
   */
  ContainerProps?: ViewProps;
  /**
   * Property that represents the values for the Helper Text
   */
  HelperTextProps?: PaperHelperTextProps;
  /**
   * Property that represents the values for the Label
   */
  InnerLabelProps?: PaperTextProps;
  /**
   * Property that represents the values for the inside View container
   */
  InnerContainerProps?: ViewProps;
  /**
   * Property that represents a function to get a message to show in the HelperText
   */
  getHelperText?: (errorKeyOrText?: string) => string;
};

export type TextInputProps = BaseInputProps & PaperTextInputProps;

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
  const helperTextType = error ? 'error' : 'info';
  const helperText = getHelperText(error && meta.error);

  return (
    <View {...ContainerProps}>
      <PaperTextInput
        {...InputProps}
        {...TextInputProps}
        value={value}
        error={error}
        onChangeText={onChange}
        onBlur={(event: any) => onBlur(event)}
        onFocus={(event: any) => onFocus(event)}
      />
      {!!helperText && (
        <PaperHelperText
          {...HelperTextProps}
          type={helperTextType}
          visible={!!helperText}
        >
          {helperText}
        </PaperHelperText>
      )}
    </View>
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
