# Data Model: Form Modal Refactor

## Entity: User (Table Data Item)

The form captures and the table displays the following entity.

### Fields
- `id`: `number` (Primary Key, implicitly generated or passed)
- `name`: `string` (Required, full name of the user)
- `email`: `string` (Required, valid email format)
- `role`: `enum('Admin', 'User', 'Editor')` (Required)
- `status`: `enum('Active', 'Inactive', 'Offline')` (Required, derived from `active` boolean checkbox)

### Validation Rules
- `name` cannot be empty.
- `email` must be a valid email format.
- `role` must be one of the predefined roles.

### Relationships
- Belongs to the global User list (mocked via `rows` in `TablePage.jsx`).
