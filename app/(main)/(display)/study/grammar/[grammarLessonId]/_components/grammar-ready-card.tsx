"use client"

import { Button } from "@/components/ui/button";

interface GrammarReadyCardProps {
    title: string
    description: string
    onStart: () => void
}

const GrammarReadyCard = ({
    title,
    description,
    onStart,
}: GrammarReadyCardProps) => {
    return (
        <div className="flex flex-col items-center gap-y-10">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{description}</p>
            <p>
                全{5}問
            </p>
            <div>
                <Button
                    onClick={onStart}
                    variant='outline'
                >
                    スタート
                </Button>
            </div>
        </div>
    );
}
 
export default GrammarReadyCard;