function index($scope,$rootScope,apiService){
    apiService.getInfo('/data/userInfo.json',{'key':'ab1ea2'},'get')
              .success(function(data){
                $scope.userInfo = data
              })
    console.log('index控制器')
    $rootScope.indexArr = ['fsaf','fsaf','kkkk']

    console.log($rootScope)
}
function list($scope,$rootScope,$location){
    console.log('list控制器')
    $scope.arr = [1,2,3,4,5,6]
    console.log($location.search().name)

}
function product($scope,$location){
    console.log('product控制器')
    $scope.getInfo = function(){
        console.log($location)
        $location.path('user/info')
    }
}
function about($scope){
    console.log('about控制器')
}

function dom($scope){
}
angular.module('app')
       .controller('index',index)
       .controller('list',list)
       .controller('product',product)
       .controller('about',about)
       .controller('dom',dom)