import { MediaQueryAllQueryable, MediaQueryMatchers } from './types';
declare type MediaQuerySettings = Partial<MediaQueryAllQueryable & {
    query?: string;
}>;
declare const useMediaQuery: (settings: MediaQuerySettings, device?: MediaQueryMatchers | undefined, onChange?: ((_: boolean) => void) | undefined) => boolean;
export default useMediaQuery;
