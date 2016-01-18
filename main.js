/**
 * @description [配置文件]
 * @author [silence]
 * @date  16/1/18
 */
require.config({
    paths:{   //这里配置的地址，都是相对于上方的baseUrl的
        avalon: 'libs/avalon/avalon',
        mmHistory: 'libs/avalon/mmHistory',
        mmRouter: 'libs/avalon/mmRouter',
        domReady:'libs/require/domReady',
        css: 'libs/require/css',
        text: 'libs/require/text'
    },
    shim:{
        avalon: { exports: "avalon" },
        mmHistory:{ deps: ['avalon']},
        mmRouter:{ deps: ['avalon']}
    },
    priority: ['text', 'css'],
    config: {
        'app': {
            'basepath': '/'
        }
    },
    deps: ['pages/router']
});