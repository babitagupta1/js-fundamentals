
import { useParams, Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'Babita Gupta', email: 'babita@gmail.com' },
  { id: 2, name: 'Ram Sharma', email: 'ram@gmail.com' },
  { id: 3, name: 'Sita Thapa', email: 'sita@gmail.com' },
  { id: 4, name: 'Hari KC', email: 'hari@gmail.com' }
];

export default function UserDetail() {
  const { id } = useParams();

  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <section>
      <h1>User Details</h1>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <Link to="/users">Back to Users</Link>
    </section>
  );
}
