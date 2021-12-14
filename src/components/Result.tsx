import * as React from 'react';
import { Preloader } from './Preloader';

export interface IResultProps {
}

export function Result (props: IResultProps) {
  return (
    <section className="result">
      <Preloader />
    </section>
  );
}
