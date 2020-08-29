import React from 'react';
import { Picker } from 'react-native';
import { Text as PaperText } from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

import { BaseInputProps } from '../TextInput';
import { Container } from '../Container';

export type SelectProps = BaseInputProps & {
  /**
   * Property that represents the label to show
   */
  label?: string;
  /**
   * Property that represents the position of the label
   */
  labelPosition?: 'left' | 'right';
  /**
   * Property that represents the options to render the Select
   */
  options?: Array<{ value?: any; label: string }>;
};

export const Select: React.FC<SelectProps> = ({
  input: { onChange, value },
  meta,
  label,
  options,
  getHelperText,
  ContainerProps,
  LabelProps,
  HelperTextProps,
  ...SelectProps
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
      <PaperText {...LabelProps}>{label}</PaperText>
      <Picker {...SelectProps} selectedValue={value} onValueChange={onChange}>
        {options &&
          options.map(({ label, value }) => (
            <Picker.Item label={label} value={value} />
          ))}
      </Picker>
    </Container>
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
