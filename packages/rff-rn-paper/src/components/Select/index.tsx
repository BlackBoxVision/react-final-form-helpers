import React from 'react';
import { View as RNView, Picker as RNPicker } from 'react-native';
import { Text as RNText, HelperText as RNHelperText } from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

export interface SelectProps {
  input?: any;
  meta?: any;
  style?: any;
  label?: string;
  disabled?: boolean;
  ContainerProps?: any;
  LabelProps?: any;
  HelperTextProps?: any;
  labelPosition?: 'left' | 'right';
  options?: Array<{ value?: any; label: string }>;
  getHelperText?: (errorKeyOrText?: string) => string;
}

export const Select: React.FunctionComponent<SelectProps> = ({
  input: { onChange, value },
  meta,
  label,
  style,
  options,
  getHelperText,
  ContainerProps,
  LabelProps,
  HelperTextProps,
  ...SelectProps
}) => {
  const error = useHasError(meta);
  const helperTextType = error ? 'error' : 'info';
  const helperText = getHelperText(error && meta.error);

  return (
    <RNView {...ContainerProps}>
      <RNText {...LabelProps}>{label}</RNText>
      <RNPicker
        {...SelectProps}
        style={style}
        selectedValue={value}
        onValueChange={onChange}
      >
        {options &&
          options.map(({ label, value }) => (
            <RNPicker.Item label={label} value={value} />
          ))}
      </RNPicker>
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

Select.displayName = 'Select';
Select.defaultProps = {
  getHelperText: str => str,
  style: {},
  options: [],
  LabelProps: {},
  ContainerProps: {},
  HelperTextProps: {
    padding: 'normal',
  },
};
