import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function DataTables() {
  return (
    <div className="w-full">
    <Table className="w-full">
        <Thead>
            <Tr>
                <Th>Event</Th>
                <Th>Date</Th>
                <Th>Location</Th>
                <Th>Organizer</Th>
            </Tr>
        </Thead>

        <Tbody className="text-center">
            <Tr>
                <Td>Tablescon</Td>
                <Td>9 April 2019</Td>
                <Td>East Annex</Td>
                <Td>Super Friends</Td>
            </Tr>
            <Tr>
                <Td>Tablescon</Td>
                <Td>9 April 2019</Td>
                <Td>East Annex</Td>
                <Td>Super Friends</Td>
            </Tr>
            <Tr>
                <Td>Tablescon</Td>
                <Td>9 April 2019</Td>
                <Td>East Annex</Td>
                <Td>Super Friends</Td>
            </Tr>
            <Tr>
                <Td>Tablescon</Td>
                <Td>9 April 2019</Td>
                <Td>East Annex</Td>
                <Td>Super Friends</Td>
            </Tr>
             <Tr>
                <Td>Tablescon</Td>
                <Td>9 April 2019</Td>
                <Td>East Annex</Td>
                <Td>Super Friends</Td>
            </Tr>
             <Tr>
                <Td>Tablescon</Td>
                <Td>9 April 2019</Td>
                <Td>East Annex</Td>
                <Td>Super Friends</Td>
            </Tr>
        </Tbody>

    </Table>
    </div>
  )
}

export default DataTables