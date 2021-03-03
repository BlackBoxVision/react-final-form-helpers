import React from 'react';
import { FieldProps } from 'react-final-form';
import {
  DatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@material-ui/pickers';

import { useHasError } from '../../hooks/useHasError';

export type DatePickerProps = Partial<MuiDatePickerProps> &
  Partial<FieldProps<any, any>>;

export const Datepicker: DatePickerProps = ({
  label,
  input: { name, onChange, value, ...restInput },
  meta,
  helperText,
  disabled,
  inputProps,
  margin = 'normal',
  variant = 'inline',
  inputVariant = 'filled',
  formatDate = 'dd/MM/yyyy',
  placeholder = 'dd/mm/yyyy',
  initialFocusedDate = new Date(),
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
      margin={margin as any}
      variant={variant as any}
      placeholder={placeholder}
      inputVariant={inputVariant as any}
      value={value || initialFocusedDate}
    />
  );
};

Datepicker.displayName = 'Datepicker';
