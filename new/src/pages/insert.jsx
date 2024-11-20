import React, { useState } from 'react';

function Insertcontact() {
  const [formData, setFormData] = useState({
 
    phone: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://localhost/first-react-app/php_db/insert_new.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage(result.message);
        setFormData({
          
          phone: '',
          first_name: '',
          last_name: '',
          email: '',
          address: '',
        }); // Reset form
      } else {
        setResponseMessage(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Failed to add contact. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        
      <div>
  <input
    type="text"
    id="phone"
    name="phone"
    placeholder="Phone"
    value={formData.phone}
    onChange={handleChange}
    required
  />
</div>
<div>
  <input
    type="text"
    id="first_name"
    name="first_name"
    placeholder="First Name"
    value={formData.first_name}
    onChange={handleChange}
    required
  />
</div>
<div>
  <input
    type="text"
    id="last_name"
    name="last_name"
    placeholder="Last Name"
    value={formData.last_name}
    onChange={handleChange}
    required
  />
</div>
<div>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    required
  />
</div>
<div>
  <input
    id="address"
    name="address"
    placeholder="Address"
    value={formData.address}
    onChange={handleChange}
    required
  />
</div>

        <button type="submit">Add Contact</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default Insertcontact;
