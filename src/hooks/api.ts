import { ref } from "vue";

export default function useApi(url: RequestInfo, option?: RequestInit | undefined) {
  const response = ref()
  const request = async () => {
    const res = await fetch(url, option)
    const data = await res.json()
    response.value = data
  }
  return {
    response,
    request
  }
}
