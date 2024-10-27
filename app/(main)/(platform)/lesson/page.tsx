import { PencilLine } from "lucide-react"
import LessonCard from "./_components/lesson-card"
import { getLessons } from "@/data/lesson";
import Footer from "@/components/footer";
import GrammarLessonCard from "./_components/grammar-lesson-card";

const LessonPage = async () => {
    const lessons = await getLessons()
    return (
        <div className="min-h-screen relative flex flex-col">
            <div className="p-8">
                <div className="text-2xl font-bold">
                    英単語
                </div>
                {lessons ? (
                    <div className="p-8 flex gap-10">
                        {lessons.map((lesson) => (
                        <LessonCard
                            key={lesson.id}
                            icon={PencilLine}
                            label={lesson.title}
                            lessonId={lesson.id}
                        />
                        ))}
                    </div>
                ) : (
                    <div className="p-8">
                        英単語レッスンデータを取得できませんでした。
                    </div>
                )}
            </div>
            <div className="p-8">
                <div className="text-2xl font-bold">
                    英文法
                </div>
                <div className="p-8 flex gap-10">
                    <GrammarLessonCard
                        icon={PencilLine}
                        label={"動詞の基礎を学ぼう"}
                        grammarLessonId={12}
                    />
                </div>
            </div>
            <div className="absolute w-full bottom-0">
                <Footer />
            </div>
        </div>
    )
}
 
export default LessonPage