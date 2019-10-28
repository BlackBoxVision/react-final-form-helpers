import React, { useState, useMemo, useCallback } from 'react';
import { Form, FormProps } from 'react-final-form';

/** Description of WizardFormRenderProps interface */
export interface WizardFormRenderProps {
  /** Object containing all values captured by the form */
  values: any;
  /** Current active step in the wizard form */
  activeStep: number;
  /** Total steps in the wizard form */
  totalSteps: number;
  /** Flag to indicate that no field has been modified */
  pristine: boolean;
  /** Flag to indicate that the form is runnig submission */
  submitting: boolean;
  /** Flag to indicate the form has errors on submit action */
  hasSubmitErrors: boolean;
  /** Function  to move to the previous step in the wizard form*/
  onBack?: (values?: any) => void;
  /** Function to move to the next step in the wizard form */
  onNext?: (values?: any) => void;
}

/** Description of WizardFormProps interface */
export interface WizardFormProps extends FormProps {
  /** The child components accepted for this component */
  children: any;
  /** Default values for Final Form */
  initialValues: any;
  /** Default wizard page */
  initialPage: number;
  /** Function that triggers submit */
  onSubmit: (values: any) => any;
  /** Function used to render a title component */
  renderTitle: (props: WizardFormRenderProps) => React.ReactNode;
  /** Function used to render a stepper component */
  renderStepper: (props: WizardFormRenderProps) => React.ReactNode;
  /** Function used to render a groups of buttons component */
  renderButtons: (props: WizardFormRenderProps) => React.ReactNode;
}

export const WizardForm: React.FunctionComponent<WizardFormProps> = ({
  children,
  onSubmit,
  renderTitle,
  renderStepper,
  renderButtons,
  initialPage,
  initialValues,
  ...finalFormProps
}) => {
  const [state, setState] = useState({
    values: initialValues,
    page: initialPage,
  });

  const activePage = useMemo(
    () => React.Children.toArray(children)[state.page],
    [state.page, children],
  );

  const isLastPage = useMemo(
    () => state.page === React.Children.count(children) - 1,
    [state.page, children],
  );

  const onNext = useCallback(
    values =>
      setState({
        page: Math.min(state.page + 1, children.length - 1),
        values,
      }),
    [state.page, children],
  );

  const onBack = useCallback(
    () =>
      setState({
        page: Math.max(state.page - 1, 0),
        values: state.values,
      }),
    [state],
  );

  const validate = useCallback(
    values =>
      activePage.props.validate ? activePage.props.validate(values) : {},
    [activePage],
  );

  const handleSubmit = useCallback(
    values => (isLastPage ? onSubmit(values) : onNext(values)),
    [isLastPage, onSubmit, onNext],
  );

  return (
    <Form
      {...finalFormProps}
      validate={validate}
      onSubmit={handleSubmit}
      initialValues={state.values}
    >
      {({ handleSubmit, submitting, values, pristine, hasSubmitErrors }) => (
        <form onSubmit={handleSubmit}>
          {renderTitle &&
            renderTitle({
              values,
              pristine,
              submitting,
              hasSubmitErrors,
              activeStep: state.page,
              totalSteps: React.Children.count(children),
            })}
          {renderStepper &&
            renderStepper({
              values,
              pristine,
              submitting,
              hasSubmitErrors,
              activeStep: state.page,
              totalSteps: React.Children.count(children),
            })}
          {activePage}
          {renderButtons &&
            renderButtons({
              values,
              onBack,
              onNext,
              pristine,
              submitting,
              hasSubmitErrors,
              activeStep: state.page,
              totalSteps: React.Children.count(children),
            })}
        </form>
      )}
    </Form>
  );
};

WizardForm.displayName = 'WizardForm';
WizardForm.defaultProps = {
  initialPage: 0,
  initialValues: {},
};
