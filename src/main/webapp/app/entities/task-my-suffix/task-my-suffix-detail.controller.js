(function() {
    'use strict';

    angular
        .module('jhHelloWorldApp')
        .controller('TaskMySuffixDetailController', TaskMySuffixDetailController);

    TaskMySuffixDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Task', 'Job'];

    function TaskMySuffixDetailController($scope, $rootScope, $stateParams, previousState, entity, Task, Job) {
        var vm = this;

        vm.task = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhHelloWorldApp:taskUpdate', function(event, result) {
            vm.task = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();