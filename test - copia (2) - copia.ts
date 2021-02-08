
// JavaScript objects are collections of values wrapped up
// with named keys.

const userAccount = {
  name: "Kieron",
  id: 0,
};

// You can combine these to make larger, more complex
// data-models.

const pie = {
  type: "Apple",
};

let myName: string = "Tester";
let printName = (name: string) =>{
    console.log(name);
}

// If you use your mouse to hover over some of these words
// (try newVariable above) you can see how TypeScript is
// interpreting your JavaScript into labeled types.

// Values can be accessed via the ".", so to get a
// username for a purchase order:
console.log(newVariable.item.type);

// If you hover your mouse over each part of the code
// between the ()s, you can see TypeScript offering more
// information about each part. Try re-writing this below:

// Copy this in the next line, character by character:
//
//   newVariable.item.type

// TypeScript provides feedback to the playground
// about what JavaScript objects are available in this
// file and lets you avoid typos and see additional
// information without having to look it up in another place.

// TypeScript also offers these same features to arrays.
// Here's an array with just our purchase order above in it.

const allOrders = [newVariable];

// If you hover on allOrders, you can tell it's an array
// because the hover info ends with []. You can access the
// first order by using square brackets with an index
// (starting from zero).

const firstOrder = allOrders[0];
console.log(firstOrder.item.type);

// An alternative way to get an object is via pop-ing the
// array to remove objects. Doing this removes the object
// from the array, and returns the object. This is called
// mutating the array, because it changes the underlying
// data inside it.

const poppedFirstOrder = allOrders.pop();

// Now allOrders is empty. Mutating data can be useful for
// many things, but one way to reduce the complexity in your
// codebases is to avoid mutation. TypeScript offers a way
// to declare an array readonly instead:

// Creates a type based on the shape of a purchase order:
type newVariable = typeof newVariable;

// Creates a readonly array of purchase orders
const readonlyOrders: readonly newVariable[] = [newVariable];
