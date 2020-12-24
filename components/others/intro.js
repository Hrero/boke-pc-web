import { CMS_NAME } from '../../lib/constants'

export default function Intro() {
  return (
    <section className="">
      <h1 className="Blogs">
        Blog.
      </h1>
      <h4 className="">
        如果你瞄准月亮,即使迷失也是落在星河之间。”_时光{' '}
        - {CMS_NAME}.
      </h4>
      <style jsx>
          {
             `
             .Blogs{
                 margin-top: 40px;
             }
             ` 
          }
          </style>
    </section>
  )
}
