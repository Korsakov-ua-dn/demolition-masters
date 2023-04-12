import { Header } from 'widgets/header';
import { MainBanner } from 'widgets/main-banner';
import { OurProjects } from 'widgets/our-projects/ui';

import { PopupsManager } from 'features/popup';

import { withProviders } from './providers';

import './index.scss';

export const App = withProviders(() => {
  return (
    <>
      <Header />
      <MainBanner />
      <OurProjects />
      <PopupsManager />
    </>
  );
});
