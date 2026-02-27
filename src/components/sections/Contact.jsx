import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'

const contactDetails = [
  { icon: Mail, label: 'Email us', value: 'hello@novalith.studio' },
  { icon: Phone, label: 'Call us', value: '+1 (555) 000-0000' },
  { icon: MapPin, label: 'Location', value: 'Remote-first · Worldwide' },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours' },
]

const serviceOptions = [
  'AI-Powered Business Website',
  'Mobile App (iOS & Android)',
  'Web App / SaaS MVP',
  'UI/UX Design',
  'AI Chatbot / Agent',
  'SEO & Content Strategy',
  'Other / Not sure yet',
]

const InputField = ({ label, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="font-body text-xs text-muted tracking-wide uppercase">{label}</label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          className="font-body text-xs text-red-400"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
)

const inputClass = 'w-full bg-surface2 border border-surface2 rounded-xl px-4 py-3 font-body text-sm text-text placeholder-muted focus:outline-none focus:border-accent/50 focus:bg-surface transition-colors duration-200'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    // Simulate network request
    await new Promise((res) => setTimeout(res, 1200))
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col gap-4 mb-14 text-center">
            <div className="flex justify-center">
              <SectionLabel>Get in touch</SectionLabel>
            </div>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-text tracking-tight">
              Let's build together
            </h2>
            <p className="font-body text-base text-muted max-w-md mx-auto leading-relaxed">
              Tell us about your project. We'll get back to you within 24 hours with a plan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — info */}
          <ScrollReveal>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-display font-bold text-2xl text-text mb-3 tracking-tight">
                  Ready when you are
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed max-w-sm">
                  Whether you have a fully scoped project or just an idea on a napkin — we'd love to hear from you. No commitment required.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <div key={detail.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-muted">{detail.label}</p>
                        <p className="font-body text-sm text-text">{detail.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal delay={0.15}>
            <div className="bg-bg border border-surface2 rounded-2xl p-7 lg:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                    >
                      <CheckCircle size={56} className="text-accent" />
                    </motion.div>
                    <h3 className="font-display font-bold text-2xl text-text">Message Sent!</h3>
                    <p className="font-body text-sm text-muted max-w-xs">
                      Thanks for reaching out. We'll be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                  >
                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <InputField label="First Name" error={errors.firstName?.message}>
                        <input
                          className={inputClass}
                          placeholder="Alex"
                          {...register('firstName', { required: 'First name is required' })}
                        />
                      </InputField>
                      <InputField label="Last Name" error={errors.lastName?.message}>
                        <input
                          className={inputClass}
                          placeholder="Johnson"
                          {...register('lastName', { required: 'Last name is required' })}
                        />
                      </InputField>
                    </div>

                    {/* Email */}
                    <InputField label="Email" error={errors.email?.message}>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder="alex@company.com"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email',
                          },
                        })}
                      />
                    </InputField>

                    {/* Service */}
                    <InputField label="Service" error={errors.service?.message}>
                      <select
                        className={`${inputClass} appearance-none cursor-pointer`}
                        {...register('service', { required: 'Please select a service' })}
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-surface2 text-muted">
                          Select a service...
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-surface2 text-text">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </InputField>

                    {/* Description */}
                    <InputField label="Project Description" error={errors.description?.message}>
                      <textarea
                        className={`${inputClass} resize-none`}
                        rows={4}
                        placeholder="Tell us about your project, timeline, and budget..."
                        {...register('description', {
                          required: 'Please describe your project',
                          minLength: { value: 20, message: 'Please write at least 20 characters' },
                        })}
                      />
                    </InputField>

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full mt-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
