import React from 'react';

import { useHasError } from '../../hooks/useHasError';

export interface RadioButtonGroupProps {
  input: any;
  meta: any;
}

export const RadioButtonGroup: React.FunctionComponent<
  RadioButtonGroupProps
> = ({ input: { name, onChange, value, ...restInput }, meta, ...props }) => {
  const hasError = useHasError(meta);
  return null;
};

RadioButtonGroup.displayName = 'RadioButtonGroup';
