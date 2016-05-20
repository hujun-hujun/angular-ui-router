function pageTitle($rootScope){
    return {
        link : function(scope,element){
            var func = function(event,toState){
                var title = '1406e';
                if(toState.data && toState.data.title) title += '___'+toState.data.title;
                element.text(title)
            }
            $rootScope.$on('$stateChangeStart',func)
        }
    }
}

function createDom($rootScope){
    return {
        restrict : 'A',
        link : function(scope,element){
            var str = '';
            for(var i = 0 ;i<scope.arr.length;i++){
                str += '<p>id:'+scope.arr[i]+'</p>'
            }
            element.append(str)
        }
    }
}
angular.module('app')
       .directive('pageTitle',pageTitle)
       .directive('createDom',createDom)