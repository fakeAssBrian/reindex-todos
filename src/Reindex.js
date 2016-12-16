import Reindex from 'reindex-js';
import Config from './config';

localStorage.setItem('REINDEX_TOKEN', Config.REINDEX_ID);

const reindex = new Reindex(Config.REINDEX_URL);

export default reindex;
