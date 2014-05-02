// Generated Thu May  1 16:38:42 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/fx/transitionbase.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/style/transition.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />

declare module goog.fx.css3 {

    /**
     * A class to handle targeted CSS3 transition. This class
     * handles common features required for targeted CSS3 transition.
     *
     * Browser that does not support CSS3 transition will still receive all
     * the events fired by the transition object, but will not have any transition
     * played. If the browser supports the final state as set in setFinalState
     * method, the element will ends in the final state.
     *
     * Transitioning multiple properties with the same setting is possible
     * by setting Css3Property's property to 'all'. Performing multiple
     * transitions can be done via setting multiple initialStyle,
     * finalStyle and transitions. Css3Property's delay can be used to
     * delay one of the transition. Here is an example for a transition
     * that expands on the width and then followed by the height:
     *
     * <pre>
     *   initialStyle: {width: 10px, height: 10px}
     *   finalStyle: {width: 100px, height: 100px}
     *   transitions: [
     *     {property: width, duration: 1, timing: 'ease-in', delay: 0},
     *     {property: height, duration: 1, timing: 'ease-in', delay: 1}
     *   ]
     * </pre>
     *
     * @param {Element} element The element to be transitioned.
     * @param {number} duration The duration of the transition in seconds.
     *     This should be the longest of all transitions.
     * @param {Object} initialStyle Initial style properties of the element before
     *     animating. Set using {@code goog.style.setStyle}.
     * @param {Object} finalStyle Final style properties of the element after
     *     animating. Set using {@code goog.style.setStyle}.
     * @param {goog.style.transition.Css3Property|
     *     Array.<goog.style.transition.Css3Property>} transitions A single CSS3
     *     transition property or an array of it.
     * @extends {goog.fx.TransitionBase}
     * @constructor
     */
    function Transition(element: Element, duration: number, initialStyle: Object, finalStyle: Object): void;
}
