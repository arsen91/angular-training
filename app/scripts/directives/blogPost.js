'use strict';
angular.module('angularTrainingApp').directive('blogPost', function() {
    return {
        restrict: 'E',
        templateUrl: '../../views/post-template.html'
    };
});