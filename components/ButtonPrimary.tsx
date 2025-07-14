import React from 'react';
import { Button, ButtonProps } from 'react-native';
import { ButtonPrimaryProps } from '../types/camera';

export default function ButtonPrimary({ buttonProps, title }: ButtonPrimaryProps) {
  return <Button {...buttonProps} title={title} />;
}
