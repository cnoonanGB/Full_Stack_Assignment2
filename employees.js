import React from 'react';
import { Table } from 'semantic-ui-react'
export default function Employees() {
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Connor</Table.Cell>
                        <Table.Cell>Noonan</Table.Cell>
                        <Table.Cell>cnoon@123.com</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}