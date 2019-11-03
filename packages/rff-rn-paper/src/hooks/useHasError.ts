import { useMemo } from 'react';

export const useHasError = meta => {
  return useMemo(
    () =>
      ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
      meta.touched,
    [meta],
  );
};
