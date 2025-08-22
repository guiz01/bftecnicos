"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Mail, Phone, ExternalLink, Heart, Users, Award } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Tecnico {
  id: string;
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  social_media: string;
  specialty: string;
}

const Index = () => {
  const [tecnicos, setTecnicos] = useState<Tecnico[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTecnicos = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('tecnicos')
        .select('*');

      if (error) {
        console.error("Error fetching tecnicos:", error);
      } else if (data) {
        setTecnicos(data);
      }
      setLoading(false);
    };

    fetchTecnicos();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/images/logo.svg" alt="Biofeedback PRO Logo" className="h-12" />
              <span className="text-xl font-bold text-foreground">Biofeedback PRO - Fredy Vinagre</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button>Encontrar Técnicos</Button>
              <Button variant="outline">Quero me certificar</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Page */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Técnicos Certificados em Biofeedback
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Encontre profissionais qualificados e certificados pelo método Fredy Vinagre de Biofeedback
            para tratamento de saúde e bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Encontrar Técnicos
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              Quero me certificar
            </Button>
          </div>
        </div>
      </section>

      {/* O que é Biofeedback */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">O que é Biofeedback?</h2>
            <p className="text-lg text-muted-foreground">
              O método Biofeedback é uma técnica avançada que utiliza feedback biológico para ajudar 
              as pessoas a controlar funções fisiológicas e melhorar sua saúde e bem-estar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Método Comprovado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Técnica desenvolvida por Fredy Vinagre com base em pesquisas científicas 
                  e resultados comprovados em pacientes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Controle Autônomo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Aprenda a controlar funções do corpo que normalmente são involuntárias, 
                  como frequência cardíaca e tensão muscular.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Bem-Estar Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Benefícios para saúde mental, redução de estresse, melhora da qualidade do 
                  sono e aumento da consciência corporal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Técnicos Certificados */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Técnicos Certificados</h2>
            <p className="text-lg text-muted-foreground">
              Profissionais qualificados e treinados pelo método Fredy Vinagre
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="bg-card border-border">
                  <div className="flex items-center p-4">
                    <div className="flex-shrink-0 mr-4">
                      <Skeleton className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center mb-3">
                        <Skeleton className="h-6 w-32 mr-3" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-3 w-full" />
                        <Skeleton className="h-3 w-full" />
                        <Skeleton className="h-3 w-full" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              tecnicos.map((tecnico) => (
                <Card key={tecnico.id} className="bg-card border-border hover:shadow-lg hover:shadow-primary/20 transition-shadow">
                  <div className="flex items-start p-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                        <Users className="text-primary" size={24} />
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="mb-3">
                        <CardTitle className="text-lg truncate">{tecnico.name}</CardTitle>
                        <CardDescription className="text-sm truncate">{tecnico.title}</CardDescription>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {tecnico.location && (
                          <div className="flex items-start">
                            <MapPin className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="truncate">{tecnico.location}</span>
                          </div>
                        )}
                        {tecnico.email && (
                          <div className="flex items-start">
                            <Mail className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="truncate">{tecnico.email}</span>
                          </div>
                        )}
                        {tecnico.phone && (
                          <div className="flex items-start">
                            <Phone className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="truncate">{tecnico.phone}</span>
                          </div>
                        )}
                        {tecnico.website && (
                          <div className="flex items-start">
                            <Globe className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="truncate">{tecnico.website}</span>
                          </div>
                        )}
                        {tecnico.social_media && (
                          <div className="flex items-start">
                            <ExternalLink className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="truncate">{tecnico.social_media}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Benefícios do Biofeedback</h2>
            <p className="text-lg text-muted-foreground">
              Descubra como o método Biofeedback pode transformar sua saúde
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Redução de Estresse</h3>
                  <p className="text-muted-foreground">Controle do sistema nervoso autônomo para reduzir níveis de cortisol.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Melhora do Sono</h3>
                  <p className="text-muted-foreground">Regulação do ritmo circadiano para um sono mais reparador.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Consciência Corporal</h3>
                  <p className="text-muted-foreground">Maior conexão mente-corpo para melhor autopercepção.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Dor Crônica</h3>
                  <p className="text-muted-foreground">Controle da percepção da dor através de técnicas específicas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Ansiedade</h3>
                  <p className="text-muted-foreground">Técnicas de respiração e controle fisiológico para ansiedade.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Pressão Arterial</h3>
                  <p className="text-muted-foreground">Controle voluntário da pressão arterial através de biofeedback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Pronto para transformar sua saúde?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Encontre um técnico certificado e comece sua jornada de bem-estar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Encontrar Técnicos
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Quero me certificar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/images/logo.svg" alt="Biofeedback PRO Logo" className="h-8" />
                <span className="text-lg font-bold">Biofeedback PRO - Fredy Vinagre</span>
              </div>
              <p className="text-muted-foreground">
                Método Biofeedback - Técnicos Certificados
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Sobre o Método</a></li>
                <li><a href="#" className="hover:text-foreground">Técnicos Certificados</a></li>
                <li><a href="#" className="hover:text-foreground">Formação</a></li>
                <li><a href="#" className="hover:text-foreground">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Artigos</a></li>
                <li><a href="#" className="hover:text-foreground">Pesquisas</a></li>
                <li><a href="#" className="hover:text-foreground">Webinars</a></li>
                <li><a href="#" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>contato@fredyvinagre.com</li>
                <li>+55 (11) 9999-0000</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <MadeWithDyad />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;