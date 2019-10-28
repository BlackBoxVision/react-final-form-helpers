import React, { useEffect } from 'react';
import { useFormState } from 'react-final-form';

import { Storage } from '../../helpers';

/** Description of the interface FinalFormPersistProps */
export interface FinalFormPersistProps {
  /** Flag to determine if use session-storage as persistence layer */
  isSessionStorage?: boolean;
  /** Name of the form to save to the storage */
  formName: string;
}

export const FinalFormPersist: React.FunctionComponent<
  FinalFormPersistProps
> = ({ isSessionStorage, formName }) => {
  const { values } = useFormState({ subscription: { values: true } });

  useEffect(() => {
    Storage.setItem(formName, values, { isSessionStorage });
  }, [formName, isSessionStorage, values]);

  return null;
};

FinalFormPersist.displayName = 'FinalFormPersist';
FinalFormPersist.defaultProps = {
  isSessionStorage: false,
};
