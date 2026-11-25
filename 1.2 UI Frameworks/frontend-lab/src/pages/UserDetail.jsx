
import { useParams, Link } from 'react-router-dom';
import { useUser } from '../hooks/useUsers.js';

export default function UserDetail() {
  // URL bata user ID linchha
  const { id } = useParams();

  // API bata specific user fetch garchha
  const {
    data: user,
    isPending,
    isError,
    error,
    refetch,
  } = useUser(id);

  // Loading state
  if (isPending) {
    return <p role="status">Loading user details...</p>;
  }

  // Error state
  if (isError) {
    return (
      <section>
        <p role="alert">
          Failed to load user: {error.message}
        </p>

        <button type="button" onClick={() => refetch()}>
          Retry
        </button>
      </section>
    );
  }

  // User not found
  if (!user) {
    return (
      <section>
        <h2>User not found</h2>
        <Link to="/users">Back to Users</Link>
      </section>
    );
  }

  // Success state
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">User Details</h1>

      <h2 className="text-xl">{user.name}</h2>

      <p>Email: {user.email}</p>

      <Link to="/users" className="text-primary underline">
        Back to Users
      </Link>
    </section>
  );
}
