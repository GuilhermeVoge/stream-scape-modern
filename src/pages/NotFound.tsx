
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-streaming-dark flex flex-col items-center justify-center text-white p-4">
      <AlertTriangle size={64} className="text-streaming-accent mb-6" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-xl mb-8">We can't find the page you're looking for.</p>
      <Button asChild className="bg-streaming-accent hover:bg-streaming-hover text-white">
        <Link to="/" className="flex items-center gap-2">
          <Home size={16} />
          Back to Homepage
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
