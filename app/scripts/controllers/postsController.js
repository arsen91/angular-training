'use strict';

/**
 * @ngdoc function
 * @name angularTrainingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTrainingApp
 */
angular.module('angularTrainingApp')
    .controller('PostsCtrl', ['$scope', 'postsService', function ($scope, postsService) {
        this.posts = postsService.getPosts();
        $scope.post = {};

        $scope.createPost = function() {
            postsService.addPost($scope.post);
        };

        $scope.formReset = function() {
            $('#myModal').modal('hide');
            $scope.post = {};
        };
    }]);
