import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';
import { 
    EndUserProps as BeInterseciontalEndUserProps, 
    VirtualProps as BeIntersectionalVirtualProps,
    Actions as BeIntersectionalActions,
} from 'be-intersectional/types';

export interface BeOosoomEndUserProps extends BeInterseciontalEndUserProps{}

export interface BeOosoomVirtualProps extends BeIntersectionalVirtualProps{}

export type Proxy = Element & BeOosoomVirtualProps;

export interface ProxyProps extends Actions, BeOosoomVirtualProps{
    proxy: Proxy;
}

export type PP = ProxyProps;

export interface Actions extends BeIntersectionalActions{}