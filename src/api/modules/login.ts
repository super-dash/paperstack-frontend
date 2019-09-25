import net from '../net';

export async function checkEmail(email: string) {
  return net.post('/check/email', { email });
}