var module = angular.module('writer.controllers');

module.controller('AboutCtrl', function($scope, UserService) {

    UserService.getAllUsers().success(function(response) {
        $scope.users = response;
    }).error(function(err) {
        console.log(err);
    });

    $scope.$emit('newPageLoaded', {
        title: 'Om oss',
        description: 'Vilka är vi egentligen? Här kan man läsa mer om oss som driver sidan.',
        author: 'Axel Niklasson',
        image: {
            url: 'http://66.media.tumblr.com/3dbf290f6477026a098a8369e1d96665/tumblr_mj9jshtzH01qadknpo1_1280.jpg',
            width: 1024,
            height: 683
        }
    });
});