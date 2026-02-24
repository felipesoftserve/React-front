# Implementation Tasks: Form Modal Refactor

**Branch**: `001-form-modal-refactor`  
**Plan**: [plan.md](./plan.md)

## Phase 1: Foundational

- [ ] T001 Remove "Form View" navigation item from `src/components/layout/Sidebar.jsx` (List item for `/form`).

## Phase 2: Add new item from table view (User Story 1, P1)

**Story Goal**: Allow users to add new items directly from the table view via a modal dialog overlay.
**Independent Test**: Can be fully tested by clicking the new "Add" action on the table view, verifying the overlay opens, filling out the form, and closing it.

### UI Preparation
- [ ] T002 Implement "Add" Button in `src/pages/TablePage.jsx` next to the search bar.
- [ ] T003 [P] Strip outer `<Paper>` and `<Typography variant="h4">` container logic from `src/pages/FormPage.jsx` so it behaves as a pure form component.
- [ ] T004 Define local state `isFormOpen` using `useState` in `src/pages/TablePage.jsx`.

### Modal Integration
- [ ] T005 Import `Dialog`, `DialogTitle`, `DialogContent`, and `FormPage` into `src/pages/TablePage.jsx`.
- [ ] T006 Implement the `<Dialog>` component in `src/pages/TablePage.jsx` tied to `isFormOpen` state.
- [ ] T007 Render `FormPage` inside `<DialogContent>` in `src/pages/TablePage.jsx`.
- [ ] T008 Pass a callback (e.g., `onSubmitSuccess={handleClose}`) from `TablePage` to `FormPage` to close the modal upon successful submission.

## Phase 3: Cleanup (MANDATORY)

- [ ] T009 Eliminar por completo las carpetas de configuración del agente (.specify/ y .agent/) del proyecto para no ensuciar el código fuente, y realizar un commit final con el mensaje: chore: clean up AI specs
