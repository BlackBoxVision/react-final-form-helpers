import React from 'react';
import { Text as PaperText } from 'react-native-paper';
import { Picker } from '@react-native-community/picker';

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

export let Select: React.FC<SelectProps> = ({
  showErrorOnMount,
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
      <Picker
        {...SelectProps}
        selectedValue={value}
        onValueChange={value => onChange(value)}
      >
        {options &&
          options?.map?.(({ label, value }) => (
            <Picker.Item label={label} value={value} />
          ))}
      </Picker>
    </Container>
  );
};

Select.displayName = 'Select';
Select.defaultProps = {
  getHelperText: str => str,
  showErrorOnMount: false,
  style: {},
  options: [],
  LabelProps: {},
  ContainerProps: {},
  HelperTextProps: {
    padding: 'normal',
  },
};
