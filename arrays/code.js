
    // backend
    const username = ['random name']
    // console.log(Array.isArray(username));
    

   const names = ['raghav','rohit','sumit']
   const otherNames = ['mayank','sohit']

//   const newArray = names.concat(otherNames)
//   console.log(newArray);
   

//   spread operator => ... -> spread values names,otherNames
  const newArray = [...names,...otherNames]
  console.log(newArray);
  
  const nums = [1,2,3,4,5,[6,7,8,[9,10]]]
  console.log(nums.flat(Infinity));
  
 
    //  slice => original array is not modified , (start,end) => end is not counted
    const movies = ['avengers','batman','superman','spiderman','ironman']
    const myMovies = movies.slice(0,2)
    console.log(myMovies);
    console.log("after slice movies:",movies);
    
    // splice => end number nahi hai => (start,deleteCount)
    const fruits = ['apple','banana','cherry','date','fig']
    const myFruits = fruits.toSpliced(0,4)
    console.log(myFruits);
    console.log("after splice fruits:",fruits);


  
     
   
    