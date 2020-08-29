import { useMemo } from 'react';
import { useAsync } from 'react-use';
import { useFormState } from 'react-final-form';

export interface DependentFieldProps {
  onChange: any;
  children?: any;
}

export const DependentField: React.FC<DependentFieldProps> = ({
  onChange,
  children,
}) => {
  const values = useFormState({ subscription: { values: true } });
  const allValues = useAsync(() => onChange(values), [values]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => children(allValues), [values]);
};

DependentField.displayName = 'DependentField';
