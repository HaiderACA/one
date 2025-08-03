import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero min-h-[75vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Elegant Landing Page</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link href="/api/auth/signin" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mt-2">The best features to help you succeed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Modern Design</h2>
              <p>Aesthetically pleasing and user-friendly interface.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Easy to Use</h2>
              <p>Intuitive and simple, no learning curve required.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Highly Performant</h2>
              <p>Blazing fast and optimized for all devices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="hero bg-base-200 py-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Ready to Dive In?</h1>
            <p className="py-6">Join us today and start your journey towards success. Its free to get started!</p>
            
          </div>
        </div>
      </div>
    </>
  );
}