// Generated Mon May  5 21:14:32 PDT 2014

/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/fx/dragger.d.ts" />
/// <reference path="../../../../closure/goog/i18n/bidi.d.ts" />
/// <reference path="../../../../closure/goog/string/typedstring.d.ts" />
/// <reference path="../../../../closure/goog/string/const.d.ts" />
/// <reference path="../../../../closure/goog/html/safeurl.d.ts" />
/// <reference path="../../../../closure/goog/dom/tags.d.ts" />
/// <reference path="../../../../closure/goog/html/safestyle.d.ts" />
/// <reference path="../../../../closure/goog/html/safehtml.d.ts" />
/// <reference path="../../../../closure/goog/dom/safe.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../../closure/goog/ui/popupbase.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../../closure/goog/dom/iframe.d.ts" />
/// <reference path="../../../../closure/goog/events/focushandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/modalpopup.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../../closure/goog/html/legacyconversions.d.ts" />
/// <reference path="../../../../closure/goog/ui/dialog.d.ts" />
/// <reference path="../../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/imagerenderer.d.ts" />
/// <reference path="../../../../closure/goog/ui/selectionmodel.d.ts" />
/// <reference path="../../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../../closure/goog/ui/paletterenderer.d.ts" />
/// <reference path="../../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/control.d.ts" />
/// <reference path="../../../../closure/goog/ui/palette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/palette.d.ts" />
/// <reference path="../../../../closure/goog/dom/selection.d.ts" />
/// <reference path="../../../../closure/goog/events/inputhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/changeevent.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/editorpane.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/texpane.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/texeditor.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/symbolpalette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/greekpalette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/comparisonpalette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/mathpalette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/menupalette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/arrowpalette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/palettemanager.d.ts" />
/// <reference path="../../../../closure/goog/ui/tabrenderer.d.ts" />
/// <reference path="../../../../closure/goog/ui/tab.d.ts" />
/// <reference path="../../../../closure/goog/ui/containerrenderer.d.ts" />
/// <reference path="../../../../closure/goog/ui/tabbarrenderer.d.ts" />
/// <reference path="../../../../closure/goog/ui/container.d.ts" />
/// <reference path="../../../../closure/goog/ui/tabbar.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/equationeditor.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/equationeditordialog.d.ts" />

declare module goog.demos.editor {

    /**
     * @constructor
     * @final
     */
    class EquationEditor {
        /**
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Creates a new editor and opens the dialog.
         * @param {string} initialEquation The initial equation value to use.
         */
        openEditor(initialEquation: string): void;
    }
}

