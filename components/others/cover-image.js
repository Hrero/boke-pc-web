import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, src, slug }) {
    return (
        <div className="coverImg">
        {slug ? (
            <Link as={`/load/${slug}`} href={`/post/?id=${slug}`}>
            <a aria-label={title}>{
                <img
                    src={src}
                    alt={`Cover Image for ${title}`}
                    className={cn('shadow-small', {
                        'hoverCover': slug,
                    })}
                />
            }</a>
            </Link>
        ) : (
            <img
                src={src}
                alt={`Cover Image for ${title}`}
                className={cn('shadow-small', {
                    'hoverCover': slug,
                })}
            />
        )}
            <style jsx>
                {`
                    .coverImg{
                        margin-top: 25px;
                    }
                    .shadow-small{
                        width: 100%;
                        box-shadow: 0px 0px 10px #cccccc;
                    }
                    .hoverCover:hover{
                        box-shadow: 0px 0px 20px #cccccc;
                        transition: all 0.5s;
                    }
                `}
            </style>
        </div>
    )
}
