import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "JavaScript Explained",
    linkTo: "/docs/category/arvind-explains-javascript--",
    imgSrc: require("@site/static/img/3.png").default,
    description: (
      <>
        Learn JavaScript from zero to hero in three epic seasons (coming soon on
        YoutTube).
      </>
    ),
  },
  {
    title: "React Explained",
    linkTo: "/docs/category/arvind-explains-react--%EF%B8%8F",
    imgSrc: require("@site/static/img/4.png").default,
    description: <>Explore the power of React (coming soon on YoutTube).</>,
  },
  {
    title: "TypeScript Explained",
    linkTo: "/docs/intro",
    imgSrc: require("@site/static/img/5.png").default,
    description: (
      <>Make your code robust with TypeScript (coming soon on YoutTube).</>
    ),
  },
];

function Feature({ imgSrc, title, description, linkTo }) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={linkTo}>
        <div className="text--center">
          <img src={imgSrc} alt={title} className={styles.featureImg} />
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
