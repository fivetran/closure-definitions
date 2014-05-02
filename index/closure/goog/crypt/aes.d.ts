// Generated Thu May  1 17:20:01 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/crypt/blockcipher.d.ts" />

declare module goog.crypt {

    /**
     * Implementation of AES in JavaScript.
     * See http://en.wikipedia.org/wiki/Advanced_Encryption_Standard
     *
     * WARNING: This is ECB mode only. If you are encrypting something
     * longer than 16 bytes, or encrypting more than one value with the same key
     * (so basically, always) you need to use this with a block cipher mode of
     * operation.  See goog.crypt.Cbc.
     *
     * See http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation for more
     * information.
     *
     * @constructor
     * @implements {goog.crypt.BlockCipher}
     * @param {!Array.<number>} key The key as an array of integers in {0, 255}.
     *     The key must have lengths of 16, 24, or 32 integers for 128-,
     *     192-, or 256-bit encryption, respectively.
     * @final
     * @struct
     */
    class Aes implements goog.crypt.BlockCipher {
        /**
         * Implementation of AES in JavaScript.
         * See http://en.wikipedia.org/wiki/Advanced_Encryption_Standard
         *
         * WARNING: This is ECB mode only. If you are encrypting something
         * longer than 16 bytes, or encrypting more than one value with the same key
         * (so basically, always) you need to use this with a block cipher mode of
         * operation.  See goog.crypt.Cbc.
         *
         * See http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation for more
         * information.
         *
         * @constructor
         * @implements {goog.crypt.BlockCipher}
         * @param {!Array.<number>} key The key as an array of integers in {0, 255}.
         *     The key must have lengths of 16, 24, or 32 integers for 128-,
         *     192-, or 256-bit encryption, respectively.
         * @final
         * @struct
         */
        constructor(key: number[]);
    }
}

