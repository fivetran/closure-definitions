/// <reference path="../../../globals.d.ts" />
/// <reference path="../ui/component.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.debug {

    class FpsDisplay extends FpsDisplay__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FpsDisplay__Class extends goog.ui.Component__Class  { 
    
            /**
             * Displays frames per seconds that the window this component is
             * rendered in is animating at.
             *
             * @param {goog.dom.DomHelper=} opt_domHelper An optional dom helper.
             * @constructor
             * @extends {goog.ui.Component}
             * @final
             */
            constructor(opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * @return {number} The average frames per second.
             */
            getFps(): number;
    } 
    
}

declare module goog.debug.FpsDisplay {

    class FpsAnimation_ extends FpsAnimation___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FpsAnimation___Class  { 
    
            /**
             * @param {Element} elem An element to hold the FPS count.
             * @constructor
             * @private
             */
            constructor(elem: Element);
    
            /**
             * @param {number} now The current time.
             */
            onAnimationFrame(now: number): void;
    } 
    

    /**
     * CSS class for the FPS display.
     */
    var CSS: any /*missing*/;

    /**
     * The number of samples per FPS report.
     */
    var SAMPLES: any /*missing*/;
}
