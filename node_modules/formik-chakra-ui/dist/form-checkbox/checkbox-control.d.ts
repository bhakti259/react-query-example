import { CheckboxProps } from '@chakra-ui/react';
import { FC } from 'react';
declare type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
export declare type CheckboxControlProps = Overwrite<CheckboxProps, {
    value: string | number;
}> & {
    name: string;
    label?: string;
};
export declare const CheckboxControl: FC<CheckboxControlProps>;
export default CheckboxControl;
