import React from 'react';
import ProfileForm from '../components/ProfileForm';

const UserProfile = ({ userId }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <ProfileForm userId={userId} />
    </div>
  );
};

export default UserProfile; 