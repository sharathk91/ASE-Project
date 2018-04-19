angular.module('myhome', ['naif.base64']).controller('home', function($scope,$http,$window){

  $scope.imageUpload = function(element){
    var reader = new FileReader();
    reader.onload = $scope.imageIsLoaded;
    reader.readAsDataURL(element.files[0]);
  }

  $scope.imageIsLoaded = function(e){
    $scope.$apply(function() {

      document.getElementById("img").src = e.target.result;
      document.getElementById("img").style.removeProperty("display");
    });
  }

  $scope.faceUpload = function(element){
    var reader = new FileReader();
    reader.onload = $scope.faceIsLoaded;
    reader.readAsDataURL(element.files[0]);
  }

  $scope.faceIsLoaded = function(e){
    $scope.$apply(function() {

      document.getElementById("face").src = e.target.result;
      document.getElementById("face").style.removeProperty("display");
    });
  }



  $scope.upload = function(file) {

    var appkey = "AIzaSyAAK1nhtcsaMro-SmeTiyCO7-QyjyHLGfU";
    var appurl = "https://vision.googleapis.com/v1/images:annotate?key="+appkey;
    alert(file.base64);
    var request = {
      "requests": [
        {
          "image": {
            "content": file.base64
          },
          "features": [
            {
              "type": "DOCUMENT_TEXT_DETECTION"
            }
          ]
        }
      ]
    };
    $http({
      url: appurl,
      method: 'POST',
      data: request,
      contentType: 'application/json'

    }).success(function(data){

      console.log(data);
      alert(data.responses[0].fullTextAnnotation.text);

    }).error(function(){
      alert("error");
    });
  }

});
