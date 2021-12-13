import * as React from 'react';
import loupe from '../images/loupe.svg'

export interface ISearchProps {
}

export function Search (props: ISearchProps) {
  return (
    <section className="search">
      <img src={loupe} alt="search icon." className="search__icon" />
      <input className="search__input"></input>
    </section>
  );
}
