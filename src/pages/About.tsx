import React from 'react';
import { Download, MapPin, Calendar, Mail } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript/TypeScript', 'React/Next.js', 'Node.js', 'Python',
    'WhatsApp API', 'Automation Tools', 'Web Scraping', 'API Integration',
    'Database Design', 'Cloud Services', 'UI/UX Design', 'Project Management'
  ];

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications and automation systems'
    },
    {
      title: 'Automation Specialist',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Created custom automation solutions for small and medium businesses'
    },
    {
      title: 'Web Developer',
      company: 'Freelance',
      period: '2018 - 2020',
      description: 'Built responsive websites and web applications for various clients'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a focus on creating innovative solutions that drive business growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">My Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With over 5 years of experience in web development and automation, I've helped dozens of 
                  businesses streamline their operations and expand their digital presence. My journey started 
                  with a simple passion for solving complex problems through code.
                </p>
                <p>
                  I specialize in creating custom automation solutions, particularly WhatsApp bots and workflow 
                  automation systems that save businesses time and money. My approach combines technical expertise 
                  with a deep understanding of business needs.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or helping other developers grow their skills through mentoring and knowledge sharing.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-blue-400 pl-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      <span className="text-blue-400 text-sm">{job.period}</span>
                    </div>
                    <p className="text-teal-400 mb-2">{job.company}</p>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-center">
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  <span>New York, NY</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-5 w-5 mr-3 text-blue-400" />
                  <span>Available for hire</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>hello@portfolio.com</span>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Resume</h3>
              <p className="text-gray-300 mb-6">
                Download my complete resume for more details about my experience and skills.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center w-full group">
                <Download className="h-5 w-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </button>
            </div>

            {/* Stats */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Stats</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">30+</div>
                  <div className="text-gray-300 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">5+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;