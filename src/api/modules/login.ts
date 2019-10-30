import net from '../net';

export async function checkEmail(email: string):Promise<{result: {emailAvailable: boolean}}> {
  return net.post('/check/email', { email });
}

export async function registerEmail(params: object):Promise<{code: number}> {
  return net.post('/register', params);
}

export async function loginUser(params: object):Promise<{code: number, message: string}> {
  return net.post('/login', params);
}
