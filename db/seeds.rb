# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Basal Ganglia image - to be added later
# image_url: "https://www.researchgate.net/profile/Tomas_Melicher2/publication/325942843/figure/fig1/AS:668264602554369@1536338105010/Fig-1-Structure-of-Basal-ganglia.png"

Region.destroy_all

# Brain regions
Region.create(name: "Basal Ganglia", description: "Regulation of movement", conditions: "Parkinson's Disease and Huntington's Disease",
  location: "Midbrain", view: "coronal", position_left: 44, position_top: 69)

Region.create(name: "Corpus Callosum", description: "Connects the right and left hemispheres of the brain", conditions: "Split Brain",
  location: "Above Thalamus, Under Cortex", view: "coronal", position_left: 47, position_top: 56)

Region.create(name: "Cerebellum", description: "Balance and coordination of muscles and the body", conditions: "Cerebellar Degeneration",
  location: "Lower area of the brain", view: "sagittal", position_left: 58, position_top: 67)

Region.create(name: "Hippocampus", description: "Processing of long term memory and emotional responses", conditions: "Dementia and Alzheimer's Disease",
  location: "Lower area of the brain", view: "coronal", position_left: 51, position_top: 77)

Region.create(name: "Thalamus", description: "Relays information from the sensory receptors to areas of the brain where it can be processed", conditions: "Various Comas",
  location: "Forebrain, below the Corpus Callosum", view: "sagittal", position_left: 50.5, position_top: 55)

Region.create(name: "Pituitary Gland", description: "Secretes hormones involved in growth, blood pressure, energy management, sex organ function and metabolism", conditions: "Hormonal Disorders",
  location: "Protrusion of Hypothalamus at base of brain", view: "sagittal", position_left: 45, position_top: 67)

Region.create(name: "Motor Cortex", description: "Planning, control, and execution of voluntary movements", conditions: "Paralysis (Isolateral and Contralateral)",
  location: "Cerebral Cortex (outer tissue of brain)", view: "sagittal", position_left: 50, position_top: 38)

Region.create(name: "Hypothalamus", description: "Above the pituitary gland and below the thalamus", conditions: "Endocrinal Disorders",
  location: "Temporal lobe - Limbic system", view: "sagittal", position_left: 47.5, position_top: 63.5)

Region.create(name: "Amygdala", description: "Response and memory of emotions, particularly fear and disgust", conditions: "Decision Making Defecits",
  location: "Limbic System - at the end of the hippocampus", view: "sagittal", position_left: 51, position_top: 64)

Region.create(name: "Gryi and Sulci", description: "Folds and indentations in the brain that increase its surface area and are responsible for its wrinkled appearance", conditions: "Pachygryria",
  location: "Throughout the brain", view: "coronal", position_left: 37, position_top: 44)

Region.create(name: "Brain Stem", description: "Provides the main motor and sensory nerve supply to the face and neck via the cranial nerves", conditions: "Locked-In Syndrome",
  location: "Posterior of the Brain", view: "sagittal", position_left: 51, position_top: 80)

Region.create(name: "Cingulate Gyrus", description: "An integral part of the limbic system, which is involved with emotion formation and processing, learning, and memory", conditions: "Schizophrenia",
  location: "Medial region of cerebral cortex", view: "sagittal", position_left: 45, position_top: 44)




puts "🧠🧠 Seeded 🧠🧠"
