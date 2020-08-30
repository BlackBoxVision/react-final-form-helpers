import React, { useContext } from 'react';
import { Field, FieldProps } from 'react-final-form';

const PrefixedFieldContext = React.createContext<string>(null);

export type PrefixedFieldProviderProps = {
  /**
   * Property that represents the prefix to use for the fields
   */
  prefix: string;
};

export const PrefixedFieldProvider: React.FC<PrefixedFieldProviderProps> = ({
  prefix,
  children,
}) => (
  <PrefixedFieldContext.Provider value={prefix}>
    {children}
  </PrefixedFieldContext.Provider>
);

PrefixedFieldProvider.displayName = 'FieldPrefixProvider';

export const PrefixedField: React.FunctionComponent<FieldProps<any, any>> = ({
  name,
  ...props
}) => {
  const prefix = useContext(PrefixedFieldContext);

  return <Field name={`${prefix}.${name}`} {...props} />;
};

PrefixedField.displayName = 'PrefixedField';
