import { ReactElement, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'state/hooks';
import { setActiveLocale, settingBaseState } from 'state/setting/slice';

import CheckMark from '../../assets/svg/icon-check-mark.svg';

interface IMenuItem {
	type: string;
	title?: JSX.Element;
	link?: string;
	key?: string;
	name?: string;
}

export default function StyledMenu({
	title,
	list
}: {
	title: ReactNode;
	list: IMenuItem[];
}): ReactElement {
	const { activeLocale } = useAppSelector(settingBaseState);
	const dispatch = useAppDispatch();
	const onSelectLanguage = (
		locale: string,
		event: React.MouseEvent<HTMLElement>
	) => {
		event.preventDefault();
		dispatch(setActiveLocale(locale));
	};

	return (
		<>
			{title}
			<ul
				role='menu'
				className='hs-menu-children-wrapper py-0.75 relative -left-2  shadow shadow-transparent lg:absolute lg:left-auto lg:pl-0'
			>
				{list.map((i, k) => {
					return (
						<li key={k} className='hs-menu-item hs-menu-depth-2' role='none'>
							{i.type === 'route' && i.link !== undefined ? (
								<Link to={i.link}>
									<span className='child-trigger' />
									{i.title}
								</Link>
							) : null}
							{i.type === 'link' && (
								<a
									href={i.link}
									role='menuitem'
									target='_blank'
									rel='noopener noreferrer'
								>
									<span
										className='child-trigger'
										style={{
											minWidth: '10px !important',
											width: '20px !important'
										}}
									/>
									{i.title}
								</a>
							)}
							{i.type === 'select' && (
								// eslint-disable-next-line jsx-a11y/anchor-is-valid
								<a
									href='#'
									className='flex items-center justify-between'
									role='menuitem'
									rel='noopener noreferrer'
									onClick={e => onSelectLanguage(i.key ?? '', e)}
								>
									<div>{i.name}</div>
									{activeLocale === i.key && (
										<img src={CheckMark} alt='check mark' />
									)}
								</a>
							)}
						</li>
					);
				})}
			</ul>
		</>
	);
}
