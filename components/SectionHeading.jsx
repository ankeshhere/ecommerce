import React from "react";
export default function SectionHeading({title, descr}) {
    return <div className="py-4">
        <h3 className='heading'>{title}</h3>
        <p className='sub-text'>{descr}</p>
    </div>
}