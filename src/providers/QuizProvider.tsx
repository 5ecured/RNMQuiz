import { PropsWithChildren, createContext, useState, useContext, useEffect } from "react";
import questions from "../questions";
import { Question } from "../types";

type QuizContext = {
    question?: Question,
    questionIndex: number,
    onNext: () => void,
    selectedOption?: string | undefined,
    setSelectedOption: (newOption: string) => void,
    score: number,
    totalQuestions: number,
    bestScore: number
}

const QuizContext = createContext<QuizContext>({
    questionIndex: 0,
    onNext: () => { },
    setSelectedOption: () => { },
    score: 0,
    totalQuestions: 0,
    bestScore: 0
})

export default function QuizProvider({ children }: PropsWithChildren) {
    const [questionIndex, setQuestionIndex] = useState<number>(0)
    const question = questions[questionIndex]
    const [selectedOption, setSelectedOption] = useState<string | undefined>()
    const [score, setScore] = useState<number>(0)
    const [bestScore, setBestScore] = useState<number>(0)
    const isFinished = questionIndex >= questions.length

    useEffect(() => {
        if (isFinished && score > bestScore) setBestScore(score)
    }, [isFinished])

    const restart = () => {
        setQuestionIndex(0)
        setSelectedOption('')
        setScore(0)
    }

    const onNext = () => {
        if (isFinished) {
            restart()
            return
        }

        if (selectedOption === question?.correctAnswer) {
            setScore(curVal => curVal + 1)
        }

        setQuestionIndex(curVal => curVal + 1)
    }

    return (
        <QuizContext.Provider value={{
            question,
            questionIndex,
            onNext,
            selectedOption,
            setSelectedOption,
            score,
            totalQuestions: questions.length,
            bestScore
        }}>
            {children}
        </QuizContext.Provider>
    )
}

export const useQuizContext = () => useContext(QuizContext)