import { Layout } from 'shared/ui/layout';
import './style.scss';

const MainBanner: React.FC = () => {
  return (
    <section className="MainBanner">
      <Layout>
        <div className="MainBanner__content">
          <h1 className="MainBanner__title">MASTER DEMOLITION</h1>
          <p className="MainBanner__description">
            Предоставляем услуги по демонтажу зданий и сооружений в Москве,
            Московской области. 15 лет опыта работы позволяет нашим специалистам
            правильно определить как правильно произвести снос и демонтаж зданий
            - механизированным или ручным способом разборки объектов.
          </p>
          <button>Связаться с нами</button>
        </div>
      </Layout>
    </section>
  );
};

export default MainBanner;
