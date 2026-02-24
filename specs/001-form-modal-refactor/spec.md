# Feature Specification: Form Modal Refactor

**Feature Branch**: `001-form-modal-refactor`  
**Created**: 2026-02-24  
**Status**: Draft  
**Input**: User description: "Refactorizar la navegación del formulario. 1) Remover el componente 'Form View' del Sidebar actual. 2) En la vista 'Table View', agregar un botón 'Add' (usando el componente Button de MUI). 3) Al hacer clic en 'Add', renderizar el 'Form View' dentro de un componente Dialog (Modal) de MUI superpuesto a la tabla. Gestionar el estado de apertura/cierre del modal (useState) a nivel del componente de la tabla."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Add new item from table view (Priority: P1)

As a user viewing the data table, I want to add new items directly from this view via a modal dialog overlay, so I don't lose my context by navigating away to a separate form page.

**Why this priority**: It is the core requirement of the refactoring request to improve the user experience by keeping the user within the context of the data table.

**Independent Test**: Can be fully tested by clicking the new "Add" action on the table view, verifying the overlay opens, filling out the form, and verifying the overlay can be successfully submitted and closed.

**Acceptance Scenarios**:

1. **Given** the user is on the main table view, **When** they click the "Add" action, **Then** a dialog overlay containing the form should appear superimposed over the table.
2. **Given** the form overlay is open, **When** the user clicks outside the modal or executes a cancel action, **Then** the dialog should close.
3. **Given** the form overlay is open, **When** the user successfully submits the form, **Then** the dialog should close and the new data should ideally be reflected in the underlying table.

---

### Edge Cases

- What happens when a user starts filling the form then unexpectedly closes the dialog (e.g., clicking the backdrop)?
- How does the system handle an extremely small viewport (mobile)? The overlay should be responsive enough to contain the form without breaking the layout.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST remove the dedicated form navigation link from the global navigation menu.
- **FR-002**: System MUST render an explicit "Add" action prominently on the main table view.
- **FR-003**: System MUST provide a dialog overlay that triggers when the "Add" action is taken.
- **FR-004**: System MUST render the form interface internally within the dialog overlay.
- **FR-005**: System MUST manage the open/closed state of the dialog locally within the table view.

### Key Entities

- **Table Data Item**: The entity displayed in the table and created by the form.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can trigger the add form without the page reloading or changing the URL path.
- **SC-002**: 100% of "Add" form interactions happen within the context of the table view.
- **SC-003**: The global navigation menu has one fewer root-level items.
