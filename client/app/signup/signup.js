angular.module('pledgr.signup', [])

.controller('SignupController', function($scope, $window, Auth, SMS) {
  $scope.user = {
    first:'First',
    last:'Last',
    username: 'username@example.com',
    password: '',
    male: false,
    female: false,
    animals: false,
    arts: false,
    education: false,
    environment: false,
    health: false,
    humanService: false,
    international: false,
    publicBenefit: false,
    religion: false,
    local: false,
    phone: '(111)111-1111',
    code:'test',
    pledge: 100.00
  };

  $scope.signup = function() {
    Auth.signup($scope.user)
    .then(function(token) {
        $window.localStorage.setItem('token', token);
        // $location.path('/homepage');
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.sendCode = function() {
    var phone = $scope.user.phone.match(/\d/g).join('');
    SMS.sendCode({
      phone: phone
    });
  };

  $scope.verifyCode = function() {
    var phone = $scope.user.phone.match(/\d/g).join('');
    SMS.verifyCode({
      phone: phone,
      code: $scope.user.code
    });
  };
});
