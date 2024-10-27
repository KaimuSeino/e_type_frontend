"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface GrammarMeaningProps {
    mean: string
}

const GrammarMeaning = ({
    mean
}: GrammarMeaningProps) => {
    const [isDisplayMeaning, setIsDisplayMeaning] = useState(false)
    const handleDisplayMeaning = () => {
        setIsDisplayMeaning(true)
    }
    return (
        <>
            {isDisplayMeaning ? (
                <div className="mt-4">
                    {mean}
                </div>
            ) : (
                <div className="min-w-[45%]">
                    <Button
                        className="mt-4 text-slate-500 p-0"
                        variant="link"
                        onClick={handleDisplayMeaning}
                    >
                        訳を表示
                    </Button>
                </div>
            )}
        </>
    )
}
 
export default GrammarMeaning
