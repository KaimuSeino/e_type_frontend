import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface GrammarLessonCardProps {
    icon: LucideIcon
    label: string
    grammarLessonId: number
}

const GrammarLessonCard = ({
    label,
    icon: Icon,
    grammarLessonId
}: GrammarLessonCardProps) => {
    return (
        <Card className="max-w-60 hover:shadow-md cursor-pointer">
            <Link 
                href={`/study/grammar/${grammarLessonId}`}
                className="flex flex-col items-center"
            >
                <Icon className="m-4" />
                <CardHeader>
                    <CardTitle>{label}</CardTitle>
                </CardHeader>
            </Link>
        </Card>
    );
}
 
export default GrammarLessonCard;