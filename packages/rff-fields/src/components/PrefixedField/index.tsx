import React, { useContext } from 'react';
import { Field, FieldProps } from 'react-final-form';

const FieldPrefixContext = React.createContext<string>(null);

export type FieldPrefixProviderProps = {
  /**
   * Property that represents the prefix to use for the fields
   */
  prefix: string;
};

export const FieldPrefixProvider: React.FC<FieldPrefixProviderProps> = ({
  prefix,
  children,
}) => (
  <FieldPrefixContext.Provider value={prefix}>
    {children}
  </FieldPrefixContext.Provider>
);

FieldPrefixProvider.displayName = 'FieldPrefixProvider';

export const PrefixedField: React.FunctionComponent<FieldProps<any, any>> = ({
  name,
  ...props
}) => {
  const prefix = useContext(FieldPrefixContext);

  return <Field name={`${prefix}.${name}`} {...props} />;
};

PrefixedField.displayName = 'PrefixedField';
