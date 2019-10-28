import React from 'react';
import { Field, FormSpy } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';

export interface WhenFieldChangesProps {
  field: string;
  becomes: any;
  set: string;
  to: any;
}

export const WhenFieldChanges: React.FunctionComponent<
  WhenFieldChangesProps
> = ({ field, becomes, set, to }) => (
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
