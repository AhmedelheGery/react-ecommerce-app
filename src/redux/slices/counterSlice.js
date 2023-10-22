import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter : 0,
    value: 1000
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment : (state, actionParam) => {
             console.log('actionParam', actionParam)
             state.counter  = state.counter + actionParam.payload
        },
        decrement: (state) => { state.counter -= 1}
    }
})

console.log(counterSlice)


export const {increment, decrement} =  counterSlice.actions; // to be used inside our component
export default counterSlice.reducer;
 