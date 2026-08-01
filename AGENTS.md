# Kulturomat — zasady projektu

- Po każdej zmianie w projekcie (dane, kod, README) **od razu commituj i wypychaj na serwer**: `git add` + `git commit` + `git push` na `origin` (GitHub → GitHub Pages, https://sajgonara.github.io/kulturomat/). Nie pytaj o potwierdzenie — użytkownik zezwolił na stałe.
- Struktura: statyczna strona `index.html` + pliki danych `data_*.js` (festiwale, kina, teatry, koncerty). Każda sekcja to osobny tryb w obiekcie `MODES`.
- Po zmianach sprawdzaj składnię JS (`node --check`) przed pushem.
