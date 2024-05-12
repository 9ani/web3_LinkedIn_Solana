import React, { useState } from 'react';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name, bio });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" value={name} onChange={handleNameChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Bio:</label>
          <textarea className="form-control" value={bio} onChange={handleBioChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
