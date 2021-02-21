import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';

import { useHasError } from '../../hooks/useHasError';

export const Datepicker = ({
  label,
  input: { name, onChange, value, ...restInput},
  meta,
  helperText,
  disabled,
  inputProps,
  ...rest
}) => {
  const isError = useHasError(meta);

  return (
    <KeyboardDatePicker
     {...rest}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      disabled={disabled}
      inputProps={restInput}
    />
  );
};

Datepicker.displayName = 'Datepicker';
