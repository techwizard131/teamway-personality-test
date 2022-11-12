import axios from 'axios';

export async function fetchQuiz() {
  const response = await axios.get('/api/get-quiz');

  if (response.status !== 200) {
    throw new Error(response.data.error || `Error while fetching data`);
  }

  return response.data.result;
}

export async function submitResult(results) {
  const response = await axios.post('/api/result', { results });

  if (response.status !== 200) {
    throw new Error(response.data.error || `Error while getting results`);
  }

  return response.data;
}