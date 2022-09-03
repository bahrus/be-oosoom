import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';
import { 
    BeInterseciontalEndUserProps, 
    BeIntersectionalVirtualProps,
    BeIntersectionalActions,
} from 'be-intersectional/types';

export interface BeOosoomEndUserProps extends BeInterseciontalEndUserProps{}

export interface BeOosoomVirtualProps extends BeIntersectionalVirtualProps{
    isNotIntersecting: boolean;
    isNotIntersectingEcho: boolean;
}

export type Proxy = Element & BeOosoomVirtualProps;

export interface BeOosoomProxy extends BeOosoomActions, BeOosoomVirtualProps{
    proxy: Proxy;
}

export type BOP = BeOosoomProxy;

export interface BeOosoomActions extends BeIntersectionalActions{
    onNotIntersectingEcho(bop: BOP): void;
    onNotIntersecting(bop: BOP): void;
    onIntersectingChange(bop: BOP): void;
}