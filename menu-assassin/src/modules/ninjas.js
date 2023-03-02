const ninjas = [
    {
      id: 1,
      name: 'Naruto',
      status: 'Available',
      inventory: ['Kunai', 'Shuriken', 'Ramen'],
    },
    {
      id: 2,
      name: 'Sasuke',
      status: 'Available',
      inventory: ['Chokuto', 'Fuma Shuriken', 'Water Scroll'],
    },
    {
      id: 3,
      name: 'Sakura',
      status: 'Busy',
      inventory: ['Medical Kit', 'Smoke Bomb', 'Food Pills'],
    },
    {
      id: 4,
      name: 'Kakashi',
      status: 'Available',
      inventory: ['Sharingan', 'Kunai', 'Ninja Dogs'],
    },
    {
      id: 5,
      name: 'Gaara',
      status: 'Unavailable',
      inventory: ['Sand Gourd', 'Sand Coffin', 'Chakra Gun'],
    },
  ];
  
  function getNinjas() {
    return ninjas;
  }
  
  export { getNinjas, ninjas };