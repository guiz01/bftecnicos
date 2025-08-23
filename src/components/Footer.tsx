"use client";

import React from 'react';
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
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
              <li>
                <a 
                  href="tel:+351961961111"
                  className="text-primary hover:underline flex items-center justify-center md:justify-start"
                >
                  <Phone className="w-4 h-4 mr-2" /> WhatsApp: (+351) 961 961 111
                </a>
              </li>
              <li>
                <a 
                  href="mailto:fredyvinagre@gmail.com"
                  className="text-primary hover:underline flex items-center justify-center md:justify-start"
                >
                  <Mail className="w-4 h-4 mr-2" /> Email: fredyvinagre@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/fredyvinagre.biofeedback"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center justify-center md:justify-start"
                >
                  <Instagram className="w-4 h-4 mr-2" /> Instagram: @fredyvinagre.biofeedback
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica%20de%20Biofeedback%2C%20Avenida%20da%20Rep%C3%BAblica%2C%2032%2C%201%C2%BA%20Esquerdo%201050-193%20Lisboa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center justify-center md:justify-start"
                >
                  <MapPin className="w-4 h-4 mr-2" /> Clínica de Biofeedback, Avenida da República, 32, 1º Esquerdo 1050-193 Lisboa
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-muted-foreground mt-8 border-t border-border pt-4">
          <p>&copy; 2024 Biofeedback PRO. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;