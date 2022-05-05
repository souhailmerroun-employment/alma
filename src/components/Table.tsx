type ChildrenProps = {
    children: React.ReactNode
}

export const Table = ({ children, ...props }: ChildrenProps) => <table className="min-w-full" {...props}>{children}</table>
export const THead = ({ children, ...props }: ChildrenProps) => <thead className="border-b" {...props}>{children}</thead>
export const TBody = ({ children, ...props }: ChildrenProps) => <tbody {...props}>{children}</tbody>
export const TR = ({ children, ...props }: ChildrenProps) => <tr className="border-b" {...props}>{children}</tr>
export const TH = ({ children, ...props }: ChildrenProps) => <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left" {...props}>{children}</th>
export const TD = ({ children, ...props }: ChildrenProps) => <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" {...props}>{children}</td>