import { motion, useMotionValue, useSpring } from "motion/react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { damp } from "three/src/math/MathUtils.js";
import { useState } from "react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springx = useSpring(x, { damping: 10, stiffness: 50 });
  const springy = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selective Projects</h2>
      <div className="bg-linear-to-r from-transparent via-netural-700 to-transparent mt-12 h-px w-full ">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>
      {preview && (
        <motion.img
          src={preview}
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          style={{ x: springx, y: springy }}
        />
      )}
    </section>
  );
};

export default Projects;
