import React from 'react';
import { View } from 'react-native';
import {
  Text as RNText,
  Switch as RNSwitch,
  HelperText as RNHelperText,
} from 'react-native-paper';

import { useHasError } from '../../hooks/useHasError';

export interface SwitchProps {
  input?: any;
  meta?: any;
  style?: any;
  color?: string;
  label?: string;
  disabled?: boolean;
  ContainerProps?: any;
  LabelProps?: any;
  HelperTextProps?: any;
  uncheckedColor?: string;
  InnerContainerProps?: any;
  labelPosition?: 'left' | 'right';
  getHelperText?: (errorKeyOrText?: string) => string;
}

export const Switch: React.FunctionComponent<SwitchProps> = ({
  input: { name, onChange, value, ...InputProps },
  meta,
  label,
  style,
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
        {labelPosition === 'left' && <RNText {...LabelProps}>{label}</RNText>}
        <RNSwitch
          {...InputProps}
          {...SwitchProps}
          style={style}
          onPress={() => onChange(!value)}
          status={value ? 'checked' : 'unchecked'}
        />
        {labelPosition === 'right' && <RNText {...LabelProps}>{label}</RNText>}
      </View>
      <RNHelperText
        {...HelperTextProps}
        type={helperTextType}
        visible={!!helperText}
      >
        {helperText}
      </RNHelperText>
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
