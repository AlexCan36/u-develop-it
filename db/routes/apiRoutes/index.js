const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));

module.exports = router;

// Add near the top of the file
const apiRoutes = require('./routes/apiRoutes');

// Add after Express middleware
app.use('/api', apiRoutes);

router.use(require('./partyRoutes'));

