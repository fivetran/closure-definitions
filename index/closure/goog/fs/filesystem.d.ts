// Generated Thu May  1 16:44:56 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.fs {

    /**
     * A local filesystem.
     *
     * @interface
     */
    interface FileSystem {
        getName(): string;
        getRoot(): goog.fs.DirectoryEntry;
    }
}
