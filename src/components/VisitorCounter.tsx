import { useState, useEffect } from 'react';

export function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://api.countapi.xyz/hit/abhinav-portfolio/visits');
        const data = await response.json();
        setVisitorCount(data.value);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="flex items-center justify-center text-sm text-gray-500">
      {loading ? (
        <span>Loading visitor count...</span>
      ) : (
        <span>Visitors: {visitorCount?.toLocaleString() || '0'}</span>
      )}
    </div>
  );
}