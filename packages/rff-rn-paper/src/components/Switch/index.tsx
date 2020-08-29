import React from 'react';
import { View } from 'react-native';
import {
  Text as PaperText,
  Switch as PaperSwitch,
  HelperText as PaperHelperText,
} from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

import { BaseInputProps } from 'components/TextInput';

type PaperSwitchProps = React.ComponentProps<typeof PaperSwitch>;

export type SwitchProps = BaseInputProps &
  PaperSwitchProps & {
    label?: string;
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
  const helperTextType = error ? 'error' : 'info';
  const helperText = getHelperText(error && meta.error);

  return (
    <View {...ContainerProps}>
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

Switch.displayName = 'Switch';
Switch.defaultProps = {
  getHelperText: str => str,
  style: {},
  labelPosition: 'left',
  InnerContainerProps: {},
  LabelProps: {},
  ContainerProps: {},
  HelperTextProps: {
    padding: 'normal',
  },
};
