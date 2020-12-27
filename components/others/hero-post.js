import CoverImage from './cover-image'
import Link from 'next/link'
import cn from 'classnames'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
    return (
        <section>
            <div className="">
                <CoverImage title={title} src={coverImage} slug={slug} />
            </div>
            <div className="ImgesWrapToPostPage">
                <Link as={`/load/${slug}`} href={`/post/?id=${slug}`}>
                    <img
                        src={`/assets/blog/icon/jt3.png`}
                        alt={`gojsjavalinuxhtmlcss`}
                        className={cn('toPostPage')}
                    />
                </Link>
            </div>
                <style jsx>
                    {`
                        .ImgesWrapToPostPage{
                            width: 100px;
                            float: right;
                        }
                        .toPostPage{
                            width: 100%;
                            cursor: pointer;
                        }
                    `}
                </style>
        </section>
    )
}
