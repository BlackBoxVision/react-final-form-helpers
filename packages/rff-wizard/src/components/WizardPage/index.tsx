import React from 'react';

export interface WizardPageProps {
  /** The child components accepted for this component */
  children: any;
  /** Function used to validate the values in the current step */
  validate: (values: any) => boolean;
}

export const WizardPage: React.FunctionComponent<WizardPageProps> = ({
  children,
}) => children;

WizardPage.displayName = 'WizardPage';
