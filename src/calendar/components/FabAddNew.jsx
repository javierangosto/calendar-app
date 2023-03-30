import { addHours } from "date-fns";
import { useCalendarStore, useUIStore } from "../../hooks";

export const FabAddNew = () => {
    const { openDateModal } = useUIStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        
        setActiveEvent({
            bgColor: '#fafafa',
            end: addHours( new Date(), 2 ),
            notes: '',
            start: new Date(),
            title: '',
            user: {
                _id: 1,
                name: 'Javier',
            }  
        })
        openDateModal();
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickNew}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
