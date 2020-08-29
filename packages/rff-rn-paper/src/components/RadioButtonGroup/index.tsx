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
type PaperRadioButtonGroupProps = React.ComponentProps<
  typeof PaperRadioButton.Group
>;

export type RadioButtonGroupProps = BaseInputProps &
  PaperRadioButtonGroupProps & {
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
    RadioButtonProps?: PaperRadioButtonProps;
    /**
     * Property that represents the options to render the RadioButtonGroup
     */
    options?: Array<{ value?: any; label: string }>;
  };

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
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
  const error = useHasError(meta);
  const helperTextType = error ? 'error' : 'info';
  const helperText = getHelperText(error && meta.error);

  return (
    <View {...ContainerProps}>
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

RadioButtonGroup.displayName = 'RadioButtonGroup';
RadioButtonGroup.defaultProps = {
  getHelperText: str => str,
  labelPosition: 'left',
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
