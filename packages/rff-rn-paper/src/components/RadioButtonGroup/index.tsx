import React from 'react';
import { View } from 'react-native';
import {
  Text as PaperText,
  RadioButton as PaperRadioButton,
} from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

import { BaseInputProps } from '../TextInput';
import { Container } from '../Container';

export type RadioButtonGroupProps = BaseInputProps &
  React.ComponentProps<typeof PaperRadioButton.Group> & {
    /**
     * Property that represents the label to show
     */
    label?: string;
    /**
     * Property that represents the position of the label
     */
    labelPosition?: 'left' | 'right';
    /**
     * Property that represents the props related to the RadioButton
     */
    RadioButtonProps?: React.ComponentProps<typeof PaperRadioButton>;
    /**
     * Property that represents the options to render the RadioButtonGroup
     */
    options?: Array<{ value?: any; label: string }>;
  };

export let RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  showErrorOnMount,
  input: { onChange, value },
  meta,
  label,
  labelPosition,
  options,
  getHelperText,
  ContainerProps,
  InnerContainerProps,
  RadioButtonProps,
  InnerLabelProps,
  LabelProps,
  HelperTextProps,
  ...RadioButtonGroupProps
}) => {
  let error = useHasError(meta, showErrorOnMount);
  let helperText = getHelperText(error && meta.error);

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
      <PaperText {...LabelProps}>{label}</PaperText>
      <PaperRadioButton.Group
        {...RadioButtonGroupProps}
        onValueChange={() => onChange(value)}
        value={value}
      >
        {options &&
          options.map(({ label, value }) => (
            <View {...InnerContainerProps}>
              {labelPosition === 'left' && (
                <PaperText {...InnerLabelProps}>{label}</PaperText>
              )}
              <PaperRadioButton {...RadioButtonProps} value={value} />
              {labelPosition === 'right' && (
                <PaperText {...InnerLabelProps}>{label}</PaperText>
              )}
            </View>
          ))}
      </PaperRadioButton.Group>
    </Container>
  );
};

RadioButtonGroup.displayName = 'RadioButtonGroup';
RadioButtonGroup.defaultProps = {
  showErrorOnMount: false,
  getHelperText: str => str,
  labelPosition: 'right',
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
