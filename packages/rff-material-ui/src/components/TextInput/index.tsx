import React, { FC } from 'react';
import { FieldProps } from 'react-final-form';
import { TextField, TextFieldProps } from '@material-ui/core';

import { useHasError } from '../../hooks/useHasError';

export type TextInputProps = Partial<TextFieldProps> &
  Partial<FieldProps<any, any>> & {
    variant: 'filled' | 'standard' | 'outlined' | any;
  };

export const TextInput: FC<TextInputProps> = ({
  name,
  label,
  variant,
  input,
  meta,
  helperText,
  ...rest
}) => {
  const isError = useHasError(meta);

  return (
    <TextField
      {...rest}
      error={isError}
      label={label}
      variant={variant}
      name={input.name}
      value={input.value}
      onChange={input.onChange}
      helperText={isError && (helperText ? helperText : meta.error)}
    />
  );
};

TextInput.displayName = 'TextInput';
