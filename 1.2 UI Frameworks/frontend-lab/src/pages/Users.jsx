
import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard.jsx';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const usersData = [
  { id: 1, name: 'Babita Gupta', email: 'babita@gmail.com' },
  { id: 2, name: 'Ram Sharma', email: 'ram@gmail.com' },
  { id: 3, name: 'Sita Thapa', email: 'sita@gmail.com' },
  { id: 4, name: 'Hari KC', email: 'hari@gmail.com' }
];

export default function Users() {
  const [search, setSearch] = useLocalStorage('user-search', '');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h1>Users List</h1>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Browser width: {width}px</p>

      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      ) : (
        <p>No users found.</p>
      )}
    </section>
  );
}
