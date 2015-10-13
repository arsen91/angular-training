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


        $scope.createPost = function() {
            postsService.addPost(this.post);
        };

        $scope.formReset = function() {
            $('#myModal').modal('hide');
            this.post = {};
        };
    }]);
