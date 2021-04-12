import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
  InputLabelProps,
  FormControlProps,
} from '@material-ui/core';

import { useHasError } from '../../hooks/useHasError';
import { useStyles } from './styles';

export type SelectProps = Partial<MuiSelectProps> &
  FieldRenderProps<any> & {
    variant: 'filled' | 'standard' | 'outlined' | any;
    InputLabelProps?: Partial<InputLabelProps>;
    FormControlProps?: Partial<FormControlProps>;
  };

export const Select: FC<SelectProps> = ({
  name,
  label,
  input,
  meta,
  helperText,
  options,
  InputLabelProps,
  FormControlProps,
  ...SelectProps
}) => {
  const styles = useStyles();
  const isError = useHasError(meta);

  return (
    <FormControl {...FormControlProps} className={styles.formControl}>
      <InputLabel {...InputLabelProps} htmlFor={name}>
        {label}
      </InputLabel>
      <MuiSelect
        {...input}
        {...SelectProps}
        id={name}
        name={name}
        error={isError}
        label={label}
      >
        {Array.isArray(options) &&
          options.length > 0 &&
          options.map((opt, idx) => (
            <MenuItem key={`select_option_${idx}`} value={opt.value}>{opt.label}</MenuItem>
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

Select.defaultProps = {
  FormControlProps: {
    variant: 'standard',
  },
};
