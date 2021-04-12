import React, { FC } from 'react';
import { FieldProps } from 'react-final-form';
import {
  Radio,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  RadioGroupProps as MuiRadioGroupProps
} from '@material-ui/core';

import { useHasError } from '../../hooks/useHasError';

export type RadioGroupProps = Partial<MuiRadioGroupProps> &
  Partial<FieldProps<any, any>>;

export const RadioGroup: FC<RadioGroupProps> = ({
  name,
  label,
  input,
  meta,
  helperText,
  FormLabelProps,
  FormHelperTextProps,
  options = [],
}) => {
  const isError = useHasError(meta);

  return (
    <FormControl component="fieldset">
      {!!label && <FormLabel {...FormLabelProps}>{label}</FormLabel>}
      <MuiRadioGroup
        {...input}
        aria-label={name}
        name={name}
      >
        {Array.isArray(options) &&
          options.length > 0 &&
          options.map((opt, idx) => (
            <FormControlLabel
              key={`radiogroup_option_${idx}`}
              value={opt.value}
              control={<Radio />}
              label={opt.label}
              disabled={opt.disabled}
            />
          ))}
      </MuiRadioGroup>
      {isError && (
        <FormHelperText {...FormHelperTextProps} error={isError}>
          {helperText || meta.error || meta.submitError}
        </FormHelperText>
      )}
    </FormControl>
  );
};

RadioGroup.displayName = 'RadioGroup';
