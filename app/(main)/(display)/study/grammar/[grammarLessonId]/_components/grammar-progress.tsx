"use client"

import { Progress } from "@/components/ui/progress";

interface GrammarProgressProps {
    numberOfQuestions: number
}

const GrammarProgress = ({
    numberOfQuestions
}: GrammarProgressProps) => {
    return (
        <Progress value={0} className="w-[60%] m-4" />
    );
}
 
export default GrammarProgress;