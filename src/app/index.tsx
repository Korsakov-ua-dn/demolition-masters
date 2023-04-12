import { Header } from 'widgets/header';
import { MainBanner } from 'widgets/main-banner';

import { PopupsManager } from 'features/popup';
import { Logo } from 'features/logo';

import { withProviders } from './providers';

import './index.scss';

export const App = withProviders(() => {
  return (
    <>
      <Header>
        <Logo />
      </Header>

      <MainBanner />

      <PopupsManager />
    </>
  );
});
