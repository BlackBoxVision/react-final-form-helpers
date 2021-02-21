import React from 'react';
import {
  Radio,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@material-ui/core';

import { useHasError } from '../../hooks/useHasError';

export const RadioGroup = ({
  name,
  label,
  input,
  meta,
  helperText,
  FormLabelProps,
  FormHelperTextProps,
  options,
}) => {
  const isError = useHasError(meta);

  return (
    <FormControl component="fieldset">
      {!!label && <FormLabel {...FormLabelProps}>{label}</FormLabel>}
      <MuiRadioGroup
        aria-label={name}
        name={name}
        value={input.value}
        onChange={input.onChange}
      >
        {Array.isArray(options) &&
          options.length > 0 &&
          options.map((opt) => (
            <FormControlLabel
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
