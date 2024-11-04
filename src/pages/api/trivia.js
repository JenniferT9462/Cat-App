async function getTrivia() {
    const url = "https://opentdb.com/api.php?amount=3&category=27&difficulty=medium&type=multiple";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching trivia:', error);
        throw error; // Re-throw the error to handle it in the handler
    }
    
}

export default async function handler(req, res) {
    try {
        const questions = await getTrivia();

        const animalTrivia = questions.results.map((question) => {
            return {
                trivia: question.question,
                answer: question.correct_answer,
            };
        });
        res.status(200).json(animalTrivia);
    } catch (error) {
        console.error('Error in API handler:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
    

   
    
   
