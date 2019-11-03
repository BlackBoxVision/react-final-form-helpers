import { useMemo } from 'react';
import { useFormState } from 'react-final-form';
import { useAsync } from 'react-use';

export interface DependentFieldProps {
  onChange: (values?: any) => Promise<void>;
  children?: any;
}

export const DependentField: React.FunctionComponent<DependentFieldProps> = ({
  onChange,
  children,
}) => {
  const values = useFormState({ subscription: { values: true } });
  const allValues = useAsync(() => onChange(values), [values]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => children(allValues), [values]);
};

DependentField.displayName = 'DependentField';
