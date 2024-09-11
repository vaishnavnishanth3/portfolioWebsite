import React from 'react'
import Info from "../../info.json"


export default function Contact() {
    return (
      <div>
            Contact:
            <div>
                <li><a href={Info.github}>Github</a></li>
                <li><a href={Info.linkedIn}>LinkedIn</a></li>
            </div>
      </div>
    )
}