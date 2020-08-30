import React from 'react';
import { View } from 'react-native';
import { Text as PaperText, Switch as PaperSwitch } from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

import { BaseInputProps } from '../TextInput';
import { Container } from '../Container';

type PaperSwitchProps = React.ComponentProps<typeof PaperSwitch>;

export type SwitchProps = BaseInputProps &
  PaperSwitchProps & {
    /**
     * Property that represents the label to show
     */
    label?: string;
    /**
     * Property that represents the position of the label
     */
    labelPosition?: 'left' | 'right';
  };

export const Switch: React.FC<SwitchProps> = ({
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
