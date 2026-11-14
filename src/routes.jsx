import React from 'react';
import { RootLayout } from './components/templates';
import {
  HomePage,
  PortfolioPage,
  ArtworkDetailPage,
  ExhibitionsPage,
  AboutPage,
  ContactPage,
  NotFoundPage,
} from './pages';
import { artworks } from './data/dummyData.js';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'portfolio/:slug',
        element: <ArtworkDetailPage />,
        getStaticPaths: () => artworks.map((artwork) => `/portfolio/${artwork.slug}`),
      },
      {
        path: 'exhibitions',
        element: <ExhibitionsPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
