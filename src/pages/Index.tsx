import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Current location:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Biofeedback PRO - Fredy Vinagre</h1>
        <p className="text-xl text-center text-muted-foreground">
          Método Biofeedback - Técnicos Certificados
        </p>
      </div>
    </div>
  );
};

export default Index;