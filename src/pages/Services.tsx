import React from 'react';
import { Check, MessageCircle, Code, Zap, ArrowRight, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Bot de Automação WhatsApp',
      description: 'Bot personalizado do WhatsApp que gerencia consultas de clientes, processa pedidos e administra a comunicação do seu negócio 24/7.',
      price: 'R$ 2.499',
      originalPrice: 'R$ 3.499',
      duration: 'Entrega em 2-3 semanas',
      popular: true,
      features: [
        'Desenvolvimento personalizado do bot',
        'Respostas automáticas para clientes',
        'Integração com processamento de pedidos',
        'Gerenciamento de dados dos clientes',
        'Suporte a múltiplos idiomas',
        '30 dias de suporte gratuito',
        'Configuração e treinamento incluídos'
      ],
      icon: MessageCircle,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 2,
      title: 'Site Empresarial + Automação',
      description: 'Site empresarial completo com ferramentas de automação integradas para otimizar suas operações e aumentar a produtividade.',
      price: 'R$ 4.499',
      originalPrice: 'R$ 6.499',
      duration: 'Entrega em 3-4 semanas',
      popular: false,
      features: [
        'Site responsivo moderno',
        'Automação de formulário de contato',
        'Sistema de gerenciamento de leads',
        'Configuração de automação de e-mail',
        'Otimização SEO',
        'Design mobile-friendly',
        '60 dias de suporte gratuito'
      ],
      icon: Code,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 3,
      title: 'Automação de Fluxo de Trabalho',
      description: 'Soluções de automação personalizadas para eliminar tarefas repetitivas e otimizar seus processos de negócios.',
      price: 'R$ 6.499',
      originalPrice: 'R$ 9.499',
      duration: 'Entrega em 4-6 semanas',
      popular: false,
      features: [
        'Análise e design de processos',
        'Desenvolvimento de automação personalizada',
        'Integrações com terceiros',
        'Sincronização de dados',
        'Monitoramento de desempenho',
        'Treinamento da equipe incluído',
        '90 dias de suporte gratuito'
      ],
      icon: Zap,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Agência de Marketing Digital',
      text: 'O bot do WhatsApp transformou nosso atendimento ao cliente. Agora atendemos 3x mais consultas com a mesma equipe.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Loja E-commerce',
      text: 'Trabalho incrível em nosso site e configuração de automação. As vendas aumentaram 40% no primeiro mês!',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Empresa de Consultoria',
      text: 'A automação de fluxo de trabalho nos economizou mais de 20 horas por semana. Melhor investimento que fizemos este ano.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Serviços & Soluções
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Serviços profissionais de automação e desenvolvimento para transformar as operações do seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-400">{service.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full bg-gradient-to-r ${service.color} hover:scale-105 text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center group`}>
                  Pedir Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Processo simples de 4 etapas para colocar sua solução de automação em funcionamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consulta', desc: 'Discutimos suas necessidades e requisitos' },
              { step: '02', title: 'Planejamento', desc: 'Criamos um plano detalhado do projeto e cronograma' },
              { step: '03', title: 'Desenvolvimento', desc: 'Construímos e testamos sua solução personalizada' },
              { step: '04', title: 'Lançamento', desc: 'Implantamos, treinamos sua equipe e fornecemos suporte' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre os resultados que alcançaram
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para Automatizar seu Negócio?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Vamos discutir suas necessidades específicas e criar uma solução personalizada que gere resultados reais para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Agendar Consulta Gratuita
              </a>
              <a href="/projects" className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Ver Portfólio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;