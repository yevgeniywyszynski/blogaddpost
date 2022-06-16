Miniblog z 4 podstronami. 

start 

2times cd blogaddpost
npm run star

#1 Pierwsza strona 

odpowiedzialna za wyświetlenie postów, pobranych z store.js
Treść każdego posta powinna być obcięta do pierwszych 100 znaków
Link Pokaż więcej przy każdym poście powinien kierować do podstrony
wyświetlającej pełną treść posta

#2 Druga podstrona 
prezentuje szczegóły wybranego posta.
Identyfikator posta jest przekazany do strony w formie
parametru GET id

#3Trzecia podstrona 
służy do dodania posta do blogu. 
Dodawany rekord zawiera tytuł i treść posta, wprowadzone w formularzu
Dodatkowo każdy post zawieraa datę dodania (bieżącą)

#4Ostatnia 
pozwalała użytkownikowi na wybór parametrów wyświetlania bloga
Użytkownik moze wprowadzić wielkość tekstu oraz kolor tła strony
Dane z formularza zapisywane są przy pomocy Javascript do lokalnej pamięci przeglądarki – localStorage
Wybrane przez użytkownika uwzględnione na każdej podstronie minibloga
Kolor tła strony może być podany w dowolnym formacie akceptowanym przez CSS: np. red albo #FF0000.