import {PublicationList} from '../components/PublicationList';
import {getAllPosts} from '../lib/posts';
import {PublicationFields} from '../types/publication';

export const metadata = {
  title: 'Zhen Wen',
  description: 'Personal website of Zhen Wen',
};

export default function HomePage() {
  const allPosts = getAllPosts([...PublicationFields, 'slug']);

  return (
    <article className="nx-prose">
      <h1>About Me</h1>

      <p>
        Hi, I&apos;m Zhen Wen, currently a fourth year Ph.D student at Zhejiang
        University, working under the supervision of{' '}
        <a href="http://www.cad.zju.edu.cn/home/chenwei/">Prof. Wei Chen</a> in
        the <a href="https://zjuvag.org">VAI Group</a>.
      </p>

      <p>
        My research interests encompass the domains of data visualization,
        quantum computing, and generative AI. I am interested in enhancing
        software engineering workflows, both in the quantum and classical
        domains, by integrating data intelligence and interactive
        visualizations.
      </p>

      <hr />

      <h2>Publications</h2>

      <PublicationList posts={allPosts} />

      <hr />

      <div>
        GitHub: <a href="https://github.com/KidsXH">@KidsXH</a>
        <br />
        Google Scholar:{' '}
        <a href="https://scholar.google.com/citations?user=aM_bqTcAAAAJ">
          @Zhen Wen
        </a>
        <br />
        Email: wenzhen@zju.edu.cn
      </div>
    </article>
  );
}
