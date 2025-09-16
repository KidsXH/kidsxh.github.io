import {Publication} from '../../types/publication';
import Image from 'next/image';

type PublicationCardProps = Publication & {
  content: string;
  slug: string;
};

export const PublicationCard = (props: PublicationCardProps) => {
  const imageFile = `/assets/${props.slug}/coverImage.png`;
  return (
    <div className='flex xl:flex-row flex-col shadow-md mb-1 p-2'>
      <div className='flex xl:w-[200px] w-full items-center mr-2'>
        <Image
          className='w-full xl:w-[192px] xl:h-[108px] max-h-none m-auto'
          src={`${imageFile}`}
          width={1920}
          height={1080}
          alt={props.title}
        ></Image>
      </div>
      <div className='flex flex-col pt-2 xl:px-0 px-2 max-w-[800px]'>
        <div className='font-bold mb-2'>{props.title}</div>
        <div className='flex flex-row mb-2'>
          {props.authorsPrev && props.authorsPost ? (
            <div className='text-sm pr-1'>
              {props.authorsPrev + ', '}
              <span className='font-bold'>
                {'Zhen Wen'}
                {props.coFirstAuthor && <span className='text-xs text-neutral-800 ml-0.5'>*</span>}
                {', '}
              </span>
              {props.authorsPost}
            </div>
          ) : props.authorsPost ? (
            <div className='text-sm pr-1'>
              <span className='font-bold'>
                {'Zhen Wen'}
                {props.coFirstAuthor && <span className='text-xs text-neutral-800 ml-0.5'>*</span>}
                {', '}
              </span>
              {props.authorsPost}
            </div>
          ) : props.authorsPrev ? (
            <div className='text-sm pr-1'>
              {props.authorsPrev + ', '}
              <span className='font-bold'>
                {'Zhen Wen'}
                {props.coFirstAuthor && <span className='text-xs text-neutral-800 ml-0.5'>*</span>}
              </span>
            </div>
          ) : (
            <div className='text-sm pr-1'>
              <span className='font-bold'>
                {'Zhen Wen'}
                {props.coFirstAuthor && <span className='text-xs text-neutral-800 ml-0.5'>*</span>}
              </span>
            </div>
          )}
        </div>
        <div className='flex flex-row items-center mb-2'>
          <span className='text-sm font-bold mr-2 border-solid border-gray-300 border-r-2 pr-2'>
            {props.venueAbbr}
          </span>
          {props.published ? (
            <>
              <span className='text-sm pr-1'>{`${props.venue}, ${props.year}`}</span>
            </>
          ) : (
            <>
              <span className='text-sm pr-1'>{props.venue}</span>
            </>
          )}
          {
            props.award ? (
              <span className='text-sm font-bold pr-1'>{`🏅${props.award}`}</span>
            ) : null
          }
        </div>
        {props.coFirstAuthor && (
          <div className='text-xs text-neutral-800'>
            * Co-first author
          </div>
        )}
        {/*<div className='flex flex-row py-1'>*/}
        {/*  <Button slug={props.slug} file={'full-paper.pdf'}>PDF</Button>*/}
        {/*  <Button>Cite</Button>*/}
        {/*  <Button>Video</Button>*/}
        {/*  <UrlButton url={props.code}>Code</UrlButton>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

const Button = (props) => {
  return (
    <div className='text-sm border leading-6 px-2 mr-2 rounded-md hover:cursor-pointer  hover:shadow-md hover:bg-slate-500 hover:text-slate-100 transition-colors select-none nx-not-prose'>
      <a href={`/assets/${props.slug}/${props.file}`}>{props.children}</a>
    </div>
  );
};

const UrlButton = (props) => {
  return (
    <div className='text-sm border leading-6 px-2 mr-2 rounded-md hover:cursor-pointer  hover:shadow-md hover:bg-slate-500 hover:text-slate-100 transition-colors select-none nx-not-prose'>
      <a href={`${props.url}`}>{props.children}</a>
    </div>
  );
};

export default PublicationCard;
