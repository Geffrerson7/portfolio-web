import {
  DjangoIcon,
  ExpressjsIcon,
  PythonIcon,
  FlaskIcon,
  FastApiIcon,
  JavaScriptIcon,
  NodejsIcon,
  PostgreSqlIcon,
  MySQLIcon,
  NextjsIcon,
  ReactIcon,
  DockerIcon,
} from "@/components/Icons";
import styles from "@/styles/tech-ring.module.css";

const techLogos = [
  { Component: PythonIcon, alt: "Python" },
  { Component: DjangoIcon, alt: "Django" },
  { Component: FastApiIcon, alt: "FastAPI" },
  { Component: FlaskIcon, alt: "Flask" },
  { Component: JavaScriptIcon, alt: "JavaScript" },
  { Component: ExpressjsIcon, alt: "Express.js" },
  { Component: NodejsIcon, alt: "Node.js" },
  { Component: PostgreSqlIcon, alt: "PostgreSQL" },
  { Component: MySQLIcon, alt: "MySQL" },
  { Component: NextjsIcon, alt: "Next.js" },
  { Component: ReactIcon, alt: "React" },
  { Component: DockerIcon, alt: "Docker" },
];

const TechRing = () => {
  return (
    <div className={styles.circle}>
      {techLogos.map((logo, index) => (
        <span key={index} className={`${styles.span} flex items-center justify-center`} style={{ "--i": index + 1 }}>
          {/* Círculo blanco detrás del logo */}
          <div className="absolute bg-white rounded-full w-[110px] h-[110px] xs:w-[27.5px] xs:h-[27.5px] sm:w-[54px] sm:h-[54px] md:w-[82.5px] md:h-[82.5px]" />
          {/* Logo */}
          <logo.Component className="relative w-[60px] h-[60px] xs:w-[15px] xs:h-[15px] sm:w-[30px] sm:h-[30px] md:w-[45px] md:h-[45px]" />
        </span>
      ))}
    </div>
  );
};

export default TechRing;
