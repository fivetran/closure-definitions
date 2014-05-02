// Generated Fri May  2 11:37:44 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.vec.Float64Array {

    /**
     * The number of bytes in an element (as defined by the Typed Array
     * specification).
     *
     * @type {number}
     */
    var BYTES_PER_ELEMENT: number;
}

declare module goog.vec {

    /**
     * Constructs a new Float64Array. The new array is initialized to all zeros.
     *
     * @param {goog.vec.Float64Array|Array|ArrayBuffer|number} p0
     *     The length of the array, or an array to initialize the contents of the
     *     new Float64Array.
     * @constructor
     * @final
     */
    class Float64Array {
        /**
         * Constructs a new Float64Array. The new array is initialized to all zeros.
         *
         * @param {goog.vec.Float64Array|Array|ArrayBuffer|number} p0
         *     The length of the array, or an array to initialize the contents of the
         *     new Float64Array.
         * @constructor
         * @final
         */
        constructor(p0: any /*goog.vec.Float64Array|any[]|ArrayBuffer|number*/);
    
        /**
         * The number of bytes in an element (as defined by the Typed Array
         * specification).
         *
         * @type {number}
         */
        BYTES_PER_ELEMENT: number;
    
        /**
         * Sets elements of the array.
         * @param {Array.<number>|Float64Array} values The array of values.
         * @param {number=} opt_offset The offset in this array to start.
         */
        set(values: any /*number[]|Float64Array*/, opt_offset?: number): void;
    }
}

