import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-page max-w-xl text-center">
        <p className="label text-volt-dark">Error 404</p>
        <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-steel-600">The page you are looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/contact" className="btn-outline-dark">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
