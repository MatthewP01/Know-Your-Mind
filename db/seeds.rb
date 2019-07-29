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

puts "🧠🧠 Seeded 🧠🧠"
