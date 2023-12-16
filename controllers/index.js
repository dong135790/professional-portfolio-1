const router = require('express').Router();
const fs = require('fs');


router.get('/', (req, res) => {
  res.render('home-page');
})

router.get('/projects/:index', (req, res) => {
  fs.readFile('./data/projects.json', 'utf8', (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const parsedData = JSON.parse(data);
      const name = parsedData.projects[req.params.index].name;
      const description = parsedData.projects[req.params.index].description;
      const skills = parsedData.projects[req.params.index].skills;
      const methods = parsedData.projects[req.params.index].methods;
      const github = parsedData.projects[req.params.index].github;
      const url = parsedData.projects[req.params.index].url;
      const image = parsedData.projects[req.params.index].image;

      res.render('case-study', {name, description, skills, methods, github, url, image});
    }
  });
})

module.exports = router;