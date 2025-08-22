"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  onNavigate: (path: string) => void;
  onScrollToTecnicos: () => void;
}

const MobileMenu = ({ onNavigate, onScrollToTecnicos }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Encontrar Técnicos", action: onScrollToTecnicos },
    { label: "Quero me certificar", action: () => onNavigate('/') },
    { label: "Quem é Fredy Vinagre", action: () => onNavigate('/fredy-vinagre') },
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
                  item.action();
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