import { useCompression } from 'h3-compression'

export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('render:response', async (response, { event }) => {

    const is404Error = event._path?.includes('/__nuxt_error') || event._path?.includes('statusCode=404');
    if (is404Error) return;

    if (!response.headers?.['content-type']?.startsWith('text/html')) return;

    await useCompression(event, response);
  });
});