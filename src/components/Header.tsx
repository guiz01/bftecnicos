"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/mobile-menu";

interface HeaderProps {
  onScrollToAbout: () => void;
  onScrollToBenefits: () => void;
  onScrollToTecnicos: () => void;
  onNavigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollToAbout, onScrollToBenefits, onScrollToTecnicos, onNavigate }) => {
  const navigate = useNavigate();

  const handleMobileNavigate = (path: string) => {
    onNavigate(path);
  };

  const handleScrollToAbout = () => {
    onScrollToAbout();
  };

  const handleScrollToBenefits = () => {
    onScrollToBenefits();
  };

  const handleScrollToTecnicos = () => {
    onScrollToTecnicos();
  };

  const menuItems = [
    { label: "O que é Biofeedback?", onClick: handleScrollToAbout },
    { label: "Benefícios", onClick: handleScrollToBenefits },
    { label: "Encontrar profissionais", onClick: handleScrollToTecnicos },
    { label: "Quero me certificar", onClick: () => navigate("/certificacao") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            Biofeedback PRO
          </a>
        </div>
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              onClick={item.onClick}
              className="text-base font-medium text-foreground hover:text-primary"
            >
              {item.label}
            </Button>
          ))}
        </nav>
        <div className="lg:hidden flex items-center">
          <MobileMenu 
            onScrollToAbout={handleScrollToAbout}
            onScrollToBenefits={handleScrollToBenefits}
            onScrollToTecnicos={handleScrollToTecnicos} 
            onNavigate={handleMobileNavigate} 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;