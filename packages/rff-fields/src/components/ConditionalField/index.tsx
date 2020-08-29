import React from 'react';
import { Field } from 'react-final-form';

export interface ConditionalFieldProps {
  when: string;
  is: any;
}

export const ConditionalField: React.FC<ConditionalFieldProps> = ({
  when,
  is,
  children,
}) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

ConditionalField.displayName = 'ConditionalField';
