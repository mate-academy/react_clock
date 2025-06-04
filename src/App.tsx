import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Clock from './components/Clock';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [name, setName] = useState('Clock-0');

  const counterRef = useRef(0);
  const updateCountRef = useRef(0);
  const prevNameRef = useRef('Clock-0');
  const isInitialMount = useRef(true); // Dodajemy ref do śledzenia pierwszego renderowania

  // Używamy useRef do przechowywania referencji do timerów
  const nameTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const firstIntervalTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    // Używamy refów zamiast zmiennych lokalnych
    // let nameTimer: NodeJS.Timeout | undefined;
    // let firstIntervalTimeout: NodeJS.Timeout | undefined; // Dodajemy ref dla pierwszego timeoutu

    if (isVisible) {
      if (isInitialMount.current) {
        // Pierwsze renderowanie: ustawiamy początkową nazwę i uruchamiamy interwał normalnie
        setName('Clock-0');
        counterRef.current = 0;
        updateCountRef.current = 0;
        prevNameRef.current = 'Clock-0';

        nameTimerRef.current = setInterval(() => {
          // Używamy nameTimerRef.current
          const increment = updateCountRef.current === 0 ? 4900 : 3300;

          counterRef.current = (counterRef.current + increment) % 10000;
          const newName = `Clock-${counterRef.current}`;

          // eslint-disable-next-line no-console
          console.warn(`Renamed from ${prevNameRef.current} to ${newName}`);
          prevNameRef.current = newName;
          setName(newName);
          updateCountRef.current += 1;
        }, 3300);

        isInitialMount.current = false; // Oznaczamy pierwsze renderowanie jako zakończone
      } else {
        // Zegar staje się ponownie widoczny po ukryciu
        // Resetujemy liczniki dla nowej sekwencji interwałów, zaczynając od 0 dla obliczenia pierwszego przyrostu
        counterRef.current = 0;
        updateCountRef.current = 0; // Resetujemy licznik aktualizacji
        prevNameRef.current = 'Clock-0'; // Resetujemy poprzednią nazwę

        // Wykonujemy pierwszą aktualizację natychmiast (ustawia Clock-4900)
        const initialIncrement = 4900;
        const firstUpdateCounter =
          (counterRef.current + initialIncrement) % 10000;
        const firstUpdateName = `Clock-${firstUpdateCounter}`;

        setName(firstUpdateName); // Ustawiamy nazwę na 'Clock-4900' natychmiast
        counterRef.current = firstUpdateCounter; // Aktualizujemy ref licznika
        prevNameRef.current = firstUpdateName; // Aktualizujemy ref poprzedniej nazwy
        updateCountRef.current = 1; // Oznaczamy pierwszą aktualizację jako wykonaną

        // Uruchamiamy timeout dla pierwszej wiadomości console.warn po 2900ms
        firstIntervalTimeoutRef.current = setTimeout(() => {
          // Używamy firstIntervalTimeoutRef.current
          // Calculate increment and newName for the *next* update (the first one after the immediate update)
          const incrementForFirstWarn = 3300; // Zmieniona nazwa

          counterRef.current =
            (counterRef.current + incrementForFirstWarn) % 10000;
          const nameAfterFirstWarn = `Clock-${counterRef.current}`; // Zmieniona nazwa

          // eslint-disable-next-line no-console
          console.warn(
            `Renamed from ${prevNameRef.current} to ${nameAfterFirstWarn}`,
          );
          prevNameRef.current = nameAfterFirstWarn;
          setName(nameAfterFirstWarn);
          updateCountRef.current += 1;

          // Po pierwszej wiadomości console.warn, uruchamiamy interwał dla kolejnych co 3300ms
          nameTimerRef.current = setInterval(() => {
            // Używamy nameTimerRef.current
            const increment = 3300;

            counterRef.current = (counterRef.current + increment) % 10000;
            const newName = `Clock-${counterRef.current}`;

            // eslint-disable-next-line no-console
            console.warn(`Renamed from ${prevNameRef.current} to ${newName}`);
            prevNameRef.current = newName;
            setName(newName);
            updateCountRef.current += 1;
          }, 3300);
        }, 2900); // Pierwsza wiadomość console.warn po 2900ms
      }
    } else {
      // Zegar staje się ukryty, czyścimy interwały i timeouty
      if (firstIntervalTimeoutRef.current) {
        // Używamy firstIntervalTimeoutRef.current
        clearTimeout(firstIntervalTimeoutRef.current);
        firstIntervalTimeoutRef.current = undefined; // Czyścimy ref po wyczyszczeniu timera
      }

      if (nameTimerRef.current) {
        // Używamy nameTimerRef.current
        clearInterval(nameTimerRef.current);
        nameTimerRef.current = undefined; // Czyścimy ref po wyczyszczeniu timera
      }
      // Nie resetujemy liczników/nazwy tutaj.
    }

    return () => {
      // Funkcja czyszcząca przy odmontowaniu lub zmianie isVisible
      if (firstIntervalTimeoutRef.current) {
        // Używamy firstIntervalTimeoutRef.current
        clearTimeout(firstIntervalTimeoutRef.current);
        firstIntervalTimeoutRef.current = undefined; // Czyścimy ref po wyczyszczeniu timera
      }

      if (nameTimerRef.current) {
        // Używamy nameTimerRef.current
        clearInterval(nameTimerRef.current);
        nameTimerRef.current = undefined; // Czyścimy ref po wyczyszczeniu timera
      }
    };
  }, [isVisible]);

  useEffect(() => {
    const handleRightClick = (event: MouseEvent) => {
      event.preventDefault();
      setIsVisible(false);
    };

    const handleLeftClick = () => {
      setIsVisible(true);
    };

    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('click', handleLeftClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('click', handleLeftClick);
    };
  }, []);

  return <div className="App">{isVisible && <Clock name={name} />}</div>;
}

export default App;
