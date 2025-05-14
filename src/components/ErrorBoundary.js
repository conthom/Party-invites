'use client';

import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black p-8 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-xl mb-4">Something went wrong loading this section..</h2>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}