import { QUIZ_LIST } from './dummy';

export default async function handler(req, res) {
  try {
    res.status(200).send({ result: QUIZ_LIST })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch questions' })
  }
}
