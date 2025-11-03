import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Modern Landing Page
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Build beautiful, responsive landing pages with ease. Powered by React, Tailwind, and Vite.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up mb-16" style={{animationDelay: '0.2s'}}>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-2xl shadow-xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Stay Updated</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;