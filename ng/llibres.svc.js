angular.module('appLlibres')
.service('LlibresSvc', function ($resource) {
    return $resource('/api/llibres/:id', null, {
        'update': {
            method: 'PUT'
        }
    });
});
