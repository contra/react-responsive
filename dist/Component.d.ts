import * as React from 'react';
import { MediaQueryAllQueryable, MediaQueryMatchers } from './types';
interface MediaQueryProps extends MediaQueryAllQueryable {
    component?: string | React.FC<any> | React.ClassType<any, any, any> | React.ComponentClass<any>;
    query?: string;
    style?: React.CSSProperties;
    className?: string;
    device?: MediaQueryMatchers;
    values?: Partial<MediaQueryMatchers>;
    onBeforeChange?: (_matches: boolean) => void;
    onChange?: (_matches: boolean) => void;
}
declare const MediaQuery: React.FC<MediaQueryProps>;
export default MediaQuery;
