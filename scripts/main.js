// 1. Define a function called "makeSandwich" that takes 4 parameters: protein, cheese, veggie, bread
// 2. makeSandwich should create a new sandwich object with the 4 parameters as its key/value pairs
// 3. makeSandwich will return our newly created sandwich
// 4. Call it a few times passing in different arguments to make different sandwiches!


const makeSandwich = (protein, cheese, veggie, bread) => {
    return {
        protein:protein,
        cheese: cheese,
        veggie: veggie,
        bread: bread,
    }
}

const sandwich = makeSandwich("turkey","cheddar","tomato","9 grain wheat")
console.log(sandwich)

const veggieSandwich = makeSandwich("Tofurkey","Swiss","peppers","sourdough")
console.log(veggieSandwich)