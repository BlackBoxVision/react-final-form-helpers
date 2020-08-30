import React from 'react';
import { Field, FormSpy } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';

export type WhenFieldChangesProps = {
  /**
   * Property that represents the name of the field to watch
   */
  field: string;
  /**
   * Property that represents the required value for the field we are watching
   */
  becomes: any;
  /**
   * Property that represents the name of the field to change its value
   */
  set: string;
  /**
   * Property that represents the value to set for the field
   */
  to: any;
};

export const WhenFieldChanges: React.FC<WhenFieldChangesProps> = ({
  field,
  becomes,
  set,
  to,
}) => (
  <Field name={set} subscription={{}}>
    {({ input }) => (
      <FormSpy subscription={{}}>
        {() => (
          <OnChange name={field}>
            {value => value === becomes && input.onChange(to)}
          </OnChange>
        )}
      </FormSpy>
    )}
  </Field>
);

WhenFieldChanges.displayName = 'WhenFieldChanges';
