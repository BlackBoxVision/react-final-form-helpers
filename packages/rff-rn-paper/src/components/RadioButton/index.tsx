import React from 'react';

import { useHasError } from '../../hooks/useHasError';

export interface RadioButtonProps {
  input: any;
  meta: any;
}

export const RadioButton: React.FunctionComponent<RadioButtonProps> = ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...props
}) => {
  const hasError = useHasError(meta);
  return null;
};

RadioButton.displayName = 'RadioButton';
