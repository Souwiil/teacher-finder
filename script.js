const app = {
    containerEl: document.getElementById('app'),
  
    state: {
      teachers: [
        {
          name: 'Loris',
          language: 'PHP',
          speciality: 'WordPress',
        },
        {
          name: 'Jean',
          language: 'JavaScript',
          speciality: 'Data',
        },
        {
          name: 'Jean-Christophe',
          language: 'PHP',
          speciality: 'Symfony',
        },
        {
          name: 'Jean-Philippe',
          language: 'PHP',
          speciality: 'Symfony',
        },
        {
          name: 'Julien',
          language: 'PHP',
          speciality: 'React',
        },
        {
          name: 'Vincent',
          language: 'JavaScript',
          speciality: 'React',
        },
        {
          name: 'Luko',
          language: 'JavaScript',
          speciality: 'React',
        },
        {
          name: 'Linus Torvalds',
          language: 'Linux',
          speciality: 'Data'
        }
      ],
  
      languages: [],
  
      selectedLanguage: '-- Choisir un langage --',
  
      filteredTeachers: []
    },
  
    createForm() {
      const formEl = document.createElement('form');
      formEl.classList.add('search-form');
  
      const languageSelectEl = document.createElement('select');
      languageSelectEl.classList.add('search-select');
      formEl.appendChild(languageSelectEl);
  
      app.state.languages.forEach((language) => {
        const optionEl = document.createElement('option');
        optionEl.value = language;
        optionEl.textContent = language;
        optionEl.selected = language === app.state.selectedLanguage;
        languageSelectEl.appendChild(optionEl);
      });
  
      app.containerEl.appendChild(formEl);
  
      languageSelectEl.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        app.state.selectedLanguage = selectedLanguage;
  
        app.state.filteredTeachers = app.state.teachers.filter((teacher) => {
          return teacher.language === selectedLanguage;
        });
        app.render();
      });
    },
  
    createCounter() {
      const counterEl = document.createElement('p');
      counterEl.textContent = `${app.state.filteredTeachers.length} prof(s) trouvé(s)`;
      counterEl.classList.add('counter');
      app.containerEl.appendChild(counterEl);
    },
  
    createList() {
      const teachersListEl = document.createElement('ul');
      teachersListEl.classList.add('teachers-list');
  
      app.state.filteredTeachers.forEach((teacher) => {
        const teacherListItemEl = document.createElement('li');
        teacherListItemEl.textContent = teacher.name;
        teacherListItemEl.className = 'teacher-list-item';
  
        const teacherLanguageTag = document.createElement('span');
        teacherLanguageTag.textContent = teacher.language;
        teacherLanguageTag.classList.add('teacher-tag');
        teacherListItemEl.appendChild(teacherLanguageTag);
  
        teachersListEl.appendChild(teacherListItemEl);
      });
  
      app.containerEl.appendChild(teachersListEl);
    },
  
    render() {
      app.containerEl.innerHTML = '';
      app.createForm();
      app.createCounter();
      app.createList();
    },
  
    init() {
      app.state.languages = new Set(app.state.teachers.map(teacher => teacher.language));
  
      app.render();
    },
  };
  
  
  document.addEventListener('DOMContentLoaded', app.init);
  