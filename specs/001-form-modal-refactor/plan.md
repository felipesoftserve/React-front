# Implementation Plan: Form Modal Refactor

**Branch**: `001-form-modal-refactor` | **Date**: 2026-02-24 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-form-modal-refactor/spec.md`

## Summary

Refactor the navigation so that the Form View is removed from the Sidebar and integrated directly into the Table View as a Modal Dialog overlay using `@mui/material`. The internal state of the dialog will be managed locally.

## Technical Context

**Language/Version**: JavaScript (ES6+), React 18
**Primary Dependencies**: `@mui/material`, `@mui/icons-material`, `react-router-dom`
**Storage**: N/A (Mocked client-side data)
**Testing**: N/A (Manual visual testing in browser)
**Target Platform**: Web Browser
**Project Type**: React Dashboard Web App
**Performance Goals**: Instant UI response for modal open/close
**Constraints**: Must strictly use functional components, hooks, and MUI components without custom CSS.
**Scale/Scope**: 1 Modal overlay, 2 components modified.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle I (Senior Mindset)**: PASS. Clean separation of concerns.
- **Principle II (Functional Components & Hooks)**: PASS. Local state managed via `useState`.
- **Principle III (MUI Strictness)**: PASS. Using `Button`, `Dialog`, `DialogTitle`, `DialogContent`, `DialogActions`, `Box`, `AddIcon`.
- **Principle IV (Avoid Custom CSS)**: PASS. Layout achieved via MUI `sx` and standard components.
- **Principle V (Modular Architecture)**: PASS. Form logic remains modular (extracting/reusing `FormPage` code inside the Dialog).

## Project Structure

### Documentation (this feature)

```text
specs/001-form-modal-refactor/
├── plan.md              
├── research.md          
├── data-model.md        
└── tests.md (Optional)
```

### Source Code

```text
src/
├── components/
│   └── layout/
│       └── Sidebar.jsx   [MODIFIED: Remove Form View link]
├── pages/
│   ├── TablePage.jsx     [MODIFIED: Add Modal Dialog, state, Add button, import FormPage inner content]
│   └── FormPage.jsx      [MODIFIED: Refactor into pure form component suitable for DialogContent, remove page wrappers]
```

**Structure Decision**: Single React application project. No new directories created.

## Code Modifications Detailed

### 1. `src/components/layout/Sidebar.jsx`
- **Dependencies needed**: None.
- **Modifications**: Remove `{ text: 'Form View', icon: <Input />, path: '/form' }` from the `menuItems` array to hide the separate page route.

### 2. `src/pages/TablePage.jsx`
- **Dependencies needed from `@mui/material`**: `Dialog`, `DialogTitle`, `DialogContent`, `Button` and optionally `<Box>` for layout.
- **Dependencies needed from `@mui/icons-material`**: `AddIcon`.
- **Modifications**:
  - Add `[isFormOpen, setIsFormOpen] = useState(false)`.
  - Add `<Button startIcon={<AddIcon />} variant="contained" onClick={() => setIsFormOpen(true)}>Add</Button>` next to the search input.
  - Add `<Dialog open={isFormOpen} onClose={() => setIsFormOpen(false)} maxWidth="sm" fullWidth>` overlaying the table.
  - Inside the Dialog, render the form implementation.

### 3. `src/pages/FormPage.jsx`
- **Modifications**:
  - Strip the outer `Paper` and `Typography variant="h4"` so it renders cleanly inside a `DialogContent`.
  - The form component should optionally accept an `onSubmitSuccess` callback (or similar) to close the dialog in the parent when the form actually submits.

## Verification Plan

### Manual Verification
1. Start the React app using `npm run dev`.
2. Ensure the "Form View" is no longer visible in the left Sidebar tree.
3. On the "Table View", assert that an "Add" button is visible and prominently displayed.
4. Click the "Add" button and assert a MUI Dialog appears over the table containing the New User form.
5. Interact with the dialog's Backdrop (click outside) or press Escape to assert the modal closes.
6. Submit the form in the modal, and assert it behaves as expected and closes upon success.
