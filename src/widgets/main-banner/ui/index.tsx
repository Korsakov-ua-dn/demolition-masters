import { Layout } from 'shared/ui/layout';
import './style.scss';
import { useMediaQuery } from '@mui/material';
import { Button } from 'shared/ui/button';

const MainBanner: React.FC = () => {
  const matches = useMediaQuery('(max-width:767px)');

  const description = matches
    ? 'Демонтаж промышленных сооружений.'
    : `Предоставляем услуги по демонтажу промышленных сооружений, 
      высотных зданий и металоконструкций. 15 лет опыта разборки объектов.`;

  return (
    <section className="MainBanner">
      <div className="MainBanner__overlay" />
      <Layout>
        <div className="MainBanner__content">
          <h1 className="MainBanner__title">MASTER DEMOLITION</h1>
          <p className="MainBanner__description">{description}</p>
          <Button>Связаться с нами</Button>
        </div>
      </Layout>
    </section>
  );
};

export default MainBanner;
