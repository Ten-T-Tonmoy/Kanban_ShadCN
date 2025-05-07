
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="default">Login</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
              <Button className="mt-4">Login</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
