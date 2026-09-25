# Kulturomat — zasady projektu

- Po każdej zmianie w projekcie (dane, kod, README) **od razu commituj i wypychaj na serwer**: `git add` + `git commit` + `git push` na `origin` (GitHub → GitHub Pages, https://sajgonara.github.io/kulturomat/). Nie pytaj o potwierdzenie — użytkownik zezwolił na stałe.
- Struktura: statyczna strona `index.html` + pliki danych `data_*.js` (festiwale, kina, teatry, koncerty). Każda sekcja to osobny tryb w obiekcie `MODES`.
- Po zmianach sprawdzaj składnię JS (`node --check`) przed pushem.

<!-- hub:harness start -->
## Obowiązkowa konstytucja aplikacji

- Przed każdą zmianą i po wznowieniu przeczytaj [KONSTYTUCJA.md](KONSTYTUCJA.md) oraz `~/hub/KONSTYTUCJA.md`. Stosuj ich artykuły podczas implementacji i odbioru.
- Przy pracy z grą przeczytaj także konstytucję i plan tej gry. Nowe trwałe decyzje dopisuj do właściwej konstytucji, bez kopiowania artykułów do instrukcji silnika.
- Zmianę zakończ sprawdzeniem zachowania i `python3 ~/hub/serwer/hub_konstytucje.py`.
<!-- hub:harness end -->
