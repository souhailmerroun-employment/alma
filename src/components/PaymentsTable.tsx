import { Payment } from "../api/payments"
import { useTable } from "react-table";

const columns = [
    {
        Header: 'Id',
        accessor: 'id',
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Customer name',
        accessor: 'customer_name'
    },
    {
        Header: 'Amount',
        accessor: 'amount'
    },
    {
        Header: 'Merchant name',
        accessor: 'merchant.name'
    },
    {
        Header: 'Installments count',
        accessor: 'installmentsCount'
    },
]

type Props = {
    data: Payment[]
}

export default function PaymentsTable({ data }: Props) {

    const TableInstance = useTable({
        // @ts-ignore
        columns: columns,
        data: data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = TableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}