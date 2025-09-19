import React from 'react';
import { FlipSetting, PageFlip } from 'page-flip';
import { IEventProps } from './settings';
interface HTMLFlipBookProps extends Partial<FlipSetting>, IEventProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    renderOnlyPageLengthChange?: boolean;
}
export type HTMLFlipBookHandle = {
    pageFlip: () => PageFlip | undefined;
};
export declare const HTMLFlipBook: React.MemoExoticComponent<React.ForwardRefExoticComponent<HTMLFlipBookProps & React.RefAttributes<HTMLFlipBookHandle>>>;
export {};
