import styles from './Game.module.css';
import { useState } from 'react';
import a from '../assets/1.jpg';
import b from '../assets/2.jpg';
import c from '../assets/3.jpg';
import d from '../assets/4.jpg';
import e from '../assets/5.jpg';
import f from '../assets/6.jpg';
import back from '../assets/back0.jpg';

const cards = [
  { src: a },
  { src: b },
  { src: c },
  { src: d },
  { src: e },
  { src: f }
];

function Game() {
    const [one, setOne] = useState(null);
    const [two, setTwo] = useState(null);
    const [cardz, setCardz] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [matched, setMatched] = useState([]);

    function reset() {
        setOne(null);
        setTwo(null);
        setDisabled(false);
    }

    function clicked(card) {
        if (disabled) return;

        if (!one) {
            setOne(card);
        } else {
            setTwo(card);
            setDisabled(true);
        }
    }

    function shuffle() {
        const shuffledCards = [...cards, ...cards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));
        setCardz(shuffledCards);
        setMatched([]);
        reset();
    }

    if (one && two) {
        if (one.src === two.src) {
            setMatched((prevMatched) => [...prevMatched, one.src]);
            reset();
        } else {
            setTimeout(reset, 1000);
        }
    }

    return (
        <div>
            <button className={styles.button} onClick={shuffle}>New Game</button>
            <div className={styles.grid}>
                {cardz.map((card) => (
                    <div className={styles.card} key={card.id}>
                        <div>
                            <img
                                className={styles.back}
                                src={back}
                                onClick={() => clicked(card)}
                                alt="back"
                                style={{ display: (one === card || two === card || matched.includes(card.src)) ? 'none' : 'block' }}
                            />
                            <img
                                className={styles.front}
                                src={card.src}
                                alt="front"
                                style={{ display: (one === card || two === card || matched.includes(card.src)) ? 'block' : 'none' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Game;