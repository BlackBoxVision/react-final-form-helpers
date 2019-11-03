import { useMemo } from 'react';

export const useHasError = (meta: any): boolean => {
  return useMemo(
    () =>
      ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
      meta.touched,
    [meta],
  );
};
