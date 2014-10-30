require(['config/require',
	'angular',
	'app', 
	'controllers', 
	'directives', 
	'services', 
	'filters'], function(config, ng, app){
	ng.bootstrap(document.querySelector('.myApp'), [app.name]);
});