import React from 'react';
import { Code, Zap, MessageCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Desenvolvimento Web',
      items: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Automação',
      items: ['WhatsApp API', 'Python', 'JavaScript']
    },
    {
      category: 'Ferramentas & Tecnologias',
      items: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL']
    }
  ];

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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre Mim
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras que transformam negócios
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Minha Jornada</h2>
              <p className="text-gray-300 leading-relaxed">
                Com mais de 3 anos de experiência em desenvolvimento web e automação, tenho ajudado empresas a 
                transformar suas operações através de soluções tecnológicas inovadoras. Minha especialidade está 
                em criar sistemas que não apenas resolvem problemas, mas também impulsionam o crescimento dos negócios.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Minha Abordagem</h2>
              <p className="text-gray-300 leading-relaxed">
                Acredito em uma abordagem colaborativa, trabalhando em estreita colaboração com meus clientes para 
                entender suas necessidades específicas. Cada projeto é único, e me dedico a criar soluções 
                personalizadas que atendam perfeitamente aos objetivos do seu negócio.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Habilidades & Tecnologias</h2>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-white mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">O Que Eu Faço</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Serviços especializados para impulsionar seu negócio com tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <a href="/services" className="text-blue-400 hover:text-blue-300 flex items-center group">
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
              Vamos Trabalhar Juntos
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Pronto para transformar seu negócio com soluções tecnológicas inovadoras? Vamos conversar sobre seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Entre em Contato
              </a>
              <a href="/projects" className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;