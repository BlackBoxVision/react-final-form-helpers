import React from 'react';
import { View as RNView } from 'react-native';
import {
  Text as RNText,
  Checkbox as RNCheckbox,
  HelperText as RNHelperText,
} from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

export interface CheckboxProps {
  input?: any;
  meta?: any;
  color?: string;
  label?: string;
  disabled?: boolean;
  ContainerProps?: any;
  LabelProps?: any;
  HelperTextProps?: any;
  uncheckedColor?: string;
  InnerContainerProps?: any;
  labelPosition?: 'left' | 'right';
  getHelperText?: (errorKeyOrText?: string) => string;
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  input: { onChange, value },
  meta,
  label,
  labelPosition,
  getHelperText,
  ContainerProps,
  InnerContainerProps,
  LabelProps,
  HelperTextProps,
  ...CheckboxProps
}) => {
  const error = useHasError(meta);
  const helperTextType = error ? 'error' : 'info';
  const helperText = getHelperText(error && meta.error);

  return (
    <RNView {...ContainerProps}>
      <RNView {...InnerContainerProps}>
        {labelPosition === 'left' && <RNText {...LabelProps}>{label}</RNText>}
        <RNCheckbox
          {...CheckboxProps}
          onPress={() => onChange(!value)}
          status={value ? 'checked' : 'unchecked'}
        />
        {labelPosition === 'right' && <RNText {...LabelProps}>{label}</RNText>}
      </RNView>
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

Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
  getHelperText: str => str,
  labelPosition: 'right',
  InnerContainerProps: {},
  LabelProps: {},
  ContainerProps: {},
  HelperTextProps: {
    padding: 'normal',
  },
};
