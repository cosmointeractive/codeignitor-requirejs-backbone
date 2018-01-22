'use strict';

/**
 * Global
 *
 * Entry point into module
 * @see http://backbonetutorials.com/organizing-backbone-using-modules/
 *
 */

define('app/modules/Global',
	[
		'jquery',
		'underscore',
		'backbone',
		'app/views/ExampleView'
	],
	function ($, _, Backbone, ExampleView) {
		var Global = {
			init: function(){
				this.exampleView = new ExampleView();
        this.exampleView.render();
	  	}// end init
    };

    Global.init();

    return Global;
	}
);