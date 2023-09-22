import './Table.css'

export function Table(
    {
        style, 
        styles,
        id, 
        headers, 
        items, 
        className,  
        itemsPerLine,
        children
    }
    ) {
    const convertingToLine = (accumulated, current, index) => {
        if (index % (itemsPerLine || items.length) === 0) {
            accumulated.push([current])
        } else {
            accumulated[accumulated.length - 1].push(current)
        }
        return accumulated
    }
    const create = lines => (
        lines && Array.isArray(lines) && (
            lines.every($0 => Array.isArray($0))?
            lines
            :
            lines.reduce(convertingToLine, [])
        )
    )
    return(
        <div 
            style={style} 
            id={id} 
            className={`table-container ${className? className : ''}`}>
            {children}
            <table className='table' style={styles && styles[0]}>
                <thead>
                    {
                        headers && Array.isArray(headers) && (
                            <tr key={'table-header'}>
                                {
                                    headers.map(
                                        ($0, index) => (
                                            <th 
                                                className='table-header'
                                                key={`table-header-${index}`}>
                                                {$0}
                                            </th>
                                        )
                                    )
                                }
                            </tr>
                        )
                    }
                </thead>
                <tbody>
                    {
                        items && create(items).map(
                            ($0, line) => (
                                <tr key={`table-${line}`}>
                                    {$0.map(($0, column) => <td key={`${line}-${column}`}>{$0}</td>)}
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}