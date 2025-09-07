// Utility functions for managing first visit state

export const resetFirstVisit = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('portfolio-visited');
    console.log('First visit state reset. Refresh the page to see the Namaste animation again.');
  }
};

export const hasVisitedBefore = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('portfolio-visited') === 'true';
  }
  return false;
};

// For development/testing - you can call resetFirstVisit() in browser console
// to test the animation again
