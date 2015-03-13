require(['config/require',
	'angular',
	'app',
	'services',
	'filters',
	'directives', 
	'controllers' 
	], function(config, ng, app){
	ng.bootstrap(document.querySelector('[data-ng=my-app]'), [app.name]);
});