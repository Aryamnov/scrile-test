import * as React from 'react';
import loupe from '../images/loupe.svg'

export interface ISearchProps {
  value:string,
  handleChangeValue(e: string):void
}

export function Search (props: ISearchProps) {
  return (
    <section className="search">
      <img src={loupe} alt="search icon." className="search__icon" />
      <input className="search__input" placeholder="Search" value={props.value} onChange={(e) => props.handleChangeValue(e.target.value)}></input>
    </section>
  );
}
