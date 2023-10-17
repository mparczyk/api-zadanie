type MethodType = 'post' | 'get' | 'put' | 'delete';

interface SuccessResponse<T> {
  data: T;
  status: string;
}

const createBody = (data?: object) => {
  if (!data) {
    return undefined;
  }

  return JSON.stringify(data);
};

export const request = async <T,>(method: MethodType, url: string, data?: object) => {
  const response = await fetch(url, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: createBody(data),
  });

  if (response.ok) {
    const data = (await response.json()) as SuccessResponse<T>;
    return data.data;
  }

  throw new Error();
};
