function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        scope: {
          member: '=',
          skills: '='
        },
        controller: function($scope) {
          $scope.showSkill = function(skill) {
            $scope.$emit('showSkill', skill);
          };
        }
    };
}
