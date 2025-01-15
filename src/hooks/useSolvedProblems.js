import { useState, useEffect } from 'react';

export function useSolvedProblems() {
  const [solvedProblems, setSolvedProblems] = useState(() => {
    const saved = localStorage.getItem('solvedProblems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('solvedProblems', JSON.stringify(solvedProblems));
  }, [solvedProblems]);

  const markAsSolved = (slug) => {
    setSolvedProblems((prev) => {
      if (!prev.includes(slug)) {
        return [...prev, slug];
      }
      return prev;
    });
  };

  const markAsUnsolved = (slug) => {
    setSolvedProblems((prev) => prev.filter(s => s !== slug));
  };

  const isSolved = (slug) => {
    return solvedProblems.includes(slug);
  };

  // Add helper methods for statistics
  const getSolvedCount = (problems) => {
    return problems.filter(p => isSolved(p.slug)).length;
  };

  const getProgress = (problems) => {
    if (!problems.length) return 0;
    return Math.round((getSolvedCount(problems) / problems.length) * 100);
  };

  return { 
    solvedProblems, 
    markAsSolved, 
    markAsUnsolved, 
    isSolved,
    getSolvedCount,
    getProgress
  };
} 