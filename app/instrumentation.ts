import { registerNetlifyFormCollector } from '@netlify/next/instrumentation';

export async function register() {
  registerNetlifyFormCollector();
}
