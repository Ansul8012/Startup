import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* You can add a sidebar or navbar here if needed */}
      {children}
    </div>
  );
}
