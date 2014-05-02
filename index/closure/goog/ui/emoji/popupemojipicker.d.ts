// Generated Thu May  1 16:42:30 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/ui/emoji/emoji.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../goog/ui/paletterenderer.d.ts" />
/// <reference path="../../../goog/ui/emoji/emojipaletterenderer.d.ts" />
/// <reference path="../../../goog/ui/emoji/progressiveemojipaletterenderer.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/ui/selectionmodel.d.ts" />
/// <reference path="../../../goog/ui/registry.d.ts" />
/// <reference path="../../../goog/ui/decorate.d.ts" />
/// <reference path="../../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/ui/control.d.ts" />
/// <reference path="../../../goog/ui/palette.d.ts" />
/// <reference path="../../../goog/net/eventtype.d.ts" />
/// <reference path="../../../goog/net/imageloader.d.ts" />
/// <reference path="../../../goog/ui/emoji/emojipalette.d.ts" />
/// <reference path="../../../goog/ui/tabpane.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/ui/emoji/emojipicker.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/positioning/positioning.d.ts" />
/// <reference path="../../../goog/positioning/abstractposition.d.ts" />
/// <reference path="../../../goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../../goog/positioning/clientposition.d.ts" />
/// <reference path="../../../goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../../goog/positioning/absoluteposition.d.ts" />
/// <reference path="../../../goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/ui/popupbase.d.ts" />
/// <reference path="../../../goog/positioning/viewportposition.d.ts" />
/// <reference path="../../../goog/ui/popup.d.ts" />

declare module goog.ui.emoji {

    /**
     * Constructs a popup emoji picker widget.
     *
     * @param {string} defaultImgUrl Url of the img that should be used to fill up
     *     the cells in the emoji table, to prevent jittering. Should be the same
     *     size as the emoji.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     * @final
     */
    class PopupEmojiPicker extends goog.ui.Component {
        /**
         * Constructs a popup emoji picker widget.
         *
         * @param {string} defaultImgUrl Url of the img that should be used to fill up
         *     the cells in the emoji table, to prevent jittering. Should be the same
         *     size as the emoji.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         * @final
         */
        constructor(defaultImgUrl: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Adds a group of emoji to the picker.
         *
         * @param {string|Element} title Title for the group.
         * @param {Array.<Array>} emojiGroup A new group of emoji to be added. Each
         *    internal array contains [emojiUrl, emojiId].
         */
        addEmojiGroup(title: any /*string|Element*/, emojiGroup: any[][]): void;
    
        /**
         * Sets whether the emoji picker should toggle if it is already open.
         * @param {boolean} toggle The toggle mode to use.
         */
        setToggleMode(toggle: boolean): void;
    
        /**
         * Gets whether the emojipicker is in toggle mode
         * @return {boolean} toggle.
         */
        getToggleMode(): boolean;
    
        /**
         * Sets whether loading of images should be delayed until after dom creation.
         * Thus, this function must be called before {@link #createDom}. If set to true,
         * the client must call {@link #loadImages} when they wish the images to be
         * loaded.
         *
         * @param {boolean} shouldDelay Whether to delay loading the images.
         */
        setDelayedLoad(shouldDelay: boolean): void;
    
        /**
         * Sets whether the emoji picker can accept focus.
         * @param {boolean} focusable Whether the emoji picker should accept focus.
         */
        setFocusable(focusable: boolean): void;
    
        /**
         * Sets the URL prefix for the emoji URLs.
         *
         * @param {string} urlPrefix Prefix that should be prepended to all URLs.
         */
        setUrlPrefix(urlPrefix: string): void;
    
        /**
         * Sets the location of the tabs in relation to the emoji grids. This should
         * only be called before the picker has been rendered.
         *
         * @param {goog.ui.TabPane.TabLocation} tabLocation The location of the tabs.
         */
        setTabLocation(tabLocation: goog.ui.TabPane.TabLocation): void;
    
        /**
         * Sets the number of rows per grid in the emoji picker. This should only be
         * called before the picker has been rendered.
         *
         * @param {number} numRows Number of rows per grid.
         */
        setNumRows(numRows: number): void;
    
        /**
         * Sets the number of columns per grid in the emoji picker. This should only be
         * called before the picker has been rendered.
         *
         * @param {number} numCols Number of columns per grid.
         */
        setNumColumns(numCols: number): void;
    
        /**
         * Sets the progressive rendering aspect of this emojipicker. Must be called
         * before createDom to have an effect.
         *
         * @param {boolean} progressive Whether the picker should render progressively.
         */
        setProgressiveRender(progressive: boolean): void;
    
        /**
         * Returns the number of emoji groups in this picker.
         *
         * @return {number} The number of emoji groups in this picker.
         */
        getNumEmojiGroups(): number;
    
        /**
         * Causes the emoji imgs to be loaded into the picker. Used for delayed loading.
         */
        loadImages(): void;
    
        /**
         * Attaches the popup emoji picker to an element.
         *
         * @param {Element} element The element to attach to.
         */
        attach(element: Element): void;
    
        /**
         * Detatches the popup emoji picker from an element.
         *
         * @param {Element} element The element to detach from.
         */
        detach(element: Element): void;
    
        /**
         * @return {goog.ui.emoji.EmojiPicker} The emoji picker instance.
         */
        getEmojiPicker(): goog.ui.emoji.EmojiPicker;
    
        /**
         * Returns whether the Popup dismisses itself when the user clicks outside of
         * it.
         * @return {boolean} Whether the Popup autohides on an external click.
         */
        getAutoHide(): boolean;
    
        /**
         * Sets whether the Popup dismisses itself when the user clicks outside of it -
         * must be called after the Popup has been created (in createDom()),
         * otherwise it does nothing.
         *
         * @param {boolean} autoHide Whether to autohide on an external click.
         */
        setAutoHide(autoHide: boolean): void;
    
        /**
         * Returns the region inside which the Popup dismisses itself when the user
         * clicks, or null if it was not set. Null indicates the entire document is
         * the autohide region.
         * @return {Element} The DOM element for autohide, or null if it hasn't been
         *     set.
         */
        getAutoHideRegion(): Element;
    
        /**
         * Sets the region inside which the Popup dismisses itself when the user
         * clicks - must be called after the Popup has been created (in createDom()),
         * otherwise it does nothing.
         *
         * @param {Element} element The DOM element for autohide.
         */
        setAutoHideRegion(element: Element): void;
    
        /**
         * Returns the {@link goog.ui.PopupBase} from this picker. Returns null if the
         * popup has not yet been created.
         *
         * NOTE: This should *ONLY* be called from tests. If called before createDom(),
         * this should return null.
         *
         * @return {goog.ui.PopupBase?} The popup, or null if it hasn't been created.
         */
        getPopup(): goog.ui.PopupBase;
    
        /**
         * @return {Element} The last element that triggered the popup.
         */
        getLastTarget(): Element;
    
        /**
         * @return {goog.ui.emoji.Emoji} The currently selected emoji.
         */
        getSelectedEmoji(): goog.ui.emoji.Emoji;
    }
}
