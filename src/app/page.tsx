'use client';

import React from 'react';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      {/* Opens a modal for wallet connection */}
      <DynamicWidget variant="modal" />
      <JWTDisplay />
    </div>
  );
}

function JWTDisplay() {
  const [jwt, setJwt] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Retrieve the JWT from local storage on mount
    const token = localStorage.getItem('dynamic_authentication_token');
    setJwt(token);
  }, []);

  return jwt ? (
    <div style={{ marginTop: '1rem' }}>
      <strong>JWT:</strong>
      <pre>{jwt}</pre>
    </div>
  ) : null;
}
