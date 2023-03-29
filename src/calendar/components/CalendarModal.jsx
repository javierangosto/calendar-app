import { addHours } from "date-fns";
import { useState } from "react";
import ReactModal from "react-modal"
import DatePicker, { registerLocale } from "react-datepicker";

import es from 'date-fns/locale/es';
registerLocale('es', es)


import "react-datepicker/dist/react-datepicker.css";
import '../css/CalendarModal.css'


export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const [formValues, setFormValues] = useState({
        title:'Javier',
        notes:'Angosto',
        start: new Date(),
        end: addHours(new Date, 2)
    });

    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value,
        })

    }

    const handleDateChange = ( event, changing ) => {

        setFormValues({
            ...formValues,
            [changing]: event,
        })

    }
    
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    };

    ReactModal.setAppElement('#root');

    const onCloseModal = () => {

        setIsOpen( false );

    }

    return (
        <ReactModal 
            isOpen={ isOpen }
            onRequestClose={ onCloseModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 500 }
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected = { formValues.start }
                        onChange = { ( event ) => handleDateChange(event, 'start') }
                        className="form-control"
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        minDate={ formValues.start }
                        selected = { formValues.end }
                        onChange = { ( event ) => handleDateChange(event, 'end') }
                        className="form-control"
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ formValues.title }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={ formValues.notes }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </ReactModal>
    )
}
