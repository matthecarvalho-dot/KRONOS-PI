// Configuração do Firebase para Kronos-PI
const firebaseConfig = {
    apiKey: "AIzaSyBUX_CQmgl62l5zdHjMM9umjWvBTqg8liA",
    authDomain: "kronos-pi.firebaseapp.com",
    projectId: "kronos-pi",
    storageBucket: "kronos-pi.firebasestorage.app",
    messagingSenderId: "1010262223400",
    appId: "1:1010262223400:web:710a5eaa3e260c772de31d",
    measurementId: "G-F59S8RVTLR"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar serviços
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// Configurações adicionais
db.settings({
    timestampsInSnapshots: true,
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

// Habilitar persistência offline
db.enablePersistence()
    .then(() => console.log('✅ Persistência offline ativada'))
    .catch((err) => console.error('❌ Erro na persistência:', err));

console.log('🔥 Kronos-PI Firebase Conectado:', firebaseConfig.projectId);
