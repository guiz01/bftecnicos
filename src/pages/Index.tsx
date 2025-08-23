"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Award, Users, BookOpen, Globe, Mail, Phone, MapPin, Instagram, Search, ExternalLink } from "lucide-react";
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
  avatar_url?: string;
  latitude?: number;
  longitude?: number;
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
    document.title = "Biofeedback PRO - Técnicos Certificados";
  }, []);

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

  const scrollToTecnicos = () => {
    const element = document.getElementById('tecnicos-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const indexOfLastTecnico = currentPage * tecnicosPerPage;
  const indexOfFirstTecnico = indexOfLastTecnico - tecnicosPerPage;
  const currentTecnicos = filteredTecnicos.slice(indexOfFirstTecnico, indexOfLastTecnico);

  const formatWebsiteUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://${url}`;
  };

  const formatSocialMediaUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    if (url.startsWith('instagram.com/')) {
      return `https://instagram.com/${url.replace('instagram.com/', '')}`;
    }
    return `https://${url}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/')}
                className="flex items-start space-x-2 hover:opacity-80 transition-opacity"
              >
                <img src="/images/logo.svg" alt="Biofeedback PRO Logo" className="h-12" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-foreground">Biofeedback PRO</span>
                  <span className="text-sm text-muted-foreground">by Fredy Vinagre</span>
                </div>
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

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-4">
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
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Biofeedback PRO
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Encontre os melhores técnicos certificados em Biofeedback e Neurofeedback.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToTecnicos}>
            Encontrar Técnicos
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">O que é Biofeedback?</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Biofeedback é uma técnica que treina as pessoas a controlar as funções do corpo, como frequência cardíaca, respiração e tensão muscular, para melhorar a saúde e o bem-estar.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-primary" size={24} />
                </div>
                <CardTitle>Saúde Mental</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ajuda a reduzir o estresse, ansiedade, depressão e melhora o foco e a concentração.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-primary" size={24} />
                </div>
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Otimiza o desempenho em esportes, estudos e trabalho, promovendo maior controle e resiliência.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <CardTitle>Bem-Estar Físico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Alivia dores crônicas, melhora a qualidade do sono e auxilia no controle de condições físicas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Técnicos Certificados Section */}
      <section id="tecnicos-section" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nossos Técnicos Certificados</h2>
            <p className="text-lg text-muted-foreground">
              Profissionais qualificados e treinados para o seu bem-estar
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
                      {tecnico.avatar_url ? (
                        <img src={tecnico.avatar_url} alt={tecnico.name} className="w-16 h-16 rounded-full object-cover" />
                      ) : (
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                          <Users className="text-primary" size={24} />
                        </div>
                      )}
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
                            <a 
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tecnico.location)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline truncate"
                            >
                              {tecnico.location}
                            </a>
                          </div>
                        )}
                        {tecnico.email && (
                          <div className="flex items-start">
                            <Mail className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                            <a 
                              href={`mailto:${tecnico.email}`}
                              className="text-primary hover:underline truncate"
                            >
                              {tecnico.email}
                            </a>
                          </div>
                        )}
                        {tecnico.phone && (
                          <div className="flex items-start">
                            <Phone className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                            <a 
                              href={`tel:${tecnico.phone}`}
                              className="text-primary hover:underline truncate"
                            >
                              {tecnico.phone}
                            </a>
                          </div>
                        )}
                        {tecnico.website && (
                          <div className="flex items-start">
                            <Globe className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                            <a 
                              href={formatWebsiteUrl(tecnico.website)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline truncate"
                            >
                              {tecnico.website}
                            </a>
                          </div>
                        )}
                        {tecnico.social_media && (
                          <div className="flex items-start">
                            <ExternalLink className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                            <a 
                              href={formatSocialMediaUrl(tecnico.social_media)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline truncate"
                            >
                              {tecnico.social_media}
                            </a>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Pronto para transformar sua saúde?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Encontre um técnico certificado perto de você e comece sua jornada de bem-estar.
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
      <footer className="bg-background border-t border-border py-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Biofeedback PRO. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;