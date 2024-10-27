import GrammarStudy from "./_components/grammar-study";

const GrammarLessonIdPage = ({
    params
}: {
    params: { grammarLessonId: number}
}) => {
    return (
        <div className="relative flex flex-col items-center gap-y-20">
            <GrammarStudy
                title="動詞の基礎を学ぼう"
                description="be動詞と一般動詞の区別"
                lessonId={params.grammarLessonId}
            />
        </div>
    )
}
 
export default GrammarLessonIdPage;