'use client';

import React, { ReactNode } from 'react';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';

interface DynamicProviderProps {
  children: ReactNode;
}

export function DynamicProvider({ children }: DynamicProviderProps) {
  const settings = {
    // Reads the Dynamic environment ID from your .env file (must be prefixed with NEXT_PUBLIC_)
    environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID as string,
    walletConnectors: [EthereumWalletConnectors],
    events: {
      onAuthSuccess: async (params: { isAuthenticated: boolean; user: unknown; jwt?: string }) => {
        console.log('Auth Success:', params.user);
        if (params.isAuthenticated) {
          // Save the user data locally
          localStorage.setItem('userAuth', JSON.stringify(params.user));
          // Retrieve the JWT from the event or fallback to local storage
          const token = params.jwt || localStorage.getItem('dynamic_authentication_token');
          if (token) {
            try {
              // Use NEXT_PUBLIC_API_URL if provided, otherwise default to a relative URL
              const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
              const response = await fetch(`${apiUrl}/api/auth`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ user: params.user }),
              });
              const result = await response.json();
              console.log('Backend response:', result);
            } catch (err) {
              console.error('Error sending auth data to backend:', err);
            }
          } else {
            console.warn('JWT token not found');
          }
        }
      },
      onLogout: () => {
        // Clear local authentication data on logout
        localStorage.removeItem('userAuth');
      },
    },
  };

  return (
    <DynamicContextProvider settings={settings}>
      {children}
    </DynamicContextProvider>
  );
}
