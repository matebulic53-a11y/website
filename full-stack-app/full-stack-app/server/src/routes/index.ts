import { Router } from 'express';

const router = Router();

// Define your API endpoints here
router.get('/api/example', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Export the router
export default router;