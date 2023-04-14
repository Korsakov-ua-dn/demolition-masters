import { PopupsManager } from 'features/popup';
import { Header } from 'widgets/header';
import { MainBanner } from 'widgets/main-banner';
import { OurProjects } from 'widgets/our-projects/ui';
import { Calculator } from 'widgets/calculator';
import { Footer } from 'widgets/footer';

import { withProviders } from './providers';

import './index.scss';

export const App = withProviders(() => {
  return (
    <main>
      <Header />
      <MainBanner />
      <OurProjects />
      <Calculator />
      <Footer />

      <PopupsManager />
    </main>
  );
});
