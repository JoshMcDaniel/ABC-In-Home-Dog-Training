export interface SlideShowImages {
  sliderArray: [
    {'img': string, 'alt': string, 'text': string }
  ];
}

export interface Services {
  services: [
    {
      'name': string;
      'description': string;
      'bullet-points': string[];
    }
  ];
}
