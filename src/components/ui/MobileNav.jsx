"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'work',
    path: '/work',
  },
]

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

return (
    <div className="md:hidden">
        <Button 
            size="icon" 
            className="fixed top-8 right-4 z-50 w-10 h-10 hover:text-accent bg-primary"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle navigation menu</span>
        </Button>

        {isOpen && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40">
                <nav className="fixed right-0 top-0 bottom-0 w-[240px] bg-background shadow-lg p-6 overflow-y-auto">
                    <div className="flex flex-col gap-8 mt-16">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-lg font-medium transition-colors hover:text-accent ${
                                    pathname === link.path ? 'text-accent' : 'text-muted-foreground' 
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        )}
    </div>
)
}