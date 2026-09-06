# 🌌 Kosmiczny Świat - Strona dla Dzieci

**Opis projektu:**
Strona www responsywna, zbudowana w oparciu o HTML5, CSS3 i vanilla JavaScript, poświęcona eksploracji kosmosu. Strona ma edukacyjny charakter i jest skierowana do dzieci – prezentuje informacje o Układzie Słonecznym, księżycach i dalekich obiektach kosmicznych w przystępny sposób z ciekawostkami, temperaturami i wielkością obiektów.

**Cechy projektu:**

1. **Odpowiedzialny design (Responsive)** - strona dostosowuje się do telefonów, tabletów i komputerów stacjonarnych
2. **Animowane tło z gwiazdami** - canvas z migającymi gwiazdami i spadającymi meteorami
3. **Interaktywne animacje CSS/JS** - obracające się planety, księżyce na orbitach, dyski akrecyjne wokół czarnych dziur
4. **3 moduły nawigacyjne:**
   - 🪐 **Układ Słoneczny** - 8 planet z ruchem orbitalnym i szczegółowymi danymi
   - 🌙 **Księżyce** - nasz Księżyc + 8 fascynujących księżyców innych planet
   - 🌌 **Dalekie Obiekty** - planety karłowate, mgławice, galaktyki i czarne dziury
5. **Modalne okienka z szczegółami** - po kliknięcie w obiekt wyświetla się okienko z opisem, temperaturą, odległością i ciekawostką
6. **Type-badge** - kolorowe znaczniki typu każdego obiektu (planeta, księżyc, galaktyka itp.)
7. **Filter** - filtrowanie obiektów według typu w module "Dalekie Obiekty"

**Struktura plików:**

```
D:\strapi-projects\kosmicznyswiat\
├── index.html              # Strona główna z wyborem eksploracji
├── uklad-sloneczny.html    # Układ Słoneczny z diagramem i kartami planet
├── ksiezyce.html           # Księżyce z wizualizacją satelitów
├── dalekie-obiekty.html    # Galaktyki, mgławice, czarne dziury
├── css\
│   ├── style.css           # Wspólne style i zmienne CSS
│   ├── main.css            # Style specyficzne dla strony głównej
│   ├── planets.css         # Style Układu Słonecznego
│   ├── moons.css           # Style Księżyców
│   └── deepsky.css         # Style Dalekich Obiektów
├── js\
│   ├── data.js             # Baza danych: planety, księżyce, obiekty (8++30 wpisów)
│   ├── stars.js            # Animacja gwiazd i meteory (canvas)
│   ├── main.js             # Nawigacja, wybór eksploracji
│   ├── planets.js          # Animacje planet i obsługa modali
│   ├── moons.js            # Animacje księżyców i obsługa modali
│   └── deepsky.js          # Animacje galaktyk, mgławic i czarnych dziur
├── assets\
│   └── favicon.svg         # Ikona strony
└── README.md               # Ta instrukcja
```

**Jak uruchomić:**

1. Otwórz plik `index.html` w wybranej przeglądarce internetowej
2. Alternatywnie uruchom któryś z podmodułów:
   - `uklad-sloneczny.html` - Układ Słoneczny
   - `ksiezyce.html` - Księżyce
   - `dalekie-obiekty.html` - Dalekie obiekty
3. Na stronie głównej wybierz interesującą Cię eksplorację klikając odpowiednią kartę

**Wymagane środowisko:**
- Dowolna nowoczesna przeglądarka internetowa (Chrome, Firefox, Edge, Safari)
- Brak wymaganych instalacji - strona działa całkowicie po stronie klienta (offline)

**Dane zawarte w projekcie:**

*Układ Słoneczny:* Wszystkie 8 planet Merkury, Wenus, Ziemia, Mars, Jowisz, Saturn, Uran, Neptun z danymi o temperaturze, odległości, ciekawostkach.

*Księżyce:* Nasz Księżyc + Ganimedes, Europa, Tytan, Io, Enceladus, Tryton, Charon z informacjami o ich planetach macierzystych.

*Dalekie Obiekty:* Pluton, Eris, Ceres (planety karłowate), Galaktyka Andromedy, Mgławice Oriona i Pierścieniowe, Sagittarius A* i M87* (czarne dziury).

**Technologie użyte:**
- HTML5 semantyczny
- CSS3 z zmiennymi, animacjami keyframes, Grid/Flexbox
- Vanilla JavaScript (brak bibliotek zewnętrznych)
- Canvas API do animacji gwiazd i meteory
- Google Fonts: Comfortaa, Fredoka One

**Autor:**
Strona stworzona w ramach projektu edukacyjnego z pasją do kosmosu. Wszystkie dane astronomiczne są uproszczone do potrzeb edukacyjnych dla dzieci.

**Licencja:**
Projekt edukacyjny - wolny do użytku non-commercial.