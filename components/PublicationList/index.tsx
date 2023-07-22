import PublicationCard from "../PublicationCard";
import { inter } from '../../styles/fonts'

export const PublicationList = (props) => {
  // console.log(props);
  const {posts} = props;
  return (
    <>
      <div className='flex flex-col'>
      {/* <div className={'flex flex-col ' + inter.className}> */}
        {posts
          .map((post, i) => {
            return (
              <PublicationCard key={i} {...post} />
            );
          })}
      </div>
    </>
  );
};
