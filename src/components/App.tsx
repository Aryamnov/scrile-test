import React from 'react';
import { Result } from './Result';
import { Search } from './Search';
import * as api from '../utils/api';
import { SrvRecord } from 'dns';

export interface userInterface {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}

export interface usersInterface extends Array<userInterface>{}

export interface photoInterface {
  "albumId": number,
  "id": number,
  "title": string,
  "url": string,
  "thumbnailUrl": string
}

export interface photosInterface extends Array<photoInterface>{}

function App() {
  const [users, setUsers] = React.useState([] as usersInterface);
  const [photos, setPhotos] = React.useState([] as photosInterface);
  const [value, setValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    api.getUsers().then((res) => setUsers(res));
    api.getPhotos().then((res) => setPhotos(res));
  }, [])

  function handleChangeValue(e: string) {
    setValue(e);
  }

  return (
    <div className="page">
      <div className="container">
        <Search value={value} handleChangeValue={handleChangeValue} />
        <Result users={users} photos={photos} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
