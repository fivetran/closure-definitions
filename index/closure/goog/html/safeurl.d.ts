// Generated Thu May  1 17:27:23 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/i18n/bidi.d.ts" />
/// <reference path="../../goog/string/typedstring.d.ts" />
/// <reference path="../../goog/string/const.d.ts" />

declare module goog.html.SafeUrl {

    /**
     * The innocuous string generated by goog.html.SafeUrl.sanitize when passed
     * an unsafe URL.
     *
     * about:invalid is registered in
     * http://www.w3.org/TR/css3-values/#about-invalid.
     * http://tools.ietf.org/html/rfc6694#section-2.2.1 permits about URLs to
     * contain a fragment, which is not to be considered when determining if an
     * about URL is well-known.
     *
     * Using about:invalid seems preferable to using a fixed data URL, since
     * browsers might choose to not report CSP violations on it, as legitimate
     * CSS function calls to attr() can result in this URL being produced. It is
     * also a standard URL which matches exactly the semantics we need:
     * "The about:invalid URI references a non-existent document with a generic
     * error condition. It can be used when a URI is necessary, but the default
     * value shouldn't be resolveable as any type of document".
     *
     * @const {string}
     */
    var INNOCUOUS_STRING: any /*missing*/;

    /**
     * Performs a runtime check that the provided object is indeed a SafeUrl
     * object, and returns its value.
     *
     * IMPORTANT: The guarantees of the SafeUrl type contract only extend to the
     * behavior of  browsers when interpreting URLs. Values of SafeUrl objects MUST
     * be appropriately escaped before embedding in a HTML document. Note that the
     * required escaping is context-sensitive (e.g. a different escaping is
     * required for embedding a URL in a style property within a style
     * attribute, as opposed to embedding in a href attribute).
     *
     * Note that the returned value does not necessarily correspond to the string
     * with which the SafeUrl was constructed, since goog.html.SafeUrl.sanitize
     * will percent-encode many characters.
     *
     * @param {!goog.html.SafeUrl} safeUrl The object to extract from.
     * @return {string} The SafeUrl object's contained string, unless the run-time
     *     type check fails. In that case, {@code unwrap} returns an innocuous
     *     string, or, if assertions are enabled, throws
     *     {@code goog.asserts.AssertionError}.
     */
    function unwrap(safeUrl: goog.html.SafeUrl): string;

    /**
     * Creates a SafeUrl object from a compile-time constant string.
     *
     * Compile-time constant strings are inherently program-controlled and hence
     * trusted.
     *
     * @param {!goog.string.Const} url A compile-time-constant string from which to
     *         create a SafeUrl.
     * @return {!goog.html.SafeUrl} A SafeUrl object initialized to {@code url}.
     */
    function fromConstant(url: goog.string.Const): goog.html.SafeUrl;

    /**
     * Creates a SafeUrl object from {@code url}. If {@code url} is a
     * goog.html.SafeUrl then it is simply returned. Otherwise the input string is
     * validated to match a pattern of commonly used safe URLs. The string is
     * converted to UTF-8 and non-whitelisted characters are percent-encoded. The
     * string wrapped by the created SafeUrl will thus contain only ASCII printable
     * characters.
     *
     * {@code url} may be a URL with the http, https, or mailto scheme,
     * or a relative URL (i.e., a URL without a scheme; specifically, a
     * scheme-relative, absolute-path-relative, or path-relative URL).
     *
     * {@code url} is converted to UTF-8 and non-whitelisted characters are
     * percent-encoded. Whitelisted characters are '%' and, from RFC 3986,
     * unreserved characters and reserved characters, with the exception of '\'',
     * '(' and ')'. This ensures the the SafeUrl contains only ASCII-printable
     * characters and reduces the chance of security bugs were it to be
     * interpolated into a specific context without the necessary escaping.
     *
     * If {@code url} fails validation or does not UTF-16 decode correctly
     * (JavaScript strings are UTF-16 encoded), this function returns a SafeUrl
     * object containing an innocuous string, goog.html.SafeUrl.INNOCUOUS_STRING.
     *
     * @see http://url.spec.whatwg.org/#concept-relative-url
     * @param {string|!goog.string.TypedString} url The URL to validate.
     * @return {!goog.html.SafeUrl} The validated URL, wrapped as a SafeUrl.
     */
    function sanitize(url: any /*string|goog.string.TypedString*/): goog.html.SafeUrl;
}

declare module goog.html {

    /**
     * A string that is safe to use in URL context in DOM APIs and HTML documents.
     *
     * A SafeUrl is a string-like object that carries the security type contract
     * that its value as a string will not cause untrusted script execution
     * when evaluated as a hyperlink URL in a browser.
     *
     * Values of this type are guaranteed to be safe to use in URL/hyperlink
     * contexts, such as, assignment to URL-valued DOM properties, or
     * interpolation into a HTML template in URL context (e.g., inside a href
     * attribute), in the sense that the use will not result in a
     * Cross-Site-Scripting vulnerability.
     *
     * Note that, as documented in {@code goog.html.SafeUrl.unwrap}, this type's
     * contract does not guarantee that instances are safe to interpolate into HTML
     * without appropriate escaping.
     *
     * Note also that this type's contract does not imply any guarantees regarding
     * the resource the URL refers to.  In particular, SafeUrls are <b>not<b/>
     * safe to use in a context where the referred-to resource is interpreted as
     * trusted code, e.g., as the src of a script tag.
     *
     * Instances of this type must be created via the factory methods
     * ({@code goog.html.SafeUrl.from}, {@code goog.html.SafeUrl.sanitize}), etc and
     * not by invoking its constructor.  The constructor intentionally takes no
     * parameters and the type is immutable; hence only a default instance
     * corresponding to the empty string can be obtained via constructor invocation.
     *
     * @see goog.html.SafeUrl#fromConstant
     * @see goog.html.SafeUrl#from
     * @see goog.html.SafeUrl#sanitize
     * @constructor
     * @final
     * @struct
     * @implements {goog.i18n.bidi.DirectionalString}
     * @implements {goog.string.TypedString}
     */
    class SafeUrl implements goog.i18n.bidi.DirectionalString, goog.string.TypedString {
        /**
         * A string that is safe to use in URL context in DOM APIs and HTML documents.
         *
         * A SafeUrl is a string-like object that carries the security type contract
         * that its value as a string will not cause untrusted script execution
         * when evaluated as a hyperlink URL in a browser.
         *
         * Values of this type are guaranteed to be safe to use in URL/hyperlink
         * contexts, such as, assignment to URL-valued DOM properties, or
         * interpolation into a HTML template in URL context (e.g., inside a href
         * attribute), in the sense that the use will not result in a
         * Cross-Site-Scripting vulnerability.
         *
         * Note that, as documented in {@code goog.html.SafeUrl.unwrap}, this type's
         * contract does not guarantee that instances are safe to interpolate into HTML
         * without appropriate escaping.
         *
         * Note also that this type's contract does not imply any guarantees regarding
         * the resource the URL refers to.  In particular, SafeUrls are <b>not<b/>
         * safe to use in a context where the referred-to resource is interpreted as
         * trusted code, e.g., as the src of a script tag.
         *
         * Instances of this type must be created via the factory methods
         * ({@code goog.html.SafeUrl.from}, {@code goog.html.SafeUrl.sanitize}), etc and
         * not by invoking its constructor.  The constructor intentionally takes no
         * parameters and the type is immutable; hence only a default instance
         * corresponding to the empty string can be obtained via constructor invocation.
         *
         * @see goog.html.SafeUrl#fromConstant
         * @see goog.html.SafeUrl#from
         * @see goog.html.SafeUrl#sanitize
         * @constructor
         * @final
         * @struct
         * @implements {goog.i18n.bidi.DirectionalString}
         * @implements {goog.string.TypedString}
         */
        constructor();
    }
}

