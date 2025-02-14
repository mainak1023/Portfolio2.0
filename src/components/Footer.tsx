export function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-b from-[#0a0a0a] to-[#111111] text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Mainak. All rights reserved.</p>
      </div>
    </footer>
  )
}

