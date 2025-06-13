import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
      });
      setFormData({ name: '', email: '', subject: '', message: '', service: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@portfolio.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call me for urgent matters'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New York, NY',
      description: 'Available for local meetings'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      description: 'I respond quickly to all inquiries'
    }
  ];

  const services = [
    'WhatsApp Automation Bot',
    'Business Website Development',
    'Custom Workflow Automation',
    'API Integration',
    'Consulting & Strategy',
    'Other (Please specify)'
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vamos discutir como posso ajudar a transformar seu negócio com soluções tecnológicas inovadoras
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-6 w-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Envie uma Mensagem</h2>
              </div>

              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-red-500/20 text-red-300'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-blue-400 font-medium mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* FAQ */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">FAQ Rápida</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">How quickly can you start?</h4>
                  <p className="text-gray-300 text-sm">Most projects can begin within 1-2 weeks of agreement.</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Do you offer payment plans?</h4>
                  <p className="text-gray-300 text-sm">Yes, I offer flexible payment options for larger projects.</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">What's included in support?</h4>
                  <p className="text-gray-300 text-sm">All projects include free support and minor updates for 30-90 days.</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-3 animate-pulse"></div>
              <h3 className="text-lg font-bold text-white mb-2">Available for New Projects</h3>
              <p className="text-gray-300 text-sm">
                Currently accepting new clients for Q1 2024
              </p>
            </div>
          </div>
        </div>

        {/* Map or Additional CTA */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prefer a Quick Call?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Sometimes it's easier to discuss your project over a call. I'm available for 15-minute discovery calls to understand your needs better.
            </p>
            <a 
              href="tel:+15551234567"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;