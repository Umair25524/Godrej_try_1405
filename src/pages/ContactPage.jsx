import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Navigation from '../components/Navigation.jsx'
import PageHeader from '../components/PageHeader.jsx'
import "../styles/contact.css";

const contactDetails = [
  { title: 'Office Number / Reception', value: '(033)6600-6600' },
  { title: 'Toll Free No For - Quote / order', value: '1800 890 2868' },
  { title: 'Support', value: 'info@godrej.com' },
  { title: 'HR', value: 'recruitment@godrej.com' },
  { title: 'Address', value: 'Godrej Industries Ltd., Vikhroli, Mumbai, Maharashtra 400079, INDIA.' },
  { title: 'Working Days', value: 'Monday To Saturday' },
  { title: 'Office Hours', value: '10.30 AM - 6.30 PM' },
]

const SERVICE_ID = 'your_emailjs_service_id' // REPLACE
const TEMPLATE_ID = 'your_emailjs_template_id' // REPLACE
const PUBLIC_KEY = 'your_emailjs_public_key' // REPLACE

export default function ContactPage() {
  const [form, setForm] = useState({ email: '', name: '', mobile: '', remarks: '' })
  const [status, setStatus] = useState({ sending: false, type: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status.sending) return
    
    const payload = {
      email: form.email.trim(),
      name: form.name.trim(),
      mobile: form.mobile.trim(),
      remarks: form.remarks.trim(),
    }
    
    if (!payload.email || !payload.name || !payload.mobile || !payload.remarks) {
      setStatus({ sending: false, type: 'error', message: 'Please fill all fields.' })
      return
    }
    
    setStatus({ sending: true, type: '', message: '' })
    
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: payload.name,
          name: payload.name,
          from_email: payload.email,
          email: payload.email,
          mobile: payload.mobile,
          phone: payload.mobile,
          message: payload.remarks,
          remarks: payload.remarks,
        },
        PUBLIC_KEY
      )
      
      setStatus({ sending: false, type: 'success', message: 'Thank you. Your details were sent successfully.' })
      setForm({ email: '', name: '', mobile: '', remarks: '' })
    } catch {
      setStatus({ sending: false, type: 'error', message: 'Unable to send right now. Please try again.' })
    }
  }

  return (
    <main className="screen about-screen contact-screen title-simple-page">
      <section className="about-panel contact-panel">
        <PageHeader title="CONTACT US" />
        
        <section className="contact-content">
          <article className="contact-info-card">
            <h2>Head Office</h2>
            <div className="contact-detail-list">
              {contactDetails.map((d) => (
                <section className="contact-detail" key={d.title}>
                  <h3>{d.title}</h3>
                  <p>{d.value}</p>
                </section>
              ))}
            </div>
          </article>

          <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
            <h2>Let's Get In Touch</h2>
            <div className="contact-form-grid">
              <input type="email" name="email" placeholder="Email ID" value={form.email} onChange={handleChange} autoComplete="off" />
              <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} autoComplete="off" />
              <input type="tel" name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} inputMode="tel" autoComplete="off" />
              <textarea name="remarks" placeholder="Date of Visit & Remarks" value={form.remarks} onChange={handleChange} />
            </div>
            <button type="submit" disabled={status.sending}>
              {status.sending ? 'Sending...' : 'Submit'}
            </button>
            {status.message && (
              <p className={`contact-status ${status.type}`} role="status">
                {status.message}
              </p>
            )}
          </form>
        </section>

        <Navigation />
      </section>
    </main>
  )
}