// Generated Thu May  1 16:41:13 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/vec/float64array.d.ts" />
/// <reference path="../../goog/vec/float32array.d.ts" />

declare module goog.vec {

    /** @typedef {Float32Array} */
    interface Float32 extends Float32Array { }

    /** @typedef {Float64Array} */
    interface Float64 extends Float64Array { }

    /** @typedef {Array.<number>} */
    interface Number extends Array<number> { }

    /** @typedef {goog.vec.Float32|goog.vec.Float64|goog.vec.Number} */
    interface AnyType { /*any (goog.vec.Float32|goog.vec.Float64|goog.vec.Number)*/ }

    /**
     * @deprecated Use AnyType.
     * @typedef {Float32Array|Array.<number>}
     */
    interface ArrayType { /*any (Float32Array|number[])*/ }

    /**
     * For graphics work, 6 decimal places of accuracy are typically all that is
     * required.
     *
     * @type {number}
     * @const
     */
    var EPSILON: number;
}
