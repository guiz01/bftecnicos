"use client";

import { useNavigate } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, BookOpen, Globe, Mail, Phone, MapPin } from "lucide-react";
import MobileMenu from "@/components/mobile-menu";

const FredyVinagre = () => {
  const navigate = useNavigate();

  const scrollToTecnicos = () => {
    const element = document.getElementById('tecnicos-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
            backgroundImage: "url('/images/background2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Fredy Vinagre
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Especialista em Biofeedback e Desenvolvimento Humano
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Conhecer o Método
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Ver Formações
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Fredy */}
      <section id="tecnicos-section" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Quem é o Fredy Vinagre?</h2>
            <p className="text-lg text-muted-foreground">
              Uma trajetória dedicada ao bem-estar e desenvolvimento humano
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fredy Vinagre é um especialista em Biofeedback com mais de 20 anos de experiência 
                no desenvolvimento de técnicas avançadas para o tratamento de saúde e bem-estar. 
                Sua metodologia única combina ciência, tecnologia e sabedoria ancestral para 
                ajudar pessoas a alcançar o máximo potencial de suas capacidades fisiológicas e mentais.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Como pioneiro no Brasil no uso do Biofeedback para tratamento de diversas condições 
                de saúde, Fredy desenvolveu um método próprio que já ajudou milhares de pacientes 
                a superar desafios como ansiedade, estresse, dor crônica e problemas de sono.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>fredy@fredyvinagre.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+55 (11) 9999-0000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="text-primary" size={64} />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                <span className="font-semibold">20+ anos</span>
                <span className="text-sm block">de experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação e Especializações */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Formação e Especializações</h2>
            <p className="text-lg text-muted-foreground">
              Qualificação acadêmica e profissional de excelência
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-background border-border">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle>Educação</CardTitle>
                    <CardDescription>Formação acadêmica completa</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Graduação em Psicologia pela Universidade de São Paulo</li>
                  <li>• Especialização em Biofeedback Clínico pelo Biofeedback Institute of America</li>
                  <li>• Mestrado em Neurociências pela Universidade Federal de São Paulo</li>
                  <li>• Doutorado em Psicofisiologia pela Universidade de São Paulo</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle>Certificações</CardTitle>
                    <CardDescription>Qualificações profissionais</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Certificado em Biofeedback Avançado (BCIA)</li>
                  <li>• Especialista em Neurofeedback (BCIA)</li>
                  <li>• Certificação em HRV (Variabilidade da Frequência Cardíaca)</li>
                  <li>• Formador Internacional em Biofeedback</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Globe className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle>Atuação Internacional</CardTitle>
                    <CardDescription>Experiência global</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Palestrante em congressos internacionais de Biofeedback</li>
                  <li>• Consultor para centros de saúde na Europa e América Latina</li>
                  <li>• Pesquisador colaborador em projetos internacionais</li>
                  <li>• Autor de artigos científicos publicados em revistas internacionais</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Método Fredy Vinagre */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">O Método Fredy Vinagre</h2>
            <p className="text-lg text-muted-foreground">
              Uma abordagem única e inovadora no tratamento com Biofeedback
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-primary" size={24} />
                </div>
                <CardTitle>Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cada tratamento é adaptado às necessidades individuais do paciente, 
                  considerando seu perfil fisiológico e objetivos específicos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <CardTitle>Comprovado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Baseado em evidências científicas e resultados comprovados em 
                  milhares de casos tratados ao longo dos anos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-primary" size={24} />
                </div>
                <CardTitle>Inovador</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Constantemente atualizado com as últimas tecnologias e 
                  descobertas científicas no campo do Biofeedback.
                </p>
              </CardContent>
            </Card>
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
            Conheça o método Fredy Vinagre e comece sua jornada de bem-estar
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

export default FredyVinagre;