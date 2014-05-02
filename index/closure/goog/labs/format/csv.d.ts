// Generated Thu May  1 16:45:39 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/string/newlines.d.ts" />

declare module goog.labs.format.csv {

    /**
     * @define {boolean} Enable verbose debugging. This is a flag so it can be
     * enabled in production if necessary post-compilation.  Otherwise, debug
     * information will be stripped to minimize final code size.
     */
    var ENABLE_VERBOSE_DEBUGGING: any /*missing*/;

    /**
     * A token -- a single-character string or a sentinel.
     * @typedef {string|!goog.labs.format.csv.Sentinels_}
     */
    interface Token { /*any (string|goog.labs.format.csv.Sentinels_)*/ }

    /**
     * Parses a CSV string to create a two-dimensional array.
     *
     * This function does not process header lines, etc -- such transformations can
     * be made on the resulting array.
     *
     * @param {string} text The entire CSV text to be parsed.
     * @param {boolean=} opt_ignoreErrors Whether to ignore parsing errors and
     *      instead try to recover and keep going.
     * @return {!Array.<!Array.<string>>} The parsed CSV.
     */
    function parse(text: string, opt_ignoreErrors?: boolean): string[][];

    /**
     * Error thrown when parsing fails.
     *
     * @param {string} text The CSV source text being parsed.
     * @param {number} index The index, in the string, of the position of the
     *      error.
     * @param {string=} opt_message A description of the violated parse expectation.
     * @constructor
     * @extends {goog.debug.GoogError}
     * @final
     */
    class ParseError extends goog.debug.GoogError {
        /**
         * Error thrown when parsing fails.
         *
         * @param {string} text The CSV source text being parsed.
         * @param {number} index The index, in the string, of the position of the
         *      error.
         * @param {string=} opt_message A description of the violated parse expectation.
         * @constructor
         * @extends {goog.debug.GoogError}
         * @final
         */
        constructor(text: string, index: number, opt_message?: string);
    
        /** @inheritDoc */
        name: any /*missing*/;
    }
}

