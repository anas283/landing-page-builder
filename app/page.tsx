import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen">
      
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-5 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center">
            Instantly Create Stunning Landing Pages—No Code Needed!
          </h1>
          <h5 className="text-xl text-gray-600 text-center">
            Build, Customize, and Launch Your Page in Minutes.
          </h5>
          <div className="w-fit mx-auto">
            <div>
              ✅ Drag & Drop Simplicity – No coding required.
            </div>
            <div>
              ✅ Beautiful Templates – Designed to convert.
            </div>
            <div>
              ✅ Instant Hosting – Get your page live with one click.
            </div>
          </div>
          <div className="flex justify-center">
            <Link href='/editor'>
              <Button>Start for Free</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-20">
        <div className="flex flex-col gap-5 max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center">
            Why Choose Us?
          </h3>
          <div>
            <div>
              🛠️ Easy to Use – Just pick a template, edit, and publish.
            </div>
            <div>
              🎨 Fully Customizable – Change text, colors, images & more.
            </div>
            <div>
              🚀 Fast & SEO-Optimized – Lightning-fast pages, built for search engines.
            </div>
            <div>
              🌎 Custom Domains – Publish on your own domain (Pro feature).
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-20">
        <div className="flex flex-col gap-5 max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center">
            Start Your Landing Page in 3 Simple Steps:
          </h3>
          <div>
            <div>
              1️⃣ Choose a Template – Select from high-converting designs.
            </div>
            <div>
              2️⃣ Customize It – Edit text, colors, and images effortlessly.
            </div>
            <div>
              3️⃣ Go Live – Publish instantly with a single click.
            </div>
          </div>
          <Link href='/editor'>
            <Button>Get Started Free</Button>
          </Link>
        </div>
      </div>

    </div>
  );
}
