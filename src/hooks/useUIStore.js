import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store";


export const useUIStore = () => {

    const dispatch = useDispatch();

    const { isDateModalOpen } = useSelector( state => state.ui);

    const openDateModal = () => {

        dispatch( onOpenDateModal() )

    }

    const closeDateModal = () => {

        dispatch( onCloseDateModal() )

    }

    const toggleDateModel = () => {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal()
    }

    return {
        isDateModalOpen,
        openDateModal,
        closeDateModal,
        toggleDateModel,
    }

}