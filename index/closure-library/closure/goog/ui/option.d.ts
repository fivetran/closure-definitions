/// <reference path="../../../globals.d.ts" />
/// <reference path="./menuitem.d.ts" />
/// <reference path="./controlcontent.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class Option extends Option__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Option__Class extends goog.ui.MenuItem__Class  { 
    
            /**
             * Class representing a menu option.  This is just a convenience class that
             * extends {@link goog.ui.MenuItem} by making it selectable.
             *
             * @param {goog.ui.ControlContent} content Text caption or DOM structure to
             *     display as the content of the item (use to add icons or styling to
             *     menus).
             * @param {*=} opt_model Data/model associated with the menu item.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
             *     document interactions.
             * @constructor
             * @extends {goog.ui.MenuItem}
             */
            constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper);
    } 
    
}
