import { ReactElement } from 'react';

import { Trans } from '@lingui/macro';

export default function Cookies(): ReactElement {
	const consent = localStorage.getItem('cookiesConsent');
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (!consent) {
			setShow(true);
		}
	}, [consent]);
	const onReject = () => {
		setShow(false);
		localStorage.setItem('cookiesConsent', 'false');
	};
	const onAccept = () => {
		setShow(false);
		localStorage.setItem('cookiesConsent', 'true');
	};
	return (
		<>
			{show && (
				<div className='cookies-box'>
					<div>
						<div className='w-full md:w-[340px] text-14 md:text-18'>
							<Trans>
								Our website uses cookies. By continuing to navigate, you consent
								to our use of cookies as detailed in our
							</Trans>{' '}
							<a
								href='https://docs.xxx.com/main/resources/privacy-policy'
								target='_blank'
								rel='noreferrer'
							>
								<Trans>Cookie Policy</Trans>
							</a>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-6 mt-6'>
						<button
							type='button'
							className='cta-button cta-button-grey rounded-full justify-center sm:text-14 sm:py-2'
							onClick={onReject}
						>
							<Trans>Reject</Trans>
						</button>
						<button
							type='button'
							className='cta-button cta-button-black rounded-full justify-center sm:text-14 sm:py-2'
							onClick={onAccept}
						>
							<Trans>Accept</Trans>
						</button>
					</div>
				</div>
			)}
		</>
	);
}
