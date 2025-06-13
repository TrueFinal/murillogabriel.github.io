import React from 'react';
import { Check, MessageCircle, Code, Zap, ArrowRight, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'WhatsApp Automation Bot',
      description: 'Custom WhatsApp bot that handles customer inquiries, processes orders, and manages your business communication 24/7.',
      price: '$499',
      originalPrice: '$699',
      duration: '2-3 weeks delivery',
      popular: true,
      features: [
        'Custom bot development',
        'Automated customer responses',
        'Order processing integration',
        'Customer data management',
        'Multi-language support',
        '30 days free support',
        'Setup and training included'
      ],
      icon: MessageCircle,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 2,
      title: 'Business Website + Automation',
      description: 'Complete business website with integrated automation tools to streamline your operations and boost productivity.',
      price: '$899',
      originalPrice: '$1299',
      duration: '3-4 weeks delivery',
      popular: false,
      features: [
        'Modern responsive website',
        'Contact form automation',
        'Lead management system',
        'Email automation setup',
        'SEO optimization',
        'Mobile-friendly design',
        '60 days free support'
      ],
      icon: Code,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 3,
      title: 'Custom Workflow Automation',
      description: 'Tailored automation solutions to eliminate repetitive tasks and optimize your business processes.',
      price: '$1299',
      originalPrice: '$1899',
      duration: '4-6 weeks delivery',
      popular: false,
      features: [
        'Process analysis and design',
        'Custom automation development',
        'Third-party integrations',
        'Data synchronization',
        'Performance monitoring',
        'Staff training included',
        '90 days free support'
      ],
      icon: Zap,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Digital Marketing Agency',
      text: 'The WhatsApp bot transformed our customer service. We now handle 3x more inquiries with the same team size.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Store',
      text: 'Incredible work on our website and automation setup. Sales increased by 40% in the first month!',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Consulting Firm',
      text: 'The custom workflow automation saved us 20+ hours per week. Best investment we made this year.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services & Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional automation and development services to transform your business operations
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
                      Most Popular
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
                  Order Now
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
              How It Works
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Simple 4-step process to get your automation solution up and running
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your needs and requirements' },
              { step: '02', title: 'Planning', desc: 'Create a detailed project plan and timeline' },
              { step: '03', title: 'Development', desc: 'Build and test your custom solution' },
              { step: '04', title: 'Launch', desc: 'Deploy, train your team, and provide support' }
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
              Client Success Stories
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              See what my clients say about the results they've achieved
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and create a custom solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Get Free Consultation
              </a>
              <a href="/projects" className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;