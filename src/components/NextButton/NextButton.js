import React from 'react'

function next(e) {
    console.log(e);
}
function NextButton(params) {

    return <div>
        <button onClick={next}>Next</button>
    </div>
}

export {NextButton};