import React, { FC } from 'react';
import { FieldProps } from 'react-final-form';
import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormHelperText,
} from '@material-ui/core';

import { useHasError } from '../../hooks/useHasError';

export type CheckboxProps = Partial<MuiCheckboxProps> &
  Partial<FieldProps<any, any>>;

export const Checkbox: FC<CheckboxProps> = ({
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
    <>
      <FormControlLabel
        control={
          <MuiCheckbox
            {...rest}
            {...input}
          />
        }
        label={label}
      />
      {isError && <FormHelperText>{helperText || meta.error}</FormHelperText>}
    </>
  );
};

Checkbox.displayName = 'Checkbox';
