"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  onScrollToAbout: () => void;
  onScrollToBenefits: () => void;
  onScrollToTecnicos: () => void;
  onNavigate: (path: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onScrollToAbout, onScrollToBenefits, onScrollToTecnicos, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = (action: () => void) => {
    setIsOpen(false);
    action();
  };

  const menuItems = [
    { label: "O que é Biofeedback?", onClick: () => handleMenuItemClick(onScrollToAbout) },
    { label: "Benefícios", onClick: () => handleMenuItemClick(onScrollToBenefits) },
    { label: "Encontrar profissionais", onClick: () => handleMenuItemClick(onScrollToTecnicos) },
    { label: "Quero me certificar", onClick: () => handleMenuItemClick(() => onNavigate("/certificacao")) },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-card p-4">
        <nav className="flex flex-col gap-2 mt-6">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start"
              onClick={item.onClick}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;