import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="card bg-dark text-white w-100" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                className="form-control bg-secondary text-white border-0"
                placeholder="Michael Scott"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">Bio</label>
              <textarea
                id="bio"
                className="form-control bg-secondary text-white border-0"
                placeholder="Tell us about yourself"
                rows="3"
                value={bio}
                onChange={handleBioChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Create an account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
