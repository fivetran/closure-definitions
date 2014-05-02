// Generated Thu May  1 16:40:32 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />

declare module goog.net {

    /**
     * Helper class used to load multiple URIs.
     * @param {Array.<string|goog.Uri>} uris The URIs to load.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class BulkLoaderHelper extends goog.Disposable {
        /**
         * Helper class used to load multiple URIs.
         * @param {Array.<string|goog.Uri>} uris The URIs to load.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(uris: any /*string|goog.Uri*/[]);
    
        /**
         * Gets the URI by id.
         * @param {number} id The id.
         * @return {string|goog.Uri} The URI specified by the id.
         */
        getUri(id: number): any /*string|goog.Uri*/;
    
        /**
         * Gets the URIs.
         * @return {Array.<string|goog.Uri>} The URIs.
         */
        getUris(): any /*string|goog.Uri*/[];
    
        /**
         * Gets the response texts.
         * @return {Array.<string>} The response texts.
         */
        getResponseTexts(): string[];
    
        /**
         * Sets the response text by id.
         * @param {number} id The id.
         * @param {string} responseText The response texts.
         */
        setResponseText(id: number, responseText: string): void;
    
        /**
         * Determines if the load of the URIs is complete.
         * @return {boolean} TRUE iff the load is complete.
         */
        isLoadComplete(): boolean;
    }
}
