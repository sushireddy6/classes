// function hoist(){
//     var name = "sushi";
//     addr="bengaluru";
//    {
//      name1 = "chinni";
//      addr1="marathahalli";
//      console.log(name); //outputs sushi
//    }
//  }
//   hoist();
//  function hoist(){
//     name = "sushi";
//     addr="bengaluru";
//     console.log(name); //outputs sushi
//    {
//      name1 = "chinni";
//      addr1="marathahalli";
//    }
//  }
//  hoist();

//  function hoist(){
//     name = "sushi";
//     addr="bengaluru";
//    {
//      name1 = "chinni";
//      addr1="marathahalli";
//      console.log(name1); // outputs chinni
//    }
//  }
//  hoist();

//  function hoist(){
//     name = "sushi";
//     addr="bengaluru";
//     console.log(name1); // error
//    {
//      name1 = "chinni";
//      addr1="marathahalli";
//    }
//  }
//  hoist();

// function hoist(){
//    let name = "sushi";
//    addr="bengaluru";
//   {
//     name = "chinni";
//     addr1="marathahalli";
//     console.log(name); //outputs chinni
//   }
// }
//  hoist();

//  function hoist(){
//     var name = "sushi";
//     addr="bengaluru";
//    {
//      name = "chinni";
//      addr1="marathahalli";
//      console.log(name); //outputs chinni
//    }
//  }
//   hoist();
function hoist(){
   const name = "sushi";
    addr="bengaluru";
   {
     name = "chinni";
     addr1="marathahalli";
     console.log(name); //error
   }
 }
  hoist();
