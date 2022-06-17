import useApi from './api'
import { ref } from 'vue'

export interface Address {
  street: string;
}
export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
}
export default async function useUserss() {
  const { response: users, request } = useApi(
    "https://jsonplaceholder.typicode.com/users"
  );
  const loaded = ref(false);
  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }
  return { users };
}