import React, {Component} from 'react'

function Appointments({customers}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Appointment Time</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => {
                        return (
                            <tr>test</tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default Appointments;