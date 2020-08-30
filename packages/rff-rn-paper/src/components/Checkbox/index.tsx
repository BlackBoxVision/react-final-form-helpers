import React from 'react';
import { View } from 'react-native';
import {
  Text as PaperText,
  Checkbox as PaperCheckbox,
} from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

import { BaseInputProps } from '../TextInput';
import { Container } from '../Container';

export type CheckboxProps = BaseInputProps &
  React.ComponentProps<typeof PaperCheckbox> & {
    /**
     * Property that represents the label to show
     */
    label?: string;
    /**
     * Property that represents the position of the label
     */
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
    </Container>
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
