const { GesAPI } = require('./ges-api.js');

// Exemple d'utilisation de la classe GesAPI
async function example(){
    try {
        const api = await GesAPI.login('username', 'password');
        console.log('Connexion réussie:', api);

        // Vous pouvez maintenant appeler d'autres méthodes sur l'instance api
        await api.getProfile()
        await api.getYears()
        await api.getAbsences("2024")
        
    } catch (error) {
        console.error('Erreur:', error.message);
    }
}
example()