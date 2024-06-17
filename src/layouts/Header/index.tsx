/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable @typescript-eslint/no-unnecessary-condition */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';

import { Trans, t } from '@lingui/macro';

import { useAppDispatch, useAppSelector } from 'state/hooks';
import { setActiveLocale, settingBaseState } from 'state/setting/slice';

import CheckMark from '../../assets/svg/icon-check-mark.svg';
import Language from '../../assets/svg/icon-language.svg';
import Logo from '../../assets/svg/logo.svg';
import StyledMenu from '../../components/StyledMenu';
import { Page } from '../../constant';
import { LOCALES } from '../../language/locales';

export default function Header() {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);
	const [openLanguage, setOpenLanguage] = useState(false);
	const refLanguage = useRef(null);
	const { activeLocale } = useAppSelector(settingBaseState);
	const dispatch = useAppDispatch();

	const onSelectLanguage = (
		locale: string,
		event: React.MouseEvent<HTMLElement>
	) => {
		event.preventDefault();
		dispatch(setActiveLocale(locale));
	};

	const handleClickOutside = (event: { target: any }) => {
		setOpen(!open);
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (ref.current && !ref.current.contains(event.target)) {
			onClickOutside();
		}
	};

	const handleClickOutsideLanguage = (event: { target: any }) => {
		setOpenLanguage(!openLanguage);
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (refLanguage.current && !refLanguage.current.contains(event.target)) {
			onClickOutsideLanguage();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		document.addEventListener('click', handleClickOutsideLanguage, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
			document.addEventListener('click', handleClickOutsideLanguage, true);
		};
	});
	const onClickOutside = () => {
		setOpen(false);
	};
	const onClickOutsideLanguage = () => {
		setOpenLanguage(false);
	};
	const menu = [
		// {
		// 	title: (
		// 		<Trans>Global Inaugural Thought Olympics Debate Competition</Trans>
		// 	),
		// 	type: 'route',
		// 	link: Page.GlobalDebateCompetition,
		// 	children: []
		// },
		// {
		// 	title: <Trans>XXXX Three Musketeers</Trans>,
		// 	type: 'route',
		// 	link: Page.ThreeSome,
		// 	children: []
		// },
		{
			title: <Trans>Download the App</Trans>,
			type: 'route',
			link: Page.DownLoad,
			children: []
		}
		// {
		// 	title: <Trans>More Events</Trans>,
		// 	type: 'select',
		// 	link: '#',
		// 	children: [
		// 		// {
		// 		// 	title: 'Careers',
		// 		// 	type: 'route',
		// 		// 	link: Page.Careers
		// 		// },
		// 		{
		// 			title: <Trans>XXXX electronic musical festival</Trans>,
		// 			type: 'route',
		// 			link: Page.ElectronicMusicFestival
		// 		},
		// 		{
		// 			title: <Trans>XXXX hackathon</Trans>,
		// 			type: 'route',
		// 			link: Page.Hackathon
		// 		},
		// 		{
		// 			title: <Trans>2024 london XXXX AW festival</Trans>,
		// 			type: 'route',
		// 			link: Page.AIWeb3Summit
		// 		}
		// 		// {
		// 		// 	title: <Trans>Audits</Trans>,
		// 		// 	type: 'link',
		// 		// 	link: 'https://skynet.certik.com/zh-CN/projects/XXXX'
		// 		// }
		// 	]
		// }
	];
	const onHandleClickOpen = () => {
		setOpen(!open);
	};
	return (
		<header id='header-wrapper'>
			<div data-global-resource-path='o2-XXXX/templates/partials/header.html'>
				<div className='bg-black'>
					<div className='container position-relative'>
						<div className='header-container'>
							<div ref={ref}>
								<div id='mobile-menu-trigger' className={open ? 'open' : ''}>
									<span />
									<span />
									<span />
								</div>
							</div>
							<div className='header-logo-container'>
								<Link to={Page.Index}>
									<img src={Logo} alt='logo' />{' '}
								</Link>
							</div>

							<div className='header-right-container display-flex align-items-center'>
								<div className={`header-menu-container ${open ? 'open' : ''}`}>
									<span
										id='hs_cos_wrapper_header_menu'
										className='hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_menu'
										data-hs-cos-general-type='widget'
										data-hs-cos-type='menu'
									>
										<div
											id='hs_menu_wrapper_header_menu'
											className='hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal flex'
											role='navigation'
										>
											<ul role='menu' className='active-branch'>
												{menu.map((item, key) => {
													return (
														<li
															key={key}
															className={`hs-menu-item hs-menu-depth-1 ${
																item.type === 'select'
																	? ` hs-item-has-children ${
																			open ? 'open' : ''
																		} flex flex-col lg:flex-row`
																	: ''
															}`}
															role='none'
														>
															{item.type === 'route' && (
																<Link to={item.link}>{item.title}</Link>
															)}
															{item.type === 'link' && (
																<a
																	href={item.link}
																	role='menuitem'
																	target='_blank'
																	rel='noopener noreferrer'
																>
																	{item.title}
																</a>
															)}
															{item.type === 'select' && (
																<>
																	<StyledMenu
																		title={
																			<a
																				href={item.link}
																				aria-haspopup='true'
																				aria-expanded='false'
																				role='menuitem'
																			>
																				{item.title}
																			</a>
																		}
																		list={item.children}
																	/>
																	{/* <span className='child-trigger' /> */}
																</>
															)}
														</li>
													);
												})}
											</ul>
										</div>
									</span>
								</div>
								<div
									className={`header-menu-container right-0 left-auto hidden sm:block ${
										openLanguage ? 'open' : ''
									}`}
								>
									<span
										id='hs_cos_wrapper_header_menu'
										className='hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_menu'
										data-hs-cos-general-type='widget'
										data-hs-cos-type='menu'
									>
										<div
											id='hs_menu_wrapper_header_menu'
											className='hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal flex'
											role='navigation'
										>
											<ul role='menu' className='active-branch'>
												{LOCALES.map((item, key) => {
													return (
														<li
															key={key}
															className={`hs-menu-item hs-menu-depth-1 ${
																item.type === 'select'
																	? ' hs-item-has-children'
																	: ''
															}`}
															role='none'
														>
															<a
																href='#'
																className='flex items-center justify-between'
																role='menuitem'
																rel='noopener noreferrer'
																onClick={e =>
																	onSelectLanguage(item.key ?? '', e)
																}
															>
																<div>{item.name}</div>
																{activeLocale === item.key && (
																	<img src={CheckMark} alt='check mark' />
																)}
															</a>
														</li>
													);
												})}
											</ul>
										</div>
									</span>
								</div>

								{/* <div className='header-cta'>
									<a
										href='https://app.XXXX.com/'
										className='cta-button'
										target='_blank'
										rel='noreferrer'
									>
										Enter App
									</a>
								</div> */}
								<div
									ref={refLanguage}
									aria-haspopup='true'
									aria-expanded='false'
									role='menuitem'
									className='header-cta hidden sm:block'
								>
									<img
										src={Language}
										alt='language'
										className='w-7 lg:w-auto'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
