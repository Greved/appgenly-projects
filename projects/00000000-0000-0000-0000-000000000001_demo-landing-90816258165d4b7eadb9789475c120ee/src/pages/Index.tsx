export function Index() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">Modern Landing Page</h1>
        <p className="mt-3 text-gray-600">A clean, modern starting point with Tailwind CSS.</p>
      </header>
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Fast</h2>
          <p className="mt-2 text-gray-600">Powered by React and Vite for a speedy DX.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Responsive</h2>
          <p className="mt-2 text-gray-600">Tailwind utilities make responsive design effortless.</p>
        </div>
      </section>
      <footer className="mt-16 text-sm text-gray-500">Template by BiteSite</footer>
    </main>
  )
}

