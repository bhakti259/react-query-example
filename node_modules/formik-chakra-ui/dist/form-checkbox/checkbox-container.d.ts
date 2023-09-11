import { StackProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { BaseProps } from '../form-control';
export declare type CheckboxContainerProps = BaseProps & {
    stackProps?: StackProps;
    children: ReactNode;
};
export declare const CheckboxContainer: FC<CheckboxContainerProps>;
export default CheckboxContainer;
