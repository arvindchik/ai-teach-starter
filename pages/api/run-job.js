// Minimal API stub for running jobs. Replace with a job queue (BullMQ / Redis / Celery) and worker infra.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    // In production: validate input, create a job in a queue, return job id
    // For this skeleton we echo back
    return res.status(200).json({ status: 'ok', received: body });
  } catch (e) {
    return res.status(400).json({ error: 'Invalid payload', message: e.message });
  }
}
