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


Region.create(name: "Basal Ganglia", description: "Regulation of movement", conditions: "Parkinson's Disease, Huntington's Disease",
  location: "Midbrain", view: "coronal", position_left: 44, position_top: 69)

Region.create(name: "Corpus Collosum", description: "Another description", conditions: "Other conditions",
  location: "Everywhere", view: "coronal", position_left: 47, position_top: 56)

Region.create(name: "Cerebellum", description: "Another description", conditions: "Other conditions",
  location: "Everywhere", view: "sagittal", position_left: 58, position_top: 67)

Region.create(name: "Thalamus", description: "Another description", conditions: "Other conditions",
  location: "Everywhere", view: "sagittal", position_left: 50.5, position_top: 55)

Region.create(name: "Pituitary Gland", description: "Another description", conditions: "Other conditions",
  location: "Everywhere", view: "sagittal", position_left: 45, position_top: 67)

Region.create(name: "Motor Cortex", description: "Another description", conditions: "Other conditions",
  location: "Everywhere", view: "sagittal", position_left: 50, position_top: 38)

Region.create(name: "Hypothalamus", description: "Another description", conditions: "Other conditions",
  location: "Everywhere", view: "sagittal", position_left: 47.5, position_top: 62.5)

Region.create(name: "Amygdala", description: "Another description", conditions: "Other conditions",
  location: "Everywhere", view: "sagittal", position_left: 51, position_top: 64)

# Region.create(name: "Gryi and Sulci", description: "Another description", conditions: "Other conditions",
#   location: "Everywhere", view: "coronal", position_left: 58, position_top: 67)

Region.create(name: "Brain Stem", description: "Another description", conditions: "Other conditions",
  location: "Everywhere", view: "sagittal", position_left: 51, position_top: 80)

Region.create(name: "Cingulate Gyrus", description: "Another description", conditions: "Other conditions",
  location: "Everywhere", view: "sagittal", position_left: 45, position_top: 44)



puts "🧠🧠 Seeded 🧠🧠"
