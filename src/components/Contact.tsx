import React from "react"
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // ... (keep the existing submit logic)
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-background-dark dark:from-background-dark dark:to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">Get in Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card dark:bg-card-dark p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-2 bg-input dark:bg-input-dark border border-border dark:border-border-dark rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent"
                />
                {errors.name && <p className="mt-1 text-sm text-error dark:text-error-dark">{errors.name.message}</p>}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full px-4 py-2 bg-input dark:bg-input-dark border border-border dark:border-border-dark rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent"
                />
                {errors.email && <p className="mt-1 text-sm text-error dark:text-error-dark">{errors.email.message}</p>}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-2 bg-input dark:bg-input-dark border border-border dark:border-border-dark rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent resize-none"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-error dark:text-error-dark">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary-foreground-dark px-6 py-3 rounded-lg hover:bg-primary-hover dark:hover:bg-primary-hover-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground-dark">Let's Connect</h3>
              <p className="text-muted dark:text-muted-dark">
                Feel free to reach out through the form or connect with me on social media. I'm always open to
                discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <SocialLink href="mailto:contact@mainak.dev" icon={<Mail size={24} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} />
              <SocialLink href="https://github.com" icon={<Github size={24} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={24} />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-card dark:bg-card-dark p-4 rounded-full hover:bg-card-hover dark:hover:bg-card-hover-dark transition-colors group"
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: "group-hover:text-primary dark:group-hover:text-primary-dark transition-colors",
      })}
    </a>
  )
}

