import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, Clock, Mail, MapPin, Phone } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'

const contactDetails = [
  { icon: Mail, label: 'Email us', value: 'infocodefair@gmail.com' },
  { icon: Phone, label: 'Call us', value: '+918013559045' },
  { icon: MapPin, label: 'Location', value: 'Remote-first · Worldwide' },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours' },
]

const serviceOptions = [
  'AI-Powered Business Website',
  'WordPress Website',
  'Shopify Website',
  'Mobile App (iOS & Android)',
  'Web App / SaaS MVP',
  'UI/UX Design',
  'Graphic Design',
  'AI Chatbot / Agent',
  'SEO & Content Strategy',
  'Other / Not sure yet',
]

const adminEmail = 'infocodefair@gmail.com'
const contactEndpoint = `https://formsubmit.co/ajax/${adminEmail}`

const InputField = ({ label, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="font-body text-xs font-semibold uppercase text-slate-400">{label}</label>
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

const inputClass = 'w-full rounded-lg border border-cyan-300/12 bg-white/[0.04] px-4 py-3 font-body text-sm text-white placeholder:text-slate-500 transition-colors duration-200 focus:border-cyan-300/50 focus:bg-cyan-300/[0.06] focus:outline-none'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    setSubmitError('')

    const formData = new FormData()
    formData.append('_subject', `New CodeFair query from ${data.firstName} ${data.lastName}`)
    formData.append('_replyto', data.email)
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')
    formData.append('First name', data.firstName)
    formData.append('Last name', data.lastName)
    formData.append('Email', data.email)
    formData.append('Service', data.service)
    formData.append('Project description', data.description)

    const response = await fetch(contactEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Unable to send message')
    }

    reset()
    setSubmitted(true)
  }

  const handleFormSubmit = handleSubmit(async (data) => {
    try {
      await onSubmit(data)
    } catch (error) {
      console.error(error)
      setSubmitError('Sorry, your message could not be sent. Please email us directly.')
    }
  })

  return (
    <section id="contact" className="section-shell bg-[#050b1a]">
      <div className="absolute inset-0 cyber-grid opacity-35" aria-hidden="true" />
      <div className="section-inner">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let's build together
            </h2>
            <p className="mx-auto mt-5 max-w-md font-body text-base leading-8 text-slate-400">
              Tell us about your project. We'll get back to you within 24 hours with a plan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Ready when you are
                </h3>
                <p className="mt-3 max-w-sm font-body text-sm leading-7 text-slate-400">
                  Whether you have a fully scoped project or just an idea on a napkin — we'd love to hear from you. No commitment required.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <div key={detail.label} className="glass-card flex items-center gap-4 rounded-lg p-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-100">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="font-body text-xs text-slate-500">{detail.label}</p>
                        <p className="font-body text-sm text-white">{detail.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="glass-panel rounded-lg p-7 lg:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                    >
                      <CheckCircle size={56} className="text-cyan-200" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="max-w-xs font-body text-sm text-slate-400">
                      Thanks for reaching out. We'll be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

                    <InputField label="Service" error={errors.service?.message}>
                      <select
                        className={`${inputClass} cursor-pointer appearance-none`}
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

                    <AnimatePresence>
                      {submitError && (
                        <motion.p
                          className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 font-body text-sm text-red-200"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          role="alert"
                        >
                          {submitError}{' '}
                          <a className="font-semibold underline" href={`mailto:${adminEmail}`}>
                            {adminEmail}
                          </a>
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="mt-2 w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
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
