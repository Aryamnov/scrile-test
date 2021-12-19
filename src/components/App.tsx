import React from "react";
import { Result } from "./Result";
import { Search } from "./Search";
import * as api from "../utils/api";

export interface userInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface usersInterface extends Array<userInterface> {}

export interface photoInterface {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface photosInterface extends Array<photoInterface> {}

function App() {
  const [users, setUsers] = React.useState([] as usersInterface);
  const [photos, setPhotos] = React.useState([] as photosInterface);
  const [value, setValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    api
      .getAllinfo()
      .then(([resUsers, resPhotos]) => {
        const arr = resUsers.filter((item: userInterface) =>
          item.name.toUpperCase().includes(value.toUpperCase())
        );
        setUsers(arr);
        setPhotos(resPhotos);
      })
      .finally(() => setIsLoading(false));
  }, [value]);

  function handleChangeValue(e: string) {
    setValue(e);
  }

  return (
    <div className="page">
      <div className="container">
        <Search value={value} handleChangeValue={handleChangeValue} />
        {value === "" ? (
          <></>
        ) : (
          <Result
            users={users}
            photos={photos}
            isLoading={isLoading}
            handleChangeValue={handleChangeValue}
          />
        )}
      </div>
    </div>
  );
}

export default App;
