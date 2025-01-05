// src/app/api/fetchQuestions.js
export const fetchQuestions = async (category) => {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching questions: ${response.statusText}`);
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching questions:", error);
      return [];
    }
  };
  