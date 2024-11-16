type GrammarLesson = {
    id: number
    title: string
    description: string
}

type GrammarQuestion = {
    id: number
    grammar_lesson_id: number
    question: string
    choices: string
    correct_answer:  string
    translation: string
    tip_title: string
    tip_description: string
}