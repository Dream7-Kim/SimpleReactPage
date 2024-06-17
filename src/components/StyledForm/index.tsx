/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
import { ReactElement, ReactNode, useState } from 'react';
import {
	CountryData, // CountryIso2,
	FlagImage, // ParsedCountry,
	defaultCountries,
	parseCountry
} from 'react-international-phone';

import { Trans, t } from '@lingui/macro';
import { Field, Form, Formik } from 'formik';

import {
	cooperationsApply,
	cooperationsCompany,
	cooperationsUser
} from '../../api/api';

export function CooperationsForm(): ReactElement {
	const [isDisabled, setIsDisabled] = useState(false);
	const [selectPlaceholder, setSelectPlaceholder] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const onHandleSubmit = async values => {
		// if (values.agree !== 'agree') {
		// 	setErrorMessage('Please agree to our Terms & Conditions');
		// 	return;
		// }

		// if (values.agree === 'agree') {
		// 	setErrorMessage('');
		// }

		if (!values.email) {
			setErrorMessage('Please complete all required fields.');
			return;
		}

		if (values.email) {
			setErrorMessage('');
		}
		setIsDisabled(true);

		const data = {
			operation: 'create',
			payload: {
				Item: {
					company: values.company,
					name: values.name,
					email: values.email,
					website: values.website,
					cooperate_approach: values.cooperate_approach
				}
			}
		};
		const res = (await cooperationsCompany(data)) as {
			data: { code: number; msg: string };
		};

		if (res.data.code === 200 && res.data.msg === 'Success') {
			setSubmitSuccess(true);
			setIsDisabled(false);
		} else {
			setSubmitSuccess(false);
			setErrorMessage(res.data.msg);
			setIsDisabled(false);
		}
	};

	// const onHandleSelect = async () => {
	// 	setSelectPlaceholder(false);
	// };

	return (
		<>
			<div className='form-container bg-white  w-3/4 sm:w-full'>
				{submitSuccess ? (
					<div>
						<strong>
							<Trans>
								Thank you for submitting your proposal for cooperation. We will
								review your submission and get back to you shortly.
							</Trans>
						</strong>
					</div>
				) : (
					<Formik
						initialValues={{
							company: '',
							name: '',
							email: '',
							website: '',
							cooperate_approach: '',
							agree: ''
						}}
						onSubmit={onHandleSubmit}
					>
						<Form className='flex flex-wrap justify-center'>
							<div className='hs-form-field flex flex-col w-full lg:w-1/2 px-3'>
								<label htmlFor='company'>
									<Trans>Company name</Trans>
								</label>
								<Field
									type='text'
									className='hs-input'
									id='company'
									name='company'
									placeholder=''
								/>
							</div>
							<div className='hs-form-field flex flex-col w-full lg:w-1/2 px-3'>
								<label htmlFor='name'>
									<Trans>Your name</Trans>
								</label>
								<Field
									type='text'
									className='hs-input'
									id='name'
									name='name'
									placeholder=''
								/>
							</div>
							<div className='hs-form-field flex flex-col w-full lg:w-1/2 px-3'>
								<label htmlFor='email'>
									<span className='text-red-600'>* </span>
									<Trans>Business email</Trans>
								</label>
								<Field
									type='text'
									className='hs-input'
									id='email'
									name='email'
									placeholder=''
								/>
							</div>
							<div className='hs-form-field flex flex-col w-full lg:w-1/2 px-3'>
								<label htmlFor='website'>
									<Trans>Company website</Trans>
								</label>
								<Field
									type='text'
									className='hs-input'
									id='website'
									name='website'
									placeholder=''
								/>
							</div>
							<div className='hs-form-field flex flex-col w-full px-3'>
								<label htmlFor='cooperate_approach'>
									<Trans>How do you want to work with us?</Trans>
								</label>
								<Field
									type='text'
									className={
										selectPlaceholder
											? 'hs-input select-place-holder'
											: 'hs-input'
									}
									name='cooperate_approach'
									as='select'
									// defaultValue=''
								>
									<option value='' disabled>
										{' '}
										<Trans>Please select</Trans> ...
									</option>
									<option value='Invest in us'>
										<Trans>Invest in us</Trans>
									</option>
									<option value='Partner with us'>
										<Trans>Partner with us</Trans>
									</option>
								</Field>
							</div>
							<div className='flex flex-col px-3 mt-10 legal-consent-container w-full'>
								{/* <label className='flex justify-center items-center hs-dependent-field'>
									<Field type='radio' name='agree' value='agree' />
									<p className='ml-1.5'>
										<span>
											<Trans>
												By submitting this request you agree to our{' '}
											</Trans>
										</span>
										&nbsp;
										<a
											href='https://docs.xxxx.com/main/resources/terms-of-service'
											className='underline'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Trans>Terms & Conditions.</Trans>
										</a>
									</p>
								</label> */}
								<div className='flex flex-col-reverse items-center'>
									<div
										className={
											errorMessage
												? 'hs_error_rollup flex text-[#F1333B] visible justify-center'
												: 'invisible'
										}
									>
										<ul className='no-list hs-error-msgs inputs-list '>
											<li className='my-5'>
												<label className='hs-main-font-element '>
													{errorMessage === 'Invalid character length' && (
														<Trans>Invalid character length</Trans>
													)}
													{errorMessage === 'Invalid email' && (
														<Trans>Invalid email</Trans>
													)}
													{errorMessage === 'Already submitted' && (
														<Trans>Already submitted</Trans>
													)}
													{errorMessage === 'Invalid phone number' && (
														<Trans>Invalid phone number</Trans>
													)}
													{errorMessage ===
														'Please complete all required fields.' && (
														<Trans>Please complete all required fields.</Trans>
													)}
													{/* {errorMessage ===
														'Please agree to our Terms & Conditions' && (
														<Trans>
															Please agree to our Terms & Conditions
														</Trans>
													)} */}
												</label>
											</li>
										</ul>
									</div>
									<div className='flex flex-col justify-center items-center px-3 legal-consent-container'>
										<div className='hs_submit hs-submit mt-6'>
											<button
												type='submit'
												className='actions hs-button primary large'
												disabled={isDisabled}
											>
												<span>
													<Trans>Submit</Trans>
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</Form>
					</Formik>
				)}
			</div>
		</>
	);
}

export function InvestmentForm(): ReactElement {
	const [isDisabled, setIsDisabled] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const defaultCode = '+501';
	const onHandleSubmit = async (values: any, actions: any) => {
		if (!values.email || !values.phone || !values.name || !values.telegram) {
			setErrorMessage(t`Please complete all required fields.`);
			return;
		}

		if (values.email && values.phone && values.name && values.telegram) {
			setErrorMessage('');
		}

		setIsDisabled(true);
		const data = {
			operation: 'create',
			payload: {
				Item: {
					email: values.email,
					name: values.name,
					telephone: `${values.code}_${values.phone}`,
					telegram: values.telegram
				}
			}
		};

		const res = (await cooperationsUser(data)) as {
			data: { code: number; msg: string };
		};

		if (res.data.code === 200 && res.data.msg === 'Success') {
			setSubmitSuccess(true);
			setIsDisabled(false);
		} else {
			setIsDisabled(false);
			setSubmitSuccess(false);
			setErrorMessage(res.data.msg);
		}
	};

	return (
		<>
			<div className='form-container bg-white'>
				{submitSuccess ? (
					<div>
						<strong>
							<Trans>
								Thank you for submitting your proposal for cooperation. We will
								review your submission and get back to you shortly.
							</Trans>
						</strong>
					</div>
				) : (
					<Formik
						initialValues={{
							name: '',
							phone: '',
							code: defaultCode,
							email: '',
							telegram: ''
						}}
						onSubmit={onHandleSubmit}
					>
						<Form className='flex flex-wrap justify-center'>
							<div className='hs-form-field flex flex-col w-full'>
								<label htmlFor='name'>
									<span className='text-red-600'>* </span>
									<Trans>Name</Trans>
								</label>
								<Field
									type='text'
									className='hs-input'
									id='name'
									name='name'
									placeholder=''
								/>
							</div>
							<div className='hs-form-field flex flex-col w-full'>
								<label htmlFor='phone'>
									<span className='text-red-600'>* </span>
									<Trans>Phone</Trans>
								</label>
								<div className='flex space-x-2'>
									<Field
										type='text'
										className='hs-input select-place-holder w-2/5 lg:w-4/12'
										name='code'
										as='select'
										// defaultValue={defaultCode}
									>
										{defaultCountries.map(
											(item: CountryData, index: number) => {
												const parsedItem = parseCountry(item);
												return (
													<option value={`+${parsedItem.dialCode}`} key={index}>
														{/* <FlagImage
															iso2={parsedItem.iso2}
															size='30px'
															alt={parsedItem.name}
														/> */}
														{parsedItem.name} +{parsedItem.dialCode}
													</option>
												);
											}
										)}
									</Field>
									<Field
										type='text'
										className='hs-input w-3/5 lg:w-8/12'
										id='phone'
										name='phone'
										placeholder=''
									/>
								</div>
							</div>
							<div className='hs-form-field flex flex-col w-full '>
								<label htmlFor='email'>
									<span className='text-red-600'>* </span>
									<Trans>Email</Trans>
								</label>
								<Field
									type='text'
									className='hs-input'
									id='email'
									name='email'
									placeholder=''
								/>
							</div>
							<div className='hs-form-field flex flex-col w-full'>
								<label htmlFor='telegram'>
									<span className='text-red-600'>* </span>
									<Trans>Telegram</Trans>
								</label>
								<Field
									type='text'
									className='hs-input'
									id='telegram'
									name='telegram'
									placeholder=''
								/>
							</div>
							<div className='flex flex-col-reverse'>
								<div
									className={
										errorMessage
											? 'hs_error_rollup flex text-[#F1333B] visible justify-center'
											: 'invisible'
									}
								>
									<ul className='no-list hs-error-msgs inputs-list '>
										<li className='mb-0'>
											<label className='hs-main-font-element '>
												{errorMessage === 'Invalid character length' && (
													<Trans>Invalid character length</Trans>
												)}
												{errorMessage === 'Invalid email' && (
													<Trans>Invalid email</Trans>
												)}
												{errorMessage === 'Already submitted' && (
													<Trans>Already submitted</Trans>
												)}
												{errorMessage === 'Invalid phone number' && (
													<Trans>Invalid phone number</Trans>
												)}
												{errorMessage ===
													'Please complete all required fields.' && (
													<Trans>Please complete all required fields.</Trans>
												)}
											</label>
										</li>
									</ul>
								</div>
								<div className='flex flex-col justify-center items-center px-3 mt-6 legal-consent-container'>
									<div className='hs_submit hs-submit'>
										<button
											type='submit'
											className='actions hs-button primary large'
											disabled={isDisabled}
										>
											<span>
												<Trans>Submit</Trans>
											</span>
										</button>
									</div>
								</div>
							</div>
						</Form>
					</Formik>
				)}
			</div>
		</>
	);
}

export function DownloadAppForm(): ReactElement {
	const [isDisabled, setIsDisabled] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const defaultCode = '+501';
	const onHandleSubmit = async (values: any, actions: any) => {
		if (!values.email || !values.phone || !values.name || !values.telegram) {
			setErrorMessage(t`Please complete all required fields.`);
			return;
		}

		if (values.email && values.phone && values.name && values.telegram) {
			setErrorMessage('');
		}

		setIsDisabled(true);
		const data = {
			operation: 'create',
			payload: {
				Item: {
					email: values.email,
					name: values.name,
					telephone: `${values.code}_${values.phone}`,
					telegram: values.telegram
				}
			}
		};

		const res = (await cooperationsUser(data)) as {
			data: { code: number; msg: string };
		};

		if (res.data.code === 200 && res.data.msg === 'Success') {
			setSubmitSuccess(true);
			setIsDisabled(false);
		} else {
			setIsDisabled(false);
			setSubmitSuccess(false);
			setErrorMessage(res.data.msg);
		}
	};

	return (
		<>
			<div className='form-container bg-white'>
				{submitSuccess ? (
					<div>
						<strong>
							<Trans>
								Thank you for submitting your proposal for cooperation. We will
								review your submission and get back to you shortly.
							</Trans>
						</strong>
					</div>
				) : (
					<Formik
						initialValues={{
							firstName: '',
							lastName: '',
							phone: '',
							code: defaultCode,
							email: '',
							telegram: ''
						}}
						onSubmit={onHandleSubmit}
					>
						<Form className='flex flex-wrap justify-center'>
							<div className='hs-form-field flex flex-col w-full'>
								<label htmlFor='email'>
									<span className='text-red-600'>* </span>
									<Trans>Email</Trans>
								</label>
								<Field
									type='text'
									className='hs-input select-place-holder-code'
									id='email'
									name='email'
									placeholder=''
								/>
							</div>
							<div className='hs-form-field flex flex-col w-full'>
								<label>
									<div className='flex space-x-2'  style={{ gap: '24px' }}>
									<div className='w-3/6 lg:w-6/12'><Trans>First Name</Trans></div>
									<div className='w-3/6 lg:w-6/12'><Trans>Last Name</Trans></div>
								</div>
								</label>
								<div className='flex space-x-2 justify-between'  style={{ gap: '24px' }}>
									<Field
										type='text'
										className='hs-input select-place-holder-code w-3/6 lg:w-6/12'
										id='firstname'
										name='firstname'
										placeholder=''
									/>
									<Field
										type='text'
										className='hs-input select-place-holder-code w-3/6 lg:w-6/12'
										id='lastname'
										name='lastname'
										placeholder=''
									/>
								</div>
								
							</div>
							<div className='hs-form-field flex flex-col w-full'>
								<label htmlFor='phone'>
									<span className='text-red-600'>* </span>
									<Trans>Phone</Trans>
								</label>
								<div className='flex space-x-2'>
									<Field
										type='text'
										className='hs-input select-place-holder-code w-2/5 lg:w-2/12'
										name='code'
										as='select'
										// defaultValue={defaultCode}
									>
										{defaultCountries.map(
											(item: CountryData, index: number) => {
												const parsedItem = parseCountry(item);
												return (
													<option value={`+${parsedItem.dialCode}`} key={index}>
														+{parsedItem.dialCode}
													</option>
												);
											}
										)}
									</Field>
									<Field
										type='text'
										className='hs-input select-place-holder-code w-3/5 lg:w-10/12'
										id='phone'
										name='phone'
										placeholder=''
									/>
								</div>
							</div>
							<div className='hs-form-field flex flex-col w-full'>
								<label htmlFor='telegram'>
									<span className='text-red-600'>* </span>
									<Trans>Telegram</Trans>
								</label>
								<Field
									type='text'
									className='hs-input select-place-holder-code'
									id='telegram'
									name='telegram'
									placeholder=''
								/>
							</div>
							<div className='flex flex-col-reverse'>
								<div
									className={
										errorMessage
											? 'hs_error_rollup flex text-[#F1333B] visible justify-center'
											: 'invisible'
									}
								>
									<ul className='no-list hs-error-msgs inputs-list '>
										<li className='mb-0'>
											<label className='hs-main-font-element '>
												{errorMessage === 'Invalid character length' && (
													<Trans>Invalid character length</Trans>
												)}
												{errorMessage === 'Invalid email' && (
													<Trans>Invalid email</Trans>
												)}
												{errorMessage === 'Already submitted' && (
													<Trans>Already submitted</Trans>
												)}
												{errorMessage === 'Invalid phone number' && (
													<Trans>Invalid phone number</Trans>
												)}
												{errorMessage ===
													'Please complete all required fields.' && (
													<Trans>Please complete all required fields.</Trans>
												)}
											</label>
										</li>
									</ul>
								</div>
								<div className='flex flex-col justify-center items-center px-3 mt-6 legal-consent-container'>
									<div className='hs_submit hs-submit'>
										<button
											type='submit'
											className='actions hs-button primary large'
											disabled={isDisabled}
										>
											<span>
												<Trans>Submit</Trans>
											</span>
										</button>
									</div>
								</div>
							</div>
						</Form>
					</Formik>
				)}
			</div>
		</>
	);
}

export function ApplyForm({ meeting }: { meeting: string }): ReactElement {
	const [isDisabled, setIsDisabled] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const defaultCode = '+501';
	useEffect(() => {
		if (submitSuccess) {
			setSubmitSuccess(false);
		}
	}, [meeting]);
	const onHandleSubmit = async (values: any, actions: any) => {
		if (!values.email || !values.phone || !values.name || !values.telegram) {
			setErrorMessage(t`Please complete all required fields.`);
			return;
		}

		if (values.email && values.phone && values.name && values.telegram) {
			setErrorMessage('');
		}
		setIsDisabled(true);
		const data = {
			operation: 'create',
			payload: {
				Item: {
					email: values.email,
					name: values.name,
					telephone: `${values.code}_${values.phone}`,
					telegram: values.telegram,
					meeting
				}
			}
		};

		const res = (await cooperationsApply(data)) as {
			data: { code: number; msg: string };
		};

		if (res.data.code === 200 && res.data.msg === 'Success') {
			setSubmitSuccess(true);
			setIsDisabled(false);
		} else {
			setIsDisabled(false);
			setSubmitSuccess(false);
			setErrorMessage(res.data.msg);
		}
	};

	return (
		<>
			<div className='form-container bg-white text-black'>
				{submitSuccess ? (
					<div>
						<strong>
							<Trans>Thanks for submitting the form.</Trans>
						</strong>
					</div>
				) : (
					<Formik
						initialValues={{
							name: '',
							phone: '',
							code: defaultCode,
							email: '',
							meeting,
							telegram: ''
						}}
						onSubmit={onHandleSubmit}
					>
						<Form className='flex flex-wrap justify-center'>
							<div className='hs-form-field flex flex-col w-full'>
								<label htmlFor='name'>
									<span className='text-red-600'>* </span>
									<Trans>Name</Trans>
								</label>
								<Field
									type='text'
									className='hs-input'
									id='name'
									name='name'
									placeholder=''
									required='required'
								/>
							</div>
							<div className='hs-form-field flex flex-col w-full'>
								<label htmlFor='phone'>
									<span className='text-red-600'>* </span>
									<Trans>Phone</Trans>
								</label>
								<div className='flex space-x-2'>
									<Field
										type='text'
										className='hs-input select-place-holder w-2/5 lg:w-4/12'
										name='code'
										as='select'
										// defaultValue={defaultCode}
									>
										{defaultCountries.map(
											(item: CountryData, index: number) => {
												const parsedItem = parseCountry(item);
												return (
													<option value={`+${parsedItem.dialCode}`} key={index}>
														{/* <FlagImage
															iso2={parsedItem.iso2}
															size='30px'
															alt={parsedItem.name}
														/> */}
														{parsedItem.name} +{parsedItem.dialCode}
													</option>
												);
											}
										)}
									</Field>
									<Field
										type='text'
										className='hs-input w-3/5 lg:w-8/12'
										id='phone'
										name='phone'
										placeholder=''
										required='required'
									/>
								</div>
							</div>
							<div className='hs-form-field flex flex-col w-full '>
								<label htmlFor='email'>
									<span className='text-red-600'>* </span>
									<Trans>Email</Trans>
								</label>
								<Field
									type='text'
									className='hs-input'
									id='email'
									name='email'
									placeholder=''
									required='required'
								/>
							</div>
							<div className='hs-form-field flex flex-col w-full'>
								<label htmlFor='telegram'>
									<span className='text-red-600'>* </span>
									<Trans>Telegram</Trans>
								</label>
								<Field
									type='text'
									className='hs-input'
									id='telegram'
									name='telegram'
									placeholder=''
									required='required'
								/>
							</div>
							<div className='flex flex-col-reverse'>
								<div
									className={
										errorMessage
											? 'hs_error_rollup flex text-[#F1333B] visible justify-center'
											: 'invisible'
									}
								>
									<ul className='no-list hs-error-msgs inputs-list '>
										<li className='mb-0'>
											<label className='hs-main-font-element '>
												{errorMessage === 'Invalid character length' && (
													<Trans>Invalid character length</Trans>
												)}
												{errorMessage === 'Invalid email' && (
													<Trans>Invalid email</Trans>
												)}
												{errorMessage === 'Already submitted' && (
													<Trans>Already submitted</Trans>
												)}
												{errorMessage === 'Invalid phone number' && (
													<Trans>Invalid phone number</Trans>
												)}
												{errorMessage ===
													'Please complete all required fields.' && (
													<Trans>Please complete all required fields.</Trans>
												)}
											</label>
										</li>
									</ul>
								</div>
								<div className='flex flex-col justify-center items-center px-3 mt-6 legal-consent-container'>
									<div className='hs_submit hs-submit'>
										<button
											type='submit'
											className='actions hs-button primary large'
											disabled={isDisabled}
										>
											<span>
												<Trans>Submit</Trans>
											</span>
										</button>
									</div>
								</div>
							</div>
						</Form>
					</Formik>
				)}
			</div>
		</>
	);
}
