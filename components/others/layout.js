import Footer from './footer'
import Meta from './meta'

export default function Layout({ children, html_head_info }) {
  return (
    <>
      <Meta html_head_info={html_head_info}/>
        <div className="min-h-screen">
            <main>{children}</main>
        </div>
      {/* <Footer /> */}
    </>
  )
}
