
import { useState, useEffect } from 'react';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import UserCard from '../components/UserCard.jsx';
import { useUIStore } from '../store/ui.js';
import { useUsers } from '../hooks/useUsers.js';
import { createUser } from '../api/users.js';

export default function Users() {
  // Zustand UI state
  const view = useUIStore((state) => state.view);
  const setView = useUIStore((state) => state.setView);
  const search = useUIStore((state) => state.search);
  const setSearch = useUIStore((state) => state.setSearch);

  const [width, setWidth] = useState(window.innerWidth);

  // Create user form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Access TanStack Query cache
  const queryClient = useQueryClient();

  // Fetch users
  const {
    data: users,
    isPending,
    isError,
    error,
    refetch,
    isFetching,
  } = useUsers();

  // Create user mutation
  const createUserMutation = useMutation({
    mutationFn: createUser,

    onSuccess: (newUser) => {
      queryClient.setQueryData(['users'], (oldUsers) => [
        ...(oldUsers ?? []),
        newUser,
      ]);

      setName('');
      setEmail('');
    },
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    createUserMutation.mutate({
      name,
      email,
    });
  };

  // Track browser width
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Filter users
  const filteredUsers = (users ?? []).filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Loading state
  if (isPending) {
    return <p role="status">Loading users...</p>;
  }

  // Fetch error state
  if (isError) {
    return (
      <section>
        <p role="alert" className="text-red-500">
          Failed to load users: {error.message}
        </p>

        <button
          type="button"
          onClick={() => refetch()}
          className="mt-3 rounded-card bg-primary px-4 py-2 text-primary-contrast"
        >
          Retry
        </button>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Users List</h1>

      {/* Create User Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-3 rounded-card border border-line p-4"
      >
        <h2 className="text-xl font-semibold">Create New User</h2>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-card border border-line bg-surface p-3 text-fg"
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-card border border-line bg-surface p-3 text-fg"
        />

        <button
          type="submit"
          disabled={createUserMutation.isPending}
          className="rounded-card bg-primary px-4 py-2 text-primary-contrast disabled:opacity-50"
        >
          {createUserMutation.isPending ? 'Creating...' : 'Create User'}
        </button>

        {createUserMutation.isError && (
          <p role="alert" className="text-red-500">
            Failed to create user: {createUserMutation.error.message}
          </p>
        )}

        {createUserMutation.isSuccess && (
          <p className="text-green-600">
            User created successfully!
          </p>
        )}
      </form>

      {/* Search using Zustand */}
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-card border border-line bg-surface p-3 text-fg"
      />

      {/* Browser width */}
      <p className="text-sm text-muted">
        Browser width: {width}px
      </p>

      {isFetching && (
        <p className="text-sm text-muted">Refreshing...</p>
      )}

      {/* Grid and List buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setView('grid')}
          className="rounded-card border border-line px-4 py-2"
        >
          Grid View
        </button>

        <button
          type="button"
          onClick={() => setView('list')}
          className="rounded-card border border-line px-4 py-2"
        >
          List View
        </button>
      </div>
      <p>Current View: {view}</p>

      {/* Users List */}
      {filteredUsers.length > 0 ? (
        <ul
          className={
            view === 'grid'
              ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
              : 'flex flex-col gap-4'
          }
        >
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">No users found.</p>
      )}
    </section>
  );
}
