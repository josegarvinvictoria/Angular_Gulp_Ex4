angular.module('appLlibres')
.controller("LlibresController", function ($scope, LlibresSvc) {
    $scope.llibres = [];
    LlibresSvc.query(function (llibres) {
        $scope.llibres = llibres;
    });

    $scope.afegirLlibre = function() {
        LlibresSvc.save({
            titol: $scope.titolN,
            isbn: $scope.isbnN,
            autors: [""]
        }, function(){
            $scope.llibres.unshift({
                titol: $scope.titolN,
                isbn: $scope.isbnN,
                autors: [""]
            });
            
            $scope.titolN = "";
            $scope.isbnN = "";
        });
    };
    $scope.editar = function(llibre) {
        $scope.isbnE= llibre.isbn;
        $scope.titolE = llibre.titol;
        $scope.llibreEdit = llibre;
        
      console.log(llibre);   
    }
    
    $scope.actualitzar = function() {
        if ($scope.isbnE && $scope.titolE) {
            LlibresSvc.update({"_id": $scope.llibreEdit._id , "isbn": $scope.isbnE , "titol" : $scope.titolE}, function() { 
                    $scope.llibreEdit.isbn = $scope.isbnE;
                    $scope.llibreEdit.titol = $scope.titolE;
                    $scope.isbnE=null;
                    $scope.titolE = null;
            
            });
            
        }
    }
    
    $scope.esborrar= function(llibre) {
        LlibresSvc.delete({
        id: llibre.isbn
        }, function(){
            
            $scope.llibres.splice(llibre, 1);
    });
    };
});

