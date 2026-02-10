import type { Project } from '@/shared/types';

export const projects: Project[] = [
  {
    title: 'Neko Cinema',
    category: 'Full Stack',
    systemId: 'SYSTEM 01',
    description: 'High-concurrency ticket booking platform. Implements complex seat reservation logic with WebSocket-driven real-time availability updates.',
    stack: ['Ruby on Rails', 'Redis', 'ActionCable', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Shopee Clone',
    category: 'Backend API',
    systemId: 'SYSTEM 02',
    description: 'Scalable e-commerce backend engine. Designed for multi-vendor inventory management, intricate shopping cart logic, and fuzzy search optimization.',
    stack: ['Ruby on Rails', 'ElasticSearch', 'Docker', 'JWT'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Twitter-like API',
    category: 'Social Graph',
    systemId: 'SYSTEM 03',
    description: 'Robust social media backend. Focuses on relationship modeling (follower/following), complex feed generation algorithms, and efficient media handling via AWS.',
    stack: ['GraphQL', 'RSpec', 'AWS S3', 'ActiveRecord'],
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800&auto=format&fit=crop'
  }
];
