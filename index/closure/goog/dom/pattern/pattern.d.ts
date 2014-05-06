// Generated Mon May  5 21:08:18 PDT 2014

/// <reference path="../../../../closure/goog/base.d.ts" />

declare module goog.dom.pattern {

    /**
     * Regular expression for breaking text nodes.
     * @type {RegExp}
     */
    var BREAKING_TEXTNODE_RE: RegExp;

    /**
     * Utility function to match a string against either a string or a regular
     * expression.
     *
     * @param {string|RegExp} obj Either a string or a regular expression.
     * @param {string} str The string to match.
     * @return {boolean} Whether the strings are equal, or if the string matches
     *     the regular expression.
     */
    function matchStringOrRegex(obj: any /*string|RegExp*/, str: string): boolean;

    /**
     * Utility function to match a DOM attribute against either a string or a
     * regular expression.  Conforms to the interface spec for
     * {@link goog.object#every}.
     *
     * @param {string|RegExp} elem Either a string or a regular expression.
     * @param {string} index The attribute name to match.
     * @param {Object} orig The original map of matches to test.
     * @return {boolean} Whether the strings are equal, or if the attribute matches
     *     the regular expression.
     * @this {Element} Called using goog.object every on an Element.
     */
    function matchStringOrRegexMap(elem: any /*string|RegExp*/, index: string, orig: Object): boolean;

    /**
     * When matched to a token, a pattern may return any of the following statuses:
     *  <ol>
     *    <li><code>NO_MATCH</code> - The pattern does not match.  This is the only
     *      value that evaluates to <code>false</code> in a boolean context.
     *    <li><code>MATCHING</code> - The token is part of an incomplete match.
     *    <li><code>MATCH</code> - The token completes a match.
     *    <li><code>BACKTRACK_MATCH</code> - The token does not match, but indicates
     *      the end of a repetitive match.  For instance, in regular expressions,
     *      the pattern <code>/a+/</code> would match <code>'aaaaaaaab'</code>.
     *      Every <code>'a'</code> token would give a status of
     *      <code>MATCHING</code> while the <code>'b'</code> token would give a
     *      status of <code>BACKTRACK_MATCH</code>.
     *  </ol>
     * @enum {number}
     */
    enum MatchType { NO_MATCH, MATCHING, MATCH, BACKTRACK_MATCH } 
}

