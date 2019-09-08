export interface SlideShowImages {
  sliderArray: [
    {'img': string, 'alt': string, 'text': string }
  ];
}

export interface Services {
  services: {
    basic: {
      'name': string;
      'description': string;
      'bullet-points': string[];
    },
    advanced: {
      'name': string;
      'description': string;
      'bullet-points': string[];
    }
  };
}
