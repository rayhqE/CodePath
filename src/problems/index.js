import { jsProblems } from "./paths/js";
import { htmlProblems } from "./paths/html";
import { cssProblems } from "./paths/css";
import { nestProblems } from "./paths/nest";
import { nodeProblems } from "./paths/node";
import { expressProblems } from "./paths/express";
import { reactProblems } from "./paths/react";
import { reactAdvancedProblems } from "./paths/react-advanced";
import { reactStateManagementProblems } from "./paths/react-state-management";
import { reactTestingProblems } from "./paths/react-testing";
import { learningPath } from "../curriculum/learning-path";
import { projectProblems } from "./paths/project";

// Helper function to get topic order from learning path
const getTopicOrder = (technology) => {
  const techPath = learningPath[technology];
  if (!techPath) return {};
  
  const topicOrder = {};
  let order = 0;
  
  techPath.topics.forEach(topic => {
    topic.subjects.forEach(subject => {
      topicOrder[subject] = order++;
    });
  });
  
  return topicOrder;
};

// Helper function to get technology order from learning path
const getTechnologyOrder = () => {
  const technologies = Object.keys(learningPath);
  return technologies.reduce((acc, tech, index) => {
    acc[tech] = index;
    return acc;
  }, {});
};

// Combine all problems
const unsortedProblems = [
  ...jsProblems,
  ...htmlProblems,
  ...cssProblems,
  ...nestProblems,
  ...nodeProblems,
  ...expressProblems,
  ...reactProblems,
  ...reactAdvancedProblems,
  ...reactStateManagementProblems,
  ...reactTestingProblems,
  ...projectProblems,
];

// Sort problems based on technology, topic, and add IDs
export const problems = unsortedProblems
  .sort((a, b) => {
    // Get ordering maps
    const techOrder = getTechnologyOrder();
    const aTopicOrder = getTopicOrder(a.category);
    const bTopicOrder = getTopicOrder(b.category);

    // Compare technology order
    if (techOrder[a.category] !== techOrder[b.category]) {
      return techOrder[a.category] - techOrder[b.category];
    }

    // Compare topic order
    if (aTopicOrder[a.topic] !== bTopicOrder[b.topic]) {
      return aTopicOrder[a.topic] - bTopicOrder[b.topic];
    }

    // If same topic, sort by difficulty
    const difficultyOrder = { 
      'beginner': 0, 
      'intermediate': 1, 
      'advanced': 2 
    };
    return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
  })
  .map((problem, index) => ({
    ...problem,
    id: index + 1
  }));
