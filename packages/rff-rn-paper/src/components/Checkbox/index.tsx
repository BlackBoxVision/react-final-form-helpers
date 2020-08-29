import React from 'react';
import { View } from 'react-native';
import {
  Text as PaperText,
  Checkbox as PaperCheckbox,
  HelperText as PaperHelperText,
} from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

import { BaseInputProps } from 'components/TextInput';

type PaperCheckBoxProps = React.ComponentProps<typeof PaperCheckbox>;

export type CheckboxProps = BaseInputProps &
  PaperCheckBoxProps & {
    label?: string;
    labelPosition?: 'left' | 'right';
  };

export const Checkbox: React.FC<CheckboxProps> = ({
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
    <View {...ContainerProps}>
      <View {...InnerContainerProps}>
        {labelPosition === 'left' && (
          <PaperText {...LabelProps}>{label}</PaperText>
        )}
        <PaperCheckbox
          {...CheckboxProps}
          onPress={() => onChange(!value)}
          status={value ? 'checked' : 'unchecked'}
        />
        {labelPosition === 'right' && (
          <PaperText {...LabelProps}>{label}</PaperText>
        )}
      </View>
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
