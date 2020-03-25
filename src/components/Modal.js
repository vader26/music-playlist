import React, {useState} from "react";

function Modal({id, title, modalTitle, onUpdate}) {
    const [entityTitle, setEntityTitle] = useState(title);
    return (
        <div className="modal fade" id={'updateModal' + id} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
                        <button type="button" className="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={e => e.preventDefault()}>
                            <div className="form-group">
                                <input type="text" className="form-control" value={entityTitle} onChange={e => setEntityTitle(e.target.value)}/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => onUpdate(id, entityTitle)}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;