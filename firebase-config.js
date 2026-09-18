// ============================================================
// CONFIGURAZIONE FIREBASE (gratuita, piano Spark, per sempre)
// ============================================================
// 1. Vai su https://console.firebase.google.com -> "Aggiungi progetto" (gratis, nessuna carta richiesta)
// 2. Nel progetto: menu a sinistra "Build" > "Realtime Database" > "Crea database"
//    - Scegli la regione "europe-west1" (Belgio) o quella più vicina a te
//    - Scegli "Avvia in modalità test" o incolla direttamente le regole qui sotto
// 3. Tab "Regole" del Realtime Database, incolla e clicca "Pubblica":
//    {
//      "rules": {
//        "queue": {
//          ".read": true,
//          ".write": true
//        }
//      }
//    }
// 4. Impostazioni progetto (icona ingranaggio in alto) > "Generale" > "Le tue app"
//    > clicca l'icona web </> > registra l'app (basta un nome, niente hosting da attivare)
//    > copia i valori mostrati e incollali qui sotto al posto di "INSERISCI_QUI"

const firebaseConfig = {
  apiKey: "AIzaSyDbCzP-KwA1cQhYHxUqML2ITslAOa41m6I",
  authDomain: "fila-cartomante.firebaseapp.com",
  databaseURL: "https://fila-cartomante-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fila-cartomante",
  storageBucket: "fila-cartomante.firebasestorage.app",
  messagingSenderId: "872558732986",
  appId: "1:872558732986:web:7512e39b1bce91e0af4483"
};
