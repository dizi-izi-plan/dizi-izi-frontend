import React, { ComponentType } from 'react';
import { Control, Controller } from 'react-hook-form';
import { FormValues } from './LoginForm';
import { InputPasswordProps } from './InputPassword/InputPassword';

type ControllerWrapperProps = InputPasswordProps & {
  fieldComponent: ComponentType<any>;
  name: keyof FormValues;
  control: Control<FormValues>;
};

export const ControllerWrapper = ({
  fieldComponent: FieldComponent,
  name,
  control,
  ...props
}: ControllerWrapperProps) => {
  return (
    <Controller
      render={({ field }) => <FieldComponent {...field} {...props} />}
      name={name}
      control={control}
    />
  );
};
