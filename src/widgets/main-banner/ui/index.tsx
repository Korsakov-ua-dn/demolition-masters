import { useMediaQuery } from '@mui/material';

import { Section } from 'shared/ui/section';
import { Layout } from 'shared/ui/layout';
import { Button } from 'shared/ui/button';

import './style.scss';

const MainBanner: React.FC = () => {
  const matches = useMediaQuery('(max-width:767px)');

  const description = matches
    ? 'Демонтаж промышленных сооружений.'
    : `Предоставляем услуги по демонтажу промышленных сооружений, 
      высотных зданий и&nbsp;металоконструкций.<br/>
      15 лет опыта разборки объектов.`;

  return (
    <Section className="MainBanner">
      <div className="MainBanner__overlay" />
      <Layout>
        <div className="MainBanner__content">
          <h1 className="MainBanner__title">MASTER DEMOLITION</h1>
          <p
            className="MainBanner__description"
            dangerouslySetInnerHTML={{
              __html: `${description}`,
            }}
          ></p>
          <Button>Связаться с нами</Button>
        </div>
      </Layout>
    </Section>
  );
};

export default MainBanner;
