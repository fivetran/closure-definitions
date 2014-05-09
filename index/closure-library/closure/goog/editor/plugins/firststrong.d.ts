/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class FirstStrong extends goog.editor.Plugin {
    
        /**
         * First Strong plugin.
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor();
    }
}

declare module goog.editor.plugins.FirstStrong {

    /**
     * The name of the attribute which records the input text.
     *
     * @type {string}
     * @const
     */
    var INPUT_ATTRIBUTE: string;
}