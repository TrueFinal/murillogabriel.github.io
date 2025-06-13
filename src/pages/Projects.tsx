import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'WhatsApp Business Automation Bot',
      description: 'A comprehensive WhatsApp automation solution that handles customer inquiries, processes orders, and manages customer relationships automatically. Built with Node.js and WhatsApp Web API.',
      image: 'https://images.pexels.com/photos/6963932/pexels-photo-6963932.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'WhatsApp API', 'MongoDB', 'Express'],
      status: 'In Progress',
      completion: 85,
      features: [
        'Automated customer support responses',
        'Order processing and tracking',
        'Customer data management',
        'Multi-language support',
        'Analytics dashboard'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'E-commerce Analytics Dashboard',
      description: 'A real-time analytics dashboard for e-commerce businesses that provides insights into sales, customer behavior, and inventory management. Features advanced data visualization and reporting.',
      image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      status: 'In Progress',
      completion: 70,
      features: [
        'Real-time sales tracking',
        'Customer behavior analysis',
        'Inventory management',
        'Custom report generation',
        'Mobile-responsive design'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A comprehensive project management tool with team collaboration features, time tracking, and automated workflow management. Designed for remote teams and freelancers.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      status: 'Planning',
      completion: 25,
      features: [
        'Team collaboration tools',
        'Time tracking and reporting',
        'Automated notifications',
        'File sharing and storage',
        'Project templates'
      ],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Planning':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Current Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are the three main projects I'm currently working on, each designed to solve real business problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
              <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2024</span>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm text-blue-400">{project.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Tag className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-400">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white rounded-lg font-medium transition-all duration-200 group"
                    >
                      <ExternalLink className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      View Project
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center px-6 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in My Work?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects and opportunities. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Start a Project
              </a>
              <a href="/services" className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;