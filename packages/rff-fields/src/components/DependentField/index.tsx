import { useMemo } from 'react';
import { useAsync } from 'react-use';
import { useFormState } from 'react-final-form';

export type DependentFieldProps = {
  /**
   * Property that represents a function that let you track all form values change and get newer values
   */
  onChange: (values: any) => any;
  /**
   * Property that represents a children as a function that takes all form values and return a valid React Element
   */
  children?: (values: any) => React.ReactElement<any, any> | null;
};

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
