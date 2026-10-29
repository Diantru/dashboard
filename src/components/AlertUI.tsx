import { type AlertColor } from '@mui/material/Alert';
type AlertVariant = 'standart' | 'outlined' | 'filled';

interface Alertconfig {
    description: string;
    severity?: AlertColor;
    variant?: AlertVariant;
}

export default function AlertUI({ description, severity = 'success', variant = 'outlined'}: AlertConfig) {
    return (
        <Alert variant={variant} severity={severity}>{description}</Alert>
    );
}