const projects = [
    {
      title: 'Project 1',
      imgSrc: '/path-to-image.jpg',
      liveLink: 'https://live-app-link.com',
      repoLink: 'https://github.com/repo-link',
    },
    // Add 5 more projects here...
  ];
  
  const Portfolio = () => {
    return (
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
          {projects.map(project => (
            <div key={project.title} className="project-item">
              <img src={project.imgSrc} alt={project.title} />
              <h3>{project.title}</h3>
              <a href={project.liveLink}>Live App</a>
              <a href={project.repoLink}>GitHub</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  