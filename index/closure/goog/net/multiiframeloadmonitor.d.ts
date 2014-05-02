// Generated Thu May  1 21:02:33 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/net/iframeloadmonitor.d.ts" />

declare module goog.net {

    /**
     * Provides a wrapper around IframeLoadMonitor, to allow the caller to wait for
     * multiple iframes to load.
     *
     * @param {Array.<HTMLIFrameElement>} iframes Array of iframe elements to
     *     wait until they are loaded.
     * @param {function():void} callback The callback to invoke once the frames have
     *     loaded.
     * @param {boolean=} opt_hasContent true if the monitor should wait until the
     *     iframes have content (body.firstChild != null).
     * @constructor
     * @final
     */
    class MultiIframeLoadMonitor {
        /**
         * Provides a wrapper around IframeLoadMonitor, to allow the caller to wait for
         * multiple iframes to load.
         *
         * @param {Array.<HTMLIFrameElement>} iframes Array of iframe elements to
         *     wait until they are loaded.
         * @param {function():void} callback The callback to invoke once the frames have
         *     loaded.
         * @param {boolean=} opt_hasContent true if the monitor should wait until the
         *     iframes have content (body.firstChild != null).
         * @constructor
         * @final
         */
        constructor(iframes: HTMLIFrameElement[], callback: () => void, opt_hasContent?: boolean);
    
        /**
         * Handles a pending iframe load monitor load event.
         * @param {goog.events.Event} e The goog.net.IframeLoadMonitor.LOAD_EVENT event.
         */
        handleEvent(e: goog.events.Event): void;
    
        /**
         * Stops monitoring the iframes, cleaning up any associated resources. In
         * general, the object cleans up its own resources before invoking the
         * callback, so this API should only be used if the caller wants to stop the
         * monitoring before the iframes are loaded (for example, if the caller is
         * implementing a timeout).
         */
        stopMonitoring(): void;
    }
}

