import React from 'react';
import { Layout, Music, BookOpen, Map, Users } from 'lucide-react';

export const getQuestionIcons = () => [
  <Layout className="w-6 h-6 mb-4 text-stone-600" strokeWidth={1.5} key="layout" />,
  <Music className="w-6 h-6 mb-4 text-stone-600" strokeWidth={1.5} key="music" />,
  <BookOpen className="w-6 h-6 mb-4 text-stone-600" strokeWidth={1.5} key="book" />,
  <Map className="w-6 h-6 mb-4 text-stone-600" strokeWidth={1.5} key="map" />,
  <Users className="w-6 h-6 mb-4 text-stone-600" strokeWidth={1.5} key="users" />
];
