// Generated Thu May  1 16:38:44 PDT 2014

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
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/string/stringformat.d.ts" />
/// <reference path="../../goog/structs/circularbuffer.d.ts" />

declare module goog.stats {

    /**
     * Tracks basic statistics over a specified time interval.
     *
     * Statistics are kept in a fixed number of slots, each representing
     * an equal portion of the time interval.
     *
     * Most methods optionally allow passing in the current time, so that
     * higher level stats can synchronize operations on multiple child
     * objects.  Under normal usage, the default of goog.now() should be
     * sufficient.
     *
     * @param {number} interval The stat interval, in milliseconds.
     * @constructor
     * @final
     */
    class BasicStat {
        /**
         * Tracks basic statistics over a specified time interval.
         *
         * Statistics are kept in a fixed number of slots, each representing
         * an equal portion of the time interval.
         *
         * Most methods optionally allow passing in the current time, so that
         * higher level stats can synchronize operations on multiple child
         * objects.  Under normal usage, the default of goog.now() should be
         * sufficient.
         *
         * @param {number} interval The stat interval, in milliseconds.
         * @constructor
         * @final
         */
        constructor(interval: number);
    
        /**
         * @return {number} The interval which over statistics are being
         *     accumulated, in milliseconds.
         */
        getInterval(): number;
    
        /**
         * Increments the count of this statistic by the specified amount.
         *
         * @param {number} amt The amount to increase the count by.
         * @param {number=} opt_now The time, in milliseconds, to be treated
         *     as the "current" time.  The current time must always be greater
         *     than or equal to the last time recorded by this stat tracker.
         */
        incBy(amt: number, opt_now?: number): void;
    
        /**
         * Returns the count of the statistic over its configured time
         * interval.
         * @param {number=} opt_now The time, in milliseconds, to be treated
         *     as the "current" time.  The current time must always be greater
         *     than or equal to the last time recorded by this stat tracker.
         * @return {number} The total count over the tracked interval.
         */
        get(opt_now?: number): number;
    
        /**
         * Returns the magnitute of the largest atomic increment that occurred
         * during the watched time interval.
         * @param {number=} opt_now The time, in milliseconds, to be treated
         *     as the "current" time.  The current time must always be greater
         *     than or equal to the last time recorded by this stat tracker.
         * @return {number} The maximum count of this statistic.
         */
        getMax(opt_now?: number): number;
    
        /**
         * Returns the magnitute of the smallest atomic increment that
         * occurred during the watched time interval.
         * @param {number=} opt_now The time, in milliseconds, to be treated
         *     as the "current" time.  The current time must always be greater
         *     than or equal to the last time recorded by this stat tracker.
         * @return {number} The minimum count of this statistic.
         */
        getMin(opt_now?: number): number;
    }
}
