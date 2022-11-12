export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    const { body } = req;

    // Random Calculation Rule
    const sum = body.results.reduce((prev, cur) => prev + (cur <= 1 ? 0.4 : 0.8), 0);
    
    res.status(200).send({ personality: sum > 2 ? 'extrovert' : 'introvert' });
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch questions' })
  }
}
