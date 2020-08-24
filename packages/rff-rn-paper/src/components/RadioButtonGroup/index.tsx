import React from 'react';
import { View as RNView } from 'react-native';
import {
  Text as RNText,
  RadioButton as RNRadioButton,
  HelperText as RNHelperText,
} from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

export interface RadioButtonGroupProps {
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
  InnerLabelProps?: any;
  uncheckedColor?: string;
  InnerContainerProps?: any;
  options?: Array<{ value?: any; label: string }>;
  getHelperText?: (errorKeyOrText?: string) => string;
}

export const RadioButtonGroup: React.FunctionComponent<
  RadioButtonGroupProps
> = ({
  input: { onChange, value },
  meta,
  label,
  style,
  options,
  getHelperText,
  ContainerProps,
  InnerContainerProps,
  InnerLabelProps,
  LabelProps,
  HelperTextProps,
  ...RadioButtonGroupProps
}) => {
  const error = useHasError(meta);
  const helperTextType = error ? 'error' : 'info';
  const helperText = getHelperText(error && meta.error);

  return (
    <RNView {...ContainerProps}>
      <RNText {...LabelProps}>{label}</RNText>
      <RNRadioButton.Group
        {...RadioButtonGroupProps}
        onValueChange={() => onChange(value)}
        value={value}
      >
        {options &&
          options.map(({ label, value }) => (
            <RNView {...InnerContainerProps}>
              <RNText {...InnerLabelProps}>{label}</RNText>
              <RNRadioButton value={value} />
            </RNView>
          ))}
      </RNRadioButton.Group>
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

RadioButtonGroup.displayName = 'RadioButtonGroup';
RadioButtonGroup.defaultProps = {
  getHelperText: str => str,
  style: {},
  options: [],
  InnerLabelProps: {},
  InnerContainerProps: {},
  LabelProps: {},
  ContainerProps: {},
  HelperTextProps: {
    padding: 'normal',
  },
};
