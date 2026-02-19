import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Chip,
    TextField,
    InputAdornment,
    Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
    const [searchQuery, setSearchQuery] = useState('');

    const filteredRows = rows.filter((row) => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        const username = row.email.split('@')[0];
        return (
            String(row.id).toLowerCase().includes(query) ||
            row.name.toLowerCase().includes(query) ||
            row.email.toLowerCase().includes(query) ||
            username.toLowerCase().includes(query) ||
            row.role.toLowerCase().includes(query) ||
            row.status.toLowerCase().includes(query)
        );
    });

    return (
        <>
            <Typography variant="h4" gutterBottom>
                User Management
            </Typography>
            <Box sx={{ mb: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search across all columns..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="user table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows.length > 0 ? (
                            filteredRows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.email.split('@')[0]}</TableCell>
                                    <TableCell>{row.role}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={row.status}
                                            color={row.status === 'Active' ? 'success' : row.status === 'Inactive' ? 'warning' : 'default'}
                                            size="small"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                                    <Typography variant="body1" color="text.secondary">
                                        No results found
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
