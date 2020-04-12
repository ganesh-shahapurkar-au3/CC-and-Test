import React from 'react'
import Expanse from './expanse-components/Expanse'
import Total_Expanses from './expanse-components/Total_Expanses'

export default function Dashboard() {

    return (
        <div>
            Dashboard
            <Expanse />
            <Total_Expanses />
        </div>
    )
}
