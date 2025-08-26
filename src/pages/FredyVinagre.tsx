"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, Users, Award, Lightbulb, MessageSquare } from "lucide-react";

const FredyVinagre = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Fredy Vinagre - Biofeedback PRO";
  }, []);

  const handleScrollToAbout = () => {
    navigate("/#about-section");
  };

  const handleScrollToBenefits = () => {
    navigate("/#benefits-section");
  };

  const handleScrollToTecnicos = () => {
    navigate("/#tecnicos-section");
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header 
        onScrollToAbout={handleScrollToAbout}
        onScrollToBenefits={handleScrollToBenefits}
        onScrollToTecnicos={handleScrollToTecnicos} 
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-4 bg-cover bg-center" style={{ backgroundImage: "url('/images/fredy-vinagre-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Fredy Vinagre</h1>
          <p className="text-xl md:text-2xl">Pioneiro e Referência em Biofeedback em Língua Portuguesa</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Quem é Fredy Vinagre?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fredy Vinagre é uma figura central no desenvolvimento e disseminação do Biofeedback em países de língua portuguesa. Com uma carreira dedicada à pesquisa, ensino e aplicação prática, ele se estabeleceu como um dos maiores especialistas na área.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Sua metodologia de ensino e treinamento tem formado gerações de profissionais qualificados, garantindo a excelência na prática do Biofeedback.
            </p>
            <Button size="lg" onClick={() => window.open("https://www.fredyvinagre.com", "_blank")}>Visitar Site Oficial</Button>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/fredy-vinagre-profile.jpg" 
              alt="Fredy Vinagre" 
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contributions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Principais Contribuições</h2>
            <p className="text-lg text-muted-foreground">
              O impacto de Fredy Vinagre na comunidade de Biofeedback
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <CardTitle>Formação de Profissionais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Desenvolveu programas de treinamento que capacitaram centenas de técnicos em Biofeedback.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-primary" size={24} />
                </div>
                <CardTitle>Certificação e Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Estabeleceu padrões de certificação que garantem a qualidade e a ética na prática.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <CardTitle>Inovação e Pesquisa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Contribuiu com pesquisas e inovações que avançaram o campo do Biofeedback.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <MessageSquare className="w-16 h-16 mx-auto mb-6" />
          <p className="text-2xl font-semibold mb-8">
            "A metodologia de Fredy Vinagre transformou a minha prática e a forma como vejo o Biofeedback. Sua paixão e conhecimento são inspiradores."
          </p>
          <p className="text-lg font-medium">- Um Técnico Certificado</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Junte-se à Comunidade de Excelência
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Seja parte da rede de profissionais treinados e certificados pela metodologia Fredy Vinagre.
          </p>
          <Button size="lg" onClick={() => navigate("/certificacao")}>
            Quero me certificar
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FredyVinagre;