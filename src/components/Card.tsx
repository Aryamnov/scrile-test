import { userInfo } from 'os';
import * as React from 'react';
import { getPhotos } from '../utils/api';
import { usersInterface, photoInterface, userInterface } from './App';

export interface ICardProps {
  user:userInterface,
  photo:photoInterface
}

export function Card (props: ICardProps) {
  return (
    <div className="card">
      <img src={props.photo.thumbnailUrl} alt="User photo." className="card__photo" />
      <div className="card__info">
        <p className="card__name">{props.user.name}</p>
        <span className="card__nickname">{props.user.email}</span>
      </div>
    </div>
  );
}
