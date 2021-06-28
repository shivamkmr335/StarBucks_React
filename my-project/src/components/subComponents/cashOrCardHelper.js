import React from 'react'

export default function CashOrCardHelper(props) {
    return (
        <div className="flex py-6 w-full">
            <img className="w-28 " src={props.imgLink} alt=""></img>
            <div className="ml-4">
                <h3 className="font-semibold">{props.hval}</h3>
                <p className="mt-3 text-sm">{props.children}</p>
            </div>
        </div>
    )
}
