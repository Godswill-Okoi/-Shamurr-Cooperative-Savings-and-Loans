import React, { useState } from 'react';
import axios from 'axios';

const ProfileForm = ({ userId }) => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    avatarUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/profile', { userId, ...profile });
      console.log('Profile updated:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={profile.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={profile.lastName}
        onChange={handleChange}
      />
      <textarea
        name="bio"
        placeholder="Bio"
        value={profile.bio}
        onChange={handleChange}
      />
      <input
        type="text"
        name="avatarUrl"
        placeholder="Avatar URL"
        value={profile.avatarUrl}
        onChange={handleChange}
      />
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm; 