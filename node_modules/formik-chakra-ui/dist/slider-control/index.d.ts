import { SliderProps, SliderThumbProps, SliderTrackProps } from '@chakra-ui/react';
import { FC } from 'react';
import { BaseProps } from '../form-control';
export declare type SliderControlProps = BaseProps & {
    sliderProps?: SliderProps;
    sliderTrackProps?: SliderTrackProps;
    sliderThumbProps?: SliderThumbProps;
};
export declare const SliderControl: FC<SliderControlProps>;
export default SliderControl;
