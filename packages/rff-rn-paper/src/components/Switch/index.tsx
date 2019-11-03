import React from 'react';

import { useHasError } from '../../hooks/useHasError';

export interface SwitchProps {
  input: any;
  meta: any;
}

export const Switch: React.FunctionComponent<SwitchProps> = ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...props
}) => {
  const hasError = useHasError(meta);
  return null;
};

Switch.displayName = 'Switch';
