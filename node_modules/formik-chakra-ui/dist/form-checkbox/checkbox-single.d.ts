import { CheckboxProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { BaseProps } from '../form-control';
export declare type CheckboxSingleProps = BaseProps & {
    checkBoxProps?: CheckboxProps;
    children?: React.ReactNode;
};
export declare const CheckboxSingleControl: FC<CheckboxSingleProps>;
