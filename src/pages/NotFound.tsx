"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Página Não Encontrada - Biofeedback PRO";
  }, []);

  const handleScrollToTecnicos = () => {
    navigate("/#tecnicos-section");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <Header 
        onScrollToTecnicos={handleScrollToTecnicos} 
      />

      <main className="flex-grow flex items-center justify-center px-4 py-16 text-center">
        <div>
          <Frown className="w-24 h-24 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Oops! A página que você está procurando não foi encontrada.
          </p>
          <Button size="lg" onClick={() => navigate("/")}>
            Voltar para a Página Inicial
          </Button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;