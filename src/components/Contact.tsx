import Github from 'lucide-react/dist/esm/icons/github.js';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin.js';
import Mail from 'lucide-react/dist/esm/icons/mail.js';
import MapPin from 'lucide-react/dist/esm/icons/map-pin.js';
import Phone from 'lucide-react/dist/esm/icons/phone.js';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-600">
              I'm interested in AI engineering, agentic workflows, RAG platforms, enterprise automation, and product teams that care about measurable business impact.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:rushtoabhinavin@gmail.com"
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <Mail className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-900">rushtoabhinavin@gmail.com</span>
            </a>

            <a
              href="tel:+16506954346"
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <Phone className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-900">(650) 695-4346</span>
            </a>

            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-900">San Francisco Bay Area, CA</span>
            </div>

            <div className="flex gap-4 justify-center mt-8">
              <a
                href="https://github.com/Abhinav0905"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition flex-1"
              >
                <Github className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-900">GitHub Profile</span>
              </a>

              <a
                href="https://linkedin.com/in/Kumarabhinav05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition flex-1"
              >
                <Linkedin className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-900">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
