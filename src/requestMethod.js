import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzI0MGNhYWZlZmE5OGFiMjEzM2MwMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTA0MzQyNSwiZXhwIjoxNjU1MzAyNjI1fQ.pjCBrILTD7vXOwEF6682l5aTRUXjeDYe7irA0VpgBiQ';
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
