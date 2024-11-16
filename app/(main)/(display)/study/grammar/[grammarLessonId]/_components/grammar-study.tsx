"use client"

import { useState } from "react"
import GrammarProgress from "./grammar-progress"
import GrammarReadyCard from "./grammar-ready-card"
import GrammarPlay from "./grammar-play"

interface GrammarStudyProps {
    title: string
    description: string
    questions: GrammarQuestion[]
}

const GrammarStudy = ({
    title,
    description,
    questions
}: GrammarStudyProps) => {
    const [isActive, setIsActive] = useState(0)

    const handleStart = () => {
        setIsActive(1)
    }
    return (
        <>
            <GrammarProgress
                numberOfQuestions={5}
            />
            {isActive === 0 && (
                <GrammarReadyCard
                    title={title}
                    description={description}
                    onStart={handleStart}
                />
            )}
            {isActive === 1 && (
                <GrammarPlay />
            )}
        </>
    );
}
 
export default GrammarStudy;