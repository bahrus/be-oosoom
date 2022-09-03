import { register } from 'be-hive/register.js';
import { define } from 'be-decorated/be-decorated.js';
import { BeIntersectional } from 'be-intersectional/be-intersectional.js';
export class BeOosoom extends BeIntersectional {
    async onIntersecting(bop) {
        this.setProps(bop);
    }
    onIntersectingChange({ isIntersecting, proxy }) {
        proxy.isNotIntersecting = !isIntersecting;
    }
    onNotIntersectingEcho({ isIntersectingEcho, proxy }) {
        proxy.isNotIntersectingEcho = !isIntersectingEcho;
    }
    onNotIntersecting(bop) {
        this.setProps(bop);
    }
    setProps({ isIntersecting, self }) {
        this.doProp(self, isIntersecting);
        const beDecorated = self.beDecorated;
        if (beDecorated === undefined)
            return;
        for (var key in beDecorated) {
            const val = beDecorated[key];
            this.doProp(val, isIntersecting);
        }
    }
    doProp(obj, isIntersecting) {
        const oosoom = obj.beOosoom;
        if (oosoom === undefined)
            return;
        const firstChar = oosoom[0];
        const isNegation = firstChar === '!';
        const propName = isNegation ? oosoom.substring(1) : oosoom;
        obj[propName] = isNegation ? !isIntersecting : isIntersecting;
    }
}
const tagName = 'be-oosoom';
const ifWantsToBe = 'oosoom';
const upgrade = '*';
define({
    config: {
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
                options: {
                    threshold: 0,
                    rootMargin: '0px',
                },
                enterDelay: 16,
                exitDelay: 16
            }
        },
        actions: {
            onOptions: 'options',
            onIntersecting: {
                ifAllOf: ['isIntersecting', 'isIntersectingEcho'],
            },
            onNotIntersecting: {
                ifAllOf: ['isNotIntersecting', 'isNotIntersectingEcho'],
            }
        }
    },
    complexPropDefaults: {
        controller: BeOosoom
    }
});
register(ifWantsToBe, upgrade, tagName);
