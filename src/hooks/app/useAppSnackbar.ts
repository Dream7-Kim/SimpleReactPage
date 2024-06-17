import { VariantType, useSnackbar } from 'notistack';

export function useAppSnackbar() {
	const { enqueueSnackbar } = useSnackbar();

	const showSnackbar = (message: string, variant?: VariantType) => {
		enqueueSnackbar(message, {
			variant: variant ?? 'success',
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'center'
			},
			disableWindowBlurListener: true
			// autoHideDuration: 8000
		});
	};

	return { showSnackbar };
}
