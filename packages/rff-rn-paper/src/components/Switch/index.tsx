import React from 'react';
import { View as RNView } from 'react-native';
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
  input: { onChange, value },
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
    <RNView {...ContainerProps}>
      <RNView {...InnerContainerProps}>
        {labelPosition === 'left' && <RNText {...LabelProps}>{label}</RNText>}
        <RNSwitch
          {...SwitchProps}
          style={style}
          value={value}
          onValueChange={() => onChange(!value)}
        />
        {labelPosition === 'right' && <RNText {...LabelProps}>{label}</RNText>}
      </RNView>
      {!!helperText && (
        <RNHelperText
          {...HelperTextProps}
          type={helperTextType}
          visible={!!helperText}
        >
          {helperText}
        </RNHelperText>
      )}
    </RNView>
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
