import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
      name : "cart",
      initialState:[],
      reducers : {
         add:(state,action) => {
            state.push(action.payload);
         },
         remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
         },
      }
})

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;

/*
       In the code you provided, you're using `createSlice` from Redux Toolkit to define a slice of state called `CartSlice` that manages a shopping cart. Let's break down the `add` and `remove` reducers and how they work behind the scenes:

1. **`add` Reducer**:
   - The `add` reducer adds an item to the cart. It takes two arguments: `state` and `action`.
   - `state`: Represents the current state of the cart, which is an array of items.
   - `action`: Represents the action dispatched to trigger the reducer. It contains a `payload` property, which is the item to be added to the cart.
   - Inside the `add` reducer, you're using the `push` method to add the `action.payload` (item) to the `state` array.
   - It's important to note that `push` modifies the original array, which is allowed in Redux Toolkit because it uses Immer.js internally to handle immutable updates. Immer ensures that you can write mutable code in reducers, but it produces a new immutable state behind the scenes.

2. **`remove` Reducer**:
   - The `remove` reducer removes an item from the cart based on its `id`. It also takes `state` and `action` as arguments.
   - `state`: Represents the current state of the cart, which is an array of items.
   - `action`: Represents the action dispatched to trigger the reducer. It contains a `payload` property, which is the `id` of the item to be removed.
   - Inside the `remove` reducer, you're using the `filter` method to create a new array that excludes the item with the specified `id`. This is achieved by filtering out items where the `id` does not match `action.payload`.
   - Unlike `push`, the `filter` method does not modify the original array but creates a new array with the filtered items. This aligns with the immutable nature of Redux state updates.

Overall, these reducers demonstrate how you can use Redux Toolkit's `createSlice` to define reducers that manage complex state updates in a more concise and readable way. The use of Immer.js behind the scenes allows you to write simple mutable code in your reducers while ensuring that Redux state remains immutable.
*/