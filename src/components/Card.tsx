import { photoInterface, userInterface } from "./App";

export interface ICardProps {
  user: userInterface;
  photo: photoInterface;
  handleChangeValue(e: string): void;
}

export function Card(props: ICardProps) {
  return (
    <div
      className="card"
      onClick={() => props.handleChangeValue(props.user.name)}
    >
      <img
        src={props.photo.thumbnailUrl}
        alt="User avatar."
        className="card__photo"
      />
      <div className="card__info">
        <p className="card__name">{props.user.name}</p>
        <span className="card__nickname">{props.user.email}</span>
      </div>
    </div>
  );
}
