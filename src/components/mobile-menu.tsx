"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  onNavigate: (path: string) => void;
}

const MobileMenu = ({ onNavigate }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Encontrar Técnicos", path: "/" },
    { label: "Quero me certificar", path: "/" },
    { label: "Quem é Fredy", path: "/fredy-vinagre" },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 right-4 left-4 bg-card border border-border rounded-lg shadow-lg z-50">
          <div className="p-4 space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  onNavigate(item.path);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;