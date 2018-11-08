import { CSSProperties } from 'react';
import { SvgTag, SvgVisual} from 'SvgVisual';

type align =  'left' | 'right' | 'justify' | 'center';

export const HtmlTag = {
    ...SvgTag,
    a: 'a',
    abbr: 'abbr',
    acronym: 'acronym',
    address: 'address',
    applet: 'applet',
    area: 'area',
    article: 'article',
    aside: 'aside',
    audio: 'audio',
    b: 'b',
    base: 'base',
    basefont: 'basefont',
    bdi: 'bdi',
    bdo: 'bdo',
    big: 'big',
    blockquote: 'blockquote',
    body: 'body',
    br: 'br',
    button: 'button',
    canvas: 'canvas',
    caption: 'caption',
    center: 'center',
    cite: 'cite',
    code: 'code',
    col: 'col',
    colgroup: 'colgroup',
    data: 'data',
    datalist: 'datalist',
    dd: 'dd',
    del: 'del',
    details: 'details',
    dfn: 'dfn',
    dialog: 'dialog',
    // dir: 'dir',
    div: 'div',
    dl: 'dl',
    dt: 'dt',
    em: 'em',
    embed: 'embed',
    fieldset: 'fieldset',
    figcaption: 'figcaption',
    figure: 'figure',
    // font: 'font',
    footer: 'footer',
    form: 'form',
    frame: 'frame',
    // frameset: 'frameset',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    head: 'head',
    header: 'header',
    hr: 'hr',
    html: 'html',
    i: 'i',
    iframe: 'iframe',
    img: 'img',
    input: 'input',
    ins: 'ins',
    kbd: 'kbd',
    label: 'label',
    legend: 'legend',
    li: 'li',
    link: 'link',
    main: 'main',
    map: 'map',
    mark: 'mark',
    meta: 'meta',
    meter: 'meter',
    nav: 'nav',
    // noframes: 'noframes',
    noscript: 'noscript',
    object: 'object',
    ol: 'ol',
    optgroup: 'optgroup',
    option: 'option',
    output: 'output',
    p: 'p',
    param: 'param',
    picture: 'picture',
    pre: 'pre',
    progress: 'progress',
    q: 'q',
    rp : 'rp',
    rt : 'rt',
    ruby : 'ruby',
    s: 's',
    samp: 'samp',
    script: 'script',
    section: 'section',
    select: 'select',
    small: 'small',
    source: 'source',
    span: 'span',
    strike: 'strike',
    strong: 'strong',
    style: 'style',
    sub: 'sub',
    summary: 'summary',
    sup: 'sup',
    svg: 'svg',
    table: 'table',
    tbody: 'tbody',
    td: 'td',
    template: 'template',
    textarea: 'textarea',
    tfoot: 'tfoot',
    th: 'th',
    thead: 'thead',
    time: 'time',
    title: 'title',
    tr: 'tr',
    track: 'track',
    // tt: 'tt',
    u: 'u',
    ul: 'ul',
    var: 'var',
    video: 'video',
    wbr: 'wbr'
};

interface Document { }
interface DataTransfer { }
interface StyleMedia { }

interface Element extends Node { }
interface Node { }

interface HTMLElement extends Element {
    style: CSSProperties;
}

interface HTMLAnchorElement extends HTMLElement, HTMLHyperlinkElementUtils { }
interface HTMLAreaElement extends HTMLElement { }
interface HTMLAudioElement extends HTMLElement { }
interface HTMLBaseElement extends HTMLElement { href: string; target: string; }
interface HTMLBodyElement extends HTMLElement { }

interface HTMLBRElement extends HTMLElement {
    align: align;
    color: string;
    noshade: boolean;
    size: string;
    width: string;
}

interface HTMLButtonElement extends HTMLElement { }
interface HTMLCanvasElement extends HTMLElement { }
interface HTMLDataListElement extends HTMLElement { }
interface HTMLDetailsElement extends HTMLElement { }
interface HTMLDialogElement extends HTMLElement { }
interface HTMLDivElement extends HTMLElement { }
interface HTMLDListElement extends HTMLElement { }
interface HTMLEmbedElement extends HTMLElement { }
interface HTMLFieldSetElement extends HTMLElement { }
interface HTMLFormElement extends HTMLElement { }
interface HTMLHeadingElement extends HTMLElement { align: align }
interface HTMLHeadElement extends HTMLElement { }
interface HTMLHRElement extends HTMLElement { }
interface HTMLHtmlElement extends HTMLElement { }
interface HTMLHyperlinkElementUtils { }
interface HTMLIFrameElement extends HTMLElement { }
interface HTMLImageElement extends HTMLElement { }
interface HTMLInputElement extends HTMLElement { }
interface HTMLLabelElement extends HTMLElement { }
interface HTMLLegendElement extends HTMLElement { }
interface HTMLLIElement extends HTMLElement { }
interface HTMLLinkElement extends HTMLElement { }
interface HTMLMapElement extends HTMLElement { }
interface HTMLMetaElement extends HTMLElement { }
interface HTMLObjectElement extends HTMLElement { }
interface HTMLOListElement extends HTMLElement { }
interface HTMLOptGroupElement extends HTMLElement { }
interface HTMLOptionElement extends HTMLElement { }
interface HTMLParagraphElement extends HTMLElement { }
interface HTMLParamElement extends HTMLElement { }
interface HTMLPictureElement extends HTMLElement { }
interface HTMLPreElement extends HTMLElement { }
interface HTMLProgressElement extends HTMLElement { }
interface HTMLQuoteElement extends HTMLElement { }
interface HTMLScriptElement extends HTMLElement { }
interface HTMLSelectElement extends HTMLElement { }
interface HTMLSourceElement extends HTMLElement { }
interface HTMLSpanElement extends HTMLElement { }
interface HTMLStyleElement extends HTMLElement { }
interface HTMLTableElement extends HTMLElement { }
interface HTMLTableSectionElement extends HTMLElement { }
interface HTMLTableDataCellElement extends HTMLElement { }
interface HTMLTextAreaElement extends HTMLElement { }
interface HTMLTableSectionElement extends HTMLElement { }
interface HTMLTableHeaderCellElement extends HTMLElement { }
interface HTMLTableSectionElement extends HTMLElement { }
interface HTMLTitleElement extends HTMLElement { }
interface HTMLTableRowElement extends HTMLElement { }
interface HTMLTrackElement extends HTMLElement { }
interface HTMLUListElement extends HTMLElement { }
interface HTMLVideoElement extends HTMLElement { }
interface HTMLTableColElement extends HTMLElement { }
interface HTMLHtmlElement extends HTMLElement { }
interface HTMLIFrameElement extends HTMLElement { }
interface HTMLImageElement extends HTMLElement { }
interface HTMLInputElement extends HTMLElement { }
interface HTMLLabelElement extends HTMLElement { }
interface HTMLLegendElement extends HTMLElement { }
interface HTMLLIElement extends HTMLElement { }
interface HTMLLinkElement extends HTMLElement { }
interface HTMLMapElement extends HTMLElement { }
interface HTMLMetaElement extends HTMLElement { }
interface HTMLMeterElement extends HTMLElement { }
interface HTMLModElement extends HTMLElement { }
interface HTMLObjectElement extends HTMLElement { }
interface HTMLOListElement extends HTMLElement { }
interface HTMLOptGroupElement extends HTMLElement { }
interface HTMLOptionElement extends HTMLElement { }
interface HTMLParagraphElement extends HTMLElement { }
interface HTMLParamElement extends HTMLElement { }
interface HTMLPreElement extends HTMLElement { }
interface HTMLProgressElement extends HTMLElement { }
interface HTMLQuoteElement extends HTMLElement { }
interface HTMLScriptElement extends HTMLElement { }
interface HTMLSelectElement extends HTMLElement { }
interface HTMLSourceElement extends HTMLElement { }
interface HTMLSpanElement extends HTMLElement { }
interface HTMLStyleElement extends HTMLElement { }
interface HTMLTableElement extends HTMLElement { }
interface HTMLTableSectionElement extends HTMLElement { }
interface HTMLTableDataCellElement extends HTMLElement { }
interface HTMLTextAreaElement extends HTMLElement { }
interface HTMLTableColElement extends HTMLElement { }
interface HTMLTableSectionElement extends HTMLElement { }
interface HTMLTableHeaderCellElement extends HTMLElement { }
interface HTMLTableSectionElement extends HTMLElement { }
interface HTMLTitleElement extends HTMLElement { }
interface HTMLTableRowElement extends HTMLElement { }
interface HTMLTimeElement extends  HTMLElement { dateTime: Date; }
interface HTMLTrackElement extends HTMLElement { }
interface HTMLUListElement extends HTMLElement { }
interface HTMLVideoElement extends HTMLElement { }
interface HTMLWebViewElement extends HTMLElement { }

interface Text { }
interface TouchList { }
interface WebGLRenderingContext { }

export interface HtmlVisual extends SvgTag {
    a: HTMLAnchorElement & { type: typeof HtmlTag.a; };
    abbr: HTMLElement & { type: typeof HtmlTag.abbr; };
    acronym: HTMLElement & { type: typeof HtmlTag.acronym; };
    address: HTMLElement & { type: typeof HtmlTag.address; };
    applet: HTMLElement & { type: typeof HtmlTag.applet; };
    area: HTMLAreaElement & { type: typeof HtmlTag.area; };
    article: HTMLElement & { type: typeof HtmlTag.article; };
    aside: HTMLElement & { type: typeof HtmlTag.aside; };
    audio: HTMLAudioElement & { type: typeof HtmlTag.audio; };
    b: HTMLElement & { type: typeof HtmlTag.b; };
    base: HTMLElement & { type: typeof HtmlTag.base; };
    basefont: HTMLElement & { type: typeof HtmlTag.basefont; };
    bdi: HTMLElement & { type: typeof HtmlTag.bdi; };
    bdo: HTMLElement & { type: typeof HtmlTag.bdo; };
    big: HTMLElement & { type: typeof HtmlTag.big; };
    blockquote: HTMLElement & { type: typeof HtmlTag.blockquote; };
    body: HTMLBodyElement & { type: typeof HtmlTag.body; };
    br: HTMLBRElement & { type: typeof HtmlTag.br; };
    button: HTMLButtonElement & { type: typeof HtmlTag.button; };
    canvas: HTMLCanvasElement & { type: typeof HtmlTag.canvas; };
    caption: HTMLElement & { type: typeof HtmlTag.caption; };
    center: HTMLElement & { type: typeof HtmlTag.center; };
    cite: HTMLElement & { type: typeof HtmlTag.cite; };
    code: HTMLElement & { type: typeof HtmlTag.code; };
    col: HTMLTableColElement & { type: typeof HtmlTag.col; };
    colgroup: HTMLTableSectionElement & { type: typeof HtmlTag.colgroup; };
    data: HTMLElement & { type: typeof HtmlTag.data; };
    datalist: HTMLDataListElement & { type: typeof HtmlTag.datalist; };
    dd: HTMLElement & { type: typeof HtmlTag.dd; };
    del: HTMLModElement & { type: typeof HtmlTag.del; };
    details: HTMLDetailsElement & { type: typeof HtmlTag.details; };
    dfn: HTMLElement & { type: typeof HtmlTag.dfn; };
    dialog: HTMLDialogElement & { type: typeof HtmlTag.dialog; };
    // dir: HTMLElement & { type: typeof HtmlTag.dir; };
    div: HTMLDivElement & { type: typeof HtmlTag.div; };
    dl: HTMLDListElement & { type: typeof HtmlTag.dl; };
    dt: HTMLElement & { type: typeof HtmlTag.dt; };
    em: HTMLElement & { type: typeof HtmlTag.em; };
    embed: HTMLEmbedElement & { type: typeof HtmlTag.embed; };
    fieldset: HTMLFieldSetElement & { type: typeof HtmlTag.fieldset; };
    figcaption: HTMLElement & { type: typeof HtmlTag.figcaption; };
    figure: HTMLElement & { type: typeof HtmlTag.figure; };
    // font: HTMLElement & { type: typeof HtmlTag.font; };
    footer: HTMLElement & { type: typeof HtmlTag.footer; };
    form: HTMLFormElement & { type: typeof HtmlTag.form; };
    frame: HTMLElement & { type: typeof HtmlTag.frame; };
    // frameset: HTMLElement & { type: typeof HtmlTag.frameset; };
    h1: HTMLHeadingElement & { type: typeof HtmlTag.h1; };
    h2: HTMLHeadingElement & { type: typeof HtmlTag.h2; };
    h3: HTMLHeadingElement & { type: typeof HtmlTag.h3; };
    h4: HTMLHeadingElement & { type: typeof HtmlTag.h4; };
    h5: HTMLHeadingElement & { type: typeof HtmlTag.h5; };
    h6: HTMLHeadingElement & { type: typeof HtmlTag.h6; };
    head: HTMLHeadElement & { type: typeof HtmlTag.head; };
    header: HTMLElement & { type: typeof HtmlTag.header; };
    hr: HTMLHRElement & { type: typeof HtmlTag.hr; };
    html: HTMLHtmlElement & { type: typeof HtmlTag.html; };
    i: HTMLElement & { type: typeof HtmlTag.i; };
    iframe: HTMLIFrameElement & { type: typeof HtmlTag.iframe; };
    img: HTMLImageElement & { type: typeof HtmlTag.img; };
    input: HTMLInputElement & { type: typeof HtmlTag.input; };
    ins: HTMLModElement & { type: typeof HtmlTag.ins; };
    kbd: HTMLElement & { type: typeof HtmlTag.kbd; };
    label: HTMLLabelElement & { type: typeof HtmlTag.label; };
    legend: HTMLLegendElement & { type: typeof HtmlTag.legend; };
    li: HTMLLIElement & { type: typeof HtmlTag.li; };
    link: HTMLLinkElement & { type: typeof HtmlTag.link; };
    main: HTMLDivElement & { type: typeof HtmlTag.main; };
    map: HTMLMapElement & { type: typeof HtmlTag.map; };
    mark: HTMLElement & { type: typeof HtmlTag.mark; };
    meta: HTMLMetaElement & { type: typeof HtmlTag.meta; };
    meter: HTMLMeterElement & { type: typeof HtmlTag.meter; };
    nav: HTMLElement & { type: typeof HtmlTag.nav; };
    // noframes: HTMLElement & { type: typeof HtmlTag.noframes; };
    noscript:HTMLElement &  { type: typeof HtmlTag.noscript; };
    object: HTMLObjectElement & { type: typeof HtmlTag.object; };
    ol: HTMLOListElement & { type: typeof HtmlTag.ol; };
    optgroup: HTMLOptGroupElement & { type: typeof HtmlTag.optgroup; };
    option: HTMLOptionElement & { type: typeof HtmlTag.option; };
    output: HTMLElement & { type: typeof HtmlTag.output; };
    p: HTMLParagraphElement & { type: typeof HtmlTag.p; };
    param: HTMLParamElement & { type: typeof HtmlTag.param; };
    picture: HTMLPictureElement & { type: typeof HtmlTag.picture; };
    pre: HTMLPreElement & { type: typeof HtmlTag.pre; };
    progress: HTMLProgressElement & { type: typeof HtmlTag.progress; };
    q: HTMLQuoteElement & { type: typeof HtmlTag.q; };
    rp : HTMLElement & { type: typeof HtmlTag.rp; };
    rt : HTMLElement & { type: typeof HtmlTag.rt; };
    ruby : HTMLElement & { type: typeof HtmlTag.ruby; };
    s: HTMLElement & { type: typeof HtmlTag.s; };
    samp: HTMLElement & { type: typeof HtmlTag.samp; };
    script: HTMLScriptElement & { type: typeof HtmlTag.script; };
    section: HTMLDivElement & { type: typeof HtmlTag.section; };
    select: HTMLSelectElement & { type: typeof HtmlTag.select; };
    small: HTMLElement & { type: typeof HtmlTag.small; };
    source: HTMLSourceElement & { type: typeof HtmlTag.source; };
    span: HTMLSpanElement & { type: typeof HtmlTag.span; };
    strike: HTMLElement & { type: typeof HtmlTag.strike; };
    strong: HTMLElement & { type: typeof HtmlTag.strong; };
    style: HTMLStyleElement & { type: typeof HtmlTag.style; };
    sub: HTMLElement & { type: typeof HtmlTag.sub; };
    summary: HTMLElement & { type: typeof HtmlTag.summary; };
    sup: HTMLElement & { type: typeof HtmlTag.sup; };
    // svg: HTMLElement & { type: typeof HtmlTag.svg; };
    table: HTMLTableElement & { type: typeof HtmlTag.table; };
    tbody: HTMLTableSectionElement & { type: typeof HtmlTag.tbody; };
    td: HTMLTableDataCellElement & { type: typeof HtmlTag.td; };
    template: HTMLElement & { type: typeof HtmlTag.template; };
    textarea: HTMLTextAreaElement & { type: typeof HtmlTag.textarea; };
    tfoot: HTMLTableSectionElement & { type: typeof HtmlTag.tfoot; };
    th: HTMLTableHeaderCellElement & { type: typeof HtmlTag.th; };
    thead: HTMLTableSectionElement & { type: typeof HtmlTag.thead; };
    time: HTMLTimeElement & { type: typeof HtmlTag.time; };
    title: HTMLTitleElement & { type: typeof HtmlTag.title; };
    tr: HTMLTableRowElement & { type: typeof HtmlTag.tr; };
    track: HTMLTrackElement & { type: typeof HtmlTag.track; };
    // tt: HTMLElement & { type: typeof HtmlTag.tt; };
    u: HTMLElement & { type: typeof HtmlTag.u; };
    ul: HTMLUListElement & { type: typeof HtmlTag.ul; };
    var: HTMLElement & { type: typeof HtmlTag.var; };
    video: HTMLVideoElement & { type: typeof HtmlTag.video; };
    wbr: HTMLElement & { type: typeof HtmlTag.wbr };
}
