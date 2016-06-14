angular.module('app').service('apiService',function($http, $rootScope,$location){
    
    function json2url(json) {
        var arr = [];
        var str = '';
        for (var i in json) {
            str = i + '=' + json[i];
            arr.push(str);
        }
        return arr.join('&');
    };

    function fetch(url,data,method){
        method = method.toLowerCase();
        if (method == 'get') {
            var params = json2url(data);
            return $http.get(url + '?' + params).success(function(res) {
                // cb(res);
            });
        } else {
            return $http.post(url, data, {withCredentials: true}).success(function(res) {
                if( res.error ) {
                    // cb(res);
                }
            });
        }

    }

    this.getInfo = function(url,params,method) {
        return fetch(url,params,method)
    };
})