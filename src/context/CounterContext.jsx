import React, { createContext } from "react";

export const CounterContext = createContext({
    count: 0,
    increaseCount: () => {}
})