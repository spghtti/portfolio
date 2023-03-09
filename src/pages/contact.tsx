import { ReactElement, useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { PostPreview } from '../components/PostPreview';
import { BlogPost } from '../interfaces/BlogPost';

export function Contact() {
  return (
    <div>
      <Header />
      <div className=""></div>
      <div className="form-wrapper">
        <h1 className="form-headline">Contact</h1>
        <p>
          Have something you'd like to work on together? I'm open to new
          opportunities. Want to say hi? I'm open to saying hi, too.
        </p>
        <form
          className="contact-form"
          id="contact-form"
          action="https://formspree.io/f/xknekkqk"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-text-field"
            required
          />
          <input
            type="email"
            className="form-text-field"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="form-text-field"
            required
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
  );
}
