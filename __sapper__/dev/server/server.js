'use strict';

var sirv = require('sirv');
var polka = require('polka');
var compression = require('compression');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var Stream = require('stream');
var http = require('http');
var Url = require('url');
var https = require('https');
var zlib = require('zlib');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sirv__default = /*#__PURE__*/_interopDefaultLegacy(sirv);
var polka__default = /*#__PURE__*/_interopDefaultLegacy(polka);
var compression__default = /*#__PURE__*/_interopDefaultLegacy(compression);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var Url__default = /*#__PURE__*/_interopDefaultLegacy(Url);
var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);

var Mod1 = {"html":"<h2 id=\"beta-blocks\">Beta Blocks</h2>\n<p><img src=\"bb.png\" alt=\"static/bb.png\" /></p>\n<p>Beta Blocks is a a scalable, flexible and re-usable platform for engaging Boston’s residents on issues of urban technology and data. I developed the website and created an audio recorder and streamer web app for its travelling exhibition. It recorded audio off any device's attached mic and uploaded the resulting buffer to MongoDB LFS for streaming at another exhibit, with a fallback to store the buffer locally for later upload. There was also an accompanying moderation Slack bot, which sent all recorded audio to our team for review, allowing the team to listen to clips and approve them to be sent to the stream, or delete them for content reasons.</p>","metadata":{"title":"About"},"filename":"highlights.md","path":"/Users/john_richardson/Documents/Projects/portfolio/src/routes/content/highlights.md"};

var route_0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Mod1
});

var Mod0 = {"html":"<p>I am a full-stack engineer for the web, games, and apps. I have 15 years of professional experience and have been tinkering with code for much, much longer. Since 2015, I've been the Lead Developer at the <a href=\"https://elab.emerson.edu\">Engagement Lab</a> with previous stints at startups and a major marketing firm.</p>\n<p>Most of my recent work centers around using games and the web to help solve problems in democracy and governance, global health, media literacy, and equity and accessibility.</p>\n<p>I live in Boston with my wife and dog.</p>","metadata":{"title":"About"},"filename":"about.md","path":"/Users/john_richardson/Documents/Projects/portfolio/src/routes/content/about.md"};

var route_1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Mod0
});

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}

var all = [
  Mod0,
  Mod1
];

/* src/components/Header.svelte generated by Svelte v3.29.0 */

const css = {
	code: "@import url(\"https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&family=Secular+One&display=swap\");html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b{font-weight:bolder}strong{font-weight:bolder}code{font-family:monospace, monospace;font-size:1em}kbd{font-family:monospace, monospace;font-size:1em}samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub{font-size:75%;line-height:0;position:relative;vertical-align:baseline;bottom:-0.25em}sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;top:-0.5em}img{border-style:none}button{font-family:inherit;font-size:100%;line-height:1.15;margin:0;overflow:visible;text-transform:none;-webkit-appearance:button}button::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted ButtonText}input{font-family:inherit;font-size:100%;line-height:1.15;margin:0;overflow:visible}optgroup{font-family:inherit;font-size:100%;line-height:1.15;margin:0}select{font-family:inherit;font-size:100%;line-height:1.15;margin:0;text-transform:none}textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;overflow:auto}[type=\"button\"]{-webkit-appearance:button}[type=\"button\"]::-moz-focus-inner{border-style:none;padding:0}[type=\"button\"]:-moz-focusring{outline:1px dotted ButtonText}[type=\"reset\"]{-webkit-appearance:button}[type=\"reset\"]::-moz-focus-inner{border-style:none;padding:0}[type=\"reset\"]:-moz-focusring{outline:1px dotted ButtonText}[type=\"submit\"]{-webkit-appearance:button}[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}[type=\"checkbox\"]{box-sizing:border-box;padding:0}[type=\"radio\"]{box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button{height:auto}[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}[type=\"search\"]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}*,:after,:before{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}[hidden]{display:none !important}body{color:#333}h1,h2,h3,h4,h5,h6{margin:0;padding:0}a{cursor:pointer;color:#333;text-decoration:none}a:hover,a:focus,a:active{color:#0d0d0d;text-decoration:underline}p a{text-decoration:underline;display:inline}svg{display:block}pre{margin:0}canvas:focus{outline:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:none;-moz-appearance:none;background:none;background-color:#4F4F51;border:2px solid #4F4F51;border-radius:3px;color:#FFF;cursor:pointer;display:block;font-size:16px;line-height:100%;text-align:center;outline:none;padding:7px;transition:transform 0.1s, background 0.4s, border-color 0.4s, color 0.4s, box-shadow 0.4s}button:hover,button:focus,button:active,[type=\"button\"]:hover,[type=\"button\"]:focus,[type=\"button\"]:active,[type=\"reset\"]:hover,[type=\"reset\"]:focus,[type=\"reset\"]:active,[type=\"submit\"]:hover,[type=\"submit\"]:focus,[type=\"submit\"]:active{background-color:#29292a;border-color:#29292a;outline:none;color:#FFF;text-decoration:none}button:active,[type=\"button\"]:active,[type=\"reset\"]:active,[type=\"submit\"]:active{transform:scale(0.96)}button:disabled,[type=\"button\"]:disabled,[type=\"reset\"]:disabled,[type=\"submit\"]:disabled{cursor:default !important;border:2px solid #EAEAEA;background:repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);background-color:#c4c4c4;color:#888888;transform:scale(1)}button:disabled:hover,button:disabled:focus,button:disabled:active,[type=\"button\"]:disabled:hover,[type=\"button\"]:disabled:focus,[type=\"button\"]:disabled:active,[type=\"reset\"]:disabled:hover,[type=\"reset\"]:disabled:focus,[type=\"reset\"]:disabled:active,[type=\"submit\"]:disabled:hover,[type=\"submit\"]:disabled:focus,[type=\"submit\"]:disabled:active{cursor:default !important;border:2px solid #EAEAEA;background:repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);background-color:#c4c4c4;color:#888888;transform:scale(1)}button.button-link,button.button-link:disabled,[type=\"button\"].button-link,[type=\"button\"].button-link:disabled,[type=\"reset\"].button-link,[type=\"reset\"].button-link:disabled,[type=\"submit\"].button-link,[type=\"submit\"].button-link:disabled{cursor:pointer;color:#333;text-decoration:none;border:none;outline:none;padding:0;background:none;color:inherit;font-weight:inherit;font-size:inherit;text-transform:none}button.button-link:hover,button.button-link:focus,button.button-link:active,button.button-link:disabled:hover,button.button-link:disabled:focus,button.button-link:disabled:active,[type=\"button\"].button-link:hover,[type=\"button\"].button-link:focus,[type=\"button\"].button-link:active,[type=\"button\"].button-link:disabled:hover,[type=\"button\"].button-link:disabled:focus,[type=\"button\"].button-link:disabled:active,[type=\"reset\"].button-link:hover,[type=\"reset\"].button-link:focus,[type=\"reset\"].button-link:active,[type=\"reset\"].button-link:disabled:hover,[type=\"reset\"].button-link:disabled:focus,[type=\"reset\"].button-link:disabled:active,[type=\"submit\"].button-link:hover,[type=\"submit\"].button-link:focus,[type=\"submit\"].button-link:active,[type=\"submit\"].button-link:disabled:hover,[type=\"submit\"].button-link:disabled:focus,[type=\"submit\"].button-link:disabled:active{color:#0d0d0d;text-decoration:underline}p button.button-link,p button.button-link:disabled,p\n [type=\"button\"].button-link,p\n [type=\"button\"].button-link:disabled,p\n [type=\"reset\"].button-link,p\n [type=\"reset\"].button-link:disabled,p\n [type=\"submit\"].button-link,p\n [type=\"submit\"].button-link:disabled{text-decoration:underline;display:inline}button.button-link:disabled,button.button-link:disabled:hover,button.button-link:disabled:focus,button.button-link:disabled:active,[type=\"button\"].button-link:disabled,[type=\"button\"].button-link:disabled:hover,[type=\"button\"].button-link:disabled:focus,[type=\"button\"].button-link:disabled:active,[type=\"reset\"].button-link:disabled,[type=\"reset\"].button-link:disabled:hover,[type=\"reset\"].button-link:disabled:focus,[type=\"reset\"].button-link:disabled:active,[type=\"submit\"].button-link:disabled,[type=\"submit\"].button-link:disabled:hover,[type=\"submit\"].button-link:disabled:focus,[type=\"submit\"].button-link:disabled:active{color:#999999;text-decoration:none}button.button-none,button.button-none:focus,button.button-none:active,button.button-none:hover,button.button-none:disabled,button.button-none:disabled:hover,[type=\"button\"].button-none,[type=\"button\"].button-none:focus,[type=\"button\"].button-none:active,[type=\"button\"].button-none:hover,[type=\"button\"].button-none:disabled,[type=\"button\"].button-none:disabled:hover,[type=\"reset\"].button-none,[type=\"reset\"].button-none:focus,[type=\"reset\"].button-none:active,[type=\"reset\"].button-none:hover,[type=\"reset\"].button-none:disabled,[type=\"reset\"].button-none:disabled:hover,[type=\"submit\"].button-none,[type=\"submit\"].button-none:focus,[type=\"submit\"].button-none:active,[type=\"submit\"].button-none:hover,[type=\"submit\"].button-none:disabled,[type=\"submit\"].button-none:disabled:hover{border:none;outline:none;margin:0;padding:0;background:none;color:inherit;font-weight:inherit;font-size:inherit;text-transform:none}fieldset{border:none;margin:0;padding:0}legend{color:#9E9E9E;font-size:14px;margin:0;padding:0;margin-bottom:10px;display:block}label,.label{color:#9E9E9E;font-size:14px;margin-bottom:20px;width:100%}label{cursor:pointer;display:flex;flex-direction:column}label.centered{justify-content:center;align-items:center;align-content:center;height:100%}label.centered-column{justify-content:center;align-items:center;align-content:center;flex-direction:column;height:100%}label.row-start{flex-direction:row;align-items:center;justify-content:flex-start}label.row-center{flex-direction:row;align-items:center;justify-content:center}label.row-end{flex-direction:row;align-items:center;justify-content:flex-end}label.row-between{flex-direction:row;align-items:center;justify-content:space-between}label.row-around{flex-direction:row;align-items:center;justify-content:space-around}label.row-evenly{flex-direction:row;align-items:center;justify-content:space-evenly}label.column-start{flex-direction:column;align-items:flex-start;align-content:flex-start;justify-content:flex-start}label.column-center{flex-direction:column;align-items:center;align-content:center;justify-content:flex-start}label.column-end{flex-direction:column;align-items:flex-end;align-content:flex-end;justify-content:flex-start}label.inline{display:inline-flex}label.wrap{flex-wrap:wrap}label.wrap-reverse{flex-wrap:wrap-reverse}label.nowrap{flex-wrap:nowrap}label.direction-row{flex-direction:row}label.direction-reverse{flex-direction:row-reverse}label.direction-column{flex-direction:column}label.direction-column-reverse{flex-direction:column-reverse}label.justify-start{justify-content:flex-start}label.justify-end{justify-content:flex-end}label.justify-center{justify-content:center}label.justify-between{justify-content:space-between}label.justify-around{justify-content:space-around}label.justify-evenly{justify-content:space-evenly}label.items-start{align-items:flex-start}label.items-end{align-items:flex-end}label.items-center{align-items:center}label.items-stretch{align-items:stretch}label.items-baseline{align-items:baseline}label.content-start{align-content:flex-start}label.content-end{align-content:flex-end}label.content-center{align-content:center}label.content-between{align-content:space-between}label.content-around{align-content:space-around}label.content-evenly{align-content:space-evenly}input{background:transparent;border:none;border-radius:0;border-bottom:2px solid #9E9E9E;padding:8px 5px 4px;color:#333;display:block;font-size:15px;width:100%;transition:border-color 0.4s, color 0.4s}input::-moz-placeholder{opacity:1;color:#9E9E9E}input:-ms-input-placeholder{opacity:1;color:#9E9E9E}input::placeholder{opacity:1;color:#9E9E9E}input:-moz-placeholder-shown{color:#9E9E9E}input:-ms-input-placeholder{color:#9E9E9E}input:placeholder-shown{color:#9E9E9E}input::-webkit-input-placeholder{color:#9E9E9E}input::-moz-placeholder{opacity:1;color:#9E9E9E}input:-ms-input-placeholder{color:#9E9E9E}input:hover,input:focus{border-color:#4F4F51;outline:none}input:disabled{border-bottom:1px dotted #9E9E9E;color:#9E9E9E;cursor:default !important;margin-bottom:1px}input[type=\"number\"]{-moz-appearance:textfield}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=\"color\"]{height:31px;cursor:pointer}input[type=\"color\"]::-webkit-color-swatch-wrapper{padding:0}input[type=\"color\"]::-webkit-color-swatch{border-color:#9E9E9E;border-radius:3px}input[type=\"checkbox\"]{border-radius:2px;-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;width:20px;height:20px;margin:0 5px 0 0;cursor:pointer;border:2px solid #4F4F51;transition:transform 0.4s, background 0.4s, border-color 0.4s, box-shadow 0.4s}input[type=\"checkbox\"]:hover,input[type=\"checkbox\"]:focus{transform:scale(1.15)}input[type=\"checkbox\"]:disabled{cursor:default !important;box-shadow:none;border-color:#EAEAEA}input[type=\"checkbox\"]:checked{background-color:#4F4F51;background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='8 8 36 36' version='1.1' xml:space='preserve'><path d='M14.1 27.2l7.1 7.2 16.7-16.8' fill='none' stroke='rgba(255,255,255,1)' stroke-width='5'/></svg>\")}input[type=\"checkbox\"]:checked:disabled{border-color:#EAEAEA;background-color:#c4c4c4;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='8 8 36 36' version='1.1' xml:space='preserve'><path d='M14.1 27.2l7.1 7.2 16.7-16.8' fill='none' stroke='rgba(79,79,81,1)' stroke-width='5'/></svg>\"), repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px)}input[type=\"radio\"]{border-radius:50%;-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;width:20px;height:20px;margin:0 5px 0 0;cursor:pointer;border:2px solid #4F4F51;transition:transform 0.4s, background 0.4s, border-color 0.4s, box-shadow 0.4s}input[type=\"radio\"]:hover,input[type=\"radio\"]:focus{transform:scale(1.15)}input[type=\"radio\"]:disabled{cursor:default !important;box-shadow:none;border-color:#EAEAEA}input[type=\"radio\"]:checked{background-color:#4F4F51;box-shadow:inset 0 0 0 2px #FFF}input[type=\"radio\"]:checked:disabled{box-shadow:inset 0 0 0 2px #FFF;border-color:#EAEAEA;background-color:#EAEAEA}input[type=\"range\"]{border:none;padding:13px 0;-webkit-appearance:none;width:100%;cursor:pointer}input[type=\"range\"]:disabled{margin-bottom:0}input[type=\"range\"]::-webkit-slider-thumb{-webkit-appearance:none}input[type=\"range\"]::-ms-track{width:100%;cursor:pointer;background:transparent;border-color:transparent;color:transparent}input[type=\"range\"]::-moz-focus-outer{border:0}input[type=\"range\"]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-8px;cursor:pointer;background:#4F4F51;height:18px;width:18px;border-radius:50%;border:0;-webkit-transition:transform 0.4s;transition:transform 0.4s}input[type=\"range\"]::-moz-range-thumb{cursor:pointer;background:#4F4F51;height:18px;width:18px;border-radius:50%;border:0;-moz-transition:transform 0.4s;transition:transform 0.4s}input[type=\"range\"]::-ms-thumb{cursor:pointer;background:#4F4F51;height:18px;width:18px;border-radius:50%;border:0;-ms-transition:transform 0.4s;transition:transform 0.4s;margin-top:-1px}input[type=\"range\"]:active::-webkit-slider-thumb,input[type=\"range\"]:hover::-webkit-slider-thumb,input[type=\"range\"]:focus::-webkit-slider-thumb{outline:none;transform:scale(1.15)}input[type=\"range\"]:active::-moz-range-thumb,input[type=\"range\"]:hover::-moz-range-thumb,input[type=\"range\"]:focus::-moz-range-thumb{outline:none;transform:scale(1.15)}input[type=\"range\"]:active::-ms-thumb,input[type=\"range\"]:hover::-ms-thumb,input[type=\"range\"]:focus::-ms-thumb{outline:none;transform:scale(1.15)}input[type=\"range\"]:disabled::-webkit-slider-thumb{cursor:default !important;background:repeating-linear-gradient(45deg, #dddddd, #dddddd 2px, #FFF 2px, #FFF 4px)}input[type=\"range\"]:disabled::-moz-range-thumb{cursor:default !important;background:repeating-linear-gradient(45deg, #dddddd, #dddddd 2px, #FFF 2px, #FFF 4px)}input[type=\"range\"]:disabled::-ms-thumb{cursor:default !important;background:repeating-linear-gradient(45deg, #dddddd, #dddddd 2px, #FFF 2px, #FFF 4px)}input[type=\"range\"]::-webkit-slider-runnable-track{width:100%;height:3px;cursor:pointer;border-radius:2px;background:#9E9E9E}input[type=\"range\"]:active::-webkit-slider-runnable-track{background:#9E9E9E;-webkit-transition:background 0.4s;transition:background 0.4s}input[type=\"range\"]:disabled::-webkit-slider-runnable-track{cursor:default !important}input[type=\"range\"]::-moz-range-track{width:100%;height:3px;cursor:pointer;border-radius:2px;background:#9E9E9E}input[type=\"range\"]:active::-moz-range-track{background:#9E9E9E;-moz-transition:background 0.4s;transition:background 0.4s}input[type=\"range\"]:disabled::-moz-range-track{cursor:default !important}input[type=\"range\"]::-ms-track{width:100%;height:3px;cursor:pointer;border-radius:2px;background:transparent;border-color:transparent;border-width:16px 0;color:transparent}input[type=\"range\"]:disabled::-ms-track{cursor:default !important}input[type=\"range\"]::-ms-fill-lower{background:#9E9E9E;border-radius:2px}input[type=\"range\"]:active::-ms-fill-lower{background:#9E9E9E}input[type=\"range\"]::-ms-fill-upper{border-radius:2px;background:#9E9E9E}input[type=\"range\"]:active::-ms-fill-upper{background:#9E9E9E;-ms-transition:background 0.4s;transition:background 0.4s}input::-webkit-file-upload-button{-webkit-appearance:none;-moz-appearance:none;background:none;background-color:#4F4F51;border:2px solid #4F4F51;border-radius:3px;color:#FFF;cursor:pointer;display:block;font-size:16px;line-height:100%;text-align:center;outline:none;padding:7px;-webkit-transition:transform 0.1s, background 0.4s, border-color 0.4s, color 0.4s, box-shadow 0.4s;transition:transform 0.1s, background 0.4s, border-color 0.4s, color 0.4s, box-shadow 0.4s}input::-webkit-file-upload-button:hover,input::-webkit-file-upload-button:focus,input::-webkit-file-upload-button:active{background-color:#29292a;border-color:#29292a;outline:none;color:#FFF;text-decoration:none}input::-webkit-file-upload-button:active{transform:scale(0.96)}input::-webkit-file-upload-button:disabled{cursor:default !important;border:2px solid #EAEAEA;background:repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);background-color:#c4c4c4;color:#888888;transform:scale(1)}input::-webkit-file-upload-button:disabled:hover,input::-webkit-file-upload-button:disabled:focus,input::-webkit-file-upload-button:disabled:active{cursor:default !important;border:2px solid #EAEAEA;background:repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);background-color:#c4c4c4;color:#888888;transform:scale(1)}input:disabled::-webkit-file-upload-button{cursor:default !important;border:2px solid #EAEAEA;background:repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);background-color:#c4c4c4;color:#888888;transform:scale(1)}input::-ms-browse{-webkit-appearance:none;-moz-appearance:none;background:none;background-color:#4F4F51;border:2px solid #4F4F51;border-radius:3px;color:#FFF;cursor:pointer;display:block;font-size:16px;line-height:100%;text-align:center;outline:none;padding:7px;-ms-transition:transform 0.1s, background 0.4s, border-color 0.4s, color 0.4s, box-shadow 0.4s;transition:transform 0.1s, background 0.4s, border-color 0.4s, color 0.4s, box-shadow 0.4s}input::-ms-browse:hover,input::-ms-browse:focus,input::-ms-browse:active{background-color:#29292a;border-color:#29292a;outline:none;color:#FFF;text-decoration:none}input::-ms-browse:active{transform:scale(0.96)}input::-ms-browse:disabled{cursor:default !important;border:2px solid #EAEAEA;background:repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);background-color:#c4c4c4;color:#888888;transform:scale(1)}input::-ms-browse:disabled:hover,input::-ms-browse:disabled:focus,input::-ms-browse:disabled:active{cursor:default !important;border:2px solid #EAEAEA;background:repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);background-color:#c4c4c4;color:#888888;transform:scale(1)}input:disabled::-ms-browse{cursor:default !important;border:2px solid #EAEAEA;background:repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);background-color:#c4c4c4;color:#888888;transform:scale(1)}select{-webkit-appearance:none;-moz-appearance:none;background:transparent;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' version='1.1' xml:space='preserve' stroke-linejoin='round'><g transform='matrix(-0.613836,-7.51732e-17,7.51732e-17,-0.613836,19.9111,16.8669)'><path d='M12.9 2.9L22.7 12.9 3.1 12.9 12.9 2.9Z' fill='rgba(158,158,158,1)'/></g></svg>\");background-position:right center;background-repeat:no-repeat;display:block;border:none;border-bottom:2px solid #9E9E9E;border-radius:0;color:#333;font-size:15px;height:27px;margin-top:4px;padding:3px 24px 3px 5px;width:100%;cursor:pointer;transition:border-color 0.4s, color 0.4s, background 0.4s}select:hover,select:focus{background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' version='1.1' xml:space='preserve' stroke-linejoin='round'><g transform='matrix(-0.613836,-7.51732e-17,7.51732e-17,-0.613836,19.9111,16.8669)'><path d='M12.9 2.9L22.7 12.9 3.1 12.9 12.9 2.9Z' fill='rgba(79,79,81,1)'/></g></svg>\");outline:none;border-color:#4F4F51}select:disabled{padding-bottom:4px;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' version='1.1' xml:space='preserve' stroke-linejoin='round'><g transform='matrix(-0.613836,-7.51732e-17,7.51732e-17,-0.613836,19.9111,16.8669)'><path d='M12.9 2.9L22.7 12.9 3.1 12.9 12.9 2.9Z' fill='rgba(158,158,158,1)'/></g></svg>\");border-bottom:1px dotted #9E9E9E;cursor:default !important;color:#9E9E9E}textarea{background:transparent;border:none;border-radius:0;border-bottom:2px solid #9E9E9E;padding:8px 5px 4px;color:#333;display:block;font-size:15px;width:100%;transition:border-color 0.4s, color 0.4s;min-height:50px;resize:vertical}textarea::-moz-placeholder{opacity:1;color:#9E9E9E}textarea:-ms-input-placeholder{opacity:1;color:#9E9E9E}textarea::placeholder{opacity:1;color:#9E9E9E}textarea:-moz-placeholder-shown{color:#9E9E9E}textarea:-ms-input-placeholder{color:#9E9E9E}textarea:placeholder-shown{color:#9E9E9E}textarea::-webkit-input-placeholder{color:#9E9E9E}textarea::-moz-placeholder{opacity:1;color:#9E9E9E}textarea:-ms-input-placeholder{color:#9E9E9E}textarea:hover,textarea:focus{border-color:#4F4F51;outline:none}textarea:disabled{border-bottom:1px dotted #9E9E9E;color:#9E9E9E;cursor:default !important;margin-bottom:1px}.frow{display:flex;flex-wrap:wrap;justify-content:center}.frow>*{max-width:100%}.frow.centered{justify-content:center;align-items:center;align-content:center;height:100%}.frow.centered-column{justify-content:center;align-items:center;align-content:center;flex-direction:column;height:100%}.frow.row-start{flex-direction:row;align-items:center;justify-content:flex-start}.frow.row-center{flex-direction:row;align-items:center;justify-content:center}.frow.row-end{flex-direction:row;align-items:center;justify-content:flex-end}.frow.row-between{flex-direction:row;align-items:center;justify-content:space-between}.frow.row-around{flex-direction:row;align-items:center;justify-content:space-around}.frow.row-evenly{flex-direction:row;align-items:center;justify-content:space-evenly}.frow.column-start{flex-direction:column;align-items:flex-start;align-content:flex-start;justify-content:flex-start}.frow.column-center{flex-direction:column;align-items:center;align-content:center;justify-content:flex-start}.frow.column-end{flex-direction:column;align-items:flex-end;align-content:flex-end;justify-content:flex-start}.frow.inline{display:inline-flex}.frow.wrap{flex-wrap:wrap}.frow.wrap-reverse{flex-wrap:wrap-reverse}.frow.nowrap{flex-wrap:nowrap}.frow.direction-row{flex-direction:row}.frow.direction-reverse{flex-direction:row-reverse}.frow.direction-column{flex-direction:column}.frow.direction-column-reverse{flex-direction:column-reverse}.frow.justify-start{justify-content:flex-start}.frow.justify-end{justify-content:flex-end}.frow.justify-center{justify-content:center}.frow.justify-between{justify-content:space-between}.frow.justify-around{justify-content:space-around}.frow.justify-evenly{justify-content:space-evenly}.frow.items-start{align-items:flex-start}.frow.items-end{align-items:flex-end}.frow.items-center{align-items:center}.frow.items-stretch{align-items:stretch}.frow.items-baseline{align-items:baseline}.frow.content-start{align-content:flex-start}.frow.content-end{align-content:flex-end}.frow.content-center{align-content:center}.frow.content-between{align-content:space-between}.frow.content-around{align-content:space-around}.frow.content-evenly{align-content:space-evenly}.frow.gutters{margin-left:-15px;margin-right:-15px}.frow.gutters>[class*=col-xs],.frow.gutters>[class*=col-sm],.frow.gutters>[class*=col-md],.frow.gutters>[class*=col-lg]{padding-left:15px;padding-right:15px}.frow [class*=col-xs],.frow [class*=col-sm],.frow [class*=col-md],.frow [class*=col-lg]{width:100%}@media(min-width: 0px){.frow .col-xs-1-1{width:100%}.frow .col-xs-1-2{width:50%}.frow .col-xs-2-2{width:100%}.frow .col-xs-1-3{width:33.33333%}.frow .col-xs-2-3{width:66.66667%}.frow .col-xs-3-3{width:100%}.frow .col-xs-1-4{width:25%}.frow .col-xs-2-4{width:50%}.frow .col-xs-3-4{width:75%}.frow .col-xs-4-4{width:100%}.frow .col-xs-1-5{width:20%}.frow .col-xs-2-5{width:40%}.frow .col-xs-3-5{width:60%}.frow .col-xs-4-5{width:80%}.frow .col-xs-5-5{width:100%}.frow .col-xs-1-6{width:16.66667%}.frow .col-xs-2-6{width:33.33333%}.frow .col-xs-3-6{width:50%}.frow .col-xs-4-6{width:66.66667%}.frow .col-xs-5-6{width:83.33333%}.frow .col-xs-6-6{width:100%}.frow .col-xs-1-7{width:14.28571%}.frow .col-xs-2-7{width:28.57143%}.frow .col-xs-3-7{width:42.85714%}.frow .col-xs-4-7{width:57.14286%}.frow .col-xs-5-7{width:71.42857%}.frow .col-xs-6-7{width:85.71429%}.frow .col-xs-7-7{width:100%}.frow .col-xs-1-8{width:12.5%}.frow .col-xs-2-8{width:25%}.frow .col-xs-3-8{width:37.5%}.frow .col-xs-4-8{width:50%}.frow .col-xs-5-8{width:62.5%}.frow .col-xs-6-8{width:75%}.frow .col-xs-7-8{width:87.5%}.frow .col-xs-8-8{width:100%}.frow .col-xs-1-9{width:11.11111%}.frow .col-xs-2-9{width:22.22222%}.frow .col-xs-3-9{width:33.33333%}.frow .col-xs-4-9{width:44.44444%}.frow .col-xs-5-9{width:55.55556%}.frow .col-xs-6-9{width:66.66667%}.frow .col-xs-7-9{width:77.77778%}.frow .col-xs-8-9{width:88.88889%}.frow .col-xs-9-9{width:100%}.frow .col-xs-1-10{width:10%}.frow .col-xs-2-10{width:20%}.frow .col-xs-3-10{width:30%}.frow .col-xs-4-10{width:40%}.frow .col-xs-5-10{width:50%}.frow .col-xs-6-10{width:60%}.frow .col-xs-7-10{width:70%}.frow .col-xs-8-10{width:80%}.frow .col-xs-9-10{width:90%}.frow .col-xs-10-10{width:100%}.frow .col-xs-1-11{width:9.09091%}.frow .col-xs-2-11{width:18.18182%}.frow .col-xs-3-11{width:27.27273%}.frow .col-xs-4-11{width:36.36364%}.frow .col-xs-5-11{width:45.45455%}.frow .col-xs-6-11{width:54.54545%}.frow .col-xs-7-11{width:63.63636%}.frow .col-xs-8-11{width:72.72727%}.frow .col-xs-9-11{width:81.81818%}.frow .col-xs-10-11{width:90.90909%}.frow .col-xs-11-11{width:100%}.frow .col-xs-1-12{width:8.33333%}.frow .col-xs-2-12{width:16.66667%}.frow .col-xs-3-12{width:25%}.frow .col-xs-4-12{width:33.33333%}.frow .col-xs-5-12{width:41.66667%}.frow .col-xs-6-12{width:50%}.frow .col-xs-7-12{width:58.33333%}.frow .col-xs-8-12{width:66.66667%}.frow .col-xs-9-12{width:75%}.frow .col-xs-10-12{width:83.33333%}.frow .col-xs-11-12{width:91.66667%}.frow .col-xs-12-12{width:100%}}@media(min-width: 768px){.frow .col-sm-1-1{width:100%}.frow .col-sm-1-2{width:50%}.frow .col-sm-2-2{width:100%}.frow .col-sm-1-3{width:33.33333%}.frow .col-sm-2-3{width:66.66667%}.frow .col-sm-3-3{width:100%}.frow .col-sm-1-4{width:25%}.frow .col-sm-2-4{width:50%}.frow .col-sm-3-4{width:75%}.frow .col-sm-4-4{width:100%}.frow .col-sm-1-5{width:20%}.frow .col-sm-2-5{width:40%}.frow .col-sm-3-5{width:60%}.frow .col-sm-4-5{width:80%}.frow .col-sm-5-5{width:100%}.frow .col-sm-1-6{width:16.66667%}.frow .col-sm-2-6{width:33.33333%}.frow .col-sm-3-6{width:50%}.frow .col-sm-4-6{width:66.66667%}.frow .col-sm-5-6{width:83.33333%}.frow .col-sm-6-6{width:100%}.frow .col-sm-1-7{width:14.28571%}.frow .col-sm-2-7{width:28.57143%}.frow .col-sm-3-7{width:42.85714%}.frow .col-sm-4-7{width:57.14286%}.frow .col-sm-5-7{width:71.42857%}.frow .col-sm-6-7{width:85.71429%}.frow .col-sm-7-7{width:100%}.frow .col-sm-1-8{width:12.5%}.frow .col-sm-2-8{width:25%}.frow .col-sm-3-8{width:37.5%}.frow .col-sm-4-8{width:50%}.frow .col-sm-5-8{width:62.5%}.frow .col-sm-6-8{width:75%}.frow .col-sm-7-8{width:87.5%}.frow .col-sm-8-8{width:100%}.frow .col-sm-1-9{width:11.11111%}.frow .col-sm-2-9{width:22.22222%}.frow .col-sm-3-9{width:33.33333%}.frow .col-sm-4-9{width:44.44444%}.frow .col-sm-5-9{width:55.55556%}.frow .col-sm-6-9{width:66.66667%}.frow .col-sm-7-9{width:77.77778%}.frow .col-sm-8-9{width:88.88889%}.frow .col-sm-9-9{width:100%}.frow .col-sm-1-10{width:10%}.frow .col-sm-2-10{width:20%}.frow .col-sm-3-10{width:30%}.frow .col-sm-4-10{width:40%}.frow .col-sm-5-10{width:50%}.frow .col-sm-6-10{width:60%}.frow .col-sm-7-10{width:70%}.frow .col-sm-8-10{width:80%}.frow .col-sm-9-10{width:90%}.frow .col-sm-10-10{width:100%}.frow .col-sm-1-11{width:9.09091%}.frow .col-sm-2-11{width:18.18182%}.frow .col-sm-3-11{width:27.27273%}.frow .col-sm-4-11{width:36.36364%}.frow .col-sm-5-11{width:45.45455%}.frow .col-sm-6-11{width:54.54545%}.frow .col-sm-7-11{width:63.63636%}.frow .col-sm-8-11{width:72.72727%}.frow .col-sm-9-11{width:81.81818%}.frow .col-sm-10-11{width:90.90909%}.frow .col-sm-11-11{width:100%}.frow .col-sm-1-12{width:8.33333%}.frow .col-sm-2-12{width:16.66667%}.frow .col-sm-3-12{width:25%}.frow .col-sm-4-12{width:33.33333%}.frow .col-sm-5-12{width:41.66667%}.frow .col-sm-6-12{width:50%}.frow .col-sm-7-12{width:58.33333%}.frow .col-sm-8-12{width:66.66667%}.frow .col-sm-9-12{width:75%}.frow .col-sm-10-12{width:83.33333%}.frow .col-sm-11-12{width:91.66667%}.frow .col-sm-12-12{width:100%}}@media(min-width: 992px){.frow .col-md-1-1{width:100%}.frow .col-md-1-2{width:50%}.frow .col-md-2-2{width:100%}.frow .col-md-1-3{width:33.33333%}.frow .col-md-2-3{width:66.66667%}.frow .col-md-3-3{width:100%}.frow .col-md-1-4{width:25%}.frow .col-md-2-4{width:50%}.frow .col-md-3-4{width:75%}.frow .col-md-4-4{width:100%}.frow .col-md-1-5{width:20%}.frow .col-md-2-5{width:40%}.frow .col-md-3-5{width:60%}.frow .col-md-4-5{width:80%}.frow .col-md-5-5{width:100%}.frow .col-md-1-6{width:16.66667%}.frow .col-md-2-6{width:33.33333%}.frow .col-md-3-6{width:50%}.frow .col-md-4-6{width:66.66667%}.frow .col-md-5-6{width:83.33333%}.frow .col-md-6-6{width:100%}.frow .col-md-1-7{width:14.28571%}.frow .col-md-2-7{width:28.57143%}.frow .col-md-3-7{width:42.85714%}.frow .col-md-4-7{width:57.14286%}.frow .col-md-5-7{width:71.42857%}.frow .col-md-6-7{width:85.71429%}.frow .col-md-7-7{width:100%}.frow .col-md-1-8{width:12.5%}.frow .col-md-2-8{width:25%}.frow .col-md-3-8{width:37.5%}.frow .col-md-4-8{width:50%}.frow .col-md-5-8{width:62.5%}.frow .col-md-6-8{width:75%}.frow .col-md-7-8{width:87.5%}.frow .col-md-8-8{width:100%}.frow .col-md-1-9{width:11.11111%}.frow .col-md-2-9{width:22.22222%}.frow .col-md-3-9{width:33.33333%}.frow .col-md-4-9{width:44.44444%}.frow .col-md-5-9{width:55.55556%}.frow .col-md-6-9{width:66.66667%}.frow .col-md-7-9{width:77.77778%}.frow .col-md-8-9{width:88.88889%}.frow .col-md-9-9{width:100%}.frow .col-md-1-10{width:10%}.frow .col-md-2-10{width:20%}.frow .col-md-3-10{width:30%}.frow .col-md-4-10{width:40%}.frow .col-md-5-10{width:50%}.frow .col-md-6-10{width:60%}.frow .col-md-7-10{width:70%}.frow .col-md-8-10{width:80%}.frow .col-md-9-10{width:90%}.frow .col-md-10-10{width:100%}.frow .col-md-1-11{width:9.09091%}.frow .col-md-2-11{width:18.18182%}.frow .col-md-3-11{width:27.27273%}.frow .col-md-4-11{width:36.36364%}.frow .col-md-5-11{width:45.45455%}.frow .col-md-6-11{width:54.54545%}.frow .col-md-7-11{width:63.63636%}.frow .col-md-8-11{width:72.72727%}.frow .col-md-9-11{width:81.81818%}.frow .col-md-10-11{width:90.90909%}.frow .col-md-11-11{width:100%}.frow .col-md-1-12{width:8.33333%}.frow .col-md-2-12{width:16.66667%}.frow .col-md-3-12{width:25%}.frow .col-md-4-12{width:33.33333%}.frow .col-md-5-12{width:41.66667%}.frow .col-md-6-12{width:50%}.frow .col-md-7-12{width:58.33333%}.frow .col-md-8-12{width:66.66667%}.frow .col-md-9-12{width:75%}.frow .col-md-10-12{width:83.33333%}.frow .col-md-11-12{width:91.66667%}.frow .col-md-12-12{width:100%}}@media(min-width: 1200px){.frow .col-lg-1-1{width:100%}.frow .col-lg-1-2{width:50%}.frow .col-lg-2-2{width:100%}.frow .col-lg-1-3{width:33.33333%}.frow .col-lg-2-3{width:66.66667%}.frow .col-lg-3-3{width:100%}.frow .col-lg-1-4{width:25%}.frow .col-lg-2-4{width:50%}.frow .col-lg-3-4{width:75%}.frow .col-lg-4-4{width:100%}.frow .col-lg-1-5{width:20%}.frow .col-lg-2-5{width:40%}.frow .col-lg-3-5{width:60%}.frow .col-lg-4-5{width:80%}.frow .col-lg-5-5{width:100%}.frow .col-lg-1-6{width:16.66667%}.frow .col-lg-2-6{width:33.33333%}.frow .col-lg-3-6{width:50%}.frow .col-lg-4-6{width:66.66667%}.frow .col-lg-5-6{width:83.33333%}.frow .col-lg-6-6{width:100%}.frow .col-lg-1-7{width:14.28571%}.frow .col-lg-2-7{width:28.57143%}.frow .col-lg-3-7{width:42.85714%}.frow .col-lg-4-7{width:57.14286%}.frow .col-lg-5-7{width:71.42857%}.frow .col-lg-6-7{width:85.71429%}.frow .col-lg-7-7{width:100%}.frow .col-lg-1-8{width:12.5%}.frow .col-lg-2-8{width:25%}.frow .col-lg-3-8{width:37.5%}.frow .col-lg-4-8{width:50%}.frow .col-lg-5-8{width:62.5%}.frow .col-lg-6-8{width:75%}.frow .col-lg-7-8{width:87.5%}.frow .col-lg-8-8{width:100%}.frow .col-lg-1-9{width:11.11111%}.frow .col-lg-2-9{width:22.22222%}.frow .col-lg-3-9{width:33.33333%}.frow .col-lg-4-9{width:44.44444%}.frow .col-lg-5-9{width:55.55556%}.frow .col-lg-6-9{width:66.66667%}.frow .col-lg-7-9{width:77.77778%}.frow .col-lg-8-9{width:88.88889%}.frow .col-lg-9-9{width:100%}.frow .col-lg-1-10{width:10%}.frow .col-lg-2-10{width:20%}.frow .col-lg-3-10{width:30%}.frow .col-lg-4-10{width:40%}.frow .col-lg-5-10{width:50%}.frow .col-lg-6-10{width:60%}.frow .col-lg-7-10{width:70%}.frow .col-lg-8-10{width:80%}.frow .col-lg-9-10{width:90%}.frow .col-lg-10-10{width:100%}.frow .col-lg-1-11{width:9.09091%}.frow .col-lg-2-11{width:18.18182%}.frow .col-lg-3-11{width:27.27273%}.frow .col-lg-4-11{width:36.36364%}.frow .col-lg-5-11{width:45.45455%}.frow .col-lg-6-11{width:54.54545%}.frow .col-lg-7-11{width:63.63636%}.frow .col-lg-8-11{width:72.72727%}.frow .col-lg-9-11{width:81.81818%}.frow .col-lg-10-11{width:90.90909%}.frow .col-lg-11-11{width:100%}.frow .col-lg-1-12{width:8.33333%}.frow .col-lg-2-12{width:16.66667%}.frow .col-lg-3-12{width:25%}.frow .col-lg-4-12{width:33.33333%}.frow .col-lg-5-12{width:41.66667%}.frow .col-lg-6-12{width:50%}.frow .col-lg-7-12{width:58.33333%}.frow .col-lg-8-12{width:66.66667%}.frow .col-lg-9-12{width:75%}.frow .col-lg-10-12{width:83.33333%}.frow .col-lg-11-12{width:91.66667%}.frow .col-lg-12-12{width:100%}}.frow-container{width:100%;margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media(min-width: 768px){.frow-container{max-width:750px}}@media(min-width: 992px){.frow-container{max-width:970px}}@media(min-width: 1200px){.frow-container{max-width:1170px}}.visible-xs,.visible-sm,.visible-md,.visible-lg{display:none !important}.hidden-xs,.hidden-sm,.hidden-md,.hidden-lg{display:block !important}.frow.hidden-xs,.frow.hidden-sm,.frow.hidden-md,.frow.hidden-lg{display:flex !important}@media(max-width: 767px){.visible-xs{display:block !important}.frow.visible-xs{display:flex !important}.hidden-xs,.frow.hidden-xs{display:none !important}}@media(min-width: 768px) and (max-width: 991px){.visible-sm{display:block !important}.frow.visible-sm{display:flex !important}.hidden-sm,.frow.hidden-sm{display:none !important}}@media(min-width: 992px) and (max-width: 1199px){.visible-md{display:block !important}.frow.visible-md{display:flex !important}.hidden-md,.frow.hidden-md{display:none !important}}@media(min-width: 1200px){.visible-lg{display:block !important}.frow.visible-lg{display:flex !important}.hidden-lg,.frow.hidden-lg{display:none !important}}@media(max-width: 767px){.frow.direction-row-xs{flex-direction:row}.frow.direction-reverse-xs{flex-direction:row-reverse}.frow.direction-column-xs{flex-direction:column}.frow.direction-column-reverse-xs{flex-direction:column-reverse}}@media(min-width: 768px) and (max-width: 991px){.frow.direction-row-sm{flex-direction:row}.frow.direction-reverse-sm{flex-direction:row-reverse}.frow.direction-column-sm{flex-direction:column}.frow.direction-column-reverse-sm{flex-direction:column-reverse}}@media(min-width: 992px) and (max-width: 1199px){.frow.direction-row-md{flex-direction:row}.frow.direction-reverse-md{flex-direction:row-reverse}.frow.direction-column-md{flex-direction:column}.frow.direction-column-reverse-md{flex-direction:column-reverse}}@media(min-width: 1200px){.frow.direction-row-lg{flex-direction:row}.frow.direction-reverse-lg{flex-direction:row-reverse}.frow.direction-column-lg{flex-direction:column}.frow.direction-column-reverse-lg{flex-direction:column-reverse}}.m-0{margin:0px !important}.m-5{margin:5px !important}.m-10{margin:10px !important}.m-15{margin:15px !important}.m-20{margin:20px !important}.m-25{margin:25px !important}.m-30{margin:30px !important}.m-40{margin:40px !important}.m-50{margin:50px !important}.m-60{margin:60px !important}.m-70{margin:70px !important}.m-80{margin:80px !important}.m-90{margin:90px !important}.m-100{margin:100px !important}.m-auto{margin:auto !important}.mx-0{margin-right:0px !important;margin-left:0px !important}.mx-5{margin-right:5px !important;margin-left:5px !important}.mx-10{margin-right:10px !important;margin-left:10px !important}.mx-15{margin-right:15px !important;margin-left:15px !important}.mx-20{margin-right:20px !important;margin-left:20px !important}.mx-25{margin-right:25px !important;margin-left:25px !important}.mx-30{margin-right:30px !important;margin-left:30px !important}.mx-40{margin-right:40px !important;margin-left:40px !important}.mx-50{margin-right:50px !important;margin-left:50px !important}.mx-60{margin-right:60px !important;margin-left:60px !important}.mx-70{margin-right:70px !important;margin-left:70px !important}.mx-80{margin-right:80px !important;margin-left:80px !important}.mx-90{margin-right:90px !important;margin-left:90px !important}.mx-100{margin-right:100px !important;margin-left:100px !important}.mx-auto{margin-right:auto !important;margin-left:auto !important}.my-0{margin-top:0px !important;margin-bottom:0px !important}.my-5{margin-top:5px !important;margin-bottom:5px !important}.my-10{margin-top:10px !important;margin-bottom:10px !important}.my-15{margin-top:15px !important;margin-bottom:15px !important}.my-20{margin-top:20px !important;margin-bottom:20px !important}.my-25{margin-top:25px !important;margin-bottom:25px !important}.my-30{margin-top:30px !important;margin-bottom:30px !important}.my-40{margin-top:40px !important;margin-bottom:40px !important}.my-50{margin-top:50px !important;margin-bottom:50px !important}.my-60{margin-top:60px !important;margin-bottom:60px !important}.my-70{margin-top:70px !important;margin-bottom:70px !important}.my-80{margin-top:80px !important;margin-bottom:80px !important}.my-90{margin-top:90px !important;margin-bottom:90px !important}.my-100{margin-top:100px !important;margin-bottom:100px !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-0{margin-top:0px !important}.mt-5{margin-top:5px !important}.mt-10{margin-top:10px !important}.mt-15{margin-top:15px !important}.mt-20{margin-top:20px !important}.mt-25{margin-top:25px !important}.mt-30{margin-top:30px !important}.mt-40{margin-top:40px !important}.mt-50{margin-top:50px !important}.mt-60{margin-top:60px !important}.mt-70{margin-top:70px !important}.mt-80{margin-top:80px !important}.mt-90{margin-top:90px !important}.mt-100{margin-top:100px !important}.mt-auto{margin-top:auto !important}.mr-0{margin-right:0px !important}.mr-5{margin-right:5px !important}.mr-10{margin-right:10px !important}.mr-15{margin-right:15px !important}.mr-20{margin-right:20px !important}.mr-25{margin-right:25px !important}.mr-30{margin-right:30px !important}.mr-40{margin-right:40px !important}.mr-50{margin-right:50px !important}.mr-60{margin-right:60px !important}.mr-70{margin-right:70px !important}.mr-80{margin-right:80px !important}.mr-90{margin-right:90px !important}.mr-100{margin-right:100px !important}.mr-auto{margin-right:auto !important}.mb-0{margin-bottom:0px !important}.mb-5{margin-bottom:5px !important}.mb-10{margin-bottom:10px !important}.mb-15{margin-bottom:15px !important}.mb-20{margin-bottom:20px !important}.mb-25{margin-bottom:25px !important}.mb-30{margin-bottom:30px !important}.mb-40{margin-bottom:40px !important}.mb-50{margin-bottom:50px !important}.mb-60{margin-bottom:60px !important}.mb-70{margin-bottom:70px !important}.mb-80{margin-bottom:80px !important}.mb-90{margin-bottom:90px !important}.mb-100{margin-bottom:100px !important}.mb-auto{margin-bottom:auto !important}.ml-0{margin-left:0px !important}.ml-5{margin-left:5px !important}.ml-10{margin-left:10px !important}.ml-15{margin-left:15px !important}.ml-20{margin-left:20px !important}.ml-25{margin-left:25px !important}.ml-30{margin-left:30px !important}.ml-40{margin-left:40px !important}.ml-50{margin-left:50px !important}.ml-60{margin-left:60px !important}.ml-70{margin-left:70px !important}.ml-80{margin-left:80px !important}.ml-90{margin-left:90px !important}.ml-100{margin-left:100px !important}.ml-auto{margin-left:auto !important}.p-0{padding:0px !important}.p-5{padding:5px !important}.p-10{padding:10px !important}.p-15{padding:15px !important}.p-20{padding:20px !important}.p-25{padding:25px !important}.p-30{padding:30px !important}.p-40{padding:40px !important}.p-50{padding:50px !important}.p-60{padding:60px !important}.p-70{padding:70px !important}.p-80{padding:80px !important}.p-90{padding:90px !important}.p-100{padding:100px !important}.px-0{padding-right:0px !important;padding-left:0px !important}.px-5{padding-right:5px !important;padding-left:5px !important}.px-10{padding-right:10px !important;padding-left:10px !important}.px-15{padding-right:15px !important;padding-left:15px !important}.px-20{padding-right:20px !important;padding-left:20px !important}.px-25{padding-right:25px !important;padding-left:25px !important}.px-30{padding-right:30px !important;padding-left:30px !important}.px-40{padding-right:40px !important;padding-left:40px !important}.px-50{padding-right:50px !important;padding-left:50px !important}.px-60{padding-right:60px !important;padding-left:60px !important}.px-70{padding-right:70px !important;padding-left:70px !important}.px-80{padding-right:80px !important;padding-left:80px !important}.px-90{padding-right:90px !important;padding-left:90px !important}.px-100{padding-right:100px !important;padding-left:100px !important}.py-0{padding-top:0px !important;padding-bottom:0px !important}.py-5{padding-top:5px !important;padding-bottom:5px !important}.py-10{padding-top:10px !important;padding-bottom:10px !important}.py-15{padding-top:15px !important;padding-bottom:15px !important}.py-20{padding-top:20px !important;padding-bottom:20px !important}.py-25{padding-top:25px !important;padding-bottom:25px !important}.py-30{padding-top:30px !important;padding-bottom:30px !important}.py-40{padding-top:40px !important;padding-bottom:40px !important}.py-50{padding-top:50px !important;padding-bottom:50px !important}.py-60{padding-top:60px !important;padding-bottom:60px !important}.py-70{padding-top:70px !important;padding-bottom:70px !important}.py-80{padding-top:80px !important;padding-bottom:80px !important}.py-90{padding-top:90px !important;padding-bottom:90px !important}.py-100{padding-top:100px !important;padding-bottom:100px !important}.pt-0{padding-top:0px !important}.pt-5{padding-top:5px !important}.pt-10{padding-top:10px !important}.pt-15{padding-top:15px !important}.pt-20{padding-top:20px !important}.pt-25{padding-top:25px !important}.pt-30{padding-top:30px !important}.pt-40{padding-top:40px !important}.pt-50{padding-top:50px !important}.pt-60{padding-top:60px !important}.pt-70{padding-top:70px !important}.pt-80{padding-top:80px !important}.pt-90{padding-top:90px !important}.pt-100{padding-top:100px !important}.pr-0{padding-right:0px !important}.pr-5{padding-right:5px !important}.pr-10{padding-right:10px !important}.pr-15{padding-right:15px !important}.pr-20{padding-right:20px !important}.pr-25{padding-right:25px !important}.pr-30{padding-right:30px !important}.pr-40{padding-right:40px !important}.pr-50{padding-right:50px !important}.pr-60{padding-right:60px !important}.pr-70{padding-right:70px !important}.pr-80{padding-right:80px !important}.pr-90{padding-right:90px !important}.pr-100{padding-right:100px !important}.pb-0{padding-bottom:0px !important}.pb-5{padding-bottom:5px !important}.pb-10{padding-bottom:10px !important}.pb-15{padding-bottom:15px !important}.pb-20{padding-bottom:20px !important}.pb-25{padding-bottom:25px !important}.pb-30{padding-bottom:30px !important}.pb-40{padding-bottom:40px !important}.pb-50{padding-bottom:50px !important}.pb-60{padding-bottom:60px !important}.pb-70{padding-bottom:70px !important}.pb-80{padding-bottom:80px !important}.pb-90{padding-bottom:90px !important}.pb-100{padding-bottom:100px !important}.pl-0{padding-left:0px !important}.pl-5{padding-left:5px !important}.pl-10{padding-left:10px !important}.pl-15{padding-left:15px !important}.pl-20{padding-left:20px !important}.pl-25{padding-left:25px !important}.pl-30{padding-left:30px !important}.pl-40{padding-left:40px !important}.pl-50{padding-left:50px !important}.pl-60{padding-left:60px !important}.pl-70{padding-left:70px !important}.pl-80{padding-left:80px !important}.pl-90{padding-left:90px !important}.pl-100{padding-left:100px !important}.width-100{width:100% !important}.width-auto{width:auto !important}.height-100{height:100% !important}.height-auto{height:auto !important}.overflow-visible{overflow:visible !important}.overflow-hidden{overflow:hidden !important}.overflow-auto{overflow:auto !important}.overflow-y-visible{overflow-y:visible !important}.overflow-y-hidden{overflow-y:hidden !important}.overflow-y-auto{overflow-y:auto !important}.overflow-x-visible{overflow-x:visible !important}.overflow-x-hidden{overflow-x:hidden !important}.overflow-x-auto{overflow-x:auto !important}.shrink-0{flex-shrink:0 !important}.shrink-1{flex-shrink:1 !important}.grow-0{flex-grow:0 !important}.grow-1{flex-grow:1 !important}.clickable:not([disabled]),[onclick]:not([disabled]){cursor:pointer !important}.not-clickable,.not-clickable[onclick]{cursor:default !important}.letsGo-hide{display:none !important}.shadow-light{box-shadow:0px 1px 3px 0px #A0A0A0 !important}.shadow-dark{box-shadow:0px 1px 3px 0px #1B1B1B !important}.text-left{text-align:left !important}.text-center{text-align:center !important}.text-right{text-align:right !important}.text-justify{text-align:justify !important}.text-uppercase{text-transform:uppercase !important}.text-lowercase{text-transform:lowercase !important}.text-capitalize{text-transform:capitalize !important}.text-underline{text-decoration:underline !important}.text-line-through{text-decoration:line-through !important}.text-italic{font-style:italic !important}.text-ellipsis{overflow:hidden !important;white-space:nowrap !important;text-overflow:ellipsis !important}.opacity-0{opacity:0 !important}.opacity-100{opacity:1 !important}.visible-print,.frow.visible-print{display:none !important}@media print{.hidden-print,.frow.hidden-print{display:none !important}.visible-print{display:block !important}.frow.visible-print{display:flex !important}}.visible-sr,.visible-sr-focusable:not(:focus){position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border:0 !important}body{font-size:1em;padding:1%;color:black;background-color:white;font-family:'Assistant', sans-serif}body h1{font-size:4em;font-family:'Secular One', sans-serif}body h3{font-weight:600}body a{color:black}body img{filter:grayscale(100%)}[aria-current]{position:relative;display:inline-block}[aria-current]::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:#ff3e00;display:block;bottom:-1px}header{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}svg{width:45px}",
	map: "{\"version\":3,\"file\":\"Header.svelte\",\"sources\":[\"Header.svelte\"],\"sourcesContent\":[\"<style global lang=\\\"scss\\\">@import url(\\\"https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&family=Secular+One&display=swap\\\");\\n/*! Frow CSS | MIT License | frowcss.com */\\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n:global(html) {\\n  line-height: 1.15;\\n  -webkit-text-size-adjust: 100%; }\\n\\n:global(body) {\\n  margin: 0; }\\n\\n:global(main) {\\n  display: block; }\\n\\n:global(h1) {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\n:global(hr) {\\n  box-sizing: content-box;\\n  height: 0;\\n  overflow: visible; }\\n\\n:global(pre) {\\n  font-family: monospace, monospace;\\n  font-size: 1em; }\\n\\n:global(a) {\\n  background-color: transparent; }\\n\\n:global(abbr[title]) {\\n  border-bottom: none;\\n  text-decoration: underline;\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted; }\\n\\n:global(b) {\\n  font-weight: bolder; }\\n\\n:global(strong) {\\n  font-weight: bolder; }\\n\\n:global(code) {\\n  font-family: monospace, monospace;\\n  font-size: 1em; }\\n\\n:global(kbd) {\\n  font-family: monospace, monospace;\\n  font-size: 1em; }\\n\\n:global(samp) {\\n  font-family: monospace, monospace;\\n  font-size: 1em; }\\n\\n:global(small) {\\n  font-size: 80%; }\\n\\n:global(sub) {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n  bottom: -0.25em; }\\n\\n:global(sup) {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n  top: -0.5em; }\\n\\n:global(img) {\\n  border-style: none; }\\n\\n:global(button) {\\n  font-family: inherit;\\n  font-size: 100%;\\n  line-height: 1.15;\\n  margin: 0;\\n  overflow: visible;\\n  text-transform: none;\\n  -webkit-appearance: button; }\\n  :global(button::-moz-focus-inner) {\\n    border-style: none;\\n    padding: 0; }\\n  :global(button:-moz-focusring) {\\n    outline: 1px dotted ButtonText; }\\n\\n:global(input) {\\n  font-family: inherit;\\n  font-size: 100%;\\n  line-height: 1.15;\\n  margin: 0;\\n  overflow: visible; }\\n\\n:global(optgroup) {\\n  font-family: inherit;\\n  font-size: 100%;\\n  line-height: 1.15;\\n  margin: 0; }\\n\\n:global(select) {\\n  font-family: inherit;\\n  font-size: 100%;\\n  line-height: 1.15;\\n  margin: 0;\\n  text-transform: none; }\\n\\n:global(textarea) {\\n  font-family: inherit;\\n  font-size: 100%;\\n  line-height: 1.15;\\n  margin: 0;\\n  overflow: auto; }\\n\\n:global([type=\\\"button\\\"]) {\\n  -webkit-appearance: button; }\\n  :global([type=\\\"button\\\"]::-moz-focus-inner) {\\n    border-style: none;\\n    padding: 0; }\\n  :global([type=\\\"button\\\"]:-moz-focusring) {\\n    outline: 1px dotted ButtonText; }\\n\\n:global([type=\\\"reset\\\"]) {\\n  -webkit-appearance: button; }\\n  :global([type=\\\"reset\\\"]::-moz-focus-inner) {\\n    border-style: none;\\n    padding: 0; }\\n  :global([type=\\\"reset\\\"]:-moz-focusring) {\\n    outline: 1px dotted ButtonText; }\\n\\n:global([type=\\\"submit\\\"]) {\\n  -webkit-appearance: button; }\\n  :global([type=\\\"submit\\\"]::-moz-focus-inner) {\\n    border-style: none;\\n    padding: 0; }\\n  :global([type=\\\"submit\\\"]:-moz-focusring) {\\n    outline: 1px dotted ButtonText; }\\n\\n:global(fieldset) {\\n  padding: 0.35em 0.75em 0.625em; }\\n\\n:global(legend) {\\n  box-sizing: border-box;\\n  color: inherit;\\n  display: table;\\n  max-width: 100%;\\n  padding: 0;\\n  white-space: normal; }\\n\\n:global(progress) {\\n  vertical-align: baseline; }\\n\\n:global([type=\\\"checkbox\\\"]) {\\n  box-sizing: border-box;\\n  padding: 0; }\\n\\n:global([type=\\\"radio\\\"]) {\\n  box-sizing: border-box;\\n  padding: 0; }\\n\\n:global([type=\\\"number\\\"]::-webkit-inner-spin-button) {\\n  height: auto; }\\n\\n:global([type=\\\"number\\\"]::-webkit-outer-spin-button) {\\n  height: auto; }\\n\\n:global([type=\\\"search\\\"]) {\\n  -webkit-appearance: textfield;\\n  outline-offset: -2px; }\\n  :global([type=\\\"search\\\"]::-webkit-search-decoration) {\\n    -webkit-appearance: none; }\\n  :global([type=\\\"search\\\"]::-webkit-file-upload-button) {\\n    -webkit-appearance: button;\\n    font: inherit; }\\n\\n:global(details) {\\n  display: block; }\\n\\n:global(summary) {\\n  display: list-item; }\\n\\n:global(template) {\\n  display: none; }\\n\\n:global([hidden]) {\\n  display: none; }\\n\\n:global(*), :global(:after), :global(:before) {\\n  box-sizing: border-box;\\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\\n\\n:global([hidden]) {\\n  display: none !important; }\\n\\n:global(body) {\\n  color: #333; }\\n\\n:global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6) {\\n  margin: 0;\\n  padding: 0; }\\n\\n:global(a) {\\n  cursor: pointer;\\n  color: #333;\\n  text-decoration: none; }\\n  :global(a:hover), :global(a:focus), :global(a:active) {\\n    color: #0d0d0d;\\n    text-decoration: underline; }\\n  :global(p) :global(a) {\\n    text-decoration: underline;\\n    display: inline; }\\n\\n:global(svg) {\\n  display: block; }\\n\\n:global(pre) {\\n  margin: 0; }\\n\\n:global(canvas:focus) {\\n  outline: none; }\\n\\n:global(button),\\n:global([type=\\\"button\\\"]),\\n:global([type=\\\"reset\\\"]),\\n:global([type=\\\"submit\\\"]) {\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  background: none;\\n  background-color: #4F4F51;\\n  border: 2px solid #4F4F51;\\n  border-radius: 3px;\\n  color: #FFF;\\n  cursor: pointer;\\n  display: block;\\n  font-size: 16px;\\n  line-height: 100%;\\n  text-align: center;\\n  outline: none;\\n  padding: 7px;\\n  transition: transform 0.1s, background 0.4s, border-color 0.4s, color 0.4s, box-shadow 0.4s; }\\n  :global(button:hover), :global(button:focus), :global(button:active), :global([type=\\\"button\\\"]:hover), :global([type=\\\"button\\\"]:focus), :global([type=\\\"button\\\"]:active), :global([type=\\\"reset\\\"]:hover), :global([type=\\\"reset\\\"]:focus), :global([type=\\\"reset\\\"]:active), :global([type=\\\"submit\\\"]:hover), :global([type=\\\"submit\\\"]:focus), :global([type=\\\"submit\\\"]:active) {\\n    background-color: #29292a;\\n    border-color: #29292a;\\n    outline: none;\\n    color: #FFF;\\n    text-decoration: none; }\\n  :global(button:active),\\n  :global([type=\\\"button\\\"]:active),\\n  :global([type=\\\"reset\\\"]:active),\\n  :global([type=\\\"submit\\\"]:active) {\\n    transform: scale(0.96); }\\n  :global(button:disabled),\\n  :global([type=\\\"button\\\"]:disabled),\\n  :global([type=\\\"reset\\\"]:disabled),\\n  :global([type=\\\"submit\\\"]:disabled) {\\n    cursor: default !important;\\n    border: 2px solid #EAEAEA;\\n    background: repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);\\n    background-color: #c4c4c4;\\n    color: #888888;\\n    transform: scale(1); }\\n    :global(button:disabled:hover), :global(button:disabled:focus), :global(button:disabled:active), :global([type=\\\"button\\\"]:disabled:hover), :global([type=\\\"button\\\"]:disabled:focus), :global([type=\\\"button\\\"]:disabled:active), :global([type=\\\"reset\\\"]:disabled:hover), :global([type=\\\"reset\\\"]:disabled:focus), :global([type=\\\"reset\\\"]:disabled:active), :global([type=\\\"submit\\\"]:disabled:hover), :global([type=\\\"submit\\\"]:disabled:focus), :global([type=\\\"submit\\\"]:disabled:active) {\\n      cursor: default !important;\\n      border: 2px solid #EAEAEA;\\n      background: repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);\\n      background-color: #c4c4c4;\\n      color: #888888;\\n      transform: scale(1); }\\n  :global(button.button-link), :global(button.button-link:disabled), :global([type=\\\"button\\\"].button-link), :global([type=\\\"button\\\"].button-link:disabled), :global([type=\\\"reset\\\"].button-link), :global([type=\\\"reset\\\"].button-link:disabled), :global([type=\\\"submit\\\"].button-link), :global([type=\\\"submit\\\"].button-link:disabled) {\\n    cursor: pointer;\\n    color: #333;\\n    text-decoration: none;\\n    border: none;\\n    outline: none;\\n    padding: 0;\\n    background: none;\\n    color: inherit;\\n    font-weight: inherit;\\n    font-size: inherit;\\n    text-transform: none; }\\n    :global(button.button-link:hover), :global(button.button-link:focus), :global(button.button-link:active), :global(button.button-link:disabled:hover), :global(button.button-link:disabled:focus), :global(button.button-link:disabled:active), :global([type=\\\"button\\\"].button-link:hover), :global([type=\\\"button\\\"].button-link:focus), :global([type=\\\"button\\\"].button-link:active), :global([type=\\\"button\\\"].button-link:disabled:hover), :global([type=\\\"button\\\"].button-link:disabled:focus), :global([type=\\\"button\\\"].button-link:disabled:active), :global([type=\\\"reset\\\"].button-link:hover), :global([type=\\\"reset\\\"].button-link:focus), :global([type=\\\"reset\\\"].button-link:active), :global([type=\\\"reset\\\"].button-link:disabled:hover), :global([type=\\\"reset\\\"].button-link:disabled:focus), :global([type=\\\"reset\\\"].button-link:disabled:active), :global([type=\\\"submit\\\"].button-link:hover), :global([type=\\\"submit\\\"].button-link:focus), :global([type=\\\"submit\\\"].button-link:active), :global([type=\\\"submit\\\"].button-link:disabled:hover), :global([type=\\\"submit\\\"].button-link:disabled:focus), :global([type=\\\"submit\\\"].button-link:disabled:active) {\\n      color: #0d0d0d;\\n      text-decoration: underline; }\\n    :global(p) :global(button.button-link), :global(p) :global(button.button-link:disabled), :global(p\\n)    :global([type=\\\"button\\\"].button-link), :global(p\\n)    :global([type=\\\"button\\\"].button-link:disabled), :global(p\\n)    :global([type=\\\"reset\\\"].button-link), :global(p\\n)    :global([type=\\\"reset\\\"].button-link:disabled), :global(p\\n)    :global([type=\\\"submit\\\"].button-link), :global(p\\n)    :global([type=\\\"submit\\\"].button-link:disabled) {\\n      text-decoration: underline;\\n      display: inline; }\\n  :global(button.button-link:disabled), :global(button.button-link:disabled:hover), :global(button.button-link:disabled:focus), :global(button.button-link:disabled:active), :global([type=\\\"button\\\"].button-link:disabled), :global([type=\\\"button\\\"].button-link:disabled:hover), :global([type=\\\"button\\\"].button-link:disabled:focus), :global([type=\\\"button\\\"].button-link:disabled:active), :global([type=\\\"reset\\\"].button-link:disabled), :global([type=\\\"reset\\\"].button-link:disabled:hover), :global([type=\\\"reset\\\"].button-link:disabled:focus), :global([type=\\\"reset\\\"].button-link:disabled:active), :global([type=\\\"submit\\\"].button-link:disabled), :global([type=\\\"submit\\\"].button-link:disabled:hover), :global([type=\\\"submit\\\"].button-link:disabled:focus), :global([type=\\\"submit\\\"].button-link:disabled:active) {\\n    color: #999999;\\n    text-decoration: none; }\\n  :global(button.button-none), :global(button.button-none:focus), :global(button.button-none:active), :global(button.button-none:hover), :global(button.button-none:disabled), :global(button.button-none:disabled:hover), :global([type=\\\"button\\\"].button-none), :global([type=\\\"button\\\"].button-none:focus), :global([type=\\\"button\\\"].button-none:active), :global([type=\\\"button\\\"].button-none:hover), :global([type=\\\"button\\\"].button-none:disabled), :global([type=\\\"button\\\"].button-none:disabled:hover), :global([type=\\\"reset\\\"].button-none), :global([type=\\\"reset\\\"].button-none:focus), :global([type=\\\"reset\\\"].button-none:active), :global([type=\\\"reset\\\"].button-none:hover), :global([type=\\\"reset\\\"].button-none:disabled), :global([type=\\\"reset\\\"].button-none:disabled:hover), :global([type=\\\"submit\\\"].button-none), :global([type=\\\"submit\\\"].button-none:focus), :global([type=\\\"submit\\\"].button-none:active), :global([type=\\\"submit\\\"].button-none:hover), :global([type=\\\"submit\\\"].button-none:disabled), :global([type=\\\"submit\\\"].button-none:disabled:hover) {\\n    border: none;\\n    outline: none;\\n    margin: 0;\\n    padding: 0;\\n    background: none;\\n    color: inherit;\\n    font-weight: inherit;\\n    font-size: inherit;\\n    text-transform: none; }\\n\\n:global(fieldset) {\\n  border: none;\\n  margin: 0;\\n  padding: 0; }\\n\\n:global(legend) {\\n  color: #9E9E9E;\\n  font-size: 14px;\\n  margin: 0;\\n  padding: 0;\\n  margin-bottom: 10px;\\n  display: block; }\\n\\n:global(label),\\n:global(.label) {\\n  color: #9E9E9E;\\n  font-size: 14px;\\n  margin-bottom: 20px;\\n  width: 100%; }\\n\\n:global(label) {\\n  cursor: pointer;\\n  display: flex;\\n  flex-direction: column; }\\n  :global(label.centered) {\\n    justify-content: center;\\n    align-items: center;\\n    align-content: center;\\n    height: 100%; }\\n  :global(label.centered-column) {\\n    justify-content: center;\\n    align-items: center;\\n    align-content: center;\\n    flex-direction: column;\\n    height: 100%; }\\n  :global(label.row-start) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: flex-start; }\\n  :global(label.row-center) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: center; }\\n  :global(label.row-end) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: flex-end; }\\n  :global(label.row-between) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-between; }\\n  :global(label.row-around) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-around; }\\n  :global(label.row-evenly) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-evenly; }\\n  :global(label.column-start) {\\n    flex-direction: column;\\n    align-items: flex-start;\\n    align-content: flex-start;\\n    justify-content: flex-start; }\\n  :global(label.column-center) {\\n    flex-direction: column;\\n    align-items: center;\\n    align-content: center;\\n    justify-content: flex-start; }\\n  :global(label.column-end) {\\n    flex-direction: column;\\n    align-items: flex-end;\\n    align-content: flex-end;\\n    justify-content: flex-start; }\\n  :global(label.inline) {\\n    display: inline-flex; }\\n  :global(label.wrap) {\\n    flex-wrap: wrap; }\\n  :global(label.wrap-reverse) {\\n    flex-wrap: wrap-reverse; }\\n  :global(label.nowrap) {\\n    flex-wrap: nowrap; }\\n  :global(label.direction-row) {\\n    flex-direction: row; }\\n  :global(label.direction-reverse) {\\n    flex-direction: row-reverse; }\\n  :global(label.direction-column) {\\n    flex-direction: column; }\\n  :global(label.direction-column-reverse) {\\n    flex-direction: column-reverse; }\\n  :global(label.justify-start) {\\n    justify-content: flex-start; }\\n  :global(label.justify-end) {\\n    justify-content: flex-end; }\\n  :global(label.justify-center) {\\n    justify-content: center; }\\n  :global(label.justify-between) {\\n    justify-content: space-between; }\\n  :global(label.justify-around) {\\n    justify-content: space-around; }\\n  :global(label.justify-evenly) {\\n    justify-content: space-evenly; }\\n  :global(label.items-start) {\\n    align-items: flex-start; }\\n  :global(label.items-end) {\\n    align-items: flex-end; }\\n  :global(label.items-center) {\\n    align-items: center; }\\n  :global(label.items-stretch) {\\n    align-items: stretch; }\\n  :global(label.items-baseline) {\\n    align-items: baseline; }\\n  :global(label.content-start) {\\n    align-content: flex-start; }\\n  :global(label.content-end) {\\n    align-content: flex-end; }\\n  :global(label.content-center) {\\n    align-content: center; }\\n  :global(label.content-between) {\\n    align-content: space-between; }\\n  :global(label.content-around) {\\n    align-content: space-around; }\\n  :global(label.content-evenly) {\\n    align-content: space-evenly; }\\n\\n:global(input) {\\n  background: transparent;\\n  border: none;\\n  border-radius: 0;\\n  border-bottom: 2px solid #9E9E9E;\\n  padding: 8px 5px 4px;\\n  color: #333;\\n  display: block;\\n  font-size: 15px;\\n  width: 100%;\\n  transition: border-color 0.4s, color 0.4s; }\\n  :global(input::-moz-placeholder) {\\n    opacity: 1;\\n    color: #9E9E9E; }\\n  :global(input:-ms-input-placeholder) {\\n    opacity: 1;\\n    color: #9E9E9E; }\\n  :global(input::placeholder) {\\n    opacity: 1;\\n    color: #9E9E9E; }\\n  :global(input:-moz-placeholder-shown) {\\n    color: #9E9E9E; }\\n  :global(input:-ms-input-placeholder) {\\n    color: #9E9E9E; }\\n  :global(input:placeholder-shown) {\\n    color: #9E9E9E; }\\n  :global(input::-webkit-input-placeholder) {\\n    color: #9E9E9E; }\\n  :global(input::-moz-placeholder) {\\n    opacity: 1;\\n    color: #9E9E9E; }\\n  :global(input:-ms-input-placeholder) {\\n    color: #9E9E9E; }\\n  :global(input:hover), :global(input:focus) {\\n    border-color: #4F4F51;\\n    outline: none; }\\n  :global(input:disabled) {\\n    border-bottom: 1px dotted #9E9E9E;\\n    color: #9E9E9E;\\n    cursor: default !important;\\n    margin-bottom: 1px; }\\n  :global(input[type=\\\"number\\\"]) {\\n    -moz-appearance: textfield; }\\n    :global(input[type=\\\"number\\\"]::-webkit-inner-spin-button), :global(input[type=\\\"number\\\"]::-webkit-outer-spin-button) {\\n      -webkit-appearance: none;\\n      margin: 0; }\\n  :global(input[type=\\\"color\\\"]) {\\n    height: 31px;\\n    cursor: pointer; }\\n    :global(input[type=\\\"color\\\"]::-webkit-color-swatch-wrapper) {\\n      padding: 0; }\\n    :global(input[type=\\\"color\\\"]::-webkit-color-swatch) {\\n      border-color: #9E9E9E;\\n      border-radius: 3px; }\\n  :global(input[type=\\\"checkbox\\\"]) {\\n    border-radius: 2px;\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n         appearance: none;\\n    flex-shrink: 0;\\n    width: 20px;\\n    height: 20px;\\n    margin: 0 5px 0 0;\\n    cursor: pointer;\\n    border: 2px solid #4F4F51;\\n    transition: transform 0.4s, background 0.4s, border-color 0.4s, box-shadow 0.4s; }\\n    :global(input[type=\\\"checkbox\\\"]:hover), :global(input[type=\\\"checkbox\\\"]:focus) {\\n      transform: scale(1.15); }\\n    :global(input[type=\\\"checkbox\\\"]:disabled) {\\n      cursor: default !important;\\n      box-shadow: none;\\n      border-color: #EAEAEA; }\\n    :global(input[type=\\\"checkbox\\\"]:checked) {\\n      background-color: #4F4F51;\\n      background-repeat: no-repeat;\\n      background-position: center;\\n      background-size: contain;\\n      background-image: url(\\\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='8 8 36 36' version='1.1' xml:space='preserve'><path d='M14.1 27.2l7.1 7.2 16.7-16.8' fill='none' stroke='rgba(255,255,255,1)' stroke-width='5'/></svg>\\\"); }\\n      :global(input[type=\\\"checkbox\\\"]:checked:disabled) {\\n        border-color: #EAEAEA;\\n        background-color: #c4c4c4;\\n        background-image: url(\\\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='8 8 36 36' version='1.1' xml:space='preserve'><path d='M14.1 27.2l7.1 7.2 16.7-16.8' fill='none' stroke='rgba(79,79,81,1)' stroke-width='5'/></svg>\\\"), repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px); }\\n  :global(input[type=\\\"radio\\\"]) {\\n    border-radius: 50%;\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n         appearance: none;\\n    flex-shrink: 0;\\n    width: 20px;\\n    height: 20px;\\n    margin: 0 5px 0 0;\\n    cursor: pointer;\\n    border: 2px solid #4F4F51;\\n    transition: transform 0.4s, background 0.4s, border-color 0.4s, box-shadow 0.4s; }\\n    :global(input[type=\\\"radio\\\"]:hover), :global(input[type=\\\"radio\\\"]:focus) {\\n      transform: scale(1.15); }\\n    :global(input[type=\\\"radio\\\"]:disabled) {\\n      cursor: default !important;\\n      box-shadow: none;\\n      border-color: #EAEAEA; }\\n    :global(input[type=\\\"radio\\\"]:checked) {\\n      background-color: #4F4F51;\\n      box-shadow: inset 0 0 0 2px #FFF; }\\n      :global(input[type=\\\"radio\\\"]:checked:disabled) {\\n        box-shadow: inset 0 0 0 2px #FFF;\\n        border-color: #EAEAEA;\\n        background-color: #EAEAEA; }\\n  :global(input[type=\\\"range\\\"]) {\\n    border: none;\\n    padding: 13px 0;\\n    -webkit-appearance: none;\\n    width: 100%;\\n    cursor: pointer; }\\n    :global(input[type=\\\"range\\\"]:disabled) {\\n      margin-bottom: 0; }\\n    :global(input[type=\\\"range\\\"]::-webkit-slider-thumb) {\\n      -webkit-appearance: none; }\\n    :global(input[type=\\\"range\\\"]::-ms-track) {\\n      width: 100%;\\n      cursor: pointer;\\n      background: transparent;\\n      border-color: transparent;\\n      color: transparent; }\\n    :global(input[type=\\\"range\\\"]::-moz-focus-outer) {\\n      border: 0; }\\n    :global(input[type=\\\"range\\\"]::-webkit-slider-thumb) {\\n      -webkit-appearance: none;\\n      margin-top: -8px;\\n      cursor: pointer;\\n      background: #4F4F51;\\n      height: 18px;\\n      width: 18px;\\n      border-radius: 50%;\\n      border: 0;\\n      -webkit-transition: transform 0.4s;\\n      transition: transform 0.4s; }\\n    :global(input[type=\\\"range\\\"]::-moz-range-thumb) {\\n      cursor: pointer;\\n      background: #4F4F51;\\n      height: 18px;\\n      width: 18px;\\n      border-radius: 50%;\\n      border: 0;\\n      -moz-transition: transform 0.4s;\\n      transition: transform 0.4s; }\\n    :global(input[type=\\\"range\\\"]::-ms-thumb) {\\n      cursor: pointer;\\n      background: #4F4F51;\\n      height: 18px;\\n      width: 18px;\\n      border-radius: 50%;\\n      border: 0;\\n      -ms-transition: transform 0.4s;\\n      transition: transform 0.4s;\\n      margin-top: -1px; }\\n    :global(input[type=\\\"range\\\"]:active::-webkit-slider-thumb), :global(input[type=\\\"range\\\"]:hover::-webkit-slider-thumb), :global(input[type=\\\"range\\\"]:focus::-webkit-slider-thumb) {\\n      outline: none;\\n      transform: scale(1.15); }\\n    :global(input[type=\\\"range\\\"]:active::-moz-range-thumb), :global(input[type=\\\"range\\\"]:hover::-moz-range-thumb), :global(input[type=\\\"range\\\"]:focus::-moz-range-thumb) {\\n      outline: none;\\n      transform: scale(1.15); }\\n    :global(input[type=\\\"range\\\"]:active::-ms-thumb), :global(input[type=\\\"range\\\"]:hover::-ms-thumb), :global(input[type=\\\"range\\\"]:focus::-ms-thumb) {\\n      outline: none;\\n      transform: scale(1.15); }\\n    :global(input[type=\\\"range\\\"]:disabled::-webkit-slider-thumb) {\\n      cursor: default !important;\\n      background: repeating-linear-gradient(45deg, #dddddd, #dddddd 2px, #FFF 2px, #FFF 4px); }\\n    :global(input[type=\\\"range\\\"]:disabled::-moz-range-thumb) {\\n      cursor: default !important;\\n      background: repeating-linear-gradient(45deg, #dddddd, #dddddd 2px, #FFF 2px, #FFF 4px); }\\n    :global(input[type=\\\"range\\\"]:disabled::-ms-thumb) {\\n      cursor: default !important;\\n      background: repeating-linear-gradient(45deg, #dddddd, #dddddd 2px, #FFF 2px, #FFF 4px); }\\n    :global(input[type=\\\"range\\\"]::-webkit-slider-runnable-track) {\\n      width: 100%;\\n      height: 3px;\\n      cursor: pointer;\\n      border-radius: 2px;\\n      background: #9E9E9E; }\\n    :global(input[type=\\\"range\\\"]:active::-webkit-slider-runnable-track) {\\n      background: #9E9E9E;\\n      -webkit-transition: background 0.4s;\\n      transition: background 0.4s; }\\n    :global(input[type=\\\"range\\\"]:disabled::-webkit-slider-runnable-track) {\\n      cursor: default !important; }\\n    :global(input[type=\\\"range\\\"]::-moz-range-track) {\\n      width: 100%;\\n      height: 3px;\\n      cursor: pointer;\\n      border-radius: 2px;\\n      background: #9E9E9E; }\\n    :global(input[type=\\\"range\\\"]:active::-moz-range-track) {\\n      background: #9E9E9E;\\n      -moz-transition: background 0.4s;\\n      transition: background 0.4s; }\\n    :global(input[type=\\\"range\\\"]:disabled::-moz-range-track) {\\n      cursor: default !important; }\\n    :global(input[type=\\\"range\\\"]::-ms-track) {\\n      width: 100%;\\n      height: 3px;\\n      cursor: pointer;\\n      border-radius: 2px;\\n      background: transparent;\\n      border-color: transparent;\\n      border-width: 16px 0;\\n      color: transparent; }\\n    :global(input[type=\\\"range\\\"]:disabled::-ms-track) {\\n      cursor: default !important; }\\n    :global(input[type=\\\"range\\\"]::-ms-fill-lower) {\\n      background: #9E9E9E;\\n      border-radius: 2px; }\\n    :global(input[type=\\\"range\\\"]:active::-ms-fill-lower) {\\n      background: #9E9E9E; }\\n    :global(input[type=\\\"range\\\"]::-ms-fill-upper) {\\n      border-radius: 2px;\\n      background: #9E9E9E; }\\n    :global(input[type=\\\"range\\\"]:active::-ms-fill-upper) {\\n      background: #9E9E9E;\\n      -ms-transition: background 0.4s;\\n      transition: background 0.4s; }\\n\\n:global(input::-webkit-file-upload-button) {\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  background: none;\\n  background-color: #4F4F51;\\n  border: 2px solid #4F4F51;\\n  border-radius: 3px;\\n  color: #FFF;\\n  cursor: pointer;\\n  display: block;\\n  font-size: 16px;\\n  line-height: 100%;\\n  text-align: center;\\n  outline: none;\\n  padding: 7px;\\n  -webkit-transition: transform 0.1s, background 0.4s, border-color 0.4s, color 0.4s, box-shadow 0.4s;\\n  transition: transform 0.1s, background 0.4s, border-color 0.4s, color 0.4s, box-shadow 0.4s; }\\n  :global(input::-webkit-file-upload-button:hover), :global(input::-webkit-file-upload-button:focus), :global(input::-webkit-file-upload-button:active) {\\n    background-color: #29292a;\\n    border-color: #29292a;\\n    outline: none;\\n    color: #FFF;\\n    text-decoration: none; }\\n  :global(input::-webkit-file-upload-button:active) {\\n    transform: scale(0.96); }\\n  :global(input::-webkit-file-upload-button:disabled) {\\n    cursor: default !important;\\n    border: 2px solid #EAEAEA;\\n    background: repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);\\n    background-color: #c4c4c4;\\n    color: #888888;\\n    transform: scale(1); }\\n    :global(input::-webkit-file-upload-button:disabled:hover), :global(input::-webkit-file-upload-button:disabled:focus), :global(input::-webkit-file-upload-button:disabled:active) {\\n      cursor: default !important;\\n      border: 2px solid #EAEAEA;\\n      background: repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);\\n      background-color: #c4c4c4;\\n      color: #888888;\\n      transform: scale(1); }\\n\\n:global(input:disabled::-webkit-file-upload-button) {\\n  cursor: default !important;\\n  border: 2px solid #EAEAEA;\\n  background: repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);\\n  background-color: #c4c4c4;\\n  color: #888888;\\n  transform: scale(1); }\\n\\n:global(input::-ms-browse) {\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  background: none;\\n  background-color: #4F4F51;\\n  border: 2px solid #4F4F51;\\n  border-radius: 3px;\\n  color: #FFF;\\n  cursor: pointer;\\n  display: block;\\n  font-size: 16px;\\n  line-height: 100%;\\n  text-align: center;\\n  outline: none;\\n  padding: 7px;\\n  -ms-transition: transform 0.1s, background 0.4s, border-color 0.4s, color 0.4s, box-shadow 0.4s;\\n  transition: transform 0.1s, background 0.4s, border-color 0.4s, color 0.4s, box-shadow 0.4s; }\\n  :global(input::-ms-browse:hover), :global(input::-ms-browse:focus), :global(input::-ms-browse:active) {\\n    background-color: #29292a;\\n    border-color: #29292a;\\n    outline: none;\\n    color: #FFF;\\n    text-decoration: none; }\\n  :global(input::-ms-browse:active) {\\n    transform: scale(0.96); }\\n  :global(input::-ms-browse:disabled) {\\n    cursor: default !important;\\n    border: 2px solid #EAEAEA;\\n    background: repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);\\n    background-color: #c4c4c4;\\n    color: #888888;\\n    transform: scale(1); }\\n    :global(input::-ms-browse:disabled:hover), :global(input::-ms-browse:disabled:focus), :global(input::-ms-browse:disabled:active) {\\n      cursor: default !important;\\n      border: 2px solid #EAEAEA;\\n      background: repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);\\n      background-color: #c4c4c4;\\n      color: #888888;\\n      transform: scale(1); }\\n\\n:global(input:disabled::-ms-browse) {\\n  cursor: default !important;\\n  border: 2px solid #EAEAEA;\\n  background: repeating-linear-gradient(45deg, #dddddd, #dddddd 3px, #FFF 3px, #FFF 6px);\\n  background-color: #c4c4c4;\\n  color: #888888;\\n  transform: scale(1); }\\n\\n:global(select) {\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  background: transparent;\\n  background-image: url(\\\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' version='1.1' xml:space='preserve' stroke-linejoin='round'><g transform='matrix(-0.613836,-7.51732e-17,7.51732e-17,-0.613836,19.9111,16.8669)'><path d='M12.9 2.9L22.7 12.9 3.1 12.9 12.9 2.9Z' fill='rgba(158,158,158,1)'/></g></svg>\\\");\\n  background-position: right center;\\n  background-repeat: no-repeat;\\n  display: block;\\n  border: none;\\n  border-bottom: 2px solid #9E9E9E;\\n  border-radius: 0;\\n  color: #333;\\n  font-size: 15px;\\n  height: 27px;\\n  margin-top: 4px;\\n  padding: 3px 24px 3px 5px;\\n  width: 100%;\\n  cursor: pointer;\\n  transition: border-color 0.4s, color 0.4s, background 0.4s; }\\n  :global(select:hover), :global(select:focus) {\\n    background-image: url(\\\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' version='1.1' xml:space='preserve' stroke-linejoin='round'><g transform='matrix(-0.613836,-7.51732e-17,7.51732e-17,-0.613836,19.9111,16.8669)'><path d='M12.9 2.9L22.7 12.9 3.1 12.9 12.9 2.9Z' fill='rgba(79,79,81,1)'/></g></svg>\\\");\\n    outline: none;\\n    border-color: #4F4F51; }\\n  :global(select:disabled) {\\n    padding-bottom: 4px;\\n    background-image: url(\\\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' version='1.1' xml:space='preserve' stroke-linejoin='round'><g transform='matrix(-0.613836,-7.51732e-17,7.51732e-17,-0.613836,19.9111,16.8669)'><path d='M12.9 2.9L22.7 12.9 3.1 12.9 12.9 2.9Z' fill='rgba(158,158,158,1)'/></g></svg>\\\");\\n    border-bottom: 1px dotted #9E9E9E;\\n    cursor: default !important;\\n    color: #9E9E9E; }\\n\\n:global(textarea) {\\n  background: transparent;\\n  border: none;\\n  border-radius: 0;\\n  border-bottom: 2px solid #9E9E9E;\\n  padding: 8px 5px 4px;\\n  color: #333;\\n  display: block;\\n  font-size: 15px;\\n  width: 100%;\\n  transition: border-color 0.4s, color 0.4s;\\n  min-height: 50px;\\n  resize: vertical; }\\n  :global(textarea::-moz-placeholder) {\\n    opacity: 1;\\n    color: #9E9E9E; }\\n  :global(textarea:-ms-input-placeholder) {\\n    opacity: 1;\\n    color: #9E9E9E; }\\n  :global(textarea::placeholder) {\\n    opacity: 1;\\n    color: #9E9E9E; }\\n  :global(textarea:-moz-placeholder-shown) {\\n    color: #9E9E9E; }\\n  :global(textarea:-ms-input-placeholder) {\\n    color: #9E9E9E; }\\n  :global(textarea:placeholder-shown) {\\n    color: #9E9E9E; }\\n  :global(textarea::-webkit-input-placeholder) {\\n    color: #9E9E9E; }\\n  :global(textarea::-moz-placeholder) {\\n    opacity: 1;\\n    color: #9E9E9E; }\\n  :global(textarea:-ms-input-placeholder) {\\n    color: #9E9E9E; }\\n  :global(textarea:hover), :global(textarea:focus) {\\n    border-color: #4F4F51;\\n    outline: none; }\\n  :global(textarea:disabled) {\\n    border-bottom: 1px dotted #9E9E9E;\\n    color: #9E9E9E;\\n    cursor: default !important;\\n    margin-bottom: 1px; }\\n\\n:global(.frow) {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center; }\\n  :global(.frow) > :global(*) {\\n    max-width: 100%; }\\n  :global(.frow.centered) {\\n    justify-content: center;\\n    align-items: center;\\n    align-content: center;\\n    height: 100%; }\\n  :global(.frow.centered-column) {\\n    justify-content: center;\\n    align-items: center;\\n    align-content: center;\\n    flex-direction: column;\\n    height: 100%; }\\n  :global(.frow.row-start) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: flex-start; }\\n  :global(.frow.row-center) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: center; }\\n  :global(.frow.row-end) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: flex-end; }\\n  :global(.frow.row-between) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-between; }\\n  :global(.frow.row-around) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-around; }\\n  :global(.frow.row-evenly) {\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-evenly; }\\n  :global(.frow.column-start) {\\n    flex-direction: column;\\n    align-items: flex-start;\\n    align-content: flex-start;\\n    justify-content: flex-start; }\\n  :global(.frow.column-center) {\\n    flex-direction: column;\\n    align-items: center;\\n    align-content: center;\\n    justify-content: flex-start; }\\n  :global(.frow.column-end) {\\n    flex-direction: column;\\n    align-items: flex-end;\\n    align-content: flex-end;\\n    justify-content: flex-start; }\\n  :global(.frow.inline) {\\n    display: inline-flex; }\\n  :global(.frow.wrap) {\\n    flex-wrap: wrap; }\\n  :global(.frow.wrap-reverse) {\\n    flex-wrap: wrap-reverse; }\\n  :global(.frow.nowrap) {\\n    flex-wrap: nowrap; }\\n  :global(.frow.direction-row) {\\n    flex-direction: row; }\\n  :global(.frow.direction-reverse) {\\n    flex-direction: row-reverse; }\\n  :global(.frow.direction-column) {\\n    flex-direction: column; }\\n  :global(.frow.direction-column-reverse) {\\n    flex-direction: column-reverse; }\\n  :global(.frow.justify-start) {\\n    justify-content: flex-start; }\\n  :global(.frow.justify-end) {\\n    justify-content: flex-end; }\\n  :global(.frow.justify-center) {\\n    justify-content: center; }\\n  :global(.frow.justify-between) {\\n    justify-content: space-between; }\\n  :global(.frow.justify-around) {\\n    justify-content: space-around; }\\n  :global(.frow.justify-evenly) {\\n    justify-content: space-evenly; }\\n  :global(.frow.items-start) {\\n    align-items: flex-start; }\\n  :global(.frow.items-end) {\\n    align-items: flex-end; }\\n  :global(.frow.items-center) {\\n    align-items: center; }\\n  :global(.frow.items-stretch) {\\n    align-items: stretch; }\\n  :global(.frow.items-baseline) {\\n    align-items: baseline; }\\n  :global(.frow.content-start) {\\n    align-content: flex-start; }\\n  :global(.frow.content-end) {\\n    align-content: flex-end; }\\n  :global(.frow.content-center) {\\n    align-content: center; }\\n  :global(.frow.content-between) {\\n    align-content: space-between; }\\n  :global(.frow.content-around) {\\n    align-content: space-around; }\\n  :global(.frow.content-evenly) {\\n    align-content: space-evenly; }\\n  :global(.frow.gutters) {\\n    margin-left: -15px;\\n    margin-right: -15px; }\\n    :global(.frow.gutters) > :global([class*=col-xs]), :global(.frow.gutters) > :global([class*=col-sm]), :global(.frow.gutters) > :global([class*=col-md]), :global(.frow.gutters) > :global([class*=col-lg]) {\\n      padding-left: 15px;\\n      padding-right: 15px; }\\n  :global(.frow) :global([class*=col-xs]), :global(.frow) :global([class*=col-sm]), :global(.frow) :global([class*=col-md]), :global(.frow) :global([class*=col-lg]) {\\n    width: 100%; }\\n  @media (min-width: 0px) {\\n    :global(.frow) :global(.col-xs-1-1) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-xs-1-2) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-xs-2-2) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-xs-1-3) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-xs-2-3) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-xs-3-3) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-xs-1-4) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-xs-2-4) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-xs-3-4) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-xs-4-4) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-xs-1-5) {\\n      width: 20%; }\\n    :global(.frow) :global(.col-xs-2-5) {\\n      width: 40%; }\\n    :global(.frow) :global(.col-xs-3-5) {\\n      width: 60%; }\\n    :global(.frow) :global(.col-xs-4-5) {\\n      width: 80%; }\\n    :global(.frow) :global(.col-xs-5-5) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-xs-1-6) {\\n      width: 16.66667%; }\\n    :global(.frow) :global(.col-xs-2-6) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-xs-3-6) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-xs-4-6) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-xs-5-6) {\\n      width: 83.33333%; }\\n    :global(.frow) :global(.col-xs-6-6) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-xs-1-7) {\\n      width: 14.28571%; }\\n    :global(.frow) :global(.col-xs-2-7) {\\n      width: 28.57143%; }\\n    :global(.frow) :global(.col-xs-3-7) {\\n      width: 42.85714%; }\\n    :global(.frow) :global(.col-xs-4-7) {\\n      width: 57.14286%; }\\n    :global(.frow) :global(.col-xs-5-7) {\\n      width: 71.42857%; }\\n    :global(.frow) :global(.col-xs-6-7) {\\n      width: 85.71429%; }\\n    :global(.frow) :global(.col-xs-7-7) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-xs-1-8) {\\n      width: 12.5%; }\\n    :global(.frow) :global(.col-xs-2-8) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-xs-3-8) {\\n      width: 37.5%; }\\n    :global(.frow) :global(.col-xs-4-8) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-xs-5-8) {\\n      width: 62.5%; }\\n    :global(.frow) :global(.col-xs-6-8) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-xs-7-8) {\\n      width: 87.5%; }\\n    :global(.frow) :global(.col-xs-8-8) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-xs-1-9) {\\n      width: 11.11111%; }\\n    :global(.frow) :global(.col-xs-2-9) {\\n      width: 22.22222%; }\\n    :global(.frow) :global(.col-xs-3-9) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-xs-4-9) {\\n      width: 44.44444%; }\\n    :global(.frow) :global(.col-xs-5-9) {\\n      width: 55.55556%; }\\n    :global(.frow) :global(.col-xs-6-9) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-xs-7-9) {\\n      width: 77.77778%; }\\n    :global(.frow) :global(.col-xs-8-9) {\\n      width: 88.88889%; }\\n    :global(.frow) :global(.col-xs-9-9) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-xs-1-10) {\\n      width: 10%; }\\n    :global(.frow) :global(.col-xs-2-10) {\\n      width: 20%; }\\n    :global(.frow) :global(.col-xs-3-10) {\\n      width: 30%; }\\n    :global(.frow) :global(.col-xs-4-10) {\\n      width: 40%; }\\n    :global(.frow) :global(.col-xs-5-10) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-xs-6-10) {\\n      width: 60%; }\\n    :global(.frow) :global(.col-xs-7-10) {\\n      width: 70%; }\\n    :global(.frow) :global(.col-xs-8-10) {\\n      width: 80%; }\\n    :global(.frow) :global(.col-xs-9-10) {\\n      width: 90%; }\\n    :global(.frow) :global(.col-xs-10-10) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-xs-1-11) {\\n      width: 9.09091%; }\\n    :global(.frow) :global(.col-xs-2-11) {\\n      width: 18.18182%; }\\n    :global(.frow) :global(.col-xs-3-11) {\\n      width: 27.27273%; }\\n    :global(.frow) :global(.col-xs-4-11) {\\n      width: 36.36364%; }\\n    :global(.frow) :global(.col-xs-5-11) {\\n      width: 45.45455%; }\\n    :global(.frow) :global(.col-xs-6-11) {\\n      width: 54.54545%; }\\n    :global(.frow) :global(.col-xs-7-11) {\\n      width: 63.63636%; }\\n    :global(.frow) :global(.col-xs-8-11) {\\n      width: 72.72727%; }\\n    :global(.frow) :global(.col-xs-9-11) {\\n      width: 81.81818%; }\\n    :global(.frow) :global(.col-xs-10-11) {\\n      width: 90.90909%; }\\n    :global(.frow) :global(.col-xs-11-11) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-xs-1-12) {\\n      width: 8.33333%; }\\n    :global(.frow) :global(.col-xs-2-12) {\\n      width: 16.66667%; }\\n    :global(.frow) :global(.col-xs-3-12) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-xs-4-12) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-xs-5-12) {\\n      width: 41.66667%; }\\n    :global(.frow) :global(.col-xs-6-12) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-xs-7-12) {\\n      width: 58.33333%; }\\n    :global(.frow) :global(.col-xs-8-12) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-xs-9-12) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-xs-10-12) {\\n      width: 83.33333%; }\\n    :global(.frow) :global(.col-xs-11-12) {\\n      width: 91.66667%; }\\n    :global(.frow) :global(.col-xs-12-12) {\\n      width: 100%; } }\\n  @media (min-width: 768px) {\\n    :global(.frow) :global(.col-sm-1-1) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-sm-1-2) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-sm-2-2) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-sm-1-3) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-sm-2-3) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-sm-3-3) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-sm-1-4) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-sm-2-4) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-sm-3-4) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-sm-4-4) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-sm-1-5) {\\n      width: 20%; }\\n    :global(.frow) :global(.col-sm-2-5) {\\n      width: 40%; }\\n    :global(.frow) :global(.col-sm-3-5) {\\n      width: 60%; }\\n    :global(.frow) :global(.col-sm-4-5) {\\n      width: 80%; }\\n    :global(.frow) :global(.col-sm-5-5) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-sm-1-6) {\\n      width: 16.66667%; }\\n    :global(.frow) :global(.col-sm-2-6) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-sm-3-6) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-sm-4-6) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-sm-5-6) {\\n      width: 83.33333%; }\\n    :global(.frow) :global(.col-sm-6-6) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-sm-1-7) {\\n      width: 14.28571%; }\\n    :global(.frow) :global(.col-sm-2-7) {\\n      width: 28.57143%; }\\n    :global(.frow) :global(.col-sm-3-7) {\\n      width: 42.85714%; }\\n    :global(.frow) :global(.col-sm-4-7) {\\n      width: 57.14286%; }\\n    :global(.frow) :global(.col-sm-5-7) {\\n      width: 71.42857%; }\\n    :global(.frow) :global(.col-sm-6-7) {\\n      width: 85.71429%; }\\n    :global(.frow) :global(.col-sm-7-7) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-sm-1-8) {\\n      width: 12.5%; }\\n    :global(.frow) :global(.col-sm-2-8) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-sm-3-8) {\\n      width: 37.5%; }\\n    :global(.frow) :global(.col-sm-4-8) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-sm-5-8) {\\n      width: 62.5%; }\\n    :global(.frow) :global(.col-sm-6-8) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-sm-7-8) {\\n      width: 87.5%; }\\n    :global(.frow) :global(.col-sm-8-8) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-sm-1-9) {\\n      width: 11.11111%; }\\n    :global(.frow) :global(.col-sm-2-9) {\\n      width: 22.22222%; }\\n    :global(.frow) :global(.col-sm-3-9) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-sm-4-9) {\\n      width: 44.44444%; }\\n    :global(.frow) :global(.col-sm-5-9) {\\n      width: 55.55556%; }\\n    :global(.frow) :global(.col-sm-6-9) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-sm-7-9) {\\n      width: 77.77778%; }\\n    :global(.frow) :global(.col-sm-8-9) {\\n      width: 88.88889%; }\\n    :global(.frow) :global(.col-sm-9-9) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-sm-1-10) {\\n      width: 10%; }\\n    :global(.frow) :global(.col-sm-2-10) {\\n      width: 20%; }\\n    :global(.frow) :global(.col-sm-3-10) {\\n      width: 30%; }\\n    :global(.frow) :global(.col-sm-4-10) {\\n      width: 40%; }\\n    :global(.frow) :global(.col-sm-5-10) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-sm-6-10) {\\n      width: 60%; }\\n    :global(.frow) :global(.col-sm-7-10) {\\n      width: 70%; }\\n    :global(.frow) :global(.col-sm-8-10) {\\n      width: 80%; }\\n    :global(.frow) :global(.col-sm-9-10) {\\n      width: 90%; }\\n    :global(.frow) :global(.col-sm-10-10) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-sm-1-11) {\\n      width: 9.09091%; }\\n    :global(.frow) :global(.col-sm-2-11) {\\n      width: 18.18182%; }\\n    :global(.frow) :global(.col-sm-3-11) {\\n      width: 27.27273%; }\\n    :global(.frow) :global(.col-sm-4-11) {\\n      width: 36.36364%; }\\n    :global(.frow) :global(.col-sm-5-11) {\\n      width: 45.45455%; }\\n    :global(.frow) :global(.col-sm-6-11) {\\n      width: 54.54545%; }\\n    :global(.frow) :global(.col-sm-7-11) {\\n      width: 63.63636%; }\\n    :global(.frow) :global(.col-sm-8-11) {\\n      width: 72.72727%; }\\n    :global(.frow) :global(.col-sm-9-11) {\\n      width: 81.81818%; }\\n    :global(.frow) :global(.col-sm-10-11) {\\n      width: 90.90909%; }\\n    :global(.frow) :global(.col-sm-11-11) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-sm-1-12) {\\n      width: 8.33333%; }\\n    :global(.frow) :global(.col-sm-2-12) {\\n      width: 16.66667%; }\\n    :global(.frow) :global(.col-sm-3-12) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-sm-4-12) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-sm-5-12) {\\n      width: 41.66667%; }\\n    :global(.frow) :global(.col-sm-6-12) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-sm-7-12) {\\n      width: 58.33333%; }\\n    :global(.frow) :global(.col-sm-8-12) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-sm-9-12) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-sm-10-12) {\\n      width: 83.33333%; }\\n    :global(.frow) :global(.col-sm-11-12) {\\n      width: 91.66667%; }\\n    :global(.frow) :global(.col-sm-12-12) {\\n      width: 100%; } }\\n  @media (min-width: 992px) {\\n    :global(.frow) :global(.col-md-1-1) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-md-1-2) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-md-2-2) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-md-1-3) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-md-2-3) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-md-3-3) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-md-1-4) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-md-2-4) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-md-3-4) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-md-4-4) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-md-1-5) {\\n      width: 20%; }\\n    :global(.frow) :global(.col-md-2-5) {\\n      width: 40%; }\\n    :global(.frow) :global(.col-md-3-5) {\\n      width: 60%; }\\n    :global(.frow) :global(.col-md-4-5) {\\n      width: 80%; }\\n    :global(.frow) :global(.col-md-5-5) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-md-1-6) {\\n      width: 16.66667%; }\\n    :global(.frow) :global(.col-md-2-6) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-md-3-6) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-md-4-6) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-md-5-6) {\\n      width: 83.33333%; }\\n    :global(.frow) :global(.col-md-6-6) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-md-1-7) {\\n      width: 14.28571%; }\\n    :global(.frow) :global(.col-md-2-7) {\\n      width: 28.57143%; }\\n    :global(.frow) :global(.col-md-3-7) {\\n      width: 42.85714%; }\\n    :global(.frow) :global(.col-md-4-7) {\\n      width: 57.14286%; }\\n    :global(.frow) :global(.col-md-5-7) {\\n      width: 71.42857%; }\\n    :global(.frow) :global(.col-md-6-7) {\\n      width: 85.71429%; }\\n    :global(.frow) :global(.col-md-7-7) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-md-1-8) {\\n      width: 12.5%; }\\n    :global(.frow) :global(.col-md-2-8) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-md-3-8) {\\n      width: 37.5%; }\\n    :global(.frow) :global(.col-md-4-8) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-md-5-8) {\\n      width: 62.5%; }\\n    :global(.frow) :global(.col-md-6-8) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-md-7-8) {\\n      width: 87.5%; }\\n    :global(.frow) :global(.col-md-8-8) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-md-1-9) {\\n      width: 11.11111%; }\\n    :global(.frow) :global(.col-md-2-9) {\\n      width: 22.22222%; }\\n    :global(.frow) :global(.col-md-3-9) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-md-4-9) {\\n      width: 44.44444%; }\\n    :global(.frow) :global(.col-md-5-9) {\\n      width: 55.55556%; }\\n    :global(.frow) :global(.col-md-6-9) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-md-7-9) {\\n      width: 77.77778%; }\\n    :global(.frow) :global(.col-md-8-9) {\\n      width: 88.88889%; }\\n    :global(.frow) :global(.col-md-9-9) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-md-1-10) {\\n      width: 10%; }\\n    :global(.frow) :global(.col-md-2-10) {\\n      width: 20%; }\\n    :global(.frow) :global(.col-md-3-10) {\\n      width: 30%; }\\n    :global(.frow) :global(.col-md-4-10) {\\n      width: 40%; }\\n    :global(.frow) :global(.col-md-5-10) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-md-6-10) {\\n      width: 60%; }\\n    :global(.frow) :global(.col-md-7-10) {\\n      width: 70%; }\\n    :global(.frow) :global(.col-md-8-10) {\\n      width: 80%; }\\n    :global(.frow) :global(.col-md-9-10) {\\n      width: 90%; }\\n    :global(.frow) :global(.col-md-10-10) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-md-1-11) {\\n      width: 9.09091%; }\\n    :global(.frow) :global(.col-md-2-11) {\\n      width: 18.18182%; }\\n    :global(.frow) :global(.col-md-3-11) {\\n      width: 27.27273%; }\\n    :global(.frow) :global(.col-md-4-11) {\\n      width: 36.36364%; }\\n    :global(.frow) :global(.col-md-5-11) {\\n      width: 45.45455%; }\\n    :global(.frow) :global(.col-md-6-11) {\\n      width: 54.54545%; }\\n    :global(.frow) :global(.col-md-7-11) {\\n      width: 63.63636%; }\\n    :global(.frow) :global(.col-md-8-11) {\\n      width: 72.72727%; }\\n    :global(.frow) :global(.col-md-9-11) {\\n      width: 81.81818%; }\\n    :global(.frow) :global(.col-md-10-11) {\\n      width: 90.90909%; }\\n    :global(.frow) :global(.col-md-11-11) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-md-1-12) {\\n      width: 8.33333%; }\\n    :global(.frow) :global(.col-md-2-12) {\\n      width: 16.66667%; }\\n    :global(.frow) :global(.col-md-3-12) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-md-4-12) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-md-5-12) {\\n      width: 41.66667%; }\\n    :global(.frow) :global(.col-md-6-12) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-md-7-12) {\\n      width: 58.33333%; }\\n    :global(.frow) :global(.col-md-8-12) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-md-9-12) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-md-10-12) {\\n      width: 83.33333%; }\\n    :global(.frow) :global(.col-md-11-12) {\\n      width: 91.66667%; }\\n    :global(.frow) :global(.col-md-12-12) {\\n      width: 100%; } }\\n  @media (min-width: 1200px) {\\n    :global(.frow) :global(.col-lg-1-1) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-lg-1-2) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-lg-2-2) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-lg-1-3) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-lg-2-3) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-lg-3-3) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-lg-1-4) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-lg-2-4) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-lg-3-4) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-lg-4-4) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-lg-1-5) {\\n      width: 20%; }\\n    :global(.frow) :global(.col-lg-2-5) {\\n      width: 40%; }\\n    :global(.frow) :global(.col-lg-3-5) {\\n      width: 60%; }\\n    :global(.frow) :global(.col-lg-4-5) {\\n      width: 80%; }\\n    :global(.frow) :global(.col-lg-5-5) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-lg-1-6) {\\n      width: 16.66667%; }\\n    :global(.frow) :global(.col-lg-2-6) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-lg-3-6) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-lg-4-6) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-lg-5-6) {\\n      width: 83.33333%; }\\n    :global(.frow) :global(.col-lg-6-6) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-lg-1-7) {\\n      width: 14.28571%; }\\n    :global(.frow) :global(.col-lg-2-7) {\\n      width: 28.57143%; }\\n    :global(.frow) :global(.col-lg-3-7) {\\n      width: 42.85714%; }\\n    :global(.frow) :global(.col-lg-4-7) {\\n      width: 57.14286%; }\\n    :global(.frow) :global(.col-lg-5-7) {\\n      width: 71.42857%; }\\n    :global(.frow) :global(.col-lg-6-7) {\\n      width: 85.71429%; }\\n    :global(.frow) :global(.col-lg-7-7) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-lg-1-8) {\\n      width: 12.5%; }\\n    :global(.frow) :global(.col-lg-2-8) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-lg-3-8) {\\n      width: 37.5%; }\\n    :global(.frow) :global(.col-lg-4-8) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-lg-5-8) {\\n      width: 62.5%; }\\n    :global(.frow) :global(.col-lg-6-8) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-lg-7-8) {\\n      width: 87.5%; }\\n    :global(.frow) :global(.col-lg-8-8) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-lg-1-9) {\\n      width: 11.11111%; }\\n    :global(.frow) :global(.col-lg-2-9) {\\n      width: 22.22222%; }\\n    :global(.frow) :global(.col-lg-3-9) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-lg-4-9) {\\n      width: 44.44444%; }\\n    :global(.frow) :global(.col-lg-5-9) {\\n      width: 55.55556%; }\\n    :global(.frow) :global(.col-lg-6-9) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-lg-7-9) {\\n      width: 77.77778%; }\\n    :global(.frow) :global(.col-lg-8-9) {\\n      width: 88.88889%; }\\n    :global(.frow) :global(.col-lg-9-9) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-lg-1-10) {\\n      width: 10%; }\\n    :global(.frow) :global(.col-lg-2-10) {\\n      width: 20%; }\\n    :global(.frow) :global(.col-lg-3-10) {\\n      width: 30%; }\\n    :global(.frow) :global(.col-lg-4-10) {\\n      width: 40%; }\\n    :global(.frow) :global(.col-lg-5-10) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-lg-6-10) {\\n      width: 60%; }\\n    :global(.frow) :global(.col-lg-7-10) {\\n      width: 70%; }\\n    :global(.frow) :global(.col-lg-8-10) {\\n      width: 80%; }\\n    :global(.frow) :global(.col-lg-9-10) {\\n      width: 90%; }\\n    :global(.frow) :global(.col-lg-10-10) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-lg-1-11) {\\n      width: 9.09091%; }\\n    :global(.frow) :global(.col-lg-2-11) {\\n      width: 18.18182%; }\\n    :global(.frow) :global(.col-lg-3-11) {\\n      width: 27.27273%; }\\n    :global(.frow) :global(.col-lg-4-11) {\\n      width: 36.36364%; }\\n    :global(.frow) :global(.col-lg-5-11) {\\n      width: 45.45455%; }\\n    :global(.frow) :global(.col-lg-6-11) {\\n      width: 54.54545%; }\\n    :global(.frow) :global(.col-lg-7-11) {\\n      width: 63.63636%; }\\n    :global(.frow) :global(.col-lg-8-11) {\\n      width: 72.72727%; }\\n    :global(.frow) :global(.col-lg-9-11) {\\n      width: 81.81818%; }\\n    :global(.frow) :global(.col-lg-10-11) {\\n      width: 90.90909%; }\\n    :global(.frow) :global(.col-lg-11-11) {\\n      width: 100%; }\\n    :global(.frow) :global(.col-lg-1-12) {\\n      width: 8.33333%; }\\n    :global(.frow) :global(.col-lg-2-12) {\\n      width: 16.66667%; }\\n    :global(.frow) :global(.col-lg-3-12) {\\n      width: 25%; }\\n    :global(.frow) :global(.col-lg-4-12) {\\n      width: 33.33333%; }\\n    :global(.frow) :global(.col-lg-5-12) {\\n      width: 41.66667%; }\\n    :global(.frow) :global(.col-lg-6-12) {\\n      width: 50%; }\\n    :global(.frow) :global(.col-lg-7-12) {\\n      width: 58.33333%; }\\n    :global(.frow) :global(.col-lg-8-12) {\\n      width: 66.66667%; }\\n    :global(.frow) :global(.col-lg-9-12) {\\n      width: 75%; }\\n    :global(.frow) :global(.col-lg-10-12) {\\n      width: 83.33333%; }\\n    :global(.frow) :global(.col-lg-11-12) {\\n      width: 91.66667%; }\\n    :global(.frow) :global(.col-lg-12-12) {\\n      width: 100%; } }\\n\\n:global(.frow-container) {\\n  width: 100%;\\n  margin-right: auto;\\n  margin-left: auto;\\n  padding-left: 15px;\\n  padding-right: 15px; }\\n\\n@media (min-width: 768px) {\\n  :global(.frow-container) {\\n    max-width: 750px; } }\\n\\n@media (min-width: 992px) {\\n  :global(.frow-container) {\\n    max-width: 970px; } }\\n\\n@media (min-width: 1200px) {\\n  :global(.frow-container) {\\n    max-width: 1170px; } }\\n\\n:global(.visible-xs), :global(.visible-sm), :global(.visible-md), :global(.visible-lg) {\\n  display: none !important; }\\n\\n:global(.hidden-xs), :global(.hidden-sm), :global(.hidden-md), :global(.hidden-lg) {\\n  display: block !important; }\\n\\n:global(.frow.hidden-xs), :global(.frow.hidden-sm), :global(.frow.hidden-md), :global(.frow.hidden-lg) {\\n  display: flex !important; }\\n\\n@media (max-width: 767px) {\\n  :global(.visible-xs) {\\n    display: block !important; }\\n  :global(.frow.visible-xs) {\\n    display: flex !important; }\\n  :global(.hidden-xs),\\n  :global(.frow.hidden-xs) {\\n    display: none !important; } }\\n\\n@media (min-width: 768px) and (max-width: 991px) {\\n  :global(.visible-sm) {\\n    display: block !important; }\\n  :global(.frow.visible-sm) {\\n    display: flex !important; }\\n  :global(.hidden-sm),\\n  :global(.frow.hidden-sm) {\\n    display: none !important; } }\\n\\n@media (min-width: 992px) and (max-width: 1199px) {\\n  :global(.visible-md) {\\n    display: block !important; }\\n  :global(.frow.visible-md) {\\n    display: flex !important; }\\n  :global(.hidden-md),\\n  :global(.frow.hidden-md) {\\n    display: none !important; } }\\n\\n@media (min-width: 1200px) {\\n  :global(.visible-lg) {\\n    display: block !important; }\\n  :global(.frow.visible-lg) {\\n    display: flex !important; }\\n  :global(.hidden-lg),\\n  :global(.frow.hidden-lg) {\\n    display: none !important; } }\\n\\n@media (max-width: 767px) {\\n  :global(.frow.direction-row-xs) {\\n    flex-direction: row; }\\n  :global(.frow.direction-reverse-xs) {\\n    flex-direction: row-reverse; }\\n  :global(.frow.direction-column-xs) {\\n    flex-direction: column; }\\n  :global(.frow.direction-column-reverse-xs) {\\n    flex-direction: column-reverse; } }\\n\\n@media (min-width: 768px) and (max-width: 991px) {\\n  :global(.frow.direction-row-sm) {\\n    flex-direction: row; }\\n  :global(.frow.direction-reverse-sm) {\\n    flex-direction: row-reverse; }\\n  :global(.frow.direction-column-sm) {\\n    flex-direction: column; }\\n  :global(.frow.direction-column-reverse-sm) {\\n    flex-direction: column-reverse; } }\\n\\n@media (min-width: 992px) and (max-width: 1199px) {\\n  :global(.frow.direction-row-md) {\\n    flex-direction: row; }\\n  :global(.frow.direction-reverse-md) {\\n    flex-direction: row-reverse; }\\n  :global(.frow.direction-column-md) {\\n    flex-direction: column; }\\n  :global(.frow.direction-column-reverse-md) {\\n    flex-direction: column-reverse; } }\\n\\n@media (min-width: 1200px) {\\n  :global(.frow.direction-row-lg) {\\n    flex-direction: row; }\\n  :global(.frow.direction-reverse-lg) {\\n    flex-direction: row-reverse; }\\n  :global(.frow.direction-column-lg) {\\n    flex-direction: column; }\\n  :global(.frow.direction-column-reverse-lg) {\\n    flex-direction: column-reverse; } }\\n\\n:global(.m-0) {\\n  margin: 0px !important; }\\n\\n:global(.m-5) {\\n  margin: 5px !important; }\\n\\n:global(.m-10) {\\n  margin: 10px !important; }\\n\\n:global(.m-15) {\\n  margin: 15px !important; }\\n\\n:global(.m-20) {\\n  margin: 20px !important; }\\n\\n:global(.m-25) {\\n  margin: 25px !important; }\\n\\n:global(.m-30) {\\n  margin: 30px !important; }\\n\\n:global(.m-40) {\\n  margin: 40px !important; }\\n\\n:global(.m-50) {\\n  margin: 50px !important; }\\n\\n:global(.m-60) {\\n  margin: 60px !important; }\\n\\n:global(.m-70) {\\n  margin: 70px !important; }\\n\\n:global(.m-80) {\\n  margin: 80px !important; }\\n\\n:global(.m-90) {\\n  margin: 90px !important; }\\n\\n:global(.m-100) {\\n  margin: 100px !important; }\\n\\n:global(.m-auto) {\\n  margin: auto !important; }\\n\\n:global(.mx-0) {\\n  margin-right: 0px !important;\\n  margin-left: 0px !important; }\\n\\n:global(.mx-5) {\\n  margin-right: 5px !important;\\n  margin-left: 5px !important; }\\n\\n:global(.mx-10) {\\n  margin-right: 10px !important;\\n  margin-left: 10px !important; }\\n\\n:global(.mx-15) {\\n  margin-right: 15px !important;\\n  margin-left: 15px !important; }\\n\\n:global(.mx-20) {\\n  margin-right: 20px !important;\\n  margin-left: 20px !important; }\\n\\n:global(.mx-25) {\\n  margin-right: 25px !important;\\n  margin-left: 25px !important; }\\n\\n:global(.mx-30) {\\n  margin-right: 30px !important;\\n  margin-left: 30px !important; }\\n\\n:global(.mx-40) {\\n  margin-right: 40px !important;\\n  margin-left: 40px !important; }\\n\\n:global(.mx-50) {\\n  margin-right: 50px !important;\\n  margin-left: 50px !important; }\\n\\n:global(.mx-60) {\\n  margin-right: 60px !important;\\n  margin-left: 60px !important; }\\n\\n:global(.mx-70) {\\n  margin-right: 70px !important;\\n  margin-left: 70px !important; }\\n\\n:global(.mx-80) {\\n  margin-right: 80px !important;\\n  margin-left: 80px !important; }\\n\\n:global(.mx-90) {\\n  margin-right: 90px !important;\\n  margin-left: 90px !important; }\\n\\n:global(.mx-100) {\\n  margin-right: 100px !important;\\n  margin-left: 100px !important; }\\n\\n:global(.mx-auto) {\\n  margin-right: auto !important;\\n  margin-left: auto !important; }\\n\\n:global(.my-0) {\\n  margin-top: 0px !important;\\n  margin-bottom: 0px !important; }\\n\\n:global(.my-5) {\\n  margin-top: 5px !important;\\n  margin-bottom: 5px !important; }\\n\\n:global(.my-10) {\\n  margin-top: 10px !important;\\n  margin-bottom: 10px !important; }\\n\\n:global(.my-15) {\\n  margin-top: 15px !important;\\n  margin-bottom: 15px !important; }\\n\\n:global(.my-20) {\\n  margin-top: 20px !important;\\n  margin-bottom: 20px !important; }\\n\\n:global(.my-25) {\\n  margin-top: 25px !important;\\n  margin-bottom: 25px !important; }\\n\\n:global(.my-30) {\\n  margin-top: 30px !important;\\n  margin-bottom: 30px !important; }\\n\\n:global(.my-40) {\\n  margin-top: 40px !important;\\n  margin-bottom: 40px !important; }\\n\\n:global(.my-50) {\\n  margin-top: 50px !important;\\n  margin-bottom: 50px !important; }\\n\\n:global(.my-60) {\\n  margin-top: 60px !important;\\n  margin-bottom: 60px !important; }\\n\\n:global(.my-70) {\\n  margin-top: 70px !important;\\n  margin-bottom: 70px !important; }\\n\\n:global(.my-80) {\\n  margin-top: 80px !important;\\n  margin-bottom: 80px !important; }\\n\\n:global(.my-90) {\\n  margin-top: 90px !important;\\n  margin-bottom: 90px !important; }\\n\\n:global(.my-100) {\\n  margin-top: 100px !important;\\n  margin-bottom: 100px !important; }\\n\\n:global(.my-auto) {\\n  margin-top: auto !important;\\n  margin-bottom: auto !important; }\\n\\n:global(.mt-0) {\\n  margin-top: 0px !important; }\\n\\n:global(.mt-5) {\\n  margin-top: 5px !important; }\\n\\n:global(.mt-10) {\\n  margin-top: 10px !important; }\\n\\n:global(.mt-15) {\\n  margin-top: 15px !important; }\\n\\n:global(.mt-20) {\\n  margin-top: 20px !important; }\\n\\n:global(.mt-25) {\\n  margin-top: 25px !important; }\\n\\n:global(.mt-30) {\\n  margin-top: 30px !important; }\\n\\n:global(.mt-40) {\\n  margin-top: 40px !important; }\\n\\n:global(.mt-50) {\\n  margin-top: 50px !important; }\\n\\n:global(.mt-60) {\\n  margin-top: 60px !important; }\\n\\n:global(.mt-70) {\\n  margin-top: 70px !important; }\\n\\n:global(.mt-80) {\\n  margin-top: 80px !important; }\\n\\n:global(.mt-90) {\\n  margin-top: 90px !important; }\\n\\n:global(.mt-100) {\\n  margin-top: 100px !important; }\\n\\n:global(.mt-auto) {\\n  margin-top: auto !important; }\\n\\n:global(.mr-0) {\\n  margin-right: 0px !important; }\\n\\n:global(.mr-5) {\\n  margin-right: 5px !important; }\\n\\n:global(.mr-10) {\\n  margin-right: 10px !important; }\\n\\n:global(.mr-15) {\\n  margin-right: 15px !important; }\\n\\n:global(.mr-20) {\\n  margin-right: 20px !important; }\\n\\n:global(.mr-25) {\\n  margin-right: 25px !important; }\\n\\n:global(.mr-30) {\\n  margin-right: 30px !important; }\\n\\n:global(.mr-40) {\\n  margin-right: 40px !important; }\\n\\n:global(.mr-50) {\\n  margin-right: 50px !important; }\\n\\n:global(.mr-60) {\\n  margin-right: 60px !important; }\\n\\n:global(.mr-70) {\\n  margin-right: 70px !important; }\\n\\n:global(.mr-80) {\\n  margin-right: 80px !important; }\\n\\n:global(.mr-90) {\\n  margin-right: 90px !important; }\\n\\n:global(.mr-100) {\\n  margin-right: 100px !important; }\\n\\n:global(.mr-auto) {\\n  margin-right: auto !important; }\\n\\n:global(.mb-0) {\\n  margin-bottom: 0px !important; }\\n\\n:global(.mb-5) {\\n  margin-bottom: 5px !important; }\\n\\n:global(.mb-10) {\\n  margin-bottom: 10px !important; }\\n\\n:global(.mb-15) {\\n  margin-bottom: 15px !important; }\\n\\n:global(.mb-20) {\\n  margin-bottom: 20px !important; }\\n\\n:global(.mb-25) {\\n  margin-bottom: 25px !important; }\\n\\n:global(.mb-30) {\\n  margin-bottom: 30px !important; }\\n\\n:global(.mb-40) {\\n  margin-bottom: 40px !important; }\\n\\n:global(.mb-50) {\\n  margin-bottom: 50px !important; }\\n\\n:global(.mb-60) {\\n  margin-bottom: 60px !important; }\\n\\n:global(.mb-70) {\\n  margin-bottom: 70px !important; }\\n\\n:global(.mb-80) {\\n  margin-bottom: 80px !important; }\\n\\n:global(.mb-90) {\\n  margin-bottom: 90px !important; }\\n\\n:global(.mb-100) {\\n  margin-bottom: 100px !important; }\\n\\n:global(.mb-auto) {\\n  margin-bottom: auto !important; }\\n\\n:global(.ml-0) {\\n  margin-left: 0px !important; }\\n\\n:global(.ml-5) {\\n  margin-left: 5px !important; }\\n\\n:global(.ml-10) {\\n  margin-left: 10px !important; }\\n\\n:global(.ml-15) {\\n  margin-left: 15px !important; }\\n\\n:global(.ml-20) {\\n  margin-left: 20px !important; }\\n\\n:global(.ml-25) {\\n  margin-left: 25px !important; }\\n\\n:global(.ml-30) {\\n  margin-left: 30px !important; }\\n\\n:global(.ml-40) {\\n  margin-left: 40px !important; }\\n\\n:global(.ml-50) {\\n  margin-left: 50px !important; }\\n\\n:global(.ml-60) {\\n  margin-left: 60px !important; }\\n\\n:global(.ml-70) {\\n  margin-left: 70px !important; }\\n\\n:global(.ml-80) {\\n  margin-left: 80px !important; }\\n\\n:global(.ml-90) {\\n  margin-left: 90px !important; }\\n\\n:global(.ml-100) {\\n  margin-left: 100px !important; }\\n\\n:global(.ml-auto) {\\n  margin-left: auto !important; }\\n\\n:global(.p-0) {\\n  padding: 0px !important; }\\n\\n:global(.p-5) {\\n  padding: 5px !important; }\\n\\n:global(.p-10) {\\n  padding: 10px !important; }\\n\\n:global(.p-15) {\\n  padding: 15px !important; }\\n\\n:global(.p-20) {\\n  padding: 20px !important; }\\n\\n:global(.p-25) {\\n  padding: 25px !important; }\\n\\n:global(.p-30) {\\n  padding: 30px !important; }\\n\\n:global(.p-40) {\\n  padding: 40px !important; }\\n\\n:global(.p-50) {\\n  padding: 50px !important; }\\n\\n:global(.p-60) {\\n  padding: 60px !important; }\\n\\n:global(.p-70) {\\n  padding: 70px !important; }\\n\\n:global(.p-80) {\\n  padding: 80px !important; }\\n\\n:global(.p-90) {\\n  padding: 90px !important; }\\n\\n:global(.p-100) {\\n  padding: 100px !important; }\\n\\n:global(.px-0) {\\n  padding-right: 0px !important;\\n  padding-left: 0px !important; }\\n\\n:global(.px-5) {\\n  padding-right: 5px !important;\\n  padding-left: 5px !important; }\\n\\n:global(.px-10) {\\n  padding-right: 10px !important;\\n  padding-left: 10px !important; }\\n\\n:global(.px-15) {\\n  padding-right: 15px !important;\\n  padding-left: 15px !important; }\\n\\n:global(.px-20) {\\n  padding-right: 20px !important;\\n  padding-left: 20px !important; }\\n\\n:global(.px-25) {\\n  padding-right: 25px !important;\\n  padding-left: 25px !important; }\\n\\n:global(.px-30) {\\n  padding-right: 30px !important;\\n  padding-left: 30px !important; }\\n\\n:global(.px-40) {\\n  padding-right: 40px !important;\\n  padding-left: 40px !important; }\\n\\n:global(.px-50) {\\n  padding-right: 50px !important;\\n  padding-left: 50px !important; }\\n\\n:global(.px-60) {\\n  padding-right: 60px !important;\\n  padding-left: 60px !important; }\\n\\n:global(.px-70) {\\n  padding-right: 70px !important;\\n  padding-left: 70px !important; }\\n\\n:global(.px-80) {\\n  padding-right: 80px !important;\\n  padding-left: 80px !important; }\\n\\n:global(.px-90) {\\n  padding-right: 90px !important;\\n  padding-left: 90px !important; }\\n\\n:global(.px-100) {\\n  padding-right: 100px !important;\\n  padding-left: 100px !important; }\\n\\n:global(.py-0) {\\n  padding-top: 0px !important;\\n  padding-bottom: 0px !important; }\\n\\n:global(.py-5) {\\n  padding-top: 5px !important;\\n  padding-bottom: 5px !important; }\\n\\n:global(.py-10) {\\n  padding-top: 10px !important;\\n  padding-bottom: 10px !important; }\\n\\n:global(.py-15) {\\n  padding-top: 15px !important;\\n  padding-bottom: 15px !important; }\\n\\n:global(.py-20) {\\n  padding-top: 20px !important;\\n  padding-bottom: 20px !important; }\\n\\n:global(.py-25) {\\n  padding-top: 25px !important;\\n  padding-bottom: 25px !important; }\\n\\n:global(.py-30) {\\n  padding-top: 30px !important;\\n  padding-bottom: 30px !important; }\\n\\n:global(.py-40) {\\n  padding-top: 40px !important;\\n  padding-bottom: 40px !important; }\\n\\n:global(.py-50) {\\n  padding-top: 50px !important;\\n  padding-bottom: 50px !important; }\\n\\n:global(.py-60) {\\n  padding-top: 60px !important;\\n  padding-bottom: 60px !important; }\\n\\n:global(.py-70) {\\n  padding-top: 70px !important;\\n  padding-bottom: 70px !important; }\\n\\n:global(.py-80) {\\n  padding-top: 80px !important;\\n  padding-bottom: 80px !important; }\\n\\n:global(.py-90) {\\n  padding-top: 90px !important;\\n  padding-bottom: 90px !important; }\\n\\n:global(.py-100) {\\n  padding-top: 100px !important;\\n  padding-bottom: 100px !important; }\\n\\n:global(.pt-0) {\\n  padding-top: 0px !important; }\\n\\n:global(.pt-5) {\\n  padding-top: 5px !important; }\\n\\n:global(.pt-10) {\\n  padding-top: 10px !important; }\\n\\n:global(.pt-15) {\\n  padding-top: 15px !important; }\\n\\n:global(.pt-20) {\\n  padding-top: 20px !important; }\\n\\n:global(.pt-25) {\\n  padding-top: 25px !important; }\\n\\n:global(.pt-30) {\\n  padding-top: 30px !important; }\\n\\n:global(.pt-40) {\\n  padding-top: 40px !important; }\\n\\n:global(.pt-50) {\\n  padding-top: 50px !important; }\\n\\n:global(.pt-60) {\\n  padding-top: 60px !important; }\\n\\n:global(.pt-70) {\\n  padding-top: 70px !important; }\\n\\n:global(.pt-80) {\\n  padding-top: 80px !important; }\\n\\n:global(.pt-90) {\\n  padding-top: 90px !important; }\\n\\n:global(.pt-100) {\\n  padding-top: 100px !important; }\\n\\n:global(.pr-0) {\\n  padding-right: 0px !important; }\\n\\n:global(.pr-5) {\\n  padding-right: 5px !important; }\\n\\n:global(.pr-10) {\\n  padding-right: 10px !important; }\\n\\n:global(.pr-15) {\\n  padding-right: 15px !important; }\\n\\n:global(.pr-20) {\\n  padding-right: 20px !important; }\\n\\n:global(.pr-25) {\\n  padding-right: 25px !important; }\\n\\n:global(.pr-30) {\\n  padding-right: 30px !important; }\\n\\n:global(.pr-40) {\\n  padding-right: 40px !important; }\\n\\n:global(.pr-50) {\\n  padding-right: 50px !important; }\\n\\n:global(.pr-60) {\\n  padding-right: 60px !important; }\\n\\n:global(.pr-70) {\\n  padding-right: 70px !important; }\\n\\n:global(.pr-80) {\\n  padding-right: 80px !important; }\\n\\n:global(.pr-90) {\\n  padding-right: 90px !important; }\\n\\n:global(.pr-100) {\\n  padding-right: 100px !important; }\\n\\n:global(.pb-0) {\\n  padding-bottom: 0px !important; }\\n\\n:global(.pb-5) {\\n  padding-bottom: 5px !important; }\\n\\n:global(.pb-10) {\\n  padding-bottom: 10px !important; }\\n\\n:global(.pb-15) {\\n  padding-bottom: 15px !important; }\\n\\n:global(.pb-20) {\\n  padding-bottom: 20px !important; }\\n\\n:global(.pb-25) {\\n  padding-bottom: 25px !important; }\\n\\n:global(.pb-30) {\\n  padding-bottom: 30px !important; }\\n\\n:global(.pb-40) {\\n  padding-bottom: 40px !important; }\\n\\n:global(.pb-50) {\\n  padding-bottom: 50px !important; }\\n\\n:global(.pb-60) {\\n  padding-bottom: 60px !important; }\\n\\n:global(.pb-70) {\\n  padding-bottom: 70px !important; }\\n\\n:global(.pb-80) {\\n  padding-bottom: 80px !important; }\\n\\n:global(.pb-90) {\\n  padding-bottom: 90px !important; }\\n\\n:global(.pb-100) {\\n  padding-bottom: 100px !important; }\\n\\n:global(.pl-0) {\\n  padding-left: 0px !important; }\\n\\n:global(.pl-5) {\\n  padding-left: 5px !important; }\\n\\n:global(.pl-10) {\\n  padding-left: 10px !important; }\\n\\n:global(.pl-15) {\\n  padding-left: 15px !important; }\\n\\n:global(.pl-20) {\\n  padding-left: 20px !important; }\\n\\n:global(.pl-25) {\\n  padding-left: 25px !important; }\\n\\n:global(.pl-30) {\\n  padding-left: 30px !important; }\\n\\n:global(.pl-40) {\\n  padding-left: 40px !important; }\\n\\n:global(.pl-50) {\\n  padding-left: 50px !important; }\\n\\n:global(.pl-60) {\\n  padding-left: 60px !important; }\\n\\n:global(.pl-70) {\\n  padding-left: 70px !important; }\\n\\n:global(.pl-80) {\\n  padding-left: 80px !important; }\\n\\n:global(.pl-90) {\\n  padding-left: 90px !important; }\\n\\n:global(.pl-100) {\\n  padding-left: 100px !important; }\\n\\n:global(.width-100) {\\n  width: 100% !important; }\\n\\n:global(.width-auto) {\\n  width: auto !important; }\\n\\n:global(.height-100) {\\n  height: 100% !important; }\\n\\n:global(.height-auto) {\\n  height: auto !important; }\\n\\n:global(.overflow-visible) {\\n  overflow: visible !important; }\\n\\n:global(.overflow-hidden) {\\n  overflow: hidden !important; }\\n\\n:global(.overflow-auto) {\\n  overflow: auto !important; }\\n\\n:global(.overflow-y-visible) {\\n  overflow-y: visible !important; }\\n\\n:global(.overflow-y-hidden) {\\n  overflow-y: hidden !important; }\\n\\n:global(.overflow-y-auto) {\\n  overflow-y: auto !important; }\\n\\n:global(.overflow-x-visible) {\\n  overflow-x: visible !important; }\\n\\n:global(.overflow-x-hidden) {\\n  overflow-x: hidden !important; }\\n\\n:global(.overflow-x-auto) {\\n  overflow-x: auto !important; }\\n\\n:global(.shrink-0) {\\n  flex-shrink: 0 !important; }\\n\\n:global(.shrink-1) {\\n  flex-shrink: 1 !important; }\\n\\n:global(.grow-0) {\\n  flex-grow: 0 !important; }\\n\\n:global(.grow-1) {\\n  flex-grow: 1 !important; }\\n\\n:global(.clickable:not([disabled])), :global([onclick]:not([disabled])) {\\n  cursor: pointer !important; }\\n\\n:global(.not-clickable), :global(.not-clickable[onclick]) {\\n  cursor: default !important; }\\n\\n:global(.letsGo-hide) {\\n  display: none !important; }\\n\\n:global(.shadow-light) {\\n  box-shadow: 0px 1px 3px 0px #A0A0A0 !important; }\\n\\n:global(.shadow-dark) {\\n  box-shadow: 0px 1px 3px 0px #1B1B1B !important; }\\n\\n:global(.text-left) {\\n  text-align: left !important; }\\n\\n:global(.text-center) {\\n  text-align: center !important; }\\n\\n:global(.text-right) {\\n  text-align: right !important; }\\n\\n:global(.text-justify) {\\n  text-align: justify !important; }\\n\\n:global(.text-uppercase) {\\n  text-transform: uppercase !important; }\\n\\n:global(.text-lowercase) {\\n  text-transform: lowercase !important; }\\n\\n:global(.text-capitalize) {\\n  text-transform: capitalize !important; }\\n\\n:global(.text-underline) {\\n  text-decoration: underline !important; }\\n\\n:global(.text-line-through) {\\n  text-decoration: line-through !important; }\\n\\n:global(.text-italic) {\\n  font-style: italic !important; }\\n\\n:global(.text-ellipsis) {\\n  overflow: hidden !important;\\n  white-space: nowrap !important;\\n  text-overflow: ellipsis !important; }\\n\\n:global(.opacity-0) {\\n  opacity: 0 !important; }\\n\\n:global(.opacity-100) {\\n  opacity: 1 !important; }\\n\\n:global(.visible-print),\\n:global(.frow.visible-print) {\\n  display: none !important; }\\n\\n@media print {\\n  :global(.hidden-print),\\n  :global(.frow.hidden-print) {\\n    display: none !important; }\\n  :global(.visible-print) {\\n    display: block !important; }\\n  :global(.frow.visible-print) {\\n    display: flex !important; } }\\n\\n:global(.visible-sr),\\n:global(.visible-sr-focusable:not(:focus)) {\\n  position: absolute !important;\\n  width: 1px !important;\\n  height: 1px !important;\\n  padding: 0 !important;\\n  margin: -1px !important;\\n  overflow: hidden !important;\\n  clip: rect(0, 0, 0, 0) !important;\\n  white-space: nowrap !important;\\n  border: 0 !important; }\\n\\n:global(body) {\\n  font-size: 1em;\\n  padding: 1%;\\n  color: black;\\n  background-color: white;\\n  font-family: 'Assistant', sans-serif; }\\n  :global(body) :global(h1) {\\n    font-size: 4em;\\n    font-family: 'Secular One', sans-serif; }\\n  :global(body) :global(h3) {\\n    font-weight: 600; }\\n  :global(body) :global(a) {\\n    color: black; }\\n  :global(body) :global(img) {\\n    filter: grayscale(100%); }\\n\\n:global([aria-current]) {\\n  position: relative;\\n  display: inline-block; }\\n\\n:global([aria-current]::after) {\\n  position: absolute;\\n  content: '';\\n  width: calc(100% - 1em);\\n  height: 2px;\\n  background-color: #ff3e00;\\n  display: block;\\n  bottom: -1px; }\\n\\n:global(header) {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: flex-start; }\\n\\n:global(svg) {\\n  width: 45px; }\\n/*# sourceMappingURL=src/components/Header.svelte.map */</style>\\n<header>\\n<h1>Johnny Richardson</h1>\\n<svg viewBox=\\\"0 0 128 128\\\">\\n<path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z\\\"></path><path d=\\\"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0\\\"></path>\\n</svg> \\n</header>\\n\"],\"names\":[],\"mappings\":\"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\"}"
};

const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);

	return `<header><h1>Johnny Richardson</h1>
<svg viewBox="${"0 0 128 128"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}"></path><path d="${"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"}"></path></svg></header>`;
});

/* src/routes/index.svelte generated by Svelte v3.29.0 */

const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const mapped = ___default['default'].mapValues(all, file => {
		return file.html;
	});

	console.log(all);
	if ($$props.mapped === void 0 && $$bindings.mapped && mapped !== void 0) $$bindings.mapped(mapped);

	return `${($$result.head += `${($$result.title = `<title>Johnny Richardson</title>`, "")}`, "")}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="${"frow row-start"}"><div class="${"col-md-1-3"}"><h3>About</h3>
		
		${mapped["0"]}</div></div>

<div class="${"frow row-start"}"><div class="${"col-md-1-2"}"><h3>Highlights</h3>
${mapped["1"]}</div></div>`;
});

var component_0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Routes
});

/* src/node_modules/@sapper/internal/layout.svelte generated by Svelte v3.29.0 */

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${slots.default ? slots.default({}) : ``}`;
});

var root_comp = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Layout
});

/* src/routes/_error.svelte generated by Svelte v3.29.0 */

const css$1 = {
	code: "h1.svelte-59gzr9,p.svelte-59gzr9{margin:0 auto}h1.svelte-59gzr9{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-59gzr9{margin:1em auto}@media(min-width: 480px){h1.svelte-59gzr9{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = \\\"development\\\" === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvc3JjL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQztFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0M7R0FDQyxjQUFjO0VBQ2Y7Q0FDRCIsImZpbGUiOiJzcmMvcm91dGVzL19lcnJvci5zdmVsdGUiLCJzb3VyY2VzQ29udGVudCI6WyJcblx0aDEsIHAge1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0aDEge1xuXHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG5cblx0cCB7XG5cdFx0bWFyZ2luOiAxZW0gYXV0bztcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fVxuIl19 */</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,gBAAE,CAAE,CAAC,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$1);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-59gzr9"}">${escape(status)}</h1>

<p class="${"svelte-59gzr9"}">${escape(error.message)}</p>

${ error.stack
	? `<pre>${escape(error.stack)}</pre>`
	: ``}`;
});

// This file is generated by Sapper — do not edit it!

const manifest = {
	server_routes: [
		{
			// content/highlights.md
			pattern: /^\/content\/highlights\/?$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// content/about.md
			pattern: /^\/content\/about\/?$/,
			handlers: route_1,
			params: () => ({})
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: component_0 }
			]
		}
	],

	root_comp,
	error: Error$1
};

const build_dir = "__sapper__/dev";

const src_dir = "src";

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.29.0 */

const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/mrb-consumer+xml":["*xdf"],"application/mrb-publish+xml":["*xdf"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["*xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/ttml+xml":["ttml"],"application/urc-ressheet+xml":["rsheet"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-error+xml":["xer"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function get_server_route_handler(routes) {
    function handle_route(route, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params = route.params(route.pattern.exec(req.path));
            const method = req.method.toLowerCase();
            // 'delete' cannot be exported from a module because it is a keyword,
            // so check for 'del' instead
            const method_export = method === 'delete' ? 'del' : method;
            const handle_method = route.handlers[method_export];
            if (handle_method) {
                if (process.env.SAPPER_EXPORT) {
                    const { write, end, setHeader } = res;
                    const chunks = [];
                    const headers = {};
                    // intercept data so that it can be exported
                    res.write = function (chunk) {
                        chunks.push(Buffer.from(chunk));
                        return write.apply(res, [chunk]);
                    };
                    res.setHeader = function (name, value) {
                        headers[name.toLowerCase()] = value;
                        setHeader.apply(res, [name, value]);
                    };
                    res.end = function (chunk) {
                        if (chunk)
                            chunks.push(Buffer.from(chunk));
                        end.apply(res, [chunk]);
                        process.send({
                            __sapper__: true,
                            event: 'file',
                            url: req.url,
                            method: req.method,
                            status: res.statusCode,
                            type: headers['content-type'],
                            body: Buffer.concat(chunks)
                        });
                    };
                }
                const handle_next = (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end(err.message);
                    }
                    else {
                        process.nextTick(next);
                    }
                };
                try {
                    yield handle_method(req, res, handle_next);
                }
                catch (err) {
                    console.error(err);
                    handle_next(err);
                }
            }
            else {
                // no matching handler for method
                process.nextTick(next);
            }
        });
    }
    return function find_route(req, res, next) {
        for (const route of routes) {
            if (route.pattern.test(req.path)) {
                handle_route(route, req, res, next);
                return;
            }
        }
        next();
    };
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return "new RegExp(" + stringifyString(thing.source) + ", \"" + thing.flags + "\")";
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream__default['default'].Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream__default['default'].PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream__default['default']) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream__default['default']) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream__default['default'])) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream__default['default'] && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream__default['default']) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__default['default'].STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url__default['default'].parse;
const format_url = Url__default['default'].format;

const streamDestructionSupported = 'destroy' in Stream__default['default'].Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream__default['default'].Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream__default['default'].PassThrough;
const resolve_url = Url__default['default'].resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__default['default'] : http__default['default']).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream__default['default'].Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__default['default'].Z_SYNC_FLUSH,
				finishFlush: zlib__default['default'].Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__default['default'].createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__default['default'].createInflate());
					} else {
						body = body.pipe(zlib__default['default'].createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__default['default'].createBrotliDecompress === 'function') {
				body = body.pipe(zlib__default['default'].createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
var encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
var decode$1 = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

var base64 = {
	encode: encode,
	decode: decode$1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
var encode$1 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
var decode$2 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

var base64Vlq = {
	encode: encode$1,
	decode: decode$2
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var util = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */


var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

var ArraySet_1 = ArraySet;

var arraySet = {
	ArraySet: ArraySet_1
};

var binarySearch = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
var quickSort_1 = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

var quickSort = {
	quickSort: quickSort_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */



var ArraySet$1 = arraySet.ArraySet;

var quickSort$1 = quickSort.quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

var SourceMapConsumer_1 = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet$1.fromArray(names.map(String), true);
  this._sources = ArraySet$1.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet$1.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet$1.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort$1(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64Vlq.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort$1(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort$1(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort$1(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort$1(this.__originalMappings, util.compareByOriginalPositions);
  };

var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;

var sourceMapConsumer = {
	SourceMapConsumer: SourceMapConsumer_1,
	BasicSourceMapConsumer: BasicSourceMapConsumer_1,
	IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};

var SourceMapConsumer$1 = sourceMapConsumer.SourceMapConsumer;

function get_sourcemap_url(contents) {
    const reversed = contents
        .split('\n')
        .reverse()
        .join('\n');
    const match = /\/[/*]#[ \t]+sourceMappingURL=([^\s'"]+?)(?:[ \t]+|$)/gm.exec(reversed);
    if (match)
        return match[1];
    return undefined;
}
const file_cache = new Map();
function get_file_contents(file_path) {
    if (file_cache.has(file_path)) {
        return file_cache.get(file_path);
    }
    try {
        const data = fs__default['default'].readFileSync(file_path, 'utf8');
        file_cache.set(file_path, data);
        return data;
    }
    catch (_a) {
        return undefined;
    }
}
function sourcemap_stacktrace(stack) {
    const replace = (line) => line.replace(/^ {4}at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?)\)?/, (input, var_name, file_path, line_num, column) => {
        if (!file_path)
            return input;
        const contents = get_file_contents(file_path);
        if (!contents)
            return input;
        const sourcemap_url = get_sourcemap_url(contents);
        if (!sourcemap_url)
            return input;
        let dir = path__default['default'].dirname(file_path);
        let sourcemap_data;
        if (/^data:application\/json[^,]+base64,/.test(sourcemap_url)) {
            const raw_data = sourcemap_url.slice(sourcemap_url.indexOf(',') + 1);
            try {
                sourcemap_data = Buffer.from(raw_data, 'base64').toString();
            }
            catch (_a) {
                return input;
            }
        }
        else {
            const sourcemap_path = path__default['default'].resolve(dir, sourcemap_url);
            const data = get_file_contents(sourcemap_path);
            if (!data)
                return input;
            sourcemap_data = data;
            dir = path__default['default'].dirname(sourcemap_path);
        }
        let raw_sourcemap;
        try {
            raw_sourcemap = JSON.parse(sourcemap_data);
        }
        catch (_b) {
            return input;
        }
        const consumer = new SourceMapConsumer$1(raw_sourcemap);
        const pos = consumer.originalPositionFor({
            line: Number(line_num),
            column: Number(column),
            bias: SourceMapConsumer$1.LEAST_UPPER_BOUND
        });
        if (!pos.source)
            return input;
        const source_path = path__default['default'].resolve(dir, pos.source);
        const source = `${source_path}:${pos.line || 0}:${pos.column || 0}`;
        if (!var_name)
            return `    at ${source}`;
        return `    at ${var_name} (${source})`;
    });
    file_cache.clear();
    return stack
        .split('\n')
        .map(replace)
        .join('\n');
}

function get_page_handler(manifest, session_getter) {
    const get_build_info =  () => JSON.parse(fs__default['default'].readFileSync(path__default['default'].join(build_dir, 'build.json'), 'utf-8'))
        ;
    const template =  () => read_template(src_dir)
        ;
    const has_service_worker = fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js'));
    const { pages, error: error_route } = manifest;
    function bail(res, err) {
        console.error(err);
        const message =  escape_html(typeof err === 'string' ? err : err.message) ;
        res.statusCode = 500;
        res.end(`<pre>${message}</pre>`);
    }
    function handle_error(req, res, statusCode, error) {
        handle_page({
            pattern: null,
            parts: [
                { name: null, component: { default: error_route } }
            ]
        }, req, res, statusCode, error || 'Unknown error');
    }
    function handle_page(page, req, res, status = 200, error = null) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const is_service_worker_index = req.path === '/service-worker-index.html';
            const build_info = get_build_info();
            res.setHeader('Content-Type', 'text/html');
            // preload main js and css
            // TODO detect other stuff we can preload like fonts?
            let preload_files = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
            if ((_a = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _a === void 0 ? void 0 : _a.main) {
                preload_files = preload_files.concat((_b = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _b === void 0 ? void 0 : _b.main);
            }
            let es6_preload = false;
            if (build_info.bundler === 'rollup') {
                es6_preload = true;
                const route = page.parts[page.parts.length - 1].file;
                const deps = build_info.dependencies[route];
                if (deps) {
                    preload_files = preload_files.concat(deps);
                }
            }
            else if (!error && !is_service_worker_index) {
                page.parts.forEach(part => {
                    if (!part)
                        return;
                    // using concat because it could be a string or an array. thanks webpack!
                    preload_files = preload_files.concat(build_info.assets[part.name]);
                });
            }
            const link = preload_files
                .filter((v, i, a) => a.indexOf(v) === i) // remove any duplicates
                .filter(file => file && !file.match(/\.map$/)) // exclude source maps
                .map((file) => {
                const as = /\.css$/.test(file) ? 'style' : 'script';
                const rel = es6_preload && as === 'script' ? 'modulepreload' : 'preload';
                return `<${req.baseUrl}/client/${file}>;rel="${rel}";as="${as}"`;
            })
                .join(', ');
            res.setHeader('Link', link);
            let session;
            try {
                session = yield session_getter(req, res);
            }
            catch (err) {
                return bail(res, err);
            }
            let redirect;
            let preload_error;
            const preload_context = {
                redirect: (statusCode, location) => {
                    if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
                        throw new Error('Conflicting redirects');
                    }
                    location = location.replace(/^\//g, ''); // leading slash (only)
                    redirect = { statusCode, location };
                },
                error: (statusCode, message) => {
                    preload_error = { statusCode, message };
                },
                fetch: (url, opts) => {
                    const protocol = req.socket.encrypted ? 'https' : 'http';
                    const parsed = new Url__default['default'].URL(url, `${protocol}://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' : ''}`);
                    opts = Object.assign({}, opts);
                    const include_credentials = (opts.credentials === 'include' ||
                        opts.credentials !== 'omit' && parsed.origin === `${protocol}://127.0.0.1:${process.env.PORT}`);
                    if (include_credentials) {
                        opts.headers = Object.assign({}, opts.headers);
                        const cookies = Object.assign({}, parse_1(req.headers.cookie || ''), parse_1(opts.headers.cookie || ''));
                        const set_cookie = res.getHeader('Set-Cookie');
                        (Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach((s) => {
                            const m = /([^=]+)=([^;]+)/.exec(s);
                            if (m)
                                cookies[m[1]] = m[2];
                        });
                        const str = Object.keys(cookies)
                            .map(key => `${key}=${cookies[key]}`)
                            .join('; ');
                        opts.headers.cookie = str;
                        if (!opts.headers.authorization && req.headers.authorization) {
                            opts.headers.authorization = req.headers.authorization;
                        }
                    }
                    return fetch(parsed.href, opts);
                }
            };
            let preloaded;
            let match;
            let params;
            try {
                const root_preload = manifest.root_comp.preload || (() => { });
                const root_preloaded = root_preload.call(preload_context, {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params: {}
                }, session);
                match = error ? null : page.pattern.exec(req.path);
                let toPreload = [root_preloaded];
                if (!is_service_worker_index) {
                    toPreload = toPreload.concat(page.parts.map(part => {
                        if (!part)
                            return null;
                        // the deepest level is used below, to initialise the store
                        params = part.params ? part.params(match) : {};
                        return part.component.preload
                            ? part.component.preload.call(preload_context, {
                                host: req.headers.host,
                                path: req.path,
                                query: req.query,
                                params
                            }, session)
                            : {};
                    }));
                }
                preloaded = yield Promise.all(toPreload);
            }
            catch (err) {
                if (error) {
                    return bail(res, err);
                }
                preload_error = { statusCode: 500, message: err };
                preloaded = []; // appease TypeScript
            }
            try {
                if (redirect) {
                    const location = Url__default['default'].resolve((req.baseUrl || '') + '/', redirect.location);
                    res.statusCode = redirect.statusCode;
                    res.setHeader('Location', location);
                    res.end();
                    return;
                }
                if (preload_error) {
                    if (!error) {
                        handle_error(req, res, preload_error.statusCode, preload_error.message);
                    }
                    else {
                        bail(res, preload_error.message);
                    }
                    return;
                }
                const segments = req.path.split('/').filter(Boolean);
                // TODO make this less confusing
                const layout_segments = [segments[0]];
                let l = 1;
                page.parts.forEach((part, i) => {
                    layout_segments[l] = segments[i + 1];
                    if (!part)
                        return null;
                    l++;
                });
                if (error instanceof Error && error.stack) {
                    error.stack = sourcemap_stacktrace(error.stack);
                }
                const pageContext = {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params,
                    error: error
                        ? error instanceof Error
                            ? error
                            : { message: error, name: 'PreloadError' }
                        : null
                };
                const props = {
                    stores: {
                        page: {
                            subscribe: writable(pageContext).subscribe
                        },
                        preloading: {
                            subscribe: writable(null).subscribe
                        },
                        session: writable(session)
                    },
                    segments: layout_segments,
                    status: error ? status : 200,
                    error: pageContext.error,
                    level0: {
                        props: preloaded[0]
                    },
                    level1: {
                        segment: segments[0],
                        props: {}
                    }
                };
                if (!is_service_worker_index) {
                    let level_index = 1;
                    for (let i = 0; i < page.parts.length; i += 1) {
                        const part = page.parts[i];
                        if (!part)
                            continue;
                        props[`level${level_index++}`] = {
                            component: part.component.default,
                            props: preloaded[i + 1] || {},
                            segment: segments[i]
                        };
                    }
                }
                const { html, head, css } = App.render(props);
                const serialized = {
                    preloaded: `[${preloaded.map(data => try_serialize(data, err => {
                        console.error(`Failed to serialize preloaded data to transmit to the client at the /${segments.join('/')} route: ${err.message}`);
                        console.warn('The client will re-render over the server-rendered page fresh instead of continuing where it left off. See https://sapper.svelte.dev/docs#Return_value for more information');
                    })).join(',')}]`,
                    session: session && try_serialize(session, err => {
                        throw new Error(`Failed to serialize session data: ${err.message}`);
                    }),
                    error: error && serialize_error(props.error)
                };
                let script = `__SAPPER__={${[
                    error && `error:${serialized.error},status:${status}`,
                    `baseUrl:"${req.baseUrl}"`,
                    serialized.preloaded && `preloaded:${serialized.preloaded}`,
                    serialized.session && `session:${serialized.session}`
                ].filter(Boolean).join(',')}};`;
                if (has_service_worker) {
                    script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
                }
                const file = [].concat(build_info.assets.main).filter(f => f && /\.js$/.test(f))[0];
                const main = `${req.baseUrl}/client/${file}`;
                // users can set a CSP nonce using res.locals.nonce
                const nonce_value = (res.locals && res.locals.nonce) ? res.locals.nonce : '';
                const nonce_attr = nonce_value ? ` nonce="${nonce_value}"` : '';
                if (build_info.bundler === 'rollup') {
                    if (build_info.legacy_assets) {
                        const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
                        script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
                    }
                    else {
                        script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
                    }
                }
                else {
                    script += `</script><script${nonce_attr} src="${main}" defer>`;
                }
                let styles;
                // TODO make this consistent across apps
                // TODO embed build_info in placeholder.ts
                if (build_info.css && build_info.css.main) {
                    const css_chunks = new Set(build_info.css.main);
                    page.parts.forEach(part => {
                        if (!part || !build_info.dependencies)
                            return;
                        const deps_for_part = build_info.dependencies[part.file];
                        if (deps_for_part) {
                            deps_for_part.filter(d => d.endsWith('.css')).forEach(chunk => {
                                css_chunks.add(chunk);
                            });
                        }
                    });
                    styles = Array.from(css_chunks)
                        .map(href => `<link rel="stylesheet" href="client/${href}">`)
                        .join('');
                }
                else {
                    styles = (css && css.code ? `<style${nonce_attr}>${css.code}</style>` : '');
                }
                const body = template()
                    .replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
                    .replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
                    .replace('%sapper.html%', () => html)
                    .replace('%sapper.head%', () => head)
                    .replace('%sapper.styles%', () => styles)
                    .replace(/%sapper\.cspnonce%/g, () => nonce_value);
                res.statusCode = status;
                res.end(body);
            }
            catch (err) {
                if (error) {
                    bail(res, err);
                }
                else {
                    handle_error(req, res, 500, err);
                }
            }
        });
    }
    return function find_route(req, res, next) {
        const path = req.path === '/service-worker-index.html' ? '/' : req.path;
        const page = pages.find(page => page.pattern.test(path));
        if (page) {
            handle_page(page, req, res);
        }
        else {
            handle_error(req, res, 404, 'Not found');
        }
    };
}
function read_template(dir = build_dir) {
    return fs__default['default'].readFileSync(`${dir}/template.html`, 'utf-8');
}
function try_serialize(data, fail) {
    try {
        return devalue(data);
    }
    catch (err) {
        if (fail)
            fail(err);
        return null;
    }
}
// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
    if (!error)
        return null;
    let serialized = try_serialize(error);
    if (!serialized) {
        const { name, message, stack } = error;
        serialized = try_serialize({ name, message, stack });
    }
    if (!serialized) {
        serialized = '{}';
    }
    return serialized;
}
function escape_html(html) {
    const chars = {
        '"': 'quot',
        '\'': '#39',
        '&': 'amp',
        '<': 'lt',
        '>': 'gt'
    };
    return html.replace(/["'&<>]/g, c => `&${chars[c]};`);
}

function middleware(opts = {}) {
    const { session, ignore } = opts;
    let emitted_basepath = false;
    return compose_handlers(ignore, [
        (req, res, next) => {
            if (req.baseUrl === undefined) {
                let originalUrl = req.originalUrl || req.url;
                if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
                    originalUrl += '/';
                }
                req.baseUrl = originalUrl
                    ? originalUrl.slice(0, -req.url.length)
                    : '';
            }
            if (!emitted_basepath && process.send) {
                process.send({
                    __sapper__: true,
                    event: 'basepath',
                    basepath: req.baseUrl
                });
                emitted_basepath = true;
            }
            if (req.path === undefined) {
                req.path = req.url.replace(/\?.*/, '');
            }
            next();
        },
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js')) && serve({
            pathname: '/service-worker.js',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js.map')) && serve({
            pathname: '/service-worker.js.map',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        serve({
            prefix: '/client/',
            cache_control:  'no-cache' 
        }),
        get_server_route_handler(manifest.server_routes),
        get_page_handler(manifest, session || noop$1)
    ].filter(Boolean));
}
function compose_handlers(ignore, handlers) {
    const total = handlers.length;
    function nth_handler(n, req, res, next) {
        if (n >= total) {
            return next();
        }
        handlers[n](req, res, () => nth_handler(n + 1, req, res, next));
    }
    return !ignore
        ? (req, res, next) => nth_handler(0, req, res, next)
        : (req, res, next) => {
            if (should_ignore(req.path, ignore)) {
                next();
            }
            else {
                nth_handler(0, req, res, next);
            }
        };
}
function should_ignore(uri, val) {
    if (Array.isArray(val))
        return val.some(x => should_ignore(uri, x));
    if (val instanceof RegExp)
        return val.test(uri);
    if (typeof val === 'function')
        return val(uri);
    return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}
function serve({ prefix, pathname, cache_control }) {
    const filter = pathname
        ? (req) => req.path === pathname
        : (req) => req.path.startsWith(prefix);
    const read =  (file) => fs__default['default'].readFileSync(path__default['default'].join(build_dir, file))
        ;
    return (req, res, next) => {
        if (filter(req)) {
            const type = lite.getType(req.path);
            try {
                const file = path__default['default'].posix.normalize(decodeURIComponent(req.path));
                const data = read(file);
                res.setHeader('Content-Type', type);
                res.setHeader('Cache-Control', cache_control);
                res.end(data);
            }
            catch (err) {
                if (err.code === 'ENOENT') {
                    next();
                }
                else {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('an error occurred while reading a static file from disk');
                }
            }
        }
        else {
            next();
        }
    };
}
function noop$1() { }

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka__default['default']() // You can also use Express
	.use(
		compression__default['default']({ threshold: 0 }),
		sirv__default['default']('static', { dev }),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsIi4uLy4uLy4uLyQkX19fJCQ0ZmJhMjQ5ZDcxZTk4ZTFlZGQwMjlhZDEzOTFmMGQ4MyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL2ludGVybmFsL21hbmlmZXN0LXNlcnZlci5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3N0b3JlL2luZGV4Lm1qcyIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9zaGFyZWQubWpzIiwiLi4vLi4vLi4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL2ludGVybmFsL0FwcC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvc2VydmVyLm1qcyIsIi4uLy4uLy4uL3NyYy9zZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbm9vcCgpIHsgfVxuY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgIHJldHVybiB0YXI7XG59XG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG4gICAgZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuICAgICAgICBsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG59XG5mdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgIGZucy5mb3JFYWNoKHJ1bik7XG59XG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbn1cbmZ1bmN0aW9uIGlzX2VtcHR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3N0b3JlKHN0b3JlLCBuYW1lKSB7XG4gICAgaWYgKHN0b3JlICE9IG51bGwgJiYgdHlwZW9mIHN0b3JlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBpcyBub3QgYSBzdG9yZSB3aXRoIGEgJ3N1YnNjcmliZScgbWV0aG9kYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCAuLi5jYWxsYmFja3MpIHtcbiAgICBpZiAoc3RvcmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICB9XG4gICAgY29uc3QgdW5zdWIgPSBzdG9yZS5zdWJzY3JpYmUoLi4uY2FsbGJhY2tzKTtcbiAgICByZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG59XG5mdW5jdGlvbiBnZXRfc3RvcmVfdmFsdWUoc3RvcmUpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgc3Vic2NyaWJlKHN0b3JlLCBfID0+IHZhbHVlID0gXykoKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjb21wb25lbnRfc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG4gICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVfc2xvdChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jdHggPSBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblswXShzbG90X2N0eCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgcmV0dXJuIGRlZmluaXRpb25bMV0gJiYgZm5cbiAgICAgICAgPyBhc3NpZ24oJCRzY29wZS5jdHguc2xpY2UoKSwgZGVmaW5pdGlvblsxXShmbihjdHgpKSlcbiAgICAgICAgOiAkJHNjb3BlLmN0eDtcbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NoYW5nZXMoZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb25bMl0gJiYgZm4pIHtcbiAgICAgICAgY29uc3QgbGV0cyA9IGRlZmluaXRpb25bMl0oZm4oZGlydHkpKTtcbiAgICAgICAgaWYgKCQkc2NvcGUuZGlydHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGxldHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gW107XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBNYXRoLm1heCgkJHNjb3BlLmRpcnR5Lmxlbmd0aCwgbGV0cy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZFtpXSA9ICQkc2NvcGUuZGlydHlbaV0gfCBsZXRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJCRzY29wZS5kaXJ0eSB8IGxldHM7XG4gICAgfVxuICAgIHJldHVybiAkJHNjb3BlLmRpcnR5O1xufVxuZnVuY3Rpb24gdXBkYXRlX3Nsb3Qoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuLCBnZXRfc2xvdF9jb250ZXh0X2ZuKSB7XG4gICAgY29uc3Qgc2xvdF9jaGFuZ2VzID0gZ2V0X3Nsb3RfY2hhbmdlcyhzbG90X2RlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuKTtcbiAgICBpZiAoc2xvdF9jaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY29udGV4dCA9IGdldF9zbG90X2NvbnRleHQoc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGdldF9zbG90X2NvbnRleHRfZm4pO1xuICAgICAgICBzbG90LnAoc2xvdF9jb250ZXh0LCBzbG90X2NoYW5nZXMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmIChrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN1bHRba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY29tcHV0ZV9yZXN0X3Byb3BzKHByb3BzLCBrZXlzKSB7XG4gICAgY29uc3QgcmVzdCA9IHt9O1xuICAgIGtleXMgPSBuZXcgU2V0KGtleXMpO1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKCFrZXlzLmhhcyhrKSAmJiBrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3Q7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Nsb3RzKHNsb3RzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2xvdHMpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gb25jZShmbikge1xuICAgIGxldCByYW4gPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHJhbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgICAgZm4uY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbnVsbF90b19lbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9zdG9yZV92YWx1ZShzdG9yZSwgcmV0LCB2YWx1ZSA9IHJldCkge1xuICAgIHN0b3JlLnNldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn1cbmNvbnN0IGhhc19wcm9wID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG5mdW5jdGlvbiBhY3Rpb25fZGVzdHJveWVyKGFjdGlvbl9yZXN1bHQpIHtcbiAgICByZXR1cm4gYWN0aW9uX3Jlc3VsdCAmJiBpc19mdW5jdGlvbihhY3Rpb25fcmVzdWx0LmRlc3Ryb3kpID8gYWN0aW9uX3Jlc3VsdC5kZXN0cm95IDogbm9vcDtcbn1cblxuY29uc3QgaXNfY2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5sZXQgbm93ID0gaXNfY2xpZW50XG4gICAgPyAoKSA9PiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICA6ICgpID0+IERhdGUubm93KCk7XG5sZXQgcmFmID0gaXNfY2xpZW50ID8gY2IgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKSA6IG5vb3A7XG4vLyB1c2VkIGludGVybmFsbHkgZm9yIHRlc3RpbmdcbmZ1bmN0aW9uIHNldF9ub3coZm4pIHtcbiAgICBub3cgPSBmbjtcbn1cbmZ1bmN0aW9uIHNldF9yYWYoZm4pIHtcbiAgICByYWYgPSBmbjtcbn1cblxuY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBydW5fdGFza3Mobm93KSB7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKCF0YXNrLmMobm93KSkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICAgICAgdGFzay5mKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGFza3Muc2l6ZSAhPT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG59XG4vKipcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkhXG4gKi9cbmZ1bmN0aW9uIGNsZWFyX2xvb3BzKCkge1xuICAgIHRhc2tzLmNsZWFyKCk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdGFzayB0aGF0IHJ1bnMgb24gZWFjaCByYWYgZnJhbWVcbiAqIHVudGlsIGl0IHJldHVybnMgYSBmYWxzeSB2YWx1ZSBvciBpcyBhYm9ydGVkXG4gKi9cbmZ1bmN0aW9uIGxvb3AoY2FsbGJhY2spIHtcbiAgICBsZXQgdGFzaztcbiAgICBpZiAodGFza3Muc2l6ZSA9PT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZTogbmV3IFByb21pc2UoZnVsZmlsbCA9PiB7XG4gICAgICAgICAgICB0YXNrcy5hZGQodGFzayA9IHsgYzogY2FsbGJhY2ssIGY6IGZ1bGZpbGwgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBhYm9ydCgpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbn1cbmZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaXRlcmF0aW9uc1tpXSlcbiAgICAgICAgICAgIGl0ZXJhdGlvbnNbaV0uZChkZXRhY2hpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuZnVuY3Rpb24gZWxlbWVudF9pcyhuYW1lLCBpcykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUsIHsgaXMgfSk7XG59XG5mdW5jdGlvbiBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhc19wcm9wKG9iaiwgaylcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldFtrXSA9IG9ialtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3ZnX2VsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5mdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5mdW5jdGlvbiBzcGFjZSgpIHtcbiAgICByZXR1cm4gdGV4dCgnICcpO1xufVxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRleHQoJycpO1xufVxuZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRfZGVmYXVsdChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0b3BfcHJvcGFnYXRpb24oZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc2VsZihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwLCBfX3ZhbHVlLCBjaGVja2VkKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZ3JvdXBbaV0uY2hlY2tlZClcbiAgICAgICAgICAgIHZhbHVlLmFkZChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCFjaGVja2VkKSB7XG4gICAgICAgIHZhbHVlLmRlbGV0ZShfX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gY2xhaW1fZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgICAgICBjb25zdCByZW1vdmUgPSBbXTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqKytdO1xuICAgICAgICAgICAgICAgIGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlLnB1c2goYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcmVtb3ZlLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUocmVtb3ZlW2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN2ZyA/IHN2Z19lbGVtZW50KG5hbWUpIDogZWxlbWVudChuYW1lKTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9ICcnICsgZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHQoZGF0YSk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gc2V0X2RhdGEodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQud2hvbGVUZXh0ICE9PSBkYXRhKVxuICAgICAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3ZhbHVlKGlucHV0LCB2YWx1ZSkge1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdHlwZShpbnB1dCwgdHlwZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N0eWxlKG5vZGUsIGtleSwgdmFsdWUsIGltcG9ydGFudCkge1xuICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgaW1wb3J0YW50ID8gJ2ltcG9ydGFudCcgOiAnJyk7XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3RfdmFsdWUoc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRfb3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgfHwgc2VsZWN0Lm9wdGlvbnNbMF07XG4gICAgcmV0dXJuIHNlbGVjdGVkX29wdGlvbiAmJiBzZWxlY3RlZF9vcHRpb24uX192YWx1ZTtcbn1cbmZ1bmN0aW9uIHNlbGVjdF9tdWx0aXBsZV92YWx1ZShzZWxlY3QpIHtcbiAgICByZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIG9wdGlvbiA9PiBvcHRpb24uX192YWx1ZSk7XG59XG4vLyB1bmZvcnR1bmF0ZWx5IHRoaXMgY2FuJ3QgYmUgYSBjb25zdGFudCBhcyB0aGF0IHdvdWxkbid0IGJlIHRyZWUtc2hha2VhYmxlXG4vLyBzbyB3ZSBjYWNoZSB0aGUgcmVzdWx0IGluc3RlYWRcbmxldCBjcm9zc29yaWdpbjtcbmZ1bmN0aW9uIGlzX2Nyb3Nzb3JpZ2luKCkge1xuICAgIGlmIChjcm9zc29yaWdpbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNyb3Nzb3JpZ2luID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHZvaWQgd2luZG93LnBhcmVudC5kb2N1bWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNyb3Nzb3JpZ2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3Jvc3NvcmlnaW47XG59XG5mdW5jdGlvbiBhZGRfcmVzaXplX2xpc3RlbmVyKG5vZGUsIGZuKSB7XG4gICAgY29uc3QgY29tcHV0ZWRfc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHpfaW5kZXggPSAocGFyc2VJbnQoY29tcHV0ZWRfc3R5bGUuekluZGV4KSB8fCAwKSAtIDE7XG4gICAgaWYgKGNvbXB1dGVkX3N0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBgICtcbiAgICAgICAgYG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6ICR7el9pbmRleH07YCk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmcmFtZS50YWJJbmRleCA9IC0xO1xuICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcbiAgICBsZXQgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBgZGF0YTp0ZXh0L2h0bWwsPHNjcmlwdD5vbnJlc2l6ZT1mdW5jdGlvbigpe3BhcmVudC5wb3N0TWVzc2FnZSgwLCcqJyl9PC9zY3JpcHQ+YDtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4od2luZG93LCAnbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpXG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgaWZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKGlmcmFtZS5jb250ZW50V2luZG93LCAncmVzaXplJywgZm4pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhcHBlbmQobm9kZSwgaWZyYW1lKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoY3Jvc3NvcmlnaW4pIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodW5zdWJzY3JpYmUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGV0YWNoKGlmcmFtZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cbmZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwpIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlLCBkZXRhaWwpO1xuICAgIHJldHVybiBlO1xufVxuZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3JfYWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cbmNsYXNzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5hID0gYW5jaG9yO1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgIH1cbiAgICBtKGh0bWwsIHRhcmdldCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICBpZiAoIXRoaXMuZSkge1xuICAgICAgICAgICAgdGhpcy5lID0gZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaShhbmNob3IpO1xuICAgIH1cbiAgICBoKGh0bWwpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHRoaXMubiA9IEFycmF5LmZyb20odGhpcy5lLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0KHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHAoaHRtbCkge1xuICAgICAgICB0aGlzLmQoKTtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgICAgICB0aGlzLmkodGhpcy5hKTtcbiAgICB9XG4gICAgZCgpIHtcbiAgICAgICAgdGhpcy5uLmZvckVhY2goZGV0YWNoKTtcbiAgICB9XG59XG5cbmNvbnN0IGFjdGl2ZV9kb2NzID0gbmV3IFNldCgpO1xubGV0IGFjdGl2ZSA9IDA7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgbGV0IGkgPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBoYXNoID4+PiAwO1xufVxuZnVuY3Rpb24gY3JlYXRlX3J1bGUobm9kZSwgYSwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNlLCBmbiwgdWlkID0gMCkge1xuICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICBsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuICAgIGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICBrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuICAgIH1cbiAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICBjb25zdCBuYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1fJHt1aWR9YDtcbiAgICBjb25zdCBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgYWN0aXZlX2RvY3MuYWRkKGRvYyk7XG4gICAgY29uc3Qgc3R5bGVzaGVldCA9IGRvYy5fX3N2ZWx0ZV9zdHlsZXNoZWV0IHx8IChkb2MuX19zdmVsdGVfc3R5bGVzaGVldCA9IGRvYy5oZWFkLmFwcGVuZENoaWxkKGVsZW1lbnQoJ3N0eWxlJykpLnNoZWV0KTtcbiAgICBjb25zdCBjdXJyZW50X3J1bGVzID0gZG9jLl9fc3ZlbHRlX3J1bGVzIHx8IChkb2MuX19zdmVsdGVfcnVsZXMgPSB7fSk7XG4gICAgaWYgKCFjdXJyZW50X3J1bGVzW25hbWVdKSB7XG4gICAgICAgIGN1cnJlbnRfcnVsZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICBzdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcbiAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IGAke2FuaW1hdGlvbiA/IGAke2FuaW1hdGlvbn0sIGAgOiBgYH0ke25hbWV9ICR7ZHVyYXRpb259bXMgbGluZWFyICR7ZGVsYXl9bXMgMSBib3RoYDtcbiAgICBhY3RpdmUgKz0gMTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcbiAgICBjb25zdCBwcmV2aW91cyA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgbmV4dCA9IHByZXZpb3VzLmZpbHRlcihuYW1lXG4gICAgICAgID8gYW5pbSA9PiBhbmltLmluZGV4T2YobmFtZSkgPCAwIC8vIHJlbW92ZSBzcGVjaWZpYyBhbmltYXRpb25cbiAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX19zdmVsdGUnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuICAgICk7XG4gICAgY29uc3QgZGVsZXRlZCA9IHByZXZpb3VzLmxlbmd0aCAtIG5leHQubGVuZ3RoO1xuICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbmV4dC5qb2luKCcsICcpO1xuICAgICAgICBhY3RpdmUgLT0gZGVsZXRlZDtcbiAgICAgICAgaWYgKCFhY3RpdmUpXG4gICAgICAgICAgICBjbGVhcl9ydWxlcygpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGFjdGl2ZV9kb2NzLmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2MuX19zdmVsdGVfc3R5bGVzaGVldDtcbiAgICAgICAgICAgIGxldCBpID0gc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgICAgICAgICAgIGRvYy5fX3N2ZWx0ZV9ydWxlcyA9IHt9O1xuICAgICAgICB9KTtcbiAgICAgICAgYWN0aXZlX2RvY3MuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2FuaW1hdGlvbihub2RlLCBmcm9tLCBmbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFmcm9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGZyb20ubGVmdCA9PT0gdG8ubGVmdCAmJiBmcm9tLnJpZ2h0ID09PSB0by5yaWdodCAmJiBmcm9tLnRvcCA9PT0gdG8udG9wICYmIGZyb20uYm90dG9tID09PSB0by5ib3R0b20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogc2hvdWxkIHRoaXMgYmUgc2VwYXJhdGVkIGZyb20gZGVzdHJ1Y3R1cmluZz8gT3Igc3RhcnQvZW5kIGFkZGVkIHRvIHB1YmxpYyBhcGkgYW5kIGRvY3VtZW50YXRpb24/XG4gICAgc3RhcnQ6IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86XG4gICAgZW5kID0gc3RhcnRfdGltZSArIGR1cmF0aW9uLCB0aWNrID0gbm9vcCwgY3NzIH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IG5hbWU7XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9vcChub3cgPT4ge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgbm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkICYmIG5vdyA+PSBlbmQpIHtcbiAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBzdGFydF90aW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IDAgKyAxICogZWFzaW5nKHAgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBzdGFydCgpO1xuICAgIHRpY2soMCwgMSk7XG4gICAgcmV0dXJuIHN0b3A7XG59XG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScgJiYgc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcbiAgICAgICAgY29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZF90cmFuc2Zvcm0obm9kZSwgYSkge1xuICAgIGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChhLmxlZnQgIT09IGIubGVmdCB8fCBhLnRvcCAhPT0gYi50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcbiAgICB9XG59XG5cbmxldCBjdXJyZW50X2NvbXBvbmVudDtcbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcbiAgICBpZiAoIWN1cnJlbnRfY29tcG9uZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZ1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbmApO1xuICAgIHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbk1vdW50KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG5mdW5jdGlvbiBjcmVhdGVFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgcmV0dXJuICh0eXBlLCBkZXRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1t0eXBlXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgICAgLy8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY29tcG9uZW50LCBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG59XG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4gZm4oZXZlbnQpKTtcbiAgICB9XG59XG5cbmNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbmNvbnN0IGludHJvcyA9IHsgZW5hYmxlZDogZmFsc2UgfTtcbmNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG5jb25zdCByZW5kZXJfY2FsbGJhY2tzID0gW107XG5jb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gICAgaWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG4gICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRpY2soKSB7XG4gICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgcmV0dXJuIHJlc29sdmVkX3Byb21pc2U7XG59XG5mdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG4gICAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFkZF9mbHVzaF9jYWxsYmFjayhmbikge1xuICAgIGZsdXNoX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmxldCBmbHVzaGluZyA9IGZhbHNlO1xuY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBpZiAoZmx1c2hpbmcpXG4gICAgICAgIHJldHVybjtcbiAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHNbaV07XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShjb21wb25lbnQuJCQpO1xuICAgICAgICB9XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgZmx1c2hpbmcgPSBmYWxzZTtcbiAgICBzZWVuX2NhbGxiYWNrcy5jbGVhcigpO1xufVxuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICAgICBjb25zdCBkaXJ0eSA9ICQkLmRpcnR5O1xuICAgICAgICAkJC5kaXJ0eSA9IFstMV07XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LnAoJCQuY3R4LCBkaXJ0eSk7XG4gICAgICAgICQkLmFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICAgIH1cbn1cblxubGV0IHByb21pc2U7XG5mdW5jdGlvbiB3YWl0KCkge1xuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudChgJHtkaXJlY3Rpb24gPyAnaW50cm8nIDogJ291dHJvJ30ke2tpbmR9YCkpO1xufVxuY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG5sZXQgb3V0cm9zO1xuZnVuY3Rpb24gZ3JvdXBfb3V0cm9zKCkge1xuICAgIG91dHJvcyA9IHtcbiAgICAgICAgcjogMCxcbiAgICAgICAgYzogW10sXG4gICAgICAgIHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcbiAgICB9O1xufVxuZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuICAgIGlmICghb3V0cm9zLnIpIHtcbiAgICAgICAgcnVuX2FsbChvdXRyb3MuYyk7XG4gICAgfVxuICAgIG91dHJvcyA9IG91dHJvcy5wO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICBibG9jay5pKGxvY2FsKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2subykge1xuICAgICAgICBpZiAob3V0cm9pbmcuaGFzKGJsb2NrKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgb3V0cm9pbmcuYWRkKGJsb2NrKTtcbiAgICAgICAgb3V0cm9zLmMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRldGFjaClcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZCgxKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYmxvY2subyhsb2NhbCk7XG4gICAgfVxufVxuY29uc3QgbnVsbF90cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMCB9O1xuZnVuY3Rpb24gY3JlYXRlX2luX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCB1aWQgPSAwO1xuICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MsIHVpZCsrKTtcbiAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGFzaylcbiAgICAgICAgICAgIHRhc2suYWJvcnQoKTtcbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIGlmIChzdGFydGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuICAgIGdyb3VwLnIgKz0gMTtcbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuICAgIGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZCA9IHByb2dyYW0uYiAtIHQ7XG4gICAgICAgIGR1cmF0aW9uICo9IE1hdGguYWJzKGQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogdCxcbiAgICAgICAgICAgIGI6IHByb2dyYW0uYixcbiAgICAgICAgICAgIGQsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHN0YXJ0OiBwcm9ncmFtLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBwcm9ncmFtLnN0YXJ0ICsgZHVyYXRpb24sXG4gICAgICAgICAgICBncm91cDogcHJvZ3JhbS5ncm91cFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbyhiKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSB7XG4gICAgICAgICAgICBzdGFydDogbm93KCkgKyBkZWxheSxcbiAgICAgICAgICAgIGJcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgcHJvZ3JhbS5ncm91cCA9IG91dHJvcztcbiAgICAgICAgICAgIG91dHJvcy5yICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGFuIGludHJvLCBhbmQgdGhlcmUncyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbiBpbml0aWFsIHRpY2sgYW5kL29yIGFwcGx5IENTUyBhbmltYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIpXG4gICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBiLCAnc3RhcnQnKSk7XG4gICAgICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdfcHJvZ3JhbSAmJiBub3cgPiBwZW5kaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdzdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgcnVubmluZ19wcm9ncmFtLmIsIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbiwgMCwgZWFzaW5nLCBjb25maWcuY3NzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0ID0gcnVubmluZ19wcm9ncmFtLmIsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtLmIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50cm8g4oCUIHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3V0cm8g4oCUIG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ydW5uaW5nX3Byb2dyYW0uZ3JvdXAucilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwocnVubmluZ19wcm9ncmFtLmdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHJ1bm5pbmdfcHJvZ3JhbS5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBydW5uaW5nX3Byb2dyYW0uYSArIHJ1bm5pbmdfcHJvZ3JhbS5kICogZWFzaW5nKHAgLyBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcnVuKGIpIHtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVfcHJvbWlzZShwcm9taXNlLCBpbmZvKSB7XG4gICAgY29uc3QgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG4gICAgZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpbmZvLnRva2VuICE9PSB0b2tlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHZhbHVlO1xuICAgICAgICBsZXQgY2hpbGRfY3R4ID0gaW5mby5jdHg7XG4gICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2hpbGRfY3R4ID0gY2hpbGRfY3R4LnNsaWNlKCk7XG4gICAgICAgICAgICBjaGlsZF9jdHhba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IG5lZWRzX2ZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5ibG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrc1tpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2NrLmQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgICAgIGJsb2NrLm0oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG4gICAgICAgICAgICBuZWVkc19mbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5ibG9jayA9IGJsb2NrO1xuICAgICAgICBpZiAoaW5mby5ibG9ja3MpXG4gICAgICAgICAgICBpbmZvLmJsb2Nrc1tpbmRleF0gPSBibG9jaztcbiAgICAgICAgaWYgKG5lZWRzX2ZsdXNoKSB7XG4gICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc19wcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgICAgIHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgICAgIGlmICghaW5mby5oYXNDYXRjaCkge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgd2UgcHJldmlvdXNseSBoYWQgYSB0aGVuL2NhdGNoIGJsb2NrLCBkZXN0cm95IGl0XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8ucGVuZGluZykge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8ucGVuZGluZywgMCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby50aGVuKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSBwcm9taXNlO1xuICAgIH1cbn1cblxuY29uc3QgZ2xvYmFscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gd2luZG93XG4gICAgOiB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBnbG9iYWxUaGlzXG4gICAgICAgIDogZ2xvYmFsKTtcblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGRpcnR5LCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGkgPSBuO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgYmxvY2sgPSBsb29rdXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgIGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICByZXR1cm4gbmV3X2Jsb2Nrcztcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfa2V5cyhjdHgsIGxpc3QsIGdldF9jb250ZXh0LCBnZXRfa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcbiAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGhhdmUgZHVwbGljYXRlIGtleXMgaW4gYSBrZXllZCBlYWNoYCk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICAgIGNvbnN0IHRvX251bGxfb3V0ID0ge307XG4gICAgY29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuICAgIGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IG8gPSBsZXZlbHNbaV07XG4gICAgICAgIGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuKSlcbiAgICAgICAgICAgICAgICAgICAgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBuW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWxzW2ldID0gbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRvX251bGxfb3V0KSB7XG4gICAgICAgIGlmICghKGtleSBpbiB1cGRhdGUpKVxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGU7XG59XG5mdW5jdGlvbiBnZXRfc3ByZWFkX29iamVjdChzcHJlYWRfcHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNwcmVhZF9wcm9wcyA9PT0gJ29iamVjdCcgJiYgc3ByZWFkX3Byb3BzICE9PSBudWxsID8gc3ByZWFkX3Byb3BzIDoge307XG59XG5cbi8vIHNvdXJjZTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5kaWNlcy5odG1sXG5jb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgICAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgICAnYWxsb3dwYXltZW50cmVxdWVzdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnYXV0b2ZvY3VzJyxcbiAgICAnYXV0b3BsYXknLFxuICAgICdjaGVja2VkJyxcbiAgICAnY29udHJvbHMnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVmZXInLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Zvcm1ub3ZhbGlkYXRlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaXNtYXAnLFxuICAgICdsb29wJyxcbiAgICAnbXVsdGlwbGUnLFxuICAgICdtdXRlZCcsXG4gICAgJ25vbW9kdWxlJyxcbiAgICAnbm92YWxpZGF0ZScsXG4gICAgJ29wZW4nLFxuICAgICdwbGF5c2lubGluZScsXG4gICAgJ3JlYWRvbmx5JyxcbiAgICAncmVxdWlyZWQnLFxuICAgICdyZXZlcnNlZCcsXG4gICAgJ3NlbGVjdGVkJ1xuXSk7XG5cbmNvbnN0IGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyID0gL1tcXHMnXCI+Lz1cXHV7RkREMH0tXFx1e0ZERUZ9XFx1e0ZGRkV9XFx1e0ZGRkZ9XFx1ezFGRkZFfVxcdXsxRkZGRn1cXHV7MkZGRkV9XFx1ezJGRkZGfVxcdXszRkZGRX1cXHV7M0ZGRkZ9XFx1ezRGRkZFfVxcdXs0RkZGRn1cXHV7NUZGRkV9XFx1ezVGRkZGfVxcdXs2RkZGRX1cXHV7NkZGRkZ9XFx1ezdGRkZFfVxcdXs3RkZGRn1cXHV7OEZGRkV9XFx1ezhGRkZGfVxcdXs5RkZGRX1cXHV7OUZGRkZ9XFx1e0FGRkZFfVxcdXtBRkZGRn1cXHV7QkZGRkV9XFx1e0JGRkZGfVxcdXtDRkZGRX1cXHV7Q0ZGRkZ9XFx1e0RGRkZFfVxcdXtERkZGRn1cXHV7RUZGRkV9XFx1e0VGRkZGfVxcdXtGRkZGRX1cXHV7RkZGRkZ9XFx1ezEwRkZGRX1cXHV7MTBGRkZGfV0vdTtcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI25vbmNoYXJhY3RlclxuZnVuY3Rpb24gc3ByZWFkKGFyZ3MsIGNsYXNzZXNfdG9fYWRkKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmFyZ3MpO1xuICAgIGlmIChjbGFzc2VzX3RvX2FkZCkge1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5jbGFzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzID0gY2xhc3Nlc190b19hZGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzICs9ICcgJyArIGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBzdHIgPSAnJztcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAoaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIudGVzdChuYW1lKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpXG4gICAgICAgICAgICBzdHIgKz0gXCIgXCIgKyBuYW1lO1xuICAgICAgICBlbHNlIGlmIChib29sZWFuX2F0dHJpYnV0ZXMuaGFzKG5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICBzdHIgKz0gXCIgXCIgKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0ciArPSBgICR7bmFtZX09XCIke1N0cmluZyh2YWx1ZSkucmVwbGFjZSgvXCIvZywgJyYjMzQ7JykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKX1cImA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgZXNjYXBlZCA9IHtcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjMzk7JyxcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0Oydcbn07XG5mdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvW1wiJyY8Pl0vZywgbWF0Y2ggPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuZnVuY3Rpb24gZWFjaChpdGVtcywgZm4pIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdHIgKz0gZm4oaXRlbXNbaV0sIGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgbWlzc2luZ19jb21wb25lbnQgPSB7XG4gICAgJCRyZW5kZXI6ICgpID0+ICcnXG59O1xuZnVuY3Rpb24gdmFsaWRhdGVfY29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIGlmICghY29tcG9uZW50IHx8ICFjb21wb25lbnQuJCRyZW5kZXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdzdmVsdGU6Y29tcG9uZW50JylcbiAgICAgICAgICAgIG5hbWUgKz0gJyB0aGlzPXsuLi59JztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGA8JHtuYW1lfT4gaXMgbm90IGEgdmFsaWQgU1NSIGNvbXBvbmVudC4gWW91IG1heSBuZWVkIHRvIHJldmlldyB5b3VyIGJ1aWxkIGNvbmZpZyB0byBlbnN1cmUgdGhhdCBkZXBlbmRlbmNpZXMgYXJlIGNvbXBpbGVkLCByYXRoZXIgdGhhbiBpbXBvcnRlZCBhcyBwcmUtY29tcGlsZWQgbW9kdWxlc2ApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZGVidWcoZmlsZSwgbGluZSwgY29sdW1uLCB2YWx1ZXMpIHtcbiAgICBjb25zb2xlLmxvZyhge0BkZWJ1Z30gJHtmaWxlID8gZmlsZSArICcgJyA6ICcnfSgke2xpbmV9OiR7Y29sdW1ufSlgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2codmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgcmV0dXJuICcnO1xufVxubGV0IG9uX2Rlc3Ryb3k7XG5mdW5jdGlvbiBjcmVhdGVfc3NyX2NvbXBvbmVudChmbikge1xuICAgIGZ1bmN0aW9uICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cykge1xuICAgICAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgICAgIGNvbnN0ICQkID0ge1xuICAgICAgICAgICAgb25fZGVzdHJveSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBNYXAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSxcbiAgICAgICAgICAgIC8vIHRoZXNlIHdpbGwgYmUgaW1tZWRpYXRlbHkgZGlzY2FyZGVkXG4gICAgICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpXG4gICAgICAgIH07XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudCh7ICQkIH0pO1xuICAgICAgICBjb25zdCBodG1sID0gZm4ocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyOiAocHJvcHMgPSB7fSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBvbl9kZXN0cm95ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7IHRpdGxlOiAnJywgaGVhZDogJycsIGNzczogbmV3IFNldCgpIH07XG4gICAgICAgICAgICBjb25zdCBodG1sID0gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywge30sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcnVuX2FsbChvbl9kZXN0cm95KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogQXJyYXkuZnJvbShyZXN1bHQuY3NzKS5tYXAoY3NzID0+IGNzcy5jb2RlKS5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsIC8vIFRPRE9cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWQ6IHJlc3VsdC50aXRsZSArIHJlc3VsdC5oZWFkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAkJHJlbmRlclxuICAgIH07XG59XG5mdW5jdGlvbiBhZGRfYXR0cmlidXRlKG5hbWUsIHZhbHVlLCBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKGJvb2xlYW4gJiYgIXZhbHVlKSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHJldHVybiBgICR7bmFtZX0ke3ZhbHVlID09PSB0cnVlID8gJycgOiBgPSR7dHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KGVzY2FwZSh2YWx1ZSkpIDogYFwiJHt2YWx1ZX1cImB9YH1gO1xufVxuZnVuY3Rpb24gYWRkX2NsYXNzZXMoY2xhc3Nlcykge1xuICAgIHJldHVybiBjbGFzc2VzID8gYCBjbGFzcz1cIiR7Y2xhc3Nlc31cImAgOiBgYDtcbn1cblxuZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb21wb25lbnQuJCQucHJvcHNbbmFtZV07XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50LiQkLmJvdW5kW2luZGV4XSA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayhjb21wb25lbnQuJCQuY3R4W2luZGV4XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuICAgIGJsb2NrICYmIGJsb2NrLmMoKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2NvbXBvbmVudChibG9jaywgcGFyZW50X25vZGVzKSB7XG4gICAgYmxvY2sgJiYgYmxvY2subChwYXJlbnRfbm9kZXMpO1xufVxuZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IpIHtcbiAgICBjb25zdCB7IGZyYWdtZW50LCBvbl9tb3VudCwgb25fZGVzdHJveSwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgLy8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgIGlmIChvbl9kZXN0cm95KSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICBydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICB9KTtcbiAgICBhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQ7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJ1bl9hbGwoJCQub25fZGVzdHJveSk7XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmQoZGV0YWNoaW5nKTtcbiAgICAgICAgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgICAgICAvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG4gICAgICAgICQkLm9uX2Rlc3Ryb3kgPSAkJC5mcmFnbWVudCA9IG51bGw7XG4gICAgICAgICQkLmN0eCA9IFtdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG4gICAgaWYgKGNvbXBvbmVudC4kJC5kaXJ0eVswXSA9PT0gLTEpIHtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgICAgICBjb21wb25lbnQuJCQuZGlydHkuZmlsbCgwKTtcbiAgICB9XG4gICAgY29tcG9uZW50LiQkLmRpcnR5WyhpIC8gMzEpIHwgMF0gfD0gKDEgPDwgKGkgJSAzMSkpO1xufVxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMsIGluc3RhbmNlLCBjcmVhdGVfZnJhZ21lbnQsIG5vdF9lcXVhbCwgcHJvcHMsIGRpcnR5ID0gWy0xXSkge1xuICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICBjb25zdCBwcm9wX3ZhbHVlcyA9IG9wdGlvbnMucHJvcHMgfHwge307XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQgPSB7XG4gICAgICAgIGZyYWdtZW50OiBudWxsLFxuICAgICAgICBjdHg6IG51bGwsXG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHByb3BzLFxuICAgICAgICB1cGRhdGU6IG5vb3AsXG4gICAgICAgIG5vdF9lcXVhbCxcbiAgICAgICAgYm91bmQ6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICAvLyBsaWZlY3ljbGVcbiAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICBvbl9kZXN0cm95OiBbXSxcbiAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgIGNvbnRleHQ6IG5ldyBNYXAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSxcbiAgICAgICAgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIGRpcnR5LFxuICAgICAgICBza2lwX2JvdW5kOiBmYWxzZVxuICAgIH07XG4gICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZShjb21wb25lbnQsIHByb3BfdmFsdWVzLCAoaSwgcmV0LCAuLi5yZXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3QubGVuZ3RoID8gcmVzdFswXSA6IHJldDtcbiAgICAgICAgICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgJCQuY3R4W2ldID0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkJC5za2lwX2JvdW5kICYmICQkLmJvdW5kW2ldKVxuICAgICAgICAgICAgICAgICAgICAkJC5ib3VuZFtpXSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWR5KVxuICAgICAgICAgICAgICAgICAgICBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KVxuICAgICAgICA6IFtdO1xuICAgICQkLnVwZGF0ZSgpO1xuICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgIC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuICAgICQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50ID8gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCkgOiBmYWxzZTtcbiAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaHlkcmF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludHJvKVxuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IpO1xuICAgICAgICBmbHVzaCgpO1xuICAgIH1cbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG5sZXQgU3ZlbHRlRWxlbWVudDtcbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBTdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCQuc2xvdHRlZCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLiQkLnNsb3R0ZWRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbYXR0cl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGRlbGVnYXRlIHRvIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICB9XG4gICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoX2Rldih0eXBlLCBkZXRhaWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudCh0eXBlLCBPYmplY3QuYXNzaWduKHsgdmVyc2lvbjogJzMuMjkuMCcgfSwgZGV0YWlsKSkpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01JbnNlcnRcIiwgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRfZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NSW5zZXJ0XCIsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9kZXYobm9kZSkge1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVJlbW92ZVwiLCB7IG5vZGUgfSk7XG4gICAgZGV0YWNoKG5vZGUpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2JldHdlZW5fZGV2KGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9iZWZvcmVfZGV2KGFmdGVyKSB7XG4gICAgd2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGFmdGVyLnByZXZpb3VzU2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2FmdGVyX2RldihiZWZvcmUpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsaXN0ZW5fZGV2KG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zLCBoYXNfcHJldmVudF9kZWZhdWx0LCBoYXNfc3RvcF9wcm9wYWdhdGlvbikge1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IG9wdGlvbnMgPT09IHRydWUgPyBbXCJjYXB0dXJlXCJdIDogb3B0aW9ucyA/IEFycmF5LmZyb20oT2JqZWN0LmtleXMob3B0aW9ucykpIDogW107XG4gICAgaWYgKGhhc19wcmV2ZW50X2RlZmF1bHQpXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdwcmV2ZW50RGVmYXVsdCcpO1xuICAgIGlmIChoYXNfc3RvcF9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BQcm9wYWdhdGlvbicpO1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTUFkZEV2ZW50TGlzdGVuZXJcIiwgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgIGNvbnN0IGRpc3Bvc2UgPSBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVJlbW92ZUV2ZW50TGlzdGVuZXJcIiwgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgICAgICBkaXNwb3NlKCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHJfZGV2KG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01SZW1vdmVBdHRyaWJ1dGVcIiwgeyBub2RlLCBhdHRyaWJ1dGUgfSk7XG4gICAgZWxzZVxuICAgICAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXRBdHRyaWJ1dGVcIiwgeyBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gcHJvcF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXRQcm9wZXJ0eVwiLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIGRhdGFzZXRfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGUuZGF0YXNldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXREYXRhc2V0XCIsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVNldERhdGFcIiwgeyBub2RlOiB0ZXh0LCBkYXRhIH0pO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50KGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnc3RyaW5nJyAmJiAhKGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBhcmcpKSB7XG4gICAgICAgIGxldCBtc2cgPSAneyNlYWNofSBvbmx5IGl0ZXJhdGVzIG92ZXIgYXJyYXktbGlrZSBvYmplY3RzLic7XG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIGFyZyAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gYXJnKSB7XG4gICAgICAgICAgICBtc2cgKz0gJyBZb3UgY2FuIHVzZSBhIHNwcmVhZCB0byBjb252ZXJ0IHRoaXMgaXRlcmFibGUgaW50byBhbiBhcnJheS4nO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3Nsb3RzKG5hbWUsIHNsb3QsIGtleXMpIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Rfa2V5IG9mIE9iamVjdC5rZXlzKHNsb3QpKSB7XG4gICAgICAgIGlmICghfmtleXMuaW5kZXhPZihzbG90X2tleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgPCR7bmFtZX0+IHJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgc2xvdCBcIiR7c2xvdF9rZXl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBTdmVsdGVDb21wb25lbnREZXYgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICghb3B0aW9ucy50YXJnZXQgJiYgIW9wdGlvbnMuJCRpbmxpbmUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCd0YXJnZXQnIGlzIGEgcmVxdWlyZWQgb3B0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLiRkZXN0cm95KCk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCB3YXMgYWxyZWFkeSBkZXN0cm95ZWRgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH07XG4gICAgfVxuICAgICRjYXB0dXJlX3N0YXRlKCkgeyB9XG4gICAgJGluamVjdF9zdGF0ZSgpIHsgfVxufVxuZnVuY3Rpb24gbG9vcF9ndWFyZCh0aW1lb3V0KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPiB0aW1lb3V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluZmluaXRlIGxvb3AgZGV0ZWN0ZWRgKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCB7IEh0bWxUYWcsIFN2ZWx0ZUNvbXBvbmVudCwgU3ZlbHRlQ29tcG9uZW50RGV2LCBTdmVsdGVFbGVtZW50LCBhY3Rpb25fZGVzdHJveWVyLCBhZGRfYXR0cmlidXRlLCBhZGRfY2xhc3NlcywgYWRkX2ZsdXNoX2NhbGxiYWNrLCBhZGRfbG9jYXRpb24sIGFkZF9yZW5kZXJfY2FsbGJhY2ssIGFkZF9yZXNpemVfbGlzdGVuZXIsIGFkZF90cmFuc2Zvcm0sIGFmdGVyVXBkYXRlLCBhcHBlbmQsIGFwcGVuZF9kZXYsIGFzc2lnbiwgYXR0ciwgYXR0cl9kZXYsIGJlZm9yZVVwZGF0ZSwgYmluZCwgYmluZGluZ19jYWxsYmFja3MsIGJsYW5rX29iamVjdCwgYnViYmxlLCBjaGVja19vdXRyb3MsIGNoaWxkcmVuLCBjbGFpbV9jb21wb25lbnQsIGNsYWltX2VsZW1lbnQsIGNsYWltX3NwYWNlLCBjbGFpbV90ZXh0LCBjbGVhcl9sb29wcywgY29tcG9uZW50X3N1YnNjcmliZSwgY29tcHV0ZV9yZXN0X3Byb3BzLCBjb21wdXRlX3Nsb3RzLCBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGNyZWF0ZV9hbmltYXRpb24sIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24sIGNyZWF0ZV9jb21wb25lbnQsIGNyZWF0ZV9pbl90cmFuc2l0aW9uLCBjcmVhdGVfb3V0X3RyYW5zaXRpb24sIGNyZWF0ZV9zbG90LCBjcmVhdGVfc3NyX2NvbXBvbmVudCwgY3VycmVudF9jb21wb25lbnQsIGN1c3RvbV9ldmVudCwgZGF0YXNldF9kZXYsIGRlYnVnLCBkZXN0cm95X2Jsb2NrLCBkZXN0cm95X2NvbXBvbmVudCwgZGVzdHJveV9lYWNoLCBkZXRhY2gsIGRldGFjaF9hZnRlcl9kZXYsIGRldGFjaF9iZWZvcmVfZGV2LCBkZXRhY2hfYmV0d2Vlbl9kZXYsIGRldGFjaF9kZXYsIGRpcnR5X2NvbXBvbmVudHMsIGRpc3BhdGNoX2RldiwgZWFjaCwgZWxlbWVudCwgZWxlbWVudF9pcywgZW1wdHksIGVzY2FwZSwgZXNjYXBlZCwgZXhjbHVkZV9pbnRlcm5hbF9wcm9wcywgZml4X2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfcG9zaXRpb24sIGZsdXNoLCBnZXRDb250ZXh0LCBnZXRfYmluZGluZ19ncm91cF92YWx1ZSwgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBnZXRfc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0LCBnZXRfc3ByZWFkX29iamVjdCwgZ2V0X3NwcmVhZF91cGRhdGUsIGdldF9zdG9yZV92YWx1ZSwgZ2xvYmFscywgZ3JvdXBfb3V0cm9zLCBoYW5kbGVfcHJvbWlzZSwgaGFzX3Byb3AsIGlkZW50aXR5LCBpbml0LCBpbnNlcnQsIGluc2VydF9kZXYsIGludHJvcywgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIsIGlzX2NsaWVudCwgaXNfY3Jvc3NvcmlnaW4sIGlzX2VtcHR5LCBpc19mdW5jdGlvbiwgaXNfcHJvbWlzZSwgbGlzdGVuLCBsaXN0ZW5fZGV2LCBsb29wLCBsb29wX2d1YXJkLCBtaXNzaW5nX2NvbXBvbmVudCwgbW91bnRfY29tcG9uZW50LCBub29wLCBub3RfZXF1YWwsIG5vdywgbnVsbF90b19lbXB0eSwgb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcywgb25EZXN0cm95LCBvbk1vdW50LCBvbmNlLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgcHJldmVudF9kZWZhdWx0LCBwcm9wX2RldiwgcXVlcnlfc2VsZWN0b3JfYWxsLCByYWYsIHJ1biwgcnVuX2FsbCwgc2FmZV9ub3RfZXF1YWwsIHNjaGVkdWxlX3VwZGF0ZSwgc2VsZWN0X211bHRpcGxlX3ZhbHVlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxmLCBzZXRDb250ZXh0LCBzZXRfYXR0cmlidXRlcywgc2V0X2N1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YSwgc2V0X2RhdGEsIHNldF9kYXRhX2Rldiwgc2V0X2lucHV0X3R5cGUsIHNldF9pbnB1dF92YWx1ZSwgc2V0X25vdywgc2V0X3JhZiwgc2V0X3N0b3JlX3ZhbHVlLCBzZXRfc3R5bGUsIHNldF9zdmdfYXR0cmlidXRlcywgc3BhY2UsIHNwcmVhZCwgc3RvcF9wcm9wYWdhdGlvbiwgc3Vic2NyaWJlLCBzdmdfZWxlbWVudCwgdGV4dCwgdGljaywgdGltZV9yYW5nZXNfdG9fYXJyYXksIHRvX251bWJlciwgdG9nZ2xlX2NsYXNzLCB0cmFuc2l0aW9uX2luLCB0cmFuc2l0aW9uX291dCwgdXBkYXRlX2tleWVkX2VhY2gsIHVwZGF0ZV9zbG90LCB2YWxpZGF0ZV9jb21wb25lbnQsIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQsIHZhbGlkYXRlX2VhY2hfa2V5cywgdmFsaWRhdGVfc2xvdHMsIHZhbGlkYXRlX3N0b3JlLCB4bGlua19hdHRyIH07XG4iLCJpbXBvcnQgTW9kMCBmcm9tICcvVXNlcnMvam9obl9yaWNoYXJkc29uL0RvY3VtZW50cy9Qcm9qZWN0cy9wb3J0Zm9saW8vc3JjL3JvdXRlcy9jb250ZW50L2Fib3V0Lm1kJztcbmltcG9ydCBNb2QxIGZyb20gJy9Vc2Vycy9qb2huX3JpY2hhcmRzb24vRG9jdW1lbnRzL1Byb2plY3RzL3BvcnRmb2xpby9zcmMvcm91dGVzL2NvbnRlbnQvaGlnaGxpZ2h0cy5tZCc7XG5leHBvcnQgZGVmYXVsdCBbXG4gIE1vZDAsXG4gIE1vZDFcbl07IiwiPHNjcmlwdD5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYWxsIGZyb20gJy4vY29udGVudC8qLm1kJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5zdmVsdGUnO1xuXG5leHBvcnQgY29uc3QgbWFwcGVkID0gXG5fLm1hcFZhbHVlcyhhbGwsIChmaWxlKSA9PiB7XG5cdHJldHVybiBmaWxlLmh0bWw7XG59KTtcbmNvbnNvbGUubG9nKGFsbClcbjwvc2NyaXB0PlxuPHN0eWxlPlxuIGltZyB7XG5cdCBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Kb2hubnkgUmljaGFyZHNvbjwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48SGVhZGVyIC8+XG5cbjxkaXYgY2xhc3M9XCJmcm93IHJvdy1zdGFydFwiPlxuXHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEtM1wiPlxuXHRcdDxoMz5BYm91dDwvaDM+XG5cdFx0XG5cdFx0e0BodG1sIG1hcHBlZFsnMCddfVxuXHQ8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZnJvdyByb3ctc3RhcnRcIj5cblx0PGRpdiBjbGFzcz1cImNvbC1tZC0xLTJcIj5cbjxoMz5IaWdobGlnaHRzPC9oMz5cbntAaHRtbCBtYXBwZWRbJzEnXX1cbjwvZGl2PlxuPC9kaXY+IiwiPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBzdGF0dXM7XG5cdGV4cG9ydCBsZXQgZXJyb3I7XG5cblx0Y29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRoMSwgcCB7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHRoMSB7XG5cdFx0Zm9udC1zaXplOiAyLjhlbTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDFlbSBhdXRvO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57c3RhdHVzfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+e3N0YXR1c308L2gxPlxuXG48cD57ZXJyb3IubWVzc2FnZX08L3A+XG5cbnsjaWYgZGV2ICYmIGVycm9yLnN0YWNrfVxuXHQ8cHJlPntlcnJvci5zdGFja308L3ByZT5cbnsvaWZ9XG4iLCIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5pbXBvcnQgKiBhcyByb3V0ZV8wIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvY29udGVudC9oaWdobGlnaHRzLm1kXCI7XG5pbXBvcnQgKiBhcyByb3V0ZV8xIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvY29udGVudC9hYm91dC5tZFwiO1xuaW1wb3J0ICogYXMgY29tcG9uZW50XzAgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9pbmRleC5zdmVsdGVcIjtcbmltcG9ydCAqIGFzIHJvb3RfY29tcCBmcm9tIFwiLi9sYXlvdXQuc3ZlbHRlXCI7XG5pbXBvcnQgZXJyb3IgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlXCI7XG5cbmNvbnN0IGQgPSBkZWNvZGVVUklDb21wb25lbnQ7XG5cbmV4cG9ydCBjb25zdCBtYW5pZmVzdCA9IHtcblx0c2VydmVyX3JvdXRlczogW1xuXHRcdHtcblx0XHRcdC8vIGNvbnRlbnQvaGlnaGxpZ2h0cy5tZFxuXHRcdFx0cGF0dGVybjogL15cXC9jb250ZW50XFwvaGlnaGxpZ2h0c1xcLz8kLyxcblx0XHRcdGhhbmRsZXJzOiByb3V0ZV8wLFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGNvbnRlbnQvYWJvdXQubWRcblx0XHRcdHBhdHRlcm46IC9eXFwvY29udGVudFxcL2Fib3V0XFwvPyQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzEsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9XG5cdF0sXG5cblx0cGFnZXM6IFtcblx0XHR7XG5cdFx0XHQvLyBpbmRleC5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvJC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwiaW5kZXhcIiwgZmlsZTogXCJpbmRleC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMCB9XG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXG5cdHJvb3RfY29tcCxcblx0ZXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCBidWlsZF9kaXIgPSBcIl9fc2FwcGVyX18vZGV2XCI7XG5cbmV4cG9ydCBjb25zdCBzcmNfZGlyID0gXCJzcmNcIjtcblxuZXhwb3J0IGNvbnN0IGRldiA9IHRydWU7IiwiaW1wb3J0IHsgbm9vcCwgc2FmZV9ub3RfZXF1YWwsIHN1YnNjcmliZSwgcnVuX2FsbCwgaXNfZnVuY3Rpb24gfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5leHBvcnQgeyBnZXRfc3RvcmVfdmFsdWUgYXMgZ2V0IH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXJ9c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IHdyaXRhYmxlKHZhbHVlLCBzdGFydCkuc3Vic2NyaWJlXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB7Kj19dmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQgPSBub29wKSB7XG4gICAgbGV0IHN0b3A7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBbXTtcbiAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlKSB7XG4gICAgICAgIGlmIChzYWZlX25vdF9lcXVhbCh2YWx1ZSwgbmV3X3ZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICBpZiAoc3RvcCkgeyAvLyBzdG9yZSBpcyByZWFkeVxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bl9xdWV1ZSA9ICFzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgc1sxXSgpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLnB1c2gocywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVuX3F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZVtpXVswXShzdWJzY3JpYmVyX3F1ZXVlW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGUoZm4pIHtcbiAgICAgICAgc2V0KGZuKHZhbHVlKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShydW4sIGludmFsaWRhdGUgPSBub29wKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBbcnVuLCBpbnZhbGlkYXRlXTtcbiAgICAgICAgc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgc3RvcCA9IHN0YXJ0KHNldCkgfHwgbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBydW4odmFsdWUpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVycy5pbmRleE9mKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIHN0b3AgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG59XG5mdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcbiAgICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuICAgIGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZVxuICAgICAgICA/IFtzdG9yZXNdXG4gICAgICAgIDogc3RvcmVzO1xuICAgIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICAgIHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0KSA9PiB7XG4gICAgICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBub29wO1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCk7XG4gICAgICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgICAgICAgIHNldChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+IHN1YnNjcmliZShzdG9yZSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHBlbmRpbmcgJj0gfigxIDw8IGkpO1xuICAgICAgICAgICAgaWYgKGluaXRlZCkge1xuICAgICAgICAgICAgICAgIHN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcGVuZGluZyB8PSAoMSA8PCBpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgICBzeW5jKCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh1bnN1YnNjcmliZXJzKTtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZGVyaXZlZCwgcmVhZGFibGUsIHdyaXRhYmxlIH07XG4iLCJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBDT05URVhUX0tFWSA9IHt9O1xuXG5leHBvcnQgY29uc3QgcHJlbG9hZCA9ICgpID0+ICh7fSk7IiwiPCEtLSBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhIC0tPlxuPHNjcmlwdD5cblx0aW1wb3J0IHsgc2V0Q29udGV4dCwgYWZ0ZXJVcGRhdGUgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgeyBDT05URVhUX0tFWSB9IGZyb20gJy4vc2hhcmVkJztcblx0aW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dC5zdmVsdGUnO1xuXHRpbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vLi4vcm91dGVzL19lcnJvci5zdmVsdGUnO1xuXG5cdGV4cG9ydCBsZXQgc3RvcmVzO1xuXHRleHBvcnQgbGV0IGVycm9yO1xuXHRleHBvcnQgbGV0IHN0YXR1cztcblx0ZXhwb3J0IGxldCBzZWdtZW50cztcblx0ZXhwb3J0IGxldCBsZXZlbDA7XG5cdGV4cG9ydCBsZXQgbGV2ZWwxID0gbnVsbDtcblx0ZXhwb3J0IGxldCBub3RpZnk7XG5cblx0YWZ0ZXJVcGRhdGUobm90aWZ5KTtcblx0c2V0Q29udGV4dChDT05URVhUX0tFWSwgc3RvcmVzKTtcbjwvc2NyaXB0PlxuXG48TGF5b3V0IHNlZ21lbnQ9XCJ7c2VnbWVudHNbMF19XCIgey4uLmxldmVsMC5wcm9wc30+XG5cdHsjaWYgZXJyb3J9XG5cdFx0PEVycm9yIHtlcnJvcn0ge3N0YXR1c30vPlxuXHR7OmVsc2V9XG5cdFx0PHN2ZWx0ZTpjb21wb25lbnQgdGhpcz1cIntsZXZlbDEuY29tcG9uZW50fVwiIHsuLi5sZXZlbDEucHJvcHN9Lz5cblx0ey9pZn1cbjwvTGF5b3V0PiIsImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGJ1aWxkX2RpciwgZGV2LCBzcmNfZGlyLCBtYW5pZmVzdCB9IGZyb20gJy4vaW50ZXJuYWwvbWFuaWZlc3Qtc2VydmVyJztcbmltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcbmltcG9ydCBTdHJlYW0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IGh0dHBzIGZyb20gJ2h0dHBzJztcbmltcG9ydCB6bGliIGZyb20gJ3psaWInO1xuaW1wb3J0IEFwcCBmcm9tICcuL2ludGVybmFsL0FwcC5zdmVsdGUnO1xuXG4vKipcbiAqIEBwYXJhbSB0eXBlTWFwIFtPYmplY3RdIE1hcCBvZiBNSU1FIHR5cGUgLT4gQXJyYXlbZXh0ZW5zaW9uc11cbiAqIEBwYXJhbSAuLi5cbiAqL1xuZnVuY3Rpb24gTWltZSgpIHtcbiAgdGhpcy5fdHlwZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9leHRlbnNpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuZGVmaW5lKGFyZ3VtZW50c1tpXSk7XG4gIH1cblxuICB0aGlzLmRlZmluZSA9IHRoaXMuZGVmaW5lLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2V0VHlwZSA9IHRoaXMuZ2V0VHlwZS5iaW5kKHRoaXMpO1xuICB0aGlzLmdldEV4dGVuc2lvbiA9IHRoaXMuZ2V0RXh0ZW5zaW9uLmJpbmQodGhpcyk7XG59XG5cbi8qKlxuICogRGVmaW5lIG1pbWV0eXBlIC0+IGV4dGVuc2lvbiBtYXBwaW5ncy4gIEVhY2gga2V5IGlzIGEgbWltZS10eXBlIHRoYXQgbWFwc1xuICogdG8gYW4gYXJyYXkgb2YgZXh0ZW5zaW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIHR5cGUuICBUaGUgZmlyc3QgZXh0ZW5zaW9uIGlzXG4gKiB1c2VkIGFzIHRoZSBkZWZhdWx0IGV4dGVuc2lvbiBmb3IgdGhlIHR5cGUuXG4gKlxuICogZS5nLiBtaW1lLmRlZmluZSh7J2F1ZGlvL29nZycsIFsnb2dhJywgJ29nZycsICdzcHgnXX0pO1xuICpcbiAqIElmIGEgdHlwZSBkZWNsYXJlcyBhbiBleHRlbnNpb24gdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQsIGFuIGVycm9yIHdpbGxcbiAqIGJlIHRocm93bi4gIFRvIHN1cHByZXNzIHRoaXMgZXJyb3IgYW5kIGZvcmNlIHRoZSBleHRlbnNpb24gdG8gYmUgYXNzb2NpYXRlZFxuICogd2l0aCB0aGUgbmV3IHR5cGUsIHBhc3MgYGZvcmNlYD10cnVlLiAgQWx0ZXJuYXRpdmVseSwgeW91IG1heSBwcmVmaXggdGhlXG4gKiBleHRlbnNpb24gd2l0aCBcIipcIiB0byBtYXAgdGhlIHR5cGUgdG8gZXh0ZW5zaW9uLCB3aXRob3V0IG1hcHBpbmcgdGhlXG4gKiBleHRlbnNpb24gdG8gdGhlIHR5cGUuXG4gKlxuICogZS5nLiBtaW1lLmRlZmluZSh7J2F1ZGlvL3dhdicsIFsnd2F2J119LCB7J2F1ZGlvL3gtd2F2JywgWycqd2F2J119KTtcbiAqXG4gKlxuICogQHBhcmFtIG1hcCAoT2JqZWN0KSB0eXBlIGRlZmluaXRpb25zXG4gKiBAcGFyYW0gZm9yY2UgKEJvb2xlYW4pIGlmIHRydWUsIGZvcmNlIG92ZXJyaWRpbmcgb2YgZXhpc3RpbmcgZGVmaW5pdGlvbnNcbiAqL1xuTWltZS5wcm90b3R5cGUuZGVmaW5lID0gZnVuY3Rpb24odHlwZU1hcCwgZm9yY2UpIHtcbiAgZm9yICh2YXIgdHlwZSBpbiB0eXBlTWFwKSB7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSB0eXBlTWFwW3R5cGVdLm1hcChmdW5jdGlvbih0KSB7cmV0dXJuIHQudG9Mb3dlckNhc2UoKX0pO1xuICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBleHQgPSBleHRlbnNpb25zW2ldO1xuXG4gICAgICAvLyAnKicgcHJlZml4ID0gbm90IHRoZSBwcmVmZXJyZWQgdHlwZSBmb3IgdGhpcyBleHRlbnNpb24uICBTbyBmaXh1cCB0aGVcbiAgICAgIC8vIGV4dGVuc2lvbiwgYW5kIHNraXAgaXQuXG4gICAgICBpZiAoZXh0WzBdID09ICcqJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JjZSAmJiAoZXh0IGluIHRoaXMuX3R5cGVzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0F0dGVtcHQgdG8gY2hhbmdlIG1hcHBpbmcgZm9yIFwiJyArIGV4dCArXG4gICAgICAgICAgJ1wiIGV4dGVuc2lvbiBmcm9tIFwiJyArIHRoaXMuX3R5cGVzW2V4dF0gKyAnXCIgdG8gXCInICsgdHlwZSArXG4gICAgICAgICAgJ1wiLiBQYXNzIGBmb3JjZT10cnVlYCB0byBhbGxvdyB0aGlzLCBvdGhlcndpc2UgcmVtb3ZlIFwiJyArIGV4dCArXG4gICAgICAgICAgJ1wiIGZyb20gdGhlIGxpc3Qgb2YgZXh0ZW5zaW9ucyBmb3IgXCInICsgdHlwZSArICdcIi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3R5cGVzW2V4dF0gPSB0eXBlO1xuICAgIH1cblxuICAgIC8vIFVzZSBmaXJzdCBleHRlbnNpb24gYXMgZGVmYXVsdFxuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5fZXh0ZW5zaW9uc1t0eXBlXSkge1xuICAgICAgdmFyIGV4dCA9IGV4dGVuc2lvbnNbMF07XG4gICAgICB0aGlzLl9leHRlbnNpb25zW3R5cGVdID0gKGV4dFswXSAhPSAnKicpID8gZXh0IDogZXh0LnN1YnN0cigxKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogTG9va3VwIGEgbWltZSB0eXBlIGJhc2VkIG9uIGV4dGVuc2lvblxuICovXG5NaW1lLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24ocGF0aCkge1xuICBwYXRoID0gU3RyaW5nKHBhdGgpO1xuICB2YXIgbGFzdCA9IHBhdGgucmVwbGFjZSgvXi4qWy9cXFxcXS8sICcnKS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgZXh0ID0gbGFzdC5yZXBsYWNlKC9eLipcXC4vLCAnJykudG9Mb3dlckNhc2UoKTtcblxuICB2YXIgaGFzUGF0aCA9IGxhc3QubGVuZ3RoIDwgcGF0aC5sZW5ndGg7XG4gIHZhciBoYXNEb3QgPSBleHQubGVuZ3RoIDwgbGFzdC5sZW5ndGggLSAxO1xuXG4gIHJldHVybiAoaGFzRG90IHx8ICFoYXNQYXRoKSAmJiB0aGlzLl90eXBlc1tleHRdIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIFJldHVybiBmaWxlIGV4dGVuc2lvbiBhc3NvY2lhdGVkIHdpdGggYSBtaW1lIHR5cGVcbiAqL1xuTWltZS5wcm90b3R5cGUuZ2V0RXh0ZW5zaW9uID0gZnVuY3Rpb24odHlwZSkge1xuICB0eXBlID0gL15cXHMqKFteO1xcc10qKS8udGVzdCh0eXBlKSAmJiBSZWdFeHAuJDE7XG4gIHJldHVybiB0eXBlICYmIHRoaXMuX2V4dGVuc2lvbnNbdHlwZS50b0xvd2VyQ2FzZSgpXSB8fCBudWxsO1xufTtcblxudmFyIE1pbWVfMSA9IE1pbWU7XG5cbnZhciBzdGFuZGFyZCA9IHtcImFwcGxpY2F0aW9uL2FuZHJldy1pbnNldFwiOltcImV6XCJdLFwiYXBwbGljYXRpb24vYXBwbGl4d2FyZVwiOltcImF3XCJdLFwiYXBwbGljYXRpb24vYXRvbSt4bWxcIjpbXCJhdG9tXCJdLFwiYXBwbGljYXRpb24vYXRvbWNhdCt4bWxcIjpbXCJhdG9tY2F0XCJdLFwiYXBwbGljYXRpb24vYXRvbWRlbGV0ZWQreG1sXCI6W1wiYXRvbWRlbGV0ZWRcIl0sXCJhcHBsaWNhdGlvbi9hdG9tc3ZjK3htbFwiOltcImF0b21zdmNcIl0sXCJhcHBsaWNhdGlvbi9hdHNjLWR3ZCt4bWxcIjpbXCJkd2RcIl0sXCJhcHBsaWNhdGlvbi9hdHNjLWhlbGQreG1sXCI6W1wiaGVsZFwiXSxcImFwcGxpY2F0aW9uL2F0c2MtcnNhdCt4bWxcIjpbXCJyc2F0XCJdLFwiYXBwbGljYXRpb24vYmRvY1wiOltcImJkb2NcIl0sXCJhcHBsaWNhdGlvbi9jYWxlbmRhcit4bWxcIjpbXCJ4Y3NcIl0sXCJhcHBsaWNhdGlvbi9jY3htbCt4bWxcIjpbXCJjY3htbFwiXSxcImFwcGxpY2F0aW9uL2NkZngreG1sXCI6W1wiY2RmeFwiXSxcImFwcGxpY2F0aW9uL2NkbWktY2FwYWJpbGl0eVwiOltcImNkbWlhXCJdLFwiYXBwbGljYXRpb24vY2RtaS1jb250YWluZXJcIjpbXCJjZG1pY1wiXSxcImFwcGxpY2F0aW9uL2NkbWktZG9tYWluXCI6W1wiY2RtaWRcIl0sXCJhcHBsaWNhdGlvbi9jZG1pLW9iamVjdFwiOltcImNkbWlvXCJdLFwiYXBwbGljYXRpb24vY2RtaS1xdWV1ZVwiOltcImNkbWlxXCJdLFwiYXBwbGljYXRpb24vY3Utc2VlbWVcIjpbXCJjdVwiXSxcImFwcGxpY2F0aW9uL2Rhc2greG1sXCI6W1wibXBkXCJdLFwiYXBwbGljYXRpb24vZGF2bW91bnQreG1sXCI6W1wiZGF2bW91bnRcIl0sXCJhcHBsaWNhdGlvbi9kb2Nib29rK3htbFwiOltcImRia1wiXSxcImFwcGxpY2F0aW9uL2Rzc2MrZGVyXCI6W1wiZHNzY1wiXSxcImFwcGxpY2F0aW9uL2Rzc2MreG1sXCI6W1wieGRzc2NcIl0sXCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0XCI6W1wiZWNtYVwiLFwiZXNcIl0sXCJhcHBsaWNhdGlvbi9lbW1hK3htbFwiOltcImVtbWFcIl0sXCJhcHBsaWNhdGlvbi9lbW90aW9ubWwreG1sXCI6W1wiZW1vdGlvbm1sXCJdLFwiYXBwbGljYXRpb24vZXB1Yit6aXBcIjpbXCJlcHViXCJdLFwiYXBwbGljYXRpb24vZXhpXCI6W1wiZXhpXCJdLFwiYXBwbGljYXRpb24vZmR0K3htbFwiOltcImZkdFwiXSxcImFwcGxpY2F0aW9uL2ZvbnQtdGRwZnJcIjpbXCJwZnJcIl0sXCJhcHBsaWNhdGlvbi9nZW8ranNvblwiOltcImdlb2pzb25cIl0sXCJhcHBsaWNhdGlvbi9nbWwreG1sXCI6W1wiZ21sXCJdLFwiYXBwbGljYXRpb24vZ3B4K3htbFwiOltcImdweFwiXSxcImFwcGxpY2F0aW9uL2d4ZlwiOltcImd4ZlwiXSxcImFwcGxpY2F0aW9uL2d6aXBcIjpbXCJnelwiXSxcImFwcGxpY2F0aW9uL2hqc29uXCI6W1wiaGpzb25cIl0sXCJhcHBsaWNhdGlvbi9oeXBlcnN0dWRpb1wiOltcInN0a1wiXSxcImFwcGxpY2F0aW9uL2lua21sK3htbFwiOltcImlua1wiLFwiaW5rbWxcIl0sXCJhcHBsaWNhdGlvbi9pcGZpeFwiOltcImlwZml4XCJdLFwiYXBwbGljYXRpb24vaXRzK3htbFwiOltcIml0c1wiXSxcImFwcGxpY2F0aW9uL2phdmEtYXJjaGl2ZVwiOltcImphclwiLFwid2FyXCIsXCJlYXJcIl0sXCJhcHBsaWNhdGlvbi9qYXZhLXNlcmlhbGl6ZWQtb2JqZWN0XCI6W1wic2VyXCJdLFwiYXBwbGljYXRpb24vamF2YS12bVwiOltcImNsYXNzXCJdLFwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiOltcImpzXCIsXCJtanNcIl0sXCJhcHBsaWNhdGlvbi9qc29uXCI6W1wianNvblwiLFwibWFwXCJdLFwiYXBwbGljYXRpb24vanNvbjVcIjpbXCJqc29uNVwiXSxcImFwcGxpY2F0aW9uL2pzb25tbCtqc29uXCI6W1wianNvbm1sXCJdLFwiYXBwbGljYXRpb24vbGQranNvblwiOltcImpzb25sZFwiXSxcImFwcGxpY2F0aW9uL2xncit4bWxcIjpbXCJsZ3JcIl0sXCJhcHBsaWNhdGlvbi9sb3N0K3htbFwiOltcImxvc3R4bWxcIl0sXCJhcHBsaWNhdGlvbi9tYWMtYmluaGV4NDBcIjpbXCJocXhcIl0sXCJhcHBsaWNhdGlvbi9tYWMtY29tcGFjdHByb1wiOltcImNwdFwiXSxcImFwcGxpY2F0aW9uL21hZHMreG1sXCI6W1wibWFkc1wiXSxcImFwcGxpY2F0aW9uL21hbmlmZXN0K2pzb25cIjpbXCJ3ZWJtYW5pZmVzdFwiXSxcImFwcGxpY2F0aW9uL21hcmNcIjpbXCJtcmNcIl0sXCJhcHBsaWNhdGlvbi9tYXJjeG1sK3htbFwiOltcIm1yY3hcIl0sXCJhcHBsaWNhdGlvbi9tYXRoZW1hdGljYVwiOltcIm1hXCIsXCJuYlwiLFwibWJcIl0sXCJhcHBsaWNhdGlvbi9tYXRobWwreG1sXCI6W1wibWF0aG1sXCJdLFwiYXBwbGljYXRpb24vbWJveFwiOltcIm1ib3hcIl0sXCJhcHBsaWNhdGlvbi9tZWRpYXNlcnZlcmNvbnRyb2wreG1sXCI6W1wibXNjbWxcIl0sXCJhcHBsaWNhdGlvbi9tZXRhbGluayt4bWxcIjpbXCJtZXRhbGlua1wiXSxcImFwcGxpY2F0aW9uL21ldGFsaW5rNCt4bWxcIjpbXCJtZXRhNFwiXSxcImFwcGxpY2F0aW9uL21ldHMreG1sXCI6W1wibWV0c1wiXSxcImFwcGxpY2F0aW9uL21tdC1hZWkreG1sXCI6W1wibWFlaVwiXSxcImFwcGxpY2F0aW9uL21tdC11c2QreG1sXCI6W1wibXVzZFwiXSxcImFwcGxpY2F0aW9uL21vZHMreG1sXCI6W1wibW9kc1wiXSxcImFwcGxpY2F0aW9uL21wMjFcIjpbXCJtMjFcIixcIm1wMjFcIl0sXCJhcHBsaWNhdGlvbi9tcDRcIjpbXCJtcDRzXCIsXCJtNHBcIl0sXCJhcHBsaWNhdGlvbi9tcmItY29uc3VtZXIreG1sXCI6W1wiKnhkZlwiXSxcImFwcGxpY2F0aW9uL21yYi1wdWJsaXNoK3htbFwiOltcIip4ZGZcIl0sXCJhcHBsaWNhdGlvbi9tc3dvcmRcIjpbXCJkb2NcIixcImRvdFwiXSxcImFwcGxpY2F0aW9uL214ZlwiOltcIm14ZlwiXSxcImFwcGxpY2F0aW9uL24tcXVhZHNcIjpbXCJucVwiXSxcImFwcGxpY2F0aW9uL24tdHJpcGxlc1wiOltcIm50XCJdLFwiYXBwbGljYXRpb24vbm9kZVwiOltcImNqc1wiXSxcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiOltcImJpblwiLFwiZG1zXCIsXCJscmZcIixcIm1hclwiLFwic29cIixcImRpc3RcIixcImRpc3R6XCIsXCJwa2dcIixcImJwa1wiLFwiZHVtcFwiLFwiZWxjXCIsXCJkZXBsb3lcIixcImV4ZVwiLFwiZGxsXCIsXCJkZWJcIixcImRtZ1wiLFwiaXNvXCIsXCJpbWdcIixcIm1zaVwiLFwibXNwXCIsXCJtc21cIixcImJ1ZmZlclwiXSxcImFwcGxpY2F0aW9uL29kYVwiOltcIm9kYVwiXSxcImFwcGxpY2F0aW9uL29lYnBzLXBhY2thZ2UreG1sXCI6W1wib3BmXCJdLFwiYXBwbGljYXRpb24vb2dnXCI6W1wib2d4XCJdLFwiYXBwbGljYXRpb24vb21kb2MreG1sXCI6W1wib21kb2NcIl0sXCJhcHBsaWNhdGlvbi9vbmVub3RlXCI6W1wib25ldG9jXCIsXCJvbmV0b2MyXCIsXCJvbmV0bXBcIixcIm9uZXBrZ1wiXSxcImFwcGxpY2F0aW9uL294cHNcIjpbXCJveHBzXCJdLFwiYXBwbGljYXRpb24vcDJwLW92ZXJsYXkreG1sXCI6W1wicmVsb1wiXSxcImFwcGxpY2F0aW9uL3BhdGNoLW9wcy1lcnJvcit4bWxcIjpbXCIqeGVyXCJdLFwiYXBwbGljYXRpb24vcGRmXCI6W1wicGRmXCJdLFwiYXBwbGljYXRpb24vcGdwLWVuY3J5cHRlZFwiOltcInBncFwiXSxcImFwcGxpY2F0aW9uL3BncC1zaWduYXR1cmVcIjpbXCJhc2NcIixcInNpZ1wiXSxcImFwcGxpY2F0aW9uL3BpY3MtcnVsZXNcIjpbXCJwcmZcIl0sXCJhcHBsaWNhdGlvbi9wa2NzMTBcIjpbXCJwMTBcIl0sXCJhcHBsaWNhdGlvbi9wa2NzNy1taW1lXCI6W1wicDdtXCIsXCJwN2NcIl0sXCJhcHBsaWNhdGlvbi9wa2NzNy1zaWduYXR1cmVcIjpbXCJwN3NcIl0sXCJhcHBsaWNhdGlvbi9wa2NzOFwiOltcInA4XCJdLFwiYXBwbGljYXRpb24vcGtpeC1hdHRyLWNlcnRcIjpbXCJhY1wiXSxcImFwcGxpY2F0aW9uL3BraXgtY2VydFwiOltcImNlclwiXSxcImFwcGxpY2F0aW9uL3BraXgtY3JsXCI6W1wiY3JsXCJdLFwiYXBwbGljYXRpb24vcGtpeC1wa2lwYXRoXCI6W1wicGtpcGF0aFwiXSxcImFwcGxpY2F0aW9uL3BraXhjbXBcIjpbXCJwa2lcIl0sXCJhcHBsaWNhdGlvbi9wbHMreG1sXCI6W1wicGxzXCJdLFwiYXBwbGljYXRpb24vcG9zdHNjcmlwdFwiOltcImFpXCIsXCJlcHNcIixcInBzXCJdLFwiYXBwbGljYXRpb24vcHJvdmVuYW5jZSt4bWxcIjpbXCJwcm92eFwiXSxcImFwcGxpY2F0aW9uL3Bza2MreG1sXCI6W1wicHNrY3htbFwiXSxcImFwcGxpY2F0aW9uL3JhbWwreWFtbFwiOltcInJhbWxcIl0sXCJhcHBsaWNhdGlvbi9yZGYreG1sXCI6W1wicmRmXCIsXCJvd2xcIl0sXCJhcHBsaWNhdGlvbi9yZWdpbmZvK3htbFwiOltcInJpZlwiXSxcImFwcGxpY2F0aW9uL3JlbGF4LW5nLWNvbXBhY3Qtc3ludGF4XCI6W1wicm5jXCJdLFwiYXBwbGljYXRpb24vcmVzb3VyY2UtbGlzdHMreG1sXCI6W1wicmxcIl0sXCJhcHBsaWNhdGlvbi9yZXNvdXJjZS1saXN0cy1kaWZmK3htbFwiOltcInJsZFwiXSxcImFwcGxpY2F0aW9uL3Jscy1zZXJ2aWNlcyt4bWxcIjpbXCJyc1wiXSxcImFwcGxpY2F0aW9uL3JvdXRlLWFwZCt4bWxcIjpbXCJyYXBkXCJdLFwiYXBwbGljYXRpb24vcm91dGUtcy10c2lkK3htbFwiOltcInNsc1wiXSxcImFwcGxpY2F0aW9uL3JvdXRlLXVzZCt4bWxcIjpbXCJydXNkXCJdLFwiYXBwbGljYXRpb24vcnBraS1naG9zdGJ1c3RlcnNcIjpbXCJnYnJcIl0sXCJhcHBsaWNhdGlvbi9ycGtpLW1hbmlmZXN0XCI6W1wibWZ0XCJdLFwiYXBwbGljYXRpb24vcnBraS1yb2FcIjpbXCJyb2FcIl0sXCJhcHBsaWNhdGlvbi9yc2QreG1sXCI6W1wicnNkXCJdLFwiYXBwbGljYXRpb24vcnNzK3htbFwiOltcInJzc1wiXSxcImFwcGxpY2F0aW9uL3J0ZlwiOltcInJ0ZlwiXSxcImFwcGxpY2F0aW9uL3NibWwreG1sXCI6W1wic2JtbFwiXSxcImFwcGxpY2F0aW9uL3NjdnAtY3YtcmVxdWVzdFwiOltcInNjcVwiXSxcImFwcGxpY2F0aW9uL3NjdnAtY3YtcmVzcG9uc2VcIjpbXCJzY3NcIl0sXCJhcHBsaWNhdGlvbi9zY3ZwLXZwLXJlcXVlc3RcIjpbXCJzcHFcIl0sXCJhcHBsaWNhdGlvbi9zY3ZwLXZwLXJlc3BvbnNlXCI6W1wic3BwXCJdLFwiYXBwbGljYXRpb24vc2RwXCI6W1wic2RwXCJdLFwiYXBwbGljYXRpb24vc2VubWwreG1sXCI6W1wic2VubWx4XCJdLFwiYXBwbGljYXRpb24vc2Vuc21sK3htbFwiOltcInNlbnNtbHhcIl0sXCJhcHBsaWNhdGlvbi9zZXQtcGF5bWVudC1pbml0aWF0aW9uXCI6W1wic2V0cGF5XCJdLFwiYXBwbGljYXRpb24vc2V0LXJlZ2lzdHJhdGlvbi1pbml0aWF0aW9uXCI6W1wic2V0cmVnXCJdLFwiYXBwbGljYXRpb24vc2hmK3htbFwiOltcInNoZlwiXSxcImFwcGxpY2F0aW9uL3NpZXZlXCI6W1wic2l2XCIsXCJzaWV2ZVwiXSxcImFwcGxpY2F0aW9uL3NtaWwreG1sXCI6W1wic21pXCIsXCJzbWlsXCJdLFwiYXBwbGljYXRpb24vc3BhcnFsLXF1ZXJ5XCI6W1wicnFcIl0sXCJhcHBsaWNhdGlvbi9zcGFycWwtcmVzdWx0cyt4bWxcIjpbXCJzcnhcIl0sXCJhcHBsaWNhdGlvbi9zcmdzXCI6W1wiZ3JhbVwiXSxcImFwcGxpY2F0aW9uL3NyZ3MreG1sXCI6W1wiZ3J4bWxcIl0sXCJhcHBsaWNhdGlvbi9zcnUreG1sXCI6W1wic3J1XCJdLFwiYXBwbGljYXRpb24vc3NkbCt4bWxcIjpbXCJzc2RsXCJdLFwiYXBwbGljYXRpb24vc3NtbCt4bWxcIjpbXCJzc21sXCJdLFwiYXBwbGljYXRpb24vc3dpZCt4bWxcIjpbXCJzd2lkdGFnXCJdLFwiYXBwbGljYXRpb24vdGVpK3htbFwiOltcInRlaVwiLFwidGVpY29ycHVzXCJdLFwiYXBwbGljYXRpb24vdGhyYXVkK3htbFwiOltcInRmaVwiXSxcImFwcGxpY2F0aW9uL3RpbWVzdGFtcGVkLWRhdGFcIjpbXCJ0c2RcIl0sXCJhcHBsaWNhdGlvbi90b21sXCI6W1widG9tbFwiXSxcImFwcGxpY2F0aW9uL3R0bWwreG1sXCI6W1widHRtbFwiXSxcImFwcGxpY2F0aW9uL3VyYy1yZXNzaGVldCt4bWxcIjpbXCJyc2hlZXRcIl0sXCJhcHBsaWNhdGlvbi92b2ljZXhtbCt4bWxcIjpbXCJ2eG1sXCJdLFwiYXBwbGljYXRpb24vd2FzbVwiOltcIndhc21cIl0sXCJhcHBsaWNhdGlvbi93aWRnZXRcIjpbXCJ3Z3RcIl0sXCJhcHBsaWNhdGlvbi93aW5obHBcIjpbXCJobHBcIl0sXCJhcHBsaWNhdGlvbi93c2RsK3htbFwiOltcIndzZGxcIl0sXCJhcHBsaWNhdGlvbi93c3BvbGljeSt4bWxcIjpbXCJ3c3BvbGljeVwiXSxcImFwcGxpY2F0aW9uL3hhbWwreG1sXCI6W1wieGFtbFwiXSxcImFwcGxpY2F0aW9uL3hjYXAtYXR0K3htbFwiOltcInhhdlwiXSxcImFwcGxpY2F0aW9uL3hjYXAtY2Fwcyt4bWxcIjpbXCJ4Y2FcIl0sXCJhcHBsaWNhdGlvbi94Y2FwLWRpZmYreG1sXCI6W1wieGRmXCJdLFwiYXBwbGljYXRpb24veGNhcC1lbCt4bWxcIjpbXCJ4ZWxcIl0sXCJhcHBsaWNhdGlvbi94Y2FwLWVycm9yK3htbFwiOltcInhlclwiXSxcImFwcGxpY2F0aW9uL3hjYXAtbnMreG1sXCI6W1wieG5zXCJdLFwiYXBwbGljYXRpb24veGVuYyt4bWxcIjpbXCJ4ZW5jXCJdLFwiYXBwbGljYXRpb24veGh0bWwreG1sXCI6W1wieGh0bWxcIixcInhodFwiXSxcImFwcGxpY2F0aW9uL3hsaWZmK3htbFwiOltcInhsZlwiXSxcImFwcGxpY2F0aW9uL3htbFwiOltcInhtbFwiLFwieHNsXCIsXCJ4c2RcIixcInJuZ1wiXSxcImFwcGxpY2F0aW9uL3htbC1kdGRcIjpbXCJkdGRcIl0sXCJhcHBsaWNhdGlvbi94b3AreG1sXCI6W1wieG9wXCJdLFwiYXBwbGljYXRpb24veHByb2MreG1sXCI6W1wieHBsXCJdLFwiYXBwbGljYXRpb24veHNsdCt4bWxcIjpbXCJ4c2x0XCJdLFwiYXBwbGljYXRpb24veHNwZit4bWxcIjpbXCJ4c3BmXCJdLFwiYXBwbGljYXRpb24veHYreG1sXCI6W1wibXhtbFwiLFwieGh2bWxcIixcInh2bWxcIixcInh2bVwiXSxcImFwcGxpY2F0aW9uL3lhbmdcIjpbXCJ5YW5nXCJdLFwiYXBwbGljYXRpb24veWluK3htbFwiOltcInlpblwiXSxcImFwcGxpY2F0aW9uL3ppcFwiOltcInppcFwiXSxcImF1ZGlvLzNncHBcIjpbXCIqM2dwcFwiXSxcImF1ZGlvL2FkcGNtXCI6W1wiYWRwXCJdLFwiYXVkaW8vYmFzaWNcIjpbXCJhdVwiLFwic25kXCJdLFwiYXVkaW8vbWlkaVwiOltcIm1pZFwiLFwibWlkaVwiLFwia2FyXCIsXCJybWlcIl0sXCJhdWRpby9tb2JpbGUteG1mXCI6W1wibXhtZlwiXSxcImF1ZGlvL21wM1wiOltcIiptcDNcIl0sXCJhdWRpby9tcDRcIjpbXCJtNGFcIixcIm1wNGFcIl0sXCJhdWRpby9tcGVnXCI6W1wibXBnYVwiLFwibXAyXCIsXCJtcDJhXCIsXCJtcDNcIixcIm0yYVwiLFwibTNhXCJdLFwiYXVkaW8vb2dnXCI6W1wib2dhXCIsXCJvZ2dcIixcInNweFwiXSxcImF1ZGlvL3MzbVwiOltcInMzbVwiXSxcImF1ZGlvL3NpbGtcIjpbXCJzaWxcIl0sXCJhdWRpby93YXZcIjpbXCJ3YXZcIl0sXCJhdWRpby93YXZlXCI6W1wiKndhdlwiXSxcImF1ZGlvL3dlYm1cIjpbXCJ3ZWJhXCJdLFwiYXVkaW8veG1cIjpbXCJ4bVwiXSxcImZvbnQvY29sbGVjdGlvblwiOltcInR0Y1wiXSxcImZvbnQvb3RmXCI6W1wib3RmXCJdLFwiZm9udC90dGZcIjpbXCJ0dGZcIl0sXCJmb250L3dvZmZcIjpbXCJ3b2ZmXCJdLFwiZm9udC93b2ZmMlwiOltcIndvZmYyXCJdLFwiaW1hZ2UvYWNlc1wiOltcImV4clwiXSxcImltYWdlL2FwbmdcIjpbXCJhcG5nXCJdLFwiaW1hZ2UvYm1wXCI6W1wiYm1wXCJdLFwiaW1hZ2UvY2dtXCI6W1wiY2dtXCJdLFwiaW1hZ2UvZGljb20tcmxlXCI6W1wiZHJsZVwiXSxcImltYWdlL2VtZlwiOltcImVtZlwiXSxcImltYWdlL2ZpdHNcIjpbXCJmaXRzXCJdLFwiaW1hZ2UvZzNmYXhcIjpbXCJnM1wiXSxcImltYWdlL2dpZlwiOltcImdpZlwiXSxcImltYWdlL2hlaWNcIjpbXCJoZWljXCJdLFwiaW1hZ2UvaGVpYy1zZXF1ZW5jZVwiOltcImhlaWNzXCJdLFwiaW1hZ2UvaGVpZlwiOltcImhlaWZcIl0sXCJpbWFnZS9oZWlmLXNlcXVlbmNlXCI6W1wiaGVpZnNcIl0sXCJpbWFnZS9oZWoya1wiOltcImhlajJcIl0sXCJpbWFnZS9oc2oyXCI6W1wiaHNqMlwiXSxcImltYWdlL2llZlwiOltcImllZlwiXSxcImltYWdlL2psc1wiOltcImpsc1wiXSxcImltYWdlL2pwMlwiOltcImpwMlwiLFwianBnMlwiXSxcImltYWdlL2pwZWdcIjpbXCJqcGVnXCIsXCJqcGdcIixcImpwZVwiXSxcImltYWdlL2pwaFwiOltcImpwaFwiXSxcImltYWdlL2pwaGNcIjpbXCJqaGNcIl0sXCJpbWFnZS9qcG1cIjpbXCJqcG1cIl0sXCJpbWFnZS9qcHhcIjpbXCJqcHhcIixcImpwZlwiXSxcImltYWdlL2p4clwiOltcImp4clwiXSxcImltYWdlL2p4cmFcIjpbXCJqeHJhXCJdLFwiaW1hZ2Uvanhyc1wiOltcImp4cnNcIl0sXCJpbWFnZS9qeHNcIjpbXCJqeHNcIl0sXCJpbWFnZS9qeHNjXCI6W1wianhzY1wiXSxcImltYWdlL2p4c2lcIjpbXCJqeHNpXCJdLFwiaW1hZ2Uvanhzc1wiOltcImp4c3NcIl0sXCJpbWFnZS9rdHhcIjpbXCJrdHhcIl0sXCJpbWFnZS9wbmdcIjpbXCJwbmdcIl0sXCJpbWFnZS9zZ2lcIjpbXCJzZ2lcIl0sXCJpbWFnZS9zdmcreG1sXCI6W1wic3ZnXCIsXCJzdmd6XCJdLFwiaW1hZ2UvdDM4XCI6W1widDM4XCJdLFwiaW1hZ2UvdGlmZlwiOltcInRpZlwiLFwidGlmZlwiXSxcImltYWdlL3RpZmYtZnhcIjpbXCJ0ZnhcIl0sXCJpbWFnZS93ZWJwXCI6W1wid2VicFwiXSxcImltYWdlL3dtZlwiOltcIndtZlwiXSxcIm1lc3NhZ2UvZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uXCI6W1wiZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uXCJdLFwibWVzc2FnZS9nbG9iYWxcIjpbXCJ1OG1zZ1wiXSxcIm1lc3NhZ2UvZ2xvYmFsLWRlbGl2ZXJ5LXN0YXR1c1wiOltcInU4ZHNuXCJdLFwibWVzc2FnZS9nbG9iYWwtZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uXCI6W1widThtZG5cIl0sXCJtZXNzYWdlL2dsb2JhbC1oZWFkZXJzXCI6W1widThoZHJcIl0sXCJtZXNzYWdlL3JmYzgyMlwiOltcImVtbFwiLFwibWltZVwiXSxcIm1vZGVsLzNtZlwiOltcIjNtZlwiXSxcIm1vZGVsL2dsdGYranNvblwiOltcImdsdGZcIl0sXCJtb2RlbC9nbHRmLWJpbmFyeVwiOltcImdsYlwiXSxcIm1vZGVsL2lnZXNcIjpbXCJpZ3NcIixcImlnZXNcIl0sXCJtb2RlbC9tZXNoXCI6W1wibXNoXCIsXCJtZXNoXCIsXCJzaWxvXCJdLFwibW9kZWwvbXRsXCI6W1wibXRsXCJdLFwibW9kZWwvb2JqXCI6W1wib2JqXCJdLFwibW9kZWwvc3RsXCI6W1wic3RsXCJdLFwibW9kZWwvdnJtbFwiOltcIndybFwiLFwidnJtbFwiXSxcIm1vZGVsL3gzZCtiaW5hcnlcIjpbXCIqeDNkYlwiLFwieDNkYnpcIl0sXCJtb2RlbC94M2QrZmFzdGluZm9zZXRcIjpbXCJ4M2RiXCJdLFwibW9kZWwveDNkK3ZybWxcIjpbXCIqeDNkdlwiLFwieDNkdnpcIl0sXCJtb2RlbC94M2QreG1sXCI6W1wieDNkXCIsXCJ4M2R6XCJdLFwibW9kZWwveDNkLXZybWxcIjpbXCJ4M2R2XCJdLFwidGV4dC9jYWNoZS1tYW5pZmVzdFwiOltcImFwcGNhY2hlXCIsXCJtYW5pZmVzdFwiXSxcInRleHQvY2FsZW5kYXJcIjpbXCJpY3NcIixcImlmYlwiXSxcInRleHQvY29mZmVlc2NyaXB0XCI6W1wiY29mZmVlXCIsXCJsaXRjb2ZmZWVcIl0sXCJ0ZXh0L2Nzc1wiOltcImNzc1wiXSxcInRleHQvY3N2XCI6W1wiY3N2XCJdLFwidGV4dC9odG1sXCI6W1wiaHRtbFwiLFwiaHRtXCIsXCJzaHRtbFwiXSxcInRleHQvamFkZVwiOltcImphZGVcIl0sXCJ0ZXh0L2pzeFwiOltcImpzeFwiXSxcInRleHQvbGVzc1wiOltcImxlc3NcIl0sXCJ0ZXh0L21hcmtkb3duXCI6W1wibWFya2Rvd25cIixcIm1kXCJdLFwidGV4dC9tYXRobWxcIjpbXCJtbWxcIl0sXCJ0ZXh0L21keFwiOltcIm1keFwiXSxcInRleHQvbjNcIjpbXCJuM1wiXSxcInRleHQvcGxhaW5cIjpbXCJ0eHRcIixcInRleHRcIixcImNvbmZcIixcImRlZlwiLFwibGlzdFwiLFwibG9nXCIsXCJpblwiLFwiaW5pXCJdLFwidGV4dC9yaWNodGV4dFwiOltcInJ0eFwiXSxcInRleHQvcnRmXCI6W1wiKnJ0ZlwiXSxcInRleHQvc2dtbFwiOltcInNnbWxcIixcInNnbVwiXSxcInRleHQvc2hleFwiOltcInNoZXhcIl0sXCJ0ZXh0L3NsaW1cIjpbXCJzbGltXCIsXCJzbG1cIl0sXCJ0ZXh0L3N0eWx1c1wiOltcInN0eWx1c1wiLFwic3R5bFwiXSxcInRleHQvdGFiLXNlcGFyYXRlZC12YWx1ZXNcIjpbXCJ0c3ZcIl0sXCJ0ZXh0L3Ryb2ZmXCI6W1widFwiLFwidHJcIixcInJvZmZcIixcIm1hblwiLFwibWVcIixcIm1zXCJdLFwidGV4dC90dXJ0bGVcIjpbXCJ0dGxcIl0sXCJ0ZXh0L3VyaS1saXN0XCI6W1widXJpXCIsXCJ1cmlzXCIsXCJ1cmxzXCJdLFwidGV4dC92Y2FyZFwiOltcInZjYXJkXCJdLFwidGV4dC92dHRcIjpbXCJ2dHRcIl0sXCJ0ZXh0L3htbFwiOltcIip4bWxcIl0sXCJ0ZXh0L3lhbWxcIjpbXCJ5YW1sXCIsXCJ5bWxcIl0sXCJ2aWRlby8zZ3BwXCI6W1wiM2dwXCIsXCIzZ3BwXCJdLFwidmlkZW8vM2dwcDJcIjpbXCIzZzJcIl0sXCJ2aWRlby9oMjYxXCI6W1wiaDI2MVwiXSxcInZpZGVvL2gyNjNcIjpbXCJoMjYzXCJdLFwidmlkZW8vaDI2NFwiOltcImgyNjRcIl0sXCJ2aWRlby9qcGVnXCI6W1wianBndlwiXSxcInZpZGVvL2pwbVwiOltcIipqcG1cIixcImpwZ21cIl0sXCJ2aWRlby9tajJcIjpbXCJtajJcIixcIm1qcDJcIl0sXCJ2aWRlby9tcDJ0XCI6W1widHNcIl0sXCJ2aWRlby9tcDRcIjpbXCJtcDRcIixcIm1wNHZcIixcIm1wZzRcIl0sXCJ2aWRlby9tcGVnXCI6W1wibXBlZ1wiLFwibXBnXCIsXCJtcGVcIixcIm0xdlwiLFwibTJ2XCJdLFwidmlkZW8vb2dnXCI6W1wib2d2XCJdLFwidmlkZW8vcXVpY2t0aW1lXCI6W1wicXRcIixcIm1vdlwiXSxcInZpZGVvL3dlYm1cIjpbXCJ3ZWJtXCJdfTtcblxudmFyIGxpdGUgPSBuZXcgTWltZV8xKHN0YW5kYXJkKTtcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cblxuZnVuY3Rpb24gZ2V0X3NlcnZlcl9yb3V0ZV9oYW5kbGVyKHJvdXRlcykge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlX3JvdXRlKHJvdXRlLCByZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHJlcS5wYXJhbXMgPSByb3V0ZS5wYXJhbXMocm91dGUucGF0dGVybi5leGVjKHJlcS5wYXRoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IHJlcS5tZXRob2QudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgLy8gJ2RlbGV0ZScgY2Fubm90IGJlIGV4cG9ydGVkIGZyb20gYSBtb2R1bGUgYmVjYXVzZSBpdCBpcyBhIGtleXdvcmQsXHJcbiAgICAgICAgICAgIC8vIHNvIGNoZWNrIGZvciAnZGVsJyBpbnN0ZWFkXHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZF9leHBvcnQgPSBtZXRob2QgPT09ICdkZWxldGUnID8gJ2RlbCcgOiBtZXRob2Q7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZV9tZXRob2QgPSByb3V0ZS5oYW5kbGVyc1ttZXRob2RfZXhwb3J0XTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZV9tZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5TQVBQRVJfRVhQT1JUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB3cml0ZSwgZW5kLCBzZXRIZWFkZXIgfSA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaHVua3MgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZXJjZXB0IGRhdGEgc28gdGhhdCBpdCBjYW4gYmUgZXhwb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICByZXMud3JpdGUgPSBmdW5jdGlvbiAoY2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtzLnB1c2goQnVmZmVyLmZyb20oY2h1bmspKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlLmFwcGx5KHJlcywgW2NodW5rXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXIuYXBwbHkocmVzLCBbbmFtZSwgdmFsdWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5lbmQgPSBmdW5jdGlvbiAoY2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNodW5rKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtzLnB1c2goQnVmZmVyLmZyb20oY2h1bmspKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kLmFwcGx5KHJlcywgW2NodW5rXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3Muc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NhcHBlcl9fOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6ICdmaWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogcmVxLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBoZWFkZXJzWydjb250ZW50LXR5cGUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEJ1ZmZlci5jb25jYXQoY2h1bmtzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlX25leHQgPSAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVuZChlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKG5leHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZV9tZXRob2QocmVxLCByZXMsIGhhbmRsZV9uZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlX25leHQoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG5vIG1hdGNoaW5nIGhhbmRsZXIgZm9yIG1ldGhvZFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhuZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZpbmRfcm91dGUocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xyXG4gICAgICAgICAgICBpZiAocm91dGUucGF0dGVybi50ZXN0KHJlcS5wYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlX3JvdXRlKHJvdXRlLCByZXEsIHJlcywgbmV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgfTtcclxufVxuXG4vKiFcbiAqIGNvb2tpZVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBSb21hbiBTaHR5bG1hblxuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxudmFyIHBhcnNlXzEgPSBwYXJzZTtcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50O1xudmFyIHBhaXJTcGxpdFJlZ0V4cCA9IC87ICovO1xuXG4vKipcbiAqIFBhcnNlIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gY29va2llIGhlYWRlciBzdHJpbmcgaW50byBhbiBvYmplY3RcbiAqIFRoZSBvYmplY3QgaGFzIHRoZSB2YXJpb3VzIGNvb2tpZXMgYXMga2V5cyhuYW1lcykgPT4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7b2JqZWN0fVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzdHIgbXVzdCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KHBhaXJTcGxpdFJlZ0V4cCk7XG4gIHZhciBkZWMgPSBvcHQuZGVjb2RlIHx8IGRlY29kZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICB2YXIgZXFfaWR4ID0gcGFpci5pbmRleE9mKCc9Jyk7XG5cbiAgICAvLyBza2lwIHRoaW5ncyB0aGF0IGRvbid0IGxvb2sgbGlrZSBrZXk9dmFsdWVcbiAgICBpZiAoZXFfaWR4IDwgMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IHBhaXIuc3Vic3RyKDAsIGVxX2lkeCkudHJpbSgpO1xuICAgIHZhciB2YWwgPSBwYWlyLnN1YnN0cigrK2VxX2lkeCwgcGFpci5sZW5ndGgpLnRyaW0oKTtcblxuICAgIC8vIHF1b3RlZCB2YWx1ZXNcbiAgICBpZiAoJ1wiJyA9PSB2YWxbMF0pIHtcbiAgICAgIHZhbCA9IHZhbC5zbGljZSgxLCAtMSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBhc3NpZ24gb25jZVxuICAgIGlmICh1bmRlZmluZWQgPT0gb2JqW2tleV0pIHtcbiAgICAgIG9ialtrZXldID0gdHJ5RGVjb2RlKHZhbCwgZGVjKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIFRyeSBkZWNvZGluZyBhIHN0cmluZyB1c2luZyBhIGRlY29kaW5nIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRlY29kZVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0cnlEZWNvZGUoc3RyLCBkZWNvZGUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlKHN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbnZhciBjaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXyQnO1xudmFyIHVuc2FmZUNoYXJzID0gL1s8PlxcYlxcZlxcblxcclxcdFxcMFxcdTIwMjhcXHUyMDI5XS9nO1xudmFyIHJlc2VydmVkID0gL14oPzpkb3xpZnxpbnxmb3J8aW50fGxldHxuZXd8dHJ5fHZhcnxieXRlfGNhc2V8Y2hhcnxlbHNlfGVudW18Z290b3xsb25nfHRoaXN8dm9pZHx3aXRofGF3YWl0fGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fGZpbmFsfGZsb2F0fHNob3J0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxkb3VibGV8ZXhwb3J0fGltcG9ydHxuYXRpdmV8cmV0dXJufHN3aXRjaHx0aHJvd3N8dHlwZW9mfGJvb2xlYW58ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGFic3RyYWN0fGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufHZvbGF0aWxlfGludGVyZmFjZXxwcm90ZWN0ZWR8dHJhbnNpZW50fGltcGxlbWVudHN8aW5zdGFuY2VvZnxzeW5jaHJvbml6ZWQpJC87XG52YXIgZXNjYXBlZCA9IHtcbiAgICAnPCc6ICdcXFxcdTAwM0MnLFxuICAgICc+JzogJ1xcXFx1MDAzRScsXG4gICAgJy8nOiAnXFxcXHUwMDJGJyxcbiAgICAnXFxcXCc6ICdcXFxcXFxcXCcsXG4gICAgJ1xcYic6ICdcXFxcYicsXG4gICAgJ1xcZic6ICdcXFxcZicsXG4gICAgJ1xcbic6ICdcXFxcbicsXG4gICAgJ1xccic6ICdcXFxccicsXG4gICAgJ1xcdCc6ICdcXFxcdCcsXG4gICAgJ1xcMCc6ICdcXFxcMCcsXG4gICAgJ1xcdTIwMjgnOiAnXFxcXHUyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICdcXFxcdTIwMjknXG59O1xudmFyIG9iamVjdFByb3RvT3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5wcm90b3R5cGUpLnNvcnQoKS5qb2luKCdcXDAnKTtcbmZ1bmN0aW9uIGRldmFsdWUodmFsdWUpIHtcbiAgICB2YXIgY291bnRzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIHdhbGsodGhpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN0cmluZ2lmeSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudHMuaGFzKHRoaW5nKSkge1xuICAgICAgICAgICAgY291bnRzLnNldCh0aGluZywgY291bnRzLmdldCh0aGluZykgKyAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb3VudHMuc2V0KHRoaW5nLCAxKTtcbiAgICAgICAgaWYgKCFpc1ByaW1pdGl2ZSh0aGluZykpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gZ2V0VHlwZSh0aGluZyk7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdOdW1iZXInOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnQm9vbGVhbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnRGF0ZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnUmVnRXhwJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpbmcuZm9yRWFjaCh3YWxrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnU2V0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdNYXAnOlxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaW5nKS5mb3JFYWNoKHdhbGspO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpbmcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvdG8gIT09IE9iamVjdC5wcm90b3R5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bykuc29ydCgpLmpvaW4oJ1xcMCcpICE9PSBvYmplY3RQcm90b093blByb3BlcnR5TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzdHJpbmdpZnkgYXJiaXRyYXJ5IG5vbi1QT0pPc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0aGluZykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN0cmluZ2lmeSBQT0pPcyB3aXRoIHN5bWJvbGljIGtleXNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpbmcpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gd2Fsayh0aGluZ1trZXldKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2Fsayh2YWx1ZSk7XG4gICAgdmFyIG5hbWVzID0gbmV3IE1hcCgpO1xuICAgIEFycmF5LmZyb20oY291bnRzKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChlbnRyeSkgeyByZXR1cm4gZW50cnlbMV0gPiAxOyB9KVxuICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYlsxXSAtIGFbMV07IH0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSwgaSkge1xuICAgICAgICBuYW1lcy5zZXQoZW50cnlbMF0sIGdldE5hbWUoaSkpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHN0cmluZ2lmeSh0aGluZykge1xuICAgICAgICBpZiAobmFtZXMuaGFzKHRoaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVzLmdldCh0aGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHRoaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmeVByaW1pdGl2ZSh0aGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHR5cGUgPSBnZXRUeXBlKHRoaW5nKTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdOdW1iZXInOlxuICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9iamVjdChcIiArIHN0cmluZ2lmeSh0aGluZy52YWx1ZU9mKCkpICsgXCIpXCI7XG4gICAgICAgICAgICBjYXNlICdSZWdFeHAnOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5ldyBSZWdFeHAoXCIgKyBzdHJpbmdpZnlTdHJpbmcodGhpbmcuc291cmNlKSArIFwiLCBcXFwiXCIgKyB0aGluZy5mbGFncyArIFwiXFxcIilcIjtcbiAgICAgICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5ldyBEYXRlKFwiICsgdGhpbmcuZ2V0VGltZSgpICsgXCIpXCI7XG4gICAgICAgICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgICAgICAgICAgdmFyIG1lbWJlcnMgPSB0aGluZy5tYXAoZnVuY3Rpb24gKHYsIGkpIHsgcmV0dXJuIGkgaW4gdGhpbmcgPyBzdHJpbmdpZnkodikgOiAnJzsgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHRhaWwgPSB0aGluZy5sZW5ndGggPT09IDAgfHwgKHRoaW5nLmxlbmd0aCAtIDEgaW4gdGhpbmcpID8gJycgOiAnLCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiW1wiICsgbWVtYmVycy5qb2luKCcsJykgKyB0YWlsICsgXCJdXCI7XG4gICAgICAgICAgICBjYXNlICdTZXQnOlxuICAgICAgICAgICAgY2FzZSAnTWFwJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJuZXcgXCIgKyB0eXBlICsgXCIoW1wiICsgQXJyYXkuZnJvbSh0aGluZykubWFwKHN0cmluZ2lmeSkuam9pbignLCcpICsgXCJdKVwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gXCJ7XCIgKyBPYmplY3Qua2V5cyh0aGluZykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHNhZmVLZXkoa2V5KSArIFwiOlwiICsgc3RyaW5naWZ5KHRoaW5nW2tleV0pOyB9KS5qb2luKCcsJykgKyBcIn1cIjtcbiAgICAgICAgICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpbmcpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksXCIgKyBvYmogKyBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk9iamVjdC5jcmVhdGUobnVsbClcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgc3RyID0gc3RyaW5naWZ5KHZhbHVlKTtcbiAgICBpZiAobmFtZXMuc2l6ZSkge1xuICAgICAgICB2YXIgcGFyYW1zXzEgPSBbXTtcbiAgICAgICAgdmFyIHN0YXRlbWVudHNfMSA9IFtdO1xuICAgICAgICB2YXIgdmFsdWVzXzEgPSBbXTtcbiAgICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgdGhpbmcpIHtcbiAgICAgICAgICAgIHBhcmFtc18xLnB1c2gobmFtZSk7XG4gICAgICAgICAgICBpZiAoaXNQcmltaXRpdmUodGhpbmcpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChzdHJpbmdpZnlQcmltaXRpdmUodGhpbmcpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGdldFR5cGUodGhpbmcpO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnTnVtYmVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKFwiT2JqZWN0KFwiICsgc3RyaW5naWZ5KHRoaW5nLnZhbHVlT2YoKSkgKyBcIilcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2godGhpbmcudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKFwibmV3IERhdGUoXCIgKyB0aGluZy5nZXRUaW1lKCkgKyBcIilcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChcIkFycmF5KFwiICsgdGhpbmcubGVuZ3RoICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGluZy5mb3JFYWNoKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChuYW1lICsgXCJbXCIgKyBpICsgXCJdPVwiICsgc3RyaW5naWZ5KHYpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1NldCc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goXCJuZXcgU2V0XCIpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChuYW1lICsgXCIuXCIgKyBBcnJheS5mcm9tKHRoaW5nKS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIFwiYWRkKFwiICsgc3RyaW5naWZ5KHYpICsgXCIpXCI7IH0pLmpvaW4oJy4nKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ01hcCc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goXCJuZXcgTWFwXCIpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChuYW1lICsgXCIuXCIgKyBBcnJheS5mcm9tKHRoaW5nKS5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IF9hWzBdLCB2ID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzZXQoXCIgKyBzdHJpbmdpZnkoaykgKyBcIiwgXCIgKyBzdHJpbmdpZnkodikgKyBcIilcIjtcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbignLicpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpbmcpID09PSBudWxsID8gJ09iamVjdC5jcmVhdGUobnVsbCknIDogJ3t9Jyk7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaW5nKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudHNfMS5wdXNoKFwiXCIgKyBuYW1lICsgc2FmZVByb3Aoa2V5KSArIFwiPVwiICsgc3RyaW5naWZ5KHRoaW5nW2tleV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChcInJldHVybiBcIiArIHN0cik7XG4gICAgICAgIHJldHVybiBcIihmdW5jdGlvbihcIiArIHBhcmFtc18xLmpvaW4oJywnKSArIFwiKXtcIiArIHN0YXRlbWVudHNfMS5qb2luKCc7JykgKyBcIn0oXCIgKyB2YWx1ZXNfMS5qb2luKCcsJykgKyBcIikpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldE5hbWUobnVtKSB7XG4gICAgdmFyIG5hbWUgPSAnJztcbiAgICBkbyB7XG4gICAgICAgIG5hbWUgPSBjaGFyc1tudW0gJSBjaGFycy5sZW5ndGhdICsgbmFtZTtcbiAgICAgICAgbnVtID0gfn4obnVtIC8gY2hhcnMubGVuZ3RoKSAtIDE7XG4gICAgfSB3aGlsZSAobnVtID49IDApO1xuICAgIHJldHVybiByZXNlcnZlZC50ZXN0KG5hbWUpID8gbmFtZSArIFwiX1wiIDogbmFtZTtcbn1cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHRoaW5nKSB7XG4gICAgcmV0dXJuIE9iamVjdCh0aGluZykgIT09IHRoaW5nO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5UHJpbWl0aXZlKHRoaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB0aGluZyA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBzdHJpbmdpZnlTdHJpbmcodGhpbmcpO1xuICAgIGlmICh0aGluZyA9PT0gdm9pZCAwKVxuICAgICAgICByZXR1cm4gJ3ZvaWQgMCc7XG4gICAgaWYgKHRoaW5nID09PSAwICYmIDEgLyB0aGluZyA8IDApXG4gICAgICAgIHJldHVybiAnLTAnO1xuICAgIHZhciBzdHIgPSBTdHJpbmcodGhpbmcpO1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL14oLSk/MFxcLi8sICckMS4nKTtcbiAgICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gZ2V0VHlwZSh0aGluZykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpLnNsaWNlKDgsIC0xKTtcbn1cbmZ1bmN0aW9uIGVzY2FwZVVuc2FmZUNoYXIoYykge1xuICAgIHJldHVybiBlc2NhcGVkW2NdIHx8IGM7XG59XG5mdW5jdGlvbiBlc2NhcGVVbnNhZmVDaGFycyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UodW5zYWZlQ2hhcnMsIGVzY2FwZVVuc2FmZUNoYXIpO1xufVxuZnVuY3Rpb24gc2FmZUtleShrZXkpIHtcbiAgICByZXR1cm4gL15bXyRhLXpBLVpdW18kYS16QS1aMC05XSokLy50ZXN0KGtleSkgPyBrZXkgOiBlc2NhcGVVbnNhZmVDaGFycyhKU09OLnN0cmluZ2lmeShrZXkpKTtcbn1cbmZ1bmN0aW9uIHNhZmVQcm9wKGtleSkge1xuICAgIHJldHVybiAvXltfJGEtekEtWl1bXyRhLXpBLVowLTldKiQvLnRlc3Qoa2V5KSA/IFwiLlwiICsga2V5IDogXCJbXCIgKyBlc2NhcGVVbnNhZmVDaGFycyhKU09OLnN0cmluZ2lmeShrZXkpKSArIFwiXVwiO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5U3RyaW5nKHN0cikge1xuICAgIHZhciByZXN1bHQgPSAnXCInO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgdmFyIGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGlmIChjaGFyID09PSAnXCInKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcXFxcIic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hhciBpbiBlc2NhcGVkKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gZXNjYXBlZFtjaGFyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlID49IDB4ZDgwMCAmJiBjb2RlIDw9IDB4ZGZmZikge1xuICAgICAgICAgICAgdmFyIG5leHQgPSBzdHIuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBiZWdpbm5pbmcgb2YgYSBbaGlnaCwgbG93XSBzdXJyb2dhdGUgcGFpcixcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgbmV4dCB0d28gY2hhcmFjdGVycywgb3RoZXJ3aXNlIGVzY2FwZVxuICAgICAgICAgICAgaWYgKGNvZGUgPD0gMHhkYmZmICYmIChuZXh0ID49IDB4ZGMwMCAmJiBuZXh0IDw9IDB4ZGZmZikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gY2hhciArIHN0clsrK2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiXFxcXHVcIiArIGNvZGUudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gY2hhcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgKz0gJ1wiJztcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vdG1wdmFyL2pzZG9tL2Jsb2IvYWE4NWIyYWJmMDc3NjZmZjdiZjVjMWY2ZGFhZmIzNzI2ZjJmMmRiNS9saWIvanNkb20vbGl2aW5nL2Jsb2IuanNcblxuLy8gZml4IGZvciBcIlJlYWRhYmxlXCIgaXNuJ3QgYSBuYW1lZCBleHBvcnQgaXNzdWVcbmNvbnN0IFJlYWRhYmxlID0gU3RyZWFtLlJlYWRhYmxlO1xuXG5jb25zdCBCVUZGRVIgPSBTeW1ib2woJ2J1ZmZlcicpO1xuY29uc3QgVFlQRSA9IFN5bWJvbCgndHlwZScpO1xuXG5jbGFzcyBCbG9iIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpc1tUWVBFXSA9ICcnO1xuXG5cdFx0Y29uc3QgYmxvYlBhcnRzID0gYXJndW1lbnRzWzBdO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG5cblx0XHRjb25zdCBidWZmZXJzID0gW107XG5cdFx0bGV0IHNpemUgPSAwO1xuXG5cdFx0aWYgKGJsb2JQYXJ0cykge1xuXHRcdFx0Y29uc3QgYSA9IGJsb2JQYXJ0cztcblx0XHRcdGNvbnN0IGxlbmd0aCA9IE51bWJlcihhLmxlbmd0aCk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBhW2ldO1xuXHRcdFx0XHRsZXQgYnVmZmVyO1xuXHRcdFx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IGVsZW1lbnQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGVsZW1lbnQpKSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gQnVmZmVyLmZyb20oZWxlbWVudC5idWZmZXIsIGVsZW1lbnQuYnl0ZU9mZnNldCwgZWxlbWVudC5ieXRlTGVuZ3RoKTtcblx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcblx0XHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbShlbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQmxvYikge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IGVsZW1lbnRbQlVGRkVSXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbSh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBlbGVtZW50IDogU3RyaW5nKGVsZW1lbnQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzaXplICs9IGJ1ZmZlci5sZW5ndGg7XG5cdFx0XHRcdGJ1ZmZlcnMucHVzaChidWZmZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXNbQlVGRkVSXSA9IEJ1ZmZlci5jb25jYXQoYnVmZmVycyk7XG5cblx0XHRsZXQgdHlwZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy50eXBlICE9PSB1bmRlZmluZWQgJiYgU3RyaW5nKG9wdGlvbnMudHlwZSkudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAodHlwZSAmJiAhL1teXFx1MDAyMC1cXHUwMDdFXS8udGVzdCh0eXBlKSkge1xuXHRcdFx0dGhpc1tUWVBFXSA9IHR5cGU7XG5cdFx0fVxuXHR9XG5cdGdldCBzaXplKCkge1xuXHRcdHJldHVybiB0aGlzW0JVRkZFUl0ubGVuZ3RoO1xuXHR9XG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzW1RZUEVdO1xuXHR9XG5cdHRleHQoKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzW0JVRkZFUl0udG9TdHJpbmcoKSk7XG5cdH1cblx0YXJyYXlCdWZmZXIoKSB7XG5cdFx0Y29uc3QgYnVmID0gdGhpc1tCVUZGRVJdO1xuXHRcdGNvbnN0IGFiID0gYnVmLmJ1ZmZlci5zbGljZShidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVPZmZzZXQgKyBidWYuYnl0ZUxlbmd0aCk7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhYik7XG5cdH1cblx0c3RyZWFtKCkge1xuXHRcdGNvbnN0IHJlYWRhYmxlID0gbmV3IFJlYWRhYmxlKCk7XG5cdFx0cmVhZGFibGUuX3JlYWQgPSBmdW5jdGlvbiAoKSB7fTtcblx0XHRyZWFkYWJsZS5wdXNoKHRoaXNbQlVGRkVSXSk7XG5cdFx0cmVhZGFibGUucHVzaChudWxsKTtcblx0XHRyZXR1cm4gcmVhZGFibGU7XG5cdH1cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdbb2JqZWN0IEJsb2JdJztcblx0fVxuXHRzbGljZSgpIHtcblx0XHRjb25zdCBzaXplID0gdGhpcy5zaXplO1xuXG5cdFx0Y29uc3Qgc3RhcnQgPSBhcmd1bWVudHNbMF07XG5cdFx0Y29uc3QgZW5kID0gYXJndW1lbnRzWzFdO1xuXHRcdGxldCByZWxhdGl2ZVN0YXJ0LCByZWxhdGl2ZUVuZDtcblx0XHRpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmVsYXRpdmVTdGFydCA9IDA7XG5cdFx0fSBlbHNlIGlmIChzdGFydCA8IDApIHtcblx0XHRcdHJlbGF0aXZlU3RhcnQgPSBNYXRoLm1heChzaXplICsgc3RhcnQsIDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWxhdGl2ZVN0YXJ0ID0gTWF0aC5taW4oc3RhcnQsIHNpemUpO1xuXHRcdH1cblx0XHRpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gc2l6ZTtcblx0XHR9IGVsc2UgaWYgKGVuZCA8IDApIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gTWF0aC5tYXgoc2l6ZSArIGVuZCwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gTWF0aC5taW4oZW5kLCBzaXplKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3BhbiA9IE1hdGgubWF4KHJlbGF0aXZlRW5kIC0gcmVsYXRpdmVTdGFydCwgMCk7XG5cblx0XHRjb25zdCBidWZmZXIgPSB0aGlzW0JVRkZFUl07XG5cdFx0Y29uc3Qgc2xpY2VkQnVmZmVyID0gYnVmZmVyLnNsaWNlKHJlbGF0aXZlU3RhcnQsIHJlbGF0aXZlU3RhcnQgKyBzcGFuKTtcblx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoW10sIHsgdHlwZTogYXJndW1lbnRzWzJdIH0pO1xuXHRcdGJsb2JbQlVGRkVSXSA9IHNsaWNlZEJ1ZmZlcjtcblx0XHRyZXR1cm4gYmxvYjtcblx0fVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhCbG9iLnByb3RvdHlwZSwge1xuXHRzaXplOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dHlwZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHNsaWNlOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCbG9iLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnQmxvYicsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbi8qKlxuICogZmV0Y2gtZXJyb3IuanNcbiAqXG4gKiBGZXRjaEVycm9yIGludGVyZmFjZSBmb3Igb3BlcmF0aW9uYWwgZXJyb3JzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgRmV0Y2hFcnJvciBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIG1lc3NhZ2UgICAgICBFcnJvciBtZXNzYWdlIGZvciBodW1hblxuICogQHBhcmFtICAgU3RyaW5nICAgICAgdHlwZSAgICAgICAgIEVycm9yIHR5cGUgZm9yIG1hY2hpbmVcbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIHN5c3RlbUVycm9yICBGb3IgTm9kZS5qcyBzeXN0ZW0gZXJyb3JcbiAqIEByZXR1cm4gIEZldGNoRXJyb3JcbiAqL1xuZnVuY3Rpb24gRmV0Y2hFcnJvcihtZXNzYWdlLCB0eXBlLCBzeXN0ZW1FcnJvcikge1xuICBFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgLy8gd2hlbiBlcnIudHlwZSBpcyBgc3lzdGVtYCwgZXJyLmNvZGUgY29udGFpbnMgc3lzdGVtIGVycm9yIGNvZGVcbiAgaWYgKHN5c3RlbUVycm9yKSB7XG4gICAgdGhpcy5jb2RlID0gdGhpcy5lcnJubyA9IHN5c3RlbUVycm9yLmNvZGU7XG4gIH1cblxuICAvLyBoaWRlIGN1c3RvbSBlcnJvciBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIGZyb20gZW5kLXVzZXJzXG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xufVxuXG5GZXRjaEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkZldGNoRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmV0Y2hFcnJvcjtcbkZldGNoRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnRmV0Y2hFcnJvcic7XG5cbmxldCBjb252ZXJ0O1xudHJ5IHtcblx0Y29udmVydCA9IHJlcXVpcmUoJ2VuY29kaW5nJykuY29udmVydDtcbn0gY2F0Y2ggKGUpIHt9XG5cbmNvbnN0IElOVEVSTkFMUyA9IFN5bWJvbCgnQm9keSBpbnRlcm5hbHMnKTtcblxuLy8gZml4IGFuIGlzc3VlIHdoZXJlIFwiUGFzc1Rocm91Z2hcIiBpc24ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IFBhc3NUaHJvdWdoID0gU3RyZWFtLlBhc3NUaHJvdWdoO1xuXG4vKipcbiAqIEJvZHkgbWl4aW5cbiAqXG4gKiBSZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNib2R5XG4gKlxuICogQHBhcmFtICAgU3RyZWFtICBib2R5ICBSZWFkYWJsZSBzdHJlYW1cbiAqIEBwYXJhbSAgIE9iamVjdCAgb3B0cyAgUmVzcG9uc2Ugb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5mdW5jdGlvbiBCb2R5KGJvZHkpIHtcblx0dmFyIF90aGlzID0gdGhpcztcblxuXHR2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG5cdCAgICBfcmVmJHNpemUgPSBfcmVmLnNpemU7XG5cblx0bGV0IHNpemUgPSBfcmVmJHNpemUgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHNpemU7XG5cdHZhciBfcmVmJHRpbWVvdXQgPSBfcmVmLnRpbWVvdXQ7XG5cdGxldCB0aW1lb3V0ID0gX3JlZiR0aW1lb3V0ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiR0aW1lb3V0O1xuXG5cdGlmIChib2R5ID09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIHVuZGVmaW5lZCBvciBudWxsXG5cdFx0Ym9keSA9IG51bGw7XG5cdH0gZWxzZSBpZiAoaXNVUkxTZWFyY2hQYXJhbXMoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGEgVVJMU2VhcmNoUGFyYW1zXG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkudG9TdHJpbmcoKSk7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSA7IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkgOyBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyXG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkpO1xuXHR9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJWaWV3XG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkuYnVmZmVyLCBib2R5LmJ5dGVPZmZzZXQsIGJvZHkuYnl0ZUxlbmd0aCk7XG5cdH0gZWxzZSBpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkgOyBlbHNlIHtcblx0XHQvLyBub25lIG9mIHRoZSBhYm92ZVxuXHRcdC8vIGNvZXJjZSB0byBzdHJpbmcgdGhlbiBidWZmZXJcblx0XHRib2R5ID0gQnVmZmVyLmZyb20oU3RyaW5nKGJvZHkpKTtcblx0fVxuXHR0aGlzW0lOVEVSTkFMU10gPSB7XG5cdFx0Ym9keSxcblx0XHRkaXN0dXJiZWQ6IGZhbHNlLFxuXHRcdGVycm9yOiBudWxsXG5cdH07XG5cdHRoaXMuc2l6ZSA9IHNpemU7XG5cdHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG5cblx0aWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIHtcblx0XHRib2R5Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdGNvbnN0IGVycm9yID0gZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJyA/IGVyciA6IG5ldyBGZXRjaEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGJvZHkgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7X3RoaXMudXJsfTogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKTtcblx0XHRcdF90aGlzW0lOVEVSTkFMU10uZXJyb3IgPSBlcnJvcjtcblx0XHR9KTtcblx0fVxufVxuXG5Cb2R5LnByb3RvdHlwZSA9IHtcblx0Z2V0IGJvZHkoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5ib2R5O1xuXHR9LFxuXG5cdGdldCBib2R5VXNlZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLmRpc3R1cmJlZDtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMgQXJyYXlCdWZmZXJcbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0YXJyYXlCdWZmZXIoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmKSB7XG5cdFx0XHRyZXR1cm4gYnVmLmJ1ZmZlci5zbGljZShidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVPZmZzZXQgKyBidWYuYnl0ZUxlbmd0aCk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogUmV0dXJuIHJhdyByZXNwb25zZSBhcyBCbG9iXG4gICpcbiAgKiBAcmV0dXJuIFByb21pc2VcbiAgKi9cblx0YmxvYigpIHtcblx0XHRsZXQgY3QgPSB0aGlzLmhlYWRlcnMgJiYgdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykgfHwgJyc7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihcblx0XHRcdC8vIFByZXZlbnQgY29weWluZ1xuXHRcdFx0bmV3IEJsb2IoW10sIHtcblx0XHRcdFx0dHlwZTogY3QudG9Mb3dlckNhc2UoKVxuXHRcdFx0fSksIHtcblx0XHRcdFx0W0JVRkZFUl06IGJ1ZlxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIGpzb25cbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0anNvbigpIHtcblx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1ZmZlcikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoYnVmZmVyLnRvU3RyaW5nKCkpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHJldHVybiBCb2R5LlByb21pc2UucmVqZWN0KG5ldyBGZXRjaEVycm9yKGBpbnZhbGlkIGpzb24gcmVzcG9uc2UgYm9keSBhdCAke190aGlzMi51cmx9IHJlYXNvbjogJHtlcnIubWVzc2FnZX1gLCAnaW52YWxpZC1qc29uJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyB0ZXh0XG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdHRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmZmVyKSB7XG5cdFx0XHRyZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIGJ1ZmZlciAobm9uLXNwZWMgYXBpKVxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHRidWZmZXIoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcyk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIHRleHQsIHdoaWxlIGF1dG9tYXRpY2FsbHkgZGV0ZWN0aW5nIHRoZSBlbmNvZGluZyBhbmRcbiAgKiB0cnlpbmcgdG8gZGVjb2RlIHRvIFVURi04IChub24tc3BlYyBhcGkpXG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdHRleHRDb252ZXJ0ZWQoKSB7XG5cdFx0dmFyIF90aGlzMyA9IHRoaXM7XG5cblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWZmZXIpIHtcblx0XHRcdHJldHVybiBjb252ZXJ0Qm9keShidWZmZXIsIF90aGlzMy5oZWFkZXJzKTtcblx0XHR9KTtcblx0fVxufTtcblxuLy8gSW4gYnJvd3NlcnMsIGFsbCBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhYmxlLlxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQm9keS5wcm90b3R5cGUsIHtcblx0Ym9keTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGJvZHlVc2VkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0YXJyYXlCdWZmZXI6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRibG9iOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0anNvbjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHRleHQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuQm9keS5taXhJbiA9IGZ1bmN0aW9uIChwcm90bykge1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQm9keS5wcm90b3R5cGUpKSB7XG5cdFx0Ly8gaXN0YW5idWwgaWdub3JlIGVsc2U6IGZ1dHVyZSBwcm9vZlxuXHRcdGlmICghKG5hbWUgaW4gcHJvdG8pKSB7XG5cdFx0XHRjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihCb2R5LnByb3RvdHlwZSwgbmFtZSk7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIG5hbWUsIGRlc2MpO1xuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBDb25zdW1lIGFuZCBjb252ZXJ0IGFuIGVudGlyZSBCb2R5IHRvIGEgQnVmZmVyLlxuICpcbiAqIFJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtYm9keS1jb25zdW1lLWJvZHlcbiAqXG4gKiBAcmV0dXJuICBQcm9taXNlXG4gKi9cbmZ1bmN0aW9uIGNvbnN1bWVCb2R5KCkge1xuXHR2YXIgX3RoaXM0ID0gdGhpcztcblxuXHRpZiAodGhpc1tJTlRFUk5BTFNdLmRpc3R1cmJlZCkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoYGJvZHkgdXNlZCBhbHJlYWR5IGZvcjogJHt0aGlzLnVybH1gKSk7XG5cdH1cblxuXHR0aGlzW0lOVEVSTkFMU10uZGlzdHVyYmVkID0gdHJ1ZTtcblxuXHRpZiAodGhpc1tJTlRFUk5BTFNdLmVycm9yKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZWplY3QodGhpc1tJTlRFUk5BTFNdLmVycm9yKTtcblx0fVxuXG5cdGxldCBib2R5ID0gdGhpcy5ib2R5O1xuXG5cdC8vIGJvZHkgaXMgbnVsbFxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVzb2x2ZShCdWZmZXIuYWxsb2MoMCkpO1xuXHR9XG5cblx0Ly8gYm9keSBpcyBibG9iXG5cdGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRib2R5ID0gYm9keS5zdHJlYW0oKTtcblx0fVxuXG5cdC8vIGJvZHkgaXMgYnVmZmVyXG5cdGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlc29sdmUoYm9keSk7XG5cdH1cblxuXHQvLyBpc3RhbmJ1bCBpZ25vcmUgaWY6IHNob3VsZCBuZXZlciBoYXBwZW5cblx0aWYgKCEoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlc29sdmUoQnVmZmVyLmFsbG9jKDApKTtcblx0fVxuXG5cdC8vIGJvZHkgaXMgc3RyZWFtXG5cdC8vIGdldCByZWFkeSB0byBhY3R1YWxseSBjb25zdW1lIHRoZSBib2R5XG5cdGxldCBhY2N1bSA9IFtdO1xuXHRsZXQgYWNjdW1CeXRlcyA9IDA7XG5cdGxldCBhYm9ydCA9IGZhbHNlO1xuXG5cdHJldHVybiBuZXcgQm9keS5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRsZXQgcmVzVGltZW91dDtcblxuXHRcdC8vIGFsbG93IHRpbWVvdXQgb24gc2xvdyByZXNwb25zZSBib2R5XG5cdFx0aWYgKF90aGlzNC50aW1lb3V0KSB7XG5cdFx0XHRyZXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGFib3J0ID0gdHJ1ZTtcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXNwb25zZSB0aW1lb3V0IHdoaWxlIHRyeWluZyB0byBmZXRjaCAke190aGlzNC51cmx9IChvdmVyICR7X3RoaXM0LnRpbWVvdXR9bXMpYCwgJ2JvZHktdGltZW91dCcpKTtcblx0XHRcdH0sIF90aGlzNC50aW1lb3V0KTtcblx0XHR9XG5cblx0XHQvLyBoYW5kbGUgc3RyZWFtIGVycm9yc1xuXHRcdGJvZHkub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0aWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcblx0XHRcdFx0Ly8gaWYgdGhlIHJlcXVlc3Qgd2FzIGFib3J0ZWQsIHJlamVjdCB3aXRoIHRoaXMgRXJyb3Jcblx0XHRcdFx0YWJvcnQgPSB0cnVlO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIG90aGVyIGVycm9ycywgc3VjaCBhcyBpbmNvcnJlY3QgY29udGVudC1lbmNvZGluZ1xuXHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYEludmFsaWQgcmVzcG9uc2UgYm9keSB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJHtfdGhpczQudXJsfTogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRib2R5Lm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XG5cdFx0XHRpZiAoYWJvcnQgfHwgY2h1bmsgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX3RoaXM0LnNpemUgJiYgYWNjdW1CeXRlcyArIGNodW5rLmxlbmd0aCA+IF90aGlzNC5zaXplKSB7XG5cdFx0XHRcdGFib3J0ID0gdHJ1ZTtcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBjb250ZW50IHNpemUgYXQgJHtfdGhpczQudXJsfSBvdmVyIGxpbWl0OiAke190aGlzNC5zaXplfWAsICdtYXgtc2l6ZScpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRhY2N1bUJ5dGVzICs9IGNodW5rLmxlbmd0aDtcblx0XHRcdGFjY3VtLnB1c2goY2h1bmspO1xuXHRcdH0pO1xuXG5cdFx0Ym9keS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGFib3J0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y2xlYXJUaW1lb3V0KHJlc1RpbWVvdXQpO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXNvbHZlKEJ1ZmZlci5jb25jYXQoYWNjdW0sIGFjY3VtQnl0ZXMpKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHQvLyBoYW5kbGUgc3RyZWFtcyB0aGF0IGhhdmUgYWNjdW11bGF0ZWQgdG9vIG11Y2ggZGF0YSAoaXNzdWUgIzQxNClcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBDb3VsZCBub3QgY3JlYXRlIEJ1ZmZlciBmcm9tIHJlc3BvbnNlIGJvZHkgZm9yICR7X3RoaXM0LnVybH06ICR7ZXJyLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgYnVmZmVyIGVuY29kaW5nIGFuZCBjb252ZXJ0IHRvIHRhcmdldCBlbmNvZGluZ1xuICogcmVmOiBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1dELWh0bWw1LTIwMTEwMTEzL3BhcnNpbmcuaHRtbCNkZXRlcm1pbmluZy10aGUtY2hhcmFjdGVyLWVuY29kaW5nXG4gKlxuICogQHBhcmFtICAgQnVmZmVyICBidWZmZXIgICAgSW5jb21pbmcgYnVmZmVyXG4gKiBAcGFyYW0gICBTdHJpbmcgIGVuY29kaW5nICBUYXJnZXQgZW5jb2RpbmdcbiAqIEByZXR1cm4gIFN0cmluZ1xuICovXG5mdW5jdGlvbiBjb252ZXJ0Qm9keShidWZmZXIsIGhlYWRlcnMpIHtcblx0aWYgKHR5cGVvZiBjb252ZXJ0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgcGFja2FnZSBgZW5jb2RpbmdgIG11c3QgYmUgaW5zdGFsbGVkIHRvIHVzZSB0aGUgdGV4dENvbnZlcnRlZCgpIGZ1bmN0aW9uJyk7XG5cdH1cblxuXHRjb25zdCBjdCA9IGhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcblx0bGV0IGNoYXJzZXQgPSAndXRmLTgnO1xuXHRsZXQgcmVzLCBzdHI7XG5cblx0Ly8gaGVhZGVyXG5cdGlmIChjdCkge1xuXHRcdHJlcyA9IC9jaGFyc2V0PShbXjtdKikvaS5leGVjKGN0KTtcblx0fVxuXG5cdC8vIG5vIGNoYXJzZXQgaW4gY29udGVudCB0eXBlLCBwZWVrIGF0IHJlc3BvbnNlIGJvZHkgZm9yIGF0IG1vc3QgMTAyNCBieXRlc1xuXHRzdHIgPSBidWZmZXIuc2xpY2UoMCwgMTAyNCkudG9TdHJpbmcoKTtcblxuXHQvLyBodG1sNVxuXHRpZiAoIXJlcyAmJiBzdHIpIHtcblx0XHRyZXMgPSAvPG1ldGEuKz9jaGFyc2V0PShbJ1wiXSkoLis/KVxcMS9pLmV4ZWMoc3RyKTtcblx0fVxuXG5cdC8vIGh0bWw0XG5cdGlmICghcmVzICYmIHN0cikge1xuXHRcdHJlcyA9IC88bWV0YVtcXHNdKz9odHRwLWVxdWl2PShbJ1wiXSljb250ZW50LXR5cGVcXDFbXFxzXSs/Y29udGVudD0oWydcIl0pKC4rPylcXDIvaS5leGVjKHN0cik7XG5cdFx0aWYgKCFyZXMpIHtcblx0XHRcdHJlcyA9IC88bWV0YVtcXHNdKz9jb250ZW50PShbJ1wiXSkoLis/KVxcMVtcXHNdKz9odHRwLWVxdWl2PShbJ1wiXSljb250ZW50LXR5cGVcXDMvaS5leGVjKHN0cik7XG5cdFx0XHRpZiAocmVzKSB7XG5cdFx0XHRcdHJlcy5wb3AoKTsgLy8gZHJvcCBsYXN0IHF1b3RlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJlcykge1xuXHRcdFx0cmVzID0gL2NoYXJzZXQ9KC4qKS9pLmV4ZWMocmVzLnBvcCgpKTtcblx0XHR9XG5cdH1cblxuXHQvLyB4bWxcblx0aWYgKCFyZXMgJiYgc3RyKSB7XG5cdFx0cmVzID0gLzxcXD94bWwuKz9lbmNvZGluZz0oWydcIl0pKC4rPylcXDEvaS5leGVjKHN0cik7XG5cdH1cblxuXHQvLyBmb3VuZCBjaGFyc2V0XG5cdGlmIChyZXMpIHtcblx0XHRjaGFyc2V0ID0gcmVzLnBvcCgpO1xuXG5cdFx0Ly8gcHJldmVudCBkZWNvZGUgaXNzdWVzIHdoZW4gc2l0ZXMgdXNlIGluY29ycmVjdCBlbmNvZGluZ1xuXHRcdC8vIHJlZjogaHR0cHM6Ly9oc2l2b25lbi5maS9lbmNvZGluZy1tZW51L1xuXHRcdGlmIChjaGFyc2V0ID09PSAnZ2IyMzEyJyB8fCBjaGFyc2V0ID09PSAnZ2JrJykge1xuXHRcdFx0Y2hhcnNldCA9ICdnYjE4MDMwJztcblx0XHR9XG5cdH1cblxuXHQvLyB0dXJuIHJhdyBidWZmZXJzIGludG8gYSBzaW5nbGUgdXRmLTggYnVmZmVyXG5cdHJldHVybiBjb252ZXJ0KGJ1ZmZlciwgJ1VURi04JywgY2hhcnNldCkudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKiByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9iaXRpbm4vbm9kZS1mZXRjaC9pc3N1ZXMvMjk2I2lzc3VlY29tbWVudC0zMDc1OTgxNDNcbiAqXG4gKiBAcGFyYW0gICBPYmplY3QgIG9iaiAgICAgT2JqZWN0IHRvIGRldGVjdCBieSB0eXBlIG9yIGJyYW5kXG4gKiBAcmV0dXJuICBTdHJpbmdcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXMob2JqKSB7XG5cdC8vIER1Y2stdHlwaW5nIGFzIGEgbmVjZXNzYXJ5IGNvbmRpdGlvbi5cblx0aWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmouYXBwZW5kICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZGVsZXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZ2V0QWxsICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouaGFzICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouc2V0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gQnJhbmQtY2hlY2tpbmcgYW5kIG1vcmUgZHVjay10eXBpbmcgYXMgb3B0aW9uYWwgY29uZGl0aW9uLlxuXHRyZXR1cm4gb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdVUkxTZWFyY2hQYXJhbXMnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBVUkxTZWFyY2hQYXJhbXNdJyB8fCB0eXBlb2Ygb2JqLnNvcnQgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBXM0MgYEJsb2JgIG9iamVjdCAod2hpY2ggYEZpbGVgIGluaGVyaXRzIGZyb20pXG4gKiBAcGFyYW0gIHsqfSBvYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQmxvYihvYmopIHtcblx0cmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmouYXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai50eXBlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb2JqLnN0cmVhbSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IubmFtZSA9PT0gJ3N0cmluZycgJiYgL14oQmxvYnxGaWxlKSQvLnRlc3Qob2JqLmNvbnN0cnVjdG9yLm5hbWUpICYmIC9eKEJsb2J8RmlsZSkkLy50ZXN0KG9ialtTeW1ib2wudG9TdHJpbmdUYWddKTtcbn1cblxuLyoqXG4gKiBDbG9uZSBib2R5IGdpdmVuIFJlcy9SZXEgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgaW5zdGFuY2UgIFJlc3BvbnNlIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEByZXR1cm4gIE1peGVkXG4gKi9cbmZ1bmN0aW9uIGNsb25lKGluc3RhbmNlKSB7XG5cdGxldCBwMSwgcDI7XG5cdGxldCBib2R5ID0gaW5zdGFuY2UuYm9keTtcblxuXHQvLyBkb24ndCBhbGxvdyBjbG9uaW5nIGEgdXNlZCBib2R5XG5cdGlmIChpbnN0YW5jZS5ib2R5VXNlZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2Fubm90IGNsb25lIGJvZHkgYWZ0ZXIgaXQgaXMgdXNlZCcpO1xuXHR9XG5cblx0Ly8gY2hlY2sgdGhhdCBib2R5IGlzIGEgc3RyZWFtIGFuZCBub3QgZm9ybS1kYXRhIG9iamVjdFxuXHQvLyBub3RlOiB3ZSBjYW4ndCBjbG9uZSB0aGUgZm9ybS1kYXRhIG9iamVjdCB3aXRob3V0IGhhdmluZyBpdCBhcyBhIGRlcGVuZGVuY3lcblx0aWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0gJiYgdHlwZW9mIGJvZHkuZ2V0Qm91bmRhcnkgIT09ICdmdW5jdGlvbicpIHtcblx0XHQvLyB0ZWUgaW5zdGFuY2UgYm9keVxuXHRcdHAxID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cdFx0cDIgPSBuZXcgUGFzc1Rocm91Z2goKTtcblx0XHRib2R5LnBpcGUocDEpO1xuXHRcdGJvZHkucGlwZShwMik7XG5cdFx0Ly8gc2V0IGluc3RhbmNlIGJvZHkgdG8gdGVlZCBib2R5IGFuZCByZXR1cm4gdGhlIG90aGVyIHRlZWQgYm9keVxuXHRcdGluc3RhbmNlW0lOVEVSTkFMU10uYm9keSA9IHAxO1xuXHRcdGJvZHkgPSBwMjtcblx0fVxuXG5cdHJldHVybiBib2R5O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIHRoZSBvcGVyYXRpb24gXCJleHRyYWN0IGEgYENvbnRlbnQtVHlwZWAgdmFsdWUgZnJvbSB8b2JqZWN0fFwiIGFzXG4gKiBzcGVjaWZpZWQgaW4gdGhlIHNwZWNpZmljYXRpb246XG4gKiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ib2R5aW5pdC1leHRyYWN0XG4gKlxuICogVGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgaW5zdGFuY2UuYm9keSBpcyBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSAgIE1peGVkICBpbnN0YW5jZSAgQW55IG9wdGlvbnMuYm9keSBpbnB1dFxuICovXG5mdW5jdGlvbiBleHRyYWN0Q29udGVudFR5cGUoYm9keSkge1xuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdC8vIGJvZHkgaXMgbnVsbFxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuXHRcdC8vIGJvZHkgaXMgc3RyaW5nXG5cdFx0cmV0dXJuICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnO1xuXHR9IGVsc2UgaWYgKGlzVVJMU2VhcmNoUGFyYW1zKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBhIFVSTFNlYXJjaFBhcmFtc1xuXHRcdHJldHVybiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYmxvYlxuXHRcdHJldHVybiBib2R5LnR5cGUgfHwgbnVsbDtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyVmlld1xuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBib2R5LmdldEJvdW5kYXJ5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gZGV0ZWN0IGZvcm0gZGF0YSBpbnB1dCBmcm9tIGZvcm0tZGF0YSBtb2R1bGVcblx0XHRyZXR1cm4gYG11bHRpcGFydC9mb3JtLWRhdGE7Ym91bmRhcnk9JHtib2R5LmdldEJvdW5kYXJ5KCl9YDtcblx0fSBlbHNlIGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtKSB7XG5cdFx0Ly8gYm9keSBpcyBzdHJlYW1cblx0XHQvLyBjYW4ndCByZWFsbHkgZG8gbXVjaCBhYm91dCB0aGlzXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQm9keSBjb25zdHJ1Y3RvciBkZWZhdWx0cyBvdGhlciB0aGluZ3MgdG8gc3RyaW5nXG5cdFx0cmV0dXJuICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIEZldGNoIFN0YW5kYXJkIHRyZWF0cyB0aGlzIGFzIGlmIFwidG90YWwgYnl0ZXNcIiBpcyBhIHByb3BlcnR5IG9uIHRoZSBib2R5LlxuICogRm9yIHVzLCB3ZSBoYXZlIHRvIGV4cGxpY2l0bHkgZ2V0IGl0IHdpdGggYSBmdW5jdGlvbi5cbiAqXG4gKiByZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWJvZHktdG90YWwtYnl0ZXNcbiAqXG4gKiBAcGFyYW0gICBCb2R5ICAgIGluc3RhbmNlICAgSW5zdGFuY2Ugb2YgQm9keVxuICogQHJldHVybiAgTnVtYmVyPyAgICAgICAgICAgIE51bWJlciBvZiBieXRlcywgb3IgbnVsbCBpZiBub3QgcG9zc2libGVcbiAqL1xuZnVuY3Rpb24gZ2V0VG90YWxCeXRlcyhpbnN0YW5jZSkge1xuXHRjb25zdCBib2R5ID0gaW5zdGFuY2UuYm9keTtcblxuXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0Ly8gYm9keSBpcyBudWxsXG5cdFx0cmV0dXJuIDA7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0cmV0dXJuIGJvZHkuc2l6ZTtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdHJldHVybiBib2R5Lmxlbmd0aDtcblx0fSBlbHNlIGlmIChib2R5ICYmIHR5cGVvZiBib2R5LmdldExlbmd0aFN5bmMgPT09ICdmdW5jdGlvbicpIHtcblx0XHQvLyBkZXRlY3QgZm9ybSBkYXRhIGlucHV0IGZyb20gZm9ybS1kYXRhIG1vZHVsZVxuXHRcdGlmIChib2R5Ll9sZW5ndGhSZXRyaWV2ZXJzICYmIGJvZHkuX2xlbmd0aFJldHJpZXZlcnMubGVuZ3RoID09IDAgfHwgLy8gMS54XG5cdFx0Ym9keS5oYXNLbm93bkxlbmd0aCAmJiBib2R5Lmhhc0tub3duTGVuZ3RoKCkpIHtcblx0XHRcdC8vIDIueFxuXHRcdFx0cmV0dXJuIGJvZHkuZ2V0TGVuZ3RoU3luYygpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIHtcblx0XHQvLyBib2R5IGlzIHN0cmVhbVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbi8qKlxuICogV3JpdGUgYSBCb2R5IHRvIGEgTm9kZS5qcyBXcml0YWJsZVN0cmVhbSAoZS5nLiBodHRwLlJlcXVlc3QpIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gICBCb2R5ICAgIGluc3RhbmNlICAgSW5zdGFuY2Ugb2YgQm9keVxuICogQHJldHVybiAgVm9pZFxuICovXG5mdW5jdGlvbiB3cml0ZVRvU3RyZWFtKGRlc3QsIGluc3RhbmNlKSB7XG5cdGNvbnN0IGJvZHkgPSBpbnN0YW5jZS5ib2R5O1xuXG5cblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIG51bGxcblx0XHRkZXN0LmVuZCgpO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXHRcdGJvZHkuc3RyZWFtKCkucGlwZShkZXN0KTtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdGRlc3Qud3JpdGUoYm9keSk7XG5cdFx0ZGVzdC5lbmQoKTtcblx0fSBlbHNlIHtcblx0XHQvLyBib2R5IGlzIHN0cmVhbVxuXHRcdGJvZHkucGlwZShkZXN0KTtcblx0fVxufVxuXG4vLyBleHBvc2UgUHJvbWlzZVxuQm9keS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG5cbi8qKlxuICogaGVhZGVycy5qc1xuICpcbiAqIEhlYWRlcnMgY2xhc3Mgb2ZmZXJzIGNvbnZlbmllbnQgaGVscGVyc1xuICovXG5cbmNvbnN0IGludmFsaWRUb2tlblJlZ2V4ID0gL1teXFxeX2BhLXpBLVpcXC0wLTkhIyQlJicqKy58fl0vO1xuY29uc3QgaW52YWxpZEhlYWRlckNoYXJSZWdleCA9IC9bXlxcdFxceDIwLVxceDdlXFx4ODAtXFx4ZmZdLztcblxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lKG5hbWUpIHtcblx0bmFtZSA9IGAke25hbWV9YDtcblx0aWYgKGludmFsaWRUb2tlblJlZ2V4LnRlc3QobmFtZSkgfHwgbmFtZSA9PT0gJycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGAke25hbWV9IGlzIG5vdCBhIGxlZ2FsIEhUVFAgaGVhZGVyIG5hbWVgKTtcblx0fVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbHVlKSB7XG5cdHZhbHVlID0gYCR7dmFsdWV9YDtcblx0aWYgKGludmFsaWRIZWFkZXJDaGFyUmVnZXgudGVzdCh2YWx1ZSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGAke3ZhbHVlfSBpcyBub3QgYSBsZWdhbCBIVFRQIGhlYWRlciB2YWx1ZWApO1xuXHR9XG59XG5cbi8qKlxuICogRmluZCB0aGUga2V5IGluIHRoZSBtYXAgb2JqZWN0IGdpdmVuIGEgaGVhZGVyIG5hbWUuXG4gKlxuICogUmV0dXJucyB1bmRlZmluZWQgaWYgbm90IGZvdW5kLlxuICpcbiAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgSGVhZGVyIG5hbWVcbiAqIEByZXR1cm4gIFN0cmluZ3xVbmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gZmluZChtYXAsIG5hbWUpIHtcblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0Zm9yIChjb25zdCBrZXkgaW4gbWFwKSB7XG5cdFx0aWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSBuYW1lKSB7XG5cdFx0XHRyZXR1cm4ga2V5O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBNQVAgPSBTeW1ib2woJ21hcCcpO1xuY2xhc3MgSGVhZGVycyB7XG5cdC8qKlxuICAqIEhlYWRlcnMgY2xhc3NcbiAgKlxuICAqIEBwYXJhbSAgIE9iamVjdCAgaGVhZGVycyAgUmVzcG9uc2UgaGVhZGVyc1xuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGluaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZDtcblxuXHRcdHRoaXNbTUFQXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHRpZiAoaW5pdCBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcblx0XHRcdGNvbnN0IHJhd0hlYWRlcnMgPSBpbml0LnJhdygpO1xuXHRcdFx0Y29uc3QgaGVhZGVyTmFtZXMgPSBPYmplY3Qua2V5cyhyYXdIZWFkZXJzKTtcblxuXHRcdFx0Zm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIGhlYWRlck5hbWVzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgdmFsdWUgb2YgcmF3SGVhZGVyc1toZWFkZXJOYW1lXSkge1xuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGhlYWRlck5hbWUsIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gV2UgZG9uJ3Qgd29ycnkgYWJvdXQgY29udmVydGluZyBwcm9wIHRvIEJ5dGVTdHJpbmcgaGVyZSBhcyBhcHBlbmQoKVxuXHRcdC8vIHdpbGwgaGFuZGxlIGl0LlxuXHRcdGlmIChpbml0ID09IG51bGwpIDsgZWxzZSBpZiAodHlwZW9mIGluaXQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCBtZXRob2QgPSBpbml0W1N5bWJvbC5pdGVyYXRvcl07XG5cdFx0XHRpZiAobWV0aG9kICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBtZXRob2QgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdIZWFkZXIgcGFpcnMgbXVzdCBiZSBpdGVyYWJsZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gc2VxdWVuY2U8c2VxdWVuY2U8Qnl0ZVN0cmluZz4+XG5cdFx0XHRcdC8vIE5vdGU6IHBlciBzcGVjIHdlIGhhdmUgdG8gZmlyc3QgZXhoYXVzdCB0aGUgbGlzdHMgdGhlbiBwcm9jZXNzIHRoZW1cblx0XHRcdFx0Y29uc3QgcGFpcnMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWlyIG9mIGluaXQpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHBhaXIgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYWlyW1N5bWJvbC5pdGVyYXRvcl0gIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0VhY2ggaGVhZGVyIHBhaXIgbXVzdCBiZSBpdGVyYWJsZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwYWlycy5wdXNoKEFycmF5LmZyb20ocGFpcikpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG5cdFx0XHRcdFx0aWYgKHBhaXIubGVuZ3RoICE9PSAyKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFYWNoIGhlYWRlciBwYWlyIG11c3QgYmUgYSBuYW1lL3ZhbHVlIHR1cGxlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyByZWNvcmQ8Qnl0ZVN0cmluZywgQnl0ZVN0cmluZz5cblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoaW5pdCkpIHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IGluaXRba2V5XTtcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChrZXksIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm92aWRlZCBpbml0aWFsaXplciBtdXN0IGJlIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIFJldHVybiBjb21iaW5lZCBoZWFkZXIgdmFsdWUgZ2l2ZW4gbmFtZVxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICBuYW1lICBIZWFkZXIgbmFtZVxuICAqIEByZXR1cm4gIE1peGVkXG4gICovXG5cdGdldChuYW1lKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNbTUFQXVtrZXldLmpvaW4oJywgJyk7XG5cdH1cblxuXHQvKipcbiAgKiBJdGVyYXRlIG92ZXIgYWxsIGhlYWRlcnNcbiAgKlxuICAqIEBwYXJhbSAgIEZ1bmN0aW9uICBjYWxsYmFjayAgRXhlY3V0ZWQgZm9yIGVhY2ggaXRlbSB3aXRoIHBhcmFtZXRlcnMgKHZhbHVlLCBuYW1lLCB0aGlzQXJnKVxuICAqIEBwYXJhbSAgIEJvb2xlYW4gICB0aGlzQXJnICAgYHRoaXNgIGNvbnRleHQgZm9yIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRmb3JFYWNoKGNhbGxiYWNrKSB7XG5cdFx0bGV0IHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuXHRcdGxldCBwYWlycyA9IGdldEhlYWRlcnModGhpcyk7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdHdoaWxlIChpIDwgcGFpcnMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgX3BhaXJzJGkgPSBwYWlyc1tpXTtcblx0XHRcdGNvbnN0IG5hbWUgPSBfcGFpcnMkaVswXSxcblx0XHRcdCAgICAgIHZhbHVlID0gX3BhaXJzJGlbMV07XG5cblx0XHRcdGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuXHRcdFx0cGFpcnMgPSBnZXRIZWFkZXJzKHRoaXMpO1xuXHRcdFx0aSsrO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIE92ZXJ3cml0ZSBoZWFkZXIgdmFsdWVzIGdpdmVuIG5hbWVcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgIEhlYWRlciBuYW1lXG4gICogQHBhcmFtICAgU3RyaW5nICB2YWx1ZSAgSGVhZGVyIHZhbHVlXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRzZXQobmFtZSwgdmFsdWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbHVlID0gYCR7dmFsdWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0dmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdHRoaXNbTUFQXVtrZXkgIT09IHVuZGVmaW5lZCA/IGtleSA6IG5hbWVdID0gW3ZhbHVlXTtcblx0fVxuXG5cdC8qKlxuICAqIEFwcGVuZCBhIHZhbHVlIG9udG8gZXhpc3RpbmcgaGVhZGVyXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgICBIZWFkZXIgbmFtZVxuICAqIEBwYXJhbSAgIFN0cmluZyAgdmFsdWUgIEhlYWRlciB2YWx1ZVxuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0YXBwZW5kKG5hbWUsIHZhbHVlKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWx1ZSA9IGAke3ZhbHVlfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdHZhbGlkYXRlVmFsdWUodmFsdWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHRpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXNbTUFQXVtrZXldLnB1c2godmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzW01BUF1bbmFtZV0gPSBbdmFsdWVdO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIENoZWNrIGZvciBoZWFkZXIgbmFtZSBleGlzdGVuY2VcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgIG5hbWUgIEhlYWRlciBuYW1lXG4gICogQHJldHVybiAgQm9vbGVhblxuICAqL1xuXHRoYXMobmFtZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdHJldHVybiBmaW5kKHRoaXNbTUFQXSwgbmFtZSkgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKlxuICAqIERlbGV0ZSBhbGwgaGVhZGVyIHZhbHVlcyBnaXZlbiBuYW1lXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgIEhlYWRlciBuYW1lXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRkZWxldGUobmFtZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHRpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRlbGV0ZSB0aGlzW01BUF1ba2V5XTtcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgKiBSZXR1cm4gcmF3IGhlYWRlcnMgKG5vbi1zcGVjIGFwaSlcbiAgKlxuICAqIEByZXR1cm4gIE9iamVjdFxuICAqL1xuXHRyYXcoKSB7XG5cdFx0cmV0dXJuIHRoaXNbTUFQXTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiBrZXlzLlxuICAqXG4gICogQHJldHVybiAgSXRlcmF0b3JcbiAgKi9cblx0a2V5cygpIHtcblx0XHRyZXR1cm4gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRoaXMsICdrZXknKTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiB2YWx1ZXMuXG4gICpcbiAgKiBAcmV0dXJuICBJdGVyYXRvclxuICAqL1xuXHR2YWx1ZXMoKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0aGlzLCAndmFsdWUnKTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiBlbnRyaWVzLlxuICAqXG4gICogVGhpcyBpcyB0aGUgZGVmYXVsdCBpdGVyYXRvciBvZiB0aGUgSGVhZGVycyBvYmplY3QuXG4gICpcbiAgKiBAcmV0dXJuICBJdGVyYXRvclxuICAqL1xuXHRbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHRyZXR1cm4gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRoaXMsICdrZXkrdmFsdWUnKTtcblx0fVxufVxuSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIZWFkZXJzLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnSGVhZGVycycsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEhlYWRlcnMucHJvdG90eXBlLCB7XG5cdGdldDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGZvckVhY2g6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzZXQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRhcHBlbmQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRoYXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRkZWxldGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRrZXlzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dmFsdWVzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0ZW50cmllczogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRIZWFkZXJzKGhlYWRlcnMpIHtcblx0bGV0IGtpbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdrZXkrdmFsdWUnO1xuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhoZWFkZXJzW01BUF0pLnNvcnQoKTtcblx0cmV0dXJuIGtleXMubWFwKGtpbmQgPT09ICdrZXknID8gZnVuY3Rpb24gKGspIHtcblx0XHRyZXR1cm4gay50b0xvd2VyQ2FzZSgpO1xuXHR9IDoga2luZCA9PT0gJ3ZhbHVlJyA/IGZ1bmN0aW9uIChrKSB7XG5cdFx0cmV0dXJuIGhlYWRlcnNbTUFQXVtrXS5qb2luKCcsICcpO1xuXHR9IDogZnVuY3Rpb24gKGspIHtcblx0XHRyZXR1cm4gW2sudG9Mb3dlckNhc2UoKSwgaGVhZGVyc1tNQVBdW2tdLmpvaW4oJywgJyldO1xuXHR9KTtcbn1cblxuY29uc3QgSU5URVJOQUwgPSBTeW1ib2woJ2ludGVybmFsJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0YXJnZXQsIGtpbmQpIHtcblx0Y29uc3QgaXRlcmF0b3IgPSBPYmplY3QuY3JlYXRlKEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSk7XG5cdGl0ZXJhdG9yW0lOVEVSTkFMXSA9IHtcblx0XHR0YXJnZXQsXG5cdFx0a2luZCxcblx0XHRpbmRleDogMFxuXHR9O1xuXHRyZXR1cm4gaXRlcmF0b3I7XG59XG5cbmNvbnN0IEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSA9IE9iamVjdC5zZXRQcm90b3R5cGVPZih7XG5cdG5leHQoKSB7XG5cdFx0Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5cdFx0aWYgKCF0aGlzIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gSGVhZGVyc0l0ZXJhdG9yUHJvdG90eXBlKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdWYWx1ZSBvZiBgdGhpc2AgaXMgbm90IGEgSGVhZGVyc0l0ZXJhdG9yJyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9JTlRFUk5BTCA9IHRoaXNbSU5URVJOQUxdO1xuXHRcdGNvbnN0IHRhcmdldCA9IF9JTlRFUk5BTC50YXJnZXQsXG5cdFx0ICAgICAga2luZCA9IF9JTlRFUk5BTC5raW5kLFxuXHRcdCAgICAgIGluZGV4ID0gX0lOVEVSTkFMLmluZGV4O1xuXG5cdFx0Y29uc3QgdmFsdWVzID0gZ2V0SGVhZGVycyh0YXJnZXQsIGtpbmQpO1xuXHRcdGNvbnN0IGxlbiA9IHZhbHVlcy5sZW5ndGg7XG5cdFx0aWYgKGluZGV4ID49IGxlbikge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IHVuZGVmaW5lZCxcblx0XHRcdFx0ZG9uZTogdHJ1ZVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMXS5pbmRleCA9IGluZGV4ICsgMTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdmFsdWVzW2luZGV4XSxcblx0XHRcdGRvbmU6IGZhbHNlXG5cdFx0fTtcblx0fVxufSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIZWFkZXJzSXRlcmF0b3JQcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ0hlYWRlcnNJdGVyYXRvcicsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbi8qKlxuICogRXhwb3J0IHRoZSBIZWFkZXJzIG9iamVjdCBpbiBhIGZvcm0gdGhhdCBOb2RlLmpzIGNhbiBjb25zdW1lLlxuICpcbiAqIEBwYXJhbSAgIEhlYWRlcnMgIGhlYWRlcnNcbiAqIEByZXR1cm4gIE9iamVjdFxuICovXG5mdW5jdGlvbiBleHBvcnROb2RlQ29tcGF0aWJsZUhlYWRlcnMoaGVhZGVycykge1xuXHRjb25zdCBvYmogPSBPYmplY3QuYXNzaWduKHsgX19wcm90b19fOiBudWxsIH0sIGhlYWRlcnNbTUFQXSk7XG5cblx0Ly8gaHR0cC5yZXF1ZXN0KCkgb25seSBzdXBwb3J0cyBzdHJpbmcgYXMgSG9zdCBoZWFkZXIuIFRoaXMgaGFjayBtYWtlc1xuXHQvLyBzcGVjaWZ5aW5nIGN1c3RvbSBIb3N0IGhlYWRlciBwb3NzaWJsZS5cblx0Y29uc3QgaG9zdEhlYWRlcktleSA9IGZpbmQoaGVhZGVyc1tNQVBdLCAnSG9zdCcpO1xuXHRpZiAoaG9zdEhlYWRlcktleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b2JqW2hvc3RIZWFkZXJLZXldID0gb2JqW2hvc3RIZWFkZXJLZXldWzBdO1xuXHR9XG5cblx0cmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBIZWFkZXJzIG9iamVjdCBmcm9tIGFuIG9iamVjdCBvZiBoZWFkZXJzLCBpZ25vcmluZyB0aG9zZSB0aGF0IGRvXG4gKiBub3QgY29uZm9ybSB0byBIVFRQIGdyYW1tYXIgcHJvZHVjdGlvbnMuXG4gKlxuICogQHBhcmFtICAgT2JqZWN0ICBvYmogIE9iamVjdCBvZiBoZWFkZXJzXG4gKiBAcmV0dXJuICBIZWFkZXJzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcnNMZW5pZW50KG9iaikge1xuXHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0Zm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKG9iaikpIHtcblx0XHRpZiAoaW52YWxpZFRva2VuUmVnZXgudGVzdChuYW1lKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChBcnJheS5pc0FycmF5KG9ialtuYW1lXSkpIHtcblx0XHRcdGZvciAoY29uc3QgdmFsIG9mIG9ialtuYW1lXSkge1xuXHRcdFx0XHRpZiAoaW52YWxpZEhlYWRlckNoYXJSZWdleC50ZXN0KHZhbCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGVhZGVyc1tNQVBdW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRoZWFkZXJzW01BUF1bbmFtZV0gPSBbdmFsXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRoZWFkZXJzW01BUF1bbmFtZV0ucHVzaCh2YWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghaW52YWxpZEhlYWRlckNoYXJSZWdleC50ZXN0KG9ialtuYW1lXSkpIHtcblx0XHRcdGhlYWRlcnNbTUFQXVtuYW1lXSA9IFtvYmpbbmFtZV1dO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaGVhZGVycztcbn1cblxuY29uc3QgSU5URVJOQUxTJDEgPSBTeW1ib2woJ1Jlc3BvbnNlIGludGVybmFscycpO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJTVEFUVVNfQ09ERVNcIiBhcmVuJ3QgYSBuYW1lZCBleHBvcnQgZm9yIG5vZGUgPDEwXG5jb25zdCBTVEFUVVNfQ09ERVMgPSBodHRwLlNUQVRVU19DT0RFUztcblxuLyoqXG4gKiBSZXNwb25zZSBjbGFzc1xuICpcbiAqIEBwYXJhbSAgIFN0cmVhbSAgYm9keSAgUmVhZGFibGUgc3RyZWFtXG4gKiBAcGFyYW0gICBPYmplY3QgIG9wdHMgIFJlc3BvbnNlIG9wdGlvbnNcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuY2xhc3MgUmVzcG9uc2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgYm9keSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcblx0XHRsZXQgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cblx0XHRCb2R5LmNhbGwodGhpcywgYm9keSwgb3B0cyk7XG5cblx0XHRjb25zdCBzdGF0dXMgPSBvcHRzLnN0YXR1cyB8fCAyMDA7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdHMuaGVhZGVycyk7XG5cblx0XHRpZiAoYm9keSAhPSBudWxsICYmICFoZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykpIHtcblx0XHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gZXh0cmFjdENvbnRlbnRUeXBlKGJvZHkpO1xuXHRcdFx0aWYgKGNvbnRlbnRUeXBlKSB7XG5cdFx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpc1tJTlRFUk5BTFMkMV0gPSB7XG5cdFx0XHR1cmw6IG9wdHMudXJsLFxuXHRcdFx0c3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogb3B0cy5zdGF0dXNUZXh0IHx8IFNUQVRVU19DT0RFU1tzdGF0dXNdLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdGNvdW50ZXI6IG9wdHMuY291bnRlclxuXHRcdH07XG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS51cmwgfHwgJyc7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXM7XG5cdH1cblxuXHQvKipcbiAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSByZXByZXNlbnRpbmcgaWYgdGhlIHJlcXVlc3QgZW5kZWQgbm9ybWFsbHlcbiAgKi9cblx0Z2V0IG9rKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXMgPj0gMjAwICYmIHRoaXNbSU5URVJOQUxTJDFdLnN0YXR1cyA8IDMwMDtcblx0fVxuXG5cdGdldCByZWRpcmVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5jb3VudGVyID4gMDtcblx0fVxuXG5cdGdldCBzdGF0dXNUZXh0KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXNUZXh0O1xuXHR9XG5cblx0Z2V0IGhlYWRlcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLmhlYWRlcnM7XG5cdH1cblxuXHQvKipcbiAgKiBDbG9uZSB0aGlzIHJlc3BvbnNlXG4gICpcbiAgKiBAcmV0dXJuICBSZXNwb25zZVxuICAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlKGNsb25lKHRoaXMpLCB7XG5cdFx0XHR1cmw6IHRoaXMudXJsLFxuXHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcblx0XHRcdGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcblx0XHRcdG9rOiB0aGlzLm9rLFxuXHRcdFx0cmVkaXJlY3RlZDogdGhpcy5yZWRpcmVjdGVkXG5cdFx0fSk7XG5cdH1cbn1cblxuQm9keS5taXhJbihSZXNwb25zZS5wcm90b3R5cGUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZXNwb25zZS5wcm90b3R5cGUsIHtcblx0dXJsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c3RhdHVzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0b2s6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRyZWRpcmVjdGVkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c3RhdHVzVGV4dDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGhlYWRlcnM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRjbG9uZTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVzcG9uc2UucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdSZXNwb25zZScsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbmNvbnN0IElOVEVSTkFMUyQyID0gU3ltYm9sKCdSZXF1ZXN0IGludGVybmFscycpO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJmb3JtYXRcIiwgXCJwYXJzZVwiIGFyZW4ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IHBhcnNlX3VybCA9IFVybC5wYXJzZTtcbmNvbnN0IGZvcm1hdF91cmwgPSBVcmwuZm9ybWF0O1xuXG5jb25zdCBzdHJlYW1EZXN0cnVjdGlvblN1cHBvcnRlZCA9ICdkZXN0cm95JyBpbiBTdHJlYW0uUmVhZGFibGUucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgUmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgIGlucHV0XG4gKiBAcmV0dXJuICBCb29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzUmVxdWVzdChpbnB1dCkge1xuXHRyZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgaW5wdXRbSU5URVJOQUxTJDJdID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNBYm9ydFNpZ25hbChzaWduYWwpIHtcblx0Y29uc3QgcHJvdG8gPSBzaWduYWwgJiYgdHlwZW9mIHNpZ25hbCA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHNpZ25hbCk7XG5cdHJldHVybiAhIShwcm90byAmJiBwcm90by5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQWJvcnRTaWduYWwnKTtcbn1cblxuLyoqXG4gKiBSZXF1ZXN0IGNsYXNzXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgICBpbnB1dCAgVXJsIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEBwYXJhbSAgIE9iamVjdCAgaW5pdCAgIEN1c3RvbSBvcHRpb25zXG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmNsYXNzIFJlcXVlc3Qge1xuXHRjb25zdHJ1Y3RvcihpbnB1dCkge1xuXHRcdGxldCBpbml0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuXHRcdGxldCBwYXJzZWRVUkw7XG5cblx0XHQvLyBub3JtYWxpemUgaW5wdXRcblx0XHRpZiAoIWlzUmVxdWVzdChpbnB1dCkpIHtcblx0XHRcdGlmIChpbnB1dCAmJiBpbnB1dC5ocmVmKSB7XG5cdFx0XHRcdC8vIGluIG9yZGVyIHRvIHN1cHBvcnQgTm9kZS5qcycgVXJsIG9iamVjdHM7IHRob3VnaCBXSEFUV0cncyBVUkwgb2JqZWN0c1xuXHRcdFx0XHQvLyB3aWxsIGZhbGwgaW50byB0aGlzIGJyYW5jaCBhbHNvIChzaW5jZSB0aGVpciBgdG9TdHJpbmcoKWAgd2lsbCByZXR1cm5cblx0XHRcdFx0Ly8gYGhyZWZgIHByb3BlcnR5IGFueXdheSlcblx0XHRcdFx0cGFyc2VkVVJMID0gcGFyc2VfdXJsKGlucHV0LmhyZWYpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY29lcmNlIGlucHV0IHRvIGEgc3RyaW5nIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHBhcnNlXG5cdFx0XHRcdHBhcnNlZFVSTCA9IHBhcnNlX3VybChgJHtpbnB1dH1gKTtcblx0XHRcdH1cblx0XHRcdGlucHV0ID0ge307XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhcnNlZFVSTCA9IHBhcnNlX3VybChpbnB1dC51cmwpO1xuXHRcdH1cblxuXHRcdGxldCBtZXRob2QgPSBpbml0Lm1ldGhvZCB8fCBpbnB1dC5tZXRob2QgfHwgJ0dFVCc7XG5cdFx0bWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG5cblx0XHRpZiAoKGluaXQuYm9keSAhPSBudWxsIHx8IGlzUmVxdWVzdChpbnB1dCkgJiYgaW5wdXQuYm9keSAhPT0gbnVsbCkgJiYgKG1ldGhvZCA9PT0gJ0dFVCcgfHwgbWV0aG9kID09PSAnSEVBRCcpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdSZXF1ZXN0IHdpdGggR0VUL0hFQUQgbWV0aG9kIGNhbm5vdCBoYXZlIGJvZHknKTtcblx0XHR9XG5cblx0XHRsZXQgaW5wdXRCb2R5ID0gaW5pdC5ib2R5ICE9IG51bGwgPyBpbml0LmJvZHkgOiBpc1JlcXVlc3QoaW5wdXQpICYmIGlucHV0LmJvZHkgIT09IG51bGwgPyBjbG9uZShpbnB1dCkgOiBudWxsO1xuXG5cdFx0Qm9keS5jYWxsKHRoaXMsIGlucHV0Qm9keSwge1xuXHRcdFx0dGltZW91dDogaW5pdC50aW1lb3V0IHx8IGlucHV0LnRpbWVvdXQgfHwgMCxcblx0XHRcdHNpemU6IGluaXQuc2l6ZSB8fCBpbnB1dC5zaXplIHx8IDBcblx0XHR9KTtcblxuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbml0LmhlYWRlcnMgfHwgaW5wdXQuaGVhZGVycyB8fCB7fSk7XG5cblx0XHRpZiAoaW5wdXRCb2R5ICE9IG51bGwgJiYgIWhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSkge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSBleHRyYWN0Q29udGVudFR5cGUoaW5wdXRCb2R5KTtcblx0XHRcdGlmIChjb250ZW50VHlwZSkge1xuXHRcdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBzaWduYWwgPSBpc1JlcXVlc3QoaW5wdXQpID8gaW5wdXQuc2lnbmFsIDogbnVsbDtcblx0XHRpZiAoJ3NpZ25hbCcgaW4gaW5pdCkgc2lnbmFsID0gaW5pdC5zaWduYWw7XG5cblx0XHRpZiAoc2lnbmFsICE9IG51bGwgJiYgIWlzQWJvcnRTaWduYWwoc2lnbmFsKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgc2lnbmFsIHRvIGJlIGFuIGluc3RhbmNlb2YgQWJvcnRTaWduYWwnKTtcblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMUyQyXSA9IHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdHJlZGlyZWN0OiBpbml0LnJlZGlyZWN0IHx8IGlucHV0LnJlZGlyZWN0IHx8ICdmb2xsb3cnLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdHBhcnNlZFVSTCxcblx0XHRcdHNpZ25hbFxuXHRcdH07XG5cblx0XHQvLyBub2RlLWZldGNoLW9ubHkgb3B0aW9uc1xuXHRcdHRoaXMuZm9sbG93ID0gaW5pdC5mb2xsb3cgIT09IHVuZGVmaW5lZCA/IGluaXQuZm9sbG93IDogaW5wdXQuZm9sbG93ICE9PSB1bmRlZmluZWQgPyBpbnB1dC5mb2xsb3cgOiAyMDtcblx0XHR0aGlzLmNvbXByZXNzID0gaW5pdC5jb21wcmVzcyAhPT0gdW5kZWZpbmVkID8gaW5pdC5jb21wcmVzcyA6IGlucHV0LmNvbXByZXNzICE9PSB1bmRlZmluZWQgPyBpbnB1dC5jb21wcmVzcyA6IHRydWU7XG5cdFx0dGhpcy5jb3VudGVyID0gaW5pdC5jb3VudGVyIHx8IGlucHV0LmNvdW50ZXIgfHwgMDtcblx0XHR0aGlzLmFnZW50ID0gaW5pdC5hZ2VudCB8fCBpbnB1dC5hZ2VudDtcblx0fVxuXG5cdGdldCBtZXRob2QoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDJdLm1ldGhvZDtcblx0fVxuXG5cdGdldCB1cmwoKSB7XG5cdFx0cmV0dXJuIGZvcm1hdF91cmwodGhpc1tJTlRFUk5BTFMkMl0ucGFyc2VkVVJMKTtcblx0fVxuXG5cdGdldCBoZWFkZXJzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5oZWFkZXJzO1xuXHR9XG5cblx0Z2V0IHJlZGlyZWN0KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5yZWRpcmVjdDtcblx0fVxuXG5cdGdldCBzaWduYWwoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDJdLnNpZ25hbDtcblx0fVxuXG5cdC8qKlxuICAqIENsb25lIHRoaXMgcmVxdWVzdFxuICAqXG4gICogQHJldHVybiAgUmVxdWVzdFxuICAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFJlcXVlc3QodGhpcyk7XG5cdH1cbn1cblxuQm9keS5taXhJbihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXF1ZXN0LnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnUmVxdWVzdCcsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlcXVlc3QucHJvdG90eXBlLCB7XG5cdG1ldGhvZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHVybDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGhlYWRlcnM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRyZWRpcmVjdDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGNsb25lOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c2lnbmFsOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbi8qKlxuICogQ29udmVydCBhIFJlcXVlc3QgdG8gTm9kZS5qcyBodHRwIHJlcXVlc3Qgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gICBSZXF1ZXN0ICBBIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEByZXR1cm4gIE9iamVjdCAgIFRoZSBvcHRpb25zIG9iamVjdCB0byBiZSBwYXNzZWQgdG8gaHR0cC5yZXF1ZXN0XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVSZXF1ZXN0T3B0aW9ucyhyZXF1ZXN0KSB7XG5cdGNvbnN0IHBhcnNlZFVSTCA9IHJlcXVlc3RbSU5URVJOQUxTJDJdLnBhcnNlZFVSTDtcblx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHJlcXVlc3RbSU5URVJOQUxTJDJdLmhlYWRlcnMpO1xuXG5cdC8vIGZldGNoIHN0ZXAgMS4zXG5cdGlmICghaGVhZGVycy5oYXMoJ0FjY2VwdCcpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ0FjY2VwdCcsICcqLyonKTtcblx0fVxuXG5cdC8vIEJhc2ljIGZldGNoXG5cdGlmICghcGFyc2VkVVJMLnByb3RvY29sIHx8ICFwYXJzZWRVUkwuaG9zdG5hbWUpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IGFic29sdXRlIFVSTHMgYXJlIHN1cHBvcnRlZCcpO1xuXHR9XG5cblx0aWYgKCEvXmh0dHBzPzokLy50ZXN0KHBhcnNlZFVSTC5wcm90b2NvbCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IEhUVFAoUykgcHJvdG9jb2xzIGFyZSBzdXBwb3J0ZWQnKTtcblx0fVxuXG5cdGlmIChyZXF1ZXN0LnNpZ25hbCAmJiByZXF1ZXN0LmJvZHkgaW5zdGFuY2VvZiBTdHJlYW0uUmVhZGFibGUgJiYgIXN0cmVhbURlc3RydWN0aW9uU3VwcG9ydGVkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5jZWxsYXRpb24gb2Ygc3RyZWFtZWQgcmVxdWVzdHMgd2l0aCBBYm9ydFNpZ25hbCBpcyBub3Qgc3VwcG9ydGVkIGluIG5vZGUgPCA4Jyk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmstb3ItY2FjaGUgZmV0Y2ggc3RlcHMgMi40LTIuN1xuXHRsZXQgY29udGVudExlbmd0aFZhbHVlID0gbnVsbDtcblx0aWYgKHJlcXVlc3QuYm9keSA9PSBudWxsICYmIC9eKFBPU1R8UFVUKSQvaS50ZXN0KHJlcXVlc3QubWV0aG9kKSkge1xuXHRcdGNvbnRlbnRMZW5ndGhWYWx1ZSA9ICcwJztcblx0fVxuXHRpZiAocmVxdWVzdC5ib2R5ICE9IG51bGwpIHtcblx0XHRjb25zdCB0b3RhbEJ5dGVzID0gZ2V0VG90YWxCeXRlcyhyZXF1ZXN0KTtcblx0XHRpZiAodHlwZW9mIHRvdGFsQnl0ZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRjb250ZW50TGVuZ3RoVmFsdWUgPSBTdHJpbmcodG90YWxCeXRlcyk7XG5cdFx0fVxuXHR9XG5cdGlmIChjb250ZW50TGVuZ3RoVmFsdWUpIHtcblx0XHRoZWFkZXJzLnNldCgnQ29udGVudC1MZW5ndGgnLCBjb250ZW50TGVuZ3RoVmFsdWUpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXAgMi4xMVxuXHRpZiAoIWhlYWRlcnMuaGFzKCdVc2VyLUFnZW50JykpIHtcblx0XHRoZWFkZXJzLnNldCgnVXNlci1BZ2VudCcsICdub2RlLWZldGNoLzEuMCAoK2h0dHBzOi8vZ2l0aHViLmNvbS9iaXRpbm4vbm9kZS1mZXRjaCknKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCBzdGVwIDIuMTVcblx0aWYgKHJlcXVlc3QuY29tcHJlc3MgJiYgIWhlYWRlcnMuaGFzKCdBY2NlcHQtRW5jb2RpbmcnKSkge1xuXHRcdGhlYWRlcnMuc2V0KCdBY2NlcHQtRW5jb2RpbmcnLCAnZ3ppcCxkZWZsYXRlJyk7XG5cdH1cblxuXHRsZXQgYWdlbnQgPSByZXF1ZXN0LmFnZW50O1xuXHRpZiAodHlwZW9mIGFnZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0YWdlbnQgPSBhZ2VudChwYXJzZWRVUkwpO1xuXHR9XG5cblx0aWYgKCFoZWFkZXJzLmhhcygnQ29ubmVjdGlvbicpICYmICFhZ2VudCkge1xuXHRcdGhlYWRlcnMuc2V0KCdDb25uZWN0aW9uJywgJ2Nsb3NlJyk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmsgZmV0Y2ggc3RlcCA0LjJcblx0Ly8gY2h1bmtlZCBlbmNvZGluZyBpcyBoYW5kbGVkIGJ5IE5vZGUuanNcblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkVVJMLCB7XG5cdFx0bWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcblx0XHRoZWFkZXJzOiBleHBvcnROb2RlQ29tcGF0aWJsZUhlYWRlcnMoaGVhZGVycyksXG5cdFx0YWdlbnRcblx0fSk7XG59XG5cbi8qKlxuICogYWJvcnQtZXJyb3IuanNcbiAqXG4gKiBBYm9ydEVycm9yIGludGVyZmFjZSBmb3IgY2FuY2VsbGVkIHJlcXVlc3RzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgQWJvcnRFcnJvciBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIG1lc3NhZ2UgICAgICBFcnJvciBtZXNzYWdlIGZvciBodW1hblxuICogQHJldHVybiAgQWJvcnRFcnJvclxuICovXG5mdW5jdGlvbiBBYm9ydEVycm9yKG1lc3NhZ2UpIHtcbiAgRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICB0aGlzLnR5cGUgPSAnYWJvcnRlZCc7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgLy8gaGlkZSBjdXN0b20gZXJyb3IgaW1wbGVtZW50YXRpb24gZGV0YWlscyBmcm9tIGVuZC11c2Vyc1xuICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbn1cblxuQWJvcnRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5BYm9ydEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFib3J0RXJyb3I7XG5BYm9ydEVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0Fib3J0RXJyb3InO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJQYXNzVGhyb3VnaFwiLCBcInJlc29sdmVcIiBhcmVuJ3QgYSBuYW1lZCBleHBvcnQgZm9yIG5vZGUgPDEwXG5jb25zdCBQYXNzVGhyb3VnaCQxID0gU3RyZWFtLlBhc3NUaHJvdWdoO1xuY29uc3QgcmVzb2x2ZV91cmwgPSBVcmwucmVzb2x2ZTtcblxuLyoqXG4gKiBGZXRjaCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSAgIE1peGVkICAgIHVybCAgIEFic29sdXRlIHVybCBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcGFyYW0gICBPYmplY3QgICBvcHRzICBGZXRjaCBvcHRpb25zXG4gKiBAcmV0dXJuICBQcm9taXNlXG4gKi9cbmZ1bmN0aW9uIGZldGNoKHVybCwgb3B0cykge1xuXG5cdC8vIGFsbG93IGN1c3RvbSBwcm9taXNlXG5cdGlmICghZmV0Y2guUHJvbWlzZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignbmF0aXZlIHByb21pc2UgbWlzc2luZywgc2V0IGZldGNoLlByb21pc2UgdG8geW91ciBmYXZvcml0ZSBhbHRlcm5hdGl2ZScpO1xuXHR9XG5cblx0Qm9keS5Qcm9taXNlID0gZmV0Y2guUHJvbWlzZTtcblxuXHQvLyB3cmFwIGh0dHAucmVxdWVzdCBpbnRvIGZldGNoXG5cdHJldHVybiBuZXcgZmV0Y2guUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gYnVpbGQgcmVxdWVzdCBvYmplY3Rcblx0XHRjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCBvcHRzKTtcblx0XHRjb25zdCBvcHRpb25zID0gZ2V0Tm9kZVJlcXVlc3RPcHRpb25zKHJlcXVlc3QpO1xuXG5cdFx0Y29uc3Qgc2VuZCA9IChvcHRpb25zLnByb3RvY29sID09PSAnaHR0cHM6JyA/IGh0dHBzIDogaHR0cCkucmVxdWVzdDtcblx0XHRjb25zdCBzaWduYWwgPSByZXF1ZXN0LnNpZ25hbDtcblxuXHRcdGxldCByZXNwb25zZSA9IG51bGw7XG5cblx0XHRjb25zdCBhYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuXHRcdFx0bGV0IGVycm9yID0gbmV3IEFib3J0RXJyb3IoJ1RoZSB1c2VyIGFib3J0ZWQgYSByZXF1ZXN0LicpO1xuXHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdGlmIChyZXF1ZXN0LmJvZHkgJiYgcmVxdWVzdC5ib2R5IGluc3RhbmNlb2YgU3RyZWFtLlJlYWRhYmxlKSB7XG5cdFx0XHRcdHJlcXVlc3QuYm9keS5kZXN0cm95KGVycm9yKTtcblx0XHRcdH1cblx0XHRcdGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmJvZHkpIHJldHVybjtcblx0XHRcdHJlc3BvbnNlLmJvZHkuZW1pdCgnZXJyb3InLCBlcnJvcik7XG5cdFx0fTtcblxuXHRcdGlmIChzaWduYWwgJiYgc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdGFib3J0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWJvcnRBbmRGaW5hbGl6ZSA9IGZ1bmN0aW9uIGFib3J0QW5kRmluYWxpemUoKSB7XG5cdFx0XHRhYm9ydCgpO1xuXHRcdFx0ZmluYWxpemUoKTtcblx0XHR9O1xuXG5cdFx0Ly8gc2VuZCByZXF1ZXN0XG5cdFx0Y29uc3QgcmVxID0gc2VuZChvcHRpb25zKTtcblx0XHRsZXQgcmVxVGltZW91dDtcblxuXHRcdGlmIChzaWduYWwpIHtcblx0XHRcdHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGZpbmFsaXplKCkge1xuXHRcdFx0cmVxLmFib3J0KCk7XG5cdFx0XHRpZiAoc2lnbmFsKSBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHRcdGNsZWFyVGltZW91dChyZXFUaW1lb3V0KTtcblx0XHR9XG5cblx0XHRpZiAocmVxdWVzdC50aW1lb3V0KSB7XG5cdFx0XHRyZXEub25jZSgnc29ja2V0JywgZnVuY3Rpb24gKHNvY2tldCkge1xuXHRcdFx0XHRyZXFUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBuZXR3b3JrIHRpbWVvdXQgYXQ6ICR7cmVxdWVzdC51cmx9YCwgJ3JlcXVlc3QtdGltZW91dCcpKTtcblx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHR9LCByZXF1ZXN0LnRpbWVvdXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgcmVxdWVzdCB0byAke3JlcXVlc3QudXJsfSBmYWlsZWQsIHJlYXNvbjogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKSk7XG5cdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmVxLm9uKCdyZXNwb25zZScsIGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdGNsZWFyVGltZW91dChyZXFUaW1lb3V0KTtcblxuXHRcdFx0Y29uc3QgaGVhZGVycyA9IGNyZWF0ZUhlYWRlcnNMZW5pZW50KHJlcy5oZWFkZXJzKTtcblxuXHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDVcblx0XHRcdGlmIChmZXRjaC5pc1JlZGlyZWN0KHJlcy5zdGF0dXNDb2RlKSkge1xuXHRcdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNS4yXG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uID0gaGVhZGVycy5nZXQoJ0xvY2F0aW9uJyk7XG5cblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuM1xuXHRcdFx0XHRjb25zdCBsb2NhdGlvblVSTCA9IGxvY2F0aW9uID09PSBudWxsID8gbnVsbCA6IHJlc29sdmVfdXJsKHJlcXVlc3QudXJsLCBsb2NhdGlvbik7XG5cblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuNVxuXHRcdFx0XHRzd2l0Y2ggKHJlcXVlc3QucmVkaXJlY3QpIHtcblx0XHRcdFx0XHRjYXNlICdlcnJvcic6XG5cdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYHVyaSByZXF1ZXN0ZWQgcmVzcG9uZHMgd2l0aCBhIHJlZGlyZWN0LCByZWRpcmVjdCBtb2RlIGlzIHNldCB0byBlcnJvcjogJHtyZXF1ZXN0LnVybH1gLCAnbm8tcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdGNhc2UgJ21hbnVhbCc6XG5cdFx0XHRcdFx0XHQvLyBub2RlLWZldGNoLXNwZWNpZmljIHN0ZXA6IG1ha2UgbWFudWFsIHJlZGlyZWN0IGEgYml0IGVhc2llciB0byB1c2UgYnkgc2V0dGluZyB0aGUgTG9jYXRpb24gaGVhZGVyIHZhbHVlIHRvIHRoZSByZXNvbHZlZCBVUkwuXG5cdFx0XHRcdFx0XHRpZiAobG9jYXRpb25VUkwgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0Ly8gaGFuZGxlIGNvcnJ1cHRlZCBoZWFkZXJcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRoZWFkZXJzLnNldCgnTG9jYXRpb24nLCBsb2NhdGlvblVSTCk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBub2RlanMgc2VydmVyIHByZXZlbnQgaW52YWxpZCByZXNwb25zZSBoZWFkZXJzLCB3ZSBjYW4ndCB0ZXN0IHRoaXMgdGhyb3VnaCBub3JtYWwgcmVxdWVzdFxuXHRcdFx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdmb2xsb3cnOlxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDJcblx0XHRcdFx0XHRcdGlmIChsb2NhdGlvblVSTCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDVcblx0XHRcdFx0XHRcdGlmIChyZXF1ZXN0LmNvdW50ZXIgPj0gcmVxdWVzdC5mb2xsb3cpIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBtYXhpbXVtIHJlZGlyZWN0IHJlYWNoZWQgYXQ6ICR7cmVxdWVzdC51cmx9YCwgJ21heC1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgNiAoY291bnRlciBpbmNyZW1lbnQpXG5cdFx0XHRcdFx0XHQvLyBDcmVhdGUgYSBuZXcgUmVxdWVzdCBvYmplY3QuXG5cdFx0XHRcdFx0XHRjb25zdCByZXF1ZXN0T3B0cyA9IHtcblx0XHRcdFx0XHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMocmVxdWVzdC5oZWFkZXJzKSxcblx0XHRcdFx0XHRcdFx0Zm9sbG93OiByZXF1ZXN0LmZvbGxvdyxcblx0XHRcdFx0XHRcdFx0Y291bnRlcjogcmVxdWVzdC5jb3VudGVyICsgMSxcblx0XHRcdFx0XHRcdFx0YWdlbnQ6IHJlcXVlc3QuYWdlbnQsXG5cdFx0XHRcdFx0XHRcdGNvbXByZXNzOiByZXF1ZXN0LmNvbXByZXNzLFxuXHRcdFx0XHRcdFx0XHRtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuXHRcdFx0XHRcdFx0XHRib2R5OiByZXF1ZXN0LmJvZHksXG5cdFx0XHRcdFx0XHRcdHNpZ25hbDogcmVxdWVzdC5zaWduYWwsXG5cdFx0XHRcdFx0XHRcdHRpbWVvdXQ6IHJlcXVlc3QudGltZW91dCxcblx0XHRcdFx0XHRcdFx0c2l6ZTogcmVxdWVzdC5zaXplXG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgOVxuXHRcdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlICE9PSAzMDMgJiYgcmVxdWVzdC5ib2R5ICYmIGdldFRvdGFsQnl0ZXMocmVxdWVzdCkgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKCdDYW5ub3QgZm9sbG93IHJlZGlyZWN0IHdpdGggYm9keSBiZWluZyBhIHJlYWRhYmxlIHN0cmVhbScsICd1bnN1cHBvcnRlZC1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMTFcblx0XHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMzAzIHx8IChyZXMuc3RhdHVzQ29kZSA9PT0gMzAxIHx8IHJlcy5zdGF0dXNDb2RlID09PSAzMDIpICYmIHJlcXVlc3QubWV0aG9kID09PSAnUE9TVCcpIHtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdHMubWV0aG9kID0gJ0dFVCc7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRzLmJvZHkgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRzLmhlYWRlcnMuZGVsZXRlKCdjb250ZW50LWxlbmd0aCcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMTVcblx0XHRcdFx0XHRcdHJlc29sdmUoZmV0Y2gobmV3IFJlcXVlc3QobG9jYXRpb25VUkwsIHJlcXVlc3RPcHRzKSkpO1xuXHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBwcmVwYXJlIHJlc3BvbnNlXG5cdFx0XHRyZXMub25jZSgnZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoc2lnbmFsKSBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHRcdH0pO1xuXHRcdFx0bGV0IGJvZHkgPSByZXMucGlwZShuZXcgUGFzc1Rocm91Z2gkMSgpKTtcblxuXHRcdFx0Y29uc3QgcmVzcG9uc2Vfb3B0aW9ucyA9IHtcblx0XHRcdFx0dXJsOiByZXF1ZXN0LnVybCxcblx0XHRcdFx0c3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcblx0XHRcdFx0c3RhdHVzVGV4dDogcmVzLnN0YXR1c01lc3NhZ2UsXG5cdFx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0XHRcdHNpemU6IHJlcXVlc3Quc2l6ZSxcblx0XHRcdFx0dGltZW91dDogcmVxdWVzdC50aW1lb3V0LFxuXHRcdFx0XHRjb3VudGVyOiByZXF1ZXN0LmNvdW50ZXJcblx0XHRcdH07XG5cblx0XHRcdC8vIEhUVFAtbmV0d29yayBmZXRjaCBzdGVwIDEyLjEuMS4zXG5cdFx0XHRjb25zdCBjb2RpbmdzID0gaGVhZGVycy5nZXQoJ0NvbnRlbnQtRW5jb2RpbmcnKTtcblxuXHRcdFx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgMTIuMS4xLjQ6IGhhbmRsZSBjb250ZW50IGNvZGluZ3NcblxuXHRcdFx0Ly8gaW4gZm9sbG93aW5nIHNjZW5hcmlvcyB3ZSBpZ25vcmUgY29tcHJlc3Npb24gc3VwcG9ydFxuXHRcdFx0Ly8gMS4gY29tcHJlc3Npb24gc3VwcG9ydCBpcyBkaXNhYmxlZFxuXHRcdFx0Ly8gMi4gSEVBRCByZXF1ZXN0XG5cdFx0XHQvLyAzLiBubyBDb250ZW50LUVuY29kaW5nIGhlYWRlclxuXHRcdFx0Ly8gNC4gbm8gY29udGVudCByZXNwb25zZSAoMjA0KVxuXHRcdFx0Ly8gNS4gY29udGVudCBub3QgbW9kaWZpZWQgcmVzcG9uc2UgKDMwNClcblx0XHRcdGlmICghcmVxdWVzdC5jb21wcmVzcyB8fCByZXF1ZXN0Lm1ldGhvZCA9PT0gJ0hFQUQnIHx8IGNvZGluZ3MgPT09IG51bGwgfHwgcmVzLnN0YXR1c0NvZGUgPT09IDIwNCB8fCByZXMuc3RhdHVzQ29kZSA9PT0gMzA0KSB7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgTm9kZSB2Nitcblx0XHRcdC8vIEJlIGxlc3Mgc3RyaWN0IHdoZW4gZGVjb2RpbmcgY29tcHJlc3NlZCByZXNwb25zZXMsIHNpbmNlIHNvbWV0aW1lc1xuXHRcdFx0Ly8gc2VydmVycyBzZW5kIHNsaWdodGx5IGludmFsaWQgcmVzcG9uc2VzIHRoYXQgYXJlIHN0aWxsIGFjY2VwdGVkXG5cdFx0XHQvLyBieSBjb21tb24gYnJvd3NlcnMuXG5cdFx0XHQvLyBBbHdheXMgdXNpbmcgWl9TWU5DX0ZMVVNIIGlzIHdoYXQgY1VSTCBkb2VzLlxuXHRcdFx0Y29uc3QgemxpYk9wdGlvbnMgPSB7XG5cdFx0XHRcdGZsdXNoOiB6bGliLlpfU1lOQ19GTFVTSCxcblx0XHRcdFx0ZmluaXNoRmx1c2g6IHpsaWIuWl9TWU5DX0ZMVVNIXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBmb3IgZ3ppcFxuXHRcdFx0aWYgKGNvZGluZ3MgPT0gJ2d6aXAnIHx8IGNvZGluZ3MgPT0gJ3gtZ3ppcCcpIHtcblx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUd1bnppcCh6bGliT3B0aW9ucykpO1xuXHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZm9yIGRlZmxhdGVcblx0XHRcdGlmIChjb2RpbmdzID09ICdkZWZsYXRlJyB8fCBjb2RpbmdzID09ICd4LWRlZmxhdGUnKSB7XG5cdFx0XHRcdC8vIGhhbmRsZSB0aGUgaW5mYW1vdXMgcmF3IGRlZmxhdGUgcmVzcG9uc2UgZnJvbSBvbGQgc2VydmVyc1xuXHRcdFx0XHQvLyBhIGhhY2sgZm9yIG9sZCBJSVMgYW5kIEFwYWNoZSBzZXJ2ZXJzXG5cdFx0XHRcdGNvbnN0IHJhdyA9IHJlcy5waXBlKG5ldyBQYXNzVGhyb3VnaCQxKCkpO1xuXHRcdFx0XHRyYXcub25jZSgnZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuXHRcdFx0XHRcdC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3NTE5ODI4XG5cdFx0XHRcdFx0aWYgKChjaHVua1swXSAmIDB4MEYpID09PSAweDA4KSB7XG5cdFx0XHRcdFx0XHRib2R5ID0gYm9keS5waXBlKHpsaWIuY3JlYXRlSW5mbGF0ZSgpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUluZmxhdGVSYXcoKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBmb3IgYnJcblx0XHRcdGlmIChjb2RpbmdzID09ICdicicgJiYgdHlwZW9mIHpsaWIuY3JlYXRlQnJvdGxpRGVjb21wcmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRib2R5ID0gYm9keS5waXBlKHpsaWIuY3JlYXRlQnJvdGxpRGVjb21wcmVzcygpKTtcblx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIG90aGVyd2lzZSwgdXNlIHJlc3BvbnNlIGFzLWlzXG5cdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdH0pO1xuXG5cdFx0d3JpdGVUb1N0cmVhbShyZXEsIHJlcXVlc3QpO1xuXHR9KTtcbn1cbi8qKlxuICogUmVkaXJlY3QgY29kZSBtYXRjaGluZ1xuICpcbiAqIEBwYXJhbSAgIE51bWJlciAgIGNvZGUgIFN0YXR1cyBjb2RlXG4gKiBAcmV0dXJuICBCb29sZWFuXG4gKi9cbmZldGNoLmlzUmVkaXJlY3QgPSBmdW5jdGlvbiAoY29kZSkge1xuXHRyZXR1cm4gY29kZSA9PT0gMzAxIHx8IGNvZGUgPT09IDMwMiB8fCBjb2RlID09PSAzMDMgfHwgY29kZSA9PT0gMzA3IHx8IGNvZGUgPT09IDMwODtcbn07XG5cbi8vIGV4cG9zZSBQcm9taXNlXG5mZXRjaC5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG5cbi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIGludFRvQ2hhck1hcCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJy5zcGxpdCgnJyk7XG5cbi8qKlxuICogRW5jb2RlIGFuIGludGVnZXIgaW4gdGhlIHJhbmdlIG9mIDAgdG8gNjMgdG8gYSBzaW5nbGUgYmFzZSA2NCBkaWdpdC5cbiAqL1xudmFyIGVuY29kZSA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgaWYgKDAgPD0gbnVtYmVyICYmIG51bWJlciA8IGludFRvQ2hhck1hcC5sZW5ndGgpIHtcbiAgICByZXR1cm4gaW50VG9DaGFyTWFwW251bWJlcl07XG4gIH1cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk11c3QgYmUgYmV0d2VlbiAwIGFuZCA2MzogXCIgKyBudW1iZXIpO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgYSBzaW5nbGUgYmFzZSA2NCBjaGFyYWN0ZXIgY29kZSBkaWdpdCB0byBhbiBpbnRlZ2VyLiBSZXR1cm5zIC0xIG9uXG4gKiBmYWlsdXJlLlxuICovXG52YXIgZGVjb2RlJDEgPSBmdW5jdGlvbiAoY2hhckNvZGUpIHtcbiAgdmFyIGJpZ0EgPSA2NTsgICAgIC8vICdBJ1xuICB2YXIgYmlnWiA9IDkwOyAgICAgLy8gJ1onXG5cbiAgdmFyIGxpdHRsZUEgPSA5NzsgIC8vICdhJ1xuICB2YXIgbGl0dGxlWiA9IDEyMjsgLy8gJ3onXG5cbiAgdmFyIHplcm8gPSA0ODsgICAgIC8vICcwJ1xuICB2YXIgbmluZSA9IDU3OyAgICAgLy8gJzknXG5cbiAgdmFyIHBsdXMgPSA0MzsgICAgIC8vICcrJ1xuICB2YXIgc2xhc2ggPSA0NzsgICAgLy8gJy8nXG5cbiAgdmFyIGxpdHRsZU9mZnNldCA9IDI2O1xuICB2YXIgbnVtYmVyT2Zmc2V0ID0gNTI7XG5cbiAgLy8gMCAtIDI1OiBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlxuICBpZiAoYmlnQSA8PSBjaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBiaWdaKSB7XG4gICAgcmV0dXJuIChjaGFyQ29kZSAtIGJpZ0EpO1xuICB9XG5cbiAgLy8gMjYgLSA1MTogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcbiAgaWYgKGxpdHRsZUEgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbGl0dGxlWikge1xuICAgIHJldHVybiAoY2hhckNvZGUgLSBsaXR0bGVBICsgbGl0dGxlT2Zmc2V0KTtcbiAgfVxuXG4gIC8vIDUyIC0gNjE6IDAxMjM0NTY3ODlcbiAgaWYgKHplcm8gPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbmluZSkge1xuICAgIHJldHVybiAoY2hhckNvZGUgLSB6ZXJvICsgbnVtYmVyT2Zmc2V0KTtcbiAgfVxuXG4gIC8vIDYyOiArXG4gIGlmIChjaGFyQ29kZSA9PSBwbHVzKSB7XG4gICAgcmV0dXJuIDYyO1xuICB9XG5cbiAgLy8gNjM6IC9cbiAgaWYgKGNoYXJDb2RlID09IHNsYXNoKSB7XG4gICAgcmV0dXJuIDYzO1xuICB9XG5cbiAgLy8gSW52YWxpZCBiYXNlNjQgZGlnaXQuXG4gIHJldHVybiAtMTtcbn07XG5cbnZhciBiYXNlNjQgPSB7XG5cdGVuY29kZTogZW5jb2RlLFxuXHRkZWNvZGU6IGRlY29kZSQxXG59O1xuXG4vKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICpcbiAqIEJhc2VkIG9uIHRoZSBCYXNlIDY0IFZMUSBpbXBsZW1lbnRhdGlvbiBpbiBDbG9zdXJlIENvbXBpbGVyOlxuICogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jbG9zdXJlLWNvbXBpbGVyL3NvdXJjZS9icm93c2UvdHJ1bmsvc3JjL2NvbS9nb29nbGUvZGVidWdnaW5nL3NvdXJjZW1hcC9CYXNlNjRWTFEuamF2YVxuICpcbiAqIENvcHlyaWdodCAyMDExIFRoZSBDbG9zdXJlIENvbXBpbGVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbiAqIG1ldDpcbiAqXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICogICAgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiAqICAgIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZFxuICogICAgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogICAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkXG4gKiAgICBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICogT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4gKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gKiBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cblxuXG4vLyBBIHNpbmdsZSBiYXNlIDY0IGRpZ2l0IGNhbiBjb250YWluIDYgYml0cyBvZiBkYXRhLiBGb3IgdGhlIGJhc2UgNjQgdmFyaWFibGVcbi8vIGxlbmd0aCBxdWFudGl0aWVzIHdlIHVzZSBpbiB0aGUgc291cmNlIG1hcCBzcGVjLCB0aGUgZmlyc3QgYml0IGlzIHRoZSBzaWduLFxuLy8gdGhlIG5leHQgZm91ciBiaXRzIGFyZSB0aGUgYWN0dWFsIHZhbHVlLCBhbmQgdGhlIDZ0aCBiaXQgaXMgdGhlXG4vLyBjb250aW51YXRpb24gYml0LiBUaGUgY29udGludWF0aW9uIGJpdCB0ZWxscyB1cyB3aGV0aGVyIHRoZXJlIGFyZSBtb3JlXG4vLyBkaWdpdHMgaW4gdGhpcyB2YWx1ZSBmb2xsb3dpbmcgdGhpcyBkaWdpdC5cbi8vXG4vLyAgIENvbnRpbnVhdGlvblxuLy8gICB8ICAgIFNpZ25cbi8vICAgfCAgICB8XG4vLyAgIFYgICAgVlxuLy8gICAxMDEwMTFcblxudmFyIFZMUV9CQVNFX1NISUZUID0gNTtcblxuLy8gYmluYXJ5OiAxMDAwMDBcbnZhciBWTFFfQkFTRSA9IDEgPDwgVkxRX0JBU0VfU0hJRlQ7XG5cbi8vIGJpbmFyeTogMDExMTExXG52YXIgVkxRX0JBU0VfTUFTSyA9IFZMUV9CQVNFIC0gMTtcblxuLy8gYmluYXJ5OiAxMDAwMDBcbnZhciBWTFFfQ09OVElOVUFUSU9OX0JJVCA9IFZMUV9CQVNFO1xuXG4vKipcbiAqIENvbnZlcnRzIGZyb20gYSB0d28tY29tcGxlbWVudCB2YWx1ZSB0byBhIHZhbHVlIHdoZXJlIHRoZSBzaWduIGJpdCBpc1xuICogcGxhY2VkIGluIHRoZSBsZWFzdCBzaWduaWZpY2FudCBiaXQuICBGb3IgZXhhbXBsZSwgYXMgZGVjaW1hbHM6XG4gKiAgIDEgYmVjb21lcyAyICgxMCBiaW5hcnkpLCAtMSBiZWNvbWVzIDMgKDExIGJpbmFyeSlcbiAqICAgMiBiZWNvbWVzIDQgKDEwMCBiaW5hcnkpLCAtMiBiZWNvbWVzIDUgKDEwMSBiaW5hcnkpXG4gKi9cbmZ1bmN0aW9uIHRvVkxRU2lnbmVkKGFWYWx1ZSkge1xuICByZXR1cm4gYVZhbHVlIDwgMFxuICAgID8gKCgtYVZhbHVlKSA8PCAxKSArIDFcbiAgICA6IChhVmFsdWUgPDwgMSkgKyAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRvIGEgdHdvLWNvbXBsZW1lbnQgdmFsdWUgZnJvbSBhIHZhbHVlIHdoZXJlIHRoZSBzaWduIGJpdCBpc1xuICogcGxhY2VkIGluIHRoZSBsZWFzdCBzaWduaWZpY2FudCBiaXQuICBGb3IgZXhhbXBsZSwgYXMgZGVjaW1hbHM6XG4gKiAgIDIgKDEwIGJpbmFyeSkgYmVjb21lcyAxLCAzICgxMSBiaW5hcnkpIGJlY29tZXMgLTFcbiAqICAgNCAoMTAwIGJpbmFyeSkgYmVjb21lcyAyLCA1ICgxMDEgYmluYXJ5KSBiZWNvbWVzIC0yXG4gKi9cbmZ1bmN0aW9uIGZyb21WTFFTaWduZWQoYVZhbHVlKSB7XG4gIHZhciBpc05lZ2F0aXZlID0gKGFWYWx1ZSAmIDEpID09PSAxO1xuICB2YXIgc2hpZnRlZCA9IGFWYWx1ZSA+PiAxO1xuICByZXR1cm4gaXNOZWdhdGl2ZVxuICAgID8gLXNoaWZ0ZWRcbiAgICA6IHNoaWZ0ZWQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYmFzZSA2NCBWTFEgZW5jb2RlZCB2YWx1ZS5cbiAqL1xudmFyIGVuY29kZSQxID0gZnVuY3Rpb24gYmFzZTY0VkxRX2VuY29kZShhVmFsdWUpIHtcbiAgdmFyIGVuY29kZWQgPSBcIlwiO1xuICB2YXIgZGlnaXQ7XG5cbiAgdmFyIHZscSA9IHRvVkxRU2lnbmVkKGFWYWx1ZSk7XG5cbiAgZG8ge1xuICAgIGRpZ2l0ID0gdmxxICYgVkxRX0JBU0VfTUFTSztcbiAgICB2bHEgPj4+PSBWTFFfQkFTRV9TSElGVDtcbiAgICBpZiAodmxxID4gMCkge1xuICAgICAgLy8gVGhlcmUgYXJlIHN0aWxsIG1vcmUgZGlnaXRzIGluIHRoaXMgdmFsdWUsIHNvIHdlIG11c3QgbWFrZSBzdXJlIHRoZVxuICAgICAgLy8gY29udGludWF0aW9uIGJpdCBpcyBtYXJrZWQuXG4gICAgICBkaWdpdCB8PSBWTFFfQ09OVElOVUFUSU9OX0JJVDtcbiAgICB9XG4gICAgZW5jb2RlZCArPSBiYXNlNjQuZW5jb2RlKGRpZ2l0KTtcbiAgfSB3aGlsZSAodmxxID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59O1xuXG4vKipcbiAqIERlY29kZXMgdGhlIG5leHQgYmFzZSA2NCBWTFEgdmFsdWUgZnJvbSB0aGUgZ2l2ZW4gc3RyaW5nIGFuZCByZXR1cm5zIHRoZVxuICogdmFsdWUgYW5kIHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgdmlhIHRoZSBvdXQgcGFyYW1ldGVyLlxuICovXG52YXIgZGVjb2RlJDIgPSBmdW5jdGlvbiBiYXNlNjRWTFFfZGVjb2RlKGFTdHIsIGFJbmRleCwgYU91dFBhcmFtKSB7XG4gIHZhciBzdHJMZW4gPSBhU3RyLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IDA7XG4gIHZhciBzaGlmdCA9IDA7XG4gIHZhciBjb250aW51YXRpb24sIGRpZ2l0O1xuXG4gIGRvIHtcbiAgICBpZiAoYUluZGV4ID49IHN0ckxlbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgbW9yZSBkaWdpdHMgaW4gYmFzZSA2NCBWTFEgdmFsdWUuXCIpO1xuICAgIH1cblxuICAgIGRpZ2l0ID0gYmFzZTY0LmRlY29kZShhU3RyLmNoYXJDb2RlQXQoYUluZGV4KyspKTtcbiAgICBpZiAoZGlnaXQgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGJhc2U2NCBkaWdpdDogXCIgKyBhU3RyLmNoYXJBdChhSW5kZXggLSAxKSk7XG4gICAgfVxuXG4gICAgY29udGludWF0aW9uID0gISEoZGlnaXQgJiBWTFFfQ09OVElOVUFUSU9OX0JJVCk7XG4gICAgZGlnaXQgJj0gVkxRX0JBU0VfTUFTSztcbiAgICByZXN1bHQgPSByZXN1bHQgKyAoZGlnaXQgPDwgc2hpZnQpO1xuICAgIHNoaWZ0ICs9IFZMUV9CQVNFX1NISUZUO1xuICB9IHdoaWxlIChjb250aW51YXRpb24pO1xuXG4gIGFPdXRQYXJhbS52YWx1ZSA9IGZyb21WTFFTaWduZWQocmVzdWx0KTtcbiAgYU91dFBhcmFtLnJlc3QgPSBhSW5kZXg7XG59O1xuXG52YXIgYmFzZTY0VmxxID0ge1xuXHRlbmNvZGU6IGVuY29kZSQxLFxuXHRkZWNvZGU6IGRlY29kZSQyXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgYmFzZWRpciwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7XG5cdCAgcGF0aDogYmFzZWRpcixcblx0ICBleHBvcnRzOiB7fSxcblx0ICByZXF1aXJlOiBmdW5jdGlvbiAocGF0aCwgYmFzZSkge1xuICAgICAgcmV0dXJuIGNvbW1vbmpzUmVxdWlyZShwYXRoLCAoYmFzZSA9PT0gdW5kZWZpbmVkIHx8IGJhc2UgPT09IG51bGwpID8gbW9kdWxlLnBhdGggOiBiYXNlKTtcbiAgICB9XG5cdH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxuZnVuY3Rpb24gY29tbW9uanNSZXF1aXJlICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdEeW5hbWljIHJlcXVpcmVzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBieSBAcm9sbHVwL3BsdWdpbi1jb21tb25qcycpO1xufVxuXG52YXIgdXRpbCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxuLyoqXG4gKiBUaGlzIGlzIGEgaGVscGVyIGZ1bmN0aW9uIGZvciBnZXR0aW5nIHZhbHVlcyBmcm9tIHBhcmFtZXRlci9vcHRpb25zXG4gKiBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSBhcmdzIFRoZSBvYmplY3Qgd2UgYXJlIGV4dHJhY3RpbmcgdmFsdWVzIGZyb21cbiAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB3ZSBhcmUgZ2V0dGluZy5cbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgQW4gb3B0aW9uYWwgdmFsdWUgdG8gcmV0dXJuIGlmIHRoZSBwcm9wZXJ0eSBpcyBtaXNzaW5nXG4gKiBmcm9tIHRoZSBvYmplY3QuIElmIHRoaXMgaXMgbm90IHNwZWNpZmllZCBhbmQgdGhlIHByb3BlcnR5IGlzIG1pc3NpbmcsIGFuXG4gKiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqL1xuZnVuY3Rpb24gZ2V0QXJnKGFBcmdzLCBhTmFtZSwgYURlZmF1bHRWYWx1ZSkge1xuICBpZiAoYU5hbWUgaW4gYUFyZ3MpIHtcbiAgICByZXR1cm4gYUFyZ3NbYU5hbWVdO1xuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICByZXR1cm4gYURlZmF1bHRWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGFOYW1lICsgJ1wiIGlzIGEgcmVxdWlyZWQgYXJndW1lbnQuJyk7XG4gIH1cbn1cbmV4cG9ydHMuZ2V0QXJnID0gZ2V0QXJnO1xuXG52YXIgdXJsUmVnZXhwID0gL14oPzooW1xcdytcXC0uXSspOik/XFwvXFwvKD86KFxcdys6XFx3KylAKT8oW1xcdy4tXSopKD86OihcXGQrKSk/KC4qKSQvO1xudmFyIGRhdGFVcmxSZWdleHAgPSAvXmRhdGE6LitcXCwuKyQvO1xuXG5mdW5jdGlvbiB1cmxQYXJzZShhVXJsKSB7XG4gIHZhciBtYXRjaCA9IGFVcmwubWF0Y2godXJsUmVnZXhwKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2NoZW1lOiBtYXRjaFsxXSxcbiAgICBhdXRoOiBtYXRjaFsyXSxcbiAgICBob3N0OiBtYXRjaFszXSxcbiAgICBwb3J0OiBtYXRjaFs0XSxcbiAgICBwYXRoOiBtYXRjaFs1XVxuICB9O1xufVxuZXhwb3J0cy51cmxQYXJzZSA9IHVybFBhcnNlO1xuXG5mdW5jdGlvbiB1cmxHZW5lcmF0ZShhUGFyc2VkVXJsKSB7XG4gIHZhciB1cmwgPSAnJztcbiAgaWYgKGFQYXJzZWRVcmwuc2NoZW1lKSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwuc2NoZW1lICsgJzonO1xuICB9XG4gIHVybCArPSAnLy8nO1xuICBpZiAoYVBhcnNlZFVybC5hdXRoKSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwuYXV0aCArICdAJztcbiAgfVxuICBpZiAoYVBhcnNlZFVybC5ob3N0KSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwuaG9zdDtcbiAgfVxuICBpZiAoYVBhcnNlZFVybC5wb3J0KSB7XG4gICAgdXJsICs9IFwiOlwiICsgYVBhcnNlZFVybC5wb3J0O1xuICB9XG4gIGlmIChhUGFyc2VkVXJsLnBhdGgpIHtcbiAgICB1cmwgKz0gYVBhcnNlZFVybC5wYXRoO1xuICB9XG4gIHJldHVybiB1cmw7XG59XG5leHBvcnRzLnVybEdlbmVyYXRlID0gdXJsR2VuZXJhdGU7XG5cbi8qKlxuICogTm9ybWFsaXplcyBhIHBhdGgsIG9yIHRoZSBwYXRoIHBvcnRpb24gb2YgYSBVUkw6XG4gKlxuICogLSBSZXBsYWNlcyBjb25zZWN1dGl2ZSBzbGFzaGVzIHdpdGggb25lIHNsYXNoLlxuICogLSBSZW1vdmVzIHVubmVjZXNzYXJ5ICcuJyBwYXJ0cy5cbiAqIC0gUmVtb3ZlcyB1bm5lY2Vzc2FyeSAnPGRpcj4vLi4nIHBhcnRzLlxuICpcbiAqIEJhc2VkIG9uIGNvZGUgaW4gdGhlIE5vZGUuanMgJ3BhdGgnIGNvcmUgbW9kdWxlLlxuICpcbiAqIEBwYXJhbSBhUGF0aCBUaGUgcGF0aCBvciB1cmwgdG8gbm9ybWFsaXplLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemUoYVBhdGgpIHtcbiAgdmFyIHBhdGggPSBhUGF0aDtcbiAgdmFyIHVybCA9IHVybFBhcnNlKGFQYXRoKTtcbiAgaWYgKHVybCkge1xuICAgIGlmICghdXJsLnBhdGgpIHtcbiAgICAgIHJldHVybiBhUGF0aDtcbiAgICB9XG4gICAgcGF0aCA9IHVybC5wYXRoO1xuICB9XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpO1xuXG4gIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoL1xcLysvKTtcbiAgZm9yICh2YXIgcGFydCwgdXAgPSAwLCBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBwYXJ0ID0gcGFydHNbaV07XG4gICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwID4gMCkge1xuICAgICAgaWYgKHBhcnQgPT09ICcnKSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCBwYXJ0IGlzIGJsYW5rIGlmIHRoZSBwYXRoIGlzIGFic29sdXRlLiBUcnlpbmcgdG8gZ29cbiAgICAgICAgLy8gYWJvdmUgdGhlIHJvb3QgaXMgYSBuby1vcC4gVGhlcmVmb3JlIHdlIGNhbiByZW1vdmUgYWxsICcuLicgcGFydHNcbiAgICAgICAgLy8gZGlyZWN0bHkgYWZ0ZXIgdGhlIHJvb3QuXG4gICAgICAgIHBhcnRzLnNwbGljZShpICsgMSwgdXApO1xuICAgICAgICB1cCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0cy5zcGxpY2UoaSwgMik7XG4gICAgICAgIHVwLS07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBhdGggPSBwYXJ0cy5qb2luKCcvJyk7XG5cbiAgaWYgKHBhdGggPT09ICcnKSB7XG4gICAgcGF0aCA9IGlzQWJzb2x1dGUgPyAnLycgOiAnLic7XG4gIH1cblxuICBpZiAodXJsKSB7XG4gICAgdXJsLnBhdGggPSBwYXRoO1xuICAgIHJldHVybiB1cmxHZW5lcmF0ZSh1cmwpO1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuZXhwb3J0cy5ub3JtYWxpemUgPSBub3JtYWxpemU7XG5cbi8qKlxuICogSm9pbnMgdHdvIHBhdGhzL1VSTHMuXG4gKlxuICogQHBhcmFtIGFSb290IFRoZSByb290IHBhdGggb3IgVVJMLlxuICogQHBhcmFtIGFQYXRoIFRoZSBwYXRoIG9yIFVSTCB0byBiZSBqb2luZWQgd2l0aCB0aGUgcm9vdC5cbiAqXG4gKiAtIElmIGFQYXRoIGlzIGEgVVJMIG9yIGEgZGF0YSBVUkksIGFQYXRoIGlzIHJldHVybmVkLCB1bmxlc3MgYVBhdGggaXMgYVxuICogICBzY2hlbWUtcmVsYXRpdmUgVVJMOiBUaGVuIHRoZSBzY2hlbWUgb2YgYVJvb3QsIGlmIGFueSwgaXMgcHJlcGVuZGVkXG4gKiAgIGZpcnN0LlxuICogLSBPdGhlcndpc2UgYVBhdGggaXMgYSBwYXRoLiBJZiBhUm9vdCBpcyBhIFVSTCwgdGhlbiBpdHMgcGF0aCBwb3J0aW9uXG4gKiAgIGlzIHVwZGF0ZWQgd2l0aCB0aGUgcmVzdWx0IGFuZCBhUm9vdCBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlIHRoZSByZXN1bHRcbiAqICAgaXMgcmV0dXJuZWQuXG4gKiAgIC0gSWYgYVBhdGggaXMgYWJzb2x1dGUsIHRoZSByZXN1bHQgaXMgYVBhdGguXG4gKiAgIC0gT3RoZXJ3aXNlIHRoZSB0d28gcGF0aHMgYXJlIGpvaW5lZCB3aXRoIGEgc2xhc2guXG4gKiAtIEpvaW5pbmcgZm9yIGV4YW1wbGUgJ2h0dHA6Ly8nIGFuZCAnd3d3LmV4YW1wbGUuY29tJyBpcyBhbHNvIHN1cHBvcnRlZC5cbiAqL1xuZnVuY3Rpb24gam9pbihhUm9vdCwgYVBhdGgpIHtcbiAgaWYgKGFSb290ID09PSBcIlwiKSB7XG4gICAgYVJvb3QgPSBcIi5cIjtcbiAgfVxuICBpZiAoYVBhdGggPT09IFwiXCIpIHtcbiAgICBhUGF0aCA9IFwiLlwiO1xuICB9XG4gIHZhciBhUGF0aFVybCA9IHVybFBhcnNlKGFQYXRoKTtcbiAgdmFyIGFSb290VXJsID0gdXJsUGFyc2UoYVJvb3QpO1xuICBpZiAoYVJvb3RVcmwpIHtcbiAgICBhUm9vdCA9IGFSb290VXJsLnBhdGggfHwgJy8nO1xuICB9XG5cbiAgLy8gYGpvaW4oZm9vLCAnLy93d3cuZXhhbXBsZS5vcmcnKWBcbiAgaWYgKGFQYXRoVXJsICYmICFhUGF0aFVybC5zY2hlbWUpIHtcbiAgICBpZiAoYVJvb3RVcmwpIHtcbiAgICAgIGFQYXRoVXJsLnNjaGVtZSA9IGFSb290VXJsLnNjaGVtZTtcbiAgICB9XG4gICAgcmV0dXJuIHVybEdlbmVyYXRlKGFQYXRoVXJsKTtcbiAgfVxuXG4gIGlmIChhUGF0aFVybCB8fCBhUGF0aC5tYXRjaChkYXRhVXJsUmVnZXhwKSkge1xuICAgIHJldHVybiBhUGF0aDtcbiAgfVxuXG4gIC8vIGBqb2luKCdodHRwOi8vJywgJ3d3dy5leGFtcGxlLmNvbScpYFxuICBpZiAoYVJvb3RVcmwgJiYgIWFSb290VXJsLmhvc3QgJiYgIWFSb290VXJsLnBhdGgpIHtcbiAgICBhUm9vdFVybC5ob3N0ID0gYVBhdGg7XG4gICAgcmV0dXJuIHVybEdlbmVyYXRlKGFSb290VXJsKTtcbiAgfVxuXG4gIHZhciBqb2luZWQgPSBhUGF0aC5jaGFyQXQoMCkgPT09ICcvJ1xuICAgID8gYVBhdGhcbiAgICA6IG5vcm1hbGl6ZShhUm9vdC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIGFQYXRoKTtcblxuICBpZiAoYVJvb3RVcmwpIHtcbiAgICBhUm9vdFVybC5wYXRoID0gam9pbmVkO1xuICAgIHJldHVybiB1cmxHZW5lcmF0ZShhUm9vdFVybCk7XG4gIH1cbiAgcmV0dXJuIGpvaW5lZDtcbn1cbmV4cG9ydHMuam9pbiA9IGpvaW47XG5cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uIChhUGF0aCkge1xuICByZXR1cm4gYVBhdGguY2hhckF0KDApID09PSAnLycgfHwgdXJsUmVnZXhwLnRlc3QoYVBhdGgpO1xufTtcblxuLyoqXG4gKiBNYWtlIGEgcGF0aCByZWxhdGl2ZSB0byBhIFVSTCBvciBhbm90aGVyIHBhdGguXG4gKlxuICogQHBhcmFtIGFSb290IFRoZSByb290IHBhdGggb3IgVVJMLlxuICogQHBhcmFtIGFQYXRoIFRoZSBwYXRoIG9yIFVSTCB0byBiZSBtYWRlIHJlbGF0aXZlIHRvIGFSb290LlxuICovXG5mdW5jdGlvbiByZWxhdGl2ZShhUm9vdCwgYVBhdGgpIHtcbiAgaWYgKGFSb290ID09PSBcIlwiKSB7XG4gICAgYVJvb3QgPSBcIi5cIjtcbiAgfVxuXG4gIGFSb290ID0gYVJvb3QucmVwbGFjZSgvXFwvJC8sICcnKTtcblxuICAvLyBJdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHBhdGggdG8gYmUgYWJvdmUgdGhlIHJvb3QuIEluIHRoaXMgY2FzZSwgc2ltcGx5XG4gIC8vIGNoZWNraW5nIHdoZXRoZXIgdGhlIHJvb3QgaXMgYSBwcmVmaXggb2YgdGhlIHBhdGggd29uJ3Qgd29yay4gSW5zdGVhZCwgd2VcbiAgLy8gbmVlZCB0byByZW1vdmUgY29tcG9uZW50cyBmcm9tIHRoZSByb290IG9uZSBieSBvbmUsIHVudGlsIGVpdGhlciB3ZSBmaW5kXG4gIC8vIGEgcHJlZml4IHRoYXQgZml0cywgb3Igd2UgcnVuIG91dCBvZiBjb21wb25lbnRzIHRvIHJlbW92ZS5cbiAgdmFyIGxldmVsID0gMDtcbiAgd2hpbGUgKGFQYXRoLmluZGV4T2YoYVJvb3QgKyAnLycpICE9PSAwKSB7XG4gICAgdmFyIGluZGV4ID0gYVJvb3QubGFzdEluZGV4T2YoXCIvXCIpO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHJldHVybiBhUGF0aDtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgb25seSBwYXJ0IG9mIHRoZSByb290IHRoYXQgaXMgbGVmdCBpcyB0aGUgc2NoZW1lIChpLmUuIGh0dHA6Ly8sXG4gICAgLy8gZmlsZTovLy8sIGV0Yy4pLCBvbmUgb3IgbW9yZSBzbGFzaGVzICgvKSwgb3Igc2ltcGx5IG5vdGhpbmcgYXQgYWxsLCB3ZVxuICAgIC8vIGhhdmUgZXhoYXVzdGVkIGFsbCBjb21wb25lbnRzLCBzbyB0aGUgcGF0aCBpcyBub3QgcmVsYXRpdmUgdG8gdGhlIHJvb3QuXG4gICAgYVJvb3QgPSBhUm9vdC5zbGljZSgwLCBpbmRleCk7XG4gICAgaWYgKGFSb290Lm1hdGNoKC9eKFteXFwvXSs6XFwvKT9cXC8qJC8pKSB7XG4gICAgICByZXR1cm4gYVBhdGg7XG4gICAgfVxuXG4gICAgKytsZXZlbDtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB3ZSBhZGQgYSBcIi4uL1wiIGZvciBlYWNoIGNvbXBvbmVudCB3ZSByZW1vdmVkIGZyb20gdGhlIHJvb3QuXG4gIHJldHVybiBBcnJheShsZXZlbCArIDEpLmpvaW4oXCIuLi9cIikgKyBhUGF0aC5zdWJzdHIoYVJvb3QubGVuZ3RoICsgMSk7XG59XG5leHBvcnRzLnJlbGF0aXZlID0gcmVsYXRpdmU7XG5cbnZhciBzdXBwb3J0c051bGxQcm90byA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gISgnX19wcm90b19fJyBpbiBvYmopO1xufSgpKTtcblxuZnVuY3Rpb24gaWRlbnRpdHkgKHMpIHtcbiAgcmV0dXJuIHM7XG59XG5cbi8qKlxuICogQmVjYXVzZSBiZWhhdmlvciBnb2VzIHdhY2t5IHdoZW4geW91IHNldCBgX19wcm90b19fYCBvbiBvYmplY3RzLCB3ZVxuICogaGF2ZSB0byBwcmVmaXggYWxsIHRoZSBzdHJpbmdzIGluIG91ciBzZXQgd2l0aCBhbiBhcmJpdHJhcnkgY2hhcmFjdGVyLlxuICpcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9zb3VyY2UtbWFwL3B1bGwvMzEgYW5kXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9zb3VyY2UtbWFwL2lzc3Vlcy8zMFxuICpcbiAqIEBwYXJhbSBTdHJpbmcgYVN0clxuICovXG5mdW5jdGlvbiB0b1NldFN0cmluZyhhU3RyKSB7XG4gIGlmIChpc1Byb3RvU3RyaW5nKGFTdHIpKSB7XG4gICAgcmV0dXJuICckJyArIGFTdHI7XG4gIH1cblxuICByZXR1cm4gYVN0cjtcbn1cbmV4cG9ydHMudG9TZXRTdHJpbmcgPSBzdXBwb3J0c051bGxQcm90byA/IGlkZW50aXR5IDogdG9TZXRTdHJpbmc7XG5cbmZ1bmN0aW9uIGZyb21TZXRTdHJpbmcoYVN0cikge1xuICBpZiAoaXNQcm90b1N0cmluZyhhU3RyKSkge1xuICAgIHJldHVybiBhU3RyLnNsaWNlKDEpO1xuICB9XG5cbiAgcmV0dXJuIGFTdHI7XG59XG5leHBvcnRzLmZyb21TZXRTdHJpbmcgPSBzdXBwb3J0c051bGxQcm90byA/IGlkZW50aXR5IDogZnJvbVNldFN0cmluZztcblxuZnVuY3Rpb24gaXNQcm90b1N0cmluZyhzKSB7XG4gIGlmICghcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBzLmxlbmd0aDtcblxuICBpZiAobGVuZ3RoIDwgOSAvKiBcIl9fcHJvdG9fX1wiLmxlbmd0aCAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzLmNoYXJDb2RlQXQobGVuZ3RoIC0gMSkgIT09IDk1ICAvKiAnXycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSAyKSAhPT0gOTUgIC8qICdfJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDMpICE9PSAxMTEgLyogJ28nICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gNCkgIT09IDExNiAvKiAndCcgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA1KSAhPT0gMTExIC8qICdvJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDYpICE9PSAxMTQgLyogJ3InICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gNykgIT09IDExMiAvKiAncCcgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA4KSAhPT0gOTUgIC8qICdfJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDkpICE9PSA5NSAgLyogJ18nICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IGxlbmd0aCAtIDEwOyBpID49IDA7IGktLSkge1xuICAgIGlmIChzLmNoYXJDb2RlQXQoaSkgIT09IDM2IC8qICckJyAqLykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIENvbXBhcmF0b3IgYmV0d2VlbiB0d28gbWFwcGluZ3Mgd2hlcmUgdGhlIG9yaWdpbmFsIHBvc2l0aW9ucyBhcmUgY29tcGFyZWQuXG4gKlxuICogT3B0aW9uYWxseSBwYXNzIGluIGB0cnVlYCBhcyBgb25seUNvbXBhcmVHZW5lcmF0ZWRgIHRvIGNvbnNpZGVyIHR3b1xuICogbWFwcGluZ3Mgd2l0aCB0aGUgc2FtZSBvcmlnaW5hbCBzb3VyY2UvbGluZS9jb2x1bW4sIGJ1dCBkaWZmZXJlbnQgZ2VuZXJhdGVkXG4gKiBsaW5lIGFuZCBjb2x1bW4gdGhlIHNhbWUuIFVzZWZ1bCB3aGVuIHNlYXJjaGluZyBmb3IgYSBtYXBwaW5nIHdpdGggYVxuICogc3R1YmJlZCBvdXQgbWFwcGluZy5cbiAqL1xuZnVuY3Rpb24gY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMobWFwcGluZ0EsIG1hcHBpbmdCLCBvbmx5Q29tcGFyZU9yaWdpbmFsKSB7XG4gIHZhciBjbXAgPSBzdHJjbXAobWFwcGluZ0Euc291cmNlLCBtYXBwaW5nQi5zb3VyY2UpO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsTGluZSAtIG1hcHBpbmdCLm9yaWdpbmFsTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbENvbHVtbiAtIG1hcHBpbmdCLm9yaWdpbmFsQ29sdW1uO1xuICBpZiAoY21wICE9PSAwIHx8IG9ubHlDb21wYXJlT3JpZ2luYWwpIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkQ29sdW1uIC0gbWFwcGluZ0IuZ2VuZXJhdGVkQ29sdW1uO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmUgLSBtYXBwaW5nQi5nZW5lcmF0ZWRMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIHJldHVybiBzdHJjbXAobWFwcGluZ0EubmFtZSwgbWFwcGluZ0IubmFtZSk7XG59XG5leHBvcnRzLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zID0gY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnM7XG5cbi8qKlxuICogQ29tcGFyYXRvciBiZXR3ZWVuIHR3byBtYXBwaW5ncyB3aXRoIGRlZmxhdGVkIHNvdXJjZSBhbmQgbmFtZSBpbmRpY2VzIHdoZXJlXG4gKiB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9ucyBhcmUgY29tcGFyZWQuXG4gKlxuICogT3B0aW9uYWxseSBwYXNzIGluIGB0cnVlYCBhcyBgb25seUNvbXBhcmVHZW5lcmF0ZWRgIHRvIGNvbnNpZGVyIHR3b1xuICogbWFwcGluZ3Mgd2l0aCB0aGUgc2FtZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uLCBidXQgZGlmZmVyZW50XG4gKiBzb3VyY2UvbmFtZS9vcmlnaW5hbCBsaW5lIGFuZCBjb2x1bW4gdGhlIHNhbWUuIFVzZWZ1bCB3aGVuIHNlYXJjaGluZyBmb3IgYVxuICogbWFwcGluZyB3aXRoIGEgc3R1YmJlZCBvdXQgbWFwcGluZy5cbiAqL1xuZnVuY3Rpb24gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQobWFwcGluZ0EsIG1hcHBpbmdCLCBvbmx5Q29tcGFyZUdlbmVyYXRlZCkge1xuICB2YXIgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZSAtIG1hcHBpbmdCLmdlbmVyYXRlZExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkQ29sdW1uIC0gbWFwcGluZ0IuZ2VuZXJhdGVkQ29sdW1uO1xuICBpZiAoY21wICE9PSAwIHx8IG9ubHlDb21wYXJlR2VuZXJhdGVkKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IHN0cmNtcChtYXBwaW5nQS5zb3VyY2UsIG1hcHBpbmdCLnNvdXJjZSk7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxMaW5lIC0gbWFwcGluZ0Iub3JpZ2luYWxMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsQ29sdW1uIC0gbWFwcGluZ0Iub3JpZ2luYWxDb2x1bW47XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgcmV0dXJuIHN0cmNtcChtYXBwaW5nQS5uYW1lLCBtYXBwaW5nQi5uYW1lKTtcbn1cbmV4cG9ydHMuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQgPSBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZDtcblxuZnVuY3Rpb24gc3RyY21wKGFTdHIxLCBhU3RyMikge1xuICBpZiAoYVN0cjEgPT09IGFTdHIyKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAoYVN0cjEgPT09IG51bGwpIHtcbiAgICByZXR1cm4gMTsgLy8gYVN0cjIgIT09IG51bGxcbiAgfVxuXG4gIGlmIChhU3RyMiA9PT0gbnVsbCkge1xuICAgIHJldHVybiAtMTsgLy8gYVN0cjEgIT09IG51bGxcbiAgfVxuXG4gIGlmIChhU3RyMSA+IGFTdHIyKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogQ29tcGFyYXRvciBiZXR3ZWVuIHR3byBtYXBwaW5ncyB3aXRoIGluZmxhdGVkIHNvdXJjZSBhbmQgbmFtZSBzdHJpbmdzIHdoZXJlXG4gKiB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9ucyBhcmUgY29tcGFyZWQuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkKG1hcHBpbmdBLCBtYXBwaW5nQikge1xuICB2YXIgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZSAtIG1hcHBpbmdCLmdlbmVyYXRlZExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkQ29sdW1uIC0gbWFwcGluZ0IuZ2VuZXJhdGVkQ29sdW1uO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IHN0cmNtcChtYXBwaW5nQS5zb3VyY2UsIG1hcHBpbmdCLnNvdXJjZSk7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxMaW5lIC0gbWFwcGluZ0Iub3JpZ2luYWxMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsQ29sdW1uIC0gbWFwcGluZ0Iub3JpZ2luYWxDb2x1bW47XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgcmV0dXJuIHN0cmNtcChtYXBwaW5nQS5uYW1lLCBtYXBwaW5nQi5uYW1lKTtcbn1cbmV4cG9ydHMuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQgPSBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZDtcblxuLyoqXG4gKiBTdHJpcCBhbnkgSlNPTiBYU1NJIGF2b2lkYW5jZSBwcmVmaXggZnJvbSB0aGUgc3RyaW5nIChhcyBkb2N1bWVudGVkXG4gKiBpbiB0aGUgc291cmNlIG1hcHMgc3BlY2lmaWNhdGlvbiksIGFuZCB0aGVuIHBhcnNlIHRoZSBzdHJpbmcgYXNcbiAqIEpTT04uXG4gKi9cbmZ1bmN0aW9uIHBhcnNlU291cmNlTWFwSW5wdXQoc3RyKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKHN0ci5yZXBsYWNlKC9eXFwpXX0nW15cXG5dKlxcbi8sICcnKSk7XG59XG5leHBvcnRzLnBhcnNlU291cmNlTWFwSW5wdXQgPSBwYXJzZVNvdXJjZU1hcElucHV0O1xuXG4vKipcbiAqIENvbXB1dGUgdGhlIFVSTCBvZiBhIHNvdXJjZSBnaXZlbiB0aGUgdGhlIHNvdXJjZSByb290LCB0aGUgc291cmNlJ3NcbiAqIFVSTCwgYW5kIHRoZSBzb3VyY2UgbWFwJ3MgVVJMLlxuICovXG5mdW5jdGlvbiBjb21wdXRlU291cmNlVVJMKHNvdXJjZVJvb3QsIHNvdXJjZVVSTCwgc291cmNlTWFwVVJMKSB7XG4gIHNvdXJjZVVSTCA9IHNvdXJjZVVSTCB8fCAnJztcblxuICBpZiAoc291cmNlUm9vdCkge1xuICAgIC8vIFRoaXMgZm9sbG93cyB3aGF0IENocm9tZSBkb2VzLlxuICAgIGlmIChzb3VyY2VSb290W3NvdXJjZVJvb3QubGVuZ3RoIC0gMV0gIT09ICcvJyAmJiBzb3VyY2VVUkxbMF0gIT09ICcvJykge1xuICAgICAgc291cmNlUm9vdCArPSAnLyc7XG4gICAgfVxuICAgIC8vIFRoZSBzcGVjIHNheXM6XG4gICAgLy8gICBMaW5lIDQ6IEFuIG9wdGlvbmFsIHNvdXJjZSByb290LCB1c2VmdWwgZm9yIHJlbG9jYXRpbmcgc291cmNlXG4gICAgLy8gICBmaWxlcyBvbiBhIHNlcnZlciBvciByZW1vdmluZyByZXBlYXRlZCB2YWx1ZXMgaW4gdGhlXG4gICAgLy8gICDigJxzb3VyY2Vz4oCdIGVudHJ5LiAgVGhpcyB2YWx1ZSBpcyBwcmVwZW5kZWQgdG8gdGhlIGluZGl2aWR1YWxcbiAgICAvLyAgIGVudHJpZXMgaW4gdGhlIOKAnHNvdXJjZeKAnSBmaWVsZC5cbiAgICBzb3VyY2VVUkwgPSBzb3VyY2VSb290ICsgc291cmNlVVJMO1xuICB9XG5cbiAgLy8gSGlzdG9yaWNhbGx5LCBTb3VyY2VNYXBDb25zdW1lciBkaWQgbm90IHRha2UgdGhlIHNvdXJjZU1hcFVSTCBhc1xuICAvLyBhIHBhcmFtZXRlci4gIFRoaXMgbW9kZSBpcyBzdGlsbCBzb21ld2hhdCBzdXBwb3J0ZWQsIHdoaWNoIGlzIHdoeVxuICAvLyB0aGlzIGNvZGUgYmxvY2sgaXMgY29uZGl0aW9uYWwuICBIb3dldmVyLCBpdCdzIHByZWZlcmFibGUgdG8gcGFzc1xuICAvLyB0aGUgc291cmNlIG1hcCBVUkwgdG8gU291cmNlTWFwQ29uc3VtZXIsIHNvIHRoYXQgdGhpcyBmdW5jdGlvblxuICAvLyBjYW4gaW1wbGVtZW50IHRoZSBzb3VyY2UgVVJMIHJlc29sdXRpb24gYWxnb3JpdGhtIGFzIG91dGxpbmVkIGluXG4gIC8vIHRoZSBzcGVjLiAgVGhpcyBibG9jayBpcyBiYXNpY2FsbHkgdGhlIGVxdWl2YWxlbnQgb2Y6XG4gIC8vICAgIG5ldyBVUkwoc291cmNlVVJMLCBzb3VyY2VNYXBVUkwpLnRvU3RyaW5nKClcbiAgLy8gLi4uIGV4Y2VwdCBpdCBhdm9pZHMgdXNpbmcgVVJMLCB3aGljaCB3YXNuJ3QgYXZhaWxhYmxlIGluIHRoZVxuICAvLyBvbGRlciByZWxlYXNlcyBvZiBub2RlIHN0aWxsIHN1cHBvcnRlZCBieSB0aGlzIGxpYnJhcnkuXG4gIC8vXG4gIC8vIFRoZSBzcGVjIHNheXM6XG4gIC8vICAgSWYgdGhlIHNvdXJjZXMgYXJlIG5vdCBhYnNvbHV0ZSBVUkxzIGFmdGVyIHByZXBlbmRpbmcgb2YgdGhlXG4gIC8vICAg4oCcc291cmNlUm9vdOKAnSwgdGhlIHNvdXJjZXMgYXJlIHJlc29sdmVkIHJlbGF0aXZlIHRvIHRoZVxuICAvLyAgIFNvdXJjZU1hcCAobGlrZSByZXNvbHZpbmcgc2NyaXB0IHNyYyBpbiBhIGh0bWwgZG9jdW1lbnQpLlxuICBpZiAoc291cmNlTWFwVVJMKSB7XG4gICAgdmFyIHBhcnNlZCA9IHVybFBhcnNlKHNvdXJjZU1hcFVSTCk7XG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNvdXJjZU1hcFVSTCBjb3VsZCBub3QgYmUgcGFyc2VkXCIpO1xuICAgIH1cbiAgICBpZiAocGFyc2VkLnBhdGgpIHtcbiAgICAgIC8vIFN0cmlwIHRoZSBsYXN0IHBhdGggY29tcG9uZW50LCBidXQga2VlcCB0aGUgXCIvXCIuXG4gICAgICB2YXIgaW5kZXggPSBwYXJzZWQucGF0aC5sYXN0SW5kZXhPZignLycpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgcGFyc2VkLnBhdGggPSBwYXJzZWQucGF0aC5zdWJzdHJpbmcoMCwgaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlVVJMID0gam9pbih1cmxHZW5lcmF0ZShwYXJzZWQpLCBzb3VyY2VVUkwpO1xuICB9XG5cbiAgcmV0dXJuIG5vcm1hbGl6ZShzb3VyY2VVUkwpO1xufVxuZXhwb3J0cy5jb21wdXRlU291cmNlVVJMID0gY29tcHV0ZVNvdXJjZVVSTDtcbn0pO1xuXG4vKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaGFzTmF0aXZlTWFwID0gdHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIjtcblxuLyoqXG4gKiBBIGRhdGEgc3RydWN0dXJlIHdoaWNoIGlzIGEgY29tYmluYXRpb24gb2YgYW4gYXJyYXkgYW5kIGEgc2V0LiBBZGRpbmcgYSBuZXdcbiAqIG1lbWJlciBpcyBPKDEpLCB0ZXN0aW5nIGZvciBtZW1iZXJzaGlwIGlzIE8oMSksIGFuZCBmaW5kaW5nIHRoZSBpbmRleCBvZiBhblxuICogZWxlbWVudCBpcyBPKDEpLiBSZW1vdmluZyBlbGVtZW50cyBmcm9tIHRoZSBzZXQgaXMgbm90IHN1cHBvcnRlZC4gT25seVxuICogc3RyaW5ncyBhcmUgc3VwcG9ydGVkIGZvciBtZW1iZXJzaGlwLlxuICovXG5mdW5jdGlvbiBBcnJheVNldCgpIHtcbiAgdGhpcy5fYXJyYXkgPSBbXTtcbiAgdGhpcy5fc2V0ID0gaGFzTmF0aXZlTWFwID8gbmV3IE1hcCgpIDogT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuLyoqXG4gKiBTdGF0aWMgbWV0aG9kIGZvciBjcmVhdGluZyBBcnJheVNldCBpbnN0YW5jZXMgZnJvbSBhbiBleGlzdGluZyBhcnJheS5cbiAqL1xuQXJyYXlTZXQuZnJvbUFycmF5ID0gZnVuY3Rpb24gQXJyYXlTZXRfZnJvbUFycmF5KGFBcnJheSwgYUFsbG93RHVwbGljYXRlcykge1xuICB2YXIgc2V0ID0gbmV3IEFycmF5U2V0KCk7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhQXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBzZXQuYWRkKGFBcnJheVtpXSwgYUFsbG93RHVwbGljYXRlcyk7XG4gIH1cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8qKlxuICogUmV0dXJuIGhvdyBtYW55IHVuaXF1ZSBpdGVtcyBhcmUgaW4gdGhpcyBBcnJheVNldC4gSWYgZHVwbGljYXRlcyBoYXZlIGJlZW5cbiAqIGFkZGVkLCB0aGFuIHRob3NlIGRvIG5vdCBjb3VudCB0b3dhcmRzIHRoZSBzaXplLlxuICpcbiAqIEByZXR1cm5zIE51bWJlclxuICovXG5BcnJheVNldC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uIEFycmF5U2V0X3NpemUoKSB7XG4gIHJldHVybiBoYXNOYXRpdmVNYXAgPyB0aGlzLl9zZXQuc2l6ZSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuX3NldCkubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIGdpdmVuIHN0cmluZyB0byB0aGlzIHNldC5cbiAqXG4gKiBAcGFyYW0gU3RyaW5nIGFTdHJcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIEFycmF5U2V0X2FkZChhU3RyLCBhQWxsb3dEdXBsaWNhdGVzKSB7XG4gIHZhciBzU3RyID0gaGFzTmF0aXZlTWFwID8gYVN0ciA6IHV0aWwudG9TZXRTdHJpbmcoYVN0cik7XG4gIHZhciBpc0R1cGxpY2F0ZSA9IGhhc05hdGl2ZU1hcCA/IHRoaXMuaGFzKGFTdHIpIDogaGFzLmNhbGwodGhpcy5fc2V0LCBzU3RyKTtcbiAgdmFyIGlkeCA9IHRoaXMuX2FycmF5Lmxlbmd0aDtcbiAgaWYgKCFpc0R1cGxpY2F0ZSB8fCBhQWxsb3dEdXBsaWNhdGVzKSB7XG4gICAgdGhpcy5fYXJyYXkucHVzaChhU3RyKTtcbiAgfVxuICBpZiAoIWlzRHVwbGljYXRlKSB7XG4gICAgaWYgKGhhc05hdGl2ZU1hcCkge1xuICAgICAgdGhpcy5fc2V0LnNldChhU3RyLCBpZHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRbc1N0cl0gPSBpZHg7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIElzIHRoZSBnaXZlbiBzdHJpbmcgYSBtZW1iZXIgb2YgdGhpcyBzZXQ/XG4gKlxuICogQHBhcmFtIFN0cmluZyBhU3RyXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBBcnJheVNldF9oYXMoYVN0cikge1xuICBpZiAoaGFzTmF0aXZlTWFwKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldC5oYXMoYVN0cik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNTdHIgPSB1dGlsLnRvU2V0U3RyaW5nKGFTdHIpO1xuICAgIHJldHVybiBoYXMuY2FsbCh0aGlzLl9zZXQsIHNTdHIpO1xuICB9XG59O1xuXG4vKipcbiAqIFdoYXQgaXMgdGhlIGluZGV4IG9mIHRoZSBnaXZlbiBzdHJpbmcgaW4gdGhlIGFycmF5P1xuICpcbiAqIEBwYXJhbSBTdHJpbmcgYVN0clxuICovXG5BcnJheVNldC5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIEFycmF5U2V0X2luZGV4T2YoYVN0cikge1xuICBpZiAoaGFzTmF0aXZlTWFwKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMuX3NldC5nZXQoYVN0cik7XG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBzU3RyID0gdXRpbC50b1NldFN0cmluZyhhU3RyKTtcbiAgICBpZiAoaGFzLmNhbGwodGhpcy5fc2V0LCBzU3RyKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NldFtzU3RyXTtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGFTdHIgKyAnXCIgaXMgbm90IGluIHRoZSBzZXQuJyk7XG59O1xuXG4vKipcbiAqIFdoYXQgaXMgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4P1xuICpcbiAqIEBwYXJhbSBOdW1iZXIgYUlkeFxuICovXG5BcnJheVNldC5wcm90b3R5cGUuYXQgPSBmdW5jdGlvbiBBcnJheVNldF9hdChhSWR4KSB7XG4gIGlmIChhSWR4ID49IDAgJiYgYUlkeCA8IHRoaXMuX2FycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybiB0aGlzLl9hcnJheVthSWR4XTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgaW5kZXhlZCBieSAnICsgYUlkeCk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgc2V0ICh3aGljaCBoYXMgdGhlIHByb3BlciBpbmRpY2VzXG4gKiBpbmRpY2F0ZWQgYnkgaW5kZXhPZikuIE5vdGUgdGhhdCB0aGlzIGlzIGEgY29weSBvZiB0aGUgaW50ZXJuYWwgYXJyYXkgdXNlZFxuICogZm9yIHN0b3JpbmcgdGhlIG1lbWJlcnMgc28gdGhhdCBubyBvbmUgY2FuIG1lc3Mgd2l0aCBpbnRlcm5hbCBzdGF0ZS5cbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiBBcnJheVNldF90b0FycmF5KCkge1xuICByZXR1cm4gdGhpcy5fYXJyYXkuc2xpY2UoKTtcbn07XG5cbnZhciBBcnJheVNldF8xID0gQXJyYXlTZXQ7XG5cbnZhciBhcnJheVNldCA9IHtcblx0QXJyYXlTZXQ6IEFycmF5U2V0XzFcbn07XG5cbnZhciBiaW5hcnlTZWFyY2ggPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4vKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbmV4cG9ydHMuR1JFQVRFU1RfTE9XRVJfQk9VTkQgPSAxO1xuZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCA9IDI7XG5cbi8qKlxuICogUmVjdXJzaXZlIGltcGxlbWVudGF0aW9uIG9mIGJpbmFyeSBzZWFyY2guXG4gKlxuICogQHBhcmFtIGFMb3cgSW5kaWNlcyBoZXJlIGFuZCBsb3dlciBkbyBub3QgY29udGFpbiB0aGUgbmVlZGxlLlxuICogQHBhcmFtIGFIaWdoIEluZGljZXMgaGVyZSBhbmQgaGlnaGVyIGRvIG5vdCBjb250YWluIHRoZSBuZWVkbGUuXG4gKiBAcGFyYW0gYU5lZWRsZSBUaGUgZWxlbWVudCBiZWluZyBzZWFyY2hlZCBmb3IuXG4gKiBAcGFyYW0gYUhheXN0YWNrIFRoZSBub24tZW1wdHkgYXJyYXkgYmVpbmcgc2VhcmNoZWQuXG4gKiBAcGFyYW0gYUNvbXBhcmUgRnVuY3Rpb24gd2hpY2ggdGFrZXMgdHdvIGVsZW1lbnRzIGFuZCByZXR1cm5zIC0xLCAwLCBvciAxLlxuICogQHBhcmFtIGFCaWFzIEVpdGhlciAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuICogICAgICdiaW5hcnlTZWFyY2guTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG4gKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuICovXG5mdW5jdGlvbiByZWN1cnNpdmVTZWFyY2goYUxvdywgYUhpZ2gsIGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gdGVybWluYXRlcyB3aGVuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGlzIHRydWU6XG4gIC8vXG4gIC8vICAgMS4gV2UgZmluZCB0aGUgZXhhY3QgZWxlbWVudCB3ZSBhcmUgbG9va2luZyBmb3IuXG4gIC8vXG4gIC8vICAgMi4gV2UgZGlkIG5vdCBmaW5kIHRoZSBleGFjdCBlbGVtZW50LCBidXQgd2UgY2FuIHJldHVybiB0aGUgaW5kZXggb2ZcbiAgLy8gICAgICB0aGUgbmV4dC1jbG9zZXN0IGVsZW1lbnQuXG4gIC8vXG4gIC8vICAgMy4gV2UgZGlkIG5vdCBmaW5kIHRoZSBleGFjdCBlbGVtZW50LCBhbmQgdGhlcmUgaXMgbm8gbmV4dC1jbG9zZXN0XG4gIC8vICAgICAgZWxlbWVudCB0aGFuIHRoZSBvbmUgd2UgYXJlIHNlYXJjaGluZyBmb3IsIHNvIHdlIHJldHVybiAtMS5cbiAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGFIaWdoIC0gYUxvdykgLyAyKSArIGFMb3c7XG4gIHZhciBjbXAgPSBhQ29tcGFyZShhTmVlZGxlLCBhSGF5c3RhY2tbbWlkXSwgdHJ1ZSk7XG4gIGlmIChjbXAgPT09IDApIHtcbiAgICAvLyBGb3VuZCB0aGUgZWxlbWVudCB3ZSBhcmUgbG9va2luZyBmb3IuXG4gICAgcmV0dXJuIG1pZDtcbiAgfVxuICBlbHNlIGlmIChjbXAgPiAwKSB7XG4gICAgLy8gT3VyIG5lZWRsZSBpcyBncmVhdGVyIHRoYW4gYUhheXN0YWNrW21pZF0uXG4gICAgaWYgKGFIaWdoIC0gbWlkID4gMSkge1xuICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgaW4gdGhlIHVwcGVyIGhhbGYuXG4gICAgICByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKG1pZCwgYUhpZ2gsIGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZXhhY3QgbmVlZGxlIGVsZW1lbnQgd2FzIG5vdCBmb3VuZCBpbiB0aGlzIGhheXN0YWNrLiBEZXRlcm1pbmUgaWZcbiAgICAvLyB3ZSBhcmUgaW4gdGVybWluYXRpb24gY2FzZSAoMykgb3IgKDIpIGFuZCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIHRoaW5nLlxuICAgIGlmIChhQmlhcyA9PSBleHBvcnRzLkxFQVNUX1VQUEVSX0JPVU5EKSB7XG4gICAgICByZXR1cm4gYUhpZ2ggPCBhSGF5c3RhY2subGVuZ3RoID8gYUhpZ2ggOiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gT3VyIG5lZWRsZSBpcyBsZXNzIHRoYW4gYUhheXN0YWNrW21pZF0uXG4gICAgaWYgKG1pZCAtIGFMb3cgPiAxKSB7XG4gICAgICAvLyBUaGUgZWxlbWVudCBpcyBpbiB0aGUgbG93ZXIgaGFsZi5cbiAgICAgIHJldHVybiByZWN1cnNpdmVTZWFyY2goYUxvdywgbWlkLCBhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcyk7XG4gICAgfVxuXG4gICAgLy8gd2UgYXJlIGluIHRlcm1pbmF0aW9uIGNhc2UgKDMpIG9yICgyKSBhbmQgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB0aGluZy5cbiAgICBpZiAoYUJpYXMgPT0gZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCkge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFMb3cgPCAwID8gLTEgOiBhTG93O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYmluYXJ5IHNlYXJjaCB3aGljaCB3aWxsIGFsd2F5cyB0cnkgYW5kIHJldHVyblxuICogdGhlIGluZGV4IG9mIHRoZSBjbG9zZXN0IGVsZW1lbnQgaWYgdGhlcmUgaXMgbm8gZXhhY3QgaGl0LiBUaGlzIGlzIGJlY2F1c2VcbiAqIG1hcHBpbmdzIGJldHdlZW4gb3JpZ2luYWwgYW5kIGdlbmVyYXRlZCBsaW5lL2NvbCBwYWlycyBhcmUgc2luZ2xlIHBvaW50cyxcbiAqIGFuZCB0aGVyZSBpcyBhbiBpbXBsaWNpdCByZWdpb24gYmV0d2VlbiBlYWNoIG9mIHRoZW0sIHNvIGEgbWlzcyBqdXN0IG1lYW5zXG4gKiB0aGF0IHlvdSBhcmVuJ3Qgb24gdGhlIHZlcnkgc3RhcnQgb2YgYSByZWdpb24uXG4gKlxuICogQHBhcmFtIGFOZWVkbGUgVGhlIGVsZW1lbnQgeW91IGFyZSBsb29raW5nIGZvci5cbiAqIEBwYXJhbSBhSGF5c3RhY2sgVGhlIGFycmF5IHRoYXQgaXMgYmVpbmcgc2VhcmNoZWQuXG4gKiBAcGFyYW0gYUNvbXBhcmUgQSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGUgbmVlZGxlIGFuZCBhbiBlbGVtZW50IGluIHRoZVxuICogICAgIGFycmF5IGFuZCByZXR1cm5zIC0xLCAwLCBvciAxIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBuZWVkbGUgaXMgbGVzc1xuICogICAgIHRoYW4sIGVxdWFsIHRvLCBvciBncmVhdGVyIHRoYW4gdGhlIGVsZW1lbnQsIHJlc3BlY3RpdmVseS5cbiAqIEBwYXJhbSBhQmlhcyBFaXRoZXIgJ2JpbmFyeVNlYXJjaC5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnYmluYXJ5U2VhcmNoLkxFQVNUX1VQUEVSX0JPVU5EJy4gU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0dXJuIHRoZVxuICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcbiAqICAgICBzZWFyY2hpbmcgZm9yLCByZXNwZWN0aXZlbHksIGlmIHRoZSBleGFjdCBlbGVtZW50IGNhbm5vdCBiZSBmb3VuZC5cbiAqICAgICBEZWZhdWx0cyB0byAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cbiAqL1xuZXhwb3J0cy5zZWFyY2ggPSBmdW5jdGlvbiBzZWFyY2goYU5lZWRsZSwgYUhheXN0YWNrLCBhQ29tcGFyZSwgYUJpYXMpIHtcbiAgaWYgKGFIYXlzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICB2YXIgaW5kZXggPSByZWN1cnNpdmVTZWFyY2goLTEsIGFIYXlzdGFjay5sZW5ndGgsIGFOZWVkbGUsIGFIYXlzdGFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFDb21wYXJlLCBhQmlhcyB8fCBleHBvcnRzLkdSRUFURVNUX0xPV0VSX0JPVU5EKTtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8vIFdlIGhhdmUgZm91bmQgZWl0aGVyIHRoZSBleGFjdCBlbGVtZW50LCBvciB0aGUgbmV4dC1jbG9zZXN0IGVsZW1lbnQgdGhhblxuICAvLyB0aGUgb25lIHdlIGFyZSBzZWFyY2hpbmcgZm9yLiBIb3dldmVyLCB0aGVyZSBtYXkgYmUgbW9yZSB0aGFuIG9uZSBzdWNoXG4gIC8vIGVsZW1lbnQuIE1ha2Ugc3VyZSB3ZSBhbHdheXMgcmV0dXJuIHRoZSBzbWFsbGVzdCBvZiB0aGVzZS5cbiAgd2hpbGUgKGluZGV4IC0gMSA+PSAwKSB7XG4gICAgaWYgKGFDb21wYXJlKGFIYXlzdGFja1tpbmRleF0sIGFIYXlzdGFja1tpbmRleCAtIDFdLCB0cnVlKSAhPT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC0taW5kZXg7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59O1xufSk7XG5cbi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxuLy8gSXQgdHVybnMgb3V0IHRoYXQgc29tZSAobW9zdD8pIEphdmFTY3JpcHQgZW5naW5lcyBkb24ndCBzZWxmLWhvc3Rcbi8vIGBBcnJheS5wcm90b3R5cGUuc29ydGAuIFRoaXMgbWFrZXMgc2Vuc2UgYmVjYXVzZSBDKysgd2lsbCBsaWtlbHkgcmVtYWluXG4vLyBmYXN0ZXIgdGhhbiBKUyB3aGVuIGRvaW5nIHJhdyBDUFUtaW50ZW5zaXZlIHNvcnRpbmcuIEhvd2V2ZXIsIHdoZW4gdXNpbmcgYVxuLy8gY3VzdG9tIGNvbXBhcmF0b3IgZnVuY3Rpb24sIGNhbGxpbmcgYmFjayBhbmQgZm9ydGggYmV0d2VlbiB0aGUgVk0ncyBDKysgYW5kXG4vLyBKSVQnZCBKUyBpcyByYXRoZXIgc2xvdyAqYW5kKiBsb3NlcyBKSVQgdHlwZSBpbmZvcm1hdGlvbiwgcmVzdWx0aW5nIGluXG4vLyB3b3JzZSBnZW5lcmF0ZWQgY29kZSBmb3IgdGhlIGNvbXBhcmF0b3IgZnVuY3Rpb24gdGhhbiB3b3VsZCBiZSBvcHRpbWFsLiBJblxuLy8gZmFjdCwgd2hlbiBzb3J0aW5nIHdpdGggYSBjb21wYXJhdG9yLCB0aGVzZSBjb3N0cyBvdXR3ZWlnaCB0aGUgYmVuZWZpdHMgb2Zcbi8vIHNvcnRpbmcgaW4gQysrLiBCeSB1c2luZyBvdXIgb3duIEpTLWltcGxlbWVudGVkIFF1aWNrIFNvcnQgKGJlbG93KSwgd2UgZ2V0XG4vLyBhIH4zNTAwbXMgbWVhbiBzcGVlZC11cCBpbiBgYmVuY2gvYmVuY2guaHRtbGAuXG5cbi8qKlxuICogU3dhcCB0aGUgZWxlbWVudHMgaW5kZXhlZCBieSBgeGAgYW5kIGB5YCBpbiB0aGUgYXJyYXkgYGFyeWAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJ5XG4gKiAgICAgICAgVGhlIGFycmF5LlxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqICAgICAgICBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0uXG4gKiBAcGFyYW0ge051bWJlcn0geVxuICogICAgICAgIFRoZSBpbmRleCBvZiB0aGUgc2Vjb25kIGl0ZW0uXG4gKi9cbmZ1bmN0aW9uIHN3YXAoYXJ5LCB4LCB5KSB7XG4gIHZhciB0ZW1wID0gYXJ5W3hdO1xuICBhcnlbeF0gPSBhcnlbeV07XG4gIGFyeVt5XSA9IHRlbXA7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgcmFuZ2UgYGxvdyAuLiBoaWdoYCBpbmNsdXNpdmUuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGxvd1xuICogICAgICAgIFRoZSBsb3dlciBib3VuZCBvbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge051bWJlcn0gaGlnaFxuICogICAgICAgIFRoZSB1cHBlciBib3VuZCBvbiB0aGUgcmFuZ2UuXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUludEluUmFuZ2UobG93LCBoaWdoKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKGxvdyArIChNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cpKSk7XG59XG5cbi8qKlxuICogVGhlIFF1aWNrIFNvcnQgYWxnb3JpdGhtLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyeVxuICogICAgICAgIEFuIGFycmF5IHRvIHNvcnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJhdG9yXG4gKiAgICAgICAgRnVuY3Rpb24gdG8gdXNlIHRvIGNvbXBhcmUgdHdvIGl0ZW1zLlxuICogQHBhcmFtIHtOdW1iZXJ9IHBcbiAqICAgICAgICBTdGFydCBpbmRleCBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSByXG4gKiAgICAgICAgRW5kIGluZGV4IG9mIHRoZSBhcnJheVxuICovXG5mdW5jdGlvbiBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIHAsIHIpIHtcbiAgLy8gSWYgb3VyIGxvd2VyIGJvdW5kIGlzIGxlc3MgdGhhbiBvdXIgdXBwZXIgYm91bmQsIHdlICgxKSBwYXJ0aXRpb24gdGhlXG4gIC8vIGFycmF5IGludG8gdHdvIHBpZWNlcyBhbmQgKDIpIHJlY3Vyc2Ugb24gZWFjaCBoYWxmLiBJZiBpdCBpcyBub3QsIHRoaXMgaXNcbiAgLy8gdGhlIGVtcHR5IGFycmF5IGFuZCBvdXIgYmFzZSBjYXNlLlxuXG4gIGlmIChwIDwgcikge1xuICAgIC8vICgxKSBQYXJ0aXRpb25pbmcuXG4gICAgLy9cbiAgICAvLyBUaGUgcGFydGl0aW9uaW5nIGNob29zZXMgYSBwaXZvdCBiZXR3ZWVuIGBwYCBhbmQgYHJgIGFuZCBtb3ZlcyBhbGxcbiAgICAvLyBlbGVtZW50cyB0aGF0IGFyZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHBpdm90IHRvIHRoZSBiZWZvcmUgaXQsIGFuZFxuICAgIC8vIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBhcmUgZ3JlYXRlciB0aGFuIGl0IGFmdGVyIGl0LiBUaGUgZWZmZWN0IGlzIHRoYXRcbiAgICAvLyBvbmNlIHBhcnRpdGlvbiBpcyBkb25lLCB0aGUgcGl2b3QgaXMgaW4gdGhlIGV4YWN0IHBsYWNlIGl0IHdpbGwgYmUgd2hlblxuICAgIC8vIHRoZSBhcnJheSBpcyBwdXQgaW4gc29ydGVkIG9yZGVyLCBhbmQgaXQgd2lsbCBub3QgbmVlZCB0byBiZSBtb3ZlZFxuICAgIC8vIGFnYWluLiBUaGlzIHJ1bnMgaW4gTyhuKSB0aW1lLlxuXG4gICAgLy8gQWx3YXlzIGNob29zZSBhIHJhbmRvbSBwaXZvdCBzbyB0aGF0IGFuIGlucHV0IGFycmF5IHdoaWNoIGlzIHJldmVyc2VcbiAgICAvLyBzb3J0ZWQgZG9lcyBub3QgY2F1c2UgTyhuXjIpIHJ1bm5pbmcgdGltZS5cbiAgICB2YXIgcGl2b3RJbmRleCA9IHJhbmRvbUludEluUmFuZ2UocCwgcik7XG4gICAgdmFyIGkgPSBwIC0gMTtcblxuICAgIHN3YXAoYXJ5LCBwaXZvdEluZGV4LCByKTtcbiAgICB2YXIgcGl2b3QgPSBhcnlbcl07XG5cbiAgICAvLyBJbW1lZGlhdGVseSBhZnRlciBgamAgaXMgaW5jcmVtZW50ZWQgaW4gdGhpcyBsb29wLCB0aGUgZm9sbG93aW5nIGhvbGRcbiAgICAvLyB0cnVlOlxuICAgIC8vXG4gICAgLy8gICAqIEV2ZXJ5IGVsZW1lbnQgaW4gYGFyeVtwIC4uIGldYCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHBpdm90LlxuICAgIC8vXG4gICAgLy8gICAqIEV2ZXJ5IGVsZW1lbnQgaW4gYGFyeVtpKzEgLi4gai0xXWAgaXMgZ3JlYXRlciB0aGFuIHRoZSBwaXZvdC5cbiAgICBmb3IgKHZhciBqID0gcDsgaiA8IHI7IGorKykge1xuICAgICAgaWYgKGNvbXBhcmF0b3IoYXJ5W2pdLCBwaXZvdCkgPD0gMCkge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIHN3YXAoYXJ5LCBpLCBqKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2FwKGFyeSwgaSArIDEsIGopO1xuICAgIHZhciBxID0gaSArIDE7XG5cbiAgICAvLyAoMikgUmVjdXJzZSBvbiBlYWNoIGhhbGYuXG5cbiAgICBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIHAsIHEgLSAxKTtcbiAgICBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIHEgKyAxLCByKTtcbiAgfVxufVxuXG4vKipcbiAqIFNvcnQgdGhlIGdpdmVuIGFycmF5IGluLXBsYWNlIHdpdGggdGhlIGdpdmVuIGNvbXBhcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJ5XG4gKiAgICAgICAgQW4gYXJyYXkgdG8gc29ydC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmF0b3JcbiAqICAgICAgICBGdW5jdGlvbiB0byB1c2UgdG8gY29tcGFyZSB0d28gaXRlbXMuXG4gKi9cbnZhciBxdWlja1NvcnRfMSA9IGZ1bmN0aW9uIChhcnksIGNvbXBhcmF0b3IpIHtcbiAgZG9RdWlja1NvcnQoYXJ5LCBjb21wYXJhdG9yLCAwLCBhcnkubGVuZ3RoIC0gMSk7XG59O1xuXG52YXIgcXVpY2tTb3J0ID0ge1xuXHRxdWlja1NvcnQ6IHF1aWNrU29ydF8xXG59O1xuXG4vKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cblxuXG52YXIgQXJyYXlTZXQkMSA9IGFycmF5U2V0LkFycmF5U2V0O1xuXG52YXIgcXVpY2tTb3J0JDEgPSBxdWlja1NvcnQucXVpY2tTb3J0O1xuXG5mdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHZhciBzb3VyY2VNYXAgPSBhU291cmNlTWFwO1xuICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgc291cmNlTWFwID0gdXRpbC5wYXJzZVNvdXJjZU1hcElucHV0KGFTb3VyY2VNYXApO1xuICB9XG5cbiAgcmV0dXJuIHNvdXJjZU1hcC5zZWN0aW9ucyAhPSBudWxsXG4gICAgPyBuZXcgSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyKHNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTClcbiAgICA6IG5ldyBCYXNpY1NvdXJjZU1hcENvbnN1bWVyKHNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCk7XG59XG5cblNvdXJjZU1hcENvbnN1bWVyLmZyb21Tb3VyY2VNYXAgPSBmdW5jdGlvbihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHJldHVybiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyLmZyb21Tb3VyY2VNYXAoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCk7XG59O1xuXG4vKipcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwcGluZyBzcGVjIHRoYXQgd2UgYXJlIGNvbnN1bWluZy5cbiAqL1xuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl92ZXJzaW9uID0gMztcblxuLy8gYF9fZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZCBgX19vcmlnaW5hbE1hcHBpbmdzYCBhcmUgYXJyYXlzIHRoYXQgaG9sZCB0aGVcbi8vIHBhcnNlZCBtYXBwaW5nIGNvb3JkaW5hdGVzIGZyb20gdGhlIHNvdXJjZSBtYXAncyBcIm1hcHBpbmdzXCIgYXR0cmlidXRlLiBUaGV5XG4vLyBhcmUgbGF6aWx5IGluc3RhbnRpYXRlZCwgYWNjZXNzZWQgdmlhIHRoZSBgX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbi8vIGBfb3JpZ2luYWxNYXBwaW5nc2AgZ2V0dGVycyByZXNwZWN0aXZlbHksIGFuZCB3ZSBvbmx5IHBhcnNlIHRoZSBtYXBwaW5nc1xuLy8gYW5kIGNyZWF0ZSB0aGVzZSBhcnJheXMgb25jZSBxdWVyaWVkIGZvciBhIHNvdXJjZSBsb2NhdGlvbi4gV2UganVtcCB0aHJvdWdoXG4vLyB0aGVzZSBob29wcyBiZWNhdXNlIHRoZXJlIGNhbiBiZSBtYW55IHRob3VzYW5kcyBvZiBtYXBwaW5ncywgYW5kIHBhcnNpbmdcbi8vIHRoZW0gaXMgZXhwZW5zaXZlLCBzbyB3ZSBvbmx5IHdhbnQgdG8gZG8gaXQgaWYgd2UgbXVzdC5cbi8vXG4vLyBFYWNoIG9iamVjdCBpbiB0aGUgYXJyYXlzIGlzIG9mIHRoZSBmb3JtOlxuLy9cbi8vICAgICB7XG4vLyAgICAgICBnZW5lcmF0ZWRMaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBjb2RlLFxuLy8gICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIGNvZGUsXG4vLyAgICAgICBzb3VyY2U6IFRoZSBwYXRoIHRvIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZSB0aGF0IGdlbmVyYXRlZCB0aGlzXG4vLyAgICAgICAgICAgICAgIGNodW5rIG9mIGNvZGUsXG4vLyAgICAgICBvcmlnaW5hbExpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlIHRoYXRcbi8vICAgICAgICAgICAgICAgICAgICAgY29ycmVzcG9uZHMgdG8gdGhpcyBjaHVuayBvZiBnZW5lcmF0ZWQgY29kZSxcbi8vICAgICAgIG9yaWdpbmFsQ29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlIHRoYXRcbi8vICAgICAgICAgICAgICAgICAgICAgICBjb3JyZXNwb25kcyB0byB0aGlzIGNodW5rIG9mIGdlbmVyYXRlZCBjb2RlLFxuLy8gICAgICAgbmFtZTogVGhlIG5hbWUgb2YgdGhlIG9yaWdpbmFsIHN5bWJvbCB3aGljaCBnZW5lcmF0ZWQgdGhpcyBjaHVuayBvZlxuLy8gICAgICAgICAgICAgY29kZS5cbi8vICAgICB9XG4vL1xuLy8gQWxsIHByb3BlcnRpZXMgZXhjZXB0IGZvciBgZ2VuZXJhdGVkTGluZWAgYW5kIGBnZW5lcmF0ZWRDb2x1bW5gIGNhbiBiZVxuLy8gYG51bGxgLlxuLy9cbi8vIGBfZ2VuZXJhdGVkTWFwcGluZ3NgIGlzIG9yZGVyZWQgYnkgdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMuXG4vL1xuLy8gYF9vcmlnaW5hbE1hcHBpbmdzYCBpcyBvcmRlcmVkIGJ5IHRoZSBvcmlnaW5hbCBwb3NpdGlvbnMuXG5cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fX2dlbmVyYXRlZE1hcHBpbmdzID0gbnVsbDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUsICdfZ2VuZXJhdGVkTWFwcGluZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MpIHtcbiAgICAgIHRoaXMuX3BhcnNlTWFwcGluZ3ModGhpcy5fbWFwcGluZ3MsIHRoaXMuc291cmNlUm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncztcbiAgfVxufSk7XG5cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fX29yaWdpbmFsTWFwcGluZ3MgPSBudWxsO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ19vcmlnaW5hbE1hcHBpbmdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MpIHtcbiAgICAgIHRoaXMuX3BhcnNlTWFwcGluZ3ModGhpcy5fbWFwcGluZ3MsIHRoaXMuc291cmNlUm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzO1xuICB9XG59KTtcblxuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9jaGFySXNNYXBwaW5nU2VwYXJhdG9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfY2hhcklzTWFwcGluZ1NlcGFyYXRvcihhU3RyLCBpbmRleCkge1xuICAgIHZhciBjID0gYVN0ci5jaGFyQXQoaW5kZXgpO1xuICAgIHJldHVybiBjID09PSBcIjtcIiB8fCBjID09PSBcIixcIjtcbiAgfTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG4gKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbiAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG4gKi9cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fcGFyc2VNYXBwaW5ncyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX3BhcnNlTWFwcGluZ3MoYVN0ciwgYVNvdXJjZVJvb3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdWJjbGFzc2VzIG11c3QgaW1wbGVtZW50IF9wYXJzZU1hcHBpbmdzXCIpO1xuICB9O1xuXG5Tb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVIgPSAxO1xuU291cmNlTWFwQ29uc3VtZXIuT1JJR0lOQUxfT1JERVIgPSAyO1xuXG5Tb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCA9IDE7XG5Tb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCA9IDI7XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGVhY2ggbWFwcGluZyBiZXR3ZWVuIGFuIG9yaWdpbmFsIHNvdXJjZS9saW5lL2NvbHVtbiBhbmQgYVxuICogZ2VuZXJhdGVkIGxpbmUvY29sdW1uIGluIHRoaXMgc291cmNlIG1hcC5cbiAqXG4gKiBAcGFyYW0gRnVuY3Rpb24gYUNhbGxiYWNrXG4gKiAgICAgICAgVGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdpdGggZWFjaCBtYXBwaW5nLlxuICogQHBhcmFtIE9iamVjdCBhQ29udGV4dFxuICogICAgICAgIE9wdGlvbmFsLiBJZiBzcGVjaWZpZWQsIHRoaXMgb2JqZWN0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIGB0aGlzYCBldmVyeVxuICogICAgICAgIHRpbWUgdGhhdCBgYUNhbGxiYWNrYCBpcyBjYWxsZWQuXG4gKiBAcGFyYW0gYU9yZGVyXG4gKiAgICAgICAgRWl0aGVyIGBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVJgIG9yXG4gKiAgICAgICAgYFNvdXJjZU1hcENvbnN1bWVyLk9SSUdJTkFMX09SREVSYC4gU3BlY2lmaWVzIHdoZXRoZXIgeW91IHdhbnQgdG9cbiAqICAgICAgICBpdGVyYXRlIG92ZXIgdGhlIG1hcHBpbmdzIHNvcnRlZCBieSB0aGUgZ2VuZXJhdGVkIGZpbGUncyBsaW5lL2NvbHVtblxuICogICAgICAgIG9yZGVyIG9yIHRoZSBvcmlnaW5hbCdzIHNvdXJjZS9saW5lL2NvbHVtbiBvcmRlciwgcmVzcGVjdGl2ZWx5LiBEZWZhdWx0cyB0b1xuICogICAgICAgIGBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVJgLlxuICovXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZWFjaE1hcHBpbmcgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9lYWNoTWFwcGluZyhhQ2FsbGJhY2ssIGFDb250ZXh0LCBhT3JkZXIpIHtcbiAgICB2YXIgY29udGV4dCA9IGFDb250ZXh0IHx8IG51bGw7XG4gICAgdmFyIG9yZGVyID0gYU9yZGVyIHx8IFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUjtcblxuICAgIHZhciBtYXBwaW5ncztcbiAgICBzd2l0Y2ggKG9yZGVyKSB7XG4gICAgY2FzZSBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVI6XG4gICAgICBtYXBwaW5ncyA9IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTb3VyY2VNYXBDb25zdW1lci5PUklHSU5BTF9PUkRFUjpcbiAgICAgIG1hcHBpbmdzID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5ncztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIG9yZGVyIG9mIGl0ZXJhdGlvbi5cIik7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZVJvb3QgPSB0aGlzLnNvdXJjZVJvb3Q7XG4gICAgbWFwcGluZ3MubWFwKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG4gICAgICB2YXIgc291cmNlID0gbWFwcGluZy5zb3VyY2UgPT09IG51bGwgPyBudWxsIDogdGhpcy5fc291cmNlcy5hdChtYXBwaW5nLnNvdXJjZSk7XG4gICAgICBzb3VyY2UgPSB1dGlsLmNvbXB1dGVTb3VyY2VVUkwoc291cmNlUm9vdCwgc291cmNlLCB0aGlzLl9zb3VyY2VNYXBVUkwpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgIGdlbmVyYXRlZExpbmU6IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSxcbiAgICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbixcbiAgICAgICAgb3JpZ2luYWxMaW5lOiBtYXBwaW5nLm9yaWdpbmFsTGluZSxcbiAgICAgICAgb3JpZ2luYWxDb2x1bW46IG1hcHBpbmcub3JpZ2luYWxDb2x1bW4sXG4gICAgICAgIG5hbWU6IG1hcHBpbmcubmFtZSA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9uYW1lcy5hdChtYXBwaW5nLm5hbWUpXG4gICAgICB9O1xuICAgIH0sIHRoaXMpLmZvckVhY2goYUNhbGxiYWNrLCBjb250ZXh0KTtcbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIGFsbCBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgb3JpZ2luYWwgc291cmNlLFxuICogbGluZSwgYW5kIGNvbHVtbiBwcm92aWRlZC4gSWYgbm8gY29sdW1uIGlzIHByb3ZpZGVkLCByZXR1cm5zIGFsbCBtYXBwaW5nc1xuICogY29ycmVzcG9uZGluZyB0byBhIGVpdGhlciB0aGUgbGluZSB3ZSBhcmUgc2VhcmNoaW5nIGZvciBvciB0aGUgbmV4dFxuICogY2xvc2VzdCBsaW5lIHRoYXQgaGFzIGFueSBtYXBwaW5ncy4gT3RoZXJ3aXNlLCByZXR1cm5zIGFsbCBtYXBwaW5nc1xuICogY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gbGluZSBhbmQgZWl0aGVyIHRoZSBjb2x1bW4gd2UgYXJlIHNlYXJjaGluZyBmb3JcbiAqIG9yIHRoZSBuZXh0IGNsb3Nlc3QgY29sdW1uIHRoYXQgaGFzIGFueSBvZmZzZXRzLlxuICpcbiAqIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgZmlsZW5hbWUgb2YgdGhlIG9yaWdpbmFsIHNvdXJjZS5cbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogT3B0aW9uYWwuIHRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgICBUaGUgY29sdW1uIG51bWJlciBpcyAwLWJhc2VkLlxuICpcbiAqIGFuZCBhbiBhcnJheSBvZiBvYmplY3RzIGlzIHJldHVybmVkLCBlYWNoIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC5cbiAqICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKi9cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5hbGxHZW5lcmF0ZWRQb3NpdGlvbnNGb3IgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9hbGxHZW5lcmF0ZWRQb3NpdGlvbnNGb3IoYUFyZ3MpIHtcbiAgICB2YXIgbGluZSA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbGluZScpO1xuXG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyBleGFjdCBtYXRjaCwgQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2ZpbmRNYXBwaW5nXG4gICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGNsb3Nlc3QgbWFwcGluZyBsZXNzIHRoYW4gdGhlIG5lZWRsZS4gQnlcbiAgICAvLyBzZXR0aW5nIG5lZWRsZS5vcmlnaW5hbENvbHVtbiB0byAwLCB3ZSB0aHVzIGZpbmQgdGhlIGxhc3QgbWFwcGluZyBmb3JcbiAgICAvLyB0aGUgZ2l2ZW4gbGluZSwgcHJvdmlkZWQgc3VjaCBhIG1hcHBpbmcgZXhpc3RzLlxuICAgIHZhciBuZWVkbGUgPSB7XG4gICAgICBzb3VyY2U6IHV0aWwuZ2V0QXJnKGFBcmdzLCAnc291cmNlJyksXG4gICAgICBvcmlnaW5hbExpbmU6IGxpbmUsXG4gICAgICBvcmlnaW5hbENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nLCAwKVxuICAgIH07XG5cbiAgICBuZWVkbGUuc291cmNlID0gdGhpcy5fZmluZFNvdXJjZUluZGV4KG5lZWRsZS5zb3VyY2UpO1xuICAgIGlmIChuZWVkbGUuc291cmNlIDwgMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciBtYXBwaW5ncyA9IFtdO1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZE1hcHBpbmcobmVlZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsTWFwcGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5hbExpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbmFsQ29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlTZWFyY2guTEVBU1RfVVBQRVJfQk9VTkQpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB2YXIgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICBpZiAoYUFyZ3MuY29sdW1uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgZWl0aGVyIHdlIHJ1biBvdXQgb2YgbWFwcGluZ3MsIG9yIHdlIHJ1biBpbnRvXG4gICAgICAgIC8vIGEgbWFwcGluZyBmb3IgYSBkaWZmZXJlbnQgbGluZSB0aGFuIHRoZSBvbmUgd2UgZm91bmQuIFNpbmNlXG4gICAgICAgIC8vIG1hcHBpbmdzIGFyZSBzb3J0ZWQsIHRoaXMgaXMgZ3VhcmFudGVlZCB0byBmaW5kIGFsbCBtYXBwaW5ncyBmb3JcbiAgICAgICAgLy8gdGhlIGxpbmUgd2UgZm91bmQuXG4gICAgICAgIHdoaWxlIChtYXBwaW5nICYmIG1hcHBpbmcub3JpZ2luYWxMaW5lID09PSBvcmlnaW5hbExpbmUpIHtcbiAgICAgICAgICBtYXBwaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRMaW5lJywgbnVsbCksXG4gICAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICAgIGxhc3RDb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdsYXN0R2VuZXJhdGVkQ29sdW1uJywgbnVsbClcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzWysraW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb3JpZ2luYWxDb2x1bW4gPSBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgZWl0aGVyIHdlIHJ1biBvdXQgb2YgbWFwcGluZ3MsIG9yIHdlIHJ1biBpbnRvXG4gICAgICAgIC8vIGEgbWFwcGluZyBmb3IgYSBkaWZmZXJlbnQgbGluZSB0aGFuIHRoZSBvbmUgd2Ugd2VyZSBzZWFyY2hpbmcgZm9yLlxuICAgICAgICAvLyBTaW5jZSBtYXBwaW5ncyBhcmUgc29ydGVkLCB0aGlzIGlzIGd1YXJhbnRlZWQgdG8gZmluZCBhbGwgbWFwcGluZ3MgZm9yXG4gICAgICAgIC8vIHRoZSBsaW5lIHdlIGFyZSBzZWFyY2hpbmcgZm9yLlxuICAgICAgICB3aGlsZSAobWFwcGluZyAmJlxuICAgICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgPT09IGxpbmUgJiZcbiAgICAgICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPT0gb3JpZ2luYWxDb2x1bW4pIHtcbiAgICAgICAgICBtYXBwaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRMaW5lJywgbnVsbCksXG4gICAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICAgIGxhc3RDb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdsYXN0R2VuZXJhdGVkQ29sdW1uJywgbnVsbClcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzWysraW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcHBpbmdzO1xuICB9O1xuXG52YXIgU291cmNlTWFwQ29uc3VtZXJfMSA9IFNvdXJjZU1hcENvbnN1bWVyO1xuXG4vKipcbiAqIEEgQmFzaWNTb3VyY2VNYXBDb25zdW1lciBpbnN0YW5jZSByZXByZXNlbnRzIGEgcGFyc2VkIHNvdXJjZSBtYXAgd2hpY2ggd2UgY2FuXG4gKiBxdWVyeSBmb3IgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG9yaWdpbmFsIGZpbGUgcG9zaXRpb25zIGJ5IGdpdmluZyBpdCBhIGZpbGVcbiAqIHBvc2l0aW9uIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLlxuICpcbiAqIFRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgdGhlIHJhdyBzb3VyY2UgbWFwIChlaXRoZXIgYXMgYSBKU09OIHN0cmluZywgb3JcbiAqIGFscmVhZHkgcGFyc2VkIHRvIGFuIG9iamVjdCkuIEFjY29yZGluZyB0byB0aGUgc3BlYywgc291cmNlIG1hcHMgaGF2ZSB0aGVcbiAqIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICpcbiAqICAgLSB2ZXJzaW9uOiBXaGljaCB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwIHNwZWMgdGhpcyBtYXAgaXMgZm9sbG93aW5nLlxuICogICAtIHNvdXJjZXM6IEFuIGFycmF5IG9mIFVSTHMgdG8gdGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlcy5cbiAqICAgLSBuYW1lczogQW4gYXJyYXkgb2YgaWRlbnRpZmllcnMgd2hpY2ggY2FuIGJlIHJlZmVycmVuY2VkIGJ5IGluZGl2aWR1YWwgbWFwcGluZ3MuXG4gKiAgIC0gc291cmNlUm9vdDogT3B0aW9uYWwuIFRoZSBVUkwgcm9vdCBmcm9tIHdoaWNoIGFsbCBzb3VyY2VzIGFyZSByZWxhdGl2ZS5cbiAqICAgLSBzb3VyY2VzQ29udGVudDogT3B0aW9uYWwuIEFuIGFycmF5IG9mIGNvbnRlbnRzIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZXMuXG4gKiAgIC0gbWFwcGluZ3M6IEEgc3RyaW5nIG9mIGJhc2U2NCBWTFFzIHdoaWNoIGNvbnRhaW4gdGhlIGFjdHVhbCBtYXBwaW5ncy5cbiAqICAgLSBmaWxlOiBPcHRpb25hbC4gVGhlIGdlbmVyYXRlZCBmaWxlIHRoaXMgc291cmNlIG1hcCBpcyBhc3NvY2lhdGVkIHdpdGguXG4gKlxuICogSGVyZSBpcyBhbiBleGFtcGxlIHNvdXJjZSBtYXAsIHRha2VuIGZyb20gdGhlIHNvdXJjZSBtYXAgc3BlY1swXTpcbiAqXG4gKiAgICAge1xuICogICAgICAgdmVyc2lvbiA6IDMsXG4gKiAgICAgICBmaWxlOiBcIm91dC5qc1wiLFxuICogICAgICAgc291cmNlUm9vdCA6IFwiXCIsXG4gKiAgICAgICBzb3VyY2VzOiBbXCJmb28uanNcIiwgXCJiYXIuanNcIl0sXG4gKiAgICAgICBuYW1lczogW1wic3JjXCIsIFwibWFwc1wiLCBcImFyZVwiLCBcImZ1blwiXSxcbiAqICAgICAgIG1hcHBpbmdzOiBcIkFBLEFCOztBQkNERTtcIlxuICogICAgIH1cbiAqXG4gKiBUaGUgc2Vjb25kIHBhcmFtZXRlciwgaWYgZ2l2ZW4sIGlzIGEgc3RyaW5nIHdob3NlIHZhbHVlIGlzIHRoZSBVUkxcbiAqIGF0IHdoaWNoIHRoZSBzb3VyY2UgbWFwIHdhcyBmb3VuZC4gIFRoaXMgVVJMIGlzIHVzZWQgdG8gY29tcHV0ZSB0aGVcbiAqIHNvdXJjZXMgYXJyYXkuXG4gKlxuICogWzBdOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFVMVJHQWVoUXdSeXBVVG92RjFLUmxwaU9GemUwYi1fMmdjNmZBSDBLWTBrL2VkaXQ/cGxpPTEjXG4gKi9cbmZ1bmN0aW9uIEJhc2ljU291cmNlTWFwQ29uc3VtZXIoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCkge1xuICB2YXIgc291cmNlTWFwID0gYVNvdXJjZU1hcDtcbiAgaWYgKHR5cGVvZiBhU291cmNlTWFwID09PSAnc3RyaW5nJykge1xuICAgIHNvdXJjZU1hcCA9IHV0aWwucGFyc2VTb3VyY2VNYXBJbnB1dChhU291cmNlTWFwKTtcbiAgfVxuXG4gIHZhciB2ZXJzaW9uID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAndmVyc2lvbicpO1xuICB2YXIgc291cmNlcyA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3NvdXJjZXMnKTtcbiAgLy8gU2FzcyAzLjMgbGVhdmVzIG91dCB0aGUgJ25hbWVzJyBhcnJheSwgc28gd2UgZGV2aWF0ZSBmcm9tIHRoZSBzcGVjICh3aGljaFxuICAvLyByZXF1aXJlcyB0aGUgYXJyYXkpIHRvIHBsYXkgbmljZSBoZXJlLlxuICB2YXIgbmFtZXMgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICduYW1lcycsIFtdKTtcbiAgdmFyIHNvdXJjZVJvb3QgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzb3VyY2VSb290JywgbnVsbCk7XG4gIHZhciBzb3VyY2VzQ29udGVudCA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3NvdXJjZXNDb250ZW50JywgbnVsbCk7XG4gIHZhciBtYXBwaW5ncyA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ21hcHBpbmdzJyk7XG4gIHZhciBmaWxlID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnZmlsZScsIG51bGwpO1xuXG4gIC8vIE9uY2UgYWdhaW4sIFNhc3MgZGV2aWF0ZXMgZnJvbSB0aGUgc3BlYyBhbmQgc3VwcGxpZXMgdGhlIHZlcnNpb24gYXMgYVxuICAvLyBzdHJpbmcgcmF0aGVyIHRoYW4gYSBudW1iZXIsIHNvIHdlIHVzZSBsb29zZSBlcXVhbGl0eSBjaGVja2luZyBoZXJlLlxuICBpZiAodmVyc2lvbiAhPSB0aGlzLl92ZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCB2ZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICBpZiAoc291cmNlUm9vdCkge1xuICAgIHNvdXJjZVJvb3QgPSB1dGlsLm5vcm1hbGl6ZShzb3VyY2VSb290KTtcbiAgfVxuXG4gIHNvdXJjZXMgPSBzb3VyY2VzXG4gICAgLm1hcChTdHJpbmcpXG4gICAgLy8gU29tZSBzb3VyY2UgbWFwcyBwcm9kdWNlIHJlbGF0aXZlIHNvdXJjZSBwYXRocyBsaWtlIFwiLi9mb28uanNcIiBpbnN0ZWFkIG9mXG4gICAgLy8gXCJmb28uanNcIi4gIE5vcm1hbGl6ZSB0aGVzZSBmaXJzdCBzbyB0aGF0IGZ1dHVyZSBjb21wYXJpc29ucyB3aWxsIHN1Y2NlZWQuXG4gICAgLy8gU2VlIGJ1Z3ppbC5sYS8xMDkwNzY4LlxuICAgIC5tYXAodXRpbC5ub3JtYWxpemUpXG4gICAgLy8gQWx3YXlzIGVuc3VyZSB0aGF0IGFic29sdXRlIHNvdXJjZXMgYXJlIGludGVybmFsbHkgc3RvcmVkIHJlbGF0aXZlIHRvXG4gICAgLy8gdGhlIHNvdXJjZSByb290LCBpZiB0aGUgc291cmNlIHJvb3QgaXMgYWJzb2x1dGUuIE5vdCBkb2luZyB0aGlzIHdvdWxkXG4gICAgLy8gYmUgcGFydGljdWxhcmx5IHByb2JsZW1hdGljIHdoZW4gdGhlIHNvdXJjZSByb290IGlzIGEgcHJlZml4IG9mIHRoZVxuICAgIC8vIHNvdXJjZSAodmFsaWQsIGJ1dCB3aHk/PykuIFNlZSBnaXRodWIgaXNzdWUgIzE5OSBhbmQgYnVnemlsLmxhLzExODg5ODIuXG4gICAgLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gc291cmNlUm9vdCAmJiB1dGlsLmlzQWJzb2x1dGUoc291cmNlUm9vdCkgJiYgdXRpbC5pc0Fic29sdXRlKHNvdXJjZSlcbiAgICAgICAgPyB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIHNvdXJjZSlcbiAgICAgICAgOiBzb3VyY2U7XG4gICAgfSk7XG5cbiAgLy8gUGFzcyBgdHJ1ZWAgYmVsb3cgdG8gYWxsb3cgZHVwbGljYXRlIG5hbWVzIGFuZCBzb3VyY2VzLiBXaGlsZSBzb3VyY2UgbWFwc1xuICAvLyBhcmUgaW50ZW5kZWQgdG8gYmUgY29tcHJlc3NlZCBhbmQgZGVkdXBsaWNhdGVkLCB0aGUgVHlwZVNjcmlwdCBjb21waWxlclxuICAvLyBzb21ldGltZXMgZ2VuZXJhdGVzIHNvdXJjZSBtYXBzIHdpdGggZHVwbGljYXRlcyBpbiB0aGVtLiBTZWUgR2l0aHViIGlzc3VlXG4gIC8vICM3MiBhbmQgYnVnemlsLmxhLzg4OTQ5Mi5cbiAgdGhpcy5fbmFtZXMgPSBBcnJheVNldCQxLmZyb21BcnJheShuYW1lcy5tYXAoU3RyaW5nKSwgdHJ1ZSk7XG4gIHRoaXMuX3NvdXJjZXMgPSBBcnJheVNldCQxLmZyb21BcnJheShzb3VyY2VzLCB0cnVlKTtcblxuICB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMgPSB0aGlzLl9zb3VyY2VzLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gdXRpbC5jb21wdXRlU291cmNlVVJMKHNvdXJjZVJvb3QsIHMsIGFTb3VyY2VNYXBVUkwpO1xuICB9KTtcblxuICB0aGlzLnNvdXJjZVJvb3QgPSBzb3VyY2VSb290O1xuICB0aGlzLnNvdXJjZXNDb250ZW50ID0gc291cmNlc0NvbnRlbnQ7XG4gIHRoaXMuX21hcHBpbmdzID0gbWFwcGluZ3M7XG4gIHRoaXMuX3NvdXJjZU1hcFVSTCA9IGFTb3VyY2VNYXBVUkw7XG4gIHRoaXMuZmlsZSA9IGZpbGU7XG59XG5cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUpO1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29uc3VtZXIgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGZpbmQgdGhlIGluZGV4IG9mIGEgc291cmNlLiAgUmV0dXJucyAtMSBpZiBub3RcbiAqIGZvdW5kLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fZmluZFNvdXJjZUluZGV4ID0gZnVuY3Rpb24oYVNvdXJjZSkge1xuICB2YXIgcmVsYXRpdmVTb3VyY2UgPSBhU291cmNlO1xuICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICByZWxhdGl2ZVNvdXJjZSA9IHV0aWwucmVsYXRpdmUodGhpcy5zb3VyY2VSb290LCByZWxhdGl2ZVNvdXJjZSk7XG4gIH1cblxuICBpZiAodGhpcy5fc291cmNlcy5oYXMocmVsYXRpdmVTb3VyY2UpKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZXMuaW5kZXhPZihyZWxhdGl2ZVNvdXJjZSk7XG4gIH1cblxuICAvLyBNYXliZSBhU291cmNlIGlzIGFuIGFic29sdXRlIFVSTCBhcyByZXR1cm5lZCBieSB8c291cmNlc3wuICBJblxuICAvLyB0aGlzIGNhc2Ugd2UgY2FuJ3Qgc2ltcGx5IHVuZG8gdGhlIHRyYW5zZm9ybS5cbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodGhpcy5fYWJzb2x1dGVTb3VyY2VzW2ldID09IGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgQmFzaWNTb3VyY2VNYXBDb25zdW1lciBmcm9tIGEgU291cmNlTWFwR2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSBTb3VyY2VNYXBHZW5lcmF0b3IgYVNvdXJjZU1hcFxuICogICAgICAgIFRoZSBzb3VyY2UgbWFwIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbiAqIEBwYXJhbSBTdHJpbmcgYVNvdXJjZU1hcFVSTFxuICogICAgICAgIFRoZSBVUkwgYXQgd2hpY2ggdGhlIHNvdXJjZSBtYXAgY2FuIGJlIGZvdW5kIChvcHRpb25hbClcbiAqIEByZXR1cm5zIEJhc2ljU291cmNlTWFwQ29uc3VtZXJcbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5mcm9tU291cmNlTWFwID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZnJvbVNvdXJjZU1hcChhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gICAgdmFyIHNtYyA9IE9iamVjdC5jcmVhdGUoQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUpO1xuXG4gICAgdmFyIG5hbWVzID0gc21jLl9uYW1lcyA9IEFycmF5U2V0JDEuZnJvbUFycmF5KGFTb3VyY2VNYXAuX25hbWVzLnRvQXJyYXkoKSwgdHJ1ZSk7XG4gICAgdmFyIHNvdXJjZXMgPSBzbWMuX3NvdXJjZXMgPSBBcnJheVNldCQxLmZyb21BcnJheShhU291cmNlTWFwLl9zb3VyY2VzLnRvQXJyYXkoKSwgdHJ1ZSk7XG4gICAgc21jLnNvdXJjZVJvb3QgPSBhU291cmNlTWFwLl9zb3VyY2VSb290O1xuICAgIHNtYy5zb3VyY2VzQ29udGVudCA9IGFTb3VyY2VNYXAuX2dlbmVyYXRlU291cmNlc0NvbnRlbnQoc21jLl9zb3VyY2VzLnRvQXJyYXkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYy5zb3VyY2VSb290KTtcbiAgICBzbWMuZmlsZSA9IGFTb3VyY2VNYXAuX2ZpbGU7XG4gICAgc21jLl9zb3VyY2VNYXBVUkwgPSBhU291cmNlTWFwVVJMO1xuICAgIHNtYy5fYWJzb2x1dGVTb3VyY2VzID0gc21jLl9zb3VyY2VzLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiB1dGlsLmNvbXB1dGVTb3VyY2VVUkwoc21jLnNvdXJjZVJvb3QsIHMsIGFTb3VyY2VNYXBVUkwpO1xuICAgIH0pO1xuXG4gICAgLy8gQmVjYXVzZSB3ZSBhcmUgbW9kaWZ5aW5nIHRoZSBlbnRyaWVzIChieSBjb252ZXJ0aW5nIHN0cmluZyBzb3VyY2VzIGFuZFxuICAgIC8vIG5hbWVzIHRvIGluZGljZXMgaW50byB0aGUgc291cmNlcyBhbmQgbmFtZXMgQXJyYXlTZXRzKSwgd2UgaGF2ZSB0byBtYWtlXG4gICAgLy8gYSBjb3B5IG9mIHRoZSBlbnRyeSBvciBlbHNlIGJhZCB0aGluZ3MgaGFwcGVuLiBTaGFyZWQgbXV0YWJsZSBzdGF0ZVxuICAgIC8vIHN0cmlrZXMgYWdhaW4hIFNlZSBnaXRodWIgaXNzdWUgIzE5MS5cblxuICAgIHZhciBnZW5lcmF0ZWRNYXBwaW5ncyA9IGFTb3VyY2VNYXAuX21hcHBpbmdzLnRvQXJyYXkoKS5zbGljZSgpO1xuICAgIHZhciBkZXN0R2VuZXJhdGVkTWFwcGluZ3MgPSBzbWMuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuICAgIHZhciBkZXN0T3JpZ2luYWxNYXBwaW5ncyA9IHNtYy5fX29yaWdpbmFsTWFwcGluZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZW5lcmF0ZWRNYXBwaW5ncy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNyY01hcHBpbmcgPSBnZW5lcmF0ZWRNYXBwaW5nc1tpXTtcbiAgICAgIHZhciBkZXN0TWFwcGluZyA9IG5ldyBNYXBwaW5nO1xuICAgICAgZGVzdE1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9IHNyY01hcHBpbmcuZ2VuZXJhdGVkTGluZTtcbiAgICAgIGRlc3RNYXBwaW5nLmdlbmVyYXRlZENvbHVtbiA9IHNyY01hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuXG4gICAgICBpZiAoc3JjTWFwcGluZy5zb3VyY2UpIHtcbiAgICAgICAgZGVzdE1hcHBpbmcuc291cmNlID0gc291cmNlcy5pbmRleE9mKHNyY01hcHBpbmcuc291cmNlKTtcbiAgICAgICAgZGVzdE1hcHBpbmcub3JpZ2luYWxMaW5lID0gc3JjTWFwcGluZy5vcmlnaW5hbExpbmU7XG4gICAgICAgIGRlc3RNYXBwaW5nLm9yaWdpbmFsQ29sdW1uID0gc3JjTWFwcGluZy5vcmlnaW5hbENvbHVtbjtcblxuICAgICAgICBpZiAoc3JjTWFwcGluZy5uYW1lKSB7XG4gICAgICAgICAgZGVzdE1hcHBpbmcubmFtZSA9IG5hbWVzLmluZGV4T2Yoc3JjTWFwcGluZy5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc3RPcmlnaW5hbE1hcHBpbmdzLnB1c2goZGVzdE1hcHBpbmcpO1xuICAgICAgfVxuXG4gICAgICBkZXN0R2VuZXJhdGVkTWFwcGluZ3MucHVzaChkZXN0TWFwcGluZyk7XG4gICAgfVxuXG4gICAgcXVpY2tTb3J0JDEoc21jLl9fb3JpZ2luYWxNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyk7XG5cbiAgICByZXR1cm4gc21jO1xuICB9O1xuXG4vKipcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwcGluZyBzcGVjIHRoYXQgd2UgYXJlIGNvbnN1bWluZy5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIG9yaWdpbmFsIHNvdXJjZXMuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ3NvdXJjZXMnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMuc2xpY2UoKTtcbiAgfVxufSk7XG5cbi8qKlxuICogUHJvdmlkZSB0aGUgSklUIHdpdGggYSBuaWNlIHNoYXBlIC8gaGlkZGVuIGNsYXNzLlxuICovXG5mdW5jdGlvbiBNYXBwaW5nKCkge1xuICB0aGlzLmdlbmVyYXRlZExpbmUgPSAwO1xuICB0aGlzLmdlbmVyYXRlZENvbHVtbiA9IDA7XG4gIHRoaXMuc291cmNlID0gbnVsbDtcbiAgdGhpcy5vcmlnaW5hbExpbmUgPSBudWxsO1xuICB0aGlzLm9yaWdpbmFsQ29sdW1uID0gbnVsbDtcbiAgdGhpcy5uYW1lID0gbnVsbDtcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG4gKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbiAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9wYXJzZU1hcHBpbmdzID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuICAgIHZhciBnZW5lcmF0ZWRMaW5lID0gMTtcbiAgICB2YXIgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgIHZhciBwcmV2aW91c09yaWdpbmFsTGluZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gPSAwO1xuICAgIHZhciBwcmV2aW91c1NvdXJjZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzTmFtZSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IGFTdHIubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNhY2hlZFNlZ21lbnRzID0ge307XG4gICAgdmFyIHRlbXAgPSB7fTtcbiAgICB2YXIgb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuICAgIHZhciBnZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuICAgIHZhciBtYXBwaW5nLCBzdHIsIHNlZ21lbnQsIGVuZCwgdmFsdWU7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChhU3RyLmNoYXJBdChpbmRleCkgPT09ICc7Jykge1xuICAgICAgICBnZW5lcmF0ZWRMaW5lKys7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFTdHIuY2hhckF0KGluZGV4KSA9PT0gJywnKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbWFwcGluZyA9IG5ldyBNYXBwaW5nKCk7XG4gICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9IGdlbmVyYXRlZExpbmU7XG5cbiAgICAgICAgLy8gQmVjYXVzZSBlYWNoIG9mZnNldCBpcyBlbmNvZGVkIHJlbGF0aXZlIHRvIHRoZSBwcmV2aW91cyBvbmUsXG4gICAgICAgIC8vIG1hbnkgc2VnbWVudHMgb2Z0ZW4gaGF2ZSB0aGUgc2FtZSBlbmNvZGluZy4gV2UgY2FuIGV4cGxvaXQgdGhpc1xuICAgICAgICAvLyBmYWN0IGJ5IGNhY2hpbmcgdGhlIHBhcnNlZCB2YXJpYWJsZSBsZW5ndGggZmllbGRzIG9mIGVhY2ggc2VnbWVudCxcbiAgICAgICAgLy8gYWxsb3dpbmcgdXMgdG8gYXZvaWQgYSBzZWNvbmQgcGFyc2UgaWYgd2UgZW5jb3VudGVyIHRoZSBzYW1lXG4gICAgICAgIC8vIHNlZ21lbnQgYWdhaW4uXG4gICAgICAgIGZvciAoZW5kID0gaW5kZXg7IGVuZCA8IGxlbmd0aDsgZW5kKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2hhcklzTWFwcGluZ1NlcGFyYXRvcihhU3RyLCBlbmQpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gYVN0ci5zbGljZShpbmRleCwgZW5kKTtcblxuICAgICAgICBzZWdtZW50ID0gY2FjaGVkU2VnbWVudHNbc3RyXTtcbiAgICAgICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAgICBpbmRleCArPSBzdHIubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlZ21lbnQgPSBbXTtcbiAgICAgICAgICB3aGlsZSAoaW5kZXggPCBlbmQpIHtcbiAgICAgICAgICAgIGJhc2U2NFZscS5kZWNvZGUoYVN0ciwgaW5kZXgsIHRlbXApO1xuICAgICAgICAgICAgdmFsdWUgPSB0ZW1wLnZhbHVlO1xuICAgICAgICAgICAgaW5kZXggPSB0ZW1wLnJlc3Q7XG4gICAgICAgICAgICBzZWdtZW50LnB1c2godmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBhIHNvdXJjZSwgYnV0IG5vIGxpbmUgYW5kIGNvbHVtbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBhIHNvdXJjZSBhbmQgbGluZSwgYnV0IG5vIGNvbHVtbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhY2hlZFNlZ21lbnRzW3N0cl0gPSBzZWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2VuZXJhdGVkIGNvbHVtbi5cbiAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gPSBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiArIHNlZ21lbnRbMF07XG4gICAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG5cbiAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID4gMSkge1xuICAgICAgICAgIC8vIE9yaWdpbmFsIHNvdXJjZS5cbiAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IHByZXZpb3VzU291cmNlICsgc2VnbWVudFsxXTtcbiAgICAgICAgICBwcmV2aW91c1NvdXJjZSArPSBzZWdtZW50WzFdO1xuXG4gICAgICAgICAgLy8gT3JpZ2luYWwgbGluZS5cbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSA9IHByZXZpb3VzT3JpZ2luYWxMaW5lICsgc2VnbWVudFsyXTtcbiAgICAgICAgICBwcmV2aW91c09yaWdpbmFsTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lO1xuICAgICAgICAgIC8vIExpbmVzIGFyZSBzdG9yZWQgMC1iYXNlZFxuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxMaW5lICs9IDE7XG5cbiAgICAgICAgICAvLyBPcmlnaW5hbCBjb2x1bW4uXG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbiA9IHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gKyBzZWdtZW50WzNdO1xuICAgICAgICAgIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gPSBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG4gICAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgLy8gT3JpZ2luYWwgbmFtZS5cbiAgICAgICAgICAgIG1hcHBpbmcubmFtZSA9IHByZXZpb3VzTmFtZSArIHNlZ21lbnRbNF07XG4gICAgICAgICAgICBwcmV2aW91c05hbWUgKz0gc2VnbWVudFs0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKG1hcHBpbmcpO1xuICAgICAgICBpZiAodHlwZW9mIG1hcHBpbmcub3JpZ2luYWxMaW5lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIG9yaWdpbmFsTWFwcGluZ3MucHVzaChtYXBwaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHF1aWNrU29ydCQxKGdlbmVyYXRlZE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkKTtcbiAgICB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MgPSBnZW5lcmF0ZWRNYXBwaW5ncztcblxuICAgIHF1aWNrU29ydCQxKG9yaWdpbmFsTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMpO1xuICAgIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzID0gb3JpZ2luYWxNYXBwaW5ncztcbiAgfTtcblxuLyoqXG4gKiBGaW5kIHRoZSBtYXBwaW5nIHRoYXQgYmVzdCBtYXRjaGVzIHRoZSBoeXBvdGhldGljYWwgXCJuZWVkbGVcIiBtYXBwaW5nIHRoYXRcbiAqIHdlIGFyZSBzZWFyY2hpbmcgZm9yIGluIHRoZSBnaXZlbiBcImhheXN0YWNrXCIgb2YgbWFwcGluZ3MuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9maW5kTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2ZpbmRNYXBwaW5nKGFOZWVkbGUsIGFNYXBwaW5ncywgYUxpbmVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhQ29sdW1uTmFtZSwgYUNvbXBhcmF0b3IsIGFCaWFzKSB7XG4gICAgLy8gVG8gcmV0dXJuIHRoZSBwb3NpdGlvbiB3ZSBhcmUgc2VhcmNoaW5nIGZvciwgd2UgbXVzdCBmaXJzdCBmaW5kIHRoZVxuICAgIC8vIG1hcHBpbmcgZm9yIHRoZSBnaXZlbiBwb3NpdGlvbiBhbmQgdGhlbiByZXR1cm4gdGhlIG9wcG9zaXRlIHBvc2l0aW9uIGl0XG4gICAgLy8gcG9pbnRzIHRvLiBCZWNhdXNlIHRoZSBtYXBwaW5ncyBhcmUgc29ydGVkLCB3ZSBjYW4gdXNlIGJpbmFyeSBzZWFyY2ggdG9cbiAgICAvLyBmaW5kIHRoZSBiZXN0IG1hcHBpbmcuXG5cbiAgICBpZiAoYU5lZWRsZVthTGluZU5hbWVdIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0xpbmUgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMSwgZ290ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBhTmVlZGxlW2FMaW5lTmFtZV0pO1xuICAgIH1cbiAgICBpZiAoYU5lZWRsZVthQ29sdW1uTmFtZV0gPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb2x1bW4gbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMCwgZ290ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBhTmVlZGxlW2FDb2x1bW5OYW1lXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaC5zZWFyY2goYU5lZWRsZSwgYU1hcHBpbmdzLCBhQ29tcGFyYXRvciwgYUJpYXMpO1xuICB9O1xuXG4vKipcbiAqIENvbXB1dGUgdGhlIGxhc3QgY29sdW1uIGZvciBlYWNoIGdlbmVyYXRlZCBtYXBwaW5nLiBUaGUgbGFzdCBjb2x1bW4gaXNcbiAqIGluY2x1c2l2ZS5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29tcHV0ZUNvbHVtblNwYW5zID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfY29tcHV0ZUNvbHVtblNwYW5zKCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5ncy5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICAvLyBNYXBwaW5ncyBkbyBub3QgY29udGFpbiBhIGZpZWxkIGZvciB0aGUgbGFzdCBnZW5lcmF0ZWQgY29sdW1udC4gV2VcbiAgICAgIC8vIGNhbiBjb21lIHVwIHdpdGggYW4gb3B0aW1pc3RpYyBlc3RpbWF0ZSwgaG93ZXZlciwgYnkgYXNzdW1pbmcgdGhhdFxuICAgICAgLy8gbWFwcGluZ3MgYXJlIGNvbnRpZ3VvdXMgKGkuZS4gZ2l2ZW4gdHdvIGNvbnNlY3V0aXZlIG1hcHBpbmdzLCB0aGVcbiAgICAgIC8vIGZpcnN0IG1hcHBpbmcgZW5kcyB3aGVyZSB0aGUgc2Vjb25kIG9uZSBzdGFydHMpLlxuICAgICAgaWYgKGluZGV4ICsgMSA8IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzLmxlbmd0aCkge1xuICAgICAgICB2YXIgbmV4dE1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5nc1tpbmRleCArIDFdO1xuXG4gICAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgPT09IG5leHRNYXBwaW5nLmdlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgICBtYXBwaW5nLmxhc3RHZW5lcmF0ZWRDb2x1bW4gPSBuZXh0TWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gLSAxO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBsYXN0IG1hcHBpbmcgZm9yIGVhY2ggbGluZSBzcGFucyB0aGUgZW50aXJlIGxpbmUuXG4gICAgICBtYXBwaW5nLmxhc3RHZW5lcmF0ZWRDb2x1bW4gPSBJbmZpbml0eTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlLCBsaW5lLCBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgZ2VuZXJhdGVkXG4gKiBzb3VyY2UncyBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3RcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKiAgIC0gYmlhczogRWl0aGVyICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnU291cmNlTWFwQ29uc3VtZXIuTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG4gKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuICogICAgIERlZmF1bHRzIHRvICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUsIG9yIG51bGwuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBuYW1lOiBUaGUgb3JpZ2luYWwgaWRlbnRpZmllciwgb3IgbnVsbC5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUub3JpZ2luYWxQb3NpdGlvbkZvciA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX29yaWdpbmFsUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICB2YXIgbmVlZGxlID0ge1xuICAgICAgZ2VuZXJhdGVkTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG4gICAgICBnZW5lcmF0ZWRDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJylcbiAgICB9O1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZE1hcHBpbmcoXG4gICAgICBuZWVkbGUsXG4gICAgICB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5ncyxcbiAgICAgIFwiZ2VuZXJhdGVkTGluZVwiLFxuICAgICAgXCJnZW5lcmF0ZWRDb2x1bW5cIixcbiAgICAgIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQsXG4gICAgICB1dGlsLmdldEFyZyhhQXJncywgJ2JpYXMnLCBTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORClcbiAgICApO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICBpZiAobWFwcGluZy5nZW5lcmF0ZWRMaW5lID09PSBuZWVkbGUuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICB2YXIgc291cmNlID0gdXRpbC5nZXRBcmcobWFwcGluZywgJ3NvdXJjZScsIG51bGwpO1xuICAgICAgICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgICAgICAgc291cmNlID0gdGhpcy5fc291cmNlcy5hdChzb3VyY2UpO1xuICAgICAgICAgIHNvdXJjZSA9IHV0aWwuY29tcHV0ZVNvdXJjZVVSTCh0aGlzLnNvdXJjZVJvb3QsIHNvdXJjZSwgdGhpcy5fc291cmNlTWFwVVJMKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZSA9IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICduYW1lJywgbnVsbCk7XG4gICAgICAgIGlmIChuYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgbmFtZSA9IHRoaXMuX25hbWVzLmF0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ29yaWdpbmFsTGluZScsIG51bGwpLFxuICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ29yaWdpbmFsQ29sdW1uJywgbnVsbCksXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzb3VyY2U6IG51bGwsXG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgbmFtZTogbnVsbFxuICAgIH07XG4gIH07XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgd2UgaGF2ZSB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGV2ZXJ5IHNvdXJjZSBpbiB0aGUgc291cmNlXG4gKiBtYXAsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuaGFzQ29udGVudHNPZkFsbFNvdXJjZXMgPVxuICBmdW5jdGlvbiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyX2hhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzKCkge1xuICAgIGlmICghdGhpcy5zb3VyY2VzQ29udGVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudC5sZW5ndGggPj0gdGhpcy5fc291cmNlcy5zaXplKCkgJiZcbiAgICAgICF0aGlzLnNvdXJjZXNDb250ZW50LnNvbWUoZnVuY3Rpb24gKHNjKSB7IHJldHVybiBzYyA9PSBudWxsOyB9KTtcbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29udGVudC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgdGhlIHVybCBvZiB0aGVcbiAqIG9yaWdpbmFsIHNvdXJjZSBmaWxlLiBSZXR1cm5zIG51bGwgaWYgbm8gb3JpZ2luYWwgc291cmNlIGNvbnRlbnQgaXNcbiAqIGF2YWlsYWJsZS5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvciA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX3NvdXJjZUNvbnRlbnRGb3IoYVNvdXJjZSwgbnVsbE9uTWlzc2luZykge1xuICAgIGlmICghdGhpcy5zb3VyY2VzQ29udGVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZFNvdXJjZUluZGV4KGFTb3VyY2UpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudFtpbmRleF07XG4gICAgfVxuXG4gICAgdmFyIHJlbGF0aXZlU291cmNlID0gYVNvdXJjZTtcbiAgICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgIHJlbGF0aXZlU291cmNlID0gdXRpbC5yZWxhdGl2ZSh0aGlzLnNvdXJjZVJvb3QsIHJlbGF0aXZlU291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgdXJsO1xuICAgIGlmICh0aGlzLnNvdXJjZVJvb3QgIT0gbnVsbFxuICAgICAgICAmJiAodXJsID0gdXRpbC51cmxQYXJzZSh0aGlzLnNvdXJjZVJvb3QpKSkge1xuICAgICAgLy8gWFhYOiBmaWxlOi8vIFVSSXMgYW5kIGFic29sdXRlIHBhdGhzIGxlYWQgdG8gdW5leHBlY3RlZCBiZWhhdmlvciBmb3JcbiAgICAgIC8vIG1hbnkgdXNlcnMuIFdlIGNhbiBoZWxwIHRoZW0gb3V0IHdoZW4gdGhleSBleHBlY3QgZmlsZTovLyBVUklzIHRvXG4gICAgICAvLyBiZWhhdmUgbGlrZSBpdCB3b3VsZCBpZiB0aGV5IHdlcmUgcnVubmluZyBhIGxvY2FsIEhUVFAgc2VydmVyLiBTZWVcbiAgICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4NTU5Ny5cbiAgICAgIHZhciBmaWxlVXJpQWJzUGF0aCA9IHJlbGF0aXZlU291cmNlLnJlcGxhY2UoL15maWxlOlxcL1xcLy8sIFwiXCIpO1xuICAgICAgaWYgKHVybC5zY2hlbWUgPT0gXCJmaWxlXCJcbiAgICAgICAgICAmJiB0aGlzLl9zb3VyY2VzLmhhcyhmaWxlVXJpQWJzUGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlc0NvbnRlbnRbdGhpcy5fc291cmNlcy5pbmRleE9mKGZpbGVVcmlBYnNQYXRoKV1cbiAgICAgIH1cblxuICAgICAgaWYgKCghdXJsLnBhdGggfHwgdXJsLnBhdGggPT0gXCIvXCIpXG4gICAgICAgICAgJiYgdGhpcy5fc291cmNlcy5oYXMoXCIvXCIgKyByZWxhdGl2ZVNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlc0NvbnRlbnRbdGhpcy5fc291cmNlcy5pbmRleE9mKFwiL1wiICsgcmVsYXRpdmVTb3VyY2UpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgcmVjdXJzaXZlbHkgZnJvbVxuICAgIC8vIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvci4gSW4gdGhhdCBjYXNlLCB3ZVxuICAgIC8vIGRvbid0IHdhbnQgdG8gdGhyb3cgaWYgd2UgY2FuJ3QgZmluZCB0aGUgc291cmNlIC0gd2UganVzdCB3YW50IHRvXG4gICAgLy8gcmV0dXJuIG51bGwsIHNvIHdlIHByb3ZpZGUgYSBmbGFnIHRvIGV4aXQgZ3JhY2VmdWxseS5cbiAgICBpZiAobnVsbE9uTWlzc2luZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyByZWxhdGl2ZVNvdXJjZSArICdcIiBpcyBub3QgaW4gdGhlIFNvdXJjZU1hcC4nKTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIG9yaWdpbmFsIHNvdXJjZSxcbiAqIGxpbmUsIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3Qgd2l0aFxuICogdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBmaWxlbmFtZSBvZiB0aGUgb3JpZ2luYWwgc291cmNlLlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLiAgVGhlIGxpbmUgbnVtYmVyXG4gKiAgICAgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKiAgIC0gYmlhczogRWl0aGVyICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnU291cmNlTWFwQ29uc3VtZXIuTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG4gKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuICogICAgIERlZmF1bHRzIHRvICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgbGluZSBudW1iZXIgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuICogICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmdlbmVyYXRlZFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICB2YXIgc291cmNlID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2UnKTtcbiAgICBzb3VyY2UgPSB0aGlzLl9maW5kU291cmNlSW5kZXgoc291cmNlKTtcbiAgICBpZiAoc291cmNlIDwgMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGluZTogbnVsbCxcbiAgICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgICBsYXN0Q29sdW1uOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBuZWVkbGUgPSB7XG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIG9yaWdpbmFsTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG4gICAgICBvcmlnaW5hbENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nKVxuICAgIH07XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kTWFwcGluZyhcbiAgICAgIG5lZWRsZSxcbiAgICAgIHRoaXMuX29yaWdpbmFsTWFwcGluZ3MsXG4gICAgICBcIm9yaWdpbmFsTGluZVwiLFxuICAgICAgXCJvcmlnaW5hbENvbHVtblwiLFxuICAgICAgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyxcbiAgICAgIHV0aWwuZ2V0QXJnKGFBcmdzLCAnYmlhcycsIFNvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EKVxuICAgICk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzW2luZGV4XTtcblxuICAgICAgaWYgKG1hcHBpbmcuc291cmNlID09PSBuZWVkbGUuc291cmNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZExpbmUnLCBudWxsKSxcbiAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICBsYXN0Q29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnbGFzdEdlbmVyYXRlZENvbHVtbicsIG51bGwpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBjb2x1bW46IG51bGwsXG4gICAgICBsYXN0Q29sdW1uOiBudWxsXG4gICAgfTtcbiAgfTtcblxudmFyIEJhc2ljU291cmNlTWFwQ29uc3VtZXJfMSA9IEJhc2ljU291cmNlTWFwQ29uc3VtZXI7XG5cbi8qKlxuICogQW4gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyIGluc3RhbmNlIHJlcHJlc2VudHMgYSBwYXJzZWQgc291cmNlIG1hcCB3aGljaFxuICogd2UgY2FuIHF1ZXJ5IGZvciBpbmZvcm1hdGlvbi4gSXQgZGlmZmVycyBmcm9tIEJhc2ljU291cmNlTWFwQ29uc3VtZXIgaW5cbiAqIHRoYXQgaXQgdGFrZXMgXCJpbmRleGVkXCIgc291cmNlIG1hcHMgKGkuZS4gb25lcyB3aXRoIGEgXCJzZWN0aW9uc1wiIGZpZWxkKSBhc1xuICogaW5wdXQuXG4gKlxuICogVGhlIGZpcnN0IHBhcmFtZXRlciBpcyBhIHJhdyBzb3VyY2UgbWFwIChlaXRoZXIgYXMgYSBKU09OIHN0cmluZywgb3IgYWxyZWFkeVxuICogcGFyc2VkIHRvIGFuIG9iamVjdCkuIEFjY29yZGluZyB0byB0aGUgc3BlYyBmb3IgaW5kZXhlZCBzb3VyY2UgbWFwcywgdGhleVxuICogaGF2ZSB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKlxuICogICAtIHZlcnNpb246IFdoaWNoIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXAgc3BlYyB0aGlzIG1hcCBpcyBmb2xsb3dpbmcuXG4gKiAgIC0gZmlsZTogT3B0aW9uYWwuIFRoZSBnZW5lcmF0ZWQgZmlsZSB0aGlzIHNvdXJjZSBtYXAgaXMgYXNzb2NpYXRlZCB3aXRoLlxuICogICAtIHNlY3Rpb25zOiBBIGxpc3Qgb2Ygc2VjdGlvbiBkZWZpbml0aW9ucy5cbiAqXG4gKiBFYWNoIHZhbHVlIHVuZGVyIHRoZSBcInNlY3Rpb25zXCIgZmllbGQgaGFzIHR3byBmaWVsZHM6XG4gKiAgIC0gb2Zmc2V0OiBUaGUgb2Zmc2V0IGludG8gdGhlIG9yaWdpbmFsIHNwZWNpZmllZCBhdCB3aGljaCB0aGlzIHNlY3Rpb25cbiAqICAgICAgIGJlZ2lucyB0byBhcHBseSwgZGVmaW5lZCBhcyBhbiBvYmplY3Qgd2l0aCBhIFwibGluZVwiIGFuZCBcImNvbHVtblwiXG4gKiAgICAgICBmaWVsZC5cbiAqICAgLSBtYXA6IEEgc291cmNlIG1hcCBkZWZpbml0aW9uLiBUaGlzIHNvdXJjZSBtYXAgY291bGQgYWxzbyBiZSBpbmRleGVkLFxuICogICAgICAgYnV0IGRvZXNuJ3QgaGF2ZSB0byBiZS5cbiAqXG4gKiBJbnN0ZWFkIG9mIHRoZSBcIm1hcFwiIGZpZWxkLCBpdCdzIGFsc28gcG9zc2libGUgdG8gaGF2ZSBhIFwidXJsXCIgZmllbGRcbiAqIHNwZWNpZnlpbmcgYSBVUkwgdG8gcmV0cmlldmUgYSBzb3VyY2UgbWFwIGZyb20sIGJ1dCB0aGF0J3MgY3VycmVudGx5XG4gKiB1bnN1cHBvcnRlZC5cbiAqXG4gKiBIZXJlJ3MgYW4gZXhhbXBsZSBzb3VyY2UgbWFwLCB0YWtlbiBmcm9tIHRoZSBzb3VyY2UgbWFwIHNwZWNbMF0sIGJ1dFxuICogbW9kaWZpZWQgdG8gb21pdCBhIHNlY3Rpb24gd2hpY2ggdXNlcyB0aGUgXCJ1cmxcIiBmaWVsZC5cbiAqXG4gKiAge1xuICogICAgdmVyc2lvbiA6IDMsXG4gKiAgICBmaWxlOiBcImFwcC5qc1wiLFxuICogICAgc2VjdGlvbnM6IFt7XG4gKiAgICAgIG9mZnNldDoge2xpbmU6MTAwLCBjb2x1bW46MTB9LFxuICogICAgICBtYXA6IHtcbiAqICAgICAgICB2ZXJzaW9uIDogMyxcbiAqICAgICAgICBmaWxlOiBcInNlY3Rpb24uanNcIixcbiAqICAgICAgICBzb3VyY2VzOiBbXCJmb28uanNcIiwgXCJiYXIuanNcIl0sXG4gKiAgICAgICAgbmFtZXM6IFtcInNyY1wiLCBcIm1hcHNcIiwgXCJhcmVcIiwgXCJmdW5cIl0sXG4gKiAgICAgICAgbWFwcGluZ3M6IFwiQUFBQSxFOztBQkNERTtcIlxuICogICAgICB9XG4gKiAgICB9XSxcbiAqICB9XG4gKlxuICogVGhlIHNlY29uZCBwYXJhbWV0ZXIsIGlmIGdpdmVuLCBpcyBhIHN0cmluZyB3aG9zZSB2YWx1ZSBpcyB0aGUgVVJMXG4gKiBhdCB3aGljaCB0aGUgc291cmNlIG1hcCB3YXMgZm91bmQuICBUaGlzIFVSTCBpcyB1c2VkIHRvIGNvbXB1dGUgdGhlXG4gKiBzb3VyY2VzIGFycmF5LlxuICpcbiAqIFswXTogaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xVTFSR0FlaFF3UnlwVVRvdkYxS1JscGlPRnplMGItXzJnYzZmQUgwS1kway9lZGl0I2hlYWRpbmc9aC41MzVlczN4ZXByZ3RcbiAqL1xuZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyKGFTb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpIHtcbiAgdmFyIHNvdXJjZU1hcCA9IGFTb3VyY2VNYXA7XG4gIGlmICh0eXBlb2YgYVNvdXJjZU1hcCA9PT0gJ3N0cmluZycpIHtcbiAgICBzb3VyY2VNYXAgPSB1dGlsLnBhcnNlU291cmNlTWFwSW5wdXQoYVNvdXJjZU1hcCk7XG4gIH1cblxuICB2YXIgdmVyc2lvbiA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3ZlcnNpb24nKTtcbiAgdmFyIHNlY3Rpb25zID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc2VjdGlvbnMnKTtcblxuICBpZiAodmVyc2lvbiAhPSB0aGlzLl92ZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCB2ZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICB0aGlzLl9zb3VyY2VzID0gbmV3IEFycmF5U2V0JDEoKTtcbiAgdGhpcy5fbmFtZXMgPSBuZXcgQXJyYXlTZXQkMSgpO1xuXG4gIHZhciBsYXN0T2Zmc2V0ID0ge1xuICAgIGxpbmU6IC0xLFxuICAgIGNvbHVtbjogMFxuICB9O1xuICB0aGlzLl9zZWN0aW9ucyA9IHNlY3Rpb25zLm1hcChmdW5jdGlvbiAocykge1xuICAgIGlmIChzLnVybCkge1xuICAgICAgLy8gVGhlIHVybCBmaWVsZCB3aWxsIHJlcXVpcmUgc3VwcG9ydCBmb3IgYXN5bmNocm9uaWNpdHkuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9pc3N1ZXMvMTZcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3VwcG9ydCBmb3IgdXJsIGZpZWxkIGluIHNlY3Rpb25zIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgdmFyIG9mZnNldCA9IHV0aWwuZ2V0QXJnKHMsICdvZmZzZXQnKTtcbiAgICB2YXIgb2Zmc2V0TGluZSA9IHV0aWwuZ2V0QXJnKG9mZnNldCwgJ2xpbmUnKTtcbiAgICB2YXIgb2Zmc2V0Q29sdW1uID0gdXRpbC5nZXRBcmcob2Zmc2V0LCAnY29sdW1uJyk7XG5cbiAgICBpZiAob2Zmc2V0TGluZSA8IGxhc3RPZmZzZXQubGluZSB8fFxuICAgICAgICAob2Zmc2V0TGluZSA9PT0gbGFzdE9mZnNldC5saW5lICYmIG9mZnNldENvbHVtbiA8IGxhc3RPZmZzZXQuY29sdW1uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWN0aW9uIG9mZnNldHMgbXVzdCBiZSBvcmRlcmVkIGFuZCBub24tb3ZlcmxhcHBpbmcuJyk7XG4gICAgfVxuICAgIGxhc3RPZmZzZXQgPSBvZmZzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2VuZXJhdGVkT2Zmc2V0OiB7XG4gICAgICAgIC8vIFRoZSBvZmZzZXQgZmllbGRzIGFyZSAwLWJhc2VkLCBidXQgd2UgdXNlIDEtYmFzZWQgaW5kaWNlcyB3aGVuXG4gICAgICAgIC8vIGVuY29kaW5nL2RlY29kaW5nIGZyb20gVkxRLlxuICAgICAgICBnZW5lcmF0ZWRMaW5lOiBvZmZzZXRMaW5lICsgMSxcbiAgICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBvZmZzZXRDb2x1bW4gKyAxXG4gICAgICB9LFxuICAgICAgY29uc3VtZXI6IG5ldyBTb3VyY2VNYXBDb25zdW1lcih1dGlsLmdldEFyZyhzLCAnbWFwJyksIGFTb3VyY2VNYXBVUkwpXG4gICAgfVxuICB9KTtcbn1cblxuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlKTtcbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcHBpbmcgc3BlYyB0aGF0IHdlIGFyZSBjb25zdW1pbmcuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIG9yaWdpbmFsIHNvdXJjZXMuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnc291cmNlcycsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuX3NlY3Rpb25zW2ldLmNvbnN1bWVyLnNvdXJjZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgc291cmNlcy5wdXNoKHRoaXMuX3NlY3Rpb25zW2ldLmNvbnN1bWVyLnNvdXJjZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc291cmNlcztcbiAgfVxufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlLCBsaW5lLCBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgZ2VuZXJhdGVkXG4gKiBzb3VyY2UncyBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3RcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUsIG9yIG51bGwuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBuYW1lOiBUaGUgb3JpZ2luYWwgaWRlbnRpZmllciwgb3IgbnVsbC5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5vcmlnaW5hbFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX29yaWdpbmFsUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICB2YXIgbmVlZGxlID0ge1xuICAgICAgZ2VuZXJhdGVkTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG4gICAgICBnZW5lcmF0ZWRDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJylcbiAgICB9O1xuXG4gICAgLy8gRmluZCB0aGUgc2VjdGlvbiBjb250YWluaW5nIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb24gd2UncmUgdHJ5aW5nIHRvIG1hcFxuICAgIC8vIHRvIGFuIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgIHZhciBzZWN0aW9uSW5kZXggPSBiaW5hcnlTZWFyY2guc2VhcmNoKG5lZWRsZSwgdGhpcy5fc2VjdGlvbnMsXG4gICAgICBmdW5jdGlvbihuZWVkbGUsIHNlY3Rpb24pIHtcbiAgICAgICAgdmFyIGNtcCA9IG5lZWRsZS5nZW5lcmF0ZWRMaW5lIC0gc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZTtcbiAgICAgICAgaWYgKGNtcCkge1xuICAgICAgICAgIHJldHVybiBjbXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5lZWRsZS5nZW5lcmF0ZWRDb2x1bW4gLVxuICAgICAgICAgICAgICAgIHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbik7XG4gICAgICB9KTtcbiAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW3NlY3Rpb25JbmRleF07XG5cbiAgICBpZiAoIXNlY3Rpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNvdXJjZTogbnVsbCxcbiAgICAgICAgbGluZTogbnVsbCxcbiAgICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgICBuYW1lOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9uLmNvbnN1bWVyLm9yaWdpbmFsUG9zaXRpb25Gb3Ioe1xuICAgICAgbGluZTogbmVlZGxlLmdlbmVyYXRlZExpbmUgLVxuICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgY29sdW1uOiBuZWVkbGUuZ2VuZXJhdGVkQ29sdW1uIC1cbiAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgPT09IG5lZWRsZS5nZW5lcmF0ZWRMaW5lXG4gICAgICAgICA/IHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbiAtIDFcbiAgICAgICAgIDogMCksXG4gICAgICBiaWFzOiBhQXJncy5iaWFzXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgd2UgaGF2ZSB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGV2ZXJ5IHNvdXJjZSBpbiB0aGUgc291cmNlXG4gKiBtYXAsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5oYXNDb250ZW50c09mQWxsU291cmNlcyA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9oYXNDb250ZW50c09mQWxsU291cmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdGlvbnMuZXZlcnkoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBzLmNvbnN1bWVyLmhhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzKCk7XG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlIGNvbnRlbnQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIHRoZSB1cmwgb2YgdGhlXG4gKiBvcmlnaW5hbCBzb3VyY2UgZmlsZS4gUmV0dXJucyBudWxsIGlmIG5vIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50IGlzXG4gKiBhdmFpbGFibGUuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvciA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9zb3VyY2VDb250ZW50Rm9yKGFTb3VyY2UsIG51bGxPbk1pc3NpbmcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW2ldO1xuXG4gICAgICB2YXIgY29udGVudCA9IHNlY3Rpb24uY29uc3VtZXIuc291cmNlQ29udGVudEZvcihhU291cmNlLCB0cnVlKTtcbiAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobnVsbE9uTWlzc2luZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBhU291cmNlICsgJ1wiIGlzIG5vdCBpbiB0aGUgU291cmNlTWFwLicpO1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgb3JpZ2luYWwgc291cmNlLFxuICogbGluZSwgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoXG4gKiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIHNvdXJjZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBjb2x1bW5cbiAqICAgICBudW1iZXIgaXMgMC1iYXNlZC5cbiAqXG4gKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLiBcbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuICogICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZ2VuZXJhdGVkUG9zaXRpb25Gb3IgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW2ldO1xuXG4gICAgICAvLyBPbmx5IGNvbnNpZGVyIHRoaXMgc2VjdGlvbiBpZiB0aGUgcmVxdWVzdGVkIHNvdXJjZSBpcyBpbiB0aGUgbGlzdCBvZlxuICAgICAgLy8gc291cmNlcyBvZiB0aGUgY29uc3VtZXIuXG4gICAgICBpZiAoc2VjdGlvbi5jb25zdW1lci5fZmluZFNvdXJjZUluZGV4KHV0aWwuZ2V0QXJnKGFBcmdzLCAnc291cmNlJykpID09PSAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHZhciBnZW5lcmF0ZWRQb3NpdGlvbiA9IHNlY3Rpb24uY29uc3VtZXIuZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpO1xuICAgICAgaWYgKGdlbmVyYXRlZFBvc2l0aW9uKSB7XG4gICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgbGluZTogZ2VuZXJhdGVkUG9zaXRpb24ubGluZSArXG4gICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgICAgIGNvbHVtbjogZ2VuZXJhdGVkUG9zaXRpb24uY29sdW1uICtcbiAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lID09PSBnZW5lcmF0ZWRQb3NpdGlvbi5saW5lXG4gICAgICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG4gICAgICAgICAgICAgOiAwKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgY29sdW1uOiBudWxsXG4gICAgfTtcbiAgfTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG4gKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbiAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3BhcnNlTWFwcGluZ3MgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuICAgIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tpXTtcbiAgICAgIHZhciBzZWN0aW9uTWFwcGluZ3MgPSBzZWN0aW9uLmNvbnN1bWVyLl9nZW5lcmF0ZWRNYXBwaW5ncztcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VjdGlvbk1hcHBpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBtYXBwaW5nID0gc2VjdGlvbk1hcHBpbmdzW2pdO1xuXG4gICAgICAgIHZhciBzb3VyY2UgPSBzZWN0aW9uLmNvbnN1bWVyLl9zb3VyY2VzLmF0KG1hcHBpbmcuc291cmNlKTtcbiAgICAgICAgc291cmNlID0gdXRpbC5jb21wdXRlU291cmNlVVJMKHNlY3Rpb24uY29uc3VtZXIuc291cmNlUm9vdCwgc291cmNlLCB0aGlzLl9zb3VyY2VNYXBVUkwpO1xuICAgICAgICB0aGlzLl9zb3VyY2VzLmFkZChzb3VyY2UpO1xuICAgICAgICBzb3VyY2UgPSB0aGlzLl9zb3VyY2VzLmluZGV4T2Yoc291cmNlKTtcblxuICAgICAgICB2YXIgbmFtZSA9IG51bGw7XG4gICAgICAgIGlmIChtYXBwaW5nLm5hbWUpIHtcbiAgICAgICAgICBuYW1lID0gc2VjdGlvbi5jb25zdW1lci5fbmFtZXMuYXQobWFwcGluZy5uYW1lKTtcbiAgICAgICAgICB0aGlzLl9uYW1lcy5hZGQobmFtZSk7XG4gICAgICAgICAgbmFtZSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgbWFwcGluZ3MgY29taW5nIGZyb20gdGhlIGNvbnN1bWVyIGZvciB0aGUgc2VjdGlvbiBoYXZlXG4gICAgICAgIC8vIGdlbmVyYXRlZCBwb3NpdGlvbnMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBzZWN0aW9uLCBzbyB3ZVxuICAgICAgICAvLyBuZWVkIHRvIG9mZnNldCB0aGVtIHRvIGJlIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgY29uY2F0ZW5hdGVkXG4gICAgICAgIC8vIGdlbmVyYXRlZCBmaWxlLlxuICAgICAgICB2YXIgYWRqdXN0ZWRNYXBwaW5nID0ge1xuICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgIGdlbmVyYXRlZExpbmU6IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSArXG4gICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgICAgIGdlbmVyYXRlZENvbHVtbjogbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gK1xuICAgICAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgPT09IG1hcHBpbmcuZ2VuZXJhdGVkTGluZVxuICAgICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG4gICAgICAgICAgICA6IDApLFxuICAgICAgICAgIG9yaWdpbmFsTGluZTogbWFwcGluZy5vcmlnaW5hbExpbmUsXG4gICAgICAgICAgb3JpZ2luYWxDb2x1bW46IG1hcHBpbmcub3JpZ2luYWxDb2x1bW4sXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKGFkanVzdGVkTWFwcGluZyk7XG4gICAgICAgIGlmICh0eXBlb2YgYWRqdXN0ZWRNYXBwaW5nLm9yaWdpbmFsTGluZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncy5wdXNoKGFkanVzdGVkTWFwcGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWlja1NvcnQkMSh0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQpO1xuICAgIHF1aWNrU29ydCQxKHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zKTtcbiAgfTtcblxudmFyIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl8xID0gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyO1xuXG52YXIgc291cmNlTWFwQ29uc3VtZXIgPSB7XG5cdFNvdXJjZU1hcENvbnN1bWVyOiBTb3VyY2VNYXBDb25zdW1lcl8xLFxuXHRCYXNpY1NvdXJjZU1hcENvbnN1bWVyOiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyXzEsXG5cdEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcjogSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyXzFcbn07XG5cbnZhciBTb3VyY2VNYXBDb25zdW1lciQxID0gc291cmNlTWFwQ29uc3VtZXIuU291cmNlTWFwQ29uc3VtZXI7XG5cbmZ1bmN0aW9uIGdldF9zb3VyY2VtYXBfdXJsKGNvbnRlbnRzKSB7XHJcbiAgICBjb25zdCByZXZlcnNlZCA9IGNvbnRlbnRzXHJcbiAgICAgICAgLnNwbGl0KCdcXG4nKVxyXG4gICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAuam9pbignXFxuJyk7XHJcbiAgICBjb25zdCBtYXRjaCA9IC9cXC9bLypdI1sgXFx0XStzb3VyY2VNYXBwaW5nVVJMPShbXlxccydcIl0rPykoPzpbIFxcdF0rfCQpL2dtLmV4ZWMocmV2ZXJzZWQpO1xyXG4gICAgaWYgKG1hdGNoKVxyXG4gICAgICAgIHJldHVybiBtYXRjaFsxXTtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuY29uc3QgZmlsZV9jYWNoZSA9IG5ldyBNYXAoKTtcclxuZnVuY3Rpb24gZ2V0X2ZpbGVfY29udGVudHMoZmlsZV9wYXRoKSB7XHJcbiAgICBpZiAoZmlsZV9jYWNoZS5oYXMoZmlsZV9wYXRoKSkge1xyXG4gICAgICAgIHJldHVybiBmaWxlX2NhY2hlLmdldChmaWxlX3BhdGgpO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVfcGF0aCwgJ3V0ZjgnKTtcclxuICAgICAgICBmaWxlX2NhY2hlLnNldChmaWxlX3BhdGgsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzb3VyY2VtYXBfc3RhY2t0cmFjZShzdGFjaykge1xyXG4gICAgY29uc3QgcmVwbGFjZSA9IChsaW5lKSA9PiBsaW5lLnJlcGxhY2UoL14gezR9YXQgKD86KC4rPylcXHMrXFwoKT8oPzooLis/KTooXFxkKykoPzo6KFxcZCspKT8pXFwpPy8sIChpbnB1dCwgdmFyX25hbWUsIGZpbGVfcGF0aCwgbGluZV9udW0sIGNvbHVtbikgPT4ge1xyXG4gICAgICAgIGlmICghZmlsZV9wYXRoKVxyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgY29uc3QgY29udGVudHMgPSBnZXRfZmlsZV9jb250ZW50cyhmaWxlX3BhdGgpO1xyXG4gICAgICAgIGlmICghY29udGVudHMpXHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICBjb25zdCBzb3VyY2VtYXBfdXJsID0gZ2V0X3NvdXJjZW1hcF91cmwoY29udGVudHMpO1xyXG4gICAgICAgIGlmICghc291cmNlbWFwX3VybClcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgICAgIGxldCBkaXIgPSBwYXRoLmRpcm5hbWUoZmlsZV9wYXRoKTtcclxuICAgICAgICBsZXQgc291cmNlbWFwX2RhdGE7XHJcbiAgICAgICAgaWYgKC9eZGF0YTphcHBsaWNhdGlvblxcL2pzb25bXixdK2Jhc2U2NCwvLnRlc3Qoc291cmNlbWFwX3VybCkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmF3X2RhdGEgPSBzb3VyY2VtYXBfdXJsLnNsaWNlKHNvdXJjZW1hcF91cmwuaW5kZXhPZignLCcpICsgMSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VtYXBfZGF0YSA9IEJ1ZmZlci5mcm9tKHJhd19kYXRhLCAnYmFzZTY0JykudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlbWFwX3BhdGggPSBwYXRoLnJlc29sdmUoZGlyLCBzb3VyY2VtYXBfdXJsKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGdldF9maWxlX2NvbnRlbnRzKHNvdXJjZW1hcF9wYXRoKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgICAgICAgICBzb3VyY2VtYXBfZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIGRpciA9IHBhdGguZGlybmFtZShzb3VyY2VtYXBfcGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByYXdfc291cmNlbWFwO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJhd19zb3VyY2VtYXAgPSBKU09OLnBhcnNlKHNvdXJjZW1hcF9kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKF9iKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29uc3VtZXIgPSBuZXcgU291cmNlTWFwQ29uc3VtZXIkMShyYXdfc291cmNlbWFwKTtcclxuICAgICAgICBjb25zdCBwb3MgPSBjb25zdW1lci5vcmlnaW5hbFBvc2l0aW9uRm9yKHtcclxuICAgICAgICAgICAgbGluZTogTnVtYmVyKGxpbmVfbnVtKSxcclxuICAgICAgICAgICAgY29sdW1uOiBOdW1iZXIoY29sdW1uKSxcclxuICAgICAgICAgICAgYmlhczogU291cmNlTWFwQ29uc3VtZXIkMS5MRUFTVF9VUFBFUl9CT1VORFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghcG9zLnNvdXJjZSlcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZV9wYXRoID0gcGF0aC5yZXNvbHZlKGRpciwgcG9zLnNvdXJjZSk7XHJcbiAgICAgICAgY29uc3Qgc291cmNlID0gYCR7c291cmNlX3BhdGh9OiR7cG9zLmxpbmUgfHwgMH06JHtwb3MuY29sdW1uIHx8IDB9YDtcclxuICAgICAgICBpZiAoIXZhcl9uYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gYCAgICBhdCAke3NvdXJjZX1gO1xyXG4gICAgICAgIHJldHVybiBgICAgIGF0ICR7dmFyX25hbWV9ICgke3NvdXJjZX0pYDtcclxuICAgIH0pO1xyXG4gICAgZmlsZV9jYWNoZS5jbGVhcigpO1xyXG4gICAgcmV0dXJuIHN0YWNrXHJcbiAgICAgICAgLnNwbGl0KCdcXG4nKVxyXG4gICAgICAgIC5tYXAocmVwbGFjZSlcclxuICAgICAgICAuam9pbignXFxuJyk7XHJcbn1cblxuZnVuY3Rpb24gZ2V0X3BhZ2VfaGFuZGxlcihtYW5pZmVzdCwgc2Vzc2lvbl9nZXR0ZXIpIHtcclxuICAgIGNvbnN0IGdldF9idWlsZF9pbmZvID0gZGV2XHJcbiAgICAgICAgPyAoKSA9PiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnYnVpbGQuanNvbicpLCAndXRmLTgnKSlcclxuICAgICAgICA6IChhc3NldHMgPT4gKCkgPT4gYXNzZXRzKShKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnYnVpbGQuanNvbicpLCAndXRmLTgnKSkpO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkZXZcclxuICAgICAgICA/ICgpID0+IHJlYWRfdGVtcGxhdGUoc3JjX2RpcilcclxuICAgICAgICA6IChzdHIgPT4gKCkgPT4gc3RyKShyZWFkX3RlbXBsYXRlKGJ1aWxkX2RpcikpO1xyXG4gICAgY29uc3QgaGFzX3NlcnZpY2Vfd29ya2VyID0gZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnc2VydmljZS13b3JrZXIuanMnKSk7XHJcbiAgICBjb25zdCB7IHBhZ2VzLCBlcnJvcjogZXJyb3Jfcm91dGUgfSA9IG1hbmlmZXN0O1xyXG4gICAgZnVuY3Rpb24gYmFpbChyZXMsIGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZGV2ID8gZXNjYXBlX2h0bWwodHlwZW9mIGVyciA9PT0gJ3N0cmluZycgPyBlcnIgOiBlcnIubWVzc2FnZSkgOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJztcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgICAgICByZXMuZW5kKGA8cHJlPiR7bWVzc2FnZX08L3ByZT5gKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZV9lcnJvcihyZXEsIHJlcywgc3RhdHVzQ29kZSwgZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVfcGFnZSh7XHJcbiAgICAgICAgICAgIHBhdHRlcm46IG51bGwsXHJcbiAgICAgICAgICAgIHBhcnRzOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IG51bGwsIGNvbXBvbmVudDogeyBkZWZhdWx0OiBlcnJvcl9yb3V0ZSB9IH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHJlcSwgcmVzLCBzdGF0dXNDb2RlLCBlcnJvciB8fCAnVW5rbm93biBlcnJvcicpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlX3BhZ2UocGFnZSwgcmVxLCByZXMsIHN0YXR1cyA9IDIwMCwgZXJyb3IgPSBudWxsKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc19zZXJ2aWNlX3dvcmtlcl9pbmRleCA9IHJlcS5wYXRoID09PSAnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnO1xyXG4gICAgICAgICAgICBjb25zdCBidWlsZF9pbmZvID0gZ2V0X2J1aWxkX2luZm8oKTtcclxuICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xyXG4gICAgICAgICAgICAvLyBwcmVsb2FkIG1haW4ganMgYW5kIGNzc1xyXG4gICAgICAgICAgICAvLyBUT0RPIGRldGVjdCBvdGhlciBzdHVmZiB3ZSBjYW4gcHJlbG9hZCBsaWtlIGZvbnRzP1xyXG4gICAgICAgICAgICBsZXQgcHJlbG9hZF9maWxlcyA9IEFycmF5LmlzQXJyYXkoYnVpbGRfaW5mby5hc3NldHMubWFpbikgPyBidWlsZF9pbmZvLmFzc2V0cy5tYWluIDogW2J1aWxkX2luZm8uYXNzZXRzLm1haW5dO1xyXG4gICAgICAgICAgICBpZiAoKF9hID0gYnVpbGRfaW5mbyA9PT0gbnVsbCB8fCBidWlsZF9pbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidWlsZF9pbmZvLmNzcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1haW4pIHtcclxuICAgICAgICAgICAgICAgIHByZWxvYWRfZmlsZXMgPSBwcmVsb2FkX2ZpbGVzLmNvbmNhdCgoX2IgPSBidWlsZF9pbmZvID09PSBudWxsIHx8IGJ1aWxkX2luZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1aWxkX2luZm8uY3NzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubWFpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGVzNl9wcmVsb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChidWlsZF9pbmZvLmJ1bmRsZXIgPT09ICdyb2xsdXAnKSB7XHJcbiAgICAgICAgICAgICAgICBlczZfcHJlbG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZSA9IHBhZ2UucGFydHNbcGFnZS5wYXJ0cy5sZW5ndGggLSAxXS5maWxlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwcyA9IGJ1aWxkX2luZm8uZGVwZW5kZW5jaWVzW3JvdXRlXTtcclxuICAgICAgICAgICAgICAgIGlmIChkZXBzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlbG9hZF9maWxlcyA9IHByZWxvYWRfZmlsZXMuY29uY2F0KGRlcHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFlcnJvciAmJiAhaXNfc2VydmljZV93b3JrZXJfaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHBhZ2UucGFydHMuZm9yRWFjaChwYXJ0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25jYXQgYmVjYXVzZSBpdCBjb3VsZCBiZSBhIHN0cmluZyBvciBhbiBhcnJheS4gdGhhbmtzIHdlYnBhY2shXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlbG9hZF9maWxlcyA9IHByZWxvYWRfZmlsZXMuY29uY2F0KGJ1aWxkX2luZm8uYXNzZXRzW3BhcnQubmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbGluayA9IHByZWxvYWRfZmlsZXNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSkgLy8gcmVtb3ZlIGFueSBkdXBsaWNhdGVzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZSAmJiAhZmlsZS5tYXRjaCgvXFwubWFwJC8pKSAvLyBleGNsdWRlIHNvdXJjZSBtYXBzXHJcbiAgICAgICAgICAgICAgICAubWFwKChmaWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcyA9IC9cXC5jc3MkLy50ZXN0KGZpbGUpID8gJ3N0eWxlJyA6ICdzY3JpcHQnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVsID0gZXM2X3ByZWxvYWQgJiYgYXMgPT09ICdzY3JpcHQnID8gJ21vZHVsZXByZWxvYWQnIDogJ3ByZWxvYWQnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8JHtyZXEuYmFzZVVybH0vY2xpZW50LyR7ZmlsZX0+O3JlbD1cIiR7cmVsfVwiO2FzPVwiJHthc31cImA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuam9pbignLCAnKTtcclxuICAgICAgICAgICAgcmVzLnNldEhlYWRlcignTGluaycsIGxpbmspO1xyXG4gICAgICAgICAgICBsZXQgc2Vzc2lvbjtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNlc3Npb24gPSB5aWVsZCBzZXNzaW9uX2dldHRlcihyZXEsIHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhaWwocmVzLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZWRpcmVjdDtcclxuICAgICAgICAgICAgbGV0IHByZWxvYWRfZXJyb3I7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWxvYWRfY29udGV4dCA9IHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiAoc3RhdHVzQ29kZSwgbG9jYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QgJiYgKHJlZGlyZWN0LnN0YXR1c0NvZGUgIT09IHN0YXR1c0NvZGUgfHwgcmVkaXJlY3QubG9jYXRpb24gIT09IGxvY2F0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZsaWN0aW5nIHJlZGlyZWN0cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uLnJlcGxhY2UoL15cXC8vZywgJycpOyAvLyBsZWFkaW5nIHNsYXNoIChvbmx5KVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0ID0geyBzdGF0dXNDb2RlLCBsb2NhdGlvbiB9O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoc3RhdHVzQ29kZSwgbWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRfZXJyb3IgPSB7IHN0YXR1c0NvZGUsIG1lc3NhZ2UgfTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmZXRjaDogKHVybCwgb3B0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3RvY29sID0gcmVxLnNvY2tldC5lbmNyeXB0ZWQgPyAnaHR0cHMnIDogJ2h0dHAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBVcmwuVVJMKHVybCwgYCR7cHJvdG9jb2x9Oi8vMTI3LjAuMC4xOiR7cHJvY2Vzcy5lbnYuUE9SVH0ke3JlcS5iYXNlVXJsID8gcmVxLmJhc2VVcmwgKyAnLycgOiAnJ31gKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5jbHVkZV9jcmVkZW50aWFscyA9IChvcHRzLmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5jcmVkZW50aWFscyAhPT0gJ29taXQnICYmIHBhcnNlZC5vcmlnaW4gPT09IGAke3Byb3RvY29sfTovLzEyNy4wLjAuMToke3Byb2Nlc3MuZW52LlBPUlR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVfY3JlZGVudGlhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5oZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cy5oZWFkZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29va2llcyA9IE9iamVjdC5hc3NpZ24oe30sIHBhcnNlXzEocmVxLmhlYWRlcnMuY29va2llIHx8ICcnKSwgcGFyc2VfMShvcHRzLmhlYWRlcnMuY29va2llIHx8ICcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldF9jb29raWUgPSByZXMuZ2V0SGVhZGVyKCdTZXQtQ29va2llJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHNldF9jb29raWUpID8gc2V0X2Nvb2tpZSA6IFtzZXRfY29va2llXSkuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbSA9IC8oW149XSspPShbXjtdKykvLmV4ZWMocyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29raWVzW21bMV1dID0gbVsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IE9iamVjdC5rZXlzKGNvb2tpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBgJHtrZXl9PSR7Y29va2llc1trZXldfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignOyAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5oZWFkZXJzLmNvb2tpZSA9IHN0cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLmhlYWRlcnMuYXV0aG9yaXphdGlvbiAmJiByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKHBhcnNlZC5ocmVmLCBvcHRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGV0IHByZWxvYWRlZDtcclxuICAgICAgICAgICAgbGV0IG1hdGNoO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdF9wcmVsb2FkID0gbWFuaWZlc3Qucm9vdF9jb21wLnByZWxvYWQgfHwgKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb290X3ByZWxvYWRlZCA9IHJvb3RfcHJlbG9hZC5jYWxsKHByZWxvYWRfY29udGV4dCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvc3Q6IHJlcS5oZWFkZXJzLmhvc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcmVxLnBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHJlcS5xdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICAgICAgICAgICAgICB9LCBzZXNzaW9uKTtcclxuICAgICAgICAgICAgICAgIG1hdGNoID0gZXJyb3IgPyBudWxsIDogcGFnZS5wYXR0ZXJuLmV4ZWMocmVxLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvUHJlbG9hZCA9IFtyb290X3ByZWxvYWRlZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzX3NlcnZpY2Vfd29ya2VyX2luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9QcmVsb2FkID0gdG9QcmVsb2FkLmNvbmNhdChwYWdlLnBhcnRzLm1hcChwYXJ0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBkZWVwZXN0IGxldmVsIGlzIHVzZWQgYmVsb3csIHRvIGluaXRpYWxpc2UgdGhlIHN0b3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHBhcnQucGFyYW1zID8gcGFydC5wYXJhbXMobWF0Y2gpIDoge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0LmNvbXBvbmVudC5wcmVsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBhcnQuY29tcG9uZW50LnByZWxvYWQuY2FsbChwcmVsb2FkX2NvbnRleHQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0OiByZXEuaGVhZGVycy5ob3N0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHJlcS5wYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiByZXEucXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBzZXNzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fTtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcmVsb2FkZWQgPSB5aWVsZCBQcm9taXNlLmFsbCh0b1ByZWxvYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWlsKHJlcywgZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByZWxvYWRfZXJyb3IgPSB7IHN0YXR1c0NvZGU6IDUwMCwgbWVzc2FnZTogZXJyIH07XHJcbiAgICAgICAgICAgICAgICBwcmVsb2FkZWQgPSBbXTsgLy8gYXBwZWFzZSBUeXBlU2NyaXB0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gVXJsLnJlc29sdmUoKHJlcS5iYXNlVXJsIHx8ICcnKSArICcvJywgcmVkaXJlY3QubG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gcmVkaXJlY3Quc3RhdHVzQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdMb2NhdGlvbicsIGxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuZW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHByZWxvYWRfZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZV9lcnJvcihyZXEsIHJlcywgcHJlbG9hZF9lcnJvci5zdGF0dXNDb2RlLCBwcmVsb2FkX2Vycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFpbChyZXMsIHByZWxvYWRfZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRzID0gcmVxLnBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIG1ha2UgdGhpcyBsZXNzIGNvbmZ1c2luZ1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGF5b3V0X3NlZ21lbnRzID0gW3NlZ21lbnRzWzBdXTtcclxuICAgICAgICAgICAgICAgIGxldCBsID0gMTtcclxuICAgICAgICAgICAgICAgIHBhZ2UucGFydHMuZm9yRWFjaCgocGFydCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dF9zZWdtZW50c1tsXSA9IHNlZ21lbnRzW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGwrKztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3Iuc3RhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5zdGFjayA9IHNvdXJjZW1hcF9zdGFja3RyYWNlKGVycm9yLnN0YWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VDb250ZXh0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvc3Q6IHJlcS5oZWFkZXJzLmhvc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcmVxLnBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHJlcS5xdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IG1lc3NhZ2U6IGVycm9yLCBuYW1lOiAnUHJlbG9hZEVycm9yJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmU6IHdyaXRhYmxlKHBhZ2VDb250ZXh0KS5zdWJzY3JpYmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlOiB3cml0YWJsZShudWxsKS5zdWJzY3JpYmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbjogd3JpdGFibGUoc2Vzc2lvbilcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzOiBsYXlvdXRfc2VnbWVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBlcnJvciA/IHN0YXR1cyA6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogcGFnZUNvbnRleHQuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBwcmVsb2FkZWRbMF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsMToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50OiBzZWdtZW50c1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNfc2VydmljZV93b3JrZXJfaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGV2ZWxfaW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZS5wYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFnZS5wYXJ0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW2BsZXZlbCR7bGV2ZWxfaW5kZXgrK31gXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcGFydC5jb21wb25lbnQuZGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBwcmVsb2FkZWRbaSArIDFdIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudDogc2VnbWVudHNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGh0bWwsIGhlYWQsIGNzcyB9ID0gQXBwLnJlbmRlcihwcm9wcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRlZDogYFske3ByZWxvYWRlZC5tYXAoZGF0YSA9PiB0cnlfc2VyaWFsaXplKGRhdGEsIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBzZXJpYWxpemUgcHJlbG9hZGVkIGRhdGEgdG8gdHJhbnNtaXQgdG8gdGhlIGNsaWVudCBhdCB0aGUgLyR7c2VnbWVudHMuam9pbignLycpfSByb3V0ZTogJHtlcnIubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgY2xpZW50IHdpbGwgcmUtcmVuZGVyIG92ZXIgdGhlIHNlcnZlci1yZW5kZXJlZCBwYWdlIGZyZXNoIGluc3RlYWQgb2YgY29udGludWluZyB3aGVyZSBpdCBsZWZ0IG9mZi4gU2VlIGh0dHBzOi8vc2FwcGVyLnN2ZWx0ZS5kZXYvZG9jcyNSZXR1cm5fdmFsdWUgZm9yIG1vcmUgaW5mb3JtYXRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSkuam9pbignLCcpfV1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb246IHNlc3Npb24gJiYgdHJ5X3NlcmlhbGl6ZShzZXNzaW9uLCBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBzZXJpYWxpemUgc2Vzc2lvbiBkYXRhOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvciAmJiBzZXJpYWxpemVfZXJyb3IocHJvcHMuZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjcmlwdCA9IGBfX1NBUFBFUl9fPXske1tcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciAmJiBgZXJyb3I6JHtzZXJpYWxpemVkLmVycm9yfSxzdGF0dXM6JHtzdGF0dXN9YCxcclxuICAgICAgICAgICAgICAgICAgICBgYmFzZVVybDpcIiR7cmVxLmJhc2VVcmx9XCJgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWQucHJlbG9hZGVkICYmIGBwcmVsb2FkZWQ6JHtzZXJpYWxpemVkLnByZWxvYWRlZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWQuc2Vzc2lvbiAmJiBgc2Vzc2lvbjoke3NlcmlhbGl6ZWQuc2Vzc2lvbn1gXHJcbiAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcsJyl9fTtgO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc19zZXJ2aWNlX3dvcmtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdCArPSBgaWYoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciluYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignJHtyZXEuYmFzZVVybH0vc2VydmljZS13b3JrZXIuanMnKTtgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IFtdLmNvbmNhdChidWlsZF9pbmZvLmFzc2V0cy5tYWluKS5maWx0ZXIoZiA9PiBmICYmIC9cXC5qcyQvLnRlc3QoZikpWzBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbiA9IGAke3JlcS5iYXNlVXJsfS9jbGllbnQvJHtmaWxlfWA7XHJcbiAgICAgICAgICAgICAgICAvLyB1c2VycyBjYW4gc2V0IGEgQ1NQIG5vbmNlIHVzaW5nIHJlcy5sb2NhbHMubm9uY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vbmNlX3ZhbHVlID0gKHJlcy5sb2NhbHMgJiYgcmVzLmxvY2Fscy5ub25jZSkgPyByZXMubG9jYWxzLm5vbmNlIDogJyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub25jZV9hdHRyID0gbm9uY2VfdmFsdWUgPyBgIG5vbmNlPVwiJHtub25jZV92YWx1ZX1cImAgOiAnJztcclxuICAgICAgICAgICAgICAgIGlmIChidWlsZF9pbmZvLmJ1bmRsZXIgPT09ICdyb2xsdXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1aWxkX2luZm8ubGVnYWN5X2Fzc2V0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWdhY3lfbWFpbiA9IGAke3JlcS5iYXNlVXJsfS9jbGllbnQvbGVnYWN5LyR7YnVpbGRfaW5mby5sZWdhY3lfYXNzZXRzLm1haW59YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0ICs9IGAoZnVuY3Rpb24oKXt0cnl7ZXZhbChcImFzeW5jIGZ1bmN0aW9uIHgoKXt9XCIpO3ZhciBtYWluPVwiJHttYWlufVwifWNhdGNoKGUpe21haW49XCIke2xlZ2FjeV9tYWlufVwifTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3RyeXtuZXcgRnVuY3Rpb24oXCJpZigwKWltcG9ydCgnJylcIikoKTtzLnNyYz1tYWluO3MudHlwZT1cIm1vZHVsZVwiO3MuY3Jvc3NPcmlnaW49XCJ1c2UtY3JlZGVudGlhbHNcIjt9Y2F0Y2goZSl7cy5zcmM9XCIke3JlcS5iYXNlVXJsfS9jbGllbnQvc2hpbXBvcnRAJHtidWlsZF9pbmZvLnNoaW1wb3J0fS5qc1wiO3Muc2V0QXR0cmlidXRlKFwiZGF0YS1tYWluXCIsbWFpbik7fWRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7fSgpKTtgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0ICs9IGB2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3RyeXtuZXcgRnVuY3Rpb24oXCJpZigwKWltcG9ydCgnJylcIikoKTtzLnNyYz1cIiR7bWFpbn1cIjtzLnR5cGU9XCJtb2R1bGVcIjtzLmNyb3NzT3JpZ2luPVwidXNlLWNyZWRlbnRpYWxzXCI7fWNhdGNoKGUpe3Muc3JjPVwiJHtyZXEuYmFzZVVybH0vY2xpZW50L3NoaW1wb3J0QCR7YnVpbGRfaW5mby5zaGltcG9ydH0uanNcIjtzLnNldEF0dHJpYnV0ZShcImRhdGEtbWFpblwiLFwiJHttYWlufVwiKX1kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JpcHQgKz0gYDwvc2NyaXB0PjxzY3JpcHQke25vbmNlX2F0dHJ9IHNyYz1cIiR7bWFpbn1cIiBkZWZlcj5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlcztcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gbWFrZSB0aGlzIGNvbnNpc3RlbnQgYWNyb3NzIGFwcHNcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gZW1iZWQgYnVpbGRfaW5mbyBpbiBwbGFjZWhvbGRlci50c1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1aWxkX2luZm8uY3NzICYmIGJ1aWxkX2luZm8uY3NzLm1haW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjc3NfY2h1bmtzID0gbmV3IFNldChidWlsZF9pbmZvLmNzcy5tYWluKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLnBhcnRzLmZvckVhY2gocGFydCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFydCB8fCAhYnVpbGRfaW5mby5kZXBlbmRlbmNpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcHNfZm9yX3BhcnQgPSBidWlsZF9pbmZvLmRlcGVuZGVuY2llc1twYXJ0LmZpbGVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwc19mb3JfcGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwc19mb3JfcGFydC5maWx0ZXIoZCA9PiBkLmVuZHNXaXRoKCcuY3NzJykpLmZvckVhY2goY2h1bmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc19jaHVua3MuYWRkKGNodW5rKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzID0gQXJyYXkuZnJvbShjc3NfY2h1bmtzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGhyZWYgPT4gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY2xpZW50LyR7aHJlZn1cIj5gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXMgPSAoY3NzICYmIGNzcy5jb2RlID8gYDxzdHlsZSR7bm9uY2VfYXR0cn0+JHtjc3MuY29kZX08L3N0eWxlPmAgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0gdGVtcGxhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclc2FwcGVyLmJhc2UlJywgKCkgPT4gYDxiYXNlIGhyZWY9XCIke3JlcS5iYXNlVXJsfS9cIj5gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclc2FwcGVyLnNjcmlwdHMlJywgKCkgPT4gYDxzY3JpcHQke25vbmNlX2F0dHJ9PiR7c2NyaXB0fTwvc2NyaXB0PmApXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVzYXBwZXIuaHRtbCUnLCAoKSA9PiBodG1sKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclc2FwcGVyLmhlYWQlJywgKCkgPT4gaGVhZClcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJXNhcHBlci5zdHlsZXMlJywgKCkgPT4gc3R5bGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8lc2FwcGVyXFwuY3Nwbm9uY2UlL2csICgpID0+IG5vbmNlX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcmVzLmVuZChib2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWlsKHJlcywgZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZV9lcnJvcihyZXEsIHJlcywgNTAwLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gZmluZF9yb3V0ZShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSByZXEucGF0aCA9PT0gJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJyA/ICcvJyA6IHJlcS5wYXRoO1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBwYWdlcy5maW5kKHBhZ2UgPT4gcGFnZS5wYXR0ZXJuLnRlc3QocGF0aCkpO1xyXG4gICAgICAgIGlmIChwYWdlKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZV9wYWdlKHBhZ2UsIHJlcSwgcmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZV9lcnJvcihyZXEsIHJlcywgNDA0LCAnTm90IGZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiByZWFkX3RlbXBsYXRlKGRpciA9IGJ1aWxkX2Rpcikge1xyXG4gICAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhgJHtkaXJ9L3RlbXBsYXRlLmh0bWxgLCAndXRmLTgnKTtcclxufVxyXG5mdW5jdGlvbiB0cnlfc2VyaWFsaXplKGRhdGEsIGZhaWwpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGRldmFsdWUoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgaWYgKGZhaWwpXHJcbiAgICAgICAgICAgIGZhaWwoZXJyKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4vLyBFbnN1cmUgd2UgcmV0dXJuIHNvbWV0aGluZyB0cnV0aHkgc28gdGhlIGNsaWVudCB3aWxsIG5vdCByZS1yZW5kZXIgdGhlIHBhZ2Ugb3ZlciB0aGUgZXJyb3JcclxuZnVuY3Rpb24gc2VyaWFsaXplX2Vycm9yKGVycm9yKSB7XHJcbiAgICBpZiAoIWVycm9yKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgbGV0IHNlcmlhbGl6ZWQgPSB0cnlfc2VyaWFsaXplKGVycm9yKTtcclxuICAgIGlmICghc2VyaWFsaXplZCkge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgbWVzc2FnZSwgc3RhY2sgfSA9IGVycm9yO1xyXG4gICAgICAgIHNlcmlhbGl6ZWQgPSB0cnlfc2VyaWFsaXplKHsgbmFtZSwgbWVzc2FnZSwgc3RhY2sgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXNlcmlhbGl6ZWQpIHtcclxuICAgICAgICBzZXJpYWxpemVkID0gJ3t9JztcclxuICAgIH1cclxuICAgIHJldHVybiBzZXJpYWxpemVkO1xyXG59XHJcbmZ1bmN0aW9uIGVzY2FwZV9odG1sKGh0bWwpIHtcclxuICAgIGNvbnN0IGNoYXJzID0ge1xyXG4gICAgICAgICdcIic6ICdxdW90JyxcclxuICAgICAgICAnXFwnJzogJyMzOScsXHJcbiAgICAgICAgJyYnOiAnYW1wJyxcclxuICAgICAgICAnPCc6ICdsdCcsXHJcbiAgICAgICAgJz4nOiAnZ3QnXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvW1wiJyY8Pl0vZywgYyA9PiBgJiR7Y2hhcnNbY119O2ApO1xyXG59XG5cbmZ1bmN0aW9uIG1pZGRsZXdhcmUob3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCB7IHNlc3Npb24sIGlnbm9yZSB9ID0gb3B0cztcclxuICAgIGxldCBlbWl0dGVkX2Jhc2VwYXRoID0gZmFsc2U7XHJcbiAgICByZXR1cm4gY29tcG9zZV9oYW5kbGVycyhpZ25vcmUsIFtcclxuICAgICAgICAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcS5iYXNlVXJsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvcmlnaW5hbFVybCA9IHJlcS5vcmlnaW5hbFVybCB8fCByZXEudXJsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS51cmwgPT09ICcvJyAmJiBvcmlnaW5hbFVybFtvcmlnaW5hbFVybC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxVcmwgKz0gJy8nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVxLmJhc2VVcmwgPSBvcmlnaW5hbFVybFxyXG4gICAgICAgICAgICAgICAgICAgID8gb3JpZ2luYWxVcmwuc2xpY2UoMCwgLXJlcS51cmwubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFlbWl0dGVkX2Jhc2VwYXRoICYmIHByb2Nlc3Muc2VuZCkge1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBfX3NhcHBlcl9fOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnYmFzZXBhdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VwYXRoOiByZXEuYmFzZVVybFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbWl0dGVkX2Jhc2VwYXRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxLnBhdGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmVxLnBhdGggPSByZXEudXJsLnJlcGxhY2UoL1xcPy4qLywgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgJ3NlcnZpY2Utd29ya2VyLmpzJykpICYmIHNlcnZlKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZS13b3JrZXIuanMnLFxyXG4gICAgICAgICAgICBjYWNoZV9jb250cm9sOiAnbm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGUnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnc2VydmljZS13b3JrZXIuanMubWFwJykpICYmIHNlcnZlKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZS13b3JrZXIuanMubWFwJyxcclxuICAgICAgICAgICAgY2FjaGVfY29udHJvbDogJ25vLWNhY2hlLCBuby1zdG9yZSwgbXVzdC1yZXZhbGlkYXRlJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHNlcnZlKHtcclxuICAgICAgICAgICAgcHJlZml4OiAnL2NsaWVudC8nLFxyXG4gICAgICAgICAgICBjYWNoZV9jb250cm9sOiBkZXYgPyAnbm8tY2FjaGUnIDogJ21heC1hZ2U9MzE1MzYwMDAsIGltbXV0YWJsZSdcclxuICAgICAgICB9KSxcclxuICAgICAgICBnZXRfc2VydmVyX3JvdXRlX2hhbmRsZXIobWFuaWZlc3Quc2VydmVyX3JvdXRlcyksXHJcbiAgICAgICAgZ2V0X3BhZ2VfaGFuZGxlcihtYW5pZmVzdCwgc2Vzc2lvbiB8fCBub29wKVxyXG4gICAgXS5maWx0ZXIoQm9vbGVhbikpO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXBvc2VfaGFuZGxlcnMoaWdub3JlLCBoYW5kbGVycykge1xyXG4gICAgY29uc3QgdG90YWwgPSBoYW5kbGVycy5sZW5ndGg7XHJcbiAgICBmdW5jdGlvbiBudGhfaGFuZGxlcihuLCByZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGlmIChuID49IHRvdGFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZXJzW25dKHJlcSwgcmVzLCAoKSA9PiBudGhfaGFuZGxlcihuICsgMSwgcmVxLCByZXMsIG5leHQpKTtcclxuICAgIH1cclxuICAgIHJldHVybiAhaWdub3JlXHJcbiAgICAgICAgPyAocmVxLCByZXMsIG5leHQpID0+IG50aF9oYW5kbGVyKDAsIHJlcSwgcmVzLCBuZXh0KVxyXG4gICAgICAgIDogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRfaWdub3JlKHJlcS5wYXRoLCBpZ25vcmUpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBudGhfaGFuZGxlcigwLCByZXEsIHJlcywgbmV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHNob3VsZF9pZ25vcmUodXJpLCB2YWwpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC5zb21lKHggPT4gc2hvdWxkX2lnbm9yZSh1cmksIHgpKTtcclxuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBSZWdFeHApXHJcbiAgICAgICAgcmV0dXJuIHZhbC50ZXN0KHVyaSk7XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICByZXR1cm4gdmFsKHVyaSk7XHJcbiAgICByZXR1cm4gdXJpLnN0YXJ0c1dpdGgodmFsLmNoYXJDb2RlQXQoMCkgPT09IDQ3ID8gdmFsIDogYC8ke3ZhbH1gKTtcclxufVxyXG5mdW5jdGlvbiBzZXJ2ZSh7IHByZWZpeCwgcGF0aG5hbWUsIGNhY2hlX2NvbnRyb2wgfSkge1xyXG4gICAgY29uc3QgZmlsdGVyID0gcGF0aG5hbWVcclxuICAgICAgICA/IChyZXEpID0+IHJlcS5wYXRoID09PSBwYXRobmFtZVxyXG4gICAgICAgIDogKHJlcSkgPT4gcmVxLnBhdGguc3RhcnRzV2l0aChwcmVmaXgpO1xyXG4gICAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCByZWFkID0gZGV2XHJcbiAgICAgICAgPyAoZmlsZSkgPT4gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihidWlsZF9kaXIsIGZpbGUpKVxyXG4gICAgICAgIDogKGZpbGUpID0+IChjYWNoZS5oYXMoZmlsZSkgPyBjYWNoZSA6IGNhY2hlLnNldChmaWxlLCBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgZmlsZSkpKSkuZ2V0KGZpbGUpO1xyXG4gICAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgIGlmIChmaWx0ZXIocmVxKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gbGl0ZS5nZXRUeXBlKHJlcS5wYXRoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBwYXRoLnBvc2l4Lm5vcm1hbGl6ZShkZWNvZGVVUklDb21wb25lbnQocmVxLnBhdGgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZWFkKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgY2FjaGVfY29udHJvbCk7XHJcbiAgICAgICAgICAgICAgICByZXMuZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmVuZCgnYW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVhZGluZyBhIHN0YXRpYyBmaWxlIGZyb20gZGlzaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBub29wKCkgeyB9XG5cbmV4cG9ydCB7IG1pZGRsZXdhcmUgfTtcbiIsImltcG9ydCBzaXJ2IGZyb20gJ3NpcnYnO1xuaW1wb3J0IHBvbGthIGZyb20gJ3BvbGthJztcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBzYXBwZXIgZnJvbSAnQHNhcHBlci9zZXJ2ZXInO1xuXG5jb25zdCB7IFBPUlQsIE5PREVfRU5WIH0gPSBwcm9jZXNzLmVudjtcbmNvbnN0IGRldiA9IE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG5wb2xrYSgpIC8vIFlvdSBjYW4gYWxzbyB1c2UgRXhwcmVzc1xuXHQudXNlKFxuXHRcdGNvbXByZXNzaW9uKHsgdGhyZXNob2xkOiAwIH0pLFxuXHRcdHNpcnYoJ3N0YXRpYycsIHsgZGV2IH0pLFxuXHRcdHNhcHBlci5taWRkbGV3YXJlKClcblx0KVxuXHQubGlzdGVuKFBPUlQsIGVyciA9PiB7XG5cdFx0aWYgKGVycikgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyKTtcblx0fSk7XG4iXSwibmFtZXMiOlsiXyIsImVycm9yIiwiZXNjYXBlZCIsIlN0cmVhbSIsImh0dHAiLCJVcmwiLCJodHRwcyIsInpsaWIiLCJmcyIsInBhdGgiLCJub29wIiwicG9sa2EiLCJjb21wcmVzc2lvbiIsInNpcnYiLCJzYXBwZXIubWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6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LENBQUMsdUJBQXVCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDNWxTO0FBQ0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDdEQsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ0EsU0FBUyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUU7QUFDMUMsSUFBSSxTQUFTLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDakQsUUFBUSxPQUFPLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsYUFBYTtBQUM1RCxZQUFZLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNwRSxZQUFZLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDcEQ7QUFDQTtBQUNBLFlBQVksTUFBTSxhQUFhLEdBQUcsTUFBTSxLQUFLLFFBQVEsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3ZFLFlBQVksTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNoRSxZQUFZLElBQUksYUFBYSxFQUFFO0FBQy9CLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFO0FBQy9DLG9CQUFvQixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDMUQsb0JBQW9CLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN0QyxvQkFBb0IsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ3ZDO0FBQ0Esb0JBQW9CLEdBQUcsQ0FBQyxLQUFLLEdBQUcsVUFBVSxLQUFLLEVBQUU7QUFDakQsd0JBQXdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3hELHdCQUF3QixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6RCxxQkFBcUIsQ0FBQztBQUN0QixvQkFBb0IsR0FBRyxDQUFDLFNBQVMsR0FBRyxVQUFVLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDM0Qsd0JBQXdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUQsd0JBQXdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDNUQscUJBQXFCLENBQUM7QUFDdEIsb0JBQW9CLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxLQUFLLEVBQUU7QUFDL0Msd0JBQXdCLElBQUksS0FBSztBQUNqQyw0QkFBNEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDNUQsd0JBQXdCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNoRCx3QkFBd0IsT0FBTyxDQUFDLElBQUksQ0FBQztBQUNyQyw0QkFBNEIsVUFBVSxFQUFFLElBQUk7QUFDNUMsNEJBQTRCLEtBQUssRUFBRSxNQUFNO0FBQ3pDLDRCQUE0QixHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7QUFDeEMsNEJBQTRCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtBQUM5Qyw0QkFBNEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVO0FBQ2xELDRCQUE0QixJQUFJLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQztBQUN6RCw0QkFBNEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3ZELHlCQUF5QixDQUFDLENBQUM7QUFDM0IscUJBQXFCLENBQUM7QUFDdEIsaUJBQWlCO0FBQ2pCLGdCQUFnQixNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQUcsS0FBSztBQUM3QyxvQkFBb0IsSUFBSSxHQUFHLEVBQUU7QUFDN0Isd0JBQXdCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBQzdDLHdCQUF3QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLHdCQUF3QixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9DLHFCQUFxQjtBQUNyQixpQkFBaUIsQ0FBQztBQUNsQixnQkFBZ0IsSUFBSTtBQUNwQixvQkFBb0IsTUFBTSxhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMvRCxpQkFBaUI7QUFDakIsZ0JBQWdCLE9BQU8sR0FBRyxFQUFFO0FBQzVCLG9CQUFvQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLG9CQUFvQixXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckMsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixpQkFBaUI7QUFDakI7QUFDQSxnQkFBZ0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxhQUFhO0FBQ2IsU0FBUyxDQUFDLENBQUM7QUFDWCxLQUFLO0FBQ0wsSUFBSSxPQUFPLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQy9DLFFBQVEsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFDcEMsWUFBWSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM5QyxnQkFBZ0IsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3BELGdCQUFnQixPQUFPO0FBQ3ZCLGFBQWE7QUFDYixTQUFTO0FBQ1QsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUNmLEtBQUssQ0FBQztBQUNOLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztBQUNoQyxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO0FBQzdCLEVBQUUsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7QUFDL0IsSUFBSSxNQUFNLElBQUksU0FBUyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDekQsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDZixFQUFFLElBQUksR0FBRyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDMUIsRUFBRSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pDLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7QUFDakM7QUFDQSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pDLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQztBQUNBO0FBQ0EsSUFBSSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDcEIsTUFBTSxTQUFTO0FBQ2YsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM1QyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3hEO0FBQ0E7QUFDQSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUN2QixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxJQUFJLFNBQVMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDL0IsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNyQyxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQ2hDLEVBQUUsSUFBSTtBQUNOLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ2QsSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNmLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxJQUFJLEtBQUssR0FBRyx3REFBd0QsQ0FBQztBQUNyRSxJQUFJLFdBQVcsR0FBRywrQkFBK0IsQ0FBQztBQUNsRCxJQUFJLFFBQVEsR0FBRywrWEFBK1gsQ0FBQztBQUMvWSxJQUFJQyxTQUFPLEdBQUc7QUFDZCxJQUFJLEdBQUcsRUFBRSxTQUFTO0FBQ2xCLElBQUksR0FBRyxFQUFFLFNBQVM7QUFDbEIsSUFBSSxHQUFHLEVBQUUsU0FBUztBQUNsQixJQUFJLElBQUksRUFBRSxNQUFNO0FBQ2hCLElBQUksSUFBSSxFQUFFLEtBQUs7QUFDZixJQUFJLElBQUksRUFBRSxLQUFLO0FBQ2YsSUFBSSxJQUFJLEVBQUUsS0FBSztBQUNmLElBQUksSUFBSSxFQUFFLEtBQUs7QUFDZixJQUFJLElBQUksRUFBRSxLQUFLO0FBQ2YsSUFBSSxJQUFJLEVBQUUsS0FBSztBQUNmLElBQUksUUFBUSxFQUFFLFNBQVM7QUFDdkIsSUFBSSxRQUFRLEVBQUUsU0FBUztBQUN2QixDQUFDLENBQUM7QUFDRixJQUFJLDJCQUEyQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pHLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUN4QixJQUFJLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBSSxTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDekIsUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRTtBQUN6QyxZQUFZLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUMzRCxTQUFTO0FBQ1QsUUFBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDL0IsWUFBWSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFlBQVksT0FBTztBQUNuQixTQUFTO0FBQ1QsUUFBUSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QixRQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDakMsWUFBWSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsWUFBWSxRQUFRLElBQUk7QUFDeEIsZ0JBQWdCLEtBQUssUUFBUSxDQUFDO0FBQzlCLGdCQUFnQixLQUFLLFFBQVEsQ0FBQztBQUM5QixnQkFBZ0IsS0FBSyxTQUFTLENBQUM7QUFDL0IsZ0JBQWdCLEtBQUssTUFBTSxDQUFDO0FBQzVCLGdCQUFnQixLQUFLLFFBQVE7QUFDN0Isb0JBQW9CLE9BQU87QUFDM0IsZ0JBQWdCLEtBQUssT0FBTztBQUM1QixvQkFBb0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxvQkFBb0IsTUFBTTtBQUMxQixnQkFBZ0IsS0FBSyxLQUFLLENBQUM7QUFDM0IsZ0JBQWdCLEtBQUssS0FBSztBQUMxQixvQkFBb0IsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEQsb0JBQW9CLE1BQU07QUFDMUIsZ0JBQWdCO0FBQ2hCLG9CQUFvQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdELG9CQUFvQixJQUFJLEtBQUssS0FBSyxNQUFNLENBQUMsU0FBUztBQUNsRCx3QkFBd0IsS0FBSyxLQUFLLElBQUk7QUFDdEMsd0JBQXdCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssMkJBQTJCLEVBQUU7QUFDN0csd0JBQXdCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUNoRixxQkFBcUI7QUFDckIsb0JBQW9CLElBQUksTUFBTSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDeEUsd0JBQXdCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUNyRixxQkFBcUI7QUFDckIsb0JBQW9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUYsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEIsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdEIsU0FBUyxNQUFNLENBQUMsVUFBVSxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFELFNBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDdEQsU0FBUyxPQUFPLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxFQUFFO0FBQ3JDLFFBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUM5QixRQUFRLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM5QixZQUFZLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxTQUFTO0FBQ1QsUUFBUSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNoQyxZQUFZLE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0MsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLFFBQVEsUUFBUSxJQUFJO0FBQ3BCLFlBQVksS0FBSyxRQUFRLENBQUM7QUFDMUIsWUFBWSxLQUFLLFFBQVEsQ0FBQztBQUMxQixZQUFZLEtBQUssU0FBUztBQUMxQixnQkFBZ0IsT0FBTyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNwRSxZQUFZLEtBQUssUUFBUTtBQUN6QixnQkFBZ0IsT0FBTyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDcEcsWUFBWSxLQUFLLE1BQU07QUFDdkIsZ0JBQWdCLE9BQU8sV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDM0QsWUFBWSxLQUFLLE9BQU87QUFDeEIsZ0JBQWdCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEcsZ0JBQWdCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDeEYsZ0JBQWdCLE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUM1RCxZQUFZLEtBQUssS0FBSyxDQUFDO0FBQ3ZCLFlBQVksS0FBSyxLQUFLO0FBQ3RCLGdCQUFnQixPQUFPLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDaEcsWUFBWTtBQUNaLGdCQUFnQixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsRUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUksZ0JBQWdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekQsZ0JBQWdCLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtBQUNwQyxvQkFBb0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQ3hELDBCQUEwQixvQ0FBb0MsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUMxRSwwQkFBMEIscUJBQXFCLENBQUM7QUFDaEQsaUJBQWlCO0FBQ2pCLGdCQUFnQixPQUFPLEdBQUcsQ0FBQztBQUMzQixTQUFTO0FBQ1QsS0FBSztBQUNMLElBQUksSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ3BCLFFBQVEsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQzFCLFFBQVEsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQzlCLFFBQVEsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQzFCLFFBQVEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDN0MsWUFBWSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLFlBQVksSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDcEMsZ0JBQWdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6RCxnQkFBZ0IsT0FBTztBQUN2QixhQUFhO0FBQ2IsWUFBWSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsWUFBWSxRQUFRLElBQUk7QUFDeEIsZ0JBQWdCLEtBQUssUUFBUSxDQUFDO0FBQzlCLGdCQUFnQixLQUFLLFFBQVEsQ0FBQztBQUM5QixnQkFBZ0IsS0FBSyxTQUFTO0FBQzlCLG9CQUFvQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDaEYsb0JBQW9CLE1BQU07QUFDMUIsZ0JBQWdCLEtBQUssUUFBUTtBQUM3QixvQkFBb0IsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNwRCxvQkFBb0IsTUFBTTtBQUMxQixnQkFBZ0IsS0FBSyxNQUFNO0FBQzNCLG9CQUFvQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdkUsb0JBQW9CLE1BQU07QUFDMUIsZ0JBQWdCLEtBQUssT0FBTztBQUM1QixvQkFBb0IsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqRSxvQkFBb0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbEQsd0JBQXdCLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLHFCQUFxQixDQUFDLENBQUM7QUFDdkIsb0JBQW9CLE1BQU07QUFDMUIsZ0JBQWdCLEtBQUssS0FBSztBQUMxQixvQkFBb0IsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QyxvQkFBb0IsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxSSxvQkFBb0IsTUFBTTtBQUMxQixnQkFBZ0IsS0FBSyxLQUFLO0FBQzFCLG9CQUFvQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdDLG9CQUFvQixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUU7QUFDdkYsd0JBQXdCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELHdCQUF3QixPQUFPLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDakYscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQyxvQkFBb0IsTUFBTTtBQUMxQixnQkFBZ0I7QUFDaEIsb0JBQW9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDeEcsb0JBQW9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQzlELHdCQUF3QixZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3ZCLGFBQWE7QUFDYixTQUFTLENBQUMsQ0FBQztBQUNYLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDM0MsUUFBUSxPQUFPLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNwSCxLQUFLO0FBQ0wsU0FBUztBQUNULFFBQVEsT0FBTyxHQUFHLENBQUM7QUFDbkIsS0FBSztBQUNMLENBQUM7QUFDRCxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDdEIsSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDbEIsSUFBSSxHQUFHO0FBQ1AsUUFBUSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2hELFFBQVEsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxLQUFLLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRTtBQUN2QixJQUFJLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztBQUNuRCxDQUFDO0FBQ0QsU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQzVCLElBQUksT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDO0FBQ25DLENBQUM7QUFDRCxTQUFTLGtCQUFrQixDQUFDLEtBQUssRUFBRTtBQUNuQyxJQUFJLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtBQUNqQyxRQUFRLE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDO0FBQ3hCLFFBQVEsT0FBTyxRQUFRLENBQUM7QUFDeEIsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDO0FBQ3BDLFFBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUIsSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7QUFDakMsUUFBUSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlDLElBQUksT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBQ0QsU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFO0FBQ3hCLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFDRCxTQUFTLGdCQUFnQixDQUFDLENBQUMsRUFBRTtBQUM3QixJQUFJLE9BQU9BLFNBQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUNELFNBQVMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO0FBQ2hDLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFDRCxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDdEIsSUFBSSxPQUFPLDRCQUE0QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pHLENBQUM7QUFDRCxTQUFTLFFBQVEsQ0FBQyxHQUFHLEVBQUU7QUFDdkIsSUFBSSxPQUFPLDRCQUE0QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ25ILENBQUM7QUFDRCxTQUFTLGVBQWUsQ0FBQyxHQUFHLEVBQUU7QUFDOUIsSUFBSSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDckIsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzVDLFFBQVEsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxRQUFRLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsUUFBUSxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7QUFDMUIsWUFBWSxNQUFNLElBQUksS0FBSyxDQUFDO0FBQzVCLFNBQVM7QUFDVCxhQUFhLElBQUksSUFBSSxJQUFJQSxTQUFPLEVBQUU7QUFDbEMsWUFBWSxNQUFNLElBQUlBLFNBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxTQUFTO0FBQ1QsYUFBYSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sRUFBRTtBQUNuRCxZQUFZLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdDO0FBQ0E7QUFDQSxZQUFZLElBQUksSUFBSSxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsRUFBRTtBQUN0RSxnQkFBZ0IsTUFBTSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxQyxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGdCQUFnQixNQUFNLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbEUsYUFBYTtBQUNiLFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxNQUFNLElBQUksSUFBSSxDQUFDO0FBQzNCLFNBQVM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxNQUFNLElBQUksR0FBRyxDQUFDO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxRQUFRLEdBQUdDLDBCQUFNLENBQUMsUUFBUSxDQUFDO0FBQ2pDO0FBQ0EsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QjtBQUNBLE1BQU0sSUFBSSxDQUFDO0FBQ1gsQ0FBQyxXQUFXLEdBQUc7QUFDZixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDbEI7QUFDQSxFQUFFLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxFQUFFLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQjtBQUNBLEVBQUUsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEVBQUUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2Y7QUFDQSxFQUFFLElBQUksU0FBUyxFQUFFO0FBQ2pCLEdBQUcsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQ3ZCLEdBQUcsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDcEMsSUFBSSxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekIsSUFBSSxJQUFJLE1BQU0sQ0FBQztBQUNmLElBQUksSUFBSSxPQUFPLFlBQVksTUFBTSxFQUFFO0FBQ25DLEtBQUssTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUN0QixLQUFLLE1BQU0sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzVDLEtBQUssTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsRixLQUFLLE1BQU0sSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFO0FBQy9DLEtBQUssTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsS0FBSyxNQUFNLElBQUksT0FBTyxZQUFZLElBQUksRUFBRTtBQUN4QyxLQUFLLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUIsS0FBSyxNQUFNO0FBQ1gsS0FBSyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ25GLEtBQUs7QUFDTCxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQzFCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QixJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QztBQUNBLEVBQUUsSUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDekYsRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM5QyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDckIsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDLElBQUksSUFBSSxHQUFHO0FBQ1osRUFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDN0IsRUFBRTtBQUNGLENBQUMsSUFBSSxJQUFJLEdBQUc7QUFDWixFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLEVBQUU7QUFDRixDQUFDLElBQUksR0FBRztBQUNSLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELEVBQUU7QUFDRixDQUFDLFdBQVcsR0FBRztBQUNmLEVBQUUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMvRSxFQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3QixFQUFFO0FBQ0YsQ0FBQyxNQUFNLEdBQUc7QUFDVixFQUFFLE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7QUFDbEMsRUFBRSxRQUFRLENBQUMsS0FBSyxHQUFHLFlBQVksRUFBRSxDQUFDO0FBQ2xDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM5QixFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixFQUFFO0FBQ0YsQ0FBQyxRQUFRLEdBQUc7QUFDWixFQUFFLE9BQU8sZUFBZSxDQUFDO0FBQ3pCLEVBQUU7QUFDRixDQUFDLEtBQUssR0FBRztBQUNULEVBQUUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QjtBQUNBLEVBQUUsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLEVBQUUsSUFBSSxhQUFhLEVBQUUsV0FBVyxDQUFDO0FBQ2pDLEVBQUUsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQzNCLEdBQUcsYUFBYSxHQUFHLENBQUMsQ0FBQztBQUNyQixHQUFHLE1BQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQ3hCLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QyxHQUFHLE1BQU07QUFDVCxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6QyxHQUFHO0FBQ0gsRUFBRSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDekIsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLEdBQUcsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7QUFDdEIsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLEdBQUcsTUFBTTtBQUNULEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JDLEdBQUc7QUFDSCxFQUFFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RDtBQUNBLEVBQUUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLEVBQUUsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3pFLEVBQUUsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEQsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFDO0FBQzlCLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFDZCxFQUFFO0FBQ0YsQ0FBQztBQUNEO0FBQ0EsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDeEMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0FBQzNCLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUMzQixDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDNUIsQ0FBQyxDQUFDLENBQUM7QUFDSDtBQUNBLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFO0FBQzFELENBQUMsS0FBSyxFQUFFLE1BQU07QUFDZCxDQUFDLFFBQVEsRUFBRSxLQUFLO0FBQ2hCLENBQUMsVUFBVSxFQUFFLEtBQUs7QUFDbEIsQ0FBQyxZQUFZLEVBQUUsSUFBSTtBQUNuQixDQUFDLENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ2hELEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDNUI7QUFDQSxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3pCLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbkI7QUFDQTtBQUNBLEVBQUUsSUFBSSxXQUFXLEVBQUU7QUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztBQUM5QyxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUNEO0FBQ0EsVUFBVSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0RCxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFDOUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0FBQ3pDO0FBQ0EsSUFBSSxPQUFPLENBQUM7QUFDWixJQUFJO0FBQ0osQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN2QyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtBQUNkO0FBQ0EsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDM0M7QUFDQTtBQUNBLE1BQU0sV0FBVyxHQUFHQSwwQkFBTSxDQUFDLFdBQVcsQ0FBQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRTtBQUNwQixDQUFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQjtBQUNBLENBQUMsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUNsRixLQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQzNCO0FBQ0EsQ0FBQyxJQUFJLElBQUksR0FBRyxTQUFTLEtBQUssU0FBUyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDcEQsQ0FBQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ2pDLENBQUMsSUFBSSxPQUFPLEdBQUcsWUFBWSxLQUFLLFNBQVMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDO0FBQzdEO0FBQ0EsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDbkI7QUFDQSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUM7QUFDZCxFQUFFLE1BQU0sSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNyQztBQUNBLEVBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDdEMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLHNCQUFzQixFQUFFO0FBQ3hJO0FBQ0EsRUFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQixFQUFFLE1BQU0sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3RDO0FBQ0EsRUFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BFLEVBQUUsTUFBTSxJQUFJLElBQUksWUFBWUEsMEJBQU0sRUFBRSxDQUFDLE1BQU07QUFDM0M7QUFDQTtBQUNBLEVBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkMsRUFBRTtBQUNGLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHO0FBQ25CLEVBQUUsSUFBSTtBQUNOLEVBQUUsU0FBUyxFQUFFLEtBQUs7QUFDbEIsRUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLEVBQUUsQ0FBQztBQUNILENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN4QjtBQUNBLENBQUMsSUFBSSxJQUFJLFlBQVlBLDBCQUFNLEVBQUU7QUFDN0IsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEdBQUcsRUFBRTtBQUNsQyxHQUFHLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEtBQUssWUFBWSxHQUFHLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLDRDQUE0QyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3SixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRTtBQUNGLENBQUM7QUFDRDtBQUNBLElBQUksQ0FBQyxTQUFTLEdBQUc7QUFDakIsQ0FBQyxJQUFJLElBQUksR0FBRztBQUNaLEVBQUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzlCLEVBQUU7QUFDRjtBQUNBLENBQUMsSUFBSSxRQUFRLEdBQUc7QUFDaEIsRUFBRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDbkMsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsV0FBVyxHQUFHO0FBQ2YsRUFBRSxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQ3BELEdBQUcsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzVFLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSSxHQUFHO0FBQ1IsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsRSxFQUFFLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7QUFDcEQsR0FBRyxPQUFPLE1BQU0sQ0FBQyxNQUFNO0FBQ3ZCO0FBQ0EsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDaEIsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRTtBQUMxQixJQUFJLENBQUMsRUFBRTtBQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRztBQUNqQixJQUFJLENBQUMsQ0FBQztBQUNOLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSSxHQUFHO0FBQ1IsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDcEI7QUFDQSxFQUFFLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUU7QUFDdkQsR0FBRyxJQUFJO0FBQ1AsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ2pCLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLDhCQUE4QixFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDckksSUFBSTtBQUNKLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSSxHQUFHO0FBQ1IsRUFBRSxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQ3ZELEdBQUcsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxNQUFNLEdBQUc7QUFDVixFQUFFLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGFBQWEsR0FBRztBQUNqQixFQUFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUNwQjtBQUNBLEVBQUUsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRTtBQUN2RCxHQUFHLE9BQU8sV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUMsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFO0FBQ0YsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ3hDLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUMzQixDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDL0IsQ0FBQyxXQUFXLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0FBQ2xDLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUMzQixDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDM0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBQ0g7QUFDQSxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsS0FBSyxFQUFFO0FBQzlCLENBQUMsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQ2hFO0FBQ0EsRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO0FBQ3hCLEdBQUcsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUMsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXLEdBQUc7QUFDdkIsQ0FBQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkI7QUFDQSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoQyxFQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEYsRUFBRTtBQUNGO0FBQ0EsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUNsQztBQUNBLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFO0FBQzVCLEVBQUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsRUFBRTtBQUNGO0FBQ0EsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3RCO0FBQ0E7QUFDQSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtBQUNwQixFQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLEVBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNuQixFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdkIsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM1QixFQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDLElBQUksRUFBRSxJQUFJLFlBQVlBLDBCQUFNLENBQUMsRUFBRTtBQUNoQyxFQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixDQUFDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNwQixDQUFDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQjtBQUNBLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3BELEVBQUUsSUFBSSxVQUFVLENBQUM7QUFDakI7QUFDQTtBQUNBLEVBQUUsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO0FBQ3RCLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZO0FBQ3ZDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUNqQixJQUFJLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLHVDQUF1QyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUM5SCxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEdBQUcsRUFBRTtBQUNsQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7QUFDbEM7QUFDQSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDakIsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEIsSUFBSSxNQUFNO0FBQ1Y7QUFDQSxJQUFJLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLDRDQUE0QyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZILElBQUk7QUFDSixHQUFHLENBQUMsQ0FBQztBQUNMO0FBQ0EsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUssRUFBRTtBQUNuQyxHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7QUFDaEMsSUFBSSxPQUFPO0FBQ1gsSUFBSTtBQUNKO0FBQ0EsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRTtBQUMvRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDakIsSUFBSSxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ25HLElBQUksT0FBTztBQUNYLElBQUk7QUFDSjtBQUNBLEdBQUcsVUFBVSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDOUIsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JCLEdBQUcsQ0FBQyxDQUFDO0FBQ0w7QUFDQSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFlBQVk7QUFDN0IsR0FBRyxJQUFJLEtBQUssRUFBRTtBQUNkLElBQUksT0FBTztBQUNYLElBQUk7QUFDSjtBQUNBLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzVCO0FBQ0EsR0FBRyxJQUFJO0FBQ1AsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7QUFDakI7QUFDQSxJQUFJLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLCtDQUErQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFILElBQUk7QUFDSixHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUUsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUU7QUFDdEMsQ0FBQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFVBQVUsRUFBRTtBQUNwQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEVBQThFLENBQUMsQ0FBQztBQUNsRyxFQUFFO0FBQ0Y7QUFDQSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDZDtBQUNBO0FBQ0EsQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUNULEVBQUUsR0FBRyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQyxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hDO0FBQ0E7QUFDQSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFO0FBQ2xCLEVBQUUsR0FBRyxHQUFHLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDbEIsRUFBRSxHQUFHLEdBQUcsd0VBQXdFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNGLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNaLEdBQUcsR0FBRyxHQUFHLHdFQUF3RSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1RixHQUFHLElBQUksR0FBRyxFQUFFO0FBQ1osSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZCxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLEdBQUcsRUFBRTtBQUNYLEdBQUcsR0FBRyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDekMsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUNsQixFQUFFLEdBQUcsR0FBRyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckQsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDLElBQUksR0FBRyxFQUFFO0FBQ1YsRUFBRSxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFDakQsR0FBRyxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBQ3ZCLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUMsT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNyRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO0FBQ2hDO0FBQ0EsQ0FBQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxPQUFPLEdBQUcsQ0FBQyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxLQUFLLFVBQVUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsS0FBSyxVQUFVLElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxLQUFLLFVBQVUsRUFBRTtBQUM3TyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ2YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssaUJBQWlCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLDBCQUEwQixJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDM0osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRTtBQUNyQixDQUFDLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLE9BQU8sR0FBRyxDQUFDLFdBQVcsS0FBSyxVQUFVLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxPQUFPLEdBQUcsQ0FBQyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sR0FBRyxDQUFDLFdBQVcsS0FBSyxVQUFVLElBQUksT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ2pVLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUN6QixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNaLENBQUMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztBQUMxQjtBQUNBO0FBQ0EsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7QUFDeEIsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFDeEQsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSSxJQUFJLFlBQVlBLDBCQUFNLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtBQUN2RTtBQUNBLEVBQUUsRUFBRSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7QUFDekIsRUFBRSxFQUFFLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUN6QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDaEIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hCO0FBQ0EsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNoQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7QUFDWixFQUFFO0FBQ0Y7QUFDQSxDQUFDLE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7QUFDbEMsQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDcEI7QUFDQSxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsRUFBRSxNQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQ3RDO0FBQ0EsRUFBRSxPQUFPLDBCQUEwQixDQUFDO0FBQ3BDLEVBQUUsTUFBTSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3JDO0FBQ0EsRUFBRSxPQUFPLGlEQUFpRCxDQUFDO0FBQzNELEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUMxQjtBQUNBLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUMzQixFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ25DO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxzQkFBc0IsRUFBRTtBQUM3RTtBQUNBLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFDZCxFQUFFLE1BQU0sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3RDO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLEVBQUUsTUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLEVBQUU7QUFDcEQ7QUFDQSxFQUFFLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlELEVBQUUsTUFBTSxJQUFJLElBQUksWUFBWUEsMEJBQU0sRUFBRTtBQUNwQztBQUNBO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLEVBQUUsTUFBTTtBQUNSO0FBQ0EsRUFBRSxPQUFPLDBCQUEwQixDQUFDO0FBQ3BDLEVBQUU7QUFDRixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQWEsQ0FBQyxRQUFRLEVBQUU7QUFDakMsQ0FBQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzVCO0FBQ0E7QUFDQSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtBQUNwQjtBQUNBLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDWCxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDMUIsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDbkIsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNuQztBQUNBLEVBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3JCLEVBQUUsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO0FBQzlEO0FBQ0EsRUFBRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxJQUFJLENBQUM7QUFDbEUsRUFBRSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtBQUNoRDtBQUNBLEdBQUcsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDL0IsR0FBRztBQUNILEVBQUUsT0FBTyxJQUFJLENBQUM7QUFDZCxFQUFFLE1BQU07QUFDUjtBQUNBLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFDZCxFQUFFO0FBQ0YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUN2QyxDQUFDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDNUI7QUFDQTtBQUNBLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQ3BCO0FBQ0EsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDYixFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDMUIsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbkM7QUFDQSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkIsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDYixFQUFFLE1BQU07QUFDUjtBQUNBLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQixFQUFFO0FBQ0YsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlCQUFpQixHQUFHLCtCQUErQixDQUFDO0FBQzFELE1BQU0sc0JBQXNCLEdBQUcseUJBQXlCLENBQUM7QUFDekQ7QUFDQSxTQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUU7QUFDNUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ2xELEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztBQUNqRSxFQUFFO0FBQ0YsQ0FBQztBQUNEO0FBQ0EsU0FBUyxhQUFhLENBQUMsS0FBSyxFQUFFO0FBQzlCLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDekMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0FBQ25FLEVBQUU7QUFDRixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUN6QixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDM0IsQ0FBQyxLQUFLLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUN4QixFQUFFLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksRUFBRTtBQUNsQyxHQUFHLE9BQU8sR0FBRyxDQUFDO0FBQ2QsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDLE9BQU8sU0FBUyxDQUFDO0FBQ2xCLENBQUM7QUFDRDtBQUNBLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixNQUFNLE9BQU8sQ0FBQztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsV0FBVyxHQUFHO0FBQ2YsRUFBRSxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDM0Y7QUFDQSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDO0FBQ0EsRUFBRSxJQUFJLElBQUksWUFBWSxPQUFPLEVBQUU7QUFDL0IsR0FBRyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDakMsR0FBRyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQy9DO0FBQ0EsR0FBRyxLQUFLLE1BQU0sVUFBVSxJQUFJLFdBQVcsRUFBRTtBQUN6QyxJQUFJLEtBQUssTUFBTSxLQUFLLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2hELEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEMsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBLEdBQUcsT0FBTztBQUNWLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDekQsR0FBRyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDLEdBQUcsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3ZCLElBQUksSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7QUFDdEMsS0FBSyxNQUFNLElBQUksU0FBUyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDMUQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDN0IsS0FBSyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ2xGLE1BQU0sTUFBTSxJQUFJLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQy9ELE1BQU07QUFDTixLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLEtBQUs7QUFDTDtBQUNBLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7QUFDOUIsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQzVCLE1BQU0sTUFBTSxJQUFJLFNBQVMsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0FBQ3pFLE1BQU07QUFDTixLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLEtBQUs7QUFDTCxJQUFJLE1BQU07QUFDVjtBQUNBLElBQUksS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3pDLEtBQUssTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0IsS0FBSztBQUNMLElBQUk7QUFDSixHQUFHLE1BQU07QUFDVCxHQUFHLE1BQU0sSUFBSSxTQUFTLENBQUMsd0NBQXdDLENBQUMsQ0FBQztBQUNqRSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ1gsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkIsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsRUFBRSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3BDLEVBQUUsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO0FBQ3pCLEdBQUcsT0FBTyxJQUFJLENBQUM7QUFDZixHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQyxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtBQUNuQixFQUFFLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUM5RjtBQUNBLEVBQUUsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1osRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQzNCLEdBQUcsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLEdBQUcsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMzQixTQUFTLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0I7QUFDQSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0MsR0FBRyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDUCxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ2xCLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25CLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JCLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZCLEVBQUUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RELEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNyQixFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQixFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNyQixFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQixFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QixFQUFFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEMsRUFBRSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDekIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLEdBQUcsTUFBTTtBQUNULEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNYLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25CLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JCLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FBQztBQUM3QyxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFDZCxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQixFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQixFQUFFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEMsRUFBRSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDekIsR0FBRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QixHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsR0FBRyxHQUFHO0FBQ1AsRUFBRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJQUFJLEdBQUc7QUFDUixFQUFFLE9BQU8scUJBQXFCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVDLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE1BQU0sR0FBRztBQUNWLEVBQUUsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUMsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO0FBQ3JCLEVBQUUsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDbEQsRUFBRTtBQUNGLENBQUM7QUFDRCxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvRDtBQUNBLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFO0FBQzdELENBQUMsS0FBSyxFQUFFLFNBQVM7QUFDakIsQ0FBQyxRQUFRLEVBQUUsS0FBSztBQUNoQixDQUFDLFVBQVUsRUFBRSxLQUFLO0FBQ2xCLENBQUMsWUFBWSxFQUFFLElBQUk7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFDSDtBQUNBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO0FBQzNDLENBQUMsR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUMxQixDQUFDLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDOUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0FBQzFCLENBQUMsTUFBTSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUM3QixDQUFDLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDMUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0FBQzdCLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUMzQixDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDN0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBQ0g7QUFDQSxTQUFTLFVBQVUsQ0FBQyxPQUFPLEVBQUU7QUFDN0IsQ0FBQyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7QUFDNUY7QUFDQSxDQUFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0MsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEtBQUssR0FBRyxVQUFVLENBQUMsRUFBRTtBQUMvQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3pCLEVBQUUsR0FBRyxJQUFJLEtBQUssT0FBTyxHQUFHLFVBQVUsQ0FBQyxFQUFFO0FBQ3JDLEVBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRTtBQUNsQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELEVBQUUsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUNEO0FBQ0EsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BDO0FBQ0EsU0FBUyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQzdDLENBQUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQzFELENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHO0FBQ3RCLEVBQUUsTUFBTTtBQUNSLEVBQUUsSUFBSTtBQUNOLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDVixFQUFFLENBQUM7QUFDSCxDQUFDLE9BQU8sUUFBUSxDQUFDO0FBQ2pCLENBQUM7QUFDRDtBQUNBLE1BQU0sd0JBQXdCLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztBQUN2RCxDQUFDLElBQUksR0FBRztBQUNSO0FBQ0EsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssd0JBQXdCLEVBQUU7QUFDekUsR0FBRyxNQUFNLElBQUksU0FBUyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7QUFDbkUsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsRUFBRSxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTTtBQUNqQyxRQUFRLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSTtBQUM3QixRQUFRLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQ2hDO0FBQ0EsRUFBRSxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUM1QixFQUFFLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtBQUNwQixHQUFHLE9BQU87QUFDVixJQUFJLEtBQUssRUFBRSxTQUFTO0FBQ3BCLElBQUksSUFBSSxFQUFFLElBQUk7QUFDZCxJQUFJLENBQUM7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNuQztBQUNBLEVBQUUsT0FBTztBQUNULEdBQUcsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDdkIsR0FBRyxJQUFJLEVBQUUsS0FBSztBQUNkLEdBQUcsQ0FBQztBQUNKLEVBQUU7QUFDRixDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RTtBQUNBLE1BQU0sQ0FBQyxjQUFjLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTtBQUNwRSxDQUFDLEtBQUssRUFBRSxpQkFBaUI7QUFDekIsQ0FBQyxRQUFRLEVBQUUsS0FBSztBQUNoQixDQUFDLFVBQVUsRUFBRSxLQUFLO0FBQ2xCLENBQUMsWUFBWSxFQUFFLElBQUk7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkJBQTJCLENBQUMsT0FBTyxFQUFFO0FBQzlDLENBQUMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxDQUFDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbEQsQ0FBQyxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7QUFDbEMsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLEVBQUU7QUFDRjtBQUNBLENBQUMsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0JBQW9CLENBQUMsR0FBRyxFQUFFO0FBQ25DLENBQUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUMvQixDQUFDLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN0QyxFQUFFLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BDLEdBQUcsU0FBUztBQUNaLEdBQUc7QUFDSCxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtBQUNoQyxHQUFHLEtBQUssTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDMUMsS0FBSyxTQUFTO0FBQ2QsS0FBSztBQUNMLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQzFDLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsS0FBSyxNQUFNO0FBQ1gsS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLEtBQUs7QUFDTCxJQUFJO0FBQ0osR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7QUFDdEQsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNwQyxHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUMsT0FBTyxPQUFPLENBQUM7QUFDaEIsQ0FBQztBQUNEO0FBQ0EsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDakQ7QUFDQTtBQUNBLE1BQU0sWUFBWSxHQUFHQyx3QkFBSSxDQUFDLFlBQVksQ0FBQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxRQUFRLENBQUM7QUFDZixDQUFDLFdBQVcsR0FBRztBQUNmLEVBQUUsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3RGLEVBQUUsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3BGO0FBQ0EsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUI7QUFDQSxFQUFFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO0FBQ3BDLEVBQUUsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDO0FBQ0EsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQ3BELEdBQUcsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEQsR0FBRyxJQUFJLFdBQVcsRUFBRTtBQUNwQixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ2hELElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRztBQUN0QixHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztBQUNoQixHQUFHLE1BQU07QUFDVCxHQUFHLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUM7QUFDdEQsR0FBRyxPQUFPO0FBQ1YsR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87QUFDeEIsR0FBRyxDQUFDO0FBQ0osRUFBRTtBQUNGO0FBQ0EsQ0FBQyxJQUFJLEdBQUcsR0FBRztBQUNYLEVBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUNyQyxFQUFFO0FBQ0Y7QUFDQSxDQUFDLElBQUksTUFBTSxHQUFHO0FBQ2QsRUFBRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDbEMsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJQUFJLEVBQUUsR0FBRztBQUNWLEVBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUMzRSxFQUFFO0FBQ0Y7QUFDQSxDQUFDLElBQUksVUFBVSxHQUFHO0FBQ2xCLEVBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUN2QyxFQUFFO0FBQ0Y7QUFDQSxDQUFDLElBQUksVUFBVSxHQUFHO0FBQ2xCLEVBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ3RDLEVBQUU7QUFDRjtBQUNBLENBQUMsSUFBSSxPQUFPLEdBQUc7QUFDZixFQUFFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNuQyxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUFLLEdBQUc7QUFDVCxFQUFFLE9BQU8sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ25DLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ2hCLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO0FBQ3RCLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO0FBQzlCLEdBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO0FBQ3hCLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO0FBQ2QsR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7QUFDOUIsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFO0FBQ0YsQ0FBQztBQUNEO0FBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0I7QUFDQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtBQUM1QyxDQUFDLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDMUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0FBQzdCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUN6QixDQUFDLFVBQVUsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDakMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0FBQ2pDLENBQUMsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUM5QixDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDNUIsQ0FBQyxDQUFDLENBQUM7QUFDSDtBQUNBLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFO0FBQzlELENBQUMsS0FBSyxFQUFFLFVBQVU7QUFDbEIsQ0FBQyxRQUFRLEVBQUUsS0FBSztBQUNoQixDQUFDLFVBQVUsRUFBRSxLQUFLO0FBQ2xCLENBQUMsWUFBWSxFQUFFLElBQUk7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFDSDtBQUNBLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSxNQUFNLFNBQVMsR0FBR0MsdUJBQUcsQ0FBQyxLQUFLLENBQUM7QUFDNUIsTUFBTSxVQUFVLEdBQUdBLHVCQUFHLENBQUMsTUFBTSxDQUFDO0FBQzlCO0FBQ0EsTUFBTSwwQkFBMEIsR0FBRyxTQUFTLElBQUlGLDBCQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUMxQixDQUFDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUM1RSxDQUFDO0FBQ0Q7QUFDQSxTQUFTLGFBQWEsQ0FBQyxNQUFNLEVBQUU7QUFDL0IsQ0FBQyxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckYsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLE9BQU8sQ0FBQztBQUNkLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtBQUNwQixFQUFFLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNwRjtBQUNBLEVBQUUsSUFBSSxTQUFTLENBQUM7QUFDaEI7QUFDQTtBQUNBLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN6QixHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxJQUFJLE1BQU07QUFDVjtBQUNBLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLElBQUk7QUFDSixHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZCxHQUFHLE1BQU07QUFDVCxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztBQUNwRCxFQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDaEM7QUFDQSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLE1BQU0sTUFBTSxLQUFLLEtBQUssSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUU7QUFDakgsR0FBRyxNQUFNLElBQUksU0FBUyxDQUFDLCtDQUErQyxDQUFDLENBQUM7QUFDeEUsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2hIO0FBQ0EsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDN0IsR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUM7QUFDOUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDckMsR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBLEVBQUUsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ25FO0FBQ0EsRUFBRSxJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQ3pELEdBQUcsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckQsR0FBRyxJQUFJLFdBQVcsRUFBRTtBQUNwQixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ2hELElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUN0RCxFQUFFLElBQUksUUFBUSxJQUFJLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUM3QztBQUNBLEVBQUUsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ2hELEdBQUcsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBQzFFLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHO0FBQ3RCLEdBQUcsTUFBTTtBQUNULEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxRQUFRO0FBQ3hELEdBQUcsT0FBTztBQUNWLEdBQUcsU0FBUztBQUNaLEdBQUcsTUFBTTtBQUNULEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN6RyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxLQUFLLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNySCxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztBQUNwRCxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3pDLEVBQUU7QUFDRjtBQUNBLENBQUMsSUFBSSxNQUFNLEdBQUc7QUFDZCxFQUFFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNsQyxFQUFFO0FBQ0Y7QUFDQSxDQUFDLElBQUksR0FBRyxHQUFHO0FBQ1gsRUFBRSxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakQsRUFBRTtBQUNGO0FBQ0EsQ0FBQyxJQUFJLE9BQU8sR0FBRztBQUNmLEVBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25DLEVBQUU7QUFDRjtBQUNBLENBQUMsSUFBSSxRQUFRLEdBQUc7QUFDaEIsRUFBRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDcEMsRUFBRTtBQUNGO0FBQ0EsQ0FBQyxJQUFJLE1BQU0sR0FBRztBQUNkLEVBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ2xDLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEtBQUssR0FBRztBQUNULEVBQUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQixFQUFFO0FBQ0YsQ0FBQztBQUNEO0FBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUI7QUFDQSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTtBQUM3RCxDQUFDLEtBQUssRUFBRSxTQUFTO0FBQ2pCLENBQUMsUUFBUSxFQUFFLEtBQUs7QUFDaEIsQ0FBQyxVQUFVLEVBQUUsS0FBSztBQUNsQixDQUFDLFlBQVksRUFBRSxJQUFJO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBQ0g7QUFDQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtBQUMzQyxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDN0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0FBQzFCLENBQUMsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUM5QixDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDL0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0FBQzVCLENBQUMsTUFBTSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUM3QixDQUFDLENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7QUFDeEMsQ0FBQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ2xELENBQUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNEO0FBQ0E7QUFDQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzdCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0IsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtBQUNqRCxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUMxRCxFQUFFO0FBQ0Y7QUFDQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUM1QyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUM5RCxFQUFFO0FBQ0Y7QUFDQSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxZQUFZQSwwQkFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLDBCQUEwQixFQUFFO0FBQy9GLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO0FBQ3JHLEVBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQyxJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQztBQUMvQixDQUFDLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDbkUsRUFBRSxrQkFBa0IsR0FBRyxHQUFHLENBQUM7QUFDM0IsRUFBRTtBQUNGLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtBQUMzQixFQUFFLE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QyxFQUFFLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO0FBQ3RDLEdBQUcsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNDLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQyxJQUFJLGtCQUFrQixFQUFFO0FBQ3pCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3BELEVBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUNqQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLHdEQUF3RCxDQUFDLENBQUM7QUFDdEYsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRTtBQUMxRCxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDakQsRUFBRTtBQUNGO0FBQ0EsQ0FBQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQzNCLENBQUMsSUFBSSxPQUFPLEtBQUssS0FBSyxVQUFVLEVBQUU7QUFDbEMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNCLEVBQUU7QUFDRjtBQUNBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDM0MsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyQyxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFO0FBQ3JDLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO0FBQ3hCLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixDQUFDLE9BQU8sQ0FBQztBQUMvQyxFQUFFLEtBQUs7QUFDUCxFQUFFLENBQUMsQ0FBQztBQUNKLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxDQUFDLE9BQU8sRUFBRTtBQUM3QixFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVCO0FBQ0EsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUN4QixFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3pCO0FBQ0E7QUFDQSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFDRDtBQUNBLFVBQVUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdEQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBQzlDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztBQUN6QztBQUNBO0FBQ0EsTUFBTSxhQUFhLEdBQUdBLDBCQUFNLENBQUMsV0FBVyxDQUFDO0FBQ3pDLE1BQU0sV0FBVyxHQUFHRSx1QkFBRyxDQUFDLE9BQU8sQ0FBQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUMxQjtBQUNBO0FBQ0EsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUNyQixFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztBQUM1RixFQUFFO0FBQ0Y7QUFDQSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUM5QjtBQUNBO0FBQ0EsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDckQ7QUFDQSxFQUFFLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6QyxFQUFFLE1BQU0sT0FBTyxHQUFHLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pEO0FBQ0EsRUFBRSxNQUFNLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxHQUFHQyx5QkFBSyxHQUFHRix3QkFBSSxFQUFFLE9BQU8sQ0FBQztBQUN0RSxFQUFFLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDaEM7QUFDQSxFQUFFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztBQUN0QjtBQUNBLEVBQUUsTUFBTSxLQUFLLEdBQUcsU0FBUyxLQUFLLEdBQUc7QUFDakMsR0FBRyxJQUFJLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQzdELEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pCLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLFlBQVlELDBCQUFNLENBQUMsUUFBUSxFQUFFO0FBQ2hFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsSUFBSTtBQUNKLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTztBQUMzQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN0QyxHQUFHLENBQUM7QUFDSjtBQUNBLEVBQUUsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtBQUNoQyxHQUFHLEtBQUssRUFBRSxDQUFDO0FBQ1gsR0FBRyxPQUFPO0FBQ1YsR0FBRztBQUNIO0FBQ0EsRUFBRSxNQUFNLGdCQUFnQixHQUFHLFNBQVMsZ0JBQWdCLEdBQUc7QUFDdkQsR0FBRyxLQUFLLEVBQUUsQ0FBQztBQUNYLEdBQUcsUUFBUSxFQUFFLENBQUM7QUFDZCxHQUFHLENBQUM7QUFDSjtBQUNBO0FBQ0EsRUFBRSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUIsRUFBRSxJQUFJLFVBQVUsQ0FBQztBQUNqQjtBQUNBLEVBQUUsSUFBSSxNQUFNLEVBQUU7QUFDZCxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN0RCxHQUFHO0FBQ0g7QUFDQSxFQUFFLFNBQVMsUUFBUSxHQUFHO0FBQ3RCLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2YsR0FBRyxJQUFJLE1BQU0sRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDckUsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUIsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDdkIsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLE1BQU0sRUFBRTtBQUN4QyxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWTtBQUN4QyxLQUFLLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUNyRixLQUFLLFFBQVEsRUFBRSxDQUFDO0FBQ2hCLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEIsSUFBSSxDQUFDLENBQUM7QUFDTixHQUFHO0FBQ0g7QUFDQSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQ2pDLEdBQUcsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckcsR0FBRyxRQUFRLEVBQUUsQ0FBQztBQUNkLEdBQUcsQ0FBQyxDQUFDO0FBQ0w7QUFDQSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQ3BDLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzVCO0FBQ0EsR0FBRyxNQUFNLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckQ7QUFDQTtBQUNBLEdBQUcsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUN6QztBQUNBLElBQUksTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3QztBQUNBO0FBQ0EsSUFBSSxNQUFNLFdBQVcsR0FBRyxRQUFRLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN0RjtBQUNBO0FBQ0EsSUFBSSxRQUFRLE9BQU8sQ0FBQyxRQUFRO0FBQzVCLEtBQUssS0FBSyxPQUFPO0FBQ2pCLE1BQU0sTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsdUVBQXVFLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUNySSxNQUFNLFFBQVEsRUFBRSxDQUFDO0FBQ2pCLE1BQU0sT0FBTztBQUNiLEtBQUssS0FBSyxRQUFRO0FBQ2xCO0FBQ0EsTUFBTSxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7QUFDaEM7QUFDQSxPQUFPLElBQUk7QUFDWCxRQUFRLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzdDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRTtBQUNyQjtBQUNBLFFBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLFFBQVE7QUFDUixPQUFPO0FBQ1AsTUFBTSxNQUFNO0FBQ1osS0FBSyxLQUFLLFFBQVE7QUFDbEI7QUFDQSxNQUFNLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtBQUNoQyxPQUFPLE1BQU07QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDN0MsT0FBTyxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyw2QkFBNkIsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQzdGLE9BQU8sUUFBUSxFQUFFLENBQUM7QUFDbEIsT0FBTyxPQUFPO0FBQ2QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU0sTUFBTSxXQUFXLEdBQUc7QUFDMUIsT0FBTyxPQUFPLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUM1QyxPQUFPLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtBQUM3QixPQUFPLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUM7QUFDbkMsT0FBTyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7QUFDM0IsT0FBTyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7QUFDakMsT0FBTyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07QUFDN0IsT0FBTyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7QUFDekIsT0FBTyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07QUFDN0IsT0FBTyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87QUFDL0IsT0FBTyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7QUFDekIsT0FBTyxDQUFDO0FBQ1I7QUFDQTtBQUNBLE1BQU0sSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDckYsT0FBTyxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsMERBQTBELEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0FBQ2xILE9BQU8sUUFBUSxFQUFFLENBQUM7QUFDbEIsT0FBTyxPQUFPO0FBQ2QsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsS0FBSyxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtBQUNySCxPQUFPLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLE9BQU8sV0FBVyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7QUFDcEMsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3BELE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUQsTUFBTSxRQUFRLEVBQUUsQ0FBQztBQUNqQixNQUFNLE9BQU87QUFDYixLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFlBQVk7QUFDL0IsSUFBSSxJQUFJLE1BQU0sRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDdEUsSUFBSSxDQUFDLENBQUM7QUFDTixHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQzVDO0FBQ0EsR0FBRyxNQUFNLGdCQUFnQixHQUFHO0FBQzVCLElBQUksR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO0FBQ3BCLElBQUksTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVO0FBQzFCLElBQUksVUFBVSxFQUFFLEdBQUcsQ0FBQyxhQUFhO0FBQ2pDLElBQUksT0FBTyxFQUFFLE9BQU87QUFDcEIsSUFBSSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7QUFDdEIsSUFBSSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87QUFDNUIsSUFBSSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87QUFDNUIsSUFBSSxDQUFDO0FBQ0w7QUFDQTtBQUNBLEdBQUcsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtBQUMvSCxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNwRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixJQUFJLE9BQU87QUFDWCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxNQUFNLFdBQVcsR0FBRztBQUN2QixJQUFJLEtBQUssRUFBRUksd0JBQUksQ0FBQyxZQUFZO0FBQzVCLElBQUksV0FBVyxFQUFFQSx3QkFBSSxDQUFDLFlBQVk7QUFDbEMsSUFBSSxDQUFDO0FBQ0w7QUFDQTtBQUNBLEdBQUcsSUFBSSxPQUFPLElBQUksTUFBTSxJQUFJLE9BQU8sSUFBSSxRQUFRLEVBQUU7QUFDakQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQ0Esd0JBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNyRCxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNwRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixJQUFJLE9BQU87QUFDWCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUcsSUFBSSxPQUFPLElBQUksU0FBUyxJQUFJLE9BQU8sSUFBSSxXQUFXLEVBQUU7QUFDdkQ7QUFDQTtBQUNBLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFDOUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUssRUFBRTtBQUN0QztBQUNBLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sSUFBSSxFQUFFO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUNBLHdCQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUM3QyxNQUFNLE1BQU07QUFDWixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDQSx3QkFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUNoRCxNQUFNO0FBQ04sS0FBSyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDckQsS0FBSyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkIsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLE9BQU87QUFDWCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUcsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU9BLHdCQUFJLENBQUMsc0JBQXNCLEtBQUssVUFBVSxFQUFFO0FBQzdFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUNBLHdCQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3BELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLElBQUksT0FBTztBQUNYLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDbkQsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckIsR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBLEVBQUUsYUFBYSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5QixFQUFFLENBQUMsQ0FBQztBQUNKLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFO0FBQ25DLENBQUMsT0FBTyxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLENBQUM7QUFDckYsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxZQUFZLEdBQUcsa0VBQWtFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxNQUFNLEdBQUcsVUFBVSxNQUFNLEVBQUU7QUFDL0IsRUFBRSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUU7QUFDbkQsSUFBSSxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxHQUFHO0FBQ0gsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFFBQVEsR0FBRyxVQUFVLFFBQVEsRUFBRTtBQUNuQyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNoQixFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNoQjtBQUNBLEVBQUUsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ25CLEVBQUUsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQ3BCO0FBQ0EsRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDaEIsRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDaEI7QUFDQSxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNoQixFQUFFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNqQjtBQUNBLEVBQUUsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLEVBQUUsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCO0FBQ0E7QUFDQSxFQUFFLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO0FBQzVDLElBQUksUUFBUSxRQUFRLEdBQUcsSUFBSSxFQUFFO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxJQUFJLE9BQU8sSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLE9BQU8sRUFBRTtBQUNsRCxJQUFJLFFBQVEsUUFBUSxHQUFHLE9BQU8sR0FBRyxZQUFZLEVBQUU7QUFDL0MsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO0FBQzVDLElBQUksUUFBUSxRQUFRLEdBQUcsSUFBSSxHQUFHLFlBQVksRUFBRTtBQUM1QyxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO0FBQ3hCLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO0FBQ3pCLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNaLENBQUMsQ0FBQztBQUNGO0FBQ0EsSUFBSSxNQUFNLEdBQUc7QUFDYixDQUFDLE1BQU0sRUFBRSxNQUFNO0FBQ2YsQ0FBQyxNQUFNLEVBQUUsUUFBUTtBQUNqQixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN2QjtBQUNBO0FBQ0EsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLGNBQWMsQ0FBQztBQUNuQztBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNqQztBQUNBO0FBQ0EsSUFBSSxvQkFBb0IsR0FBRyxRQUFRLENBQUM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUU7QUFDN0IsRUFBRSxPQUFPLE1BQU0sR0FBRyxDQUFDO0FBQ25CLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQzFCLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQWEsQ0FBQyxNQUFNLEVBQUU7QUFDL0IsRUFBRSxJQUFJLFVBQVUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLEVBQUUsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUM1QixFQUFFLE9BQU8sVUFBVTtBQUNuQixNQUFNLENBQUMsT0FBTztBQUNkLE1BQU0sT0FBTyxDQUFDO0FBQ2QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxRQUFRLEdBQUcsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7QUFDakQsRUFBRSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbkIsRUFBRSxJQUFJLEtBQUssQ0FBQztBQUNaO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEM7QUFDQSxFQUFFLEdBQUc7QUFDTCxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDO0FBQ2hDLElBQUksR0FBRyxNQUFNLGNBQWMsQ0FBQztBQUM1QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtBQUNqQjtBQUNBO0FBQ0EsTUFBTSxLQUFLLElBQUksb0JBQW9CLENBQUM7QUFDcEMsS0FBSztBQUNMLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUU7QUFDcEI7QUFDQSxFQUFFLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFFBQVEsR0FBRyxTQUFTLGdCQUFnQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO0FBQ2xFLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMzQixFQUFFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQixFQUFFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNoQixFQUFFLElBQUksWUFBWSxFQUFFLEtBQUssQ0FBQztBQUMxQjtBQUNBLEVBQUUsR0FBRztBQUNMLElBQUksSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO0FBQzFCLE1BQU0sTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBQ3BFLEtBQUs7QUFDTDtBQUNBLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtBQUN0QixNQUFNLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRSxLQUFLO0FBQ0w7QUFDQSxJQUFJLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLG9CQUFvQixDQUFDLENBQUM7QUFDcEQsSUFBSSxLQUFLLElBQUksYUFBYSxDQUFDO0FBQzNCLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLENBQUM7QUFDdkMsSUFBSSxLQUFLLElBQUksY0FBYyxDQUFDO0FBQzVCLEdBQUcsUUFBUSxZQUFZLEVBQUU7QUFDekI7QUFDQSxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLEVBQUUsU0FBUyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxJQUFJLFNBQVMsR0FBRztBQUNoQixDQUFDLE1BQU0sRUFBRSxRQUFRO0FBQ2pCLENBQUMsTUFBTSxFQUFFLFFBQVE7QUFDakIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxTQUFTLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ25ELENBQUMsT0FBTyxNQUFNLEdBQUc7QUFDakIsR0FBRyxJQUFJLEVBQUUsT0FBTztBQUNoQixHQUFHLE9BQU8sRUFBRSxFQUFFO0FBQ2QsR0FBRyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ2xDLE1BQU0sT0FBTyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDL0YsS0FBSztBQUNMLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQy9DLENBQUM7QUFDRDtBQUNBLFNBQVMsZUFBZSxJQUFJO0FBQzVCLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO0FBQzVGLENBQUM7QUFDRDtBQUNBLElBQUksSUFBSSxHQUFHLG9CQUFvQixDQUFDLFVBQVUsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7QUFDN0MsRUFBRSxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7QUFDdEIsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QixHQUFHLE1BQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUNyQyxJQUFJLE9BQU8sYUFBYSxDQUFDO0FBQ3pCLEdBQUcsTUFBTTtBQUNULElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLDJCQUEyQixDQUFDLENBQUM7QUFDL0QsR0FBRztBQUNILENBQUM7QUFDRCxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN4QjtBQUNBLElBQUksU0FBUyxHQUFHLGdFQUFnRSxDQUFDO0FBQ2pGLElBQUksYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUNwQztBQUNBLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRTtBQUN4QixFQUFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2QsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0gsRUFBRSxPQUFPO0FBQ1QsSUFBSSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNwQixJQUFJLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLElBQUksSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbEIsSUFBSSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNsQixJQUFJLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLEdBQUcsQ0FBQztBQUNKLENBQUM7QUFDRCxPQUFPLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM1QjtBQUNBLFNBQVMsV0FBVyxDQUFDLFVBQVUsRUFBRTtBQUNqQyxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNmLEVBQUUsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO0FBQ3pCLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ25DLEdBQUc7QUFDSCxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUM7QUFDZCxFQUFFLElBQUksVUFBVSxDQUFDLElBQUksRUFBRTtBQUN2QixJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNqQyxHQUFHO0FBQ0gsRUFBRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUU7QUFDdkIsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQztBQUMzQixHQUFHO0FBQ0gsRUFBRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUU7QUFDdkIsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDakMsR0FBRztBQUNILEVBQUUsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ3ZCLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDM0IsR0FBRztBQUNILEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBQ0QsT0FBTyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQzFCLEVBQUUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ25CLEVBQUUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVCLEVBQUUsSUFBSSxHQUFHLEVBQUU7QUFDWCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ25CLE1BQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsS0FBSztBQUNMLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDcEIsR0FBRztBQUNILEVBQUUsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QztBQUNBLEVBQUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM1RCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7QUFDdEIsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQzlCLE1BQU0sRUFBRSxFQUFFLENBQUM7QUFDWCxLQUFLLE1BQU0sSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNmLE9BQU8sTUFBTTtBQUNiLFFBQVEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0IsUUFBUSxFQUFFLEVBQUUsQ0FBQztBQUNiLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekI7QUFDQSxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUNuQixJQUFJLElBQUksR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsQyxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksR0FBRyxFQUFFO0FBQ1gsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFJLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLEdBQUc7QUFDSCxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUNELE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzVCLEVBQUUsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO0FBQ3BCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNoQixHQUFHO0FBQ0gsRUFBRSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7QUFDcEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLEdBQUc7QUFDSCxFQUFFLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxFQUFFLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxFQUFFLElBQUksUUFBUSxFQUFFO0FBQ2hCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDO0FBQ2pDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxJQUFJLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFDcEMsSUFBSSxJQUFJLFFBQVEsRUFBRTtBQUNsQixNQUFNLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUN4QyxLQUFLO0FBQ0wsSUFBSSxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDOUMsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsSUFBSSxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtBQUNwRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQzFCLElBQUksT0FBTyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7QUFDdEMsTUFBTSxLQUFLO0FBQ1gsTUFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3pEO0FBQ0EsRUFBRSxJQUFJLFFBQVEsRUFBRTtBQUNoQixJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQzNCLElBQUksT0FBTyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsR0FBRztBQUNILEVBQUUsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUNELE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3BCO0FBQ0EsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLEtBQUssRUFBRTtBQUN0QyxFQUFFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDaEMsRUFBRSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7QUFDcEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNoQixFQUFFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzNDLElBQUksSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxJQUFJLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtBQUNuQixNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDMUMsTUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixLQUFLO0FBQ0w7QUFDQSxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFLE9BQU8sS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFDRCxPQUFPLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM1QjtBQUNBLElBQUksaUJBQWlCLElBQUksWUFBWTtBQUNyQyxFQUFFLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsRUFBRSxPQUFPLEVBQUUsV0FBVyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDTDtBQUNBLFNBQVMsUUFBUSxFQUFFLENBQUMsRUFBRTtBQUN0QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFO0FBQzNCLEVBQUUsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDM0IsSUFBSSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDdEIsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFDRCxPQUFPLENBQUMsV0FBVyxHQUFHLGlCQUFpQixHQUFHLFFBQVEsR0FBRyxXQUFXLENBQUM7QUFDakU7QUFDQSxTQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUU7QUFDN0IsRUFBRSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUMzQixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QixHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUNELE9BQU8sQ0FBQyxhQUFhLEdBQUcsaUJBQWlCLEdBQUcsUUFBUSxHQUFHLGFBQWEsQ0FBQztBQUNyRTtBQUNBLFNBQVMsYUFBYSxDQUFDLENBQUMsRUFBRTtBQUMxQixFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7QUFDVixJQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN4QjtBQUNBLEVBQUUsSUFBSSxNQUFNLEdBQUcsQ0FBQywyQkFBMkI7QUFDM0MsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRTtBQUNyQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUU7QUFDckMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHO0FBQ3RDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRztBQUN0QyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUc7QUFDdEMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHO0FBQ3RDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRztBQUN0QyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUU7QUFDckMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLGFBQWE7QUFDbEQsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHO0FBQ0g7QUFDQSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pDLElBQUksSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsWUFBWTtBQUMxQyxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtBQUM3RSxFQUFFLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyRCxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtBQUNqQixJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRztBQUNIO0FBQ0EsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO0FBQ3RELEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO0FBQ2pCLElBQUksT0FBTyxHQUFHLENBQUM7QUFDZixHQUFHO0FBQ0g7QUFDQSxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7QUFDMUQsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksbUJBQW1CLEVBQUU7QUFDeEMsSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNmLEdBQUc7QUFDSDtBQUNBLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUM1RCxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtBQUNqQixJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRztBQUNIO0FBQ0EsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO0FBQ3hELEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO0FBQ2pCLElBQUksT0FBTyxHQUFHLENBQUM7QUFDZixHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFDRCxPQUFPLENBQUMsMEJBQTBCLEdBQUcsMEJBQTBCLENBQUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7QUFDdkYsRUFBRSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7QUFDNUQsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7QUFDakIsSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNmLEdBQUc7QUFDSDtBQUNBLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUM1RCxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxvQkFBb0IsRUFBRTtBQUN6QyxJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRztBQUNIO0FBQ0EsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO0FBQ2pCLElBQUksT0FBTyxHQUFHLENBQUM7QUFDZixHQUFHO0FBQ0g7QUFDQSxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7QUFDdEQsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7QUFDakIsSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNmLEdBQUc7QUFDSDtBQUNBLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQztBQUMxRCxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtBQUNqQixJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBQ0QsT0FBTyxDQUFDLG1DQUFtQyxHQUFHLG1DQUFtQyxDQUFDO0FBQ2xGO0FBQ0EsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUM5QixFQUFFLElBQUksS0FBSyxLQUFLLEtBQUssRUFBRTtBQUN2QixJQUFJLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7QUFDdEIsSUFBSSxPQUFPLENBQUMsQ0FBQztBQUNiLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ3RCLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNkLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO0FBQ3JCLElBQUksT0FBTyxDQUFDLENBQUM7QUFDYixHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsbUNBQW1DLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUNqRSxFQUFFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztBQUM1RCxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtBQUNqQixJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRztBQUNIO0FBQ0EsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQzVELEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO0FBQ2pCLElBQUksT0FBTyxHQUFHLENBQUM7QUFDZixHQUFHO0FBQ0g7QUFDQSxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakQsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7QUFDakIsSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNmLEdBQUc7QUFDSDtBQUNBLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztBQUN0RCxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtBQUNqQixJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRztBQUNIO0FBQ0EsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO0FBQzFELEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO0FBQ2pCLElBQUksT0FBTyxHQUFHLENBQUM7QUFDZixHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFDRCxPQUFPLENBQUMsbUNBQW1DLEdBQUcsbUNBQW1DLENBQUM7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7QUFDbEMsRUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFDRCxPQUFPLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUU7QUFDL0QsRUFBRSxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztBQUM5QjtBQUNBLEVBQUUsSUFBSSxVQUFVLEVBQUU7QUFDbEI7QUFDQSxJQUFJLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7QUFDM0UsTUFBTSxVQUFVLElBQUksR0FBRyxDQUFDO0FBQ3hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxTQUFTLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUN2QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLFlBQVksRUFBRTtBQUNwQixJQUFJLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDakIsTUFBTSxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDMUQsS0FBSztBQUNMLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3JCO0FBQ0EsTUFBTSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQyxNQUFNLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtBQUN0QixRQUFRLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxRCxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDckQsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBQ0QsT0FBTyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0FBQzVDLENBQUMsQ0FBQyxDQUFDO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7QUFDMUMsSUFBSSxZQUFZLEdBQUcsT0FBTyxHQUFHLEtBQUssV0FBVyxDQUFDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLEdBQUc7QUFDcEIsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNuQixFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLENBQUMsU0FBUyxHQUFHLFNBQVMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFFO0FBQzNFLEVBQUUsSUFBSSxHQUFHLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUMzQixFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDckQsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3pDLEdBQUc7QUFDSCxFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLGFBQWEsR0FBRztBQUNuRCxFQUFFLE9BQU8sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3RGLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsWUFBWSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtBQUN2RSxFQUFFLElBQUksSUFBSSxHQUFHLFlBQVksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxRCxFQUFFLElBQUksV0FBVyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5RSxFQUFFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQy9CLEVBQUUsSUFBSSxDQUFDLFdBQVcsSUFBSSxnQkFBZ0IsRUFBRTtBQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLEdBQUc7QUFDSCxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDcEIsSUFBSSxJQUFJLFlBQVksRUFBRTtBQUN0QixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvQixLQUFLLE1BQU07QUFDWCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzVCLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3JELEVBQUUsSUFBSSxZQUFZLEVBQUU7QUFDcEIsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLEdBQUcsTUFBTTtBQUNULElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JDLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLGdCQUFnQixDQUFDLElBQUksRUFBRTtBQUM3RCxFQUFFLElBQUksWUFBWSxFQUFFO0FBQ3BCLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7QUFDbEIsUUFBUSxPQUFPLEdBQUcsQ0FBQztBQUNuQixLQUFLO0FBQ0wsR0FBRyxNQUFNO0FBQ1QsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7QUFDbkMsTUFBTSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLHNCQUFzQixDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFO0FBQ25ELEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUM5QyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QixHQUFHO0FBQ0gsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsZ0JBQWdCLEdBQUc7QUFDekQsRUFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDMUI7QUFDQSxJQUFJLFFBQVEsR0FBRztBQUNmLENBQUMsUUFBUSxFQUFFLFVBQVU7QUFDckIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxJQUFJLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLE1BQU0sRUFBRSxPQUFPLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2xELEVBQUUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEQsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7QUFDakI7QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRztBQUNILE9BQU8sSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO0FBQ3BCO0FBQ0EsSUFBSSxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFO0FBQ3pCO0FBQ0EsTUFBTSxPQUFPLGVBQWUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksS0FBSyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtBQUM1QyxNQUFNLE9BQU8sS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25ELEtBQUssTUFBTTtBQUNYLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDakIsS0FBSztBQUNMLEdBQUc7QUFDSCxPQUFPO0FBQ1A7QUFDQSxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7QUFDeEI7QUFDQSxNQUFNLE9BQU8sZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0UsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLElBQUksS0FBSyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtBQUM1QyxNQUFNLE9BQU8sR0FBRyxDQUFDO0FBQ2pCLEtBQUssTUFBTTtBQUNYLE1BQU0sT0FBTyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNsQyxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQ3RFLEVBQUUsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUM5QixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDZCxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksS0FBSyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTO0FBQ3RFLDhCQUE4QixRQUFRLEVBQUUsS0FBSyxJQUFJLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQy9FLEVBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQ2pCLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNkLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsT0FBTyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN6QixJQUFJLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN0RSxNQUFNLE1BQU07QUFDWixLQUFLO0FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUNaLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFDRixDQUFDLENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDekIsRUFBRSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNoQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ3JDLEVBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksVUFBVSxHQUFHLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEI7QUFDQSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUksSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2hDLE1BQU0sSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZixRQUFRLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFXLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzNDLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksV0FBVyxHQUFHLFVBQVUsR0FBRyxFQUFFLFVBQVUsRUFBRTtBQUM3QyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQztBQUNGO0FBQ0EsSUFBSSxTQUFTLEdBQUc7QUFDaEIsQ0FBQyxTQUFTLEVBQUUsV0FBVztBQUN2QixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7QUFDbkM7QUFDQSxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQ3RDO0FBQ0EsU0FBUyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFO0FBQ3RELEVBQUUsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDO0FBQzdCLEVBQUUsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7QUFDdEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JELEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxTQUFTLENBQUMsUUFBUSxJQUFJLElBQUk7QUFDbkMsTUFBTSxJQUFJLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUM7QUFDNUQsTUFBTSxJQUFJLHNCQUFzQixDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBQ0Q7QUFDQSxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxVQUFVLEVBQUUsYUFBYSxFQUFFO0FBQ3RFLEVBQUUsT0FBTyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3pFLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLG9CQUFvQixFQUFFO0FBQ3pFLEVBQUUsWUFBWSxFQUFFLElBQUk7QUFDcEIsRUFBRSxVQUFVLEVBQUUsSUFBSTtBQUNsQixFQUFFLEdBQUcsRUFBRSxZQUFZO0FBQ25CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtBQUNuQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0QsS0FBSztBQUNMO0FBQ0EsSUFBSSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztBQUNwQyxHQUFHO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDSDtBQUNBLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7QUFDdEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUU7QUFDeEUsRUFBRSxZQUFZLEVBQUUsSUFBSTtBQUNwQixFQUFFLFVBQVUsRUFBRSxJQUFJO0FBQ2xCLEVBQUUsR0FBRyxFQUFFLFlBQVk7QUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO0FBQ2xDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMzRCxLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQ25DLEdBQUc7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUNIO0FBQ0EsaUJBQWlCLENBQUMsU0FBUyxDQUFDLHVCQUF1QjtBQUNuRCxFQUFFLFNBQVMsd0NBQXdDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNqRSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztBQUNsQyxHQUFHLENBQUM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsY0FBYztBQUMxQyxFQUFFLFNBQVMsK0JBQStCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUM5RCxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztBQUNoRSxHQUFHLENBQUM7QUFDSjtBQUNBLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDdEMsaUJBQWlCLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUNyQztBQUNBLGlCQUFpQixDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztBQUMzQyxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxXQUFXO0FBQ3ZDLEVBQUUsU0FBUyw2QkFBNkIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtBQUN0RSxJQUFJLElBQUksT0FBTyxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUM7QUFDbkMsSUFBSSxJQUFJLEtBQUssR0FBRyxNQUFNLElBQUksaUJBQWlCLENBQUMsZUFBZSxDQUFDO0FBQzVEO0FBQ0EsSUFBSSxJQUFJLFFBQVEsQ0FBQztBQUNqQixJQUFJLFFBQVEsS0FBSztBQUNqQixJQUFJLEtBQUssaUJBQWlCLENBQUMsZUFBZTtBQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7QUFDekMsTUFBTSxNQUFNO0FBQ1osSUFBSSxLQUFLLGlCQUFpQixDQUFDLGNBQWM7QUFDekMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQ3hDLE1BQU0sTUFBTTtBQUNaLElBQUk7QUFDSixNQUFNLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUNyRCxLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDckMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsT0FBTyxFQUFFO0FBQ3BDLE1BQU0sSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyRixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDN0UsTUFBTSxPQUFPO0FBQ2IsUUFBUSxNQUFNLEVBQUUsTUFBTTtBQUN0QixRQUFRLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYTtBQUM1QyxRQUFRLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZTtBQUNoRCxRQUFRLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWTtBQUMxQyxRQUFRLGNBQWMsRUFBRSxPQUFPLENBQUMsY0FBYztBQUM5QyxRQUFRLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztBQUN6RSxPQUFPLENBQUM7QUFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6QyxHQUFHLENBQUM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLENBQUMsU0FBUyxDQUFDLHdCQUF3QjtBQUNwRCxFQUFFLFNBQVMsMENBQTBDLENBQUMsS0FBSyxFQUFFO0FBQzdELElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxNQUFNLEdBQUc7QUFDakIsTUFBTSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO0FBQzFDLE1BQU0sWUFBWSxFQUFFLElBQUk7QUFDeEIsTUFBTSxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNyRCxLQUFLLENBQUM7QUFDTjtBQUNBLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pELElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUMzQixNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQ2hCLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3RCO0FBQ0EsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07QUFDeEMsa0NBQWtDLElBQUksQ0FBQyxpQkFBaUI7QUFDeEQsa0NBQWtDLGNBQWM7QUFDaEQsa0NBQWtDLGdCQUFnQjtBQUNsRCxrQ0FBa0MsSUFBSSxDQUFDLDBCQUEwQjtBQUNqRSxrQ0FBa0MsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDbEUsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDcEIsTUFBTSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEQ7QUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDdEMsUUFBUSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLE9BQU8sT0FBTyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEtBQUssWUFBWSxFQUFFO0FBQ2pFLFVBQVUsUUFBUSxDQUFDLElBQUksQ0FBQztBQUN4QixZQUFZLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDO0FBQzdELFlBQVksTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQztBQUNqRSxZQUFZLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUM7QUFDekUsV0FBVyxDQUFDLENBQUM7QUFDYjtBQUNBLFVBQVUsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BELFNBQVM7QUFDVCxPQUFPLE1BQU07QUFDYixRQUFRLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsT0FBTyxPQUFPO0FBQ3RCLGVBQWUsT0FBTyxDQUFDLFlBQVksS0FBSyxJQUFJO0FBQzVDLGVBQWUsT0FBTyxDQUFDLGNBQWMsSUFBSSxjQUFjLEVBQUU7QUFDekQsVUFBVSxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFlBQVksSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUM7QUFDN0QsWUFBWSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDO0FBQ2pFLFlBQVksVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQztBQUN6RSxXQUFXLENBQUMsQ0FBQztBQUNiO0FBQ0EsVUFBVSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEQsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sUUFBUSxDQUFDO0FBQ3BCLEdBQUcsQ0FBQztBQUNKO0FBQ0EsSUFBSSxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFO0FBQzNELEVBQUUsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDO0FBQzdCLEVBQUUsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7QUFDdEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JELEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDbEQsRUFBRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNsRDtBQUNBO0FBQ0EsRUFBRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbEQsRUFBRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUQsRUFBRSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0RSxFQUFFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELEVBQUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNoQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFDdkQsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLFVBQVUsRUFBRTtBQUNsQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzVDLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxHQUFHLE9BQU87QUFDbkIsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUcsQ0FBQyxVQUFVLE1BQU0sRUFBRTtBQUMzQixNQUFNLE9BQU8sVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDakYsVUFBVSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUM7QUFDM0MsVUFBVSxNQUFNLENBQUM7QUFDakIsS0FBSyxDQUFDLENBQUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5RCxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEQ7QUFDQSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUNuRSxJQUFJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDL0QsR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDL0IsRUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztBQUN2QyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQzVCLEVBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDckMsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNuQixDQUFDO0FBQ0Q7QUFDQSxzQkFBc0IsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5RSxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxPQUFPLEVBQUU7QUFDdEUsRUFBRSxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUM7QUFDL0IsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO0FBQy9CLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUNwRSxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7QUFDekMsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2pELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1IsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDckQsSUFBSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDN0MsTUFBTSxPQUFPLENBQUMsQ0FBQztBQUNmLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixDQUFDLGFBQWE7QUFDcEMsRUFBRSxTQUFTLCtCQUErQixDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUU7QUFDdEUsSUFBSSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlEO0FBQ0EsSUFBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyRixJQUFJLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNGLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO0FBQzVDLElBQUksR0FBRyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7QUFDbEYsNERBQTRELEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1RSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztBQUNoQyxJQUFJLEdBQUcsQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ3RDLElBQUksR0FBRyxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ25FLE1BQU0sT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDckUsS0FBSyxDQUFDLENBQUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksaUJBQWlCLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuRSxJQUFJLElBQUkscUJBQXFCLEdBQUcsR0FBRyxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztBQUM3RCxJQUFJLElBQUksb0JBQW9CLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUMzRDtBQUNBLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3hFLE1BQU0sSUFBSSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUMsTUFBTSxJQUFJLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQztBQUNwQyxNQUFNLFdBQVcsQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztBQUMzRCxNQUFNLFdBQVcsQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztBQUMvRDtBQUNBLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO0FBQzdCLFFBQVEsV0FBVyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoRSxRQUFRLFdBQVcsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztBQUMzRCxRQUFRLFdBQVcsQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQztBQUMvRDtBQUNBLFFBQVEsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQzdCLFVBQVUsV0FBVyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1RCxTQUFTO0FBQ1Q7QUFDQSxRQUFRLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQyxPQUFPO0FBQ1A7QUFDQSxNQUFNLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM5QyxLQUFLO0FBQ0w7QUFDQSxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDekU7QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUNuRSxFQUFFLEdBQUcsRUFBRSxZQUFZO0FBQ25CLElBQUksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDekMsR0FBRztBQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU8sR0FBRztBQUNuQixFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLEVBQUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDM0IsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNyQixFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQzNCLEVBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDN0IsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNuQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLENBQUMsU0FBUyxDQUFDLGNBQWM7QUFDL0MsRUFBRSxTQUFTLCtCQUErQixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUU7QUFDOUQsSUFBSSxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDMUIsSUFBSSxJQUFJLHVCQUF1QixHQUFHLENBQUMsQ0FBQztBQUNwQyxJQUFJLElBQUksb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLElBQUksSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDbkMsSUFBSSxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDM0IsSUFBSSxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDekIsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzdCLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLElBQUksSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzVCLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLElBQUksSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDOUIsSUFBSSxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztBQUMvQixJQUFJLElBQUksT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQztBQUMxQztBQUNBLElBQUksT0FBTyxLQUFLLEdBQUcsTUFBTSxFQUFFO0FBQzNCLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUN0QyxRQUFRLGFBQWEsRUFBRSxDQUFDO0FBQ3hCLFFBQVEsS0FBSyxFQUFFLENBQUM7QUFDaEIsUUFBUSx1QkFBdUIsR0FBRyxDQUFDLENBQUM7QUFDcEMsT0FBTztBQUNQLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUMzQyxRQUFRLEtBQUssRUFBRSxDQUFDO0FBQ2hCLE9BQU87QUFDUCxXQUFXO0FBQ1gsUUFBUSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNoQyxRQUFRLE9BQU8sQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBSyxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDL0MsVUFBVSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDdkQsWUFBWSxNQUFNO0FBQ2xCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDckM7QUFDQSxRQUFRLE9BQU8sR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEMsUUFBUSxJQUFJLE9BQU8sRUFBRTtBQUNyQixVQUFVLEtBQUssSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQzlCLFNBQVMsTUFBTTtBQUNmLFVBQVUsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUN2QixVQUFVLE9BQU8sS0FBSyxHQUFHLEdBQUcsRUFBRTtBQUM5QixZQUFZLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRCxZQUFZLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQy9CLFlBQVksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDOUIsWUFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLFdBQVc7QUFDWDtBQUNBLFVBQVUsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUNwQyxZQUFZLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztBQUN0RSxXQUFXO0FBQ1g7QUFDQSxVQUFVLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDcEMsWUFBWSxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7QUFDdEUsV0FBVztBQUNYO0FBQ0EsVUFBVSxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQ3hDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxPQUFPLENBQUMsZUFBZSxHQUFHLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RSxRQUFRLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7QUFDMUQ7QUFDQSxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDaEM7QUFDQSxVQUFVLE9BQU8sQ0FBQyxNQUFNLEdBQUcsY0FBYyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RCxVQUFVLGNBQWMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkM7QUFDQTtBQUNBLFVBQVUsT0FBTyxDQUFDLFlBQVksR0FBRyxvQkFBb0IsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsVUFBVSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3REO0FBQ0EsVUFBVSxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztBQUNwQztBQUNBO0FBQ0EsVUFBVSxPQUFPLENBQUMsY0FBYyxHQUFHLHNCQUFzQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLHNCQUFzQixHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7QUFDMUQ7QUFDQSxVQUFVLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDbEM7QUFDQSxZQUFZLE9BQU8sQ0FBQyxJQUFJLEdBQUcsWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxZQUFZLFlBQVksSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLFFBQVEsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxZQUFZLEtBQUssUUFBUSxFQUFFO0FBQ3RELFVBQVUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsSUFBSSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDN0UsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsaUJBQWlCLENBQUM7QUFDakQ7QUFDQSxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNuRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUMvQyxHQUFHLENBQUM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLENBQUMsU0FBUyxDQUFDLFlBQVk7QUFDN0MsRUFBRSxTQUFTLDZCQUE2QixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUztBQUN0RSx5Q0FBeUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2pDLE1BQU0sTUFBTSxJQUFJLFNBQVMsQ0FBQywrQ0FBK0M7QUFDekUsNEJBQTRCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2hELEtBQUs7QUFDTCxJQUFJLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNsQyxNQUFNLE1BQU0sSUFBSSxTQUFTLENBQUMsaURBQWlEO0FBQzNFLDRCQUE0QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNsRCxLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN2RSxHQUFHLENBQUM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLENBQUMsU0FBUyxDQUFDLGtCQUFrQjtBQUNuRCxFQUFFLFNBQVMsb0NBQW9DLEdBQUc7QUFDbEQsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtBQUN6RSxNQUFNLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRTtBQUN0RCxRQUFRLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0Q7QUFDQSxRQUFRLElBQUksT0FBTyxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUMsYUFBYSxFQUFFO0FBQ2pFLFVBQVUsT0FBTyxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQ3hFLFVBQVUsU0FBUztBQUNuQixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLE9BQU8sQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUM7QUFDN0MsS0FBSztBQUNMLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLENBQUMsU0FBUyxDQUFDLG1CQUFtQjtBQUNwRCxFQUFFLFNBQVMscUNBQXFDLENBQUMsS0FBSyxFQUFFO0FBQ3hELElBQUksSUFBSSxNQUFNLEdBQUc7QUFDakIsTUFBTSxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0FBQy9DLE1BQU0sZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztBQUNuRCxLQUFLLENBQUM7QUFDTjtBQUNBLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVk7QUFDakMsTUFBTSxNQUFNO0FBQ1osTUFBTSxJQUFJLENBQUMsa0JBQWtCO0FBQzdCLE1BQU0sZUFBZTtBQUNyQixNQUFNLGlCQUFpQjtBQUN2QixNQUFNLElBQUksQ0FBQyxtQ0FBbUM7QUFDOUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLENBQUMsb0JBQW9CLENBQUM7QUFDeEUsS0FBSyxDQUFDO0FBQ047QUFDQSxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtBQUNwQixNQUFNLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRDtBQUNBLE1BQU0sSUFBSSxPQUFPLENBQUMsYUFBYSxLQUFLLE1BQU0sQ0FBQyxhQUFhLEVBQUU7QUFDMUQsUUFBUSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUQsUUFBUSxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7QUFDN0IsVUFBVSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUMsVUFBVSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN0RixTQUFTO0FBQ1QsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEQsUUFBUSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDM0IsVUFBVSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsU0FBUztBQUNULFFBQVEsT0FBTztBQUNmLFVBQVUsTUFBTSxFQUFFLE1BQU07QUFDeEIsVUFBVSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQztBQUMxRCxVQUFVLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7QUFDOUQsVUFBVSxJQUFJLEVBQUUsSUFBSTtBQUNwQixTQUFTLENBQUM7QUFDVixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsSUFBSSxPQUFPO0FBQ1gsTUFBTSxNQUFNLEVBQUUsSUFBSTtBQUNsQixNQUFNLElBQUksRUFBRSxJQUFJO0FBQ2hCLE1BQU0sTUFBTSxFQUFFLElBQUk7QUFDbEIsTUFBTSxJQUFJLEVBQUUsSUFBSTtBQUNoQixLQUFLLENBQUM7QUFDTixHQUFHLENBQUM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLENBQUMsU0FBUyxDQUFDLHVCQUF1QjtBQUN4RCxFQUFFLFNBQVMsOENBQThDLEdBQUc7QUFDNUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUM5QixNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTCxJQUFJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7QUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RFLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxnQkFBZ0I7QUFDakQsRUFBRSxTQUFTLGtDQUFrQyxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUU7QUFDdEUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUM5QixNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9DLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ3BCLE1BQU0sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDO0FBQ2pDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtBQUNqQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDdEUsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNaLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUk7QUFDL0IsWUFBWSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxjQUFjLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDcEUsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTTtBQUM5QixhQUFhLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQ2hELFFBQVEsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pFLE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUc7QUFDdkMsYUFBYSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLEVBQUU7QUFDdEQsUUFBUSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDaEYsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLGFBQWEsRUFBRTtBQUN2QixNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxTQUFTO0FBQ1QsTUFBTSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxjQUFjLEdBQUcsNEJBQTRCLENBQUMsQ0FBQztBQUMzRSxLQUFLO0FBQ0wsR0FBRyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLENBQUMsU0FBUyxDQUFDLG9CQUFvQjtBQUNyRCxFQUFFLFNBQVMsc0NBQXNDLENBQUMsS0FBSyxFQUFFO0FBQ3pELElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLElBQUksSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3BCLE1BQU0sT0FBTztBQUNiLFFBQVEsSUFBSSxFQUFFLElBQUk7QUFDbEIsUUFBUSxNQUFNLEVBQUUsSUFBSTtBQUNwQixRQUFRLFVBQVUsRUFBRSxJQUFJO0FBQ3hCLE9BQU8sQ0FBQztBQUNSLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxNQUFNLEdBQUc7QUFDakIsTUFBTSxNQUFNLEVBQUUsTUFBTTtBQUNwQixNQUFNLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7QUFDOUMsTUFBTSxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO0FBQ2xELEtBQUssQ0FBQztBQUNOO0FBQ0EsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWTtBQUNqQyxNQUFNLE1BQU07QUFDWixNQUFNLElBQUksQ0FBQyxpQkFBaUI7QUFDNUIsTUFBTSxjQUFjO0FBQ3BCLE1BQU0sZ0JBQWdCO0FBQ3RCLE1BQU0sSUFBSSxDQUFDLDBCQUEwQjtBQUNyQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQztBQUN4RSxLQUFLLENBQUM7QUFDTjtBQUNBLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ3BCLE1BQU0sSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xEO0FBQ0EsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUM1QyxRQUFRLE9BQU87QUFDZixVQUFVLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDO0FBQzNELFVBQVUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQztBQUMvRCxVQUFVLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUM7QUFDdkUsU0FBUyxDQUFDO0FBQ1YsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLElBQUksT0FBTztBQUNYLE1BQU0sSUFBSSxFQUFFLElBQUk7QUFDaEIsTUFBTSxNQUFNLEVBQUUsSUFBSTtBQUNsQixNQUFNLFVBQVUsRUFBRSxJQUFJO0FBQ3RCLEtBQUssQ0FBQztBQUNOLEdBQUcsQ0FBQztBQUNKO0FBQ0EsSUFBSSx3QkFBd0IsR0FBRyxzQkFBc0IsQ0FBQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFO0FBQzdELEVBQUUsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDO0FBQzdCLEVBQUUsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7QUFDdEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JELEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDbEQsRUFBRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNwRDtBQUNBLEVBQUUsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNoQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFDdkQsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFDbkMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFDakM7QUFDQSxFQUFFLElBQUksVUFBVSxHQUFHO0FBQ25CLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNaLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixHQUFHLENBQUM7QUFDSixFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUM3QyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUNmO0FBQ0E7QUFDQSxNQUFNLE1BQU0sSUFBSSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztBQUM1RSxLQUFLO0FBQ0wsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMxQyxJQUFJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELElBQUksSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDckQ7QUFDQSxJQUFJLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJO0FBQ3BDLFNBQVMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxJQUFJLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM5RSxNQUFNLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztBQUM5RSxLQUFLO0FBQ0wsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQ3hCO0FBQ0EsSUFBSSxPQUFPO0FBQ1gsTUFBTSxlQUFlLEVBQUU7QUFDdkI7QUFDQTtBQUNBLFFBQVEsYUFBYSxFQUFFLFVBQVUsR0FBRyxDQUFDO0FBQ3JDLFFBQVEsZUFBZSxFQUFFLFlBQVksR0FBRyxDQUFDO0FBQ3pDLE9BQU87QUFDUCxNQUFNLFFBQVEsRUFBRSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLGFBQWEsQ0FBQztBQUMzRSxLQUFLO0FBQ0wsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0Q7QUFDQSx3QkFBd0IsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNoRix3QkFBd0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDckUsRUFBRSxHQUFHLEVBQUUsWUFBWTtBQUNuQixJQUFJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNyQixJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwRCxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzFFLFFBQVEsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RCxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksT0FBTyxPQUFPLENBQUM7QUFDbkIsR0FBRztBQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxtQkFBbUI7QUFDdEQsRUFBRSxTQUFTLDRDQUE0QyxDQUFDLEtBQUssRUFBRTtBQUMvRCxJQUFJLElBQUksTUFBTSxHQUFHO0FBQ2pCLE1BQU0sYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztBQUMvQyxNQUFNLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7QUFDbkQsS0FBSyxDQUFDO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUztBQUNqRSxNQUFNLFNBQVMsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUNoQyxRQUFRLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7QUFDL0UsUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUNqQixVQUFVLE9BQU8sR0FBRyxDQUFDO0FBQ3JCLFNBQVM7QUFDVDtBQUNBLFFBQVEsUUFBUSxNQUFNLENBQUMsZUFBZTtBQUN0QyxnQkFBZ0IsT0FBTyxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUU7QUFDekQsT0FBTyxDQUFDLENBQUM7QUFDVCxJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDL0M7QUFDQSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDbEIsTUFBTSxPQUFPO0FBQ2IsUUFBUSxNQUFNLEVBQUUsSUFBSTtBQUNwQixRQUFRLElBQUksRUFBRSxJQUFJO0FBQ2xCLFFBQVEsTUFBTSxFQUFFLElBQUk7QUFDcEIsUUFBUSxJQUFJLEVBQUUsSUFBSTtBQUNsQixPQUFPLENBQUM7QUFDUixLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztBQUNoRCxNQUFNLElBQUksRUFBRSxNQUFNLENBQUMsYUFBYTtBQUNoQyxTQUFTLE9BQU8sQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztBQUNuRCxNQUFNLE1BQU0sRUFBRSxNQUFNLENBQUMsZUFBZTtBQUNwQyxTQUFTLE9BQU8sQ0FBQyxlQUFlLENBQUMsYUFBYSxLQUFLLE1BQU0sQ0FBQyxhQUFhO0FBQ3ZFLFdBQVcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxlQUFlLEdBQUcsQ0FBQztBQUN0RCxXQUFXLENBQUMsQ0FBQztBQUNiLE1BQU0sSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO0FBQ3RCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyx1QkFBdUI7QUFDMUQsRUFBRSxTQUFTLGdEQUFnRCxHQUFHO0FBQzlELElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUM3QyxNQUFNLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ2xELEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLENBQUMsU0FBUyxDQUFDLGdCQUFnQjtBQUNuRCxFQUFFLFNBQVMseUNBQXlDLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRTtBQUM3RSxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwRCxNQUFNLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEM7QUFDQSxNQUFNLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JFLE1BQU0sSUFBSSxPQUFPLEVBQUU7QUFDbkIsUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUN2QixPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksSUFBSSxhQUFhLEVBQUU7QUFDdkIsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLO0FBQ0wsU0FBUztBQUNULE1BQU0sTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxHQUFHLDRCQUE0QixDQUFDLENBQUM7QUFDcEUsS0FBSztBQUNMLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLENBQUMsU0FBUyxDQUFDLG9CQUFvQjtBQUN2RCxFQUFFLFNBQVMsNkNBQTZDLENBQUMsS0FBSyxFQUFFO0FBQ2hFLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3BELE1BQU0sSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ2xGLFFBQVEsU0FBUztBQUNqQixPQUFPO0FBQ1AsTUFBTSxJQUFJLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0UsTUFBTSxJQUFJLGlCQUFpQixFQUFFO0FBQzdCLFFBQVEsSUFBSSxHQUFHLEdBQUc7QUFDbEIsVUFBVSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtBQUN0QyxhQUFhLE9BQU8sQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN2RCxVQUFVLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxNQUFNO0FBQzFDLGFBQWEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxhQUFhLEtBQUssaUJBQWlCLENBQUMsSUFBSTtBQUM3RSxlQUFlLE9BQU8sQ0FBQyxlQUFlLENBQUMsZUFBZSxHQUFHLENBQUM7QUFDMUQsZUFBZSxDQUFDLENBQUM7QUFDakIsU0FBUyxDQUFDO0FBQ1YsUUFBUSxPQUFPLEdBQUcsQ0FBQztBQUNuQixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsSUFBSSxPQUFPO0FBQ1gsTUFBTSxJQUFJLEVBQUUsSUFBSTtBQUNoQixNQUFNLE1BQU0sRUFBRSxJQUFJO0FBQ2xCLEtBQUssQ0FBQztBQUNOLEdBQUcsQ0FBQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxjQUFjO0FBQ2pELEVBQUUsU0FBUyxzQ0FBc0MsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3JFLElBQUksSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztBQUNsQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7QUFDakMsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDcEQsTUFBTSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRSxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZELFFBQVEsSUFBSSxPQUFPLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDO0FBQ0EsUUFBUSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xFLFFBQVEsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2hHLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEMsUUFBUSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0M7QUFDQSxRQUFRLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUN4QixRQUFRLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtBQUMxQixVQUFVLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFELFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsVUFBVSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQUksZUFBZSxHQUFHO0FBQzlCLFVBQVUsTUFBTSxFQUFFLE1BQU07QUFDeEIsVUFBVSxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWE7QUFDOUMsYUFBYSxPQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDdkQsVUFBVSxlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWU7QUFDbEQsYUFBYSxPQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsYUFBYTtBQUM1RSxjQUFjLE9BQU8sQ0FBQyxlQUFlLENBQUMsZUFBZSxHQUFHLENBQUM7QUFDekQsY0FBYyxDQUFDLENBQUM7QUFDaEIsVUFBVSxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVk7QUFDNUMsVUFBVSxjQUFjLEVBQUUsT0FBTyxDQUFDLGNBQWM7QUFDaEQsVUFBVSxJQUFJLEVBQUUsSUFBSTtBQUNwQixTQUFTLENBQUM7QUFDVjtBQUNBLFFBQVEsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN2RCxRQUFRLElBQUksT0FBTyxlQUFlLENBQUMsWUFBWSxLQUFLLFFBQVEsRUFBRTtBQUM5RCxVQUFVLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDeEQsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDcEYsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQzFFLEdBQUcsQ0FBQztBQUNKO0FBQ0EsSUFBSSwwQkFBMEIsR0FBRyx3QkFBd0IsQ0FBQztBQUMxRDtBQUNBLElBQUksaUJBQWlCLEdBQUc7QUFDeEIsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUI7QUFDdkMsQ0FBQyxzQkFBc0IsRUFBRSx3QkFBd0I7QUFDakQsQ0FBQyx3QkFBd0IsRUFBRSwwQkFBMEI7QUFDckQsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxJQUFJLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQzlEO0FBQ0EsU0FBUyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU7QUFDckMsSUFBSSxNQUFNLFFBQVEsR0FBRyxRQUFRO0FBQzdCLFNBQVMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUNwQixTQUFTLE9BQU8sRUFBRTtBQUNsQixTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixJQUFJLE1BQU0sS0FBSyxHQUFHLHlEQUF5RCxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzRixJQUFJLElBQUksS0FBSztBQUNiLFFBQVEsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBQ0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUM3QixTQUFTLGlCQUFpQixDQUFDLFNBQVMsRUFBRTtBQUN0QyxJQUFJLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNuQyxRQUFRLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6QyxLQUFLO0FBQ0wsSUFBSSxJQUFJO0FBQ1IsUUFBUSxNQUFNLElBQUksR0FBR0Msc0JBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELFFBQVEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDeEMsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixLQUFLO0FBQ0wsSUFBSSxPQUFPLEVBQUUsRUFBRTtBQUNmLFFBQVEsT0FBTyxTQUFTLENBQUM7QUFDekIsS0FBSztBQUNMLENBQUM7QUFDRCxTQUFTLG9CQUFvQixDQUFDLEtBQUssRUFBRTtBQUNyQyxJQUFJLE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsc0RBQXNELEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxLQUFLO0FBQ3JKLFFBQVEsSUFBSSxDQUFDLFNBQVM7QUFDdEIsWUFBWSxPQUFPLEtBQUssQ0FBQztBQUN6QixRQUFRLE1BQU0sUUFBUSxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RELFFBQVEsSUFBSSxDQUFDLFFBQVE7QUFDckIsWUFBWSxPQUFPLEtBQUssQ0FBQztBQUN6QixRQUFRLE1BQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFELFFBQVEsSUFBSSxDQUFDLGFBQWE7QUFDMUIsWUFBWSxPQUFPLEtBQUssQ0FBQztBQUN6QixRQUFRLElBQUksR0FBRyxHQUFHQyx3QkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxQyxRQUFRLElBQUksY0FBYyxDQUFDO0FBQzNCLFFBQVEsSUFBSSxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDdkUsWUFBWSxNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakYsWUFBWSxJQUFJO0FBQ2hCLGdCQUFnQixjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUUsYUFBYTtBQUNiLFlBQVksT0FBTyxFQUFFLEVBQUU7QUFDdkIsZ0JBQWdCLE9BQU8sS0FBSyxDQUFDO0FBQzdCLGFBQWE7QUFDYixTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksTUFBTSxjQUFjLEdBQUdBLHdCQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNwRSxZQUFZLE1BQU0sSUFBSSxHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzNELFlBQVksSUFBSSxDQUFDLElBQUk7QUFDckIsZ0JBQWdCLE9BQU8sS0FBSyxDQUFDO0FBQzdCLFlBQVksY0FBYyxHQUFHLElBQUksQ0FBQztBQUNsQyxZQUFZLEdBQUcsR0FBR0Esd0JBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDL0MsU0FBUztBQUNULFFBQVEsSUFBSSxhQUFhLENBQUM7QUFDMUIsUUFBUSxJQUFJO0FBQ1osWUFBWSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN2RCxTQUFTO0FBQ1QsUUFBUSxPQUFPLEVBQUUsRUFBRTtBQUNuQixZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLFNBQVM7QUFDVCxRQUFRLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDaEUsUUFBUSxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsbUJBQW1CLENBQUM7QUFDakQsWUFBWSxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNsQyxZQUFZLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2xDLFlBQVksSUFBSSxFQUFFLG1CQUFtQixDQUFDLGlCQUFpQjtBQUN2RCxTQUFTLENBQUMsQ0FBQztBQUNYLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO0FBQ3ZCLFlBQVksT0FBTyxLQUFLLENBQUM7QUFDekIsUUFBUSxNQUFNLFdBQVcsR0FBR0Esd0JBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxRCxRQUFRLE1BQU0sTUFBTSxHQUFHLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUUsUUFBUSxJQUFJLENBQUMsUUFBUTtBQUNyQixZQUFZLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN0QyxRQUFRLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEQsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN2QixJQUFJLE9BQU8sS0FBSztBQUNoQixTQUFTLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDcEIsU0FBUyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBQ3JCLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLENBQUM7QUFDRDtBQUNBLFNBQVMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRTtBQUNwRCxJQUFJLE1BQU0sY0FBYyxHQUNmLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDRCxzQkFBRSxDQUFDLFlBQVksQ0FBQ0Msd0JBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hGLFFBQTRHLENBQUM7QUFDN0csSUFBSSxNQUFNLFFBQVEsR0FDVCxDQUFDLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUN0QyxRQUFzRCxDQUFDO0FBQ3ZELElBQUksTUFBTSxrQkFBa0IsR0FBR0Qsc0JBQUUsQ0FBQyxVQUFVLENBQUNDLHdCQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7QUFDeEYsSUFBSSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsR0FBRyxRQUFRLENBQUM7QUFDbkQsSUFBSSxTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQzVCLFFBQVEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQixRQUFRLE1BQU0sT0FBTyxHQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUEwQixDQUFDO0FBQ2pILFFBQVEsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDN0IsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLEtBQUs7QUFDTCxJQUFJLFNBQVMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtBQUN2RCxRQUFRLFdBQVcsQ0FBQztBQUNwQixZQUFZLE9BQU8sRUFBRSxJQUFJO0FBQ3pCLFlBQVksS0FBSyxFQUFFO0FBQ25CLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFO0FBQ25FLGFBQWE7QUFDYixTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxJQUFJLGVBQWUsQ0FBQyxDQUFDO0FBQzNELEtBQUs7QUFDTCxJQUFJLFNBQVMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sR0FBRyxHQUFHLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRTtBQUNyRSxRQUFRLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNuQixRQUFRLE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxhQUFhO0FBQzVELFlBQVksTUFBTSx1QkFBdUIsR0FBRyxHQUFHLENBQUMsSUFBSSxLQUFLLDRCQUE0QixDQUFDO0FBQ3RGLFlBQVksTUFBTSxVQUFVLEdBQUcsY0FBYyxFQUFFLENBQUM7QUFDaEQsWUFBWSxHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN2RDtBQUNBO0FBQ0EsWUFBWSxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFILFlBQVksSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLEtBQUssSUFBSSxJQUFJLFVBQVUsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxNQUFNLElBQUksSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRTtBQUM1SSxnQkFBZ0IsYUFBYSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsVUFBVSxLQUFLLElBQUksSUFBSSxVQUFVLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsTUFBTSxJQUFJLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqTCxhQUFhO0FBQ2IsWUFBWSxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDcEMsWUFBWSxJQUFJLFVBQVUsQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQ2pELGdCQUFnQixXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ25DLGdCQUFnQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNyRSxnQkFBZ0IsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1RCxnQkFBZ0IsSUFBSSxJQUFJLEVBQUU7QUFDMUIsb0JBQW9CLGFBQWEsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9ELGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsaUJBQWlCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtBQUN6RCxnQkFBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJO0FBQzNDLG9CQUFvQixJQUFJLENBQUMsSUFBSTtBQUM3Qix3QkFBd0IsT0FBTztBQUMvQjtBQUNBLG9CQUFvQixhQUFhLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3ZGLGlCQUFpQixDQUFDLENBQUM7QUFDbkIsYUFBYTtBQUNiLFlBQVksTUFBTSxJQUFJLEdBQUcsYUFBYTtBQUN0QyxpQkFBaUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEQsaUJBQWlCLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5RCxpQkFBaUIsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLO0FBQy9CLGdCQUFnQixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFDcEUsZ0JBQWdCLE1BQU0sR0FBRyxHQUFHLFdBQVcsSUFBSSxFQUFFLEtBQUssUUFBUSxHQUFHLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFDekYsZ0JBQWdCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRixhQUFhLENBQUM7QUFDZCxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLFlBQVksR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDeEMsWUFBWSxJQUFJLE9BQU8sQ0FBQztBQUN4QixZQUFZLElBQUk7QUFDaEIsZ0JBQWdCLE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDekQsYUFBYTtBQUNiLFlBQVksT0FBTyxHQUFHLEVBQUU7QUFDeEIsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0QyxhQUFhO0FBQ2IsWUFBWSxJQUFJLFFBQVEsQ0FBQztBQUN6QixZQUFZLElBQUksYUFBYSxDQUFDO0FBQzlCLFlBQVksTUFBTSxlQUFlLEdBQUc7QUFDcEMsZ0JBQWdCLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxRQUFRLEtBQUs7QUFDcEQsb0JBQW9CLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLEVBQUU7QUFDNUcsd0JBQXdCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNqRSxxQkFBcUI7QUFDckIsb0JBQW9CLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM1RCxvQkFBb0IsUUFBUSxHQUFHLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ3hELGlCQUFpQjtBQUNqQixnQkFBZ0IsS0FBSyxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sS0FBSztBQUNoRCxvQkFBb0IsYUFBYSxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQzVELGlCQUFpQjtBQUNqQixnQkFBZ0IsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksS0FBSztBQUN0QyxvQkFBb0IsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUM3RSxvQkFBb0IsTUFBTSxNQUFNLEdBQUcsSUFBSUosdUJBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUksb0JBQW9CLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuRCxvQkFBb0IsTUFBTSxtQkFBbUIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVM7QUFDL0Usd0JBQXdCLElBQUksQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEgsb0JBQW9CLElBQUksbUJBQW1CLEVBQUU7QUFDN0Msd0JBQXdCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZFLHdCQUF3QixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakksd0JBQXdCLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkUsd0JBQXdCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUs7QUFDL0YsNEJBQTRCLE1BQU0sQ0FBQyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRSw0QkFBNEIsSUFBSSxDQUFDO0FBQ2pDLGdDQUFnQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELHlCQUF5QixDQUFDLENBQUM7QUFDM0Isd0JBQXdCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hELDZCQUE2QixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakUsNkJBQTZCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4Qyx3QkFBd0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2xELHdCQUF3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7QUFDdEYsNEJBQTRCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ25GLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsb0JBQW9CLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEQsaUJBQWlCO0FBQ2pCLGFBQWEsQ0FBQztBQUNkLFlBQVksSUFBSSxTQUFTLENBQUM7QUFDMUIsWUFBWSxJQUFJLEtBQUssQ0FBQztBQUN0QixZQUFZLElBQUksTUFBTSxDQUFDO0FBQ3ZCLFlBQVksSUFBSTtBQUNoQixnQkFBZ0IsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEtBQUssTUFBTSxHQUFHLENBQUMsQ0FBQztBQUMvRSxnQkFBZ0IsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7QUFDMUUsb0JBQW9CLElBQUksRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUk7QUFDMUMsb0JBQW9CLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtBQUNsQyxvQkFBb0IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO0FBQ3BDLG9CQUFvQixNQUFNLEVBQUUsRUFBRTtBQUM5QixpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1QixnQkFBZ0IsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25FLGdCQUFnQixJQUFJLFNBQVMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2pELGdCQUFnQixJQUFJLENBQUMsdUJBQXVCLEVBQUU7QUFDOUMsb0JBQW9CLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSTtBQUN4RSx3QkFBd0IsSUFBSSxDQUFDLElBQUk7QUFDakMsNEJBQTRCLE9BQU8sSUFBSSxDQUFDO0FBQ3hDO0FBQ0Esd0JBQXdCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3ZFLHdCQUF3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTztBQUNyRCw4QkFBOEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtBQUMzRSxnQ0FBZ0MsSUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSTtBQUN0RCxnQ0FBZ0MsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO0FBQzlDLGdDQUFnQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7QUFDaEQsZ0NBQWdDLE1BQU07QUFDdEMsNkJBQTZCLEVBQUUsT0FBTyxDQUFDO0FBQ3ZDLDhCQUE4QixFQUFFLENBQUM7QUFDakMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLGlCQUFpQjtBQUNqQixnQkFBZ0IsU0FBUyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6RCxhQUFhO0FBQ2IsWUFBWSxPQUFPLEdBQUcsRUFBRTtBQUN4QixnQkFBZ0IsSUFBSSxLQUFLLEVBQUU7QUFDM0Isb0JBQW9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMxQyxpQkFBaUI7QUFDakIsZ0JBQWdCLGFBQWEsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2xFLGdCQUFnQixTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQy9CLGFBQWE7QUFDYixZQUFZLElBQUk7QUFDaEIsZ0JBQWdCLElBQUksUUFBUSxFQUFFO0FBQzlCLG9CQUFvQixNQUFNLFFBQVEsR0FBR0EsdUJBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9GLG9CQUFvQixHQUFHLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7QUFDekQsb0JBQW9CLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hELG9CQUFvQixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDOUIsb0JBQW9CLE9BQU87QUFDM0IsaUJBQWlCO0FBQ2pCLGdCQUFnQixJQUFJLGFBQWEsRUFBRTtBQUNuQyxvQkFBb0IsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNoQyx3QkFBd0IsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsYUFBYSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEcscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6Qix3QkFBd0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekQscUJBQXFCO0FBQ3JCLG9CQUFvQixPQUFPO0FBQzNCLGlCQUFpQjtBQUNqQixnQkFBZ0IsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JFO0FBQ0EsZ0JBQWdCLE1BQU0sZUFBZSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEQsZ0JBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixnQkFBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLO0FBQ2hELG9CQUFvQixlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6RCxvQkFBb0IsSUFBSSxDQUFDLElBQUk7QUFDN0Isd0JBQXdCLE9BQU8sSUFBSSxDQUFDO0FBQ3BDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQztBQUN4QixpQkFBaUIsQ0FBQyxDQUFDO0FBQ25CLGdCQUFnQixJQUFJLEtBQUssWUFBWSxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtBQUMzRCxvQkFBb0IsS0FBSyxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEUsaUJBQWlCO0FBQ2pCLGdCQUFnQixNQUFNLFdBQVcsR0FBRztBQUNwQyxvQkFBb0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSTtBQUMxQyxvQkFBb0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO0FBQ2xDLG9CQUFvQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7QUFDcEMsb0JBQW9CLE1BQU07QUFDMUIsb0JBQW9CLEtBQUssRUFBRSxLQUFLO0FBQ2hDLDBCQUEwQixLQUFLLFlBQVksS0FBSztBQUNoRCw4QkFBOEIsS0FBSztBQUNuQyw4QkFBOEIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7QUFDdEUsMEJBQTBCLElBQUk7QUFDOUIsaUJBQWlCLENBQUM7QUFDbEIsZ0JBQWdCLE1BQU0sS0FBSyxHQUFHO0FBQzlCLG9CQUFvQixNQUFNLEVBQUU7QUFDNUIsd0JBQXdCLElBQUksRUFBRTtBQUM5Qiw0QkFBNEIsU0FBUyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTO0FBQ3RFLHlCQUF5QjtBQUN6Qix3QkFBd0IsVUFBVSxFQUFFO0FBQ3BDLDRCQUE0QixTQUFTLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7QUFDL0QseUJBQXlCO0FBQ3pCLHdCQUF3QixPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUNsRCxxQkFBcUI7QUFDckIsb0JBQW9CLFFBQVEsRUFBRSxlQUFlO0FBQzdDLG9CQUFvQixNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sR0FBRyxHQUFHO0FBQ2hELG9CQUFvQixLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7QUFDNUMsb0JBQW9CLE1BQU0sRUFBRTtBQUM1Qix3QkFBd0IsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDM0MscUJBQXFCO0FBQ3JCLG9CQUFvQixNQUFNLEVBQUU7QUFDNUIsd0JBQXdCLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzVDLHdCQUF3QixLQUFLLEVBQUUsRUFBRTtBQUNqQyxxQkFBcUI7QUFDckIsaUJBQWlCLENBQUM7QUFDbEIsZ0JBQWdCLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtBQUM5QyxvQkFBb0IsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLG9CQUFvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNuRSx3QkFBd0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRCx3QkFBd0IsSUFBSSxDQUFDLElBQUk7QUFDakMsNEJBQTRCLFNBQVM7QUFDckMsd0JBQXdCLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRztBQUN6RCw0QkFBNEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTztBQUM3RCw0QkFBNEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUN6RCw0QkFBNEIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDaEQseUJBQXlCLENBQUM7QUFDMUIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixnQkFBZ0IsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5RCxnQkFBZ0IsTUFBTSxVQUFVLEdBQUc7QUFDbkMsb0JBQW9CLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSTtBQUNwRix3QkFBd0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLHFFQUFxRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUosd0JBQXdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNktBQTZLLENBQUMsQ0FBQztBQUNwTixxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxvQkFBb0IsT0FBTyxFQUFFLE9BQU8sSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSTtBQUN0RSx3QkFBd0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUYscUJBQXFCLENBQUM7QUFDdEIsb0JBQW9CLEtBQUssRUFBRSxLQUFLLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDaEUsaUJBQWlCLENBQUM7QUFDbEIsZ0JBQWdCLElBQUksTUFBTSxHQUFHLENBQUMsWUFBWSxFQUFFO0FBQzVDLG9CQUFvQixLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDekUsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzlDLG9CQUFvQixVQUFVLENBQUMsU0FBUyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvRSxvQkFBb0IsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoRCxnQkFBZ0IsSUFBSSxrQkFBa0IsRUFBRTtBQUN4QyxvQkFBb0IsTUFBTSxJQUFJLENBQUMsa0VBQWtFLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3RJLGlCQUFpQjtBQUNqQixnQkFBZ0IsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRyxnQkFBZ0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0Q7QUFDQSxnQkFBZ0IsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUM3RixnQkFBZ0IsTUFBTSxVQUFVLEdBQUcsV0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDaEYsZ0JBQWdCLElBQUksVUFBVSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFDckQsb0JBQW9CLElBQUksVUFBVSxDQUFDLGFBQWEsRUFBRTtBQUNsRCx3QkFBd0IsTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM1Ryx3QkFBd0IsTUFBTSxJQUFJLENBQUMsdURBQXVELEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyw0SkFBNEosRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMseUVBQXlFLENBQUMsQ0FBQztBQUM1WixxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLHdCQUF3QixNQUFNLElBQUksQ0FBQyxvRkFBb0YsRUFBRSxJQUFJLENBQUMsbUVBQW1FLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQy9ULHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLG9CQUFvQixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRixpQkFBaUI7QUFDakIsZ0JBQWdCLElBQUksTUFBTSxDQUFDO0FBQzNCO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQzNELG9CQUFvQixNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BFLG9CQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUk7QUFDL0Msd0JBQXdCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWTtBQUM3RCw0QkFBNEIsT0FBTztBQUNuQyx3QkFBd0IsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakYsd0JBQXdCLElBQUksYUFBYSxFQUFFO0FBQzNDLDRCQUE0QixhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSTtBQUMzRixnQ0FBZ0MsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RCw2QkFBNkIsQ0FBQyxDQUFDO0FBQy9CLHlCQUF5QjtBQUN6QixxQkFBcUIsQ0FBQyxDQUFDO0FBQ3ZCLG9CQUFvQixNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDbkQseUJBQXlCLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckYseUJBQXlCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsQyxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLG9CQUFvQixNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2hHLGlCQUFpQjtBQUNqQixnQkFBZ0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxFQUFFO0FBQ3ZDLHFCQUFxQixPQUFPLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwRixxQkFBcUIsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakcscUJBQXFCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDekQscUJBQXFCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDekQscUJBQXFCLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RCxxQkFBcUIsT0FBTyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDLENBQUM7QUFDdkUsZ0JBQWdCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQ3hDLGdCQUFnQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLGFBQWE7QUFDYixZQUFZLE9BQU8sR0FBRyxFQUFFO0FBQ3hCLGdCQUFnQixJQUFJLEtBQUssRUFBRTtBQUMzQixvQkFBb0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNuQyxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLG9CQUFvQixZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDckQsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTLENBQUMsQ0FBQztBQUNYLEtBQUs7QUFDTCxJQUFJLE9BQU8sU0FBUyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDL0MsUUFBUSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxLQUFLLDRCQUE0QixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQ2hGLFFBQVEsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNqRSxRQUFRLElBQUksSUFBSSxFQUFFO0FBQ2xCLFlBQVksV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEMsU0FBUztBQUNULGFBQWE7QUFDYixZQUFZLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNyRCxTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sQ0FBQztBQUNELFNBQVMsYUFBYSxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUU7QUFDeEMsSUFBSSxPQUFPRyxzQkFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFDRCxTQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ25DLElBQUksSUFBSTtBQUNSLFFBQVEsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsS0FBSztBQUNMLElBQUksT0FBTyxHQUFHLEVBQUU7QUFDaEIsUUFBUSxJQUFJLElBQUk7QUFDaEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsU0FBUyxlQUFlLENBQUMsS0FBSyxFQUFFO0FBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUs7QUFDZCxRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3BCLElBQUksSUFBSSxVQUFVLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNyQixRQUFRLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQztBQUMvQyxRQUFRLFVBQVUsR0FBRyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDN0QsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNyQixRQUFRLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDMUIsS0FBSztBQUNMLElBQUksT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQUNELFNBQVMsV0FBVyxDQUFDLElBQUksRUFBRTtBQUMzQixJQUFJLE1BQU0sS0FBSyxHQUFHO0FBQ2xCLFFBQVEsR0FBRyxFQUFFLE1BQU07QUFDbkIsUUFBUSxJQUFJLEVBQUUsS0FBSztBQUNuQixRQUFRLEdBQUcsRUFBRSxLQUFLO0FBQ2xCLFFBQVEsR0FBRyxFQUFFLElBQUk7QUFDakIsUUFBUSxHQUFHLEVBQUUsSUFBSTtBQUNqQixLQUFLLENBQUM7QUFDTixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFDRDtBQUNBLFNBQVMsVUFBVSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUU7QUFDL0IsSUFBSSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztBQUNyQyxJQUFJLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLElBQUksT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7QUFDcEMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxLQUFLO0FBQzVCLFlBQVksSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtBQUMzQyxnQkFBZ0IsSUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQzdELGdCQUFnQixJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUNwRixvQkFBb0IsV0FBVyxJQUFJLEdBQUcsQ0FBQztBQUN2QyxpQkFBaUI7QUFDakIsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsV0FBVztBQUN6QyxzQkFBc0IsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUMzRCxzQkFBc0IsRUFBRSxDQUFDO0FBQ3pCLGFBQWE7QUFDYixZQUFZLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ25ELGdCQUFnQixPQUFPLENBQUMsSUFBSSxDQUFDO0FBQzdCLG9CQUFvQixVQUFVLEVBQUUsSUFBSTtBQUNwQyxvQkFBb0IsS0FBSyxFQUFFLFVBQVU7QUFDckMsb0JBQW9CLFFBQVEsRUFBRSxHQUFHLENBQUMsT0FBTztBQUN6QyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ25CLGdCQUFnQixnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDeEMsYUFBYTtBQUNiLFlBQVksSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUN4QyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkQsYUFBYTtBQUNiLFlBQVksSUFBSSxFQUFFLENBQUM7QUFDbkIsU0FBUztBQUNULFFBQVFBLHNCQUFFLENBQUMsVUFBVSxDQUFDQyx3QkFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUMxRSxZQUFZLFFBQVEsRUFBRSxvQkFBb0I7QUFDMUMsWUFBWSxhQUFhLEVBQUUscUNBQXFDO0FBQ2hFLFNBQVMsQ0FBQztBQUNWLFFBQVFELHNCQUFFLENBQUMsVUFBVSxDQUFDQyx3QkFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUM5RSxZQUFZLFFBQVEsRUFBRSx3QkFBd0I7QUFDOUMsWUFBWSxhQUFhLEVBQUUscUNBQXFDO0FBQ2hFLFNBQVMsQ0FBQztBQUNWLFFBQVEsS0FBSyxDQUFDO0FBQ2QsWUFBWSxNQUFNLEVBQUUsVUFBVTtBQUM5QixZQUFZLGFBQWEsRUFBTyxDQUFDLFVBQVUsQ0FBZ0M7QUFDM0UsU0FBUyxDQUFDO0FBQ1YsUUFBUSx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0FBQ3hELFFBQVEsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSUMsTUFBSSxDQUFDO0FBQ25ELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBQ0QsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFO0FBQzVDLElBQUksTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUNsQyxJQUFJLFNBQVMsV0FBVyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUM1QyxRQUFRLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtBQUN4QixZQUFZLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDMUIsU0FBUztBQUNULFFBQVEsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDeEUsS0FBSztBQUNMLElBQUksT0FBTyxDQUFDLE1BQU07QUFDbEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7QUFDNUQsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxLQUFLO0FBQzlCLFlBQVksSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRTtBQUNqRCxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7QUFDdkIsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixnQkFBZ0IsV0FBVyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9DLGFBQWE7QUFDYixTQUFTLENBQUM7QUFDVixDQUFDO0FBQ0QsU0FBUyxhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNqQyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDMUIsUUFBUSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRCxJQUFJLElBQUksR0FBRyxZQUFZLE1BQU07QUFDN0IsUUFBUSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsSUFBSSxJQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVU7QUFDakMsUUFBUSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QixJQUFJLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFDRCxTQUFTLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEVBQUU7QUFDcEQsSUFBSSxNQUFNLE1BQU0sR0FBRyxRQUFRO0FBQzNCLFVBQVUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRO0FBQ3hDLFVBQVUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFL0MsSUFBSSxNQUFNLElBQUksR0FDTCxDQUFDLENBQUMsSUFBSSxLQUFLRixzQkFBRSxDQUFDLFlBQVksQ0FBQ0Msd0JBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9ELFFBQXNILENBQUM7QUFDdkgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEtBQUs7QUFDL0IsUUFBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN6QixZQUFZLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hELFlBQVksSUFBSTtBQUNoQixnQkFBZ0IsTUFBTSxJQUFJLEdBQUdBLHdCQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNoRixnQkFBZ0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hDLGdCQUFnQixHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRCxnQkFBZ0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDOUQsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsYUFBYTtBQUNiLFlBQVksT0FBTyxHQUFHLEVBQUU7QUFDeEIsZ0JBQWdCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDM0Msb0JBQW9CLElBQUksRUFBRSxDQUFDO0FBQzNCLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsb0JBQW9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkMsb0JBQW9CLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBQ3pDLG9CQUFvQixHQUFHLENBQUMsR0FBRyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7QUFDdkYsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksSUFBSSxFQUFFLENBQUM7QUFDbkIsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFTQyxNQUFJLEdBQUc7O0FDbHpKaEIsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ3ZDLE1BQU0sR0FBRyxHQUFHLFFBQVEsS0FBSyxhQUFhLENBQUM7QUFDdkM7QUFDQUMseUJBQUssRUFBRTtBQUNQLEVBQUUsR0FBRztBQUNMLEVBQUVDLCtCQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDL0IsRUFBRUMsd0JBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUN6QixFQUFFQyxVQUFpQixFQUFFO0FBQ3JCLEVBQUU7QUFDRixFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJO0FBQ3RCLEVBQUUsSUFBSSxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDckMsRUFBRSxDQUFDOzsifQ==
