// Generated Thu May  1 17:18:45 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/dom/pattern/pattern.d.ts" />
/// <reference path="../../../goog/dom/pattern/abstractpattern.d.ts" />

declare module goog.dom.pattern {

    /**
     * Pattern object that matches a sequence of other patterns.
     *
     * @param {Array.<goog.dom.pattern.AbstractPattern>} patterns Ordered array of
     *     patterns to match.
     * @param {boolean=} opt_ignoreWhitespace Optional flag to ignore text nodes
     *     consisting entirely of whitespace.  The default is to not ignore them.
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     * @final
     */
    class Sequence extends goog.dom.pattern.AbstractPattern {
        /**
         * Pattern object that matches a sequence of other patterns.
         *
         * @param {Array.<goog.dom.pattern.AbstractPattern>} patterns Ordered array of
         *     patterns to match.
         * @param {boolean=} opt_ignoreWhitespace Optional flag to ignore text nodes
         *     consisting entirely of whitespace.  The default is to not ignore them.
         * @constructor
         * @extends {goog.dom.pattern.AbstractPattern}
         * @final
         */
        constructor(patterns: goog.dom.pattern.AbstractPattern[], opt_ignoreWhitespace?: boolean);
    
        /**
         * Ordered array of patterns to match.
         *
         * @type {Array.<goog.dom.pattern.AbstractPattern>}
         */
        patterns: goog.dom.pattern.AbstractPattern[];
    }
}

