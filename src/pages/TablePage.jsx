import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Chip
} from '@mui/material';

const createData = (id, name, email, role, status) => {
    return { id, name, email, role, status };
};

const rows = [
    createData(1, 'John Doe', 'john@example.com', 'Admin', 'Active'),
    createData(2, 'Jane Smith', 'jane@example.com', 'User', 'Inactive'),
    createData(3, 'Alice Johnson', 'alice@example.com', 'Editor', 'Active'),
    createData(4, 'Bob Brown', 'bob@example.com', 'User', 'Active'),
    createData(5, 'Charlie Davis', 'charlie@example.com', 'Admin', 'Offline'),
];

export default function TablePage() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                User Management
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="user table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.role}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.status}
                                        color={row.status === 'Active' ? 'success' : row.status === 'Inactive' ? 'warning' : 'default'}
                                        size="small"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
