import { Payment } from "../api/payments"
import { useSortBy, useTable, useFilters } from "react-table";
import { Link } from "react-router-dom";
import { ROUTE_PAYMENTS_SHOW } from "../pages/routes";
import { StatusFilter } from "./StatusFilter";

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
        accessor: 'id',
        // @ts-ignore
        Cell: ({ cell: { value } }) => (
            <Link
                className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                to={ROUTE_PAYMENTS_SHOW(value)}
            >
                {value}
            </Link>
        ),
        disableFilters: true
    },
    {
        Header: 'Status',
        accessor: 'status',
        Filter: StatusFilter
    },
    {
        Header: 'Customer name',
        accessor: 'customer_name',
        disableFilters: true
    },
    {
        Header: 'Amount',
        accessor: 'amount',
        disableFilters: true
    },
    {
        Header: 'Merchant name',
        accessor: 'merchant.name',
        disableFilters: true
    },
    {
        Header: 'Installments count',
        accessor: 'installmentsCount',
        disableFilters: true
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
    }, useFilters, useSortBy)

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
                                        column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : null
                                    }
                                </span>
                                <span>
                                    {
                                        // @ts-ignore
                                        column.canFilter ? column.render('Filter') : null
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