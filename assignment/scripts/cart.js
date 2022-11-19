console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];

function addItem(x) {
    basket.push(x);// add 'item to basket array.
   return true; 
    }
        
       
    //need to get a true; to prove that 'item was added into the basket array. 


console.log('is it "TRUE" that item is in basket', addItem('item'));
console.log('is it "TRUE" that item is in basket', addItem('pot'));
console.log('is it "TRUE" that item is in basket', addItem('box'));


console.log(basket);// basket array is empty
 


// - Create a function called `listItems`. It should:
//  - loop over the items in the `basket` array
//  - console.log each individual item on a new line
function listItems(basket) {
    for (let i = 0; i < basket.length; i++) {
        console.log('what is in the basket array', basket[i]);
        
    }
}
console.log('show me the individual item in the array', listItems(basket));
console.log(basket);

function empty(basket){
    while (basket.length > 0) {
        basket.pop() 
        
    }
    return basket;
}// need to empty what is inside of basket. 

console.log('this is the empty part', empty(basket));// basket array should now equal [].



//stretch goals///////////////////////////////////////////////////////////////////////

// 1. Add a global `const` named `maxItems` and set it to 5.
const maxItem = 5;

function isFull(maxItem) {
    return isFull === 5;

    }
    

console.log(maxItem);



// 2. Create a function called isFull(). It should:
//  - return `false` if the basket contains *less* than max number of items
//  - return `true` otherwise (equal or more than maxItems)


// 3. Update the required `addItem` function to:
//  - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//  - If an item was added to the array, return `true`
//  - If there was no room and the item could not be added return `false`
 
// __Using Array built-in functions!__
 
// 4. Create a function called `removeItem`. It should:
//  - Take an input parameter for a string `item`
//  - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//  - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//  - Return the item removed or `null` if the item was not found
 
// ## Assignment Submission
// Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!
 
// **REMINDER:** Make sure to answer the Slack discussion question for this week!