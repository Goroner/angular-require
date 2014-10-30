require.config({
	baseUrl: 'js/',
	paths: {
	    'angular'		: 'lib/angular',
	    'app'			: 'components/app',
	    'controllers'	: 'components/controllers',
	    'directives'	: 'components/directives',
	    'services'		: 'components/services',
	    'filters'		: 'components/filters'
	},
	shim: {
		'angular': {
			exports: 'angular'
		}
    }
});