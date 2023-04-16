import RaceCar from "./raceCar";
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from 'react';

export default function GameScene() {
  return(
    <div className={styles.gameArea}>
      <RaceCar/>
        <LineDashes speed={50}/>
      <RaceCar/>
    </div>
  )
}

interface LineDashesProps{
  speed: number
}

interface Dash {
  id: number;
  y: number;
}

function LineDashes( props: LineDashesProps ) {
  const [dashes, setDashes] = useState<Dash[]>([]);
  const {speed} = props
  useEffect(() => {
    const interval = setInterval(() => {
      setDashes(dashes => [
        ...dashes,
        {
          id: Date.now(),
          y: -100,
        },
      ]);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveDashes = () => {
      setDashes(dashes =>
        dashes.map(dash => ({
          ...dash,
          y: dash.y + speed,
        })).filter(dash => dash.y < 800)
      );
    };

    const interval = setInterval(moveDashes,40);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <>
      {dashes.map(dash => (
        <div
          key={dash.id}
          className={styles.roadLines}
          style={{ top: dash.y+'px' }}
        />
      ))}
    </>
  );
}

