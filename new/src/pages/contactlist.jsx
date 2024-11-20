import { useEffect, useState } from 'react';

const Contactlist = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://localhost/first-react-app/php_db/fetch_contact.php')
        .then(response => response.json())
            .then(data => {
                // Ensure data is an array before setting state
                setContacts(Array.isArray(data) ? data : []);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {contacts.length > 0 ? (
                <ul>
                    {contacts.map((contact, index) => (
                        <li key={index}>
                            {contact.first_name}: {contact.last_name}: {contact.phone}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No contacts available.</p>
            )}
        </div>
    );
};

export default Contactlist;
