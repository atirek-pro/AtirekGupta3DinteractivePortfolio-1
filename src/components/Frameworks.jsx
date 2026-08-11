import { OrbitingCircles } from "./OrbittingCircles";

export function Frameworks() {
  const skills = [
    "AirflowLogo",
    "aws-icon",
    "azure",
    "claude-code",
    "cplusplus",
    "datascience",
    "Fastapi",
    "gcp",
    "gemma-color",
    "git",
    "github",
    "google-gemini",
    "google-tensorflow-icon",
    "Hugging-Face",
    "javascript",
    "Langchain",
    "Matplotlib",
    "Postgresql",
    "Python",
    "pytorch-icon",
    "react",
    "visualstudiocode",
  ];
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duraction-200 rounded-sm hover:scale-110" />
);
