import { useMemo } from 'react';
import { FieldMetaState } from 'react-final-form';

export const useHasError = (meta: FieldMetaState<any>): boolean =>
  useMemo(
    () =>
      ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
      meta.touched,
    [meta]
  );
