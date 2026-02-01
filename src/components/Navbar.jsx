import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <img src="/logo.png" alt="ClawdCat Logo" className="w-8 h-8" />
            </div>
            <span className="ml-3 font-display text-2xl font-bold text-orange-900">
              ClawdCat
            </span>
          </div>
          <div>
            <ConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
