// A szükséges HTML elemek elérése
const beviteliMezo = document.getElementById('beviteli-mezo');
const szovegHelye = document.getElementById('szoveg-helye');
const letoltesGomb = document.getElementById('letoltes-gomb');
const kepKontener = document.getElementById('kep-kontener');

// Eseményfigyelő: ha a felhasználó gépel a beviteli mezőbe
beviteliMezo.addEventListener('input', function() {
    // A kép feletti szöveg frissítése azzal, amit beírtak
    szovegHelye.textContent = beviteliMezo.value;
});

// Eseményfigyelő: ha a felhasználó a letöltés gombra kattint
letoltesGomb.addEventListener('click', function() {
    // A html2canvas program "lefényképezi" a kep-kontener-t
    html2canvas(kepKontener).then(canvas => {
        // Létrehoz egy "virtuális" linket a letöltéshez
        const link = document.createElement('a');
        link.download = 'kesz-kep.png'; // A letöltött fájl neve
        link.href = canvas.toDataURL('image/png'); // Átalakítja a "képet" letölthető formátumba
        link.click(); // Rákattint a linkre, elindítva a letöltést
    });
});