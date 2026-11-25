
const BASE =
  import.meta.env.VITE_API_URL ??
  'https://jsonplaceholder.typicode.com';

// Common function for sending API requests
async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  return res.json();
}

// Get all users
export const fetchUsers = () => request('/users');

// Get one user by ID
export const fetchUser = (id) => request(`/users/${id}`);

// Create a new user
export const createUser = (body) =>
  request('/users', {
    method: 'POST',
    body: JSON.stringify(body),
  });
