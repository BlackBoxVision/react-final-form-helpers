import React, { useContext } from 'react';
import { Field, FieldProps } from 'react-final-form';

export interface FieldPrefixProps {
  prefix: string;
  children: any;
}

const FieldPrefixContext = React.createContext<string>(null);

export const FieldPrefix: React.FunctionComponent<FieldPrefixProps> = ({
  prefix,
  children,
}) => (
  <FieldPrefixContext.Provider value={prefix}>
    {children}
  </FieldPrefixContext.Provider>
);

FieldPrefix.displayName = 'FieldPrefix';

export interface PrefixedFieldProps extends FieldProps<any, any> {
  name: string;
}

export const PrefixedField: React.FunctionComponent<PrefixedFieldProps> = ({
  name,
  ...props
}) => {
  const prefix = useContext(FieldPrefixContext);

  return <Field name={`${prefix}.${name}`} {...props} />;
};

PrefixedField.displayName = 'PrefixedField';
