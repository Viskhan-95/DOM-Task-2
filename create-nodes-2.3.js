const arrayLink = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ];

  render(arrayLink);

  function render(arr) {
      const ulLink = document.createElement('ul');

      for (let i = 0; i < array.length; i++) {
          ulLink.append(createLiElement(arr[i]));
      }

      document.body.append(ulLink);

      console.log(ulLink);
  }

  function createLiElement(obj) {
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = obj.url;
      a.appendChild(document.createTextNode(obj.name));

      li.append(a);

      return li;
  }