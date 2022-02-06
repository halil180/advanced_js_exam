const database = [
  {
    id: uuidv4(),
    name: 'Hatchback',
    cars: [
      {
        id: uuidv4(),
        name: 'Fiesta',
        introductionDate: 2017,
        description:
          'Supermini/subcompact hatchback predominantly sold in Europe, while the previous generation was sold globally. The North American version was discontinued in 2019.',
        image: './images/hatchback-1.jpg',
      },
      {
        id: uuidv4(),
        name: 'Focus',
        introductionDate: 2018,
        description:
          'Compact hatchback predominantly sold in Europe, while the previous generation was sold globally. The North American version was discontinued in Early 2020.',
        image: './images/hatchback-2.jpg',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Sedan',
    cars: [
      {
        id: uuidv4(),
        name: 'Escort',
        introductionDate: 2015,
        description:
          'Compact sedan currently marketed in China and Taiwan. Based on an older version of the Ford Focus. The Escort nameplate has been used since 1968, and reused in China in 2015.',
        image: './images/sedan-1.jpg',
      },
      {
        id: uuidv4(),
        name: 'Focus',
        introductionDate: 2018,
        description:
          'Compact sedan currently marketed in China and Eastern Europe. The previous generations of Focus sedan has been sold globally, including in Europe, the Americas and Asia-Pacific markets.',
        image: './images/sedan-2.jpg',
      },
      {
        id: uuidv4(),
        name: 'Mondeo',
        introductionDate: 2022,
        description:
          'Mid-size sedan and liftback currently marketed in Europe (Until 2022) and China. Previously it was marketed in North America as the Fusion. The latest generation released in 2022 is produced and sold in China.',
        image: './images/sedan-3.jpg',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Station Wagon',
    cars: [
      {
        id: uuidv4(),
        name: 'Focus',
        introductionDate: 2018,
        description: 'Station wagon version of the Focus.',
        image: './images/station-wagon-1.jpg',
      },
      {
        id: uuidv4(),
        name: 'Mondeo',
        introductionDate: 2012,
        description: 'Station wagon version of the Mondeo.',
        image: './images/station-wagon-2.jpg',
      },
    ],
  },
];


