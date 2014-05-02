// Generated Thu May  1 17:25:23 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/labs/object/object.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />

declare module goog.labs.structs.Map {

    /**
     * Browser feature enum necessary for map.
     * @enum {boolean}
     */
    enum BrowserFeature { OBJECT_CREATE_SUPPORTED, OBJECT_KEYS_SUPPORTED } 
}

declare module goog.labs.structs {

    /**
     * Creates a new map.
     * @constructor
     * @struct
     * @final
     */
    class Map {
        /**
         * Creates a new map.
         * @constructor
         * @struct
         * @final
         */
        constructor();
    
        /**
         * @private {number}
         */
        count_: any /*missing*/;
    
        /**
         * Adds the (key, value) pair, overriding previous entry with the same
         * key, if any.
         * @param {string} key The key.
         * @param {*} value The value.
         */
        set(key: string, value: any): void;
    
        /**
         * Gets the value for the given key.
         * @param {string} key The key whose value we want to retrieve.
         * @param {*=} opt_default The default value to return if the key does
         *     not exist in the map, default to undefined.
         * @return {*} The value corresponding to the given key, or opt_default
         *     if the key does not exist in this map.
         */
        get(key: string, opt_default?: any): any;
    
        /**
         * Removes the map entry with the given key.
         * @param {string} key The key to remove.
         * @return {boolean} True if the entry is removed.
         */
        remove(key: string): boolean;
    
        /**
         * Adds the content of the map to this map. If a new entry uses a key
         * that already exists in this map, the existing key is replaced.
         * @param {!goog.labs.structs.Map} map The map to add.
         */
        addAll(map: goog.labs.structs.Map): void;
    
        /**
         * @return {boolean} True if the map is empty.
         */
        isEmpty(): boolean;
    
        /**
         * @return {number} The number of the entries in this map.
         */
        getCount(): number;
    
        /**
         * @param {string} key The key to check.
         * @return {boolean} True if the map contains the given key.
         */
        containsKey(key: string): boolean;
    
        /**
         * Whether the map contains the given value. The comparison is done
         * using !== comparator. Also returns true if the passed value is NaN
         * and a NaN value exists in the map.
         * @param {*} value Value to check.
         * @return {boolean} True if the map contains the given value.
         */
        containsValue(value: any): boolean;
    
        /**
         * @return {!Array.<string>} An array of all the keys contained in this map.
         */
        getKeys(): string[];
    
        /**
         * @return {!Array.<*>} An array of all the values contained in this map.
         *     There may be duplicates.
         */
        getValues(): any[];
    
        /**
         * @return {!Array.<Array>} An array of entries. Each entry is of the
         *     form [key, value]. Do not rely on consistent ordering of entries.
         */
        getEntries(): any[][];
    
        /**
         * Clears the map to the initial state.
         */
        clear(): void;
    
        /**
         * Clones this map.
         * @return {!goog.labs.structs.Map} The clone of this map.
         */
        clone(): goog.labs.structs.Map;
    }
}

