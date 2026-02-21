
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed Successfully!",
        description: "🚧 This feature isn't fully implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });
      setEmail('');
    }
  };

  return (
    <div className="bg-blue-600 rounded-xl p-8 md:p-12 text-center text-white shadow-lg">
      <div className="max-w-2xl mx-auto">
        <Mail className="mx-auto mb-4 opacity-80" size={48} />
        <h3 className="font-serif text-3xl font-bold mb-4">Stay Ahead of the Curve</h3>
        <p className="text-blue-100 mb-8 text-lg">
          Join 50,000+ professionals who receive our daily briefing. Expert analysis, breaking news, and exclusive insights delivered straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your professional email"
            className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
