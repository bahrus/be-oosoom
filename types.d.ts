import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';

export interface BeOosoomEndUserProps {

}

export interface BeOosoomVirtualProps extends BeOosoomEndUserProps, MinimalProxy{}

export type Proxy = Element & BeOosoomVirtualProps;

export interface BeOosoomProxy extends BeOosoomActions, BeOosoomVirtualProps{
    proxy: Proxy;
}

export type BOP = BeOosoomProxy;

export interface BeOosoomActions{
    
}