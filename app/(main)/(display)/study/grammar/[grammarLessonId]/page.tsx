import GrammarStudy from "./_components/grammar-study";

const GrammarLessonIdPage = ({
    params
}: {
    params: { grammarLessonId: number}
}) => {
    return (
        <div className="relative flex flex-col items-center gap-y-48">
            <GrammarStudy
                title="品詞の基礎を学ぼう"
                description="基本４品詞（名詞・動詞・形容詞・副詞）"
                lessonId={params.grammarLessonId}
            />
        </div>
    )
}
 
export default GrammarLessonIdPage;