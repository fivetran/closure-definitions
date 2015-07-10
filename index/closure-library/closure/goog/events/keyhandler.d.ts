/// <reference path="../../../globals.d.ts" />
/// <reference path="./eventtarget.d.ts" />
/// <reference path="./browserevent.d.ts" />

declare module goog.events {

    class KeyHandler extends KeyHandler__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class KeyHandler__Class extends goog.events.EventTarget__Class  { 
    
            /**
             * A wrapper around an element that you want to listen to keyboard events on.
             * @param {Element|Document=} opt_element The element or document to listen on.
             * @param {boolean=} opt_capture Whether to listen for browser events in
             *     capture phase (defaults to false).
             * @constructor
             * @extends {goog.events.EventTarget}
             * @final
             */
            constructor(opt_element?: Element|Document, opt_capture?: boolean);
    
            /**
             * Resets the stored previous values. Needed to be called for webkit which will
             * not generate a key up for meta key operations. This should only be called
             * when having finished with repeat key possiblities.
             */
            resetState(): void;
    
            /**
             * Handles the events on the element.
             * @param {goog.events.BrowserEvent} e  The keyboard event sent from the
             *     browser.
             */
            handleEvent(e: goog.events.BrowserEvent): void;
    
            /**
             * Returns the element listened on for the real keyboard events.
             * @return {Element|Document|null} The element listened on for the real
             *     keyboard events.
             */
            getElement(): Element|Document|any /*null*/;
    
            /**
             * Adds the proper key event listeners to the element.
             * @param {Element|Document} element The element to listen on.
             * @param {boolean=} opt_capture Whether to listen for browser events in
             *     capture phase (defaults to false).
             */
            attach(element: Element|Document, opt_capture?: boolean): void;
    
            /**
             * Removes the listeners that may exist.
             */
            detach(): void;
    } 
    

    class KeyEvent extends KeyEvent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class KeyEvent__Class extends goog.events.BrowserEvent__Class  { 
    
            /**
             * This class is used for the goog.events.KeyHandler.EventType.KEY event and
             * it overrides the key code with the fixed key code.
             * @param {number} keyCode The adjusted key code.
             * @param {number} charCode The unicode character code.
             * @param {boolean} repeat Whether this event was generated by keyboard repeat.
             * @param {Event} browserEvent Browser event object.
             * @constructor
             * @extends {goog.events.BrowserEvent}
             * @final
             */
            constructor(keyCode: number, charCode: number, repeat: boolean, browserEvent: Event);
    
            /**
             * Keycode of key press.
             * @type {number}
             */
            keyCode: number;
    
            /**
             * Unicode character code.
             * @type {number}
             */
            charCode: number;
    
            /**
             * True if this event was generated by keyboard auto-repeat (i.e., the user is
             * holding the key down.)
             * @type {boolean}
             */
            repeat: boolean;
    } 
    
}

declare module goog.events.KeyHandler {

    /**
     * Enum type for the events fired by the key handler
     * @enum {string}
     */
    enum EventType { KEY } 
}
