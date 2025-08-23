"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Globe, Mail, Phone, ExternalLink, Heart, Users, Award, Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import MobileMenu from "@/components/mobile-menu";
import Pagination from "@/components/pagination";

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
  const [filteredTecnicos, setFilteredTecnicos] = useState<Tecnico[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const tecnicosPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Biofeedback PRO - Técnicos Certificados | Fredy Vinagre";
  }, []);

  const scrollToTecnicos = () => {
    const element = document.getElementById('tecnicos-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        setFilteredTecnicos(data);
        setTotalPages(Math.ceil(data.length / tecnicosPerPage));
      }
      setLoading(false);
    };

    fetchTecnicos();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredTecnicos(tecnicos);
      setTotalPages(Math.ceil(tecnicos.length / tecnicosPerPage));
      setCurrentPage(1);
    } else {
      const filtered = tecnicos.filter(tecnico => 
        tecnico.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tecnico.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tecnico.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tecnico.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tecnico.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tecnico.phone.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTecnicos(filtered);
      setTotalPages(Math.ceil(filtered.length / tecnicosPerPage));
      setCurrentPage(1);
    }
  }, [searchTerm, tecnicos]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastTecnico = currentPage * tecnicosPerPage;
  const indexOfFirstTecnico = indexOfLastTecnico - tecnicosPerPage;
  const currentTecnicos = filteredTecnicos.slice(indexOfFirstTecnico, indexOfLastTecnico);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <img src="/images/logo.svg" alt="Biofeedback PRO Logo" className="h-12" />
                <span className="text-xl font-bold text-foreground">Biofeedback PRO - Fredy Vinagre</span>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button onClick={scrollToTecnicos}>Encontrar Técnicos</Button>
              <Button variant="outline">Quero me certificar</Button>
              <Button variant="outline" onClick={() => navigate('/fredy-vinagre')}>
                Quem é Fredy Vinagre
              </Button>
            </div>
            <MobileMenu onNavigate={navigate} onScrollToTecnicos={scrollToTecnicos} />
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
            Encontre profissionais qualificados e certificados pelo método Biofeedback PRO de Fredy Vinagre para tratamento de saúde e bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToTecnicos}>
              Encontrar Técnicos
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-primary" style={{ backgroundColor: 'hsl(0deg 0% 12.16%)' }}>
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
                <CardTitle>Controle Autónomo</CardTitle>
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
                  Benefícios para saúde mental, redução de stresse, melhora da qualidade do 
                  sono e aumento da consciência corporal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Técnicos Certificados */}
      <section id="tecnicos-section" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Técnicos Certificados</h2>
            <p className="text-lg text-muted-foreground">
              Profissionais qualificados e treinados pelo método Fredy Vinagre
            </p>
          </div>

          {/* Barra de Busca */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por nome, especialidade, localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg"
              />
            </div>
            {searchTerm && (
              <p className="text-center text-muted-foreground mt-4">
                Encontrados {filteredTecnicos.length} técnico(s) para "{searchTerm}"
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
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
            ) : currentTecnicos.length > 0 ? (
              currentTecnicos.map((tecnico) => (
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
            ) : (
              <div className="col-span-3 text-center py-12">
                <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Nenhum técnico encontrado</h3>
                <p className="text-muted-foreground">
                  {searchTerm 
                    ? `Nenhum técnico encontrado para "${searchTerm}". Tente buscar por outros termos.`
                    : "Ainda não há técnicos cadastrados no sistema."
                  }
                </p>
              </div>
            )}
          </div>

          {/* Paginação */}
          {!loading && filteredTecnicos.length > tecnicosPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
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
                  <h3 className="text-lg font-semibold text-foreground">Redução de Stresse</h3>
                  <p className="text-muted-foreground">Controle do sistema nervoso autónomo para reduzir níveis de cortisol.</p>
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
                  <h3 className="text-lg font-semibold text-foreground">Dor Crónica</h3>
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
            <Button size="lg" variant="secondary" onClick={scrollToTecnicos}>
              Encontrar Técnicos
            </Button>
            <Button size="lg" className="border-white text-white hover:bg-white hover:text-primary" style={{ backgroundColor: 'hsl(0deg 0% 12.16%)' }}>
              Quero me certificar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex flex-col items-center text-center mb-6">
                <img src="/images/logo.svg" alt="Biofeedback PRO Logo" className="h-16 mb-4" />
                <span className="text-xl font-bold text-foreground">Biofeedback PRO</span>
                <span className="text-lg font-bold text-foreground">Fredy Vinagre</span>
              </div>
              <p className="text-muted-foreground text-center">
                Método Biofeedback - Técnicos Certificados
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-center">Contacto</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>contato@fredyvinagre.com</li>
                <li>+55 (11) 9999-0000</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;