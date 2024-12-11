function createButton(label, url) {
    const button = document.createElement('button');
    button.textContent = label;
    button.onclick = () => window.location.href = url;
    return button;
}

document.getElementById('steamButton').addEventListener('click', function() {
    const existingContainer = document.getElementById('steamContainer');
    if (existingContainer) {
        existingContainer.remove();
    } else {
        const steamContainer = document.createElement('div');
        steamContainer.id = 'steamContainer';
        steamContainer.innerHTML = `
            <button onclick="window.location.href='https://www.tinkercad.com/'">Tinkercad</button>
            <button onclick="window.location.href='https://www.tinkercad.com/'">Tinkercad Öğretim</button>
            <button onclick="window.location.href='https://makecode.microbit.org/'">Microbit</button>
            <button onclick="window.location.href='https://makecode.microbit.org/'">Microbit Öğretim</button>
            <button onclick="window.location.href='https://www.steam.edu.az/az'">Steam</button>
            <button onclick="window.location.href='https://www.steam.edu.az/az'">Steam Öğretim</button>
        `;
        document.body.appendChild(steamContainer);
    }
});

document.getElementById('reqemsalButton').addEventListener('click', function() {
    const existingContainer = document.getElementById('reqemsalContainer');
    if (existingContainer) {
        existingContainer.remove();
    } else {
        const reqemsalContainer = document.createElement('div');
        reqemsalContainer.id = 'reqemsalContainer';
        reqemsalContainer.innerHTML = `
            <button id="pythonButton">Python Öğretim</button>
            <button onclick="window.location.href='https://scratch.mit.edu/'">Scratch Öğretim</button>
        `;
        document.body.appendChild(reqemsalContainer);

        document.getElementById('pythonButton').addEventListener('click', function() {
            const existingPythonContainer = document.getElementById('pythonContainer');
            if (existingPythonContainer) {
                existingPythonContainer.remove();
            } else {
                const pythonContainer = document.createElement('div');
                pythonContainer.id = 'pythonContainer';
                pythonContainer.innerHTML = `
                    <button onclick="window.location.href='https://www.learnpython.org/'">Python (English)</button>
                    <button onclick="window.location.href='https://www.mobilhanem.com/python-egitimi/'">Python (Türkçe)</button>
                    <p>Azerbaycan dil desteği yaxında gələcək</p>
                `;
                document.body.appendChild(pythonContainer);
            }
        });
    }
});
