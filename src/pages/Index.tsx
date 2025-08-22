"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Mail, Phone, ExternalLink, Heart, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-900">Biofeedback PRO - Fredy Vinagre</span>
            </div>
            <Button variant="outline">Quero me certificar</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Técnicos Certificados em Biofeedback
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Encontre profissionais qualificados e certificados pelo método Fredy Vinagre de Biofeedback
            para tratamento de saúde e bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Encontrar Técnicos
            </Button>
            <Button size="lg" variant="outline">
              Sobre o Método
            </Button>
          </div>
        </div>
      </section>

      {/* O que é Biofeedback */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que é Biofeedback?</h2>
            <p className="text-lg text-gray-600">
              O método Biofredy é uma técnica avançada que utiliza feedback biológico para ajudar 
              as pessoas a controlar funções fisiológicas e melhorar sua saúde e bem-estar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Método Comprovado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Técnica desenvolvida por Fredy Vinagre com base em pesquisas científicas 
                  e resultados comprovados em pacientes.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Controle Autônomo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Aprenda a controlar funções do corpo que normalmente são involuntárias, 
                  como frequência cardíaca e tensão muscular.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Heart className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Bem-Estar Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Benefícios para saúde mental, redução de estresse, melhora da qualidade do 
                  sono e aumento da consciência corporal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Técnicos Certificados */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Técnicos Certificados</h2>
            <p className="text-lg text-gray-600">
              Profissionais qualificados e treinados pelo método Fredy Vinagre
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Técnico 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-blue-600" size={24} />
                </div>
                <CardTitle>Dr. Ana Silva</CardTitle>
                <CardDescription>Técnica Certificada</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>São Paulo, SP</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>ana.silva@biofredy.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(11) 9999-8888</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>www.ana-silva-biofredy.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>@ana_silva_biofredy</span>
                </div>
                <div className="pt-4">
                  <Badge variant="secondary">Especialista em Stress</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Técnico 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-blue-600" size={24} />
                </div>
                <CardTitle>Carlos Mendes</CardTitle>
                <CardDescription>Técnico Certificado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Rio de Janeiro, RJ</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>carlos.mendes@biofredy.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(21) 9999-7777</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>www.carlos-mendes-biofredy.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>@carlos_biofredy</span>
                </div>
                <div className="pt-4">
                  <Badge variant="secondary">Foco em Dor Crônica</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Técnico 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-blue-600" size={24} />
                </div>
                <CardTitle>Maria Oliveira</CardTitle>
                <CardDescription>Técnica Certificada</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Belo Horizonte, MG</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>maria.oliveira@biofredy.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(31) 9999-6666</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>www.maria-oliveira-biofredy.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>@maria_biofredy</span>
                </div>
                <div className="pt-4">
                  <Badge variant="secondary">Ansiedade e Depressão</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefícios do Biofredy</h2>
            <p className="text-lg text-gray-600">
              Descubra como o método Biofredy pode transformar sua saúde
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Redução de Estresse</h3>
                  <p className="text-gray-600">Controle do sistema nervoso autônomo para reduzir níveis de cortisol.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Melhora do Sono</h3>
                  <p className="text-gray-600">Regulação do ritmo circadiano para um sono mais reparador.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Consciência Corporal</h3>
                  <p className="text-gray-600">Maior conexão mente-corpo para melhor autopercepção.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dor Crônica</h3>
                  <p className="text-gray-600">Controle da percepção da dor através de técnicas específicas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Ansiedade</h3>
                  <p className="text-gray-600">Técnicas de respiração e controle fisiológico para ansiedade.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Pressão Arterial</h3>
                  <p className="text-gray-600">Controle voluntário da pressão arterial através de biofeedback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para transformar sua saúde?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Encontre um técnico certificado e comece sua jornada de bem-estar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Encontrar Técnicos
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Quero me certificar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="text-white" size={16} />
                </div>
                <span className="text-lg font-bold">Biofeedback PRO - Fredy Vinagre</span>
              </div>
              <p className="text-gray-400">
                Método Biofredy - Técnicos Certificados
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre o Método</a></li>
                <li><a href="#" className="hover:text-white">Técnicos Certificados</a></li>
                <li><a href="#" className="hover:text-white">Formação</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Artigos</a></li>
                <li><a href="#" className="hover:text-white">Pesquisas</a></li>
                <li><a href="#" className="hover:text-white">Webinars</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@fredyvinagre.com</li>
                <li>+55 (11) 9999-0000</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <MadeWithDyad />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;