# Refactoring Research

## Decision 1: Form Component Integration
**Decision**: Extract the core form logic from `src/pages/FormPage.jsx` to be rendered directly inside the `<DialogContent>` of `src/pages/TablePage.jsx`.
**Rationale**: The current `FormPage` includes page-level wrappers (`<Paper>`, `<Typography variant="h4">`) that are redundant and stylistically conflicting when placed inside a Modal Dialog. Removing these page wrappers or conditionally rendering them improves modularity (Principle V: Modular Code Architecture).
**Alternatives considered**: 
- Displaying `FormPage` as-is inside the Dialog: Rejected due to double padding, redundant titles, and nested container styles.
- Creating a completely new component: Rejected because we want to reuse the existing form fields and state logic.

## Decision 2: Dialog State Management
**Decision**: The `open` state of the modal will be managed entirely within `src/pages/TablePage.jsx` using `useState`.
**Rationale**: This fulfills the exact requirement provided by the user ("Gestionar el estado de apertura/cierre del modal (useState) a nivel del componente de la tabla."). It keeps the Modal overlay tightly coupled with the Table View, preventing unnecessary global state.
**Alternatives considered**:
- Global Context/Zustand: Overkill for a simple modal.
- URL-driven (e.g., `?form=open`): Good for deep linking, but unnecessary given the simplicity of the requirement.
