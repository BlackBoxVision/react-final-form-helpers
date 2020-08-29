import React from 'react';
import { View, ViewProps } from 'react-native';
import { HelperText } from 'react-native-paper';

type HelperTextProps = React.ComponentProps<typeof HelperText>;

export type ContainerProps = ViewProps & {
  /**
   * Property that represent values for the HelperText
   */
  HelperTextProps?: HelperTextProps;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  HelperTextProps,
  ...ContainerProps
}) => (
  <View {...ContainerProps}>
    {children}
    {!!HelperTextProps.visible && <HelperText {...HelperTextProps} />}
  </View>
);

Container.displayName = 'Container';
