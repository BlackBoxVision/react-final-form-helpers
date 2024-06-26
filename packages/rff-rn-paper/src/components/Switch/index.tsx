import React from 'react';
import { View } from 'react-native';
import { Text as PaperText, Switch as PaperSwitch } from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

import { BaseInputProps } from '../TextInput';
import { Container } from '../Container';

export type SwitchProps = BaseInputProps &
  React.ComponentProps<typeof PaperSwitch> & {
    /**
     * Property that represents the label to show
     */
    label?: string;
    /**
     * Property that represents the position of the label
     */
    labelPosition?: 'left' | 'right';
  };

export let Switch: React.FC<SwitchProps> = ({
  showErrorOnMount,
  input: { onChange, value },
  meta,
  label,
  labelPosition,
  getHelperText,
  ContainerProps,
  InnerContainerProps,
  LabelProps,
  HelperTextProps,
  ...SwitchProps
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
      <View {...InnerContainerProps}>
        {labelPosition === 'left' && (
          <PaperText {...LabelProps}>{label}</PaperText>
        )}
        <PaperSwitch
          {...SwitchProps}
          value={value}
          onValueChange={() => onChange(!value)}
        />
        {labelPosition === 'right' && (
          <PaperText {...LabelProps}>{label}</PaperText>
        )}
      </View>
    </Container>
  );
};

Switch.displayName = 'Switch';
Switch.defaultProps = {
  showErrorOnMount: false,
  getHelperText: str => str,
  style: {},
  labelPosition: 'right',
  InnerContainerProps: {},
  LabelProps: {},
  ContainerProps: {},
  HelperTextProps: {
    padding: 'normal',
  },
};
