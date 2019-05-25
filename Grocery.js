var app = angular.module('app',["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/fruits",{
            templateUrl: "Partials/fruit-list.html",
            controller: "Ctrll"
        })

        .when("/cart",{
            templateUrl: "Partials/cart-list.html",
        })
    .otherwise({
        redirectTo: "/fruits"
    });
});

app.controller('ctrl', function($scope){
    $scope.title = 'GROCERY';
    $scope.tagline = "All under one place.";
});

app.controller('Ctrll' , function($scope){
  $scope.fruits= [
    {
        imgUrl: "mango.jpg",
        name: "Mango",
        Price: 50,
        rating: 5,
        brand: "Alphanso",
        color: "yellow",
        weigth: 20,
        details: "There's only one reason why you love the great Indian summer: Mangoes!",
    },
    
    
   {
    imgUrl: "lytchee.jpg",
    name: "Lytchee",
    Price: 150,
    rating: 5,
    brand: "Asian",
    color: "Red",
    weigth: 10,
    details: "I'm right and you're wrong, I'm big and you're small, and there's nothing you can do about it.",
   },


   {
    imgUrl: "cherry.jpg",
    name: "Cherry",
    Price: 250,
    rating: 4,
    brand: "African",
    color: "Red",
    weigth: 5,
    details: " Life is just a bowl of cherries, so live and laugh and laugh at love, love a laugh, laugh and love. ",
   },


   {
    imgUrl: "apple.jpg",
    name: "Apple",
    Price: 80,
    rating: 4,
    brand: "Kashmiri",
    color: "Red",
    weigth: 80,
    details: "Anyone can count the seeds in an apple, but only God can count the number of apples in a seed",
   },

  ]
});  

// $scope.addToCart=function(fruit){
//     console.log("Add to cart: ",books)
// }