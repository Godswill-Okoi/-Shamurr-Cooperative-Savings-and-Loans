import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        console.log('Fetched users:', response.data);
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUser(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>User Applications</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.status || 'Pending'}</td>
              <td>
                <button onClick={() => handleViewDetails(user)}>View</button>
                <button onClick={() => handleApprove(user._id)}>Approve</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Viewing User Details */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>User Details</h2>
        {selectedUser && (
          <div>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Status:</strong> {selectedUser.status || 'Pending'}</p>
            {/* Add more fields as necessary */}
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

const handleApprove = async (userId) => {
  try {
    await axios.put(`/api/users/${userId}/approve`); // Assuming you have an endpoint for approving
    setUsers(users.map(user => user._id === userId ? { ...user, status: 'Approved' } : user));
  } catch (error) {
    console.error('Error approving user:', error);
  }
};

const handleDelete = async (userId) => {
  try {
    await axios.delete(`/api/users/${userId}`); // Assuming you have an endpoint for deleting
    setUsers(users.filter(user => user._id !== userId));
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

export default AdminDashboard; 