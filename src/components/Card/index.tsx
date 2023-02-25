import Link from 'next/link';
import { CardContent } from './components/CardContent';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLElement> {
  href?: string;
  id?: string;
  image?: string;
  audio?: string;
  video?: string;
  title?: string;
  subtitle?: string;
  withThumbnail?: boolean;
}

export function Card({
  href,
  id,
  image,
  audio,
  video,
  title,
  subtitle,
  withThumbnail = true,
  ...props
}: CardProps) {
  if (href) {
    return (
      <Link
        href={href}
        prefetch={false}
        className="bg-neutral-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 duration-300"
      >
        <CardContent
          id={id}
          image={image}
          video={video}
          audio={audio}
          title={title}
          subtitle={subtitle}
          withThumbnail={withThumbnail}
        />
      </Link>
    );
  }

  return (
    <div className="bg-neutral-800 rounded-xl overflow-hidden" {...props}>
      <CardContent
        id={id}
        image={image}
        video={video}
        audio={audio}
        title={title}
        subtitle={subtitle}
        withThumbnail={withThumbnail}
      />
    </div>
  );
}
