import {
	Application_Modal,
	applicationBaseState,
	setOpenModal
} from 'state/application/slice';
import { useAppDispatch, useAppSelector } from 'state/hooks';

export function useModalOpen(modal: Application_Modal): boolean {
	const { openModal } = useAppSelector(applicationBaseState);
	return openModal === modal;
}

export function useToggleModal(modal: Application_Modal): () => void {
	const open = useModalOpen(modal);
	const dispatch = useAppDispatch();
	return useCallback(
		() => dispatch(setOpenModal(open ? null : modal)),
		[dispatch, modal, open]
	);
}

export function useCreateMagicModalToggle() {
	const onToggleCreateMagic = useToggleModal(
		Application_Modal.CREATE_MAGIC_WALLET
	);
	return {
		onToggleCreateMagic
	};
}
