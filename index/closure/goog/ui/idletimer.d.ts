// Generated Thu May  1 21:03:55 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/ui/activitymonitor.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />

declare module goog.ui.IdleTimer {

    /**
     * Event constants for the idle timer event target
     * @enum {string}
     */
    enum Event { BECOME_ACTIVE, BECOME_IDLE } 
}

declare module goog.ui {

    /**
     * Event target that will give notification of state changes between active and
     * idle. This class is designed to require few resources while the user is
     * active.
     * @param {number} idleThreshold Amount of time in ms at which we consider the
     *     user has gone idle.
     * @param {goog.ui.ActivityMonitor=} opt_activityMonitor The activity monitor
     *     keeping track of user interaction. Defaults to a default-constructed
     *     activity monitor. If a default activity monitor is used then this class
     *     will dispose of it. If an activity monitor is passed in then the caller
     *     remains responsible for disposing of it.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class IdleTimer extends goog.events.EventTarget {
        /**
         * Event target that will give notification of state changes between active and
         * idle. This class is designed to require few resources while the user is
         * active.
         * @param {number} idleThreshold Amount of time in ms at which we consider the
         *     user has gone idle.
         * @param {goog.ui.ActivityMonitor=} opt_activityMonitor The activity monitor
         *     keeping track of user interaction. Defaults to a default-constructed
         *     activity monitor. If a default activity monitor is used then this class
         *     will dispose of it. If an activity monitor is passed in then the caller
         *     remains responsible for disposing of it.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(idleThreshold: number, opt_activityMonitor?: goog.ui.ActivityMonitor);
    
        /**
         * @return {number} the amount of time at which we consider the user has gone
         *     idle in ms.
         */
        getIdleThreshold(): number;
    
        /**
         * @return {goog.ui.ActivityMonitor} the activity monitor keeping track of user
         *     interaction.
         */
        getActivityMonitor(): goog.ui.ActivityMonitor;
    
        /**
         * Returns true if there has been no user action for at least the specified
         * interval, and false otherwise
         * @return {boolean} true if the user is idle, false otherwise.
         */
        isIdle(): boolean;
    }
}

