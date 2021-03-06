/// <reference path="../../../../globals.d.ts" />
/// <reference path="./iterablemechanism.d.ts" />

declare module goog.storage.mechanism {

    class PrefixedMechanism extends PrefixedMechanism__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class PrefixedMechanism__Class extends goog.storage.mechanism.IterableMechanism__Class  { 
    
            /**
             * Wraps an iterable storage mechanism and creates artificial namespaces.
             *
             * @param {!goog.storage.mechanism.IterableMechanism} mechanism Underlying
             *     iterable storage mechanism.
             * @param {string} prefix Prefix for creating an artificial namespace.
             * @constructor
             * @extends {goog.storage.mechanism.IterableMechanism}
             * @final
             */
            constructor(mechanism: goog.storage.mechanism.IterableMechanism, prefix: string);
    } 
    
}
