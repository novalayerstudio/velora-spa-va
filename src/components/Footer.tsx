import { Sparkles, Instagram, Mail, MapPin, X, Clock } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-4 zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[70vh]">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <footer id='contact' className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="w-8 h-8 text-rose-400" />
                <span className="text-3xl font-bold">Velora</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Elite Virtual Assistants for Med Spas. We help beauty businesses stay booked solid with trained VAs that handle DMs, scheduling, and lead conversion.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="bg-rose-400/20 hover:bg-rose-400/30 p-3 rounded-full transition-colors duration-200">
                  <Instagram className="w-5 h-5 text-rose-400" />
                </a>
                <a href="mailto:hello@velora.com" className="bg-rose-400/20 hover:bg-rose-400/30 p-3 rounded-full transition-colors duration-200">
                  <Mail className="w-5 h-5 text-rose-400" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-rose-400">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('plans')}
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                  >
                    Plans & Pricing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('book-call')}
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                  >
                    Book a Demo
                  </button>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                    Success Stories
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-rose-400">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-rose-400" />
                  <span>hello@velora.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-rose-400" />
                  <span>Available 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 Velora. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className="text-gray-400 hover:text-rose-400 transition-colors duration-200"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setShowTerms(true)}
                  className="text-gray-400 hover:text-rose-400 transition-colors duration-200"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} title="Privacy Policy">
        <div className="prose max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-6">
            <strong>Effective Date:</strong> January 1, 2024<br />
            <strong>Last Updated:</strong> January 1, 2024
          </p>

          <h3 className="text-lg font-semibold mb-3">1. Information We Collect</h3>
          <h4 className="font-medium mb-2">Personal Information</h4>
          <p className="mb-4">We collect information you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name, email address, and phone number</li>
            <li>Business information (med spa name, location, size)</li>
            <li>Communication preferences and marketing consent</li>
            <li>Payment and billing information</li>
            <li>Account credentials and profile information</li>
          </ul>

          <h4 className="font-medium mb-2">Usage Information</h4>
          <p className="mb-4">We automatically collect information about your use of our services:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Usage patterns and interaction data</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Performance metrics and analytics data</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">2. How We Use Your Information</h3>
          <p className="mb-4">We use collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and maintain our virtual assistant services</li>
            <li>Process payments and manage billing</li>
            <li>Communicate with you about our services and updates</li>
            <li>Improve our platform and develop new features</li>
            <li>Comply with legal obligations and enforce our terms</li>
            <li>Prevent fraud and maintain security</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">3. Information Sharing</h3>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Service Providers:</strong> Third parties who perform services on our behalf</li>
            <li><strong>Virtual Assistants:</strong> Our trained VAs who provide services to your business</li>
            <li><strong>Legal Compliance:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
          </ul>
          <p className="mb-4">We do not sell your personal information to third parties.</p>

          <h3 className="text-lg font-semibold mb-3">4. Data Security</h3>
          <p className="mb-4">We implement appropriate technical and organizational measures to protect your information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and monitoring</li>
            <li>Limited access controls and authentication</li>
            <li>Incident response procedures</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">5. Your Rights</h3>
          <p className="mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access and receive a copy of your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Delete your personal information</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">6. Contact Us</h3>
          <p className="mb-4">If you have questions about this privacy policy, please contact us at:</p>
          <p className="mb-2"><strong>Email:</strong> info@velora.com</p>
          <p className="mb-2"><strong>Address:</strong> [Your Business Address]</p>
          <p className="mb-4"><strong>Phone:</strong> [Your Phone Number]</p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={showTerms} onClose={() => setShowTerms(false)} title="Terms of Service">
        <div className="prose max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-6">
            <strong>Effective Date:</strong> January 1, 2024<br />
            <strong>Last Updated:</strong> January 1, 2024
          </p>

          <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
          <p className="mb-4">By accessing or using Velora's services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.</p>

          <h3 className="text-lg font-semibold mb-3">2. Description of Services</h3>
          <p className="mb-4">Velora provides virtual assistant services specifically designed for med spas and beauty businesses, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Social media management and DM handling</li>
            <li>Appointment scheduling and booking management</li>
            <li>Lead conversion and customer communication</li>
            <li>Administrative support and business process optimization</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">3. User Accounts</h3>
          <h4 className="font-medium mb-2">Account Creation</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>You must provide accurate and complete information</li>
            <li>You are responsible for maintaining account security</li>
            <li>You must notify us immediately of any unauthorized access</li>
            <li>One account per business entity unless otherwise approved</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">4. Service Plans and Billing</h3>
          <h4 className="font-medium mb-2">Payment Terms</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Fees are due according to your billing cycle</li>
            <li>All payments are non-refundable unless otherwise specified</li>
            <li>Late payments may result in service suspension</li>
            <li>Price changes will be communicated with 30 days notice</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">5. User Conduct</h3>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use services for illegal or unauthorized purposes</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Interfere with or disrupt our services</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Upload or transmit harmful or malicious content</li>
            <li>Impersonate others or provide false information</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">6. Virtual Assistant Services</h3>
          <h4 className="font-medium mb-2">Service Delivery</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>VAs are trained professionals employed or contracted by Velora</li>
            <li>Services are provided remotely during agreed-upon hours</li>
            <li>Response times and availability as specified in your service agreement</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">7. Limitation of Liability</h3>
          <p className="mb-4">To the maximum extent permitted by law, Velora shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>

          <h3 className="text-lg font-semibold mb-3">8. Termination</h3>
          <p className="mb-4">You may terminate your subscription with 30 days written notice. We may terminate for breach of these Terms or non-payment after appropriate notice.</p>

          <h3 className="text-lg font-semibold mb-3">9. Contact Information</h3>
          <p className="mb-4">For questions about these Terms, please contact us at:</p>
          <p className="mb-2"><strong>Email:</strong> info@velora.com</p>
          <p className="mb-2"><strong>Address:</strong> [Your Business Address]</p>
          <p className="mb-4"><strong>Phone:</strong> [Your Phone Number]</p>
        </div>
      </Modal>
    </>
  );
};

export default Footer;