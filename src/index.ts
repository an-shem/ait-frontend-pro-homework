interface Robot {
  model: string;
}

type Mission = 'Moon Landing' | 'ISS Maintenance';

interface Astronaut {
  isInSpace: boolean;
  experienceYears: number;
  assistantRobot: Robot;
  missions?: Mission[];
}

const ilonMasck: Astronaut = {
  isInSpace: true,
  experienceYears: 18,
  assistantRobot: {
    model: 'ION-123',
  },
  missions: ['Moon Landing'],
};
console.log('ilonMasck :>> ', ilonMasck);

const johnMery: Astronaut = {
  isInSpace: false,
  experienceYears: 12,
  assistantRobot: {
    model: 'XR-12',
  },
};

johnMery.missions = ['ISS Maintenance'];
console.log('johnMery :>> ', johnMery);
