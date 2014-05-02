// Generated Fri May  2 11:41:35 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />

declare module goog.fs.Error {

    /**
     * Names of errors that may be thrown by the File API, the File System API, or
     * the File Writer API.
     *
     * @see http://dev.w3.org/2006/webapi/FileAPI/#ErrorAndException
     * @see http://www.w3.org/TR/file-system-api/#definitions
     * @see http://dev.w3.org/2009/dap/file-system/file-writer.html#definitions
     * @enum {string}
     */
    enum ErrorName { ABORT, ENCODING, INVALID_MODIFICATION, INVALID_STATE, NOT_FOUND, NOT_READABLE, NO_MODIFICATION_ALLOWED, PATH_EXISTS, QUOTA_EXCEEDED, SECURITY, SYNTAX, TYPE_MISMATCH } 

    /**
     * Error codes for file errors.
     * @see http://www.w3.org/TR/file-system-api/#idl-def-FileException
     *
     * @enum {number}
     * @deprecated Use the 'name' or 'message' attribute instead.
     */
    enum ErrorCode { NOT_FOUND, SECURITY, ABORT, NOT_READABLE, ENCODING, NO_MODIFICATION_ALLOWED, INVALID_STATE, SYNTAX, INVALID_MODIFICATION, QUOTA_EXCEEDED, TYPE_MISMATCH, PATH_EXISTS } 

    /**
     * Mapping from error names to values from the ErrorCode enum.
     * @see http://www.w3.org/TR/file-system-api/#definitions.
     * @private {!Object.<string, goog.fs.Error.ErrorCode>}
     */
    var NameToCodeMap_: any /*missing*/;
}

declare module goog.fs {

    /**
     * A filesystem error. Since the filesystem API is asynchronous, stack traces
     * are less useful for identifying where errors come from, so this includes a
     * large amount of metadata in the message.
     *
     * @param {!DOMError} error
     * @param {string} action The action being undertaken when the error was raised.
     * @constructor
     * @extends {goog.debug.GoogError}
     * @final
     */
    class Error extends goog.debug.GoogError {
        /**
         * A filesystem error. Since the filesystem API is asynchronous, stack traces
         * are less useful for identifying where errors come from, so this includes a
         * large amount of metadata in the message.
         *
         * @param {!DOMError} error
         * @param {string} action The action being undertaken when the error was raised.
         * @constructor
         * @extends {goog.debug.GoogError}
         * @final
         */
        constructor(error: DOMError, action: string);
    }
}

