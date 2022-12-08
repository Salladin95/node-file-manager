const checkArrLength = (arr, length) => {
   if (arr.length < length) {
       throw new Error(`Array shorter than: ${length}`);
   }
   return true;
};
export default checkArrLength;
