import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <section className="min-h-[70vh] pt-40 pb-24 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-primary tracking-[0.3em] uppercase text-sm">404</span>
        <h1 className="text-6xl mt-4">Page Not Found</h1>
        <p className="text-secondary mt-6">
          The page you requested does not exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-flex mt-10 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-accent transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
