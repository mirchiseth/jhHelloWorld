(function () {
    'use strict';

    angular
        .module('jhHelloWorldApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
