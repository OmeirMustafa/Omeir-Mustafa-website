"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NewsletterFormProps {
  className?: string;
  variant?: 'inline' | 'stacked';
  placeholder?: string;
  buttonText?: string;
}

export function NewsletterForm({ 
  className, 
  variant = 'inline',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe'
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call - replace with actual newsletter integration
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setEmail('');
    
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        variant === 'inline' && "flex flex-col sm:flex-row gap-3",
        variant === 'stacked' && "flex flex-col gap-3",
        className
      )}
      noValidate
    >
      <div className="relative flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          placeholder={placeholder}
          required
          aria-label="Email address"
          className={cn(
            "w-full h-12 px-5 text-sm bg-white/5 border rounded-full text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/20 focus:bg-white/[0.07] transition-all duration-300",
            status === 'error' ? "border-red-500/50" : "border-white/10"
          )}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={cn(
          "h-12 px-6 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px]",
          status === 'success'
            ? "bg-white text-black"
            : "bg-white text-black hover:bg-zinc-200"
        )}
      >
        <AnimatePresence mode="wait">
          {status === 'loading' ? (
            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Loader2 size={16} className="animate-spin" />
            </motion.span>
          ) : status === 'success' ? (
            <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <Check size={16} /> Subscribed
            </motion.span>
          ) : (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              {buttonText} <ArrowRight size={14} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {status === 'error' && (
        <p className="text-xs text-red-400 mt-1 sm:col-span-full">{errorMessage}</p>
      )}
    </form>
  );
}
