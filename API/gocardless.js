const gocardless = require("gocardless-nodejs");
const constants = require("gocardless-nodejs/constants");

// Accès à la variable d'environnement GoCardlessAccessToken
const accessToken = process.env.GoCardlessAccessToken;

// Vérification de la présence du jeton d'accès
if (!accessToken) {
  console.error('GoCardlessAccessToken is not defined');
  process.exit(1); // Sortie du processus avec un code d'erreur
}

// Initialisation de la bibliothèque GoCardless
const client = gocardless(
  accessToken, // Utilisation du jeton d'accès
  constants.Environments.Live // Environnement de production
);

// Maintenant vous pouvez utiliser 'client' pour interagir avec l'API GoCardless
