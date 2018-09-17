describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([5,4,3,2,1]) ).toEqual([1,2,3,4,5]);
    });
 
    it('handles an empty array', function(){
        bubbleSort([5,4,3,2,1])
        expect(swapCount).toEqual(10);
      });
 
     beforeAll(function () {
         spyOn(swap).and.callThrough();  replace existing `tootsiepop['lick']` method
       });
       it('Swaps elements 10 times', function () {
         bubbleSort([5,4,3,2,1]);
         expect(swap.calls.count()).toEqual(10);
       });
 
  });