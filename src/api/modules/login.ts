import net from '../net';

export async function checkEmail(email: string):Promise<{available: boolean}> {
  return net.post('/check/email', { email });
}

export async function registerEmail(params: object):Promise<{result: boolean}> {
  return net.post('/register', params);
}

export async function loginUser(params: object):Promise<{result: number}> {
  return net.post('/login', params);
}
