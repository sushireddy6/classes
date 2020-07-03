// function block() {
//     var x = 1;
//     var y = 1;
//     if (true) {
//         //no global pollution
//         let x = 2;
//         var y = 2;
//     }
//     console.log(x); // outputs 2 
// }
// block();

// function block() {
//     var x = 1;
//     var y = 1;
//     if (true) {
//         // global pollution
//         var x = 2;
//         var y = 2;
//     }
//     console.log(x); // outputs 2 
// }
// block();

// var x = 1;
// function block() {
//     var x = 1;
//     var y = 1;
//     if (true) {
//         var x = 2;
//         var y = 2;
//     }
// }
// block();
// console.log(x);//outputs 1 

// function block() {
//     let x = 1;
//     var y = 1;
//     if (true) {
//         var x = 2;
//         var y = 2;
//     }
//     console.log(x);  // x has been already defined
// }
// block();

// function block() {
//     let x = 1;
//     var y = 1;
//     if (true) {
//         var x = 2;
//         var y = 2;
//         console.log(x); // x has been already defined
//     }
//     }
// block();

// function block() {
//     let x = 1;
//     var y = 1;
//     if (true) {
//         //var x = 2;
//         var y = 2;
//         console.log(x); // child should access parent ????? but mot happening
//     }
//     }
//     console.log(x); // error
// block();

function block() {
    var x = 1;
    var y = 1;
    if (true) {
        //var x = 2;
        var y = 2;
        //console.log(x);  //error
        
    }
    }
    console.log(x);
block();




