import { useTable } from "react-table";
import { Link } from "react-router-dom";
import { ROUTE_PAYMENTS_SHOW } from "../pages/routes";
import { SinglePayment } from "../api/payment";

type ChildrenProps = {
    children: React.ReactNode
}

const Table = ({ children, ...props }: ChildrenProps) => <table className="min-w-full" {...props}>{children}</table>
const THead = ({ children, ...props }: ChildrenProps) => <thead className="border-b" {...props}>{children}</thead>
const TBody = ({ children, ...props }: ChildrenProps) => <thead {...props}>{children}</thead>
const TR = ({ children, ...props }: ChildrenProps) => <tr className="border-b" {...props}>{children}</tr>
const TH = ({ children, ...props }: ChildrenProps) => <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left" {...props}>{children}</th>
const TD = ({ children, ...props }: ChildrenProps) => <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" {...props}>{children}</td>

const columns = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Due date',
        accessor: 'due_date'
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
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = TableInstance

    return (
        <Table {...getTableProps()}>
            <THead>
                {headerGroups.map(headerGroup => (
                    <TR {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TH {...column.getHeaderProps()}>
                                {column.render('Header')}
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