
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Portfolio = () => {

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`Copied to clipboard: ${text}`);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Adarsh MG</h1>
          <p className="text-xl mb-6">Aspiring Computer Science Engineer</p>
          <div className="flex flex-wrap gap-4">
          <button
              onClick={() => copyToClipboard('officialamg100@gmail.com')}
              className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              <Mail size={20} />
              <span>Email</span>
            </button>
            
            {/* Phone button to copy phone number */}
            <button
              onClick={() => copyToClipboard('+916366312780')}
              className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              <Phone size={20} />
              <span>Call</span>
            </button>
            <a href="https://www.linkedin.com/in/adarsh-manoj-810768249/" target="_blank" className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Adarsh-MG101"  target="_blank" className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Java', 'C/C++', 'MongoDB', 'SQL', 'HTML', 'CSS', 'JavaScript'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Bus Ticket Booking System</h3>
              <p className="text-gray-600 mb-4">
                A desktop application developed in Java Swing for booking bus tickets with interactive seat selection and passenger management.
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">Key Features:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Dynamic Seat Selection with real-time updates</li>
                  <li>User Input Validation</li>
                  <li>Multi-Bus Management using HashMap and ArrayList</li>
                  <li>Custom Bus Naming System</li>
                  <li>Responsive GUI Design</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Growing Snake Game</h3>
              <p className="text-gray-600 mb-4">
                A feature-rich Snake game developed in C++ with three distinct game modes and advanced gameplay mechanics.
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">Key Features:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Object-oriented architecture with linked lists</li>
                  <li>Multiple power-up systems</li>
                  <li>Progressive difficulty system</li>
                  <li>Real-time score tracking</li>
                  <li>Survival mechanics with lives system</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold">B.E in Computer Science Engineering</h3>
              <p className="text-gray-600">BMS Institute of Technology</p>
              <p className="text-gray-600">2022-Present</p>
              <p className="text-gray-600">CGPA: 8.81/10</p><br></br>
              <h3 className="font-semibold">Higher Secondary(XII)</h3>
              <p className="text-gray-600">PCMC</p>
              <p className="text-gray-600">The Asian School, Bahrain</p>
              <p className="text-gray-600">Year of Completion:2022</p><br></br>
              <h3 className="font-semibold">Secondary(X)</h3>
              <p className="text-gray-600">The Asian School, Bahrain</p>
              <p className="text-gray-600">Year of Completion:2020</p><br></br>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Achievements and Certifications</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <ul className="space-y-3">
                <li className="text-gray-600">PBL Open Day 2024 - 1st Place</li>
                <li className="text-gray-600">MongoDB Certification</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 AMG. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;