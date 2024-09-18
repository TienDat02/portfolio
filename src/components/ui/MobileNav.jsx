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
            className="fixed right-4 top-8 z-50 w-10 h-10 hover:text-accent bg-primary"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            <span className="sr-only">Toggle navigation menu</span>
        </Button>

        {isOpen && (
            <div className="fixed inset-0 z-40 backdrop-blur-sm bg-background/80">
                <nav className="fixed right-0 top-0 bottom-0 w-[300px] bg-primary shadow-lg p-6 overflow-y-auto">
                    <h1 className="mt-16 mb-8 text-4xl font-semibold text-white cursor-default">
                        <span className="text-accent">-</span>
                        Dat <span className="text-accent">.</span>
                    </h1>
                    <div className="flex flex-col gap-8">
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