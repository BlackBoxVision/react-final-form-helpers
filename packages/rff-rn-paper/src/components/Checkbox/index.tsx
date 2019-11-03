import React from 'react';

import { useHasError } from '../../hooks/useHasError';

export interface CheckboxProps {
  input: any;
  meta: any;
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...props
}) => {
  const hasError = useHasError(meta);
  return null;
};

Checkbox.displayName = 'Checkbox';
