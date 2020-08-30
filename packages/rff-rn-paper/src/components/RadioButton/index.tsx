import React from 'react';
import { View } from 'react-native';
import {
  Text as PaperText,
  RadioButton as PaperRadioButton,
} from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

import { BaseInputProps } from '../TextInput';
import { Container } from '../Container';

export type RadioButtonProps = BaseInputProps &
  React.ComponentProps<typeof PaperRadioButton> & {
    /**
     * Property that represents the label to show
     */
    label?: string;
    /**
     * Property that represents the position of the label
     */
    labelPosition?: 'left' | 'right';
  };

export const RadioButton: React.FC<RadioButtonProps> = ({
  input: { onChange, value: inputValue },
  meta,
  label,
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
        <PaperRadioButton
          {...RadioButtonProps}
          value={value}
          onPress={() => onChange(value)}
          status={inputValue ? 'checked' : 'unchecked'}
        />
        {labelPosition === 'right' && (
          <PaperText {...LabelProps}>{label}</PaperText>
        )}
      </View>
    </Container>
  );
};

RadioButton.displayName = 'RadioButton';
RadioButton.defaultProps = {
  getHelperText: str => str,
  labelPosition: 'right',
  InnerContainerProps: {},
  LabelProps: {},
  ContainerProps: {},
  HelperTextProps: {
    padding: 'normal',
  },
};
