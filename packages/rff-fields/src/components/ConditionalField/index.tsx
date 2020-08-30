import React from 'react';
import { Field } from 'react-final-form';

export type ConditionalFieldProps = {
  /**
   * Property that represents the name of the field to watch
   */
  when: string;
  /**
   * Property that represents the value needed to reach the condition
   */
  is: any;
};

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
