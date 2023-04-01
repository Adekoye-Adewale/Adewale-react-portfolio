import React from 'react'
import AboutComponent from './AboutComponent';
import './About.css'

const abouttext = [
    {
        abouttitle: "Who is Adekoye Adewale",
        lefttext: "Adekoye Adewale is a self-taught software developer based in Nigeria with a passion for creating stunning websites that help businesses thrive in the digital space. With over four years of experience in website development, Adekoye has gained a reputation for being one of the most valuable assets in the web development industry.",
        righttext: "Adekoye has an unmatched commitment to his profession, always going above and beyond to make sure every project he works on is of the finest caliber. He has a good eye for detail and is always acquiring new skills to keep current.",
    }, {
        abouttitle: "What Does Adekoye Adewale Do?",
        lefttext: "Adekoye Adewale specializes in creating beautiful, functional websites that help businesses establish a strong online presence. He is well-versed in a variety of programming languages, including HTML5, CSS, and JavaScript, and is an expert in popular content management systems like WordPress and Shopify.",
        righttext: "In addition to website development, Adewale also offers graphic design services using tools like Photoshop, Corel Draw, and Canva. He is highly skilled in product and UI/UX design and uses tools like Figma and Adobe XD to create stunning designs that engage users and drive conversions.",
    }, {
        abouttitle: `Why Choose Adekoye Adewale?`,
        lefttext: `Choosing Adekoye Adewale for your website development and design needs is an excellent decision. Not only is he an expert in his field, but he is also highly collaborative and committed to providing exceptional service to every client.
                    Adewale's approach to web development is highly personalized, and he works closely with clients to understand their unique needs and goals. He is highly responsive to feedback and is always willing to go the extra mile to ensure that clients are satisfied with the final product.`,
        righttext: `Furthermore, Adewale has a history of success in leading organizations to more leads and conversions via expert website design and development. Every website he makes is optimized for search engines thanks to his knowledge of SEO, which can increase your site's exposure and traffic.
                    In conclusion, if you're looking for a web developer and designer who is dedicated, creative, and skilled, Adekoye Adewale is the perfect choice. Contact him today to discuss your website development needs and start building a stronger online presence for your business.`,
    }, 
];

export default function About() {
  return (
    <>
        <div className='contents about'>
            {abouttext.map((abouttext, index) => (
            <AboutComponent
                key={index}
                abttitle={abouttext.abouttitle} 
                lttext={abouttext.lefttext}
                rhttext={abouttext.righttext} 
            />
            )
            )}
        </div>
    </>
  )
}
