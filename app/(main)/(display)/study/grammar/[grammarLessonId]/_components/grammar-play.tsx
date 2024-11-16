"use client"

import { useEffect, useState } from "react"
import GrammarTip from "./grammar-tip"
import GrammarMeaning from "./grammar-meaning"
import { cn } from "@/lib/utils"

const GrammarPlay = () => {
    const [inputValue, setInputValue] = useState("")
    const [isKeyDisabled, setIsKeyDisabled] = useState(false)
    const [correct, setCorrect] = useState<boolean | null>()
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    })

    /** 問題の英文 */
    const sentence = 'I [] very hungry now. I want something to eat.'
    /** 問題の日本語訳 */
    const mean = '私は今、常に空腹です。私は何か食べるものが欲しい。'
    /** 問題文 */
    const problemStatement = '空欄に最も適する語を入力してください'
    /** 問題の選択肢 */
    const choices = 'am is are was were'
    /** 正解の選択肢 */
    const correctAns = 'am'
    /** ヒントのタイトル */
    const tipTitle = '主語と時制を確認しよう！'
    /** ヒントの詳細説明 */
    const tipDescription = '空欄の前には主語のIがあるため、選択肢として当てはまるのはamかwasになる。そして一つ目の文の最後にのnowで「今」の話だとわかる!'

    const wordsArray = sentence.split(/\s+/)
    const choicesArray = choices.split(/\s+/)

    const handleKeyPress = (e: KeyboardEvent) => {
        if (isKeyDisabled || isDialogOpen) return
        setCorrect(null)
        const keyValue = e.key.valueOf()
        if (keyValue == 'Backspace') {
            setInputValue(prev => prev.slice(0, -1))
        }
        if (keyValue == 'Enter') {
            setIsKeyDisabled(true)

            if (inputValue !== correctAns) {
                /** 不正解時の処理 */
                setCorrect(false)
                setIsKeyDisabled(false)
            } else {
                /** 正解時の処理 */
                setCorrect(true)
            }
        }
        if (e.key.length > 1) return

        setInputValue(prev => prev + e.key)
    }
    return (
        <div className="relative flex flex-col items-center w-full">
            {/* 問題文を表示 */}
            <div className="min-w-[45%] flex flex-col gap-y-4 my-4">
                <div>
                    <p className="mb-2">
                        問{}:<span className="ml-2">{problemStatement}</span>
                    </p>
                    <p>
                        選択肢：{choicesArray.map((choice) => (<span className="mx-1">{choice}</span>))}
                    </p>
                </div>
                <div>
                    <GrammarTip 
                        tipTitle={tipTitle}
                        tipDescription={tipDescription}
                        open={isDialogOpen}
                        onOpenChange={setIsDialogOpen}
                    />
                </div>
            </div>
            <p className="text-3xl font-bold">
                {wordsArray.map((word) => {
                    if (word !== '[]') {
                        return (
                            <>
                                <div className={cn(
                                    "mx-1 inline-block"
                                )}>
                                    {word}
                                </div>
                            </>
                        )
                    }
                    
                    return (
                        <>
                            <span className="mx-1">{"("}</span>
                            <span className={cn(
                                correct === true ? "text-green-500"
                                        : correct === false ? "text-red-500"
                                        : "text-black"
                            )}>
                                {inputValue}
                            </span>
                            {!correct && (
                                <span className="animate-blink inline-block w-[1px] h-[1em] bg-black align-bottom"></span>
                            )}
                            <span className="mx-1">{")"}</span>
                        </>
                    )
                })}
            </p>
            <GrammarMeaning
                mean={mean}
            />
        </div>
    )
}
 
export default GrammarPlay
