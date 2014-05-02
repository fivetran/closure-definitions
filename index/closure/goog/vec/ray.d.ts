// Generated Thu May  1 17:20:58 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/vec/float64array.d.ts" />
/// <reference path="../../goog/vec/float32array.d.ts" />
/// <reference path="../../goog/vec/vec.d.ts" />
/// <reference path="../../goog/vec/vec3.d.ts" />

declare module goog.vec {

    /**
     * Constructs a new ray with an optional origin and direction. If not specified,
     * the default is [0, 0, 0].
     * @param {goog.vec.Vec3.AnyType=} opt_origin The optional origin.
     * @param {goog.vec.Vec3.AnyType=} opt_dir The optional direction.
     * @constructor
     * @final
     */
    class Ray {
        /**
         * Constructs a new ray with an optional origin and direction. If not specified,
         * the default is [0, 0, 0].
         * @param {goog.vec.Vec3.AnyType=} opt_origin The optional origin.
         * @param {goog.vec.Vec3.AnyType=} opt_dir The optional direction.
         * @constructor
         * @final
         */
        constructor(opt_origin?: goog.vec.Vec3.AnyType, opt_dir?: goog.vec.Vec3.AnyType);
    
        /**
         * Sets the origin and direction of the ray.
         * @param {goog.vec.AnyType} origin The new origin.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        set(origin: goog.vec.AnyType, dir: goog.vec.AnyType): void;
    
        /**
         * Sets the origin of the ray.
         * @param {goog.vec.AnyType} origin the new origin.
         */
        setOrigin(origin: goog.vec.AnyType): void;
    
        /**
         * Sets the direction of the ray.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        setDir(dir: goog.vec.AnyType): void;
    
        /**
         * Returns true if this ray is equal to the other ray.
         * @param {goog.vec.Ray} other The other ray.
         * @return {boolean} True if this ray is equal to the other ray.
         */
        equals(other: goog.vec.Ray): boolean;
    }
}

