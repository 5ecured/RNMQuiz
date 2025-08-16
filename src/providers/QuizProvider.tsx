import { PropsWithChildren, createContext, useState, useContext } from "react";
import questions from "../questions";
import { Question } from "../types";

type QuizContext = {
    question?: Question,
    questionIndex: number,
    onNext: () => void
}

const QuizContext = createContext<QuizContext>({
    questionIndex: 0,
    onNext: () => { }
})

export default function QuizProvider({ children }: PropsWithChildren) {
    const [questionIndex, setQuestionIndex] = useState<number>(0)
    const question = questions[questionIndex]


    const onNext = () => {
        setQuestionIndex(curVal => curVal + 1)
    }

    return (
        <QuizContext.Provider value={{ question, questionIndex, onNext }}>
            {children}
        </QuizContext.Provider>
    )
}

export const useQuizContext = () => useContext(QuizContext)