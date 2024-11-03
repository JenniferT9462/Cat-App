async function getTrivia() {
    const url = "https://opentdb.com/api.php?amount=3&category=27&difficulty=medium&type=multiple";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default async function handler(req, res) {
    const questions = await getTrivia();

    const animalTrivia = questions.results.map((question, index) => {
        const questionText = question.question;
        const answer = question.correct_answer;
        return {
            trivia: questionText,
            answer: answer
        };
    }); 
    res.status(200).json(animalTrivia);
   
}