require 'faker'

def seedThemes
  Theme.create!(name: "Bureautique", description: "Traitement de texte, tableur, etc.", color: "rgb(59, 51, 128)")
  Theme.create!(name: "Découverte", description: "Séance de présentation des Pandas et autoévaluation", color: "rgb(81, 153, 52)")
  Theme.create!(name: "Environnement graphique", description: "Utilisation, personnalisation, etc.", color: "rgb(171, 89, 153)")
  Theme.create!(name: "Informatique", description: "Ordinateurs, périphériques, etc", color: "rgb(47, 135, 90)")
  Theme.create!(name: "Internet", description: "Navigation, recherche, messagerie, etc.", color: "rgb(101, 61, 117)")
  Theme.create!(name: "Ordinateur et +", description: "Ordinateur, environnement graphique, etc.", color: "rgb(186, 48, 48)")
  Theme.create!(name: "Traitement d'images", description: "Photo numérique, retouche d'images", color: "rgb(54, 128, 138)")
  puts "Themes créer !!"
end
def seedStructures
  Structure.create!(name: "Panda 1er Mai", address: "2, rue des Corroyeurs, 21000 Dijon", social_reason: "La Maison des Associations", supervisor: "OUASSOU Medhi")
  Structure.create!(name: "Panda Beaudelaire", address: "25, avenue Charles Beaudelaire, 21000 Dijon", social_reason: "Espace Beaudelaire", supervisor: "MORIAU Cédric")
  Structure.create!(name: "Panda Bourroches", address: "71B, rue de la Corvée, 21000 Dijon", social_reason: "Centre social des Bourroches", supervisor: "Frédéric ROBLOT")
  Structure.create!(name: "Panda Chevreul Parc", address: "21, rue Maurie Ravel, 21000 Dijon", social_reason: "Centre Social du Tempo", email: "cndijon@outlook.com", supervisor: "OUASSOU Medhi")
  Structure.create!(name: "Panda Fontaine d'ouche", address: "2, allée de Grenoble, 21000 Dijon", social_reason: "Maison Phare", supervisor: "MORIAU Cédric" )
  Structure.create!(name: "Panda Grésilles", address: "14, rue Camille Claudel, 21000 Dijon", social_reason: "Centre Multimédia (Médiathèque Champollion)", email: "cndijon@outlook.com", supervisor: "MONNIN François")
  Structure.create!(name: "Panda Jardin des Sciences", address: "14, rue Jehan Marville, 21000 Dijon", social_reason: "Planétarium Hubert Curien", supervisor:"ROBLOT Frédéric" )
  Structure.create!(name: "Panda Monchapet", address: "10, rue Louis Gane, 21000 Dijon", social_reason: "PANDA Montchapet", email: "cndijon@outlook.com", supervisor:"ROBLOT Frédéric" )
  Structure.create!(name: "Panda Université", address: "Bâtiement Mirande, Avenue Alain Savary, 21000 Dijon", social_reason: "", supervisor:"ROBLOT Frédéric" )
  puts "Structure Créés !!"
end

def seedInitiations 
  #? Initiation - Internet
  Initiation.create(name: "Qu’est ce que l’Internet ?",theme_id: 5, level: 0)
  Initiation.create(name: "La navigation sur le web",theme_id: 5, level: 0)
  Initiation.create(name: "Gérer mon espace PANDA",theme_id: 5, level: 0)
  Initiation.create(name: "Internet et l'emploi",theme_id: 5, level: 0)
  Initiation.create(name: "arborescence : projet nature dans ta ville",theme_id: 5, level: 0)
  Initiation.create(name: "Art de vivre ensemble",theme_id: 5, level: 0)
  Initiation.create(name: "Ecole de la 2ème chance",theme_id: 5, level: 0)
  Initiation.create(name: "tournoi jeux facebook",theme_id: 5, level: 0)
  Initiation.create(name: "Atelier identité numérique",theme_id: 5, level: 0)
  Initiation.create(name: "atelier cloud",theme_id: 5, level: 0)
  Initiation.create(name: "Les technologies sans fil",theme_id: 5, level: 0)
  Initiation.create(name: "Aller plus loin avec son smartphone",theme_id: 5, level: 0)
  Initiation.create(name: "Atelier Youtube",theme_id: 5, level: 0)
  Initiation.create(name: "Lancome",theme_id: 5, level: 0)
  Initiation.create(name: "atelier scientifique",theme_id: 5, level: 0)
  Initiation.create(name: "Atelier numérique Fontaine d'Ouche",theme_id: 5, level: 0)
  Initiation.create(name: "Atelier numérique Université",theme_id: 5, level: 0)
  Initiation.create(name:"Utilisation des outils de recherche",theme_id: 5, level:1)
  Initiation.create(name:"Découverte du courrier électronique",theme_id: 5, level:1)
  Initiation.create(name:"Communiquer sur Internet",theme_id: 5, level:1)
  Initiation.create(name:"TP Internet: Créer son Blog",theme_id: 5, level:1)
  Initiation.create(name:"TP Les Sciences de l'Univers sur Internet",theme_id: 5, level:1)
  Initiation.create(name:"Internet au quotidien: Présentation",theme_id: 5, level:1)
  Initiation.create(name:"Internet au quotidien",theme_id: 5, level:1)
  Initiation.create(name:"Configurer Internet chez soi",theme_id: 5, level:1)
  Initiation.create(name:"Perfectionnement du courrier électronique",theme_id: 5, level:2)
  Initiation.create(name:"Internet au quotidien: Utilisation",theme_id: 5, level:2)
  Initiation.create(name:"Découverte et paramétrage de Facebook",theme_id: 5, level:2)
  Initiation.create(name:"Atelier création de site internet",theme_id: 5, level:2)

  #? Initiation - Bureautique
  Initiation.create(name:"Découverte du traitement de texte", theme_id: 1, level: 0)
  Initiation.create(name:"Découverte du tableur", theme_id: 1, level: 0)
  Initiation.create(name:"EPN", theme_id: 1, level: 0)
  Initiation.create(name:"Atelier Web", theme_id: 1, level: 0)
  Initiation.create(name:"accueil jeunes centre social fontaine d'Ouche", theme_id: 1, level: 0)
  Initiation.create(name:"atelier jeune Maladière Balzac", theme_id: 1, level: 0)
  Initiation.create(name:"atelier CV pole emploi", theme_id: 1, level: 0)
  Initiation.create(name:"atelier escale d'Alembert", theme_id: 1, level: 0)
  Initiation.create(name:"jeux éducatifs gcompris", theme_id: 1, level: 0)
  Initiation.create(name:"Atelier Drones", theme_id: 1, level: 0)
  Initiation.create(name:"Atelier Thymio", theme_id: 1, level: 0)
  Initiation.create(name:"Stylo 3D", theme_id: 1, level: 0)
  Initiation.create(name:"Atelier Fablab", theme_id: 1, level: 0)
  Initiation.create(name:"Compression et décompression des fichiers", theme_id: 1, level: 0)
  Initiation.create(name:"MJC Grésilles", theme_id: 1, level: 0)
  Initiation.create(name:"atelier Fake-news", theme_id: 1, level: 0)
  Initiation.create(name:"Utilisation du traitement de texte", theme_id: 1, level: 1)
  Initiation.create(name:"Découverte et utilisation du tableur", theme_id: 1, level: 1)
  Initiation.create(name:"Découverte du diaporama", theme_id: 1, level: 1)
  Initiation.create(name:"Traitement de texte: Mise en forme", theme_id: 1, level: 1)
  Initiation.create(name:"Tableur: Mise en forme", theme_id: 1, level: 1)
  Initiation.create(name:"TP Traitement de texte (Writer) : Le publipostage", theme_id: 1, level: 1)
  Initiation.create(name:"Atelier CV (pratique)", theme_id: 1, level: 1)
  Initiation.create(name:"Modelisation sketchup II", theme_id: 1, level: 1)
  Initiation.create(name:"Perfectionnement du traitement de texte", theme_id: 1, level: 2)
  Initiation.create(name:"Perfectionnement du diaporama", theme_id: 1, level: 2)
  Initiation.create(name:"TP Traitement de texte (Writer) : Réaliser un sommaire", theme_id: 1, level: 2)
  Initiation.create(name:"TP Tableur (Calc) : Statistiques et Graphiques, Filtres et Autofiltres", theme_id: 1, level: 2)
  Initiation.create(name:"Tableur : Calculs et Fonctions graphiques", theme_id: 1, level: 2)
  Initiation.create(name:"Atelier CV ( Théorie)", theme_id: 1, level: 2)

  #? Initiation - Découverte 
  Initiation.create(name:"Découverte", theme_id: 2, level: 2)

  #? Initiation - Informatique
  Initiation.create(name: "Esat", theme_id: 4, level: 0)
  Initiation.create(name: "Balzac", theme_id: 4, level: 0)
  Initiation.create(name: "atelier usagers Centre social FO", theme_id: 4, level: 0)
  Initiation.create(name: "Atelier mobile de gravure", theme_id: 4, level: 0)
  Initiation.create(name: "atelier usagers Centre Social Parc", theme_id: 4, level: 0)
  Initiation.create(name: "centre social des grésilles", theme_id: 4, level: 0)
  Initiation.create(name: "CEMEA", theme_id: 4, level: 0)
  Initiation.create(name: "Découverte de Youtube et devenir un youtubeur", theme_id: 4, level: 0)
  Initiation.create(name: "Démonstration impression 3D", theme_id: 4, level: 0)
  Initiation.create(name: "Robotique", theme_id: 4, level: 0)
  Initiation.create(name: "Installation et mise à jour de logiciels", theme_id: 4, level: 1 )

  #? Initiation - Environnement graphique
  Initiation.create(name: "débutant(e)	Environnement graphique (les bases)", theme_id: 3, level: 0)

  #? Initiation - Traitement d'Images
  Initiation.create(name: "Traitement d'images : Les bases", theme_id: 7, level: 0)
  Initiation.create(name: "Découverte de la Photo Numérique", theme_id: 7, level: 0)
  Initiation.create(name: "La photographie : principes et vocabulaire", theme_id: 7, level: 0)
  Initiation.create(name: "Concours photo", theme_id: 7, level: 0)
  Initiation.create(name: "Centre de loisirs Tivoli", theme_id: 7, level: 0)
  Initiation.create(name: "Centre social du Parc", theme_id: 7, level: 0)
  Initiation.create(name: "Découverte du montage vidéo", theme_id: 7, level: 0)
  Initiation.create(name: "réalisation affiches et flyers", theme_id: 7, level: 0)
  Initiation.create(name: "TP Photo: insectes pollinisateurs: projet participatif sur la Biodiversité", theme_id: 7, level: 0)
  Initiation.create(name: "Rallye photo", theme_id: 7, level: 0)
  Initiation.create(name: "découverte de Scratch", theme_id: 7, level: 0)
  Initiation.create(name: "découverte du métier d'accessoiriste", theme_id: 7, level: 0)
  Initiation.create(name: "Centre de loisirs", theme_id: 7, level: 0)
  Initiation.create(name: "Valoriser vos photos", theme_id: 7, level: 0)
  Initiation.create(name: "Initiation Sketchup", theme_id: 7, level: 0)
  Initiation.create(name: "ESAT", theme_id: 7, level: 0)
  Initiation.create(name: "Traitement d'images : Perfectionnement", theme_id: 7, level: 1)
  Initiation.create(name: "TP La prise de vue photographique", theme_id: 7, level: 1)
  Initiation.create(name: "TP photomontage", theme_id: 7, level: 1)
  Initiation.create(name: "Mini stage Gimp", theme_id: 7, level: 1)
  Initiation.create(name: "TP Traitement d'image: \"The Gimp\"", theme_id: 7, level: 2)
  Initiation.create(name: "TP La retouche photographique", theme_id: 7, level: 2)

  #? Initiation - Ordinateur et +
  Initiation.create(name: "ordinateurs et périphériques", theme_id: 6, level: 0)
  Initiation.create(name: "et optimiser son ordinateur", theme_id: 6, level: 0)
  Initiation.create(name: "et classer ses données", theme_id: 6, level: 0)
  Initiation.create(name: "Charmilles", theme_id: 6, level: 0)
  Initiation.create(name: "de la tablette", theme_id: 6, level: 0)
  Initiation.create(name: "Ipad", theme_id: 6, level: 0)
  Initiation.create(name: "de l'ordinateur", theme_id: 6, level: 0)
  Initiation.create(name: "Utilisation de la clé USB", theme_id: 6, level: 1)
  Initiation.create(name: "tablette au quotidien", theme_id: 6, level: 1)
  Initiation.create(name: "son environnement graphique", theme_id: 6, level: 2)

  puts "Initiations created"
end

def seedCourses(nb)
  nb.times do |i|
    Course.create(
      collective: [true, false].sample,
      date: Faker::Date.between(from: '2022-03-01', to: '2023-03-01'),
      max_subscriptions: rand(2..8),
      reservation: [true, false].sample,
      initiation_id: Initiation.all.sample.id,
      structure_id: Structure.all.sample.id,
    )
    puts "Courses Créées" if i == nb - 1
  end
end

seedThemes()
seedStructures()
seedInitiations()
seedCourses(20)
