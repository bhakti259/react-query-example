import { BoxProps, ProgressProps } from '@chakra-ui/react';
import { FC } from 'react';
declare type ProgressFn = (numFields: number, numerrors: number) => any;
export declare type PercentCompleteProps = {
    progressProps?: ProgressProps;
    progressFn?: ProgressFn;
} & BoxProps;
export declare const PercentComplete: FC<PercentCompleteProps>;
export default PercentComplete;
