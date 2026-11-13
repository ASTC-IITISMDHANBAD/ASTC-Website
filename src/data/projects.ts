import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 9,
    title: "Motorized Small Radio Telescope  (MSRT)",
    description: "Goal is to build a Motorized Small Radio Telescope (MSRT), a 70cm Ku-band radio telescope with automated Azimuth-Elevation tracking, upgraded from the manual Affordable Small Radio Telescope (ASRT) design pioneered at IUCAA and IIT Roorkee.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqqsbZ9Er-3KHjx0ydnftl41hYkCTcEkopn6BSy8tuw&s=10",
    category: "Robotics",
    
  },


  {
    id: 1,
    title: "Gravitational Wave Detection",
    description: "Goal is to develop a pipeline to detect simulated compact-binary gravitational-wave signals embedded in real LIGO detector noise. The project involved signal processing, data synthesis, and machine learning techniques to distinguish gravitational-wave signals from background noise through binary classification.",
    image: "/assets/Gravitational Wave Detection.jpg",
    category: "Data Driven Astronomy",
    
  },
  {
    id: 2,
    title: "Forecasting and Nowcasting of solar flares",
    description: "The project aims to develop an automated pipeline to extract meaningful features from Aditya-L1 SoLEXS and HEL1OS telemetry and implement physics-informed flare detection and classification. The resulting flare catalogs will be used to train machine learning models to forecast solar flare classes in advance.",
    image: "/assets/Forecasting and Nowcasting of solar flares.webp",
    category: "Data Driven Astronomy",
    
  },
  {
    id: 3,
    title: "Galaxy Image Deconvolution using diffusion models",
    description: "The project aims to restore fine morphological features in blurry galaxy images using diffusion models and Diffusion Posterior Sampling (DPS). It involves benchmarking against classical deconvolution methods and evaluating the model’s ability to generalise to real telescope observations.",
    image: "/assets/Galaxy Image Deconvolution using diffusion models.jpg",
    category: "Data Driven Astronomy",
    
  },
    {
    id: 4,
    title: "The missed giants found binaries : A tale of Black hole hunting",
    description: "Our main goal is to trace down anomaly globular clusters across the galaxy in search of Intermediate mass black holes using machine learning techniques and multiple electromagnetic radiation analysis.",
    image: "/R.jpeg",
    category: "Data Driven Astronomy",
    
  },
  {
    id: 5,
    title: "CubeSat Development Project",
    description: "Designing and building a small satellite for atmospheric data collection.  Our primary technical objective is to build a satellite capable of capturing high-resoluƟon micro-images from orbit, featuring a custom-built Aƫtude DeterminaƟon and Control System (ADCS) for precise pointing.",
    image: "https://images.pexels.com/photos/23764/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Satellites",
    
  },
  {
    id: 6,
    title: "High Altitude Balloon",
    description: "Launching a balloon to the stratosphere with sensors to collect data about atmospheric conditions at different altitudes.",
    image: "/projects/weatherbaloon.jpg",
    category: "Atmospheric Research",
    
  },
  {
    id: 7,
    title: "Aerodynamics Research",
    description: "Studying airflow patterns around various wing designs to optimize aircraft efficiency.",
    image: "  /projects/rcWing.jpg",
    category: "Aeronautics",
  
  },
  {
    id: 8,
    title: "Mars Rover Prototype",
    description: "Building a scaled model of a Mars rover with autonomous navigation capabilities for rough terrain.",
    image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Robotics",
    
  }



 ];
