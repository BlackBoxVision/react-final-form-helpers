import React from 'react';
import { ValidationErrors } from 'final-form';

export interface WizardPageProps {
  /** The child components accepted for this component */
  children?: any;
  /** Function used to validate the values in the current step */
  validate?: (
    values: any,
  ) => ValidationErrors | Promise<ValidationErrors> | undefined;
}

export const WizardPage: React.FC<WizardPageProps> = ({ children }) => children;

WizardPage.displayName = 'WizardPage';
