import { NumberInputProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { BaseProps } from '../form-control';
export declare type NumberInputControlProps = BaseProps & {
    numberInputProps?: NumberInputProps;
    showStepper?: boolean;
    children?: React.ReactNode;
};
export declare const NumberInputControl: FC<NumberInputControlProps>;
export default NumberInputControl;
