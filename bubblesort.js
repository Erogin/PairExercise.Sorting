function bubbleSort () {

let newArray = inArray;
   let swapWhile = true;
   let swapCount = 0;
   while(swapWhile)
   {
       swapCount = false;
       for(let i = 0; i + 1 < inArray.length; i++)
       {
           if(newArray[i] >= newArray[i + 1])
           {
               swap(newArray, i);
               swapWhile = true;
               swapCount++;
           }
       }
   }

   return newArray;
}

 const swap = (inArray1, i) => {
   let tempVal = inArray1[i];
   inArray1[i] = inArray1[i + 1]
   inArray1[i + 1] = tempVal;
}