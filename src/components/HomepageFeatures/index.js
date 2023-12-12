import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "JavaScript",
    Svg: require("@site/static/img/logo-javascript.svg").default,
    description: (
      <>
        Power up web development with dynamic JavaScript (JS). Add life to your
        projects, from simple scripts to powerful applications.
      </>
    ),
  },
  {
    title: "React",
    Svg: require("@site/static/img/react-2.svg").default,
    description: <>Transform UIs with React in 13 Days!</>,
  },
  {
    title: "TypeScript",
    Svg: require("@site/static/img/typescript.svg").default,
    description: (
      <>
        Boost your code with TypeScript (TS). Ensure robust, error-free projects
        with structured and scalable development.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
