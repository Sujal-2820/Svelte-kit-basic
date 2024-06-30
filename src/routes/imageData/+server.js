import { json } from '@sveltejs/kit';

export async function GET() {
  const images = [
    {
      alt: 'Cosmic timetraveler',
      src: '/images/carousel/cosmic-timetraveler-pYyOZ8q7AII-unsplash.webp',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
    },
    {
      alt: 'Cristina Gottardi',
      src: '/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp',
      title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
    },
    {
      alt: 'Johannes Plenio',
      src: '/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp',
      title: 'johannes-plenio-RwHv7LgeC7s-unsplash.com'
    },
    {
      alt: 'Jonatan Pie',
      src: '/images/carousel/jonatan-pie-3l3RwQdHRHg-unsplash.webp',
      title: 'jonatan-pie-3l3RwQdHRHg-unsplash.com'
    },
    {
      alt: 'Mark Harpur',
      src: '/images/carousel/mark-harpur-K2s_YE031CA-unsplash.webp',
      title: 'mark-harpur-K2s_YE031CA-unsplash'
    },
    {
      alt: 'Pietro De Grandi',
      src: '/images/carousel/pietro-de-grandi-T7K4aEPoGGk-unsplash.webp',
      title: 'pietro-de-grandi-T7K4aEPoGGk-unsplash'
    },
    {
      alt: 'Sergey Pesterev',
      src: '/images/carousel/sergey-pesterev-tMvuB9se2uQ-unsplash.webp',
      title: 'sergey-pesterev-tMvuB9se2uQ-unsplash'
    },
    {
      alt: 'Solo travel goals',
      src: '/images/carousel/solotravelgoals-7kLufxYoqWk-unsplash.webp',
      title: 'solotravelgoals-7kLufxYoqWk-unsplash'
    }
  ];

  return json(images);
}
