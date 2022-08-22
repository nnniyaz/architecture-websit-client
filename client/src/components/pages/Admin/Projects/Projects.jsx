import { useEffect } from "react";
import { useState } from "react";
import axios from "../../../../api/axios";
import ProjectsRow from "../ProjectsRow/ProjectsRow";
import s from "./Projects.module.scss";
import Card from "./card/Card";

const sorting = [
  { title: 'Все', type: 'all' },
  { title: 'Последнии', type: 'last' },
  { title: 'Старые', type: 'old' }
]

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Canggu White House",
      description:
        "Our intent is to be unclassifiable in a cluttered agency landscape.",
      year: 2022,
      location: "Bali",
      type: "Residential",
    },
    {
      id: 2,
      name: "Canggu White House",
      description:
        "Our intent is to be unclassifiable in a cluttered agency landscape.",
      year: 2020,
      location: "Bali",
      type: "Residential",
    },
    {
      id: 3,
      name: "Canggu White House",
      description:
        "Our intent is to be unclassifiable in a cluttered agency landscape.",
      year: 2021,
      location: "Bali",
      type: "Residential",
    },
    {
      id: 4,
      name: "Canggu White House",
      description:
        "Our intent is to be unclassifiable in a cluttered agency landscape.",
      year: 2017,
      location: "Bali",
      type: "Residential",
    },
  ]);

  // useEffect(() => {
  //     getProjects()
  // }, []);

  // const getProjects = async () => {
  //     const response = await axios.get('/api/project/projects');
  //     setProjects(response.data);
  // }

  const [typeSorted, setTypeSorted] = useState('all')
  const [sortedProjects, setSortedProjects] = useState(projects);

  const sortProjects = (type) => {
    let allProjects = [...projects]
    switch (type) {
      case "last": allProjects.sort((a, b) => a.year - b.year).reverse(); break;
      case "old": allProjects.sort((a, b) => a.year - b.year); break;
      default: setSortedProjects(allProjects)
    }
    setSortedProjects(allProjects)
    setTypeSorted(type)
  };

  return (
    <div className={s.main}>
      <div className={s.container}>
        <h2>Проекты</h2>

        <div className={s.filter}>
          {sorting.map(i => (
            <span
              key={i.title}
              onClick={() => sortProjects(i.type)}
              className={typeSorted === i.type ? s.active : ''}
            >
              {i.title}
            </span>
          ))}
        </div>

        <div className={s.wrapper}>
          <div className={s.titles}>
            <span className={s.name}>Название проекта</span>
            <span className={s.type}>Тип</span>
            <span className={s.actions}>Действия</span>
          </div>

          <div className={s.projects}>
            {sortedProjects.map((i) => (
              <Card key={i.id} data={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
