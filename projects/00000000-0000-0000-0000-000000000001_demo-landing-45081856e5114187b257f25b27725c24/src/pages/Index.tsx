import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { Sparkles, Rocket, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50/50 to-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-purple-300/30 blur-2xl" />
      </div>

      <header className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-lg">
            <Sparkles size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">AppGenly</span>
          <Badge className="ml-2">New</Badge>
        </div>
        <div className="hidden gap-2 sm:flex">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">Docs</Button>
              </TooltipTrigger>
              <TooltipContent>Read the full documentation</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button variant="outline">Sign in</Button>
          <Button onClick={() => toast.success('Welcome aboard!')}>Get Started</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-24 pt-12">
        <section className="mx-auto max-w-4xl text-center">
          <Badge variant="success" className="mb-4 inline-flex items-center gap-1">
            <Rocket size={14} /> Launch faster than ever
          </Badge>
          <h1 className="animate-fade-in-up text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
            Build Stunning Landing Pages
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">in Minutes</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Beautiful, accessible components powered by Tailwind CSS and shadcn/ui patterns. Ship polished experiences with minimal effort.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" onClick={() => toast("Getting started...")}>Start Free</Button>
            <Button size="lg" variant="outline">Live Demo</Button>
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {[{
            icon: <Zap className="text-blue-600" size={20} />, title: 'Blazing Fast', desc: 'Vite-powered dev and production builds.'
          }, {
            icon: <ShieldCheck className="text-purple-600" size={20} />, title: 'Accessible', desc: 'Thoughtful defaults and ARIA-friendly components.'
          }, {
            icon: <CheckCircle2 className="text-emerald-600" size={20} />, title: 'Composable', desc: 'Headless primitives with great DX.'
          }].map((f, i) => (
            <Card key={i} className="animate-fade-in-up" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                  {f.icon}
                </div>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-2 w-full rounded-full bg-gradient-to-r from-blue-100 to-purple-100" />
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mx-auto mt-20 max-w-xl">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-center">Stay Updated</CardTitle>
              <CardDescription className="text-center">Join our newsletter for tips and updates.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
                <Button type="submit" className="shrink-0 sm:w-40">Subscribe</Button>
              </form>
              <p className="mt-2 text-center text-xs text-gray-500">No spam. Unsubscribe any time.</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t bg-white/60 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} AppGenly. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-gray-900" href="#">Privacy</a>
            <a className="hover:text-gray-900" href="#">Terms</a>
            <a className="hover:text-gray-900" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
