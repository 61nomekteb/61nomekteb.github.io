// Açılır menüyü göster
function showDropdown() {
    document.getElementById("dropdown").style.display = "block";
}

// Açılır menüyü gizle
function hideDropdown() {
    document.getElementById("dropdown").style.display = "none";
}

// Dil değiştirme fonksiyonu
function switchLanguage(language) {
    if (language === 'ru') {
        alert('Rusça diline geçiliyor...');
        // Dil değiştirme mantığını buraya ekleyin
    } else {
        alert('Standart diline geçiliyor...');
        // Dil değiştirme mantığını buraya ekleyin
    }
}

// Kayıt işlemiyle ilgili kodları kaldırın
// Örneğin, registerUser gibi bir fonksiyonunuz varsa, onu kaldırın

// Mevcut toggleContainer fonksiyonunu ve event listener'ları saklıyoruz
function toggleContainer(buttonId, containerId, contentHtml) {
    const existingContainer = document.getElementById(containerId);
    if (existingContainer) {
        existingContainer.remove();
    } else {
        const container = document.createElement('div');
        container.id = containerId;
        container.innerHTML = contentHtml;
        document.body.appendChild(container);
    }
}

document.getElementById('steamButton').addEventListener('click', function() {
    toggleContainer(
        'steamButton',
        'steamContainer',
        `
            <button onclick="window.location.href='https://www.tinkercad.com/'">Tinkercad</button>
            <button onclick="window.location.href='https://www.tinkercad.com/'">Tinkercad Öğretim</button>
            <button onclick="window.location.href='https://makecode.microbit.org/'">Microbit</button>
            <button onclick="window.location.href='https://makecode.microbit.org/'">Microbit Öğretim</button>
            <button onclick="window.location.href='https://www.steam.edu.az/az'">Steam</button>
            <button onclick="window.location.href='https://www.steam.edu.az/az'">Steam Öğretim</button>
        `
    );
});

document.getElementById('reqemsalButton').addEventListener('click', function() {
    toggleContainer(
        'reqemsalButton',
        'reqemsalContainer',
        `
            <button id="pythonButton">Python Öğretim</button>
            <button onclick="window.location.href='https://scratch.mit.edu/'">Scratch Öğretim</button>
        `
    );

    document.getElementById('pythonButton').addEventListener('click', function() {
        toggleContainer(
            'pythonButton',
            'pythonContainer',
            `
                <button onclick="window.location.href='https://www.learnpython.org/'">Python (English)</button>
                <button onclick="window.location.href='https://www.mobilhanem.com/python-egitimi/'">Python (Türkçe)</button>
                <p>Azerbaycan dil desteği yaxında gələcək</p>
            `
        );
    });
});
