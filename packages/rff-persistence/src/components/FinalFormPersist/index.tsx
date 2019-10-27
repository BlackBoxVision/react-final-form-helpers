import React, { useEffect } from 'react';
import { useFormState } from 'react-final-form';

import { Storage } from '../../helpers';

export interface FinalFormPersistProps {
  isSessionStorage?: boolean;
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
