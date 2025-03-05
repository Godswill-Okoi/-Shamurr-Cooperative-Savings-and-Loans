const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create or update user profile
router.post('/profile', async (req, res) => {
  const { userId, firstName, lastName, bio, avatarUrl } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { profile: { firstName, lastName, bio, avatarUrl } },
      { new: true, upsert: true } // Create if not exists
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error });
  }
});

module.exports = router; 