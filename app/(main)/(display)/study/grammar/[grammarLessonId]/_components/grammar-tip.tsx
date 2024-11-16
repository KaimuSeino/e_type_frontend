"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useRef } from "react"

interface GrammarTipProps {
    tipTitle:       string
    tipDescription: string
    open: boolean
    onOpenChange: (open: boolean) => void
}

const GrammarTip = ({
    tipTitle,
    tipDescription,
    open,
    onOpenChange,
}: GrammarTipProps) => {
    const triggerRef = useRef<HTMLButtonElement>(null)

    // const handleOpenChange = (isOpen: boolean) => {
    //     onOpenChange(isOpen)
    //     if (!isOpen && triggerRef.current) {
    //         triggerRef.current.blur()
    //     }
    // }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger className="focus-visible:outline-none">
                <Button
                    className="block text-slate-500 p-0"
                    variant="link"
                >
                    ヒントを表示
                </Button>
            </DialogTrigger>
            <DialogContent onCloseAutoFocus={(event) => {
                event.preventDefault()
            }}>
                <DialogHeader className="m-4">
                    <DialogTitle className="text-center">{tipTitle}</DialogTitle>
                </DialogHeader>
                <DialogDescription className="my-4">
                    {tipDescription}
                </DialogDescription>
                <DialogFooter className="flex justify-center">
                    <DialogClose asChild className="w-full flex justify-center">
                        <Button variant="outline">問題に戻る</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default GrammarTip