import { PinInputProps, StackProps } from '@chakra-ui/react';
import { FC } from 'react';
import { BaseProps } from '../form-control';
export declare type PinInputControlProps = BaseProps & {
    pinAmount: number;
    stackProps?: StackProps;
    pinInputProps?: Omit<PinInputProps, 'children'>;
};
export declare const PinInputControl: FC<PinInputControlProps>;
export default PinInputControl;
