
import { useQuery } from '@tanstack/react-query';

import {
  fetchUsers,
  fetchUser,
} from '../api/users.js';

// Get all users
export const useUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

// Get one user by ID
export const useUser = (id) =>
  useQuery({
    queryKey: ['users', id],
    queryFn: () => fetchUser(id),
    enabled: !!id,
  });
