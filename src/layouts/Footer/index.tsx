import { Trans, t } from '@lingui/macro';

import IconCertik from '../../assets/svg/icon-certik.svg';
import IconDiscord from '../../assets/svg/icon-discord.svg';
import IconMedium from '../../assets/svg/icon-medium.svg';
import IconTelegram from '../../assets/svg/icon-telegram.svg';
import IconTwitter from '../../assets/svg/icon-twitter.svg';
import IconYoutube from '../../assets/svg/icon-youtube.svg';
import Cookies from '../../components/Cookies';

export default function Footer() {
	return (
		<footer id='footer-wrapper' className='bg-black'>
			<div className='container display-flex flex-direction-column'>
				<div>
					<div className='display-flex flex-direction-column flex-direction-md-row justify-space-between'>
						<div>
							<span
								id='hs_cos_wrapper_footer_menu'
								className='hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_menu'
								data-hs-cos-general-type='widget'
								data-hs-cos-type='menu'
							>
								<div
									id='hs_menu_wrapper_footer_menu'
									className='hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal'
									role='navigation'
									data-sitemap-name='default'
									data-menu-id='152689896526'
									aria-label='Navigation Menu'
								>
									<ul role='menu'>
										<li className='hs-menu-item hs-menu-depth-1' role='none'>
											<a
												href='https://xxxx.medium.com/'
												role='menuitem'
												target='_blank'
												rel='noopener noreferrer'
											>
												<Trans>Blog</Trans>
											</a>
										</li>
										<li className='hs-menu-item hs-menu-depth-1' role='none'>
											<a
												href='https://XXXX-2.X.io/white_paper/'
												role='menuitem'
												target='_blank'
												rel='noopener noreferrer'
											>
												<Trans>Docs</Trans>
											</a>
										</li>
										{/* <li className='hs-menu-item hs-menu-depth-1' role='none'>
											<a
												href='https://XXXX-brand-centre.framer.website/'
												role='menuitem'
												target='_blank'
												rel='noopener noreferrer'
											>
												<Trans>Press kit</Trans>
											</a>
										</li> */}
										<li className='hs-menu-item hs-menu-depth-1' role='none'>
											<a
												href='https://docs.XXXX.com/main/resources/privacy-policy'
												role='menuitem'
												target='_blank'
												rel='noopener noreferrer'
											>
												<Trans>Privacy policy</Trans>
											</a>
										</li>
										<li className='hs-menu-item hs-menu-depth-1' role='none'>
											<a
												href='https://docs.XXXX.com/main/resources/terms-of-service'
												role='menuitem'
												target='_blank'
												rel='noopener noreferrer'
											>
												<Trans>Terms of use</Trans>
											</a>
										</li>
										<li className='hs-menu-item hs-menu-depth-1' role='none'>
											<a
												href='https://docs.XXXX.com/main/XXXX-community-guidelines/overview'
												role='menuitem'
												target='_blank'
												rel='noopener noreferrer'
											>
												<Trans>Community guidelines</Trans>
											</a>
										</li>
										<li className='hs-menu-item hs-menu-depth-1' role='none'>
											&nbsp;
										</li>
										{/* <li className='hs-menu-item hs-menu-depth-1' role='none'>
											<a
												href='https://skynet.certik.com/projects/XXXX'
												role='menuitem'
												target='_blank'
												rel='noopener noreferrer'
											>
												<Trans>Audits</Trans>
											</a>
										</li> */}
									</ul>
								</div>
							</span>
						</div>
						<div className='hidden-md margin-t24 margin-b24'>
							<div className='separator-dark' />
						</div>
						<div>
							<div
								id='hs_cos_wrapper_footer_social_links'
								className='hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module'
								data-hs-cos-general-type='widget'
								data-hs-cos-type='module'
							>
								<div className='social-links-container display-flex justify-center justfiy-md-start'>
									<a
										className='social-link text-white'
										href='https://twitter.com/XXXX_global'
										target='_blank'
										rel='noreferrer'
									>
										<img src={IconTwitter} alt='twitter' />
									</a>
									<a
										className='social-link text-white'
										href='https://t.me/XXXXglobal'
										target='_blank'
										rel='noreferrer'
									>
										<img src={IconTelegram} alt='telegram' />
									</a>
									<a
										className='social-link text-white'
										href='https://discord.com/invite/XXXXglobe'
										target='_blank'
										rel='noreferrer'
									>
										<img src={IconDiscord} alt='discord' />
									</a>
									<a
										className='social-link text-white'
										href='https://www.youtube.com/channel/UC0xuO-731WtFXHygD7JC69g'
										target='_blank'
										rel='noreferrer'
									>
										<img src={IconYoutube} alt='youtube' />
									</a>
									<a
										className='social-link text-white'
										href='https://XXXXglobal.medium.com/'
										target='_blank'
										rel='noreferrer'
									>
										<img src={IconMedium} alt='medium' />
									</a>
								</div>
							</div>
							<div className='display-flex justify-center justify-md-end margin-t24 margin-md-t16'>
								<span
									id='hs_cos_wrapper_certik_image'
									className='hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image'
									data-hs-cos-general-type='widget'
									data-hs-cos-type='linked_image'
								>
									<a
										href='https://skynet.certik.com/projects/XXXX'
										target='_blank'
										id='hs-link-certik_image'
										rel='noopener noreferrer'
										style={{ borderWidth: '0px', border: '0px' }}
									>
										<img
											src={IconCertik}
											className='hs-image-widget'
											style={{
												width: '120px',
												borderWidth: '0px',
												border: '0px'
											}}
											width='120'
											alt='Certik Link'
											title='Certik Link'
										/>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='text-center copyright margin-t32 margin-md-t40'>
					<span
						id='hs_cos_wrapper_copyright'
						className='hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text'
						data-hs-cos-general-type='widget'
						data-hs-cos-type='rich_text'
					>
						<p>
							<Trans>
								Copyright © 2024 XXXX Enterprise Limited. &#34;XXXX
								?&#34; logo and logotype are trademarks of XXXX Enterprise
								Limited.
							</Trans>
						</p>
					</span>
				</div>
			</div>
			<Cookies />
		</footer>
	);
}
