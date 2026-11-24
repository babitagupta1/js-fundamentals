
import { useAuth } from '../context/AuthContext.jsx';

export default function Profile() {
  const { user } = useAuth();

  return (
    <section>
      <h1>My Profile</h1>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>You are successfully logged in.</p>
    </section>
  );
}
