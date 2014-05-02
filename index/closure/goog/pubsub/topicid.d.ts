// Generated Thu May  1 17:18:02 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.pubsub {

    /**
     * A templated class that is used to register {@code goog.pubsub.PubSub}
     * subscribers.
     *
     * Typical usage for a publisher:
     * <code>
     *   /** @type {!goog.pubsub.TopicId.<!zorg.State>}
     *   zorg.TopicId.STATE_CHANGE = new goog.pubsub.TopicId(
     *       goog.events.getUniqueId('state-change'));
     *
     *   // Compiler enforces that these types are correct.
     *   pubSub.publish(zorg.TopicId.STATE_CHANGE, zorg.State.STARTED);
     * </code>
     *
     * Typical usage for a subscriber:
     * <code>
     *   // Compiler enforces the callback parameter type.
     *   pubSub.subscribe(zorg.TopicId.STATE_CHANGE, function(state) {
     *     if (state == zorg.State.STARTED) {
     *       // Handle STARTED state.
     *     }
     *   });
     * </code>
     *
     * @param {string} topicId
     * @template PAYLOAD
     * @constructor
     * @final
     * @struct
     */
    class TopicId {
        /**
         * A templated class that is used to register {@code goog.pubsub.PubSub}
         * subscribers.
         *
         * Typical usage for a publisher:
         * <code>
         *   /** @type {!goog.pubsub.TopicId.<!zorg.State>}
         *   zorg.TopicId.STATE_CHANGE = new goog.pubsub.TopicId(
         *       goog.events.getUniqueId('state-change'));
         *
         *   // Compiler enforces that these types are correct.
         *   pubSub.publish(zorg.TopicId.STATE_CHANGE, zorg.State.STARTED);
         * </code>
         *
         * Typical usage for a subscriber:
         * <code>
         *   // Compiler enforces the callback parameter type.
         *   pubSub.subscribe(zorg.TopicId.STATE_CHANGE, function(state) {
         *     if (state == zorg.State.STARTED) {
         *       // Handle STARTED state.
         *     }
         *   });
         * </code>
         *
         * @param {string} topicId
         * @template PAYLOAD
         * @constructor
         * @final
         * @struct
         */
        constructor(topicId: string);
    }
}

