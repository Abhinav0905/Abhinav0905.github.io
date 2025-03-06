import { useState, useEffect } from 'react';

export function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Using a more specific namespace for this portfolio
        const response = await fetch('https://api.countapi.xyz/hit/abhinav0905-portfolio/visits');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        if (data && typeof data.value === 'number') {
          setVisitorCount(data.value);
          // Also store in localStorage as a fallback
          localStorage.setItem('portfolioVisitorCount', data.value.toString());
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Try to get from localStorage as fallback
        const storedCount = localStorage.getItem('portfolioVisitorCount');
        if (storedCount) {
          setVisitorCount(parseInt(storedCount, 10));
        } else {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchVisitorCount();
  }, []);
  
  // Increment local count on component mount (even if API fails)
  useEffect(() => {
    const incrementLocalCount = () => {
      const localCount = localStorage.getItem('localVisitorCount');
      const newCount = localCount ? parseInt(localCount, 10) + 1 : 1;
      localStorage.setItem('localVisitorCount', newCount.toString());
    };
    
    incrementLocalCount();
  }, []);
  
  const displayCount = visitorCount ?? 
                       parseInt(localStorage.getItem('localVisitorCount') || '0', 10);
  
  return (
    <div className="flex items-center justify-center text-sm text-gray-500">
      {loading ? (
        <span>Loading visitor count...</span>
      ) : error ? (
        <span>Visitors: {displayCount.toLocaleString()}</span>
      ) : (
        <span>Visitors: {displayCount.toLocaleString()}</span>
      )}
    </div>
  );
}