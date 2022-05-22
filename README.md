# gulp-exercises

## Zestaw narzędzi do automatyzacji i usprawnienia przepływu pracy

Gulp wykorzystuje elastyczność JavaScript do zautomatyzowania powolnych, powtarzalnych operacji, aby je skomponować w
wydajne potoki kompilacji.

## Zadania

Każde zadanie gulp jest asynchroniczną funkcją JavaScript, która albo akceptuje wywołanie zwrotne pierwszego błędu, albo
zwraca strumień, obietnicę, emiter zdarzeń, proces potomny lub element obserwowalny.

### Eksportowanie

Zadania można uznać za publiczne lub prywatne.

* Zadania publiczne są eksportowane z twojego pliku gulp, co pozwala na ich uruchamianie za pomocą polecenia gulp.
* Zadania prywatne są przeznaczone do użytku wewnętrznego, zwykle używane jako część kompozycji series() lub parallel().

Prywatne zadanie wygląda i działa jak każde inne zadanie, ale użytkownik końcowy nie może nigdy wykonać go niezależnie.
Aby zarejestrować zadanie publicznie, wyeksportuj je z pliku gulpfile.

```javascript
const {series} = require('gulp');

// Funkcja `clean` nie jest eksportowana, więc można ją uznać za zadanie prywatne. 
// Nadal może być używany w kompozycji `series()`.
function clean(done) {
  console.log('Zdanie czyszczenia');
  done()
}

// Funkcja `build` jest eksportowana, więc jest publiczna i można ją uruchomić za pomocą polecenia `gulp`. 
// Może być również użyta w kompozycji `series()`.

function build(done) {
  console.log('Zadanie build')
  done()
}

exports.build = build
export.
default = series(clean, build)

```

W przeszłości używano `task()` do rejestrowania funkcji jako zadań. Chociaż ten interfejs API jest nadal dostępny,
eksportowanie powinno być podstawowym mechanizmem rejestracji, z wyjątkiem skrajnych przypadków, w których eksportowanie
nie będzie działać.

### Komponuj zadania

Gulp udostępnia dwie metody - `series()` i `parallel()` - umożliwiające składanie poszczególnych zadań w
większe operacje. Obie metody akceptują dowolną liczbę funkcji zadań lub złożonych operacji. `series()` i `parallel()`
mogą być zagnieżdżone w sobie na dowolnej głębokości.

Aby zadania zostały wykonane w odpowiedniej kolejności, użyj metody `series()`.



