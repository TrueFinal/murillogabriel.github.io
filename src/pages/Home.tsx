import React from 'react';
import { ArrowRight, Code, Zap, MessageCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Criação de sites e aplicações web modernas, responsivas e otimizadas para SEO.'
    },
    {
      icon: Zap,
      title: 'Automação de Processos',
      description: 'Soluções personalizadas para automatizar tarefas repetitivas e otimizar fluxos de trabalho.'
    },
    {
      icon: MessageCircle,
      title: 'Bots de WhatsApp',
      description: 'Desenvolvimento de bots inteligentes para WhatsApp que melhoram o atendimento ao cliente.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transformando Negócios com{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              Tecnologia
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Desenvolvedor Full Stack especializado em criar soluções inovadoras que impulsionam o crescimento do seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Começar Projeto
            </a>
            <a
              href="/projects"
              className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meus Serviços</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Soluções tecnológicas personalizadas para impulsionar seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <a
                    href="/services"
                    className="text-blue-400 hover:text-blue-300 flex items-center group"
                  >
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Vamos discutir como posso ajudar a impulsionar seu negócio com soluções tecnológicas inovadoras
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Entre em Contato
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Sobre Mim
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;