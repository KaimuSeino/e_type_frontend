import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"

interface GrammarTipProps {
    tipTitle:       string
    tipDescription: string
}

const GrammarTip = ({
    tipTitle,
    tipDescription,
}: GrammarTipProps) => {
    return (
        <Dialog>
            <DialogTrigger className="focus-visible:outline-none">
                <Button className="block text-slate-500 p-0" variant="link">
                    ヒントを表示
                </Button>
            </DialogTrigger>
            <DialogContent>
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