import React, { useEffect, useRef } from 'react';
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
  /**
   * Property to show error when incoming initialValues
   */
  showErrorOnMount?: boolean;
};

export type TextInputProps = BaseInputProps &
  React.ComponentProps<typeof PaperTextInput> & {
    /**
     * Property that represents the label to show
     */
    label?: string;
    /**
     * Property that represents if show or hide the password text
     */
    secureTextEntry?: boolean;
    /**
    * Property that represents the input styles
    */
    style?: any;
    /**
     * Property to set autoFocus in Input
     */
    autoFocus?: boolean;
  };

export let TextInput: React.FC<TextInputProps> = React.forwardRef(({
  showErrorOnMount,
  autoFocus, 
  input: { onChange, onFocus, onBlur, value, ...InputProps },
  meta,
  label,
  secureTextEntry,
  style,
  getHelperText,
  ContainerProps,
  HelperTextProps,
  ...TextInputProps
}: TextInputProps, ref: React.Ref<any>) => {
  let textInputRef: any = useRef(ref);
  let error = useHasError(meta, showErrorOnMount);
  let helperText = getHelperText(error && meta.error);

  useEffect(() => {
    if (secureTextEntry && style && style.hasOwnProperty("fontFamily")) {
      textInputRef?.current?.setNativeProps?.({
        style: {
          fontFamily: style.fontFamily
        }
      })
    }
  }, [secureTextEntry])

  useEffect(() => {
    if (autoFocus) {
      textInputRef?.current?.focus?.();
    }
  }, [autoFocus])

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
        label={label}
        style={style}
        secureTextEntry={secureTextEntry}
        ref={textInputRef}
        value={value}
        error={error}
        onChangeText={onChange}
        onBlur={(event: any) => onBlur(event)}
        onFocus={(event: any) => onFocus(event)}
      />
    </Container>
  );
}
);

TextInput.displayName = 'TextInput';

TextInput.defaultProps = {
  showErrorOnMount: false,
  autoFocus: false,
  getHelperText: str => str,
  style: {},
  ContainerProps: {},
  HelperTextProps: {
    padding: 'normal',
  },
};
