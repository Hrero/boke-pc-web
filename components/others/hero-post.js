import Avatar from './avatar'
import DateFormatter from './date-formatter'
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
                {/* <div>
                    <h3 className="">
                        <Link as={`/posts/${slug}`} href="/posts/[slug]">
                        <a className="hover:underline">{title}</a>
                        </Link>
                    </h3>
                    <div className="">
                        <DateFormatter dateString={date} />
                    </div>
                </div>
                <div>
                    <p className="">{excerpt}</p>
                    <Avatar name={author.name} picture={author.picture} />
                </div> */}
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
