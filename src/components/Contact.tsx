import React from 'react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR-WEB3FORMS-ACCESS-KEY',
          ...data,
        }),
      });

      if (response.ok) {
        reset();
        alert('Message sent successfully!');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center underline-gradient">Get in Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-8 rounded-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-400">
                Feel free to reach out through the form or connect with me on social media.
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="mailto:contact@mainak.dev"
                className="bg-[#1a1a1a] p-4 rounded-full hover:bg-[#2a2a2a] transition-colors group">
                <Mail size={24} className="group-hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/mainak-majumder/" target="_blank" rel="noopener noreferrer"
                className="bg-[#1a1a1a] p-4 rounded-full hover:bg-[#2a2a2a] transition-colors group">
                <Linkedin size={24} className="group-hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://github.com/mainak1023" target="_blank" rel="noopener noreferrer"
                className="bg-[#1a1a1a] p-4 rounded-full hover:bg-[#2a2a2a] transition-colors group">
                <Github size={24} className="group-hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="bg-[#1a1a1a] p-4 rounded-full hover:bg-[#2a2a2a] transition-colors group">
                <Twitter size={24} className="group-hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}