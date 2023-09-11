import { SwitchProps } from '@chakra-ui/react';
import { FC } from 'react';
import { BaseProps } from '../form-control';
export declare type SwitchControlProps = BaseProps & {
    switchProps?: SwitchProps;
};
export declare const SwitchControl: FC<SwitchControlProps>;
export default SwitchControl;
