import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Bot de Automação WhatsApp',
      description: 'Bot inteligente para WhatsApp que gerencia consultas de clientes, processa pedidos e automatiza respostas 24/7.',
      image: '/projects/whatsapp-bot.jpg',
      tags: ['WhatsApp API', 'Node.js', 'MongoDB', 'Automation'],
      demoLink: 'https://demo.whatsapp-bot.com',
      githubLink: 'https://github.com/username/whatsapp-bot'
    },
    {
      title: 'Sistema de Gestão Empresarial',
      description: 'Plataforma completa de gestão com módulos para vendas, estoque, clientes e relatórios financeiros.',
      image: '/projects/erp-system.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      demoLink: 'https://demo.erp-system.com',
      githubLink: 'https://github.com/username/erp-system'
    },
    {
      title: 'E-commerce Automatizado',
      description: 'Loja virtual com integração de pagamentos, gestão de estoque e automação de pedidos.',
      image: '/projects/ecommerce.jpg',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      demoLink: 'https://demo.ecommerce.com',
      githubLink: 'https://github.com/username/ecommerce'
    },
    {
      title: 'Dashboard Analítico',
      description: 'Painel de controle com visualização de dados em tempo real e relatórios personalizados.',
      image: '/projects/dashboard.jpg',
      tags: ['React', 'D3.js', 'Node.js', 'Express'],
      demoLink: 'https://demo.dashboard.com',
      githubLink: 'https://github.com/username/dashboard'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Confira alguns dos meus projetos recentes e soluções personalizadas
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para Começar seu Projeto?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Vamos transformar suas ideias em realidade com soluções tecnológicas inovadoras
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Entre em Contato
              </a>
              <a href="/services" className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center group">
                Ver Serviços
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;