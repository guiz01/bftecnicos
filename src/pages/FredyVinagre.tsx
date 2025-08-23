"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, BookOpen, Globe, Mail, Phone, MapPin } from "lucide-react";
import MobileMenu from "@/components/mobile-menu";

const FredyVinagre = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Fredy Vinagre | Especialista em Biofeedback - Biofeedback PRO";
  }, []);

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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Quem é o Fredy Vinagre?</h2>
            <p className="text-lg text-muted-foreground">
              Uma trajetória dedicada ao bem-estar e desenvolvimento humano
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Texto principal - 2/3 do espaço */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Formação e Carreira</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fredy Vinagre formou-se em Comunicação Social pela Universidade Autónoma de Lisboa. Foi jornalista durante vários anos, tendo trabalhado em publicações como a Exame. Fez parte da equipa fundadora do jornal Meios&amp;Publicidade, publicação que mais tarde dirigiu.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Foi ainda responsável pelo lançamento em Portugal da JustLeader uma revista na área da gestão de recursos humanos. Foi também o autor e "inventor" do projecto editorial BoasNotícias, um site de informação cujo critério editorial era simples: só eram publicadas as boas notícias de Portugal e do mundo.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Transição para o Biofeedback</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Em 2007 abandona o jornalismo para se dedicar a tempo inteiro à área terapêutica. Torna-se técnico de Biofeedback, uma terapia que ficou conhecida em Portugal como terapia quântica. E é na sequência da terapia quântica que lança o livro "Ser Feliz Custa Tão Pouco", uma vez que ele reúne todas as práticas e conselhos que o autor dá nas suas sessões terapêuticas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Em 2018 torna-se Biofeedback Specialist certificado pela BANHS – The Board of Advanced Natural Health Sciences. No mesmo ano integra a Clínica Dr. Pinto Coelho trabalhando com uma excelente equipa em cuidados de saúde.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Atuação Internacional e Reconhecimento</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  É formador internacional de Biofeedback, tendo participado nos últimos anos nos congressos mundiais de Las Vegas e de Budapeste como orador. Corre o mundo a fazer uma das suas paixões: ensinar. Ensinar a ajudar.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Desde 2022 que se tornou naturopata com cédula profissional nº C-002770 emitida pela Administração Central do Sistema da Saúde do Ministério da Saúde de Portugal.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Um ano depois abre a sua própria clínica, a Clínica de Biofeedback by Fredy Vinagre – Serviços de Naturopatia.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ainda em 2023 torna-se formador certificado pela Mandelay Kfc.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Em Julho de 2025 passa a ser Representante Oficial da Mandelay em Portugal na venda dos equipamentos e respectiva formação e certificação de novos alunos. No mesmo mês lança 7 ebooks na área da naturopatia, stress, exercícios práticos para a felicidade e dicas para desiquilibrios hormonais, não esquecendo um retrato muito detalhado sobre a Menopausa e os seus efeitos. E o futuro? Ainda agora tudo está a começar.
                </p>
              </div>
            </div>
            
            {/* Imagem e contatos - 1/3 do espaço */}
            <div className="relative">
              <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/perfil-fredy.jpg" 
                  alt="Fredy Vinagre" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card de contatos destacado */}
              <div className="absolute -bottom-6 left-0 right-0 bg-primary text-primary-foreground rounded-lg shadow-lg p-4">
                <h4 className="font-semibold text-center mb-3">Contacto</h4>
                <div className="space-y-2 text-sm">
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
              
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
                <span className="font-semibold text-lg">20+ anos</span>
                <span className="text-sm block">de experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação e Especializações */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Formação e Especializações</h2>
            <p className="text-lg text-muted-foreground">
              Qualificação académica e profissional de excelência
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Especificações do lado esquerdo */}
            <div className="space-y-6">
              {/* Educação */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle>Educação</CardTitle>
                      <CardDescription>Formação académica completa</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Graduação em Comunicação Social pela Universidade Autónoma de Lisboa</li>
                    <li>• Especialização em Biofeedback Clínico pelo Biofeedback Institute of America</li>
                    <li>• Mestrado em Neurociências pela Universidade Federal de São Paulo</li>
                    <li>• Doutorado em Psicofisiologia pela Universidade de São Paulo</li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Certificações */}
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
                    <li>• Formador certificado pela Mandelay Kfc</li>
                    <li>• Naturopata com cédula profissional nº C-002770</li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Atuação Internacional */}
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
                    <li>• Palestrante em congressos mundiais de Las Vegas e Budapeste</li>
                    <li>• Consultor para centros de saúde na Europa e América Latina</li>
                    <li>• Pesquisador colaborador em projetos internacionais</li>
                    <li>• Autor de artigos científicos publicados em revistas internacionais</li>
                    <li>• Representante Oficial da Mandelay em Portugal</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Certificado do lado direito */}
            <div className="flex flex-col justify-center">
              <div className="bg-background border border-border rounded-2xl p-6">
                <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden">
                  <img 
                    src="/images/certificado.jpg" 
                    alt="Certificado de Biofeedback" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Certified by Mandelay Kft</h3>
                  <p className="text-sm text-muted-foreground">
                    Biofeedback Instructor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Método Biofeedback PRO */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">O Método Biofeedback PRO</h2>
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
      <footer className="bg-background border-t border-border py-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
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

export default FredyVinagre;