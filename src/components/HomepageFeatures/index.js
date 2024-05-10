import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Web Development',
    Svg: require('@site/static/img/icon_web_development.svg').default,
    description: (
      <>Documentación preliminar del pre-bootcamp de Web Development</>
    ),
    route: '/docs/category/web-development',
  },
  {
    title: 'Data Science/Analytics',
    Svg: require('@site/static/img/icon_data_science.svg').default,
    description: (
      <>
        Documentación preliminar del pre-bootcamp de Data Science y Data
        Analytics
      </>
    ),
    route: '/docs/category/data',
  },
];

function Feature({ Svg, title, description, route }) {
  return (
    <div className={clsx('col col--6')}>
      <Link className="button button--secondary button--md" to={route}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
