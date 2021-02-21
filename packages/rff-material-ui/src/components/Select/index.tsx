import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
} from '@material-ui/core';

import { useHasError } from '../../hooks/useHasError';

export type SelectProps = Partial<MuiSelectProps> &
  FieldRenderProps<any> & {
    variant: 'filled' | 'standard' | 'outlined' | any;
  };

export const Select: FC<SelectProps> = ({
  name,
  label,
  variant,
  input,
  meta,
  helperText,
  options,
  ...rest
}) => {
  const isError = useHasError(meta);

  return (
    <FormControl>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <MuiSelect
        {...rest}
        id={name}
        name={name}
        error={isError}
        label={label}
        variant={variant}
        onChange={input.onChange}
      >
        {Array.isArray(options) &&
          options.length > 0 &&
          options.map((opt) => (
            <MenuItem value={opt.value}>{opt.label}</MenuItem>
          ))}
      </MuiSelect>
      {isError && (
        <FormHelperText error={isError}>
          {helperText || meta.error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

Select.displayName = 'Select';
