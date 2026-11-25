
export default function Home() {
  return (
    <section className="space-y-10">

      {/* Hero section - Flexbox */}
      <div className="flex flex-col items-center gap-6 rounded-card bg-surface p-6 md:flex-row md:p-10">

        <div className="flex-1">
          <h1 className="text-3xl font-bold md:text-5xl">
            Welcome to Frontend Lab
          </h1>

          <p className="mt-4 text-muted leading-relaxed">
            This is a React application built using React 19,
            Vite, React Router and Context API.
          </p>
        </div>

        <div className="flex-1 rounded-card border border-line bg-bg p-8 text-center">
          <h2 className="text-xl font-semibold">
            Modern Frontend Development
          </h2>
          <p className="mt-2 text-muted">
            Learn, practice and build responsive applications.
          </p>
        </div>

      </div>

      {/* Features section - Grid */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">
          What We Learn
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4">

          <div className="rounded-card border border-line bg-surface p-5">
            <h3 className="font-semibold">React Components</h3>
            <p className="mt-2 text-sm text-muted">
              Build reusable user interface components.
            </p>
          </div>

          <div className="rounded-card border border-line bg-surface p-5">
            <h3 className="font-semibold">React Hooks</h3>
            <p className="mt-2 text-sm text-muted">
              Manage state and component lifecycle.
            </p>
          </div>

          <div className="rounded-card border border-line bg-surface p-5">
            <h3 className="font-semibold">Context API</h3>
            <p className="mt-2 text-sm text-muted">
              Share data between React components.
            </p>
          </div>

          <div className="rounded-card border border-line bg-surface p-5">
            <h3 className="font-semibold">React Router</h3>
            <p className="mt-2 text-sm text-muted">
              Navigate between application pages.
            </p>
          </div>

          <div className="rounded-card border border-line bg-surface p-5">
            <h3 className="font-semibold">Protected Routes</h3>
            <p className="mt-2 text-sm text-muted">
              Protect pages using authentication.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
