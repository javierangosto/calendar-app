import { addHours } from "date-fns";
import { useCalendarStore } from "../../hooks";

export const FabDelete = () => {
        
    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDeleteEvent = () => {

        startDeletingEvent();

    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDeleteEvent }
            style={{
                display: hasEventSelected ? '' : 'none'
            }}
        >
            <i className="fas fa-minus"></i>
        </button>
    )
}
