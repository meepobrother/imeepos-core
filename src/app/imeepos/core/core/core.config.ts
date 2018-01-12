import { InjectionToken } from "@angular/core";

export interface CoreConfigInterface {
    openid?: string;
    bmap?: string;
    module?: string;
    uniacid?: string;
    siteroot?: string;
    father?: string;
    acid?: string;
    siteurl?: string;
    attachurl?: string;
    cookie?: {
        pre: string;
    };
    MODULE_URL?: string;
}

export const CoreConfigDefault: CoreConfigInterface = {
    openid: 'fromUser',
    bmap: 'Xo6mSiXtItekVGBfNLsedOR1ncASB4pV',
    module: 'imeepos_runner',
    uniacid: '2',
    acid: '2',
    siteroot: 'https://meepo.com.cn',
    father: 'meepoUser',
    siteurl: window.location.href,
    attachurl: 'https://meepo.com.cn/attachment/',
    cookie: {
        pre: 'e682_'
    },
    MODULE_URL: 'https://meepo.com.cn/addons/imeepos_runner/'
}

export const CORE_TOKEN = new InjectionToken('core token');
