import localFont from 'next/font/local';

export const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pp-neue-montreal',
  display: 'swap',
});
