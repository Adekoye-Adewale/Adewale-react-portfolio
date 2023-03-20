import React from 'react'
import './Contact.css'
import '../App.css'
import twitter from '../assets/twitter.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/LinkedIn.svg'
import link from '../assets/Link.svg'
import insta from '../assets/instagram.svg'
import gmail from '../assets/Gmail.svg'
import discord from '../assets/discord.svg'
import telegram from '../assets/telegram.svg'
import whatsapp from '../assets/whatsapp.svg'
import blog from '../assets/blog.svg'
import phone from '../assets/phone.svg'
import share from '../assets/share.svg'


export default function Contact() {
  return (
    <>
        <div className='contents' >    
            <div className='contact-wrapper'>
                <div className='contact-wrapper-line-one'>
                    <div className='group-box'>
                        <div className='box twitter'>
                            <img src={twitter} alt='twitter-logo' />
                            <h4>Twitter</h4>
                            <p>@__akanda__</p>
                            <a href='' target='_blank'>Follow Me</a>
                        </div>

                        <div className='box'>
                            <img src={github} alt='github-logo' />
                            <h4>Github</h4>
                            <p>Adisa Empire</p>
                            <a href='' target='_blank'>Follow Me</a>
                        </div>
                    </div>

                    <div className='group-box'>
                        <div className='box linkedin'>
                            <img src={linkedin} alt='LinkedIn-logo' />
                            <h4>LinkedIn</h4>
                            <p>Adekoye Adewale</p>
                            <a href='' target='_blank'>Follow Me</a>
                        </div>

                        <div className='box'>
                            <img src={link} alt='Resume-link' />
                            <h4>Resume</h4>
                            <p>Adekoye Adewale</p>
                            <a href='' target='_blank'>Follow Me</a>
                        </div>
                    </div>
                </div>

                <div className='contact-wrapper-line-two'>
                    <div className='showcase'>

                    </div>

                    <div className='contact-showcase-right'>
                        <div className='contact-showcase-line'>
                            <div className='box insta'>
                                <img src={insta} alt='intagram-logo' />
                                <h4>Instagram</h4>
                                <p>@__akanda__</p>
                                <a href='#' target='_blank'>Follow Me</a>
                            </div>

                            <div className='box gmail'>
                                <img src={gmail} alt='gmail-logo' />
                                <h4>Gmail</h4>
                                <p>Adekoye Adewale</p>
                                <a href='/' target='_blank'>Follow Me</a>
                            </div>
                        </div>

                        <div className='contact-showcase-line'>
                            <div className='box discord'>
                                <img src={discord} alt='discord-logo' />
                                <h4>Discord</h4>
                                <p>Adisa#3761</p>
                                <a href='#' target='_blank'>Follow Me</a>
                            </div>

                            <div className='box telegram'>
                                <img src={telegram} alt='telegram-logo' />
                                <h4>Telegram</h4>
                                <p>@akandaadisa</p>
                                <a href='/' target='_blank'>Follow Me</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='contact-wrapper-line-three'>
                    <div className='group-box'>
                        <div className='box whatsapp'>
                            <img src={whatsapp} alt='whatsapp-logo' />
                            <h4>WhatsApp</h4>
                            <p>Adekoye Adewale</p>
                            <a href='#' target='_blank'>Follow Me</a>
                        </div>

                        <div className='box'>
                            <img src={blog} alt='blog-icon' />
                            <h4>My Blog</h4>
                            <p></p>
                            <a href='#' target='_blank'>Follow Me</a>
                        </div>
                    </div>

                    <div className='group-box'>
                        <div className='box'>
                            <img src={phone} alt='phone-icon' />
                            <h4>Phone</h4>
                            <p>Adekoye Adewale</p>
                            <a href='#' target='_blank'>Follow Me</a>
                        </div>

                        <div className='box'>
                            <img src={share} alt='share-icon' />
                            <h4>Share</h4>
                            <p></p>
                            <a href='#' target='_blank'>Follow Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
