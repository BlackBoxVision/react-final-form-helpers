import React from 'react';
import { View as RNView } from 'react-native';
import {
  TextInput as RNTextInput,
  HelperText as RNHelperText,
} from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

export interface TextInputProps {
  input?: any;
  meta?: any;
  style?: any;
  label?: string;
  dense?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  placeholder?: string;
  ContainerProps?: any;
  HelperTextProps?: any;
  numberOfLines?: number;
  selectionColor?: string;
  underlineColor?: string;
  mode?: 'flat' | 'outlined';
  getHelperText?: (errorKeyOrText?: string) => string;
}

export const TextInput: React.FunctionComponent<TextInputProps> = ({
  input: { onChange, onFocus, onBlur, value, ...InputProps },
  meta,
  mode,
  label,
  style,
  getHelperText,
  ContainerProps,
  HelperTextProps,
  ...TextInputProps
}) => {
  const error = useHasError(meta);
  const helperTextType = error ? 'error' : 'info';
  const helperText = getHelperText(error && meta.error);

  return (
    <RNView {...ContainerProps}>
      <RNTextInput
        {...InputProps}
        {...TextInputProps}
        mode={mode}
        label={label}
        value={value}
        error={error}
        style={style}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={onChange}
      />
      {!!helperText && (
        <RNHelperText
          {...HelperTextProps}
          type={helperTextType}
          visible={!!helperText}
        >
          {helperText}
        </RNHelperText>
      )}
    </RNView>
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
