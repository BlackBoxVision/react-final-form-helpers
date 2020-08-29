import React from 'react';
import { View } from 'react-native';
import {
  Text as PaperText,
  HelperText as PaperHelperText,
  RadioButton as PaperRadioButton,
} from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

import { BaseInputProps } from 'components/TextInput';

type PaperRadioButtonProps = React.ComponentProps<typeof PaperRadioButton>;

export type RadioButtonProps = BaseInputProps &
  PaperRadioButtonProps & {
    label?: string;
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
  const helperTextType = error ? 'error' : 'info';
  const helperText = getHelperText(error && meta.error);

  return (
    <View {...ContainerProps}>
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
