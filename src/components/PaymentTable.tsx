import { useTable, useSortBy } from "react-table";
import { SinglePayment } from "../api/payment";
import { Table, TBody, TD, TH, THead, TR } from "./Table";

const columns = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Due date',
        accessor: 'due_date',
        // @ts-ignore
        Cell: ({ cell: { value } }) => {
            return new Date(value).toDateString()
        }
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Amount',
        accessor: 'amount'
    },
    {
        Header: 'Fee',
        accessor: 'fee'
    },

]

type Props = {
    data: SinglePayment
}

export default function PaymentTable({ data }: Props) {

    const TableInstance = useTable({
        // @ts-ignore
        columns: columns,
        data: data.paymentPlan
    }, useSortBy)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = TableInstance

    return (
        <Table {...getTableProps()}>
            <THead>
                {headerGroups.map(headerGroup => (
                    <TR {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            // @ts-ignore
                            <TH {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {
                                        // @ts-ignore
                                        column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''
                                    }
                                </span>
                            </TH>
                        ))}
                    </TR>
                ))}
            </THead>
            <TBody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TR {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <TD {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </TD>
                                )
                            })}
                        </TR>
                    )
                })}
            </TBody>
        </Table>
    )
}