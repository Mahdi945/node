// Utilise la base de données 'test'
use('test');

// Insère un document dans la collection 'submitForms'
db.submitForms.insertOne({
    nomSociete: "Exemple Société",
    telephone: "123456789",
    email: "example@example.com",
    adresseSociete: "123 Rue Exemple",
    typeMachine: "Type A",
    refMachine: "Ref123",
    descriptionPanne: "Description de la panne"
});

// Récupère tous les documents de la collection 'submitForms'
db.submitForms.find();
