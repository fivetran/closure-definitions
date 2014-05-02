// Generated Thu May  1 16:38:39 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.fx.Transition {

    /**
     * Transition event types.
     * @enum {string}
     */
    enum EventType { PLAY, BEGIN, RESUME, END, STOP, FINISH, PAUSE } 
}

declare module goog.fx {

    /**
     * An interface for programmatic transition. Must extend
     * {@code goog.events.EventTarget}.
     * @interface
     */
    interface Transition {
        play: any /*missing*/;
        stop: any /*missing*/;
    }
}
