
import { NavLink, Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Layout() {
  const { theme, toggle } = useTheme();

  return (
    <>
      {/* Navbar - Flexbox */}
      <header className="border-b border-line bg-surface">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 p-4">

          {/* Application name */}
          <NavLink
            to="/"
            className="mr-auto text-lg font-semibold text-fg"
          >
            frontend-lab
          </NavLink>

          {/* Navigation links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-muted hover:text-fg focus-visible:outline-2 focus-visible:outline-primary ${
                isActive ? 'font-semibold text-fg' : ''
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `text-muted hover:text-fg focus-visible:outline-2 focus-visible:outline-primary ${
                isActive ? 'font-semibold text-fg' : ''
              }`
            }
          >
            Users
          </NavLink>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggle}
            className="rounded-card border border-line px-3 py-2 text-fg transition hover:bg-bg focus-visible:outline-2 focus-visible:outline-primary"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>

        </nav>
      </header>

      {/* Page content */}
      <main className="mx-auto max-w-6xl p-4 md:p-8">
        <Outlet />
      </main>
    </>
  );
}
