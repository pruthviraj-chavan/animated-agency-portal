
import { useEffect } from 'react';

export function JotformChatbot() {
  useEffect(() => {
    // Create and append the script element
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/01977c9728aa7bd786fd0916cebd6b1ca44e/embed.js?skipWelcome=1&maximizable=1';
    script.async = true;
    
    // Append to head or body
    document.head.appendChild(script);
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}
