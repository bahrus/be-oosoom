import {register} from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeIntersectional} from 'be-intersectional/be-intersectional.js';
import {BOP, BeOosoomActions, BeOosoomEndUserProps, BeOosoomProxy, BeOosoomVirtualProps, Proxy} from './types';

export class BeOosoom extends BeIntersectional implements BeOosoomActions{
    async onIntersecting(bop: BeOosoomProxy) {
        this.setProps(bop);
    }

    onIntersectingChange({isIntersecting, proxy}: BOP){
        proxy.isNotIntersecting = !isIntersecting;
    }

    onNotIntersectingEcho({isIntersectingEcho, proxy}: BeOosoomProxy): void {
        proxy.isNotIntersectingEcho = !isIntersectingEcho;
    }

    onNotIntersecting(bop: BeOosoomProxy): void {
        this.setProps(bop);
    }

    setProps({isIntersecting, self}: BeOosoomProxy): void {
        this.doProp(self, isIntersecting);
        const beDecorated = (<any>self).beDecorated;
        if(beDecorated === undefined) return;
        for(var key in beDecorated){
            const val = beDecorated[key];
            this.doProp(val, isIntersecting);
        }
    }

    doProp(obj: any, isIntersecting: boolean){
        const oosoom = obj.beOosoom as string;
        if(oosoom === undefined) return;
        const firstChar = oosoom[0];
        const isNegation = firstChar === '!';
        const propName = isNegation ? oosoom.substring(1) : oosoom;
        obj[propName] = isNegation ? !isIntersecting : isIntersecting;
    }
}

const tagName = 'be-oosoom';

const ifWantsToBe = 'oosoom';

const upgrade = '*';

define<BeOosoomVirtualProps & BeDecoratedProps<BeOosoomVirtualProps, BeOosoomActions>, BeOosoomActions>({
    config:{
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            forceVisible: ['template'],
            virtualProps: [
                'options', 'isIntersecting', 'isIntersectingEcho',
                'enterDelay', 'rootClosest',
                'isNotIntersecting', 'isNotIntersectingEcho', 'observeClosest'
            ],
            finale: 'finale',
            proxyPropDefaults:{
                options: {
                    threshold: 0,
                    rootMargin: '0px',
                },
                enterDelay: 16,
                exitDelay: 16
            }
        },
        actions:{
            onOptions: 'options',
            onIntersecting: {
                ifAllOf: ['isIntersecting', 'isIntersectingEcho'],
            },
            onIntersectingChange:{
                ifKeyIn: ['isIntersecting']
            },
            onNotIntersecting: {
                ifAllOf: ['isNotIntersecting', 'isNotIntersectingEcho'],
            },
            onNotIntersectingEcho: {
                ifKeyIn: ['isIntersectingEcho']
            }
        }
    },
    complexPropDefaults: {
        controller: BeOosoom
    }
});

register(ifWantsToBe, upgrade, tagName);