import GrammarStudy from "./_components/grammar-study";

const GrammarLessonIdPage = ({
    params
}: {
    params: { grammarLessonId: number}
}) => {
    const seedLessonData: GrammarLesson = {
        id: params.grammarLessonId,
        title: "動詞の基礎を学ぼう",
        description: "be動詞と一般動詞の区別",
    }
    const seedQuestionData: GrammarQuestion[] = [
        {
            id: 1,
            grammar_lesson_id: params.grammarLessonId,
            question: "I [] very hungry now. I want something to eat.",
            choices: "am is are was were",
            correct_answer: "am",
            translation: "私は今、とてもお腹が空いています。何か食べたいです。",
            tip_title: "主語と時制を確認しよう！",
            tip_description: "空欄の前には主語のIがあるため、選択肢として当てはまるのはamかwasになる。そして一つ目の文の最後にのnowで「今」の話だとわかる",
        },
        {
            id: 2,
            grammar_lesson_id: params.grammarLessonId,
            question: "They [] playing soccer yesterday.",
            choices: "is are was were",
            correct_answer: "were",
            translation: "彼らは昨日サッカーをしていました。",
            tip_title: "They（三人以上）と過去を確認しよう!",
            tip_description: "主語がTheyで過去形なので、正解はwereです。",
        }
    ]
    return (
        <div className="relative flex flex-col items-center gap-y-20">
            <GrammarStudy
                title={seedLessonData.title}
                description={seedLessonData.description}
                questions={seedQuestionData}
            />
        </div>
    )
}
 
export default GrammarLessonIdPage;