import { Preloader } from "./Preloader";
import { Card } from "./Card";
import { usersInterface, photoInterface, photosInterface } from "./App";

export interface IResultProps {
  users: usersInterface;
  photos: photosInterface;
  isLoading: boolean;
  handleChangeValue(e: string): void;
}

export function Result(props: IResultProps) {
  return (
    <section className="result">
      {props.isLoading ? (
        <Preloader />
      ) : (
        <div className="result__container">
          {props.users.map((user) => {
            let photo = props.photos.find(
              (item: { id: number }) => item.id === user.id
            );
            return (
              <Card
                user={user}
                key={user.id}
                photo={photo as photoInterface}
                handleChangeValue={props.handleChangeValue}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
