// Generated Fri May  2 11:35:31 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/dom/pattern/pattern.d.ts" />
/// <reference path="../../../goog/dom/pattern/abstractpattern.d.ts" />

declare module goog.dom.pattern {

    /**
     * Pattern object that matches a repetition of another pattern.
     * @param {goog.dom.pattern.AbstractPattern} pattern The pattern to
     *     repetitively match.
     * @param {number=} opt_minimum The minimum number of times to match.  Defaults
     *     to 0.
     * @param {number=} opt_maximum The maximum number of times to match.  Defaults
     *     to unlimited.
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     * @final
     */
    class Repeat extends goog.dom.pattern.AbstractPattern {
        /**
         * Pattern object that matches a repetition of another pattern.
         * @param {goog.dom.pattern.AbstractPattern} pattern The pattern to
         *     repetitively match.
         * @param {number=} opt_minimum The minimum number of times to match.  Defaults
         *     to 0.
         * @param {number=} opt_maximum The maximum number of times to match.  Defaults
         *     to unlimited.
         * @constructor
         * @extends {goog.dom.pattern.AbstractPattern}
         * @final
         */
        constructor(pattern: goog.dom.pattern.AbstractPattern, opt_minimum?: number, opt_maximum?: number);
    
        /**
         * Number of times the pattern has matched.
         *
         * @type {number}
         */
        count: number;
    
        /**
         * The matched nodes.
         *
         * @type {Array.<Node>}
         */
        matches: Node[];
    }
}

