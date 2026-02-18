import { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Grid,
    MenuItem,
    Checkbox,
    FormControlLabel,
    Snackbar,
    Alert
} from '@mui/material';

const roles = [
    { value: 'Admin', label: 'Admin' },
    { value: 'User', label: 'User' },
    { value: 'Editor', label: 'Editor' },
];

export default function FormPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'User',
        active: true,
    });
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'active' ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate form submission
        console.log('Form Submitted:', formData);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography variant="h4" gutterBottom>
                Add New User
            </Typography>
            <Paper sx={{ p: 4, maxWidth: 600 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="name"
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="role"
                            select
                            fullWidth
                            label="Role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            {roles.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.active}
                                    onChange={handleChange}
                                    name="active"
                                    color="primary"
                                />
                            }
                            label="Active User"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
                            <Button variant="outlined" color="secondary">
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Save User
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    User created successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
}
