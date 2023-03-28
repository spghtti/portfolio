import { ReactElement, useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { PostPreview } from '../components/PostPreview';
import { BlogPost } from '../interfaces/BlogPost';

export function Contact() {
  return (
    <div>
      <Header />
      <div className="form-wrapper">
        <div className="contact-form">
          <h1 className="page-headline">Contact</h1>
          <p>
            Have something you'd like to work on together? I'm open to new
            opportunities. Have a question about something I've worked on? Let's
            chat.
          </p>
          <form
            className="input-form"
            id="contact-form"
            action="https://formspree.io/f/xknekkqk"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              minLength={3}
              className="form-text-field"
              required
            />
            <input
              type="email"
              className="form-text-field"
              minLength={3}
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="form-text-field"
              required
              minLength={3}
            ></textarea>
            <input
              id="sub"
              className="form-submit-button outline"
              type="submit"
              value="&#10140;"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
