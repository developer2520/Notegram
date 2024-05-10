import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        
    }
})

const counter = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + 1

        case "DECRAMENT": 
            return state - 1
    }
}