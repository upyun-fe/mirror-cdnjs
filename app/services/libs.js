'use strict';

angular.module('cdnjs')

.factory('Libs', ['$http', function($http) {
  return {
    query: function(params) {
      return $http.get('http://api.cdnjs.com/libraries', { params: params })
        .then(function(response) {
          if (response && response.data && response.data.results) {
            response.data.results = response.data.results.map(function(itm) {
              itm.latest = itm.latest.replace('cdnjs.cloudflare.com', 'mirror-cdnjs.b0.upaiyun.com');
              return itm;
            });
          }
          return response.data;
        });
    }
  };
}]);
