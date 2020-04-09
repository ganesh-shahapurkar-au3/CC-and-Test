import React from 'react'

export default function Search() {
    return (
        <div className="container d-flex justify-content-end">
            <div class="input-group col-3">
                <input type="text" class="form-control" placeholder="Search talks..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">&#10061;</span>
                </div>
            </div>
        </div>
    )
}
