  
     const name = "random name"
     const name2 = 'random name'
     const name3= `random name`

    //  strings => methods/properties


        // length => number of characters
       let randomString = 'we are doing javascript'
           randomString = 'value changed'
       randomString[0] = 'a'
       console.log(randomString.length);

       console.log(randomString[0]);

    //    charAt(index)
       console.log(randomString.charAt(7));

   // concat
   let firstName = 'raghav'
   let lastName = 'bhardwaj'
  //    console.log(firstName + lastName);
  // console.log(firstName.concat(" ",lastName));
//   template literals => backtics
   console.log(`${firstName} ${lastName}`);
    
  
    console.log(firstName.at(5));

    // slice,subString,subStr
    console.log(randomString.slice(0,6));
    console.log(randomString.substring(0,6).toLocaleUpperCase());
    console.log(randomString.substr(0,5));
     
    console.log(randomString.toUpperCase());
    
   
    let string = 'raghav bhardwaj'   
    
    let username = '             raghav                              '
    console.log(username.trim().length);
    
   
    
     

      let paragraph = "javascript is very compatible with the browsers hence javascript is a good programming language"  


       console.log(paragraph.replace("javascript","python"));
    //    console.log(paragraph.replace("very","not"));
     console.log(paragraph.replaceAll("javascript","python"));
     

        let names = 'raghav,rahul,rohit,rohan'
        //  names => backend
          console.log(names.split(","));

         //  includes,startsWith,endsWith
         
         const email = 'raghav123.com'
         console.log(email.includes('@'));
         
          console.log(email.startsWith('raghav'));
          console.log(email.endsWith('.com'));
                    


      