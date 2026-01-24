'use client';

import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

type SupportTopic = 'campaign' | 'payment' | 'account' | 'refund';

export function SupportAssistance() {
  const [selectedTopics, setSelectedTopics] = useState<SupportTopic[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleTopicClick = (topic: SupportTopic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support form submitted:', formData);
    console.log('Selected topics:', selectedTopics);
    alert('Message sent successfully!');
  };

  return (
    <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '40px 24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#111',
          marginBottom: '12px',
          lineHeight: '1.1'
        }}>
          Support & Assistance
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#3b4858',
          margin: 0,
          lineHeight: '1.5'
        }}>
          Need help with your campaigns, payments, or creator partnerships? We're here to support you.
        </p>
      </div>

      {/* Contact Us Card */}
      <div style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '24px 16px 16px',
        boxShadow: '0px 2px 13px 0px rgba(96,99,117,0.15)',
        marginBottom: '24px'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#111',
          marginBottom: '24px',
          lineHeight: '1.1'
        }}>
          Contact Us
        </h2>

        <div style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin style={{ width: '24px', height: '24px', color: '#6c78ff' }} />
            <span style={{ fontSize: '16px', fontWeight: 500, color: '#111' }}>
              123 Market St, San Francisco, CA 94103
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail style={{ width: '24px', height: '24px', color: '#6c78ff' }} />
            <span style={{ fontSize: '16px', fontWeight: 500, color: '#111' }}>
              support@billedviews.com
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail style={{ width: '24px', height: '24px', color: '#6c78ff' }} />
            <span style={{ fontSize: '16px', fontWeight: 500, color: '#111' }}>
              sales@billedviews.com
            </span>
          </div>
        </div>
      </div>

      {/* Support Form Card */}
      <div style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '24px 16px 16px',
        boxShadow: '0px 2px 13px 0px rgba(96,99,117,0.15)'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#111',
          marginBottom: '32px',
          lineHeight: '1.1'
        }}>
          How can we help you?
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', gap: '2px', marginBottom: '4px' }}>
              <span style={{ color: '#494b51', fontSize: '14px' }}>Name</span>
              <span style={{ color: '#fc1a1a' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '12px',
                border: '1px solid #d9e2eb',
                padding: '0 12px',
                fontSize: '15px',
                outline: 'none'
              }}
            />
          </div>

          {/* Email Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', gap: '2px', marginBottom: '4px' }}>
              <span style={{ color: '#494b51', fontSize: '14px' }}>Email</span>
              <span style={{ color: '#fc1a1a' }}>*</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '12px',
                border: '1px solid #d9e2eb',
                padding: '0 12px',
                fontSize: '15px',
                outline: 'none'
              }}
            />
          </div>

          {/* Topic Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', gap: '2px', marginBottom: '4px' }}>
              <span style={{ color: '#494b51', fontSize: '14px' }}>Topic</span>
              <span style={{ color: '#fc1a1a' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your topic"
              required
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '12px',
                border: '1px solid #d9e2eb',
                padding: '0 12px',
                fontSize: '15px',
                outline: 'none'
              }}
            />
          </div>

          {/* Common Support Topics */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{
              color: '#494b51',
              fontSize: '14px',
              marginBottom: '12px'
            }}>
              or choose common support topics
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '8px'
            }}>
              <button
                type="button"
                onClick={() => handleTopicClick('campaign')}
                style={{
                  height: '52px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: selectedTopics.includes('campaign') ? 500 : 400,
                  background: selectedTopics.includes('campaign') ? '#dde1fa' : '#fff',
                  border: selectedTopics.includes('campaign') ? '1px solid #6c78ff' : '1px solid #d9e2eb',
                  color: '#111',
                  cursor: 'pointer'
                }}
              >
                Campaign issues
              </button>
              <button
                type="button"
                onClick={() => handleTopicClick('payment')}
                style={{
                  height: '52px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: selectedTopics.includes('payment') ? 500 : 400,
                  background: selectedTopics.includes('payment') ? '#dde1fa' : '#fff',
                  border: selectedTopics.includes('payment') ? '1px solid #6c78ff' : '1px solid #d9e2eb',
                  color: '#111',
                  cursor: 'pointer'
                }}
              >
                Payment troubleshooting
              </button>
              <button
                type="button"
                onClick={() => handleTopicClick('account')}
                style={{
                  height: '52px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: selectedTopics.includes('account') ? 500 : 400,
                  background: selectedTopics.includes('account') ? '#dde1fa' : '#fff',
                  border: selectedTopics.includes('account') ? '1px solid #6c78ff' : '1px solid #d9e2eb',
                  color: '#111',
                  cursor: 'pointer'
                }}
              >
                Account login or email update help
              </button>
              <button
                type="button"
                onClick={() => handleTopicClick('refund')}
                style={{
                  height: '52px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: selectedTopics.includes('refund') ? 500 : 400,
                  background: selectedTopics.includes('refund') ? '#dde1fa' : '#fff',
                  border: selectedTopics.includes('refund') ? '1px solid #6c78ff' : '1px solid #d9e2eb',
                  color: '#111',
                  cursor: 'pointer'
                }}
              >
                Requesting a refund or credit adjustment
              </button>
            </div>
          </div>

          {/* Message TextArea */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'flex', gap: '2px', marginBottom: '4px' }}>
              <span style={{ color: '#494b51', fontSize: '14px' }}>Message</span>
              <span style={{ color: '#fc1a1a' }}>*</span>
            </label>
            <textarea
              placeholder="Enter your message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: '100%',
                borderRadius: '12px',
                border: '1px solid #d9e2eb',
                padding: '12px',
                fontSize: '15px',
                outline: 'none',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              height: '52px',
              borderRadius: '12px',
              background: '#6c78ff',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}