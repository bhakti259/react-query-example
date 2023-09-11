import { RadioGroupProps, StackProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { BaseProps } from '../form-control';
export declare type RadioGroupControlProps = BaseProps & {
    radioGroupProps?: RadioGroupProps;
    stackProps?: StackProps;
    children: ReactNode;
};
export declare const RadioGroupControl: FC<RadioGroupControlProps>;
export default RadioGroupControl;
