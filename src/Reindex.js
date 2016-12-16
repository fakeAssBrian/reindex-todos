import Reindex from 'reindex-js';
// import Config from './config';

import URI from 'urijs';

localStorage.setItem('REINDEX_TOKEN', process.env.REINDEX_ID);

function ensureAbsoluteUrl(path) {
  if (typeof path !== 'string') return path;
  if (URI(path).is('absolute')) return path;
  return URI(path).normalize().toString();
}

const reindex = new Reindex(ensureAbsoluteUrl(process.env.REINDEX_URL));

export default reindex;
