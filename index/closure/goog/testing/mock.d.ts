// Generated Mon May  5 21:15:37 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/testing/mockinterface.d.ts" />
/// <reference path="../../../closure/goog/testing/stacktrace.d.ts" />
/// <reference path="../../../closure/goog/testing/asserts.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/testing/mockmatchers.d.ts" />

declare module goog.testing {

    /**
     * This is a class that represents an expectation.
     * @param {string} name The name of the method for this expectation.
     * @constructor
     * @final
     */
    class MockExpectation {
        /**
         * This is a class that represents an expectation.
         * @param {string} name The name of the method for this expectation.
         * @constructor
         * @final
         */
        constructor(name: string);
    
        /**
         * The minimum number of times this method should be called.
         * @type {number}
         */
        minCalls: number;
    
        /**
         * The maximum number of times this method should be called.
         * @type {number}
         */
        maxCalls: number;
    
        /**
         * The value that this method should return.
         * @type {*}
         */
        returnValue: any;
    
        /**
         * The value that will be thrown when the method is called
         * @type {*}
         */
        exceptionToThrow: any;
    
        /**
         * The arguments that are expected to be passed to this function
         * @type {Array.<*>}
         */
        argumentList: any[];
    
        /**
         * The number of times this method is called by real code.
         * @type {number}
         */
        actualCalls: number;
    
        /**
         * The number of times this method is called during the verification phase.
         * @type {number}
         */
        verificationCalls: number;
    
        /**
         * The function which will be executed when this method is called.
         * Method arguments will be passed to this function, and return value
         * of this function will be returned by the method.
         * @type {Function}
         */
        toDo: Function;
    
        /**
         * Allow expectation failures to include messages.
         * @param {string} message The failure message.
         */
        addErrorMessage(message: string): void;
    
        /**
         * Get the error messages seen so far.
         * @return {string} Error messages separated by \n.
         */
        getErrorMessage(): string;
    
        /**
         * Get how many error messages have been seen so far.
         * @return {number} Count of error messages.
         */
        getErrorMessageCount(): number;
    }

    /**
     * The base class for a mock object.
     * @param {Object|Function} objectToMock The object that should be mocked, or
     *    the constructor of an object to mock.
     * @param {boolean=} opt_mockStaticMethods An optional argument denoting that
     *     a mock should be constructed from the static functions of a class.
     * @param {boolean=} opt_createProxy An optional argument denoting that
     *     a proxy for the target mock should be created.
     * @constructor
     * @implements {goog.testing.MockInterface}
     */
    class Mock implements goog.testing.MockInterface {
        /**
         * The base class for a mock object.
         * @param {Object|Function} objectToMock The object that should be mocked, or
         *    the constructor of an object to mock.
         * @param {boolean=} opt_mockStaticMethods An optional argument denoting that
         *     a mock should be constructed from the static functions of a class.
         * @param {boolean=} opt_createProxy An optional argument denoting that
         *     a proxy for the target mock should be created.
         * @constructor
         * @implements {goog.testing.MockInterface}
         */
        constructor(objectToMock: any /*Object|Function*/, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean);
    
        /**
         * A proxy for the mock.  This can be used for dependency injection in lieu of
         * the mock if the test requires a strict instanceof check.
         * @type {Object}
         */
        $proxy: Object;
    
        /**
         * Map of argument name to optional argument list verifier function.
         * @type {Object}
         */
        $argumentListVerifiers_: Object;
    
        /**
         * The expectation currently being created. All methods that modify the
         * current expectation return the Mock object for easy chaining, so this is
         * where we keep track of the expectation that's currently being modified.
         * @type {goog.testing.MockExpectation}
         * @protected
         */
        $pendingExpectation: goog.testing.MockExpectation;
    
        /**
         * Registers a verfifier function to use when verifying method argument lists.
         * @param {string} methodName The name of the method for which the verifierFn
         *     should be used.
         * @param {Function} fn Argument list verifier function.  Should take 2 argument
         *     arrays as arguments, and return true if they are considered equivalent.
         * @return {!goog.testing.Mock} This mock object.
         */
        $registerArgumentListVerifier(methodName: string, fn: Function): goog.testing.Mock;
    
        /**
         * The function that replaces all methods on the mock object.
         * @param {string} name The name of the method being mocked.
         * @return {*} In record mode, returns the mock object. In replay mode, returns
         *    whatever the creator of the mock set as the return value.
         */
        $mockMethod(name: string): any;
    
        /**
         * Records the currently pending expectation, intended to be overridden by a
         * subclass.
         * @protected
         */
        $recordExpectation(): void;
    
        /**
         * Records an actual method call, intended to be overridden by a
         * subclass. The subclass must find the pending expectation and return the
         * correct value.
         * @param {string} name The name of the method being called.
         * @param {Array} args The arguments to the method.
         * @return {*} The return expected by the mock.
         * @protected
         */
        $recordCall(name: string, args: any[]): any;
    
        /**
         * If the expectation expects to throw, this method will throw.
         * @param {goog.testing.MockExpectation} expectation The expectation.
         */
        $maybeThrow(expectation: goog.testing.MockExpectation): void;
    
        /**
         * If this expectation defines a function to be called,
         * it will be called and its result will be returned.
         * Otherwise, if the expectation expects to throw, it will throw.
         * Otherwise, this method will return defined value.
         * @param {goog.testing.MockExpectation} expectation The expectation.
         * @param {Array} args The arguments to the method.
         * @return {*} The return value expected by the mock.
         */
        $do(expectation: goog.testing.MockExpectation, args: any[]): any;
    
        /**
         * Specifies a return value for the currently pending expectation.
         * @param {*} val The return value.
         * @return {!goog.testing.Mock} This mock object.
         */
        $returns(val: any): goog.testing.Mock;
    
        /**
         * Specifies a value for the currently pending expectation to throw.
         * @param {*} val The value to throw.
         * @return {!goog.testing.Mock} This mock object.
         */
        $throws(val: any): goog.testing.Mock;
    
        /**
         * Specifies a function to call for currently pending expectation.
         * Note, that using this method overrides declarations made
         * using $returns() and $throws() methods.
         * @param {Function} func The function to call.
         * @return {!goog.testing.Mock} This mock object.
         */
        $does(func: Function): goog.testing.Mock;
    
        /**
         * Allows the expectation to be called 0 or 1 times.
         * @return {!goog.testing.Mock} This mock object.
         */
        $atMostOnce(): goog.testing.Mock;
    
        /**
         * Allows the expectation to be called any number of times, as long as it's
         * called once.
         * @return {!goog.testing.Mock} This mock object.
         */
        $atLeastOnce(): goog.testing.Mock;
    
        /**
         * Allows the expectation to be called any number of times.
         * @return {!goog.testing.Mock} This mock object.
         */
        $anyTimes(): goog.testing.Mock;
    
        /**
         * Specifies the number of times the expectation should be called.
         * @param {number} times The number of times this method will be called.
         * @return {!goog.testing.Mock} This mock object.
         */
        $times(times: number): goog.testing.Mock;
    
        /**
         * Write down all the expected functions that have been called on the
         * mock so far. From here on out, future function calls will be
         * compared against this list.
         */
        $replay(): void;
    
        /**
         * Reset the mock.
         */
        $reset(): void;
    
        /**
         * Throws an exception and records that an exception was thrown.
         * @param {string} comment A short comment about the exception.
         * @param {?string=} opt_message A longer message about the exception.
         * @throws {Object} JsUnitException object.
         * @protected
         */
        $throwException(comment: string, opt_message?: string): void;
    
        /**
         * Throws an exception and records that an exception was thrown.
         * @param {Object} ex Exception.
         * @throws {Object} #ex.
         * @protected
         */
        $recordAndThrow(ex: Object): void;
    
        /**
         * Assert that the expected function calls match the actual calls.
         */
        $verify(): void;
    
        /**
         * Verifies that a method call matches an expectation.
         * @param {goog.testing.MockExpectation} expectation The expectation to check.
         * @param {string} name The name of the called method.
         * @param {Array.<*>?} args The arguments passed to the mock.
         * @return {boolean} Whether the call matches the expectation.
         */
        $verifyCall(expectation: goog.testing.MockExpectation, name: string, args: any[]): boolean;
    
        /**
         * Render the provided argument array to a string to help
         * clients with debugging tests.
         * @param {Array.<*>?} args The arguments passed to the mock.
         * @return {string} Human-readable string.
         */
        $argumentsAsString(args: any[]): string;
    
        /**
         * Throw an exception based on an incorrect method call.
         * @param {string} name Name of method called.
         * @param {Array.<*>?} args Arguments passed to the mock.
         * @param {goog.testing.MockExpectation=} opt_expectation Expected next call,
         *     if any.
         */
        $throwCallException(name: string, args: any[], opt_expectation?: goog.testing.MockExpectation): void;
    }
}

declare module goog.testing.Mock {

    /**
     * Option that may be passed when constructing function, method, and
     * constructor mocks. Indicates that the expected calls should be accepted in
     * any order.
     * @const
     * @type {number}
     */
    var LOOSE: number;

    /**
     * Option that may be passed when constructing function, method, and
     * constructor mocks. Indicates that the expected calls should be accepted in
     * the recorded order only.
     * @const
     * @type {number}
     */
    var STRICT: number;
}

