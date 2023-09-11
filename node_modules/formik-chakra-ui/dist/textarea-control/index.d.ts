import { TextareaProps } from '@chakra-ui/react';
import { FC } from 'react';
import { BaseProps } from '../form-control';
export declare type TextareaControlProps = BaseProps & {
    textareaProps?: TextareaProps;
};
export declare const TextareaControl: FC<TextareaControlProps>;
export default TextareaControl;
