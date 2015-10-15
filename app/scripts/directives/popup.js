'use strict';
angular.module('angularTrainingApp').directive('popup', function() {
    return {
        restrict: 'E',
        templateUrl: '../../views/post-form-template.html'
    };
});