import React from 'react';
import { DatePicker } from '@material-ui/pickers';

import { useHasError } from '../../hooks/useHasError';

export const Datepicker = ({
  label,
  input: { name, onChange, value, ...restInput },
  meta,
  helperText,
  disabled,
  inputProps,
  formatDate,
  initialFocusedDate,
  ...rest
}) => {
  const isError = useHasError(meta);

  return (
    <DatePicker
      {...rest}
      name={name}
      label={label}
      error={isError}
      helperText={isError}
      format={formatDate}
      onChange={onChange}
      disabled={disabled}
      inputProps={restInput}
      value={value || initialFocusedDate}
    />
  );
};

Datepicker.displayName = 'Datepicker';
