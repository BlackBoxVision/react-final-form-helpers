import React, { useState, useMemo, useCallback, ReactElement } from 'react';
import { Form, FormProps, FormRenderProps } from 'react-final-form';
import { SubmissionErrors } from 'final-form';

export interface WizardFormRenderProps extends FormRenderProps {
  /** Current active step in the wizard form */
  activeStep: number;
  /** Total steps in the wizard form */
  totalSteps: number;
  /** Flag to indicate that we're on the last page */
  isLastPage: boolean;
  /** Function  to move to the previous step in the wizard form*/
  onBack?: (
    values: any,
  ) =>
    | SubmissionErrors
    | Promise<SubmissionErrors | undefined>
    | undefined
    | void;
  /** Function to move to the next step in the wizard form */
  onNext?: (
    values: any,
  ) =>
    | SubmissionErrors
    | Promise<SubmissionErrors | undefined>
    | undefined
    | void;
}

export interface WizardFormProps extends FormProps {
  /** Default wizard step */
  initialStep: number;
  /** Function used to render a title component */
  render: (props: WizardFormRenderProps) => React.ReactNode;
}

export const WizardForm: React.FC<WizardFormProps> = ({
  render,
  children,
  onSubmit,
  initialStep,
  initialValues,
  ...formProps
}) => {
  const [activeStep, setActiveStep] = useState(initialStep);
  const [values, setValues] = useState(initialValues);

  const totalSteps = useMemo(() => React.Children.count(children), [children]);

  const activePage: ReactElement = useMemo(
    () => React.Children.toArray(children)[activeStep] as ReactElement,
    [activeStep, children],
  );

  const isLastPage = useMemo(() => activeStep === totalSteps - 1, [
    activeStep,
    totalSteps,
  ]);

  const onNext = useCallback(
    values => {
      setValues(values);
      setActiveStep(
        Math.min(activeStep + 1, React.Children.toArray(children).length - 1),
      );
    },
    [activeStep, children],
  );

  const onBack = useCallback(() => setActiveStep(Math.max(activeStep - 1, 0)), [
    activeStep,
  ]);

  const validate = useCallback(
    values =>
      activePage.props.validate ? activePage.props.validate(values) : {},
    [activePage],
  );

  const handleSubmit = useCallback(
    (values, form, callback) =>
      isLastPage ? onSubmit(values, form, callback) : onNext(values),
    [isLastPage, onSubmit, onNext],
  );

  return (
    <Form
      {...formProps}
      validate={validate}
      initialValues={values}
      onSubmit={handleSubmit}
    >
      {formRenderProps =>
        render &&
        render({
          ...formRenderProps,
          onBack,
          onNext,
          isLastPage,
          activeStep,
          totalSteps,
        })
      }
    </Form>
  );
};

WizardForm.displayName = 'WizardForm';
WizardForm.defaultProps = {
  initialStep: 0,
  initialValues: null,
};
