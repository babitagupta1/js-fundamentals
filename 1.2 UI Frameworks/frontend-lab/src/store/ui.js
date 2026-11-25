
import { create } from 'zustand';

export const useUIStore = create((set) => ({
  // Default UI state
  view: 'grid',
  search: '',

  // Update view
  setView: (view) => set({ view }),

  // Update search
  setSearch: (search) => set({ search }),
}));
