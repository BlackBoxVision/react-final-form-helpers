import React from 'react';
import { View } from 'react-native';
import {
  Text as RNText,
  RadioButton as RNRadioButton,
  HelperText as RNHelperText,
} from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

export interface RadioButtonProps {
  input?: any;
  meta?: any;
  style?: any;
  color?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  ContainerProps?: any;
  LabelProps?: any;
  HelperTextProps?: any;
  uncheckedColor?: string;
  InnerContainerProps?: any;
  labelPosition?: 'left' | 'right';
  getHelperText?: (errorKeyOrText?: string) => string;
}

export const RadioButton: React.FunctionComponent<RadioButtonProps> = ({
  input: { name, onChange, value: inputValue, ...InputProps },
  meta,
  label,
  style,
  value,
  labelPosition,
  getHelperText,
  ContainerProps,
  InnerContainerProps,
  LabelProps,
  HelperTextProps,
  ...RadioButtonProps
}) => {
  const error = useHasError(meta);
  const helperTextType = error ? 'error' : 'info';
  const helperText = getHelperText(error && meta.error);

  return (
    <View {...ContainerProps}>
      <View {...InnerContainerProps}>
        {labelPosition === 'left' && <RNText {...LabelProps}>{label}</RNText>}
        <RNRadioButton
          {...InputProps}
          {...RadioButtonProps}
          style={style}
          value={value}
          onPress={() => onChange(value)}
          status={inputValue ? 'checked' : 'unchecked'}
        />
        {labelPosition === 'right' && <RNText {...LabelProps}>{label}</RNText>}
      </View>
      <RNHelperText
        {...HelperTextProps}
        type={helperTextType}
        visible={!!helperText}
      >
        {helperText}
      </RNHelperText>
    </View>
  );
};

RadioButton.displayName = 'RadioButton';
RadioButton.defaultProps = {
  getHelperText: str => str,
  style: {},
  labelPosition: 'right',
  InnerContainerProps: {},
  LabelProps: {},
  ContainerProps: {},
  HelperTextProps: {
    padding: 'normal',
  },
};
