import { InputProps } from '@chakra-ui/react';
import { FC } from 'react';
import { BaseProps } from '../form-control';
export declare type InputControlProps = BaseProps & {
    inputProps?: InputProps;
};
export declare const InputControl: FC<InputControlProps>;
export default InputControl;
