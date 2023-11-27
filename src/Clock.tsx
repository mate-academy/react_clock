import { useEffect, useRef, useState } from 'react';

type Props = {
  clockName: string;
};

export const Clock: React.FC<Props> = ({ clockName }) => {
  const [today, setToday] = useState(new Date());
  const isFirstRender = useRef(true);
  const [prevPropsValue, setPrevPropsValue] = useState(clockName);

  useEffect(() => {
    const todayUpdate = window.setInterval(() => {
      setToday(new Date());
      // eslint-disable-next-line no-console
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    document.addEventListener('contextmenu', (event: MouseEvent): void => {
      event.preventDefault();
    });

    return () => {
      document.removeEventListener('contextmenu', (event: MouseEvent) => {
        event.preventDefault();
      });

      window.clearInterval(todayUpdate);
    };
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }

    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${prevPropsValue} to ${clockName}`);
    setPrevPropsValue(clockName);
  }, [clockName]);

  return (
    <div className="Clock">
      <strong className="Clock__name">
        {clockName}
      </strong>

      {' time is '}
      <span className="Clock__time">
        {today.toUTCString().slice(-12, -4)}
      </span>
    </div>
  );
};
