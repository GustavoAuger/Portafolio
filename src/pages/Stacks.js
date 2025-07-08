import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';

const Stacks = () => {
  const stackItems = [
    {
      title: "DevOps",
      technologies: [
        "GitHub Actions", "GitLab CI", "Terraform", "Docker", "Jenkins",
        "Kubernetes", "Helm", "Prometheus", "Grafana", "Snyk"
      ],
      icon: "fas fa-cogs"
    },
    {
      title: "Development",
      technologies: [
        {
          title: "Backend",
          technologies: [
            "Python (Django, Flask, FastAPI)", "Java (Spring Boot)",
            "PHP (Laravel)", "C# (.NET Core)"
          ]
        },
        {
          title: "Frontend",
          technologies: [
            "HTML , CSS , Sass", "JavaScript (React, Vue.js, Angular)", "TypeScript"
          ]
        }
      ],
      icon: "fas fa-code"
    },
    {
      title: "Bases de Datos",
      technologies: [
        "Oracle DB (Query & PL/SQL)", "PostgreSQL (Query & PL/pgSQL)",
        "SQL Server (Query & T-SQL)", "MySQL",
        "AWS DynamoDB", "Aurora DB", "MongoDB"
      ],
      icon: "fas fa-database"
    },
    {
      title: "Cloud",
      technologies: [
        "AWS", "Oracle Cloud", "Azure"
      ],
      icon: "fas fa-cloud"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="stacks-page"
    >
      <div className="container stacks-container">
        <div className="row justify-content-center">
          <div className="col-11 ">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="display-4 text-center mb-5"
            >
              Stack Tecnológico
            </motion.h1>

            <div className="stack-container">
              {stackItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="stack-card mb-5"
                >
                  <div className="stack-header">
                    <div className="stack-icon">
                      <i className={`${item.icon} fa-2x`} />
                    </div>
                    <h3 className="stack-title">{item.title}</h3>
                  </div>
                  <div className="stack-content">
                    {item.technologies.map((tech, techIndex) => (
                      <div key={techIndex}>
                        {typeof tech === 'object' ? (
                          <div>
                            <h4 className="stack-subtitle">{tech.title}</h4>
                            <ul className="stack-list">
                              {tech.technologies.map((subTech, subTechIndex) => (
                                <li key={subTechIndex} className="stack-item">
                                  <span className="stack-item-dot"></span>
                                  {subTech}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <ul className="stack-list">
                            <li className="stack-item">
                              <span className="stack-item-dot"></span>
                              {tech}
                            </li>
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SocialLinks className="social-links" />
    </motion.div>
  );
};

export default Stacks;
