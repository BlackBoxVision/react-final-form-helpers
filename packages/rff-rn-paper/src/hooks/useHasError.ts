import { useMemo } from 'react';
import { FieldMetaState } from 'react-final-form';

export const useHasError = (meta: FieldMetaState<any>): boolean => {
  let { submitError, dirtySinceLastSubmit, error, touched, modified } = meta;

  return useMemo(
    () =>
      !!(((submitError && !dirtySinceLastSubmit) || error) && (touched || modified)),
    [submitError, dirtySinceLastSubmit, error, touched, modified],
  );
};
