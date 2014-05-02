// Generated Thu May  1 16:44:07 PDT 2014

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

declare module goog.userAgent.platform {

    /**
     * The version of the platform. We only determine the version for Windows and
     * Mac, since it doesn't make much sense on Linux. For Windows, we only look at
     * the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given version
     * 0.0
     * @type {string}
     */
    var VERSION: string;

    /**
     * Whether the user agent platform version is higher or the same as the given
     * version.
     *
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the user agent platform version is higher or the
     *     same as the given version.
     */
    function isVersion(version: any /*string|number*/): boolean;
}
