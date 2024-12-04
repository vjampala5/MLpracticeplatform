/*const express = require('express');
const router = express.Router();
const { executeUserCode } = require('../utils/executeCode');
const authMiddleware = require('../middleware/authMiddleware');
router.post('/execute', authMiddleware, async (req, res) => {
    try {
        const { code, problemId } = req.body;
        if (!code || !problemId) {
            return res.status(400).json({ msg: 'Code and Problem ID are required' });
        }

        // Call the code execution function
        const output = await executeCode(code, problemId);
        res.status(200).json({ output });
    } catch (error) {
        console.error('Error during code execution:', error);
        res.status(500).json({ msg: 'Internal Server Error', error: error.message });
    }
});
router.post('/', authMiddleware, async (req, res) => {
    const { code, customInput } = req.body;

    try {
        const output = await executeUserCode(code, customInput);
        return res.json({ output }); // Added 'return'
    } catch (error) {
        console.error('Error executing code:', error);
        return res.status(500).json({ msg: 'Error executing code', error: error.toString() }); // Added 'return'
    }
});


module.exports = router;*/
// execute.js
// execute.js
const express = require('express');
const router = express.Router();
const Problem = require('../models/Problem');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/execute', authMiddleware, async (req, res) => {
    try {
        const { code, problemId } = req.body;
        if (!code || !problemId) {
            return res.status(400).json({ msg: 'Code and Problem ID are required' });
        }

        // Fetch the problem from the database
        const problem = await Problem.findById(problemId);
        if (!problem) {
            return res.status(404).json({ msg: 'Problem not found' });
        }

        // Compare the user's code with the stored solution
        if (code.trim() === problem.solution.trim()) {
            // Return the sample output if the code matches the solution
            return res.status(200).json({ output: problem.sampleOutput });
        } else {
            // Return an error message if the code does not match
            return res.status(400).json({ msg: 'Wrong answer. Please try again.' });
        }
    } catch (error) {
        console.error('Error during code execution:', error);
        res.status(500).json({ msg: 'Internal Server Error', error: error.message });
    }
});

module.exports = router;
