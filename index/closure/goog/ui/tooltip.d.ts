// Generated Mon May  5 21:10:45 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../closure/goog/positioning/positioning.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/positioning/abstractposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../closure/goog/ui/popupbase.d.ts" />
/// <reference path="../../../closure/goog/positioning/viewportposition.d.ts" />
/// <reference path="../../../closure/goog/i18n/bidi.d.ts" />
/// <reference path="../../../closure/goog/string/typedstring.d.ts" />
/// <reference path="../../../closure/goog/string/const.d.ts" />
/// <reference path="../../../closure/goog/html/safeurl.d.ts" />
/// <reference path="../../../closure/goog/dom/tags.d.ts" />
/// <reference path="../../../closure/goog/html/safestyle.d.ts" />
/// <reference path="../../../closure/goog/html/safehtml.d.ts" />
/// <reference path="../../../closure/goog/dom/safe.d.ts" />
/// <reference path="../../../closure/goog/positioning/clientposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/absoluteposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../../closure/goog/ui/popup.d.ts" />
/// <reference path="../../../closure/goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../closure/goog/html/legacyconversions.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />

declare module goog.ui {

    /**
     * Tooltip widget. Can be attached to one or more elements and is shown, with a
     * slight delay, when the the cursor is over the element or the element gains
     * focus.
     *
     * @param {Element|string=} opt_el Element to display tooltip for, either
     *     element reference or string id.
     * @param {?string=} opt_str Text message to display in tooltip.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Popup}
     */
    class Tooltip extends goog.ui.Popup {
        /**
         * Tooltip widget. Can be attached to one or more elements and is shown, with a
         * slight delay, when the the cursor is over the element or the element gains
         * focus.
         *
         * @param {Element|string=} opt_el Element to display tooltip for, either
         *     element reference or string id.
         * @param {?string=} opt_str Text message to display in tooltip.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Popup}
         */
        constructor(opt_el?: any /*Element|string*/, opt_str?: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * CSS class name for tooltip.
         *
         * @type {string}
         */
        className: string;
    
        /**
         * Timer for when to show.
         *
         * @type {number|undefined}
         * @protected
         */
        showTimer: any /*number|any (undefined)*/;
    
        /**
         * Timer for when to hide.
         *
         * @type {number|undefined}
         * @protected
         */
        hideTimer: any /*number|any (undefined)*/;
    
        /**
         * Element that triggered the tooltip.  Note that if a second element triggers
         * this tooltip, anchor becomes that second element, even if its show is
         * cancelled and the original tooltip survives.
         *
         * @type {Element|undefined}
         * @protected
         */
        anchor: any /*Element|any (undefined)*/;
    
        /**
         * Returns the dom helper that is being used on this component.
         * @return {goog.dom.DomHelper} The dom helper used on this component.
         */
        getDomHelper(): goog.dom.DomHelper;
    
        /**
         * @return {goog.ui.Tooltip} Active tooltip in a child element, or null if none.
         * @protected
         */
        getChildTooltip(): goog.ui.Tooltip;
    
        /**
         * Attach to element. Tooltip will be displayed when the cursor is over the
         * element or when the element has been active for a few milliseconds.
         *
         * @param {Element|string} el Element to display tooltip for, either element
         *                            reference or string id.
         */
        attach(el: any /*Element|string*/): void;
    
        /**
         * Detach from element(s).
         *
         * @param {Element|string=} opt_el Element to detach from, either element
         *                                reference or string id. If no element is
         *                                specified all are detached.
         */
        detach(opt_el?: any /*Element|string*/): void;
    
        /**
         * Sets delay in milliseconds before tooltip is displayed for an element.
         *
         * @param {number} delay The delay in milliseconds.
         */
        setShowDelayMs(delay: number): void;
    
        /**
         * @return {number} The delay in milliseconds before tooltip is displayed for an
         *     element.
         */
        getShowDelayMs(): number;
    
        /**
         * Sets delay in milliseconds before tooltip is hidden once the cursor leavs
         * the element.
         *
         * @param {number} delay The delay in milliseconds.
         */
        setHideDelayMs(delay: number): void;
    
        /**
         * @return {number} The delay in milliseconds before tooltip is hidden once the
         *     cursor leaves the element.
         */
        getHideDelayMs(): number;
    
        /**
         * Sets tooltip message as plain text.
         *
         * @param {string} str Text message to display in tooltip.
         */
        setText(str: string): void;
    
        /**
         * Sets tooltip message as HTML markup.
         * using goog.html.SafeHtml are in place.
         *
         * @param {string} str HTML message to display in tooltip.
         */
        setHtml(str: string): void;
    
        /**
         * Sets tooltip message as HTML markup.
         * @param {!goog.html.SafeHtml} html HTML message to display in tooltip.
         */
        setSafeHtml(html: goog.html.SafeHtml): void;
    
        /**
         * @return {string} The tooltip message as plain text.
         */
        getText(): string;
    
        /**
         * @return {string} The tooltip message as HTML as plain string.
         */
        getHtml(): string;
    
        /**
         * @return {goog.ui.Tooltip.State} Current state of tooltip.
         */
        getState(): goog.ui.Tooltip.State;
    
        /**
         * Sets whether tooltip requires the mouse to have moved or the anchor receive
         * focus before the tooltip will be shown.
         * @param {boolean} requireInteraction Whether tooltip should require some user
         *     interaction before showing tooltip.
         */
        setRequireInteraction(requireInteraction: boolean): void;
    
        /**
         * Returns true if the coord is in the tooltip.
         * @param {goog.math.Coordinate} coord Coordinate being tested.
         * @return {boolean} Whether the coord is in the tooltip.
         */
        isCoordinateInTooltip(coord: goog.math.Coordinate): boolean;
    
        /**
         * Called by timer from mouse over handler. Shows tooltip if cursor is still
         * over the same element.
         *
         * @param {Element} el Element to show tooltip for.
         * @param {goog.positioning.AbstractPosition=} opt_pos Position to display popup
         *     at.
         */
        maybeShow(el: Element, opt_pos?: goog.positioning.AbstractPosition): void;
    
        /**
         * @return {goog.structs.Set} Elements this widget is attached to.
         * @protected
         */
        getElements(): goog.structs.Set<any>;
    
        /**
         * @return {Element} Active element reference.
         */
        getActiveElement(): Element;
    
        /**
         * @param {Element} activeEl Active element reference.
         * @protected
         */
        setActiveElement(activeEl: Element): void;
    
        /**
         * Shows tooltip for a specific element.
         *
         * @param {Element} el Element to show tooltip for.
         * @param {goog.positioning.AbstractPosition=} opt_pos Position to display popup
         *     at.
         */
        showForElement(el: Element, opt_pos?: goog.positioning.AbstractPosition): void;
    
        /**
         * Called by timer from mouse out handler. Hides tooltip if cursor is still
         * outside element and tooltip, or if a child of tooltip has the focus.
         * @param {Element} el Tooltip's anchor when hide timer was started.
         */
        maybeHide(el: Element): void;
    
        /**
         * @return {boolean} Whether tooltip element contains an active child tooltip,
         *     and should thus not be hidden.  When the child tooltip is hidden, it
         *     will check if the parent should be hidden, too.
         * @protected
         */
        hasActiveChild(): boolean;
    
        /**
         * Handler for mouse over events.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         */
        handleMouseOver(event: goog.events.BrowserEvent): void;
    
        /**
         * Find anchor containing the given element, if any.
         *
         * @param {Element} el Element that triggered event.
         * @return {Element} Element in elements_ array that contains given element,
         *     or null if not found.
         * @protected
         */
        getAnchorFromElement(el: Element): Element;
    
        /**
         * Handler for mouse move events.
         *
         * @param {goog.events.BrowserEvent} event MOUSEMOVE event.
         * @protected
         */
        handleMouseMove(event: goog.events.BrowserEvent): void;
    
        /**
         * Handler for focus events.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         */
        handleFocus(event: goog.events.BrowserEvent): void;
    
        /**
         * Return a Position instance for repositioning the tooltip. Override in
         * subclasses to customize the way repositioning is done.
         *
         * @param {goog.ui.Tooltip.Activation} activationType Information about what
         *    kind of event caused the popup to be shown.
         * @return {!goog.positioning.AbstractPosition} The position object used
         *    to position the tooltip.
         * @protected
         */
        getPositioningStrategy(activationType: goog.ui.Tooltip.Activation): goog.positioning.AbstractPosition;
    
        /**
         * Handler for mouse out and blur events.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         */
        handleMouseOutAndBlur(event: goog.events.BrowserEvent): void;
    
        /**
         * Handler for mouse over events for the tooltip element.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         */
        handleTooltipMouseOver(event: goog.events.BrowserEvent): void;
    
        /**
         * Handler for mouse out events for the tooltip element.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         */
        handleTooltipMouseOut(event: goog.events.BrowserEvent): void;
    
        /**
         * Helper method, starts timer that calls maybeShow. Parameters are passed to
         * the maybeShow method.
         *
         * @param {Element} el Element to show tooltip for.
         * @param {goog.positioning.AbstractPosition=} opt_pos Position to display popup
         *     at.
         * @protected
         */
        startShowTimer(el: Element, opt_pos?: goog.positioning.AbstractPosition): void;
    
        /**
         * Helper method called to clear the show timer.
         *
         * @protected
         */
        clearShowTimer(): void;
    
        /**
         * Helper method called to start the close timer.
         * @protected
         */
        startHideTimer(): void;
    
        /**
         * Helper method called to clear the close timer.
         * @protected
         */
        clearHideTimer(): void;
    }
}

declare module goog.ui.Tooltip {

    /**
     * Popup position implementation that positions the popup (the tooltip in this
     * case) based on the cursor position. It's positioned below the cursor to the
     * right if there's enough room to fit all of it inside the Viewport. Otherwise
     * it's displayed as far right as possible either above or below the element.
     *
     * Used to position tooltips triggered by the cursor.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.positioning.ViewportPosition}
     * @final
     */
    class CursorTooltipPosition extends goog.positioning.ViewportPosition {
        /**
         * Popup position implementation that positions the popup (the tooltip in this
         * case) based on the cursor position. It's positioned below the cursor to the
         * right if there's enough room to fit all of it inside the Viewport. Otherwise
         * it's displayed as far right as possible either above or below the element.
         *
         * Used to position tooltips triggered by the cursor.
         *
         * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position.
         * @constructor
         * @extends {goog.positioning.ViewportPosition}
         * @final
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    }

    /**
     * Popup position implementation that positions the popup (the tooltip in this
     * case) based on the element position. It's positioned below the element to the
     * right if there's enough room to fit all of it inside the Viewport. Otherwise
     * it's displayed as far right as possible either above or below the element.
     *
     * Used to position tooltips triggered by focus changes.
     *
     * @param {Element} element The element to anchor the popup at.
     * @constructor
     * @extends {goog.positioning.AnchoredPosition}
     */
    class ElementTooltipPosition extends goog.positioning.AnchoredPosition {
        /**
         * Popup position implementation that positions the popup (the tooltip in this
         * case) based on the element position. It's positioned below the element to the
         * right if there's enough room to fit all of it inside the Viewport. Otherwise
         * it's displayed as far right as possible either above or below the element.
         *
         * Used to position tooltips triggered by focus changes.
         *
         * @param {Element} element The element to anchor the popup at.
         * @constructor
         * @extends {goog.positioning.AnchoredPosition}
         */
        constructor(element: Element);
    }

    /**
     * Possible states for the tooltip to be in.
     * @enum {number}
     */
    enum State { INACTIVE, WAITING_TO_SHOW, SHOWING, WAITING_TO_HIDE, UPDATING } 

    /**
     * Popup activation types. Used to select a positioning strategy.
     * @enum {number}
     */
    enum Activation { CURSOR, FOCUS } 
}

