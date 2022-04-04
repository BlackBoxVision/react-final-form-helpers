import { useMemo } from "react";
import { FieldMetaState } from "react-final-form";

export const useHasError = (
  meta: FieldMetaState<any>,
  showErrorOnMount: boolean = false
): boolean => {
  let { submitError, dirtySinceLastSubmit, error, touched, modified } = meta;

  return useMemo(() => {
    let hasError = !!((submitError && !dirtySinceLastSubmit) || error);
    let isTouched = touched || modified;

    if (showErrorOnMount) {
      return hasError;
    }

    return hasError && isTouched;
  }, [
    error,
    touched,
    modified,
    submitError,
    showErrorOnMount,
    dirtySinceLastSubmit,
  ]);
};
