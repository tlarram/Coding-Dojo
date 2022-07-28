var value= 8
var arr2d = [   [2, 5, 8],
                [3, 6, 1],
                [5, 7, 7] ];

// function isPresent2d(arr2d, value) {
//     for(var i=0; i<arr2d.length; i++) { 
//         var innerArray= arr2d[i];
//         for(var i=0; i<innerArray.length; i++) {
//             if(innerArray[i]==value) {
//                 return true; 
//             }
//         }
//     } 
//     return false;
// }

// var result= isPresent2d(arr2d, 8);
// console.log(result);

// complete the following function
function flatten(arr2d) {
    var flat = [];
    for(var i=0; i<arr2d.length; i++) { 
        var innerloop=arr2d[i];
        for(var j=0; j<innerloop.length; j++) {
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]