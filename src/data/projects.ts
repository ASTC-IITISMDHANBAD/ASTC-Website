import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Gravitational Wave Detection",
    description: "Goal is to develop a pipeline to detect simulated compact-binary gravitational-wave signals embedded in real LIGO detector noise. The project involved signal processing, data synthesis, and machine learning techniques to distinguish gravitational-wave signals from background noise through binary classification.",
    image: "",
    category: "Data Driven Astronomy",
    
  },
  {
    id: 2,
    title: "Forecasting and Nowcasting of solar flares",
    description: "The project aims to develop an automated pipeline to extract meaningful features from Aditya-L1 SoLEXS and HEL1OS telemetry and implement physics-informed flare detection and classification. The resulting flare catalogs will be used to train machine learning models to forecast solar flare classes in advance.",
    image: "",
    category: "Data Driven Astronomy",
    
  },
  {
    id: 3,
    title: "Galaxy Image Deconvolution using diffusion models",
    description: "The project aims to restore fine morphological features in blurry galaxy images using diffusion models and Diffusion Posterior Sampling (DPS). It involves benchmarking against classical deconvolution methods and evaluating the model’s ability to generalise to real telescope observations.",
    image: "",
    category: "Data Driven Astronomy",
    
  },
 ];