// Generated Thu May  1 17:18:53 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />

declare module goog.dom.classes {

    /**
     * Sets the entire class name of an element.
     * @param {Node} element DOM node to set class of.
     * @param {string} className Class name(s) to apply to element.
     */
    function set(element: Node, className: string): void;

    /**
     * Gets an array of class names on an element
     * @param {Node} element DOM node to get class of.
     * @return {!Array} Class names on {@code element}. Some browsers add extra
     *     properties to the array. Do not depend on any of these!
     */
    function get(element: Node): any[];

    /**
     * Adds a class or classes to an element. Does not add multiples of class names.
     * @param {Node} element DOM node to add class to.
     * @param {...string} var_args Class names to add.
     * @return {boolean} Whether class was added (or all classes were added).
     */
    function add(element: Node, ...var_args: string[]): boolean;

    /**
     * Removes a class or classes from an element.
     * @param {Node} element DOM node to remove class from.
     * @param {...string} var_args Class name(s) to remove.
     * @return {boolean} Whether all classes in {@code var_args} were found and
     *     removed.
     */
    function remove(element: Node, ...var_args: string[]): boolean;

    /**
     * Switches a class on an element from one to another without disturbing other
     * classes. If the fromClass isn't removed, the toClass won't be added.
     * @param {Node} element DOM node to swap classes on.
     * @param {string} fromClass Class to remove.
     * @param {string} toClass Class to add.
     * @return {boolean} Whether classes were switched.
     */
    function swap(element: Node, fromClass: string, toClass: string): boolean;

    /**
     * Adds zero or more classes to an element and removes zero or more as a single
     * operation. Unlike calling {@link goog.dom.classes.add} and
     * {@link goog.dom.classes.remove} separately, this is more efficient as it only
     * parses the class property once.
     *
     * If a class is in both the remove and add lists, it will be added. Thus,
     * you can use this instead of {@link goog.dom.classes.swap} when you have
     * more than two class names that you want to swap.
     *
     * @param {Node} element DOM node to swap classes on.
     * @param {?(string|Array.<string>)} classesToRemove Class or classes to
     *     remove, if null no classes are removed.
     * @param {?(string|Array.<string>)} classesToAdd Class or classes to add, if
     *     null no classes are added.
     */
    function addRemove(element: Node, classesToRemove: any /*string|string[]*/, classesToAdd: any /*string|string[]*/): void;

    /**
     * Returns true if an element has a class.
     * @param {Node} element DOM node to test.
     * @param {string} className Class name to test for.
     * @return {boolean} Whether element has the class.
     */
    function has(element: Node, className: string): boolean;

    /**
     * Adds or removes a class depending on the enabled argument.
     * @param {Node} element DOM node to add or remove the class on.
     * @param {string} className Class name to add or remove.
     * @param {boolean} enabled Whether to add or remove the class (true adds,
     *     false removes).
     */
    function enable(element: Node, className: string, enabled: boolean): void;

    /**
     * Removes a class if an element has it, and adds it the element doesn't have
     * it.  Won't affect other classes on the node.
     * @param {Node} element DOM node to toggle class on.
     * @param {string} className Class to toggle.
     * @return {boolean} True if class was added, false if it was removed
     *     (in other words, whether element has the class after this function has
     *     been called).
     */
    function toggle(element: Node, className: string): boolean;
}

