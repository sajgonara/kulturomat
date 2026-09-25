# Konstytucja: Kulturomat

Aktualizacja: 2026-09-25. Źródło kontraktu: dokumentacja i kod aplikacji.

## Art. 1. Cel aplikacji

- Porównuj kina, teatry, koncerty i festiwale w osobnych trybach mapy.

## Art. 2. Reguły domeny

- Źródła to index.html, MODES i data_*.js. Zachowaj rozdział trybów oraz powiązanie listy z mapą.
- Wydarzenia i miejsca mają źródło oraz aktualną datę; nie zastępuj terminu wydarzenia datą pobrania.
- Nie blokuj mapowych kafelków CARTO przez niewłaściwe nagłówki osadzania.
- Stosuj lokalne AGENTS.md: po zmianie sprawdzenie JS, commit i push na istniejący origin, zgodnie z zasadami repozytorium.

## Art. 3. Wspólny standard i kontekst

- Przed pracą przeczytaj `~/hub/KONSTYTUCJA.md`, tę konstytucję, lokalne instrukcje i dokumentację. Nowa decyzja użytkownika ma pierwszeństwo; trwałą zmianę kontraktu dopisz tutaj z datą.
- Pracując na konkretnej grze, przeczytaj również jej `KONSTYTUCJA.md`, plan oraz `assets_src/STYL.txt`, jeśli istnieje. Otwieraj narzędzia z właściwym kontekstem gry.
- Zachowaj wygląd aplikacji, polskie komunikaty, czytelne jednostki, stany ładowania, pustych danych i błędów. Sprawdź telefon, klawiaturę oraz rzeczywistą ścieżkę użytkownika.

## Art. 4. Harness i odbiór

- Ten plik jest jednym źródłem artykułów w panelu oraz instrukcji AI. Czytaj go przed zmianą i po wznowieniu pracy. Nie kopiuj reguł do osobnej, rozchodzącej się wersji w kodzie UI.
- `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` i reguła Antigravity `always_on` odsyłają do tej konstytucji. Przy zmianie wymagań aktualizuj artykuły, a nie same odsyłacze.
- Uruchom zmienioną funkcję z realnym API i wykonanym JavaScriptem; stosowne obliczenia oraz walidację sprawdź na danych testowych. Podaj wynik i pozostałe ograniczenia.
- Kontrola podłączeń: `python3 ~/hub/serwer/hub_konstytucje.py`. Konfiguracja harnessu wymaga także przeglądu zgodności wykonanych zmian z artykułami.
