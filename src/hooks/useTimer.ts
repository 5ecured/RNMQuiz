import { useRef, useState } from "react"

export const useTimer = (maxTime: number) => {
    const [time, setTime] = useState(maxTime)

    /**
     * useRef is quite similar to useState, but for whenever we dont need the UI to update 
     * whenever there is a rerender, like useState. good for performance. 
     * 
     * Its like a "middle ground" between a variable and a useState.
     * 
     * useRef will keep track of a value between rerenders, but changing that value will not
     * rerender
     * 
     * in this interval case, when we change the interval, we dont want the UI to update
     * 
     */

    const interval = useRef<NodeJS.Timeout>()

    const startTimer = () => {
        setTime(maxTime)

        interval.current = setInterval(() => {
            setTime(t => t - 1)
        }, 1000)
    }

    const clearTimer = () => {
        clearInterval(interval.current)
    }

    return {
        time,
        startTimer,
        clearTimer
    }
}