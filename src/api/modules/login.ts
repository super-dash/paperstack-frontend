import net from '../net';

export async function checkEmail(email: string):Promise<{available: boolean}> {
  return net.post('/check/email', { email });
}

export async function registerEmail(params: object):Promise<{message: number}> {
  return net.post('/register', params);
}
