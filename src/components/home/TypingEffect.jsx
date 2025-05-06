import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const TypingEffect = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome to Corneluis Charity Organization!", "Join us in making a difference!","we help people in need!","Together, we can change lives!"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el} />;
};

export default TypingEffect;