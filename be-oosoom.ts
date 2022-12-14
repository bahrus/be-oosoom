import {register} from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/DE.js';
import {BeIntersectional, proxyPropDefaults, actions} from 'be-intersectional/be-intersectional.js';
import {PP, Actions, BeOosoomEndUserProps, ProxyProps, BeOosoomVirtualProps, Proxy} from './types';

export class BeOosoom extends BeIntersectional implements Actions{
    async onIntersecting(bop: ProxyProps) {
        this.setProps(bop);
    }

    onNotIntersecting(bop: ProxyProps): void {
        this.setProps(bop);
    }

    setProps({isIntersecting, self}: ProxyProps): void {
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

define<BeOosoomVirtualProps & BeDecoratedProps<BeOosoomVirtualProps, Actions>, Actions>({
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
            proxyPropDefaults: {
                ...proxyPropDefaults,
                isIntersecting: true
            }
        },
        actions
    },
    complexPropDefaults: {
        controller: BeOosoom
    }
});

register(ifWantsToBe, upgrade, tagName);