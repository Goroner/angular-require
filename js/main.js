require(['config/require',
	'angular',
	'app',
	'services',
	'filters',
	'directives', 
	'controllers' 
	], function(config, ng, app){
	ng.bootstrap(document.querySelector('.myApp'), [app.name]);
});