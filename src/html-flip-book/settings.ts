export type PageState = 'user_fold' | 'fold_corner' | 'flipping' | 'read';
export type PageOrientation = 'portrait' | 'landscape';
export interface IBookState {
    page: number;
    mode: PageOrientation;
}
export interface IEventProps {
    onFlip?: (flipEvent: any) => void;
    onChangeOrientation?: (flipEvent: any) => void;
    onChangeState?: (flipEvent: any) => void;
    onInit?: (flipEvent: any) => void;
    onUpdate?: (flipEvent: any) => void;
}
