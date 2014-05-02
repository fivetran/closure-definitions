// Generated Thu May  1 21:08:33 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />

declare module goog.math.AffineTransform {

    /**
     * Creates a transform representing a scaling transformation.
     *
     * @param {number} sx The x-axis scaling factor.
     * @param {number} sy The y-axis scaling factor.
     * @return {!goog.math.AffineTransform} A transform representing a scaling
     *     transformation.
     */
    function getScaleInstance(sx: number, sy: number): goog.math.AffineTransform;

    /**
     * Creates a transform representing a translation transformation.
     *
     * @param {number} dx The distance to translate in the x direction.
     * @param {number} dy The distance to translate in the y direction.
     * @return {!goog.math.AffineTransform} A transform representing a
     *     translation transformation.
     */
    function getTranslateInstance(dx: number, dy: number): goog.math.AffineTransform;

    /**
     * Creates a transform representing a shearing transformation.
     *
     * @param {number} shx The x-axis shear factor.
     * @param {number} shy The y-axis shear factor.
     * @return {!goog.math.AffineTransform} A transform representing a shearing
     *     transformation.
     */
    function getShearInstance(shx: number, shy: number): goog.math.AffineTransform;

    /**
     * Creates a transform representing a rotation transformation.
     *
     * @param {number} theta The angle of rotation measured in radians.
     * @param {number} x The x coordinate of the anchor point.
     * @param {number} y The y coordinate of the anchor point.
     * @return {!goog.math.AffineTransform} A transform representing a rotation
     *     transformation.
     */
    function getRotateInstance(theta: number, x: number, y: number): goog.math.AffineTransform;
}

declare module goog.math {

    /**
     * Creates a 2D affine transform. An affine transform performs a linear
     * mapping from 2D coordinates to other 2D coordinates that preserves the
     * "straightness" and "parallelness" of lines.
     *
     * Such a coordinate transformation can be represented by a 3 row by 3 column
     * matrix with an implied last row of [ 0 0 1 ]. This matrix transforms source
     * coordinates (x,y) into destination coordinates (x',y') by considering them
     * to be a column vector and multiplying the coordinate vector by the matrix
     * according to the following process:
     * <pre>
     *      [ x']   [  m00  m01  m02  ] [ x ]   [ m00x + m01y + m02 ]
     *      [ y'] = [  m10  m11  m12  ] [ y ] = [ m10x + m11y + m12 ]
     *      [ 1 ]   [   0    0    1   ] [ 1 ]   [         1         ]
     * </pre>
     *
     * This class is optimized for speed and minimizes calculations based on its
     * knowledge of the underlying matrix (as opposed to say simply performing
     * matrix multiplication).
     *
     * @param {number=} opt_m00 The m00 coordinate of the transform.
     * @param {number=} opt_m10 The m10 coordinate of the transform.
     * @param {number=} opt_m01 The m01 coordinate of the transform.
     * @param {number=} opt_m11 The m11 coordinate of the transform.
     * @param {number=} opt_m02 The m02 coordinate of the transform.
     * @param {number=} opt_m12 The m12 coordinate of the transform.
     * @constructor
     * @final
     */
    class AffineTransform {
        /**
         * Creates a 2D affine transform. An affine transform performs a linear
         * mapping from 2D coordinates to other 2D coordinates that preserves the
         * "straightness" and "parallelness" of lines.
         *
         * Such a coordinate transformation can be represented by a 3 row by 3 column
         * matrix with an implied last row of [ 0 0 1 ]. This matrix transforms source
         * coordinates (x,y) into destination coordinates (x',y') by considering them
         * to be a column vector and multiplying the coordinate vector by the matrix
         * according to the following process:
         * <pre>
         *      [ x']   [  m00  m01  m02  ] [ x ]   [ m00x + m01y + m02 ]
         *      [ y'] = [  m10  m11  m12  ] [ y ] = [ m10x + m11y + m12 ]
         *      [ 1 ]   [   0    0    1   ] [ 1 ]   [         1         ]
         * </pre>
         *
         * This class is optimized for speed and minimizes calculations based on its
         * knowledge of the underlying matrix (as opposed to say simply performing
         * matrix multiplication).
         *
         * @param {number=} opt_m00 The m00 coordinate of the transform.
         * @param {number=} opt_m10 The m10 coordinate of the transform.
         * @param {number=} opt_m01 The m01 coordinate of the transform.
         * @param {number=} opt_m11 The m11 coordinate of the transform.
         * @param {number=} opt_m02 The m02 coordinate of the transform.
         * @param {number=} opt_m12 The m12 coordinate of the transform.
         * @constructor
         * @final
         */
        constructor(opt_m00?: number, opt_m10?: number, opt_m01?: number, opt_m11?: number, opt_m02?: number, opt_m12?: number);
    
        /**
         * @return {boolean} Whether this transform is the identity transform.
         */
        isIdentity(): boolean;
    
        /**
         * @return {!goog.math.AffineTransform} A copy of this transform.
         */
        clone(): goog.math.AffineTransform;
    
        /**
         * Sets this transform to the matrix specified by the 6 values.
         *
         * @param {number} m00 The m00 coordinate of the transform.
         * @param {number} m10 The m10 coordinate of the transform.
         * @param {number} m01 The m01 coordinate of the transform.
         * @param {number} m11 The m11 coordinate of the transform.
         * @param {number} m02 The m02 coordinate of the transform.
         * @param {number} m12 The m12 coordinate of the transform.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        setTransform(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): goog.math.AffineTransform;
    
        /**
         * Sets this transform to be identical to the given transform.
         *
         * @param {!goog.math.AffineTransform} tx The transform to copy.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        copyFrom(tx: goog.math.AffineTransform): goog.math.AffineTransform;
    
        /**
         * Concatenates this transform with a scaling transformation.
         *
         * @param {number} sx The x-axis scaling factor.
         * @param {number} sy The y-axis scaling factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        scale(sx: number, sy: number): goog.math.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a scaling transformation,
         * i.e. calculates the following matrix product:
         *
         * <pre>
         * [sx  0 0] [m00 m01 m02]
         * [ 0 sy 0] [m10 m11 m12]
         * [ 0  0 1] [  0   0   1]
         * </pre>
         *
         * @param {number} sx The x-axis scaling factor.
         * @param {number} sy The y-axis scaling factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        preScale(sx: number, sy: number): goog.math.AffineTransform;
    
        /**
         * Concatenates this transform with a translate transformation.
         *
         * @param {number} dx The distance to translate in the x direction.
         * @param {number} dy The distance to translate in the y direction.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        translate(dx: number, dy: number): goog.math.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a translate transformation,
         * i.e. calculates the following matrix product:
         *
         * <pre>
         * [1 0 dx] [m00 m01 m02]
         * [0 1 dy] [m10 m11 m12]
         * [0 0  1] [  0   0   1]
         * </pre>
         *
         * @param {number} dx The distance to translate in the x direction.
         * @param {number} dy The distance to translate in the y direction.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        preTranslate(dx: number, dy: number): goog.math.AffineTransform;
    
        /**
         * Concatenates this transform with a rotation transformation around an anchor
         * point.
         *
         * @param {number} theta The angle of rotation measured in radians.
         * @param {number} x The x coordinate of the anchor point.
         * @param {number} y The y coordinate of the anchor point.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        rotate(theta: number, x: number, y: number): goog.math.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a rotation transformation around an
         * anchor point.
         *
         * @param {number} theta The angle of rotation measured in radians.
         * @param {number} x The x coordinate of the anchor point.
         * @param {number} y The y coordinate of the anchor point.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        preRotate(theta: number, x: number, y: number): goog.math.AffineTransform;
    
        /**
         * Concatenates this transform with a shear transformation.
         *
         * @param {number} shx The x shear factor.
         * @param {number} shy The y shear factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        shear(shx: number, shy: number): goog.math.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a shear transformation.
         * i.e. calculates the following matrix product:
         *
         * <pre>
         * [  1 shx 0] [m00 m01 m02]
         * [shy   1 0] [m10 m11 m12]
         * [  0   0 1] [  0   0   1]
         * </pre>
         *
         * @param {number} shx The x shear factor.
         * @param {number} shy The y shear factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        preShear(shx: number, shy: number): goog.math.AffineTransform;
    
        /**
         * @return {number} The scaling factor in the x-direction (m00).
         */
        getScaleX(): number;
    
        /**
         * @return {number} The scaling factor in the y-direction (m11).
         */
        getScaleY(): number;
    
        /**
         * @return {number} The translation in the x-direction (m02).
         */
        getTranslateX(): number;
    
        /**
         * @return {number} The translation in the y-direction (m12).
         */
        getTranslateY(): number;
    
        /**
         * @return {number} The shear factor in the x-direction (m01).
         */
        getShearX(): number;
    
        /**
         * @return {number} The shear factor in the y-direction (m10).
         */
        getShearY(): number;
    
        /**
         * Concatenates an affine transform to this transform.
         *
         * @param {!goog.math.AffineTransform} tx The transform to concatenate.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        concatenate(tx: goog.math.AffineTransform): goog.math.AffineTransform;
    
        /**
         * Pre-concatenates an affine transform to this transform.
         *
         * @param {!goog.math.AffineTransform} tx The transform to preconcatenate.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        preConcatenate(tx: goog.math.AffineTransform): goog.math.AffineTransform;
    
        /**
         * Transforms an array of coordinates by this transform and stores the result
         * into a destination array.
         *
         * @param {!Array.<number>} src The array containing the source points
         *     as x, y value pairs.
         * @param {number} srcOff The offset to the first point to be transformed.
         * @param {!Array.<number>} dst The array into which to store the transformed
         *     point pairs.
         * @param {number} dstOff The offset of the location of the first transformed
         *     point in the destination array.
         * @param {number} numPts The number of points to tranform.
         */
        transform(src: number[], srcOff: number, dst: number[], dstOff: number, numPts: number): void;
    
        /**
         * @return {number} The determinant of this transform.
         */
        getDeterminant(): number;
    
        /**
         * Returns whether the transform is invertible. A transform is not invertible
         * if the determinant is 0 or any value is non-finite or NaN.
         *
         * @return {boolean} Whether the transform is invertible.
         */
        isInvertible(): boolean;
    
        /**
         * @return {!goog.math.AffineTransform} An AffineTransform object
         *     representing the inverse transformation.
         */
        createInverse(): goog.math.AffineTransform;
    
        /**
         * Sets this transform to a scaling transformation.
         *
         * @param {number} sx The x-axis scaling factor.
         * @param {number} sy The y-axis scaling factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        setToScale(sx: number, sy: number): goog.math.AffineTransform;
    
        /**
         * Sets this transform to a translation transformation.
         *
         * @param {number} dx The distance to translate in the x direction.
         * @param {number} dy The distance to translate in the y direction.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        setToTranslation(dx: number, dy: number): goog.math.AffineTransform;
    
        /**
         * Sets this transform to a shearing transformation.
         *
         * @param {number} shx The x-axis shear factor.
         * @param {number} shy The y-axis shear factor.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        setToShear(shx: number, shy: number): goog.math.AffineTransform;
    
        /**
         * Sets this transform to a rotation transformation.
         *
         * @param {number} theta The angle of rotation measured in radians.
         * @param {number} x The x coordinate of the anchor point.
         * @param {number} y The y coordinate of the anchor point.
         * @return {!goog.math.AffineTransform} This affine transform.
         */
        setToRotation(theta: number, x: number, y: number): goog.math.AffineTransform;
    
        /**
         * Compares two affine transforms for equality.
         *
         * @param {goog.math.AffineTransform} tx The other affine transform.
         * @return {boolean} whether the two transforms are equal.
         */
        equals(tx: goog.math.AffineTransform): boolean;
    }
}

