import { SelectProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { BaseProps } from '../form-control';
export declare type SelectControlProps = BaseProps & {
    selectProps?: SelectProps;
    children: React.ReactNode;
};
export declare const SelectControl: FC<SelectControlProps>;
export default SelectControl;
