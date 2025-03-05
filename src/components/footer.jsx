// components/footer.tsx
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import Link from "next/link";

export default function Footer() {
  const socials = [
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
  ];

  return (
    <footer className="relative border-t border-amber-900/20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-cormorant font-semibold mb-4">
              RetroBar
            </h3>
            <p className="text-amber-100/60">
              123 Coffee Lane, New York, NY
              <br />
              Open Daily: 7AM - 10PM
            </p>
          </div>

          <div>
            <h3 className="text-xl font-cormorant font-semibold mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {["Menu", "About", "Testimonials", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-amber-100/60 hover:text-amber-100 block"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-cormorant font-semibold mb-4">
              Connect
            </h3>
            <div className="space-y-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-amber-100/60 hover:text-amber-100 block"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-amber-900/20 mt-12 pt-8 text-center text-amber-100/60">
          <p>© 2025 RetroBar. All rights reserved.</p>
          <p className="mt-2">
            Proudly serving organic, fair-trade coffee since 2010
          </p>
        </div>
      </div>
    </footer>
  );
}
