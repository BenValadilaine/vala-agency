import about from './about.json';
import home from './home.json';
import work from './work.json';
import platon from './projects/platon.json';
import solane from './projects/solane.json';
import sedal from './projects/sedal.json';

const en = {
  ...about, ...home, ...work, ...platon, ...solane, ...sedal,
}

export default en;
